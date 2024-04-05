"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionPool_1 = __importDefault(require("./ExtensionPool"));
class ExtensionDevelopment {
    constructor() {
        this.extensionPool = new ExtensionPool_1.default();
    }
    install(extension) {
        this.extensionPool.manualInstall({
            id: extension.getId(extension),
            rating: 0,
            downloads: 0,
            builtin: false,
        });
    }
}
exports.default = ExtensionDevelopment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uRGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ydWlnL3NyYy9leHRlbnNpb24vRXh0ZW5zaW9uRGV2ZWxvcG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvRUFBMkM7QUFFM0MsTUFBTSxvQkFBb0I7SUFHeEI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFBO0lBQzFDLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBK0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDL0IsRUFBRSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQzlCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQUVELGtCQUFlLG9CQUFvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VFeHRlbnNpb24gZnJvbSAnLi9CYXNlRXh0ZW5zaW9uJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi9FeHRlbnNpb25Qb29sJ1xuXG5jbGFzcyBFeHRlbnNpb25EZXZlbG9wbWVudCB7XG4gIGV4dGVuc2lvblBvb2w6IEV4dGVuc2lvblBvb2xcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV4dGVuc2lvblBvb2wgPSBuZXcgRXh0ZW5zaW9uUG9vbCgpXG4gIH1cblxuICBpbnN0YWxsKGV4dGVuc2lvbjogdHlwZW9mIEJhc2VFeHRlbnNpb24pIHtcbiAgICB0aGlzLmV4dGVuc2lvblBvb2wubWFudWFsSW5zdGFsbCh7XG4gICAgICBpZDogZXh0ZW5zaW9uLmdldElkKGV4dGVuc2lvbiksXG4gICAgICByYXRpbmc6IDAsXG4gICAgICBkb3dubG9hZHM6IDAsXG4gICAgICBidWlsdGluOiBmYWxzZSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dGVuc2lvbkRldmVsb3BtZW50XG4iXX0=