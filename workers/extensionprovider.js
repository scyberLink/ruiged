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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ydWlnL3NyYy93b3JrZXJzL2V4dGVuc2lvbnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1REFBdUQ7Ozs7Ozs7Ozs7Ozs7O0FBRXZELDhFQUFxRDtBQUNyRCxrRUFBeUM7QUFFekMsNkJBQTZCO0FBQzdCLE1BQU0sNkJBQTZCLEdBQUcsNkJBQTZCLENBQUE7QUFFbkUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBRXhDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUM5QyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3hHLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQzVDLEtBQUssQ0FBQyxXQUFXLENBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sUUFBUSxFQUFFLEVBQUU7UUFDbEQsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLFFBQVEsQ0FBQTtTQUNoQjtRQUVELE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDM0UsTUFBTSxXQUFXLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUE7UUFDeEMsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVDLE1BQU0sSUFBSSxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksS0FBSSxXQUFXLENBQUE7UUFDdEMsTUFBTSxPQUFPLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxLQUFJLGtCQUFRLENBQUE7UUFDN0MsTUFBTSxNQUFNLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUM1QyxNQUFNLFVBQVUsR0FBRyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFBO1FBQzlELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUVoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtRQUV0RCxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUMsQ0FBQSxDQUFDLENBQ0gsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuXG5pbXBvcnQgRmlsZU1hbmFnZW1lbnQgZnJvbSAnLi4vY29tbW9uL0ZpbGVNYW5hZ2VtZW50J1xuaW1wb3J0IG5vdGZvdW5kIGZyb20gJy4uL2NvbW1vbi9ub3Rmb3VuZCdcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmNvbnN0IEVYVEVOU0lPTl9QUk9WSURFUl9DQUNIRV9OQU1FID0gJ2V4dGVuc2lvbi1wcm92aWRlci1jYWNoZS12MSdcblxuY29uc3QgdXJsc1RvQ2FjaGUgPSBbJy9leHRlbnNpb24tc3RvcmUnXVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICBldmVudC53YWl0VW50aWwoY2FjaGVzLm9wZW4oRVhURU5TSU9OX1BST1ZJREVSX0NBQ0hFX05BTUUpLnRoZW4oKGNhY2hlKSA9PiBjYWNoZS5hZGRBbGwodXJsc1RvQ2FjaGUpKSlcbn0pXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICBldmVudC5yZXNwb25kV2l0aChcbiAgICBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGF0aCA9IHVybHNUb0NhY2hlWzBdICsgZXZlbnQucmVxdWVzdC51cmwuc3BsaXQodXJsc1RvQ2FjaGVbMF0pLnBvcCgpXG4gICAgICBjb25zdCBmaWxlbWFuYWdlciA9IG5ldyBGaWxlTWFuYWdlbWVudCgpXG4gICAgICBhd2FpdCBmaWxlbWFuYWdlci5vcGVuKClcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmaWxlbWFuYWdlci5nZXRGaWxlKHBhdGgpXG4gICAgICBjb25zdCBtaW1lID0gZmlsZT8ubWltZSB8fCAndGV4dC9odG1sJ1xuICAgICAgY29uc3QgY29udGVudCA9IGZpbGU/LmZpbGVDb250ZW50IHx8IG5vdGZvdW5kXG4gICAgICBjb25zdCBzdGF0dXMgPSBmaWxlPy5maWxlQ29udGVudCA/IDIwMCA6IDQwNFxuICAgICAgY29uc3Qgc3RhdHVzVGV4dCA9IGZpbGU/LmZpbGVDb250ZW50ID8gJ1N1Y2Nlc3MnIDogJ05vdCBGb3VuZCdcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudF0sIHsgdHlwZTogbWltZSB9KVxuXG4gICAgICBjb25zdCByZXMgPSBuZXcgUmVzcG9uc2UoYmxvYiwgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSlcblxuICAgICAgcmV0dXJuIHJlc1xuICAgIH0pLFxuICApXG59KVxuXG5leHBvcnQge31cbiJdfQ==