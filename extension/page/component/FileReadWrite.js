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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRXcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3J1aWcvc3JjL2V4dGVuc2lvbi9wYWdlL2NvbXBvbmVudC9GaWxlUmVhZFdyaXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RCxpQ0FBMEQ7QUFDMUQsa0RBQTBDO0FBQzFDLGlGQUFzRTtBQUN0RSw0REFBa0M7QUFDbEMsb0VBQTBDO0FBQzFDLHdFQUErQztBQW1CL0MsTUFBTSxhQUFhLEdBQWEsR0FBRyxFQUFFO0lBQ25DLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0QsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQVksSUFBVyxDQUFDLENBQUE7SUFDaEUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDbEMsTUFBTSxhQUFhLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUE7SUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBQSxjQUFNLEVBQVUsRUFBRSxDQUFDLENBQUE7SUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBQSxjQUFNLEVBQVUsRUFBRSxDQUFDLENBQUE7SUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBQSxjQUFNLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUE7SUFDeEMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xCLE1BQU0sR0FBRyxHQUFHLElBQUks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SCxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSlNaaXAsIHsgSlNaaXBPYmplY3QgfSBmcm9tICdqc3ppcCdcbmltcG9ydCBGaWxlTWFuYWdlbWVudCwgeyBUYWJsZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9GaWxlTWFuYWdlbWVudCdcbmltcG9ydCByZW1hcmtHZm0gZnJvbSAncmVtYXJrLWdmbSdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vRXh0ZW5zaW9uUG9vbCdcblxudHlwZSBEYXRhVHlwZSA9ICdzdHJpbmcnIHwgJ2Jsb2InXG5cbmludGVyZmFjZSBJTWFuaWZlc3Qge1xuICBuYW1lOiBzdHJpbmdcbiAgdmVyc2lvbjogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgcHVibGlzaGVyOiBzdHJpbmdcbiAgY2xhc3NuYW1lOiBzdHJpbmdcbiAgZG9jOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElGaWxlIHtcbiAgbmFtZTogc3RyaW5nXG4gIGNvbnRlbnQ6IGFueVxuICBleHRlbnNpb246IHN0cmluZ1xufVxuXG5jb25zdCBGaWxlUmVhZFdyaXRlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3JlYWR5VG9JbnN0YWxsLCBzZXRSZWFkeVRvSW5zdGFsbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2luc3RhbGxlZCwgc2V0SW5zdGFsbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbWFuaWZlc3QsIHNldE1hbmlmZXN0XSA9IHVzZVN0YXRlPElNYW5pZmVzdD4obnVsbCBhcyBhbnkpXG4gIGNvbnN0IFtkb2MsIHNldERvY10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgZXh0ZW5zaW9uUG9vbCA9IG5ldyBFeHRlbnNpb25Qb29sKClcbiAgY29uc3QgYXNzZXRzID0gdXNlUmVmPElGaWxlW10+KFtdKVxuICBjb25zdCBtZXRhcyA9IHVzZVJlZjxJRmlsZVtdPihbXSlcbiAgY29uc3QgZXh0ZW5zaW9uSWQgPSB1c2VSZWYoJycpXG4gIGNvbnN0IGZpbGVNYW5hZ2VyID0gbmV3IEZpbGVNYW5hZ2VtZW50KClcbiAgZmlsZU1hbmFnZXIub3BlbigpXG4gIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gZmlsZU1hbmFnZXIuY2xvc2UoKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXMgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHJlc2V0KClcbiAgICAgIGF3YWl0IHppcC5sb2FkQXN5bmMoZmlsZSlcbiAgICAgIHppcC5mb3JFYWNoKGFzeW5jIChyZWxhdGl2ZVBhdGgsIHppcEVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghemlwRW50cnkuZGlyKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHppcEVudHJ5Lm5hbWVcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZENvbnRlbnQoemlwRW50cnkpXG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZ2V0RXh0ZW5zaW9uKG5hbWUpXG5cbiAgICAgICAgICBpZiAobmFtZSA9PSAnbWFuaWZlc3QuanNvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gSlNPTi5wYXJzZShjb250ZW50IGFzIHN0cmluZylcbiAgICAgICAgICAgIHNldE1hbmlmZXN0KG1hbmlmZXN0KVxuICAgICAgICAgICAgZXh0ZW5zaW9uSWQuY3VycmVudCA9IGAke21hbmlmZXN0LnB1Ymxpc2hlcn0uJHttYW5pZmVzdC5uYW1lfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmFtZSA9PSAnUkVBRE1FLm1kJykge1xuICAgICAgICAgICAgc2V0RG9jKGNvbnRlbnQgYXMgc3RyaW5nKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCdleHRlbnNpb24tc3RvcmUnKSkge1xuICAgICAgICAgICAgYXNzZXRzLmN1cnJlbnQucHVzaCh7IG5hbWUsIGNvbnRlbnQsIGV4dGVuc2lvbiB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXRhcy5jdXJyZW50LnB1c2goeyBuYW1lLCBjb250ZW50LCBleHRlbnNpb24gfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzZXRSZWFkeVRvSW5zdGFsbCh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNhdmVGaWxlcyA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgYXNzZXRzLmN1cnJlbnQpIHtcbiAgICAgIGlmIChmaWxlLmNvbnRlbnQpIHtcbiAgICAgICAgZmlsZU1hbmFnZXIuc2F2ZUZpbGUoZmlsZS5uYW1lLCBmaWxlLmNvbnRlbnQsIGZpbGUuZXh0ZW5zaW9uKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBtZXRhcy5jdXJyZW50KSB7XG4gICAgICBpZiAoZmlsZS5jb250ZW50KSB7XG4gICAgICAgIGZpbGVNYW5hZ2VyLnNhdmVGaWxlKGAke2V4dGVuc2lvbklkLmN1cnJlbnR9LyR7ZmlsZS5uYW1lfWAsIGZpbGUuY29udGVudCwgZmlsZS5leHRlbnNpb24sIFRhYmxlLk1FVEFTKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV4dGVuc2lvblBvb2wubWFudWFsSW5zdGFsbCh7XG4gICAgICBpZDogZXh0ZW5zaW9uSWQuY3VycmVudCxcbiAgICAgIHJhdGluZzogMCxcbiAgICAgIGRvd25sb2FkczogMCxcbiAgICAgIGJ1aWx0aW46IGZhbHNlLFxuICAgIH0pXG5cbiAgICBzZXRJbnN0YWxsZWQodHJ1ZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlYWRDb250ZW50KHppcEVudHJ5OiBKU1ppcE9iamVjdCkge1xuICAgIGNvbnN0IGRhdGFUeXBlOiBEYXRhVHlwZSA9IGdldERhdGFUeXBlKHppcEVudHJ5Lm5hbWUpXG4gICAgcmV0dXJuIGF3YWl0IHppcC5maWxlKHppcEVudHJ5Lm5hbWUpPy5hc3luYyhkYXRhVHlwZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNldEluc3RhbGxlZChmYWxzZSlcbiAgICBzZXRSZWFkeVRvSW5zdGFsbChmYWxzZSlcbiAgICBzZXRNYW5pZmVzdChudWxsIGFzIGFueSlcbiAgICBzZXREb2MoJycpXG4gICAgYXNzZXRzLmN1cnJlbnQgPSBbXVxuICAgIG1ldGFzLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgY29uc3QgZ2V0RXh0ZW5zaW9uID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCkgfHwgJydcbiAgfVxuXG4gIGNvbnN0IGdldERhdGFUeXBlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBnZXRFeHRlbnNpb24obmFtZSlcbiAgICBsZXQgZGF0YVR5cGU6IHN0cmluZ1xuXG4gICAgLy8gRGV0ZXJtaW5lIGRhdGEgdHlwZSBiYXNlZCBvbiBmaWxlIGV4dGVuc2lvblxuICAgIHN3aXRjaCAoZmlsZUV4dGVuc2lvbikge1xuICAgICAgY2FzZSAndHh0JzpcbiAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgY2FzZSAnY3NzJzpcbiAgICAgIGNhc2UgJ2pzJzpcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgZGF0YVR5cGUgPSAnc3RyaW5nJyAvLyBUZXh0IGRhdGFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnanBnJzpcbiAgICAgIGNhc2UgJ2pwZWcnOlxuICAgICAgY2FzZSAncG5nJzpcbiAgICAgIGNhc2UgJ2dpZic6XG4gICAgICBjYXNlICdwZGYnOlxuICAgICAgICBkYXRhVHlwZSA9ICdibG9iJyAvLyBJbWFnZSBkYXRhXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRhdGFUeXBlID0gJ3N0cmluZydcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVR5cGUgYXMgRGF0YVR5cGVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmICFtYW5pZmVzdCA/IChcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkludmFsaWQgZXh0ZW5zaW9uIHBhY2thZ2U8L2gyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7cmVhZHlUb0luc3RhbGwgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVGaWxlc30gZGlzYWJsZWQ9e2luc3RhbGxlZH0+XG4gICAgICAgICAgICAgICAge2luc3RhbGxlZCA/ICdJbnN0YWxsZWQnIDogJ0luc3RhbGwnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cmVhZHlUb0luc3RhbGwgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57bWFuaWZlc3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBWZXJzaW9uOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PnttYW5pZmVzdC52ZXJzaW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgUHVibGlzaGVyOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PnttYW5pZmVzdC5wdWJsaXNoZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMz57bWFuaWZlc3QuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19Pntkb2N9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlUmVhZFdyaXRlXG4iXX0=