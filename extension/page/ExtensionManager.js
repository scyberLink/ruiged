"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FileReadWrite_1 = __importDefault(require("./component/FileReadWrite"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ExtensionManager({ extensions }) {
    /*  const extensionPool = SharedConfig.get(EXTENSION_POOL)
   
     useEffect(() => {
   
     }, []) */
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ id: "extensionManager" }, { children: "Here you can manager your extensions." })), (0, jsx_runtime_1.jsx)(FileReadWrite_1.default, {})] }));
}
exports.default = ExtensionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3J1aWcvc3JjL2V4dGVuc2lvbi9wYWdlL0V4dGVuc2lvbk1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDhFQUFxRDtBQUVyRCw2REFBNkQ7QUFDN0QsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFFLFVBQVUsRUFBYztJQUNsRDs7OztjQUlVO0lBRVYsT0FBTyxDQUNMLDZEQUNFLDhDQUFLLEVBQUUsRUFBQyxrQkFBa0IsMkRBQTRDLEVBQ3RFLHVCQUFDLHVCQUFhLEtBQUcsSUFDaEIsQ0FDSixDQUFBO0FBQ0gsQ0FBQztBQUVELGtCQUFlLGdCQUFnQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IEZpbGVSZWFkV3JpdGUgZnJvbSAnLi9jb21wb25lbnQvRmlsZVJlYWRXcml0ZSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuZnVuY3Rpb24gRXh0ZW5zaW9uTWFuYWdlcih7IGV4dGVuc2lvbnMgfTogSUFueU9iamVjdCkge1xuICAvKiAgY29uc3QgZXh0ZW5zaW9uUG9vbCA9IFNoYXJlZENvbmZpZy5nZXQoRVhURU5TSU9OX1BPT0wpXG4gXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuIFxuICAgfSwgW10pICovXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cImV4dGVuc2lvbk1hbmFnZXJcIj5IZXJlIHlvdSBjYW4gbWFuYWdlciB5b3VyIGV4dGVuc2lvbnMuPC9kaXY+XG4gICAgICA8RmlsZVJlYWRXcml0ZSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuc2lvbk1hbmFnZXJcbiJdfQ==