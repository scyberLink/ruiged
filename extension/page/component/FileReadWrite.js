"use strict";
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
const FileManagement_1 = __importDefault(require("../../../common/FileManagement"));
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
                fileManager.saveFile(`${extensionId.current}/${file.name}`, file.content, file.extension, 'metas');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVJlYWRXcml0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHRlbnNpb24vcGFnZS9jb21wb25lbnQvRmlsZVJlYWRXcml0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELGlDQUEwRDtBQUMxRCxrREFBMEM7QUFDMUMsb0ZBQTJEO0FBQzNELDREQUFrQztBQUNsQyxvRUFBMEM7QUFDMUMsd0VBQStDO0FBbUIvQyxNQUFNLGFBQWEsR0FBYSxHQUFHLEVBQUU7SUFDbkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUMzRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUNqRCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBWSxJQUFXLENBQUMsQ0FBQTtJQUNoRSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNsQyxNQUFNLGFBQWEsR0FBRyxJQUFJLHVCQUFhLEVBQUUsQ0FBQTtJQUN6QyxNQUFNLE1BQU0sR0FBRyxJQUFBLGNBQU0sRUFBVSxFQUFFLENBQUMsQ0FBQTtJQUNsQyxNQUFNLEtBQUssR0FBRyxJQUFBLGNBQU0sRUFBVSxFQUFFLENBQUMsQ0FBQTtJQUNqQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGNBQU0sRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUM5QixNQUFNLFdBQVcsR0FBRyxJQUFJLHdCQUFjLEVBQUUsQ0FBQTtJQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQTtJQUV2QixJQUFBLGlC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Y2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSlNaaXAsIHsgSlNaaXBPYmplY3QgfSBmcm9tICdqc3ppcCdcbmltcG9ydCBGaWxlTWFuYWdlbWVudCBmcm9tICcuLi8uLi8uLi9jb21tb24vRmlsZU1hbmFnZW1lbnQnXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gJ3JlbWFyay1nZm0nXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBFeHRlbnNpb25Qb29sIGZyb20gJy4uLy4uL0V4dGVuc2lvblBvb2wnXG5cbnR5cGUgRGF0YVR5cGUgPSAnc3RyaW5nJyB8ICdibG9iJ1xuXG5pbnRlcmZhY2UgSU1hbmlmZXN0IHtcbiAgbmFtZTogc3RyaW5nXG4gIHZlcnNpb246IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHB1Ymxpc2hlcjogc3RyaW5nXG4gIGNsYXNzbmFtZTogc3RyaW5nXG4gIGRvYzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJRmlsZSB7XG4gIG5hbWU6IHN0cmluZ1xuICBjb250ZW50OiBhbnlcbiAgZXh0ZW5zaW9uOiBzdHJpbmdcbn1cblxuY29uc3QgRmlsZVJlYWRXcml0ZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZWFkeVRvSW5zdGFsbCwgc2V0UmVhZHlUb0luc3RhbGxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnN0YWxsZWQsIHNldEluc3RhbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21hbmlmZXN0LCBzZXRNYW5pZmVzdF0gPSB1c2VTdGF0ZTxJTWFuaWZlc3Q+KG51bGwgYXMgYW55KVxuICBjb25zdCBbZG9jLCBzZXREb2NdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGV4dGVuc2lvblBvb2wgPSBuZXcgRXh0ZW5zaW9uUG9vbCgpXG4gIGNvbnN0IGFzc2V0cyA9IHVzZVJlZjxJRmlsZVtdPihbXSlcbiAgY29uc3QgbWV0YXMgPSB1c2VSZWY8SUZpbGVbXT4oW10pXG4gIGNvbnN0IGV4dGVuc2lvbklkID0gdXNlUmVmKCcnKVxuICBjb25zdCBmaWxlTWFuYWdlciA9IG5ldyBGaWxlTWFuYWdlbWVudCgpXG4gIGZpbGVNYW5hZ2VyLm9wZW4oKVxuICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGZpbGVNYW5hZ2VyLmNsb3NlKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmIChmaWxlKSB7XG4gICAgICByZXNldCgpXG4gICAgICBhd2FpdCB6aXAubG9hZEFzeW5jKGZpbGUpXG4gICAgICB6aXAuZm9yRWFjaChhc3luYyAocmVsYXRpdmVQYXRoLCB6aXBFbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIXppcEVudHJ5LmRpcikge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSB6aXBFbnRyeS5uYW1lXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRDb250ZW50KHppcEVudHJ5KVxuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGdldEV4dGVuc2lvbihuYW1lKVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ21hbmlmZXN0Lmpzb24nKSB7XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IEpTT04ucGFyc2UoY29udGVudCBhcyBzdHJpbmcpXG4gICAgICAgICAgICBzZXRNYW5pZmVzdChtYW5pZmVzdClcbiAgICAgICAgICAgIGV4dGVuc2lvbklkLmN1cnJlbnQgPSBgJHttYW5pZmVzdC5wdWJsaXNoZXJ9LiR7bWFuaWZlc3QubmFtZX1gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5hbWUgPT0gJ1JFQURNRS5tZCcpIHtcbiAgICAgICAgICAgIHNldERvYyhjb250ZW50IGFzIHN0cmluZylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnZXh0ZW5zaW9uLXN0b3JlJykpIHtcbiAgICAgICAgICAgIGFzc2V0cy5jdXJyZW50LnB1c2goeyBuYW1lLCBjb250ZW50LCBleHRlbnNpb24gfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWV0YXMuY3VycmVudC5wdXNoKHsgbmFtZSwgY29udGVudCwgZXh0ZW5zaW9uIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2V0UmVhZHlUb0luc3RhbGwodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzYXZlRmlsZXMgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGFzc2V0cy5jdXJyZW50KSB7XG4gICAgICBpZiAoZmlsZS5jb250ZW50KSB7XG4gICAgICAgIGZpbGVNYW5hZ2VyLnNhdmVGaWxlKGZpbGUubmFtZSwgZmlsZS5jb250ZW50LCBmaWxlLmV4dGVuc2lvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbWV0YXMuY3VycmVudCkge1xuICAgICAgaWYgKGZpbGUuY29udGVudCkge1xuICAgICAgICBmaWxlTWFuYWdlci5zYXZlRmlsZShgJHtleHRlbnNpb25JZC5jdXJyZW50fS8ke2ZpbGUubmFtZX1gLCBmaWxlLmNvbnRlbnQsIGZpbGUuZXh0ZW5zaW9uLCAnbWV0YXMnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV4dGVuc2lvblBvb2wubWFudWFsSW5zdGFsbCh7XG4gICAgICBpZDogZXh0ZW5zaW9uSWQuY3VycmVudCxcbiAgICAgIHJhdGluZzogMCxcbiAgICAgIGRvd25sb2FkczogMCxcbiAgICAgIGJ1aWx0aW46IGZhbHNlLFxuICAgIH0pXG5cbiAgICBzZXRJbnN0YWxsZWQodHJ1ZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlYWRDb250ZW50KHppcEVudHJ5OiBKU1ppcE9iamVjdCkge1xuICAgIGNvbnN0IGRhdGFUeXBlOiBEYXRhVHlwZSA9IGdldERhdGFUeXBlKHppcEVudHJ5Lm5hbWUpXG4gICAgcmV0dXJuIGF3YWl0IHppcC5maWxlKHppcEVudHJ5Lm5hbWUpPy5hc3luYyhkYXRhVHlwZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHNldEluc3RhbGxlZChmYWxzZSlcbiAgICBzZXRSZWFkeVRvSW5zdGFsbChmYWxzZSlcbiAgICBzZXRNYW5pZmVzdChudWxsIGFzIGFueSlcbiAgICBzZXREb2MoJycpXG4gICAgYXNzZXRzLmN1cnJlbnQgPSBbXVxuICAgIG1ldGFzLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgY29uc3QgZ2V0RXh0ZW5zaW9uID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KCcuJykucG9wKCk/LnRvTG93ZXJDYXNlKCkgfHwgJydcbiAgfVxuXG4gIGNvbnN0IGdldERhdGFUeXBlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBnZXRFeHRlbnNpb24obmFtZSlcbiAgICBsZXQgZGF0YVR5cGU6IHN0cmluZ1xuXG4gICAgLy8gRGV0ZXJtaW5lIGRhdGEgdHlwZSBiYXNlZCBvbiBmaWxlIGV4dGVuc2lvblxuICAgIHN3aXRjaCAoZmlsZUV4dGVuc2lvbikge1xuICAgICAgY2FzZSAndHh0JzpcbiAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgY2FzZSAnY3NzJzpcbiAgICAgIGNhc2UgJ2pzJzpcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgZGF0YVR5cGUgPSAnc3RyaW5nJyAvLyBUZXh0IGRhdGFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnanBnJzpcbiAgICAgIGNhc2UgJ2pwZWcnOlxuICAgICAgY2FzZSAncG5nJzpcbiAgICAgIGNhc2UgJ2dpZic6XG4gICAgICBjYXNlICdwZGYnOlxuICAgICAgICBkYXRhVHlwZSA9ICdibG9iJyAvLyBJbWFnZSBkYXRhXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRhdGFUeXBlID0gJ3N0cmluZydcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVR5cGUgYXMgRGF0YVR5cGVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAge3JlYWR5VG9JbnN0YWxsICYmICFtYW5pZmVzdCA/IChcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkludmFsaWQgZXh0ZW5zaW9uIHBhY2thZ2U8L2gyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7cmVhZHlUb0luc3RhbGwgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmVGaWxlc30gZGlzYWJsZWQ9e2luc3RhbGxlZH0+XG4gICAgICAgICAgICAgICAge2luc3RhbGxlZCA/ICdJbnN0YWxsZWQnIDogJ0luc3RhbGwnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cmVhZHlUb0luc3RhbGwgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57bWFuaWZlc3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBWZXJzaW9uOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PnttYW5pZmVzdC52ZXJzaW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgUHVibGlzaGVyOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PnttYW5pZmVzdC5wdWJsaXNoZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMz57bWFuaWZlc3QuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbV19Pntkb2N9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlUmVhZFdyaXRlXG4iXX0=