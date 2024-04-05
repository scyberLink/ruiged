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
const SharedConfig_1 = __importDefault(require("../common/SharedConfig"));
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
        const rei = SharedConfig_1.default.get(constants_1.RUIG_EXTENSION_INTERFACE);
        const expose = Object.assign(Object.assign({}, rei), { appContainer });
        const fn = new Function(constants_1.RUIG_EXTENSION_INTERFACE, code);
        return fn(expose);
    }
}
exports.default = ExtensionLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcnVpZy9zcmMvZXh0ZW5zaW9uL0V4dGVuc2lvbkxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTZDO0FBRTdDLG1EQUF3RjtBQUN4Riw0REFBdUU7QUFFdkUsZ0VBQXVDO0FBR3ZDLDJFQUFnRTtBQUNoRSwwRUFBaUQ7QUFHakQsTUFBTSxlQUFlO0lBQXJCO1FBQ1UseUJBQW9CLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUE7SUFpQ3JELENBQUM7SUEvQk8sSUFBSSxDQUFDLFNBQXFCLEVBQUUsWUFBMkI7O1lBQzNELE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3RDLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQ3BFLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxrQkFBTSxFQUFFLEVBQzNCLHNCQUFLLENBQUMsS0FBSyxDQUNaLENBQUMsSUFBSTtnQkFDSixXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFBO1lBQ0QsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTthQUMzRDtZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFDMUMsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEVBQVUsRUFBRSxPQUFPLEdBQUcsS0FBSzs7WUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxxQkFBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pDLE1BQU0sR0FBRyxHQUFlLENBQUMsTUFBTSx1QkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUNBQWlCLENBQUMsQ0FBQyxDQUFDLHlCQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQWUsQ0FBQTtZQUVwSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6QyxPQUFPLElBQUksQ0FBQTthQUNaO1lBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUFnQixDQUFDLENBQUE7UUFDbkMsQ0FBQztLQUFBO0lBRU8sUUFBUSxDQUFDLElBQVksRUFBRSxZQUEyQjtRQUN4RCxNQUFNLEdBQUcsR0FBRyxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxvQ0FBd0IsQ0FBZSxDQUFBO1FBQ3BFLE1BQU0sTUFBTSxtQ0FBUSxHQUFHLEtBQUUsWUFBWSxHQUFFLENBQUE7UUFDdkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsb0NBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkQsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsZUFBZSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vY29tbW9uL1NoYXJlZEZldGNoZXInXG5pbXBvcnQgSUZldGNoRGF0YSBmcm9tICcuLi9jb21tb24vbW9kZWxzL0lGZXRjaERhdGEnXG5pbXBvcnQgeyBFWFRFTlNJT05fU0NSSVBULCBSVUlHRU0sIFJVSUdfRVhURU5TSU9OX0lOVEVSRkFDRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnXG5pbXBvcnQgeyBCVUlMVElOX0VYVEVOU0lPTiwgRVhURU5TSU9OIH0gZnJvbSAnLi4vY29uZmlncy9SZXN0RW5kcG9pbnRzJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL21vZGVsL0lBcHBDb250YWluZXInXG5pbXBvcnQgRXh0ZW5zaW9uSWQgZnJvbSAnLi9FeHRlbnNpb25JZCdcbmltcG9ydCBCYXNlRXh0ZW5zaW9uIGZyb20gJy4vQmFzZUV4dGVuc2lvbidcbmltcG9ydCBJRXh0ZW5zaW9uIGZyb20gJy4vSUV4dGVuc2lvbidcbmltcG9ydCBGaWxlTWFuYWdlbWVudCwgeyBUYWJsZSB9IGZyb20gJy4uL2NvbW1vbi9GaWxlTWFuYWdlbWVudCdcbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcblxuY2xhc3MgRXh0ZW5zaW9uTG9hZGVyIHtcbiAgcHJpdmF0ZSBleHRlbnNpb25GaWxlTWFuYWdlciA9IG5ldyBGaWxlTWFuYWdlbWVudCgpXG5cbiAgYXN5bmMgbG9hZChleHRlbnNpb246IElFeHRlbnNpb24sIGFwcENvbnRhaW5lcjogSUFwcENvbnRhaW5lcik6IFByb21pc2U8QmFzZUV4dGVuc2lvbj4ge1xuICAgIGF3YWl0IHRoaXMuZXh0ZW5zaW9uRmlsZU1hbmFnZXIub3BlbigpXG4gICAgY29uc3QgeyBmaWxlQ29udGVudDogY29kZSB9ID0gKGF3YWl0IHRoaXMuZXh0ZW5zaW9uRmlsZU1hbmFnZXIuZ2V0RmlsZShcbiAgICAgIGAke2V4dGVuc2lvbi5pZH0vJHtSVUlHRU19YCxcbiAgICAgIFRhYmxlLk1FVEFTLFxuICAgICkpIHx8IHtcbiAgICAgIGZpbGVDb250ZW50OiBudWxsLFxuICAgIH1cbiAgICBpZiAoIWNvZGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBsb2FkIGV4dGVuc2lvbjogJHtleHRlbnNpb24uaWR9YClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0b3IoY29kZSwgYXBwQ29udGFpbmVyKVxuICB9XG5cbiAgYXN5bmMgZ2V0RXh0ZW5zaW9uKGlkOiBzdHJpbmcsIGJ1aWx0aW4gPSBmYWxzZSk6IFByb21pc2U8SUV4dGVuc2lvbiB8IG51bGw+IHtcbiAgICBjb25zdCBleHRJZCA9IG5ldyBFeHRlbnNpb25JZChpZClcbiAgICBjb25zdCByZXM6IElGZXRjaERhdGEgPSAoYXdhaXQgZmV0Y2hlci5mZXRjaChgJHtidWlsdGluID8gQlVJTFRJTl9FWFRFTlNJT04gOiBFWFRFTlNJT059JHtleHRJZC5pZH1gKSkgYXMgSUZldGNoRGF0YVxuXG4gICAgaWYgKCFyZXMgfHwgIXJlcy5kYXRhIHx8ICFyZXMuZGF0YS5zdGF0dXMpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5kYXRhW0VYVEVOU0lPTl9TQ1JJUFRdXG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dG9yKGNvZGU6IHN0cmluZywgYXBwQ29udGFpbmVyOiBJQXBwQ29udGFpbmVyKTogQmFzZUV4dGVuc2lvbiB7XG4gICAgY29uc3QgcmVpID0gU2hhcmVkQ29uZmlnLmdldChSVUlHX0VYVEVOU0lPTl9JTlRFUkZBQ0UpIGFzIElBbnlPYmplY3RcbiAgICBjb25zdCBleHBvc2UgPSB7IC4uLnJlaSwgYXBwQ29udGFpbmVyIH1cbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihSVUlHX0VYVEVOU0lPTl9JTlRFUkZBQ0UsIGNvZGUpXG4gICAgcmV0dXJuIGZuKGV4cG9zZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlbnNpb25Mb2FkZXJcbiJdfQ==