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
                        extensionId.current = `${manifest.publisher}.${manifest.name}`;
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
        });
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
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "file", onChange: handleFileChange }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Information" }), readyToInstall && !manifest ? ((0, jsx_runtime_1.jsx)("h2", Object.assign({ style: { color: 'red' } }, { children: "Invalid extension package" }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [readyToInstall && ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: saveFiles, disabled: installed }, { children: installed ? 'Installed' : 'Install' }))), readyToInstall && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: manifest.name }), (0, jsx_runtime_1.jsxs)("div", { children: ["Version: ", (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { color: 'blue' } }, { children: manifest.version }))] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Publisher: ", (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { color: 'blue' } }, { children: manifest.publisher }))] }), (0, jsx_runtime_1.jsx)("h3", { children: manifest.description }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, Object.assign({ remarkPlugins: [remark_gfm_1.default] }, { children: doc })) })] }))] }))] })] }));
};
exports.default = FileReadWrite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRXcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3J1aWcvc3JjL2V4dGVuc2lvbi9wYWdlL2NvbXBvbmVudC9GaWxlUmVhZFdyaXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RCxpQ0FBMEQ7QUFDMUQsa0RBQTBDO0FBQzFDLGlGQUFzRTtBQUN0RSw0REFBa0M7QUFDbEMsb0VBQTBDO0FBRTFDLGdGQUF1RDtBQUN2RCx5REFBMEQ7QUFtQjFELE1BQU0sYUFBYSxHQUFhLEdBQUcsRUFBRTtJQUNuQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFZLElBQVcsQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLE1BQU0sYUFBYSxHQUFHLHNCQUFZLENBQUMsR0FBRyxDQUFDLDBCQUFjLENBQUMsQ0FBQTtJQUN0RCxNQUFNLE1BQU0sR0FBRyxJQUFBLGNBQU0sRUFBVSxFQUFFLENBQUMsQ0FBQTtJQUNsQyxNQUFNLEtBQUssR0FBRyxJQUFBLGNBQU0sRUFBVSxFQUFFLENBQUMsQ0FBQTtJQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGNBQU0sRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUM5QixNQUFNLFdBQVcsR0FBRyxJQUFJLHdCQUFjLEVBQUUsQ0FBQTtJQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFLENB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QUcsR0FBRyxJQUFpQixHQUM1RCxJQUNGLENBQ1AsSUFDQSxDQUNKLElBQ0csSUFDRixDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSlNaaXAsIHsgSlNaaXBPYmplY3QgfSBmcm9tICdqc3ppcCdcbmltcG9ydCBGaWxlTWFuYWdlbWVudCwgeyBUYWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9GaWxlTWFuYWdlbWVudCdcbmltcG9ydCByZW1hcmtHZm0gZnJvbSAncmVtYXJrLWdmbSdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uUG9vbCdcbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IEVYVEVOU0lPTl9QT09MIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcblxudHlwZSBEYXRhVHlwZSA9ICdzdHJpbmcnIHwgJ2Jsb2InXG5cbmludGVyZmFjZSBJTWFuaWZlc3Qge1xuICBuYW1lOiBzdHJpbmdcbiAgdmVyc2lvbjogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgcHVibGlzaGVyOiBzdHJpbmdcbiAgY2xhc3NuYW1lOiBzdHJpbmdcbiAgZG9jOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElGaWxlIHtcbiAgbmFtZTogc3RyaW5nXG4gIGNvbnRlbnQ6IGFueVxuICBleHRlbnNpb246IHN0cmluZ1xufVxuXG5jb25zdCBGaWxlUmVhZFdyaXRlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3JlYWR5VG9JbnN0YWxsLCBzZXRSZWFkeVRvSW5zdGFsbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2luc3RhbGxlZCwgc2V0SW5zdGFsbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbWFuaWZlc3QsIHNldE1hbmlmZXN0XSA9IHVzZVN0YXRlPElNYW5pZmVzdD4obnVsbCBhcyBhbnkpXG4gIGNvbnN0IFtkb2MsIHNldERvY10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgZXh0ZW5zaW9uUG9vbCA9IFNoYXJlZENvbmZpZy5nZXQoRVhURU5TSU9OX1BPT0wpXG4gIGNvbnN0IGFzc2V0cyA9IHVzZVJlZjxJRmlsZVtdPihbXSlcbiAgY29uc3QgbWV0YXMgPSB1c2VSZWY8SUZpbGVbXT4oW10pXG4gIGNvbnN0IGV4dGVuc2lvbklkID0gdXNlUmVmKCcnKVxuICBjb25zdCBmaWxlTWFuYWdlciA9IG5ldyBGaWxlTWFuYWdlbWVudCgpXG4gIGZpbGVNYW5hZ2VyLm9wZW4oKVxuICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGZpbGVNYW5hZ2VyLmNsb3NlKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZXNldCgpXG4gICAgICBhd2FpdCB6aXAubG9hZEFzeW5jKGZpbGUpXG4gICAgICB6aXAuZm9yRWFjaChhc3luYyAocmVsYXRpdmVQYXRoLCB6aXBFbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIXppcEVudHJ5LmRpcikge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB6aXBFbnRyeS5uYW1lXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRDb250ZW50KHppcEVudHJ5KVxuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGdldEV4dGVuc2lvbihuYW1lKVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ21hbmlmZXN0Lmpzb24nKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoY29udGVudCBhcyBzdHJpbmcpXG4gICAgICAgICAgICBzZXRNYW5pZmVzdChtYW5pZmVzdClcbiAgICAgICAgICAgIGV4dGVuc2lvbklkLmN1cnJlbnQgPSBgJHttYW5pZmVzdC5wdWJsaXNoZXJ9LiR7bWFuaWZlc3QubmFtZX1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ1JFQURNRS5tZCcpIHtcbiAgICAgICAgICAgIHNldERvYyhjb250ZW50IGFzIHN0cmluZylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnZXh0ZW5zaW9uLXN0b3JlJykpIHtcbiAgICAgICAgICAgIGFzc2V0cy5jdXJyZW50LnB1c2goeyBuYW1lLCBjb250ZW50LCBleHRlbnNpb24gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0YXMuY3VycmVudC5wdXNoKHsgbmFtZSwgY29udGVudCwgZXh0ZW5zaW9uIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2V0UmVhZHlUb0luc3RhbGwodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzYXZlRmlsZXMgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGFzc2V0cy5jdXJyZW50KSB7XG4gICAgICBpZiAoZmlsZS5jb250ZW50KSB7XG4gICAgICAgIGZpbGVNYW5hZ2VyLnNhdmVGaWxlKGZpbGUubmFtZSwgZmlsZS5jb250ZW50LCBmaWxlLmV4dGVuc2lvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbWV0YXMuY3VycmVudCkge1xuICAgICAgaWYgKGZpbGUuY29udGVudCkge1xuICAgICAgICBmaWxlTWFuYWdlci5zYXZlRmlsZShgJHtleHRlbnNpb25JZC5jdXJyZW50fS8ke2ZpbGUubmFtZX1gLCBmaWxlLmNvbnRlbnQsIGZpbGUuZXh0ZW5zaW9uLCBUYWJsZS5NRVRBUylcbiAgICAgIH1cbiAgICB9XG5cbiAgICA7KGV4dGVuc2lvblBvb2wgYXMgRXh0ZW5zaW9uUG9vbCk/Lm1hbnVhbEluc3RhbGwoe1xuICAgICAgaWQ6IGV4dGVuc2lvbklkLmN1cnJlbnQsXG4gICAgICByYXRpbmc6IDAsXG4gICAgICBkb3dubG9hZHM6IDAsXG4gICAgICBidWlsdGluOiBmYWxzZSxcbiAgICB9KVxuXG4gICAgc2V0SW5zdGFsbGVkKHRydWUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZWFkQ29udGVudCh6aXBFbnRyeTogSlNaaXBPYmplY3QpIHtcbiAgICBjb25zdCBkYXRhVHlwZTogRGF0YVR5cGUgPSBnZXREYXRhVHlwZSh6aXBFbnRyeS5uYW1lKVxuICAgIHJldHVybiBhd2FpdCB6aXAuZmlsZSh6aXBFbnRyeS5uYW1lKT8uYXN5bmMoZGF0YVR5cGUpXG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBzZXRJbnN0YWxsZWQoZmFsc2UpXG4gICAgc2V0UmVhZHlUb0luc3RhbGwoZmFsc2UpXG4gICAgc2V0TWFuaWZlc3QobnVsbCBhcyBhbnkpXG4gICAgc2V0RG9jKCcnKVxuICAgIGFzc2V0cy5jdXJyZW50ID0gW11cbiAgICBtZXRhcy5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGNvbnN0IGdldEV4dGVuc2lvbiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpIHx8ICcnXG4gIH1cblxuICBjb25zdCBnZXREYXRhVHlwZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKG5hbWUpXG4gICAgbGV0IGRhdGFUeXBlOiBzdHJpbmdcblxuICAgIC8vIERldGVybWluZSBkYXRhIHR5cGUgYmFzZWQgb24gZmlsZSBleHRlbnNpb25cbiAgICBzd2l0Y2ggKGZpbGVFeHRlbnNpb24pIHtcbiAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICBjYXNlICdodG1sJzpcbiAgICAgIGNhc2UgJ2Nzcyc6XG4gICAgICBjYXNlICdqcyc6XG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgIGRhdGFUeXBlID0gJ3N0cmluZycgLy8gVGV4dCBkYXRhXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICBjYXNlICdqcGVnJzpcbiAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICBjYXNlICdnaWYnOlxuICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgZGF0YVR5cGUgPSAnYmxvYicgLy8gSW1hZ2UgZGF0YVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkYXRhVHlwZSA9ICdzdHJpbmcnXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFUeXBlIGFzIERhdGFUeXBlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5JbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIHtyZWFkeVRvSW5zdGFsbCAmJiAhbWFuaWZlc3QgPyAoXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5JbnZhbGlkIGV4dGVuc2lvbiBwYWNrYWdlPC9oMj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRmlsZXN9IGRpc2FibGVkPXtpbnN0YWxsZWR9PlxuICAgICAgICAgICAgICAgIHtpbnN0YWxsZWQgPyAnSW5zdGFsbGVkJyA6ICdJbnN0YWxsJ31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e21hbmlmZXN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgVmVyc2lvbjogPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fT57bWFuaWZlc3QudmVyc2lvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFB1Ymxpc2hlcjogPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fT57bWFuaWZlc3QucHVibGlzaGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+e21hbmlmZXN0LmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHJlbWFya1BsdWdpbnM9e1tyZW1hcmtHZm1dfT57ZG9jfTwvUmVhY3RNYXJrZG93bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVJlYWRXcml0ZVxuIl19