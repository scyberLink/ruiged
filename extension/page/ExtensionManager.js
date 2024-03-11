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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHRlbnNpb24vcGFnZS9FeHRlbnNpb25NYW5hZ2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSw4RUFBcUQ7QUFFckQsNkRBQTZEO0FBQzdELFNBQVMsZ0JBQWdCLENBQUMsRUFBRSxVQUFVLEVBQWM7SUFDbEQ7Ozs7Y0FJVTtJQUVWLE9BQU8sQ0FDTCw2REFDRSw4Q0FBSyxFQUFFLEVBQUMsa0JBQWtCLDJEQUE0QyxFQUN0RSx1QkFBQyx1QkFBYSxLQUFHLElBQ2hCLENBQ0osQ0FBQTtBQUNILENBQUM7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBGaWxlUmVhZFdyaXRlIGZyb20gJy4vY29tcG9uZW50L0ZpbGVSZWFkV3JpdGUnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIEV4dGVuc2lvbk1hbmFnZXIoeyBleHRlbnNpb25zIH06IElBbnlPYmplY3QpIHtcbiAgLyogIGNvbnN0IGV4dGVuc2lvblBvb2wgPSBTaGFyZWRDb25maWcuZ2V0KEVYVEVOU0lPTl9QT09MKVxuIFxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiBcbiAgIH0sIFtdKSAqL1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgaWQ9XCJleHRlbnNpb25NYW5hZ2VyXCI+SGVyZSB5b3UgY2FuIG1hbmFnZXIgeW91ciBleHRlbnNpb25zLjwvZGl2PlxuICAgICAgPEZpbGVSZWFkV3JpdGUgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlbnNpb25NYW5hZ2VyXG4iXX0=