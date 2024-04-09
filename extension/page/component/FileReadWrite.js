"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const jszip_1 = __importDefault(require("jszip"));
const FileManagement_1 = __importStar(require("../../../common/FileManagement"));
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const SharedConfig_1 = __importDefault(require("../../../common/SharedConfig"));
const constants_1 = require("../../../common/constants");
const FileReadWrite = () => {
    const [readyToInstall, setReadyToInstall] = (0, react_1.useState)(false);
    const [alreadyInstalled, setAlreadyInstalled] = (0, react_1.useState)(false);
    const [installed, setInstalled] = (0, react_1.useState)(false);
    const [manifest, setManifest] = (0, react_1.useState)(null);
    const [doc, setDoc] = (0, react_1.useState)('');
    const extensionPool = SharedConfig_1.default.get(constants_1.EXTENSION_POOL);
    const assets = (0, react_1.useRef)([]);
    const metas = (0, react_1.useRef)([]);
    const extensionId = (0, react_1.useRef)('');
    const fileManager = new FileManagement_1.default();
    fileManager.open();
    const zip = new jszip_1.default();
    (0, react_1.useEffect)(() => {
        return fileManager.close();
    }, []);
    const handleFileChange = (event) => __awaiter(void 0, void 0, void 0, function* () {
        const file = event.target.files && event.target.files[0];
        if (file) {
            reset();
            yield zip.loadAsync(file);
            zip.forEach((relativePath, zipEntry) => __awaiter(void 0, void 0, void 0, function* () {
                if (!zipEntry.dir) {
                    const name = zipEntry.name;
                    const content = yield readContent(zipEntry);
                    const extension = getExtension(name);
                    if (name == 'manifest.json') {
                        const manifest = JSON.parse(content);
                        setManifest(manifest);
                        const id = `${manifest.publisher}.${manifest.name}`;
                        extensionId.current = id;
                        if (extensionPool.isInstalled(id)) {
                            setAlreadyInstalled(true);
                        }
                    }
                    if (name == 'README.md') {
                        setDoc(content);
                    }
                    if (name.includes('extension-store')) {
                        assets.current.push({ name, content, extension });
                    }
                    else {
                        metas.current.push({ name, content, extension });
                    }
                }
            }));
            setReadyToInstall(true);
        }
    });
    const saveFiles = () => {
        for (const file of assets.current) {
            if (file.content) {
                fileManager.saveFile(file.name, file.content, file.extension);
            }
        }
        for (const file of metas.current) {
            if (file.content) {
                fileManager.saveFile(`${extensionId.current}/${file.name}`, file.content, file.extension, FileManagement_1.Table.METAS);
            }
        }
        ;
        extensionPool === null || extensionPool === void 0 ? void 0 : extensionPool.manualInstall({
            id: extensionId.current,
            rating: 0,
            downloads: 0,
            builtin: false,
        }, !alreadyInstalled);
        setInstalled(true);
    };
    function readContent(zipEntry) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const dataType = getDataType(zipEntry.name);
            return yield ((_a = zip.file(zipEntry.name)) === null || _a === void 0 ? void 0 : _a.async(dataType));
        });
    }
    function reset() {
        setInstalled(false);
        setReadyToInstall(false);
        setAlreadyInstalled(false);
        setManifest(null);
        setDoc('');
        assets.current = [];
        metas.current = [];
    }
    const getExtension = (name) => {
        var _a;
        return ((_a = name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
    };
    const getDataType = (name) => {
        const fileExtension = getExtension(name);
        let dataType;
        // Determine data type based on file extension
        switch (fileExtension) {
            case 'txt':
            case 'html':
            case 'css':
            case 'js':
            case 'json':
            case 'svg':
                dataType = 'string'; // Text data
                break;
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'pdf':
                dataType = 'blob'; // Image data
                break;
            default:
                dataType = 'string';
                break;
        }
        return dataType;
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "file", onChange: handleFileChange }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Information" }), readyToInstall && !manifest ? ((0, jsx_runtime_1.jsx)("h2", Object.assign({ style: { color: 'red' } }, { children: "Invalid extension package" }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [readyToInstall && ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: saveFiles, disabled: installed }, { children: installed ? 'Installed' : alreadyInstalled ? 'ReInstall' : 'Install' }))), readyToInstall && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: manifest.name }), (0, jsx_runtime_1.jsxs)("div", { children: ["Version: ", (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { color: 'blue' } }, { children: manifest.version }))] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Publisher: ", (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { color: 'blue' } }, { children: manifest.publisher }))] }), (0, jsx_runtime_1.jsx)("h3", { children: manifest.description }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, Object.assign({ remarkPlugins: [remark_gfm_1.default] }, { children: doc })) })] }))] }))] })] }));
};
exports.default = FileReadWrite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRXcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3J1aWcvc3JjL2V4dGVuc2lvbi9wYWdlL2NvbXBvbmVudC9GaWxlUmVhZFdyaXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RCxpQ0FBMEQ7QUFDMUQsa0RBQTBDO0FBQzFDLGlGQUFzRTtBQUN0RSw0REFBa0M7QUFDbEMsb0VBQTBDO0FBRTFDLGdGQUF1RDtBQUN2RCx5REFBMEQ7QUFtQjFELE1BQU0sYUFBYSxHQUFhLEdBQUcsRUFBRTtJQUNuQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUNqRCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBWSxJQUFXLENBQUMsQ0FBQTtJQUNoRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNsQyxNQUFNLGFBQWEsR0FBa0Isc0JBQVksQ0FBQyxHQUFHLENBQUMsMEJBQWMsQ0FBa0IsQ0FBQTtJQUN0RixNQUFNLE1BQU0sR0FBRyxJQUFBLGNBQU0sRUFBVSxFQUFFLENBQUMsQ0FBQTtJQUNsQyxNQUFNLEtBQUssR0FBRyxJQUFBLGNBQU0sRUFBVSxFQUFFLENBQUMsQ0FBQTtJQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGNBQU0sRUFBQyxFQUFFLENB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Q0FDRSx5Q0FBSyxRQUFRLENBQUMsSUFBSSxHQUFNLEVBQ3hCLHlEQUNXLCtDQUFNLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsZ0JBQUcsUUFBUSxDQUFDLE9BQU8sSUFBUSxJQUM5RCxFQUNOLDJEQUNhLCtDQUFNLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsZ0JBQUcsUUFBUSxDQUFDLFNBQVMsSUFBUSxJQUNsRSxFQUNOLHlDQUFLLFFBQVEsQ0FBQyxXQUFXLEdBQU0sRUFDL0IsMENBQ0UsdUJBQUMsd0JBQWEsa0JBQUMsYUFBYSxFQUFFLENBQUMsb0JBQVMsQ0FBQyxnQkFBRyxHQUFHLElBQWlCLEdBQzVELElBQ0YsQ0FDUCxJQUNBLENBQ0osSUFDRyxJQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBKU1ppcCwgeyBKU1ppcE9iamVjdCB9IGZyb20gJ2pzemlwJ1xuaW1wb3J0IEZpbGVNYW5hZ2VtZW50LCB7IFRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0ZpbGVNYW5hZ2VtZW50J1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tICdyZW1hcmstZ2ZtJ1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgRXh0ZW5zaW9uUG9vbCBmcm9tICcuLi8uLi9FeHRlbnNpb25Qb29sJ1xuaW1wb3J0IFNoYXJlZENvbmZpZyBmcm9tICcuLi8uLi8uLi9jb21tb24vU2hhcmVkQ29uZmlnJ1xuaW1wb3J0IHsgRVhURU5TSU9OX1BPT0wgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuXG50eXBlIERhdGFUeXBlID0gJ3N0cmluZycgfCAnYmxvYidcblxuaW50ZXJmYWNlIElNYW5pZmVzdCB7XG4gIG5hbWU6IHN0cmluZ1xuICB2ZXJzaW9uOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBwdWJsaXNoZXI6IHN0cmluZ1xuICBjbGFzc25hbWU6IHN0cmluZ1xuICBkb2M6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSUZpbGUge1xuICBuYW1lOiBzdHJpbmdcbiAgY29udGVudDogYW55XG4gIGV4dGVuc2lvbjogc3RyaW5nXG59XG5cbmNvbnN0IEZpbGVSZWFkV3JpdGU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcmVhZHlUb0luc3RhbGwsIHNldFJlYWR5VG9JbnN0YWxsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbYWxyZWFkeUluc3RhbGxlZCwgc2V0QWxyZWFkeUluc3RhbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2luc3RhbGxlZCwgc2V0SW5zdGFsbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbWFuaWZlc3QsIHNldE1hbmlmZXN0XSA9IHVzZVN0YXRlPElNYW5pZmVzdD4obnVsbCBhcyBhbnkpXG4gIGNvbnN0IFtkb2MsIHNldERvY10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgZXh0ZW5zaW9uUG9vbDogRXh0ZW5zaW9uUG9vbCA9IFNoYXJlZENvbmZpZy5nZXQoRVhURU5TSU9OX1BPT0wpIGFzIEV4dGVuc2lvblBvb2xcbiAgY29uc3QgYXNzZXRzID0gdXNlUmVmPElGaWxlW10+KFtdKVxuICBjb25zdCBtZXRhcyA9IHVzZVJlZjxJRmlsZVtdPihbXSlcbiAgY29uc3QgZXh0ZW5zaW9uSWQgPSB1c2VSZWYoJycpXG4gIGNvbnN0IGZpbGVNYW5hZ2VyID0gbmV3IEZpbGVNYW5hZ2VtZW50KClcbiAgZmlsZU1hbmFnZXIub3BlbigpXG4gIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gZmlsZU1hbmFnZXIuY2xvc2UoKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXMgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHJlc2V0KClcbiAgICAgIGF3YWl0IHppcC5sb2FkQXN5bmMoZmlsZSlcbiAgICAgIHppcC5mb3JFYWNoKGFzeW5jIChyZWxhdGl2ZVBhdGgsIHppcEVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghemlwRW50cnkuZGlyKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHppcEVudHJ5Lm5hbWVcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZENvbnRlbnQoemlwRW50cnkpXG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKG5hbWUpXG5cbiAgICAgICAgICBpZiAobmFtZSA9PSAnbWFuaWZlc3QuanNvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gSlNPTi5wYXJzZShjb250ZW50IGFzIHN0cmluZylcbiAgICAgICAgICAgIHNldE1hbmlmZXN0KG1hbmlmZXN0KVxuICAgICAgICAgICAgY29uc3QgaWQgPSBgJHttYW5pZmVzdC5wdWJsaXNoZXJ9LiR7bWFuaWZlc3QubmFtZX1gXG4gICAgICAgICAgICBleHRlbnNpb25JZC5jdXJyZW50ID0gaWRcbiAgICAgICAgICAgIGlmIChleHRlbnNpb25Qb29sLmlzSW5zdGFsbGVkKGlkKSkge1xuICAgICAgICAgICAgICBzZXRBbHJlYWR5SW5zdGFsbGVkKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ1JFQURNRS5tZCcpIHtcbiAgICAgICAgICAgIHNldERvYyhjb250ZW50IGFzIHN0cmluZylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnZXh0ZW5zaW9uLXN0b3JlJykpIHtcbiAgICAgICAgICAgIGFzc2V0cy5jdXJyZW50LnB1c2goeyBuYW1lLCBjb250ZW50LCBleHRlbnNpb24gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0YXMuY3VycmVudC5wdXNoKHsgbmFtZSwgY29udGVudCwgZXh0ZW5zaW9uIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2V0UmVhZHlUb0luc3RhbGwodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzYXZlRmlsZXMgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGFzc2V0cy5jdXJyZW50KSB7XG4gICAgICBpZiAoZmlsZS5jb250ZW50KSB7XG4gICAgICAgIGZpbGVNYW5hZ2VyLnNhdmVGaWxlKGZpbGUubmFtZSwgZmlsZS5jb250ZW50LCBmaWxlLmV4dGVuc2lvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbWV0YXMuY3VycmVudCkge1xuICAgICAgaWYgKGZpbGUuY29udGVudCkge1xuICAgICAgICBmaWxlTWFuYWdlci5zYXZlRmlsZShgJHtleHRlbnNpb25JZC5jdXJyZW50fS8ke2ZpbGUubmFtZX1gLCBmaWxlLmNvbnRlbnQsIGZpbGUuZXh0ZW5zaW9uLCBUYWJsZS5NRVRBUylcbiAgICAgIH1cbiAgICB9XG5cbiAgICA7KGV4dGVuc2lvblBvb2wgYXMgRXh0ZW5zaW9uUG9vbCk/Lm1hbnVhbEluc3RhbGwoXG4gICAgICB7XG4gICAgICAgIGlkOiBleHRlbnNpb25JZC5jdXJyZW50LFxuICAgICAgICByYXRpbmc6IDAsXG4gICAgICAgIGRvd25sb2FkczogMCxcbiAgICAgICAgYnVpbHRpbjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgIWFscmVhZHlJbnN0YWxsZWQsXG4gICAgKVxuXG4gICAgc2V0SW5zdGFsbGVkKHRydWUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZWFkQ29udGVudCh6aXBFbnRyeTogSlNaaXBPYmplY3QpIHtcbiAgICBjb25zdCBkYXRhVHlwZTogRGF0YVR5cGUgPSBnZXREYXRhVHlwZSh6aXBFbnRyeS5uYW1lKVxuICAgIHJldHVybiBhd2FpdCB6aXAuZmlsZSh6aXBFbnRyeS5uYW1lKT8uYXN5bmMoZGF0YVR5cGUpXG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBzZXRJbnN0YWxsZWQoZmFsc2UpXG4gICAgc2V0UmVhZHlUb0luc3RhbGwoZmFsc2UpXG4gICAgc2V0QWxyZWFkeUluc3RhbGxlZChmYWxzZSlcbiAgICBzZXRNYW5pZmVzdChudWxsIGFzIGFueSlcbiAgICBzZXREb2MoJycpXG4gICAgYXNzZXRzLmN1cnJlbnQgPSBbXVxuICAgIG1ldGFzLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgY29uc3QgZ2V0RXh0ZW5zaW9uID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCkgfHwgJydcbiAgfVxuXG4gIGNvbnN0IGdldERhdGFUeXBlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBnZXRFeHRlbnNpb24obmFtZSlcbiAgICBsZXQgZGF0YVR5cGU6IHN0cmluZ1xuXG4gICAgLy8gRGV0ZXJtaW5lIGRhdGEgdHlwZSBiYXNlZCBvbiBmaWxlIGV4dGVuc2lvblxuICAgIHN3aXRjaCAoZmlsZUV4dGVuc2lvbikge1xuICAgICAgY2FzZSAndHh0JzpcbiAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgY2FzZSAnY3NzJzpcbiAgICAgIGNhc2UgJ2pzJzpcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgZGF0YVR5cGUgPSAnc3RyaW5nJyAvLyBUZXh0IGRhdGFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnanBnJzpcbiAgICAgIGNhc2UgJ2pwZWcnOlxuICAgICAgY2FzZSAncG5nJzpcbiAgICAgIGNhc2UgJ2dpZic6XG4gICAgICBjYXNlICdwZGYnOlxuICAgICAgICBkYXRhVHlwZSA9ICdibG9iJyAvLyBJbWFnZSBkYXRhXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRhdGFUeXBlID0gJ3N0cmluZydcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVR5cGUgYXMgRGF0YVR5cGVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmICFtYW5pZmVzdCA/IChcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkludmFsaWQgZXh0ZW5zaW9uIHBhY2thZ2U8L2gyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7cmVhZHlUb0luc3RhbGwgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVGaWxlc30gZGlzYWJsZWQ9e2luc3RhbGxlZH0+XG4gICAgICAgICAgICAgICAge2luc3RhbGxlZCA/ICdJbnN0YWxsZWQnIDogYWxyZWFkeUluc3RhbGxlZCA/ICdSZUluc3RhbGwnIDogJ0luc3RhbGwnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cmVhZHlUb0luc3RhbGwgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57bWFuaWZlc3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBWZXJzaW9uOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PnttYW5pZmVzdC52ZXJzaW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgUHVibGlzaGVyOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PnttYW5pZmVzdC5wdWJsaXNoZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMz57bWFuaWZlc3QuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19Pntkb2N9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlUmVhZFdyaXRlXG4iXX0=