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
const ExtensionPool_1 = __importDefault(require("../../ExtensionPool"));
const FileReadWrite = () => {
    const [readyToInstall, setReadyToInstall] = (0, react_1.useState)(false);
    const [installed, setInstalled] = (0, react_1.useState)(false);
    const [manifest, setManifest] = (0, react_1.useState)(null);
    const [doc, setDoc] = (0, react_1.useState)('');
    const extensionPool = new ExtensionPool_1.default();
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
        extensionPool.manualInstall({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRXcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlbnNpb24vcGFnZS9jb21wb25lbnQvRmlsZVJlYWRXcml0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsaUNBQTBEO0FBQzFELGtEQUEwQztBQUMxQyxpRkFBc0U7QUFDdEUsNERBQWtDO0FBQ2xDLG9FQUEwQztBQUMxQyx3RUFBK0M7QUFtQi9DLE1BQU0sYUFBYSxHQUFhLEdBQUcsRUFBRTtJQUNuQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFZLElBQVcsQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLE1BQU0sYUFBYSxHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFBO0lBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUEsY0FBTSxFQUFVLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUEsY0FBTSxFQUFVLEVBQUUsQ0FBQyxDQUFBO0lBQ2pDLE1BQU0sV0FBVyxHQUFHLElBQUEsY0FBTSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFBO0lBQ3hDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLGVBQUss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QyxDQUFBO0FBRUQsa0JBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEpTWmlwLCB7IEpTWmlwT2JqZWN0IH0gZnJvbSAnanN6aXAnXG5pbXBvcnQgRmlsZU1hbmFnZW1lbnQsIHsgVGFibGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vRmlsZU1hbmFnZW1lbnQnXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gJ3JlbWFyay1nZm0nXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBFeHRlbnNpb25Qb29sIGZyb20gJy4uLy4uL0V4dGVuc2lvblBvb2wnXG5cbnR5cGUgRGF0YVR5cGUgPSAnc3RyaW5nJyB8ICdibG9iJ1xuXG5pbnRlcmZhY2UgSU1hbmlmZXN0IHtcbiAgbmFtZTogc3RyaW5nXG4gIHZlcnNpb246IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHB1Ymxpc2hlcjogc3RyaW5nXG4gIGNsYXNzbmFtZTogc3RyaW5nXG4gIGRvYzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJRmlsZSB7XG4gIG5hbWU6IHN0cmluZ1xuICBjb250ZW50OiBhbnlcbiAgZXh0ZW5zaW9uOiBzdHJpbmdcbn1cblxuY29uc3QgRmlsZVJlYWRXcml0ZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZWFkeVRvSW5zdGFsbCwgc2V0UmVhZHlUb0luc3RhbGxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnN0YWxsZWQsIHNldEluc3RhbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21hbmlmZXN0LCBzZXRNYW5pZmVzdF0gPSB1c2VTdGF0ZTxJTWFuaWZlc3Q+KG51bGwgYXMgYW55KVxuICBjb25zdCBbZG9jLCBzZXREb2NdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGV4dGVuc2lvblBvb2wgPSBuZXcgRXh0ZW5zaW9uUG9vbCgpXG4gIGNvbnN0IGFzc2V0cyA9IHVzZVJlZjxJRmlsZVtdPihbXSlcbiAgY29uc3QgbWV0YXMgPSB1c2VSZWY8SUZpbGVbXT4oW10pXG4gIGNvbnN0IGV4dGVuc2lvbklkID0gdXNlUmVmKCcnKVxuICBjb25zdCBmaWxlTWFuYWdlciA9IG5ldyBGaWxlTWFuYWdlbWVudCgpXG4gIGZpbGVNYW5hZ2VyLm9wZW4oKVxuICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGZpbGVNYW5hZ2VyLmNsb3NlKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZXNldCgpXG4gICAgICBhd2FpdCB6aXAubG9hZEFzeW5jKGZpbGUpXG4gICAgICB6aXAuZm9yRWFjaChhc3luYyAocmVsYXRpdmVQYXRoLCB6aXBFbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIXppcEVudHJ5LmRpcikge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB6aXBFbnRyeS5uYW1lXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRDb250ZW50KHppcEVudHJ5KVxuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGdldEV4dGVuc2lvbihuYW1lKVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ21hbmlmZXN0Lmpzb24nKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoY29udGVudCBhcyBzdHJpbmcpXG4gICAgICAgICAgICBzZXRNYW5pZmVzdChtYW5pZmVzdClcbiAgICAgICAgICAgIGV4dGVuc2lvbklkLmN1cnJlbnQgPSBgJHttYW5pZmVzdC5wdWJsaXNoZXJ9LiR7bWFuaWZlc3QubmFtZX1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ1JFQURNRS5tZCcpIHtcbiAgICAgICAgICAgIHNldERvYyhjb250ZW50IGFzIHN0cmluZylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnZXh0ZW5zaW9uLXN0b3JlJykpIHtcbiAgICAgICAgICAgIGFzc2V0cy5jdXJyZW50LnB1c2goeyBuYW1lLCBjb250ZW50LCBleHRlbnNpb24gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0YXMuY3VycmVudC5wdXNoKHsgbmFtZSwgY29udGVudCwgZXh0ZW5zaW9uIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2V0UmVhZHlUb0luc3RhbGwodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzYXZlRmlsZXMgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGFzc2V0cy5jdXJyZW50KSB7XG4gICAgICBpZiAoZmlsZS5jb250ZW50KSB7XG4gICAgICAgIGZpbGVNYW5hZ2VyLnNhdmVGaWxlKGZpbGUubmFtZSwgZmlsZS5jb250ZW50LCBmaWxlLmV4dGVuc2lvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbWV0YXMuY3VycmVudCkge1xuICAgICAgaWYgKGZpbGUuY29udGVudCkge1xuICAgICAgICBmaWxlTWFuYWdlci5zYXZlRmlsZShgJHtleHRlbnNpb25JZC5jdXJyZW50fS8ke2ZpbGUubmFtZX1gLCBmaWxlLmNvbnRlbnQsIGZpbGUuZXh0ZW5zaW9uLCBUYWJsZS5NRVRBUylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlbnNpb25Qb29sLm1hbnVhbEluc3RhbGwoe1xuICAgICAgaWQ6IGV4dGVuc2lvbklkLmN1cnJlbnQsXG4gICAgICByYXRpbmc6IDAsXG4gICAgICBkb3dubG9hZHM6IDAsXG4gICAgICBidWlsdGluOiBmYWxzZSxcbiAgICB9KVxuXG4gICAgc2V0SW5zdGFsbGVkKHRydWUpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZWFkQ29udGVudCh6aXBFbnRyeTogSlNaaXBPYmplY3QpIHtcbiAgICBjb25zdCBkYXRhVHlwZTogRGF0YVR5cGUgPSBnZXREYXRhVHlwZSh6aXBFbnRyeS5uYW1lKVxuICAgIHJldHVybiBhd2FpdCB6aXAuZmlsZSh6aXBFbnRyeS5uYW1lKT8uYXN5bmMoZGF0YVR5cGUpXG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBzZXRJbnN0YWxsZWQoZmFsc2UpXG4gICAgc2V0UmVhZHlUb0luc3RhbGwoZmFsc2UpXG4gICAgc2V0TWFuaWZlc3QobnVsbCBhcyBhbnkpXG4gICAgc2V0RG9jKCcnKVxuICAgIGFzc2V0cy5jdXJyZW50ID0gW11cbiAgICBtZXRhcy5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGNvbnN0IGdldEV4dGVuc2lvbiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpIHx8ICcnXG4gIH1cblxuICBjb25zdCBnZXREYXRhVHlwZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKG5hbWUpXG4gICAgbGV0IGRhdGFUeXBlOiBzdHJpbmdcblxuICAgIC8vIERldGVybWluZSBkYXRhIHR5cGUgYmFzZWQgb24gZmlsZSBleHRlbnNpb25cbiAgICBzd2l0Y2ggKGZpbGVFeHRlbnNpb24pIHtcbiAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICBjYXNlICdodG1sJzpcbiAgICAgIGNhc2UgJ2Nzcyc6XG4gICAgICBjYXNlICdqcyc6XG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgIGRhdGFUeXBlID0gJ3N0cmluZycgLy8gVGV4dCBkYXRhXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICBjYXNlICdqcGVnJzpcbiAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICBjYXNlICdnaWYnOlxuICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgZGF0YVR5cGUgPSAnYmxvYicgLy8gSW1hZ2UgZGF0YVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkYXRhVHlwZSA9ICdzdHJpbmcnXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFUeXBlIGFzIERhdGFUeXBlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5JbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIHtyZWFkeVRvSW5zdGFsbCAmJiAhbWFuaWZlc3QgPyAoXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5JbnZhbGlkIGV4dGVuc2lvbiBwYWNrYWdlPC9oMj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRmlsZXN9IGRpc2FibGVkPXtpbnN0YWxsZWR9PlxuICAgICAgICAgICAgICAgIHtpbnN0YWxsZWQgPyAnSW5zdGFsbGVkJyA6ICdJbnN0YWxsJ31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e21hbmlmZXN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgVmVyc2lvbjogPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fT57bWFuaWZlc3QudmVyc2lvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFB1Ymxpc2hlcjogPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fT57bWFuaWZlc3QucHVibGlzaGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDM+e21hbmlmZXN0LmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHJlbWFya1BsdWdpbnM9e1tyZW1hcmtHZm1dfT57ZG9jfTwvUmVhY3RNYXJrZG93bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVJlYWRXcml0ZVxuIl19