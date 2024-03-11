"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
const FileManagement_1 = __importDefault(require("../common/FileManagement"));
const notfound_1 = __importDefault(require("../common/notfound"));
/* eslint-disable no-undef */
const EXTENSION_PROVIDER_CACHE_NAME = 'extension-provider-cache-v1';
const urlsToCache = ['/extension-store'];
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(EXTENSION_PROVIDER_CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => __awaiter(void 0, void 0, void 0, function* () {
        if (response) {
            return response;
        }
        const path = urlsToCache[0] + event.request.url.split(urlsToCache[0]).pop();
        const filemanager = new FileManagement_1.default();
        yield filemanager.open();
        const file = yield filemanager.getFile(path);
        const mime = (file === null || file === void 0 ? void 0 : file.mime) || 'text/html';
        const content = (file === null || file === void 0 ? void 0 : file.fileContent) || notfound_1.default;
        const status = (file === null || file === void 0 ? void 0 : file.fileContent) ? 200 : 404;
        const statusText = (file === null || file === void 0 ? void 0 : file.fileContent) ? 'Success' : 'Not Found';
        const blob = new Blob([content], { type: mime });
        const res = new Response(blob, { status, statusText });
        return res;
    })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd29ya2Vycy9leHRlbnNpb25wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdURBQXVEOzs7Ozs7Ozs7Ozs7OztBQUV2RCw4RUFBcUQ7QUFDckQsa0VBQXlDO0FBRXpDLDZCQUE2QjtBQUM3QixNQUFNLDZCQUE2QixHQUFHLDZCQUE2QixDQUFBO0FBRW5FLE1BQU0sV0FBVyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUV4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDOUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN4RyxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUM1QyxLQUFLLENBQUMsV0FBVyxDQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLFFBQVEsRUFBRSxFQUFFO1FBQ2xELElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxRQUFRLENBQUE7U0FDaEI7UUFFRCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzNFLE1BQU0sV0FBVyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFBO1FBQ3hDLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QyxNQUFNLElBQUksR0FBRyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEtBQUksV0FBVyxDQUFBO1FBQ3RDLE1BQU0sT0FBTyxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsS0FBSSxrQkFBUSxDQUFBO1FBQzdDLE1BQU0sTUFBTSxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDNUMsTUFBTSxVQUFVLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQTtRQUM5RCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFFaEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7UUFFdEQsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDLENBQUEsQ0FBQyxDQUNILENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cblxuaW1wb3J0IEZpbGVNYW5hZ2VtZW50IGZyb20gJy4uL2NvbW1vbi9GaWxlTWFuYWdlbWVudCdcbmltcG9ydCBub3Rmb3VuZCBmcm9tICcuLi9jb21tb24vbm90Zm91bmQnXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5jb25zdCBFWFRFTlNJT05fUFJPVklERVJfQ0FDSEVfTkFNRSA9ICdleHRlbnNpb24tcHJvdmlkZXItY2FjaGUtdjEnXG5cbmNvbnN0IHVybHNUb0NhY2hlID0gWycvZXh0ZW5zaW9uLXN0b3JlJ11cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgZXZlbnQud2FpdFVudGlsKGNhY2hlcy5vcGVuKEVYVEVOU0lPTl9QUk9WSURFUl9DQUNIRV9OQU1FKS50aGVuKChjYWNoZSkgPT4gY2FjaGUuYWRkQWxsKHVybHNUb0NhY2hlKSkpXG59KVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhdGggPSB1cmxzVG9DYWNoZVswXSArIGV2ZW50LnJlcXVlc3QudXJsLnNwbGl0KHVybHNUb0NhY2hlWzBdKS5wb3AoKVxuICAgICAgY29uc3QgZmlsZW1hbmFnZXIgPSBuZXcgRmlsZU1hbmFnZW1lbnQoKVxuICAgICAgYXdhaXQgZmlsZW1hbmFnZXIub3BlbigpXG4gICAgICBjb25zdCBmaWxlID0gYXdhaXQgZmlsZW1hbmFnZXIuZ2V0RmlsZShwYXRoKVxuICAgICAgY29uc3QgbWltZSA9IGZpbGU/Lm1pbWUgfHwgJ3RleHQvaHRtbCdcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlPy5maWxlQ29udGVudCB8fCBub3Rmb3VuZFxuICAgICAgY29uc3Qgc3RhdHVzID0gZmlsZT8uZmlsZUNvbnRlbnQgPyAyMDAgOiA0MDRcbiAgICAgIGNvbnN0IHN0YXR1c1RleHQgPSBmaWxlPy5maWxlQ29udGVudCA/ICdTdWNjZXNzJyA6ICdOb3QgRm91bmQnXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGU6IG1pbWUgfSlcblxuICAgICAgY29uc3QgcmVzID0gbmV3IFJlc3BvbnNlKGJsb2IsIHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0pXG5cbiAgICAgIHJldHVybiByZXNcbiAgICB9KSxcbiAgKVxufSlcblxuZXhwb3J0IHt9XG4iXX0=