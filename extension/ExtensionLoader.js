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
const SharedFetcher_1 = __importDefault(require("../common/SharedFetcher"));
const constants_1 = require("../common/constants");
const RestEndpoints_1 = require("../configs/RestEndpoints");
const ExtensionId_1 = __importDefault(require("./ExtensionId"));
const FileManagement_1 = __importStar(require("../common/FileManagement"));
const RuigExtensionInterface_1 = __importDefault(require("./RuigExtensionInterface"));
class ExtensionLoader {
    constructor() {
        this.extensionFileManager = new FileManagement_1.default();
    }
    load(extension, appContainer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.extensionFileManager.open();
            const { fileContent: code } = (yield this.extensionFileManager.getFile(`${extension.id}/${constants_1.RUIGEM}`, FileManagement_1.Table.METAS)) || {
                fileContent: null,
            };
            if (!code) {
                console.error(`Could not load extension: ${extension.id}`);
            }
            return this.executor(code, appContainer);
        });
    }
    getExtension(id, builtin = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const extId = new ExtensionId_1.default(id);
            const res = (yield SharedFetcher_1.default.fetch(`${builtin ? RestEndpoints_1.BUILTIN_EXTENSION : RestEndpoints_1.EXTENSION}${extId.id}`));
            if (!res || !res.data || !res.data.status) {
                return null;
            }
            return res.data[constants_1.EXTENSION_SCRIPT];
        });
    }
    executor(code, appContainer) {
        const expose = Object.assign(Object.assign({}, RuigExtensionInterface_1.default), { appContainer });
        const fn = new Function(constants_1.RUIG_EXTENSION_INTERFACE, code);
        return fn(expose);
    }
}
exports.default = ExtensionLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4dGVuc2lvbi9FeHRlbnNpb25Mb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUE2QztBQUU3QyxtREFBd0Y7QUFDeEYsNERBQXVFO0FBRXZFLGdFQUF1QztBQUd2QywyRUFBZ0U7QUFDaEUsc0ZBQTBDO0FBRTFDLE1BQU0sZUFBZTtJQUFyQjtRQUNVLHlCQUFvQixHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFBO0lBZ0NyRCxDQUFDO0lBOUJPLElBQUksQ0FBQyxTQUFxQixFQUFFLFlBQTJCOztZQUMzRCxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUN0QyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUNwRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksa0JBQU0sRUFBRSxFQUMzQixzQkFBSyxDQUFDLEtBQUssQ0FDWixDQUFDLElBQUk7Z0JBQ0osV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQTtZQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7YUFDM0Q7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQzFDLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxFQUFVLEVBQUUsT0FBTyxHQUFHLEtBQUs7O1lBQzVDLE1BQU0sS0FBSyxHQUFHLElBQUkscUJBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNqQyxNQUFNLEdBQUcsR0FBZSxDQUFDLE1BQU0sdUJBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlDQUFpQixDQUFDLENBQUMsQ0FBQyx5QkFBUyxHQUFHLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFlLENBQUE7WUFFcEgsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsT0FBTyxJQUFJLENBQUE7YUFDWjtZQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBZ0IsQ0FBQyxDQUFBO1FBQ25DLENBQUM7S0FBQTtJQUVPLFFBQVEsQ0FBQyxJQUFZLEVBQUUsWUFBMkI7UUFDeEQsTUFBTSxNQUFNLG1DQUFRLGdDQUFHLEtBQUUsWUFBWSxHQUFFLENBQUE7UUFDdkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsb0NBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkQsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsZUFBZSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vY29tbW9uL1NoYXJlZEZldGNoZXInXG5pbXBvcnQgSUZldGNoRGF0YSBmcm9tICcuLi9jb21tb24vbW9kZWxzL0lGZXRjaERhdGEnXG5pbXBvcnQgeyBFWFRFTlNJT05fU0NSSVBULCBSVUlHRU0sIFJVSUdfRVhURU5TSU9OX0lOVEVSRkFDRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnXG5pbXBvcnQgeyBCVUlMVElOX0VYVEVOU0lPTiwgRVhURU5TSU9OIH0gZnJvbSAnLi4vY29uZmlncy9SZXN0RW5kcG9pbnRzJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL21vZGVsL0lBcHBDb250YWluZXInXG5pbXBvcnQgRXh0ZW5zaW9uSWQgZnJvbSAnLi9FeHRlbnNpb25JZCdcbmltcG9ydCBCYXNlRXh0ZW5zaW9uIGZyb20gJy4vQmFzZUV4dGVuc2lvbidcbmltcG9ydCBJRXh0ZW5zaW9uIGZyb20gJy4vSUV4dGVuc2lvbidcbmltcG9ydCBGaWxlTWFuYWdlbWVudCwgeyBUYWJsZSB9IGZyb20gJy4uL2NvbW1vbi9GaWxlTWFuYWdlbWVudCdcbmltcG9ydCBSRUkgZnJvbSAnLi9SdWlnRXh0ZW5zaW9uSW50ZXJmYWNlJ1xuXG5jbGFzcyBFeHRlbnNpb25Mb2FkZXIge1xuICBwcml2YXRlIGV4dGVuc2lvbkZpbGVNYW5hZ2VyID0gbmV3IEZpbGVNYW5hZ2VtZW50KClcblxuICBhc3luYyBsb2FkKGV4dGVuc2lvbjogSUV4dGVuc2lvbiwgYXBwQ29udGFpbmVyOiBJQXBwQ29udGFpbmVyKTogUHJvbWlzZTxCYXNlRXh0ZW5zaW9uPiB7XG4gICAgYXdhaXQgdGhpcy5leHRlbnNpb25GaWxlTWFuYWdlci5vcGVuKClcbiAgICBjb25zdCB7IGZpbGVDb250ZW50OiBjb2RlIH0gPSAoYXdhaXQgdGhpcy5leHRlbnNpb25GaWxlTWFuYWdlci5nZXRGaWxlKFxuICAgICAgYCR7ZXh0ZW5zaW9uLmlkfS8ke1JVSUdFTX1gLFxuICAgICAgVGFibGUuTUVUQVMsXG4gICAgKSkgfHwge1xuICAgICAgZmlsZUNvbnRlbnQ6IG51bGwsXG4gICAgfVxuICAgIGlmICghY29kZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgQ291bGQgbm90IGxvYWQgZXh0ZW5zaW9uOiAke2V4dGVuc2lvbi5pZH1gKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5leGVjdXRvcihjb2RlLCBhcHBDb250YWluZXIpXG4gIH1cblxuICBhc3luYyBnZXRFeHRlbnNpb24oaWQ6IHN0cmluZywgYnVpbHRpbiA9IGZhbHNlKTogUHJvbWlzZTxJRXh0ZW5zaW9uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGV4dElkID0gbmV3IEV4dGVuc2lvbklkKGlkKVxuICAgIGNvbnN0IHJlczogSUZldGNoRGF0YSA9IChhd2FpdCBmZXRjaGVyLmZldGNoKGAke2J1aWx0aW4gPyBCVUlMVElOX0VYVEVOU0lPTiA6IEVYVEVOU0lPTn0ke2V4dElkLmlkfWApKSBhcyBJRmV0Y2hEYXRhXG5cbiAgICBpZiAoIXJlcyB8fCAhcmVzLmRhdGEgfHwgIXJlcy5kYXRhLnN0YXR1cykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmRhdGFbRVhURU5TSU9OX1NDUklQVF1cbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0b3IoY29kZTogc3RyaW5nLCBhcHBDb250YWluZXI6IElBcHBDb250YWluZXIpOiBCYXNlRXh0ZW5zaW9uIHtcbiAgICBjb25zdCBleHBvc2UgPSB7IC4uLlJFSSwgYXBwQ29udGFpbmVyIH1cbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihSVUlHX0VYVEVOU0lPTl9JTlRFUkZBQ0UsIGNvZGUpXG4gICAgcmV0dXJuIGZuKGV4cG9zZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlbnNpb25Mb2FkZXJcbiJdfQ==