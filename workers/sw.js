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
/* eslint-disable @typescript-eslint/no-explicit-any */
const FileManagement_1 = __importDefault(require("../common/FileManagement"));
const notfound_1 = __importDefault(require("../common/notfound"));
const extensionStore = 'extension-store';
self.addEventListener('fetch', (event) => {
    event.respondWith((() => __awaiter(void 0, void 0, void 0, function* () {
        if (event.request.url.includes(extensionStore)) {
            const path = extensionStore + event.request.url.split(extensionStore).pop();
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
        }
        return fetch(event.request).catch((error) => {
            console.log('Fetch failed:', error);
        });
    }))());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ydWlnL3NyYy93b3JrZXJzL3N3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELDhFQUFxRDtBQUNyRCxrRUFBeUM7QUFFekMsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUE7QUFFeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQzVDLEtBQUssQ0FBQyxXQUFXLENBQ2YsQ0FBQyxHQUFTLEVBQUU7UUFDVixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUM5QyxNQUFNLElBQUksR0FBRyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQzNFLE1BQU0sV0FBVyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFBO1lBQ3hDLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM1QyxNQUFNLElBQUksR0FBRyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEtBQUksV0FBVyxDQUFBO1lBQ3RDLE1BQU0sT0FBTyxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsS0FBSSxrQkFBUSxDQUFBO1lBQzdDLE1BQU0sTUFBTSxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7WUFDNUMsTUFBTSxVQUFVLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQTtZQUM5RCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7WUFFaEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7WUFFdEQsT0FBTyxHQUFHLENBQUE7U0FDWDtRQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FDTCxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgRmlsZU1hbmFnZW1lbnQgZnJvbSAnLi4vY29tbW9uL0ZpbGVNYW5hZ2VtZW50J1xuaW1wb3J0IG5vdGZvdW5kIGZyb20gJy4uL2NvbW1vbi9ub3Rmb3VuZCdcblxuY29uc3QgZXh0ZW5zaW9uU3RvcmUgPSAnZXh0ZW5zaW9uLXN0b3JlJ1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChldmVudC5yZXF1ZXN0LnVybC5pbmNsdWRlcyhleHRlbnNpb25TdG9yZSkpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGV4dGVuc2lvblN0b3JlICsgZXZlbnQucmVxdWVzdC51cmwuc3BsaXQoZXh0ZW5zaW9uU3RvcmUpLnBvcCgpXG4gICAgICAgIGNvbnN0IGZpbGVtYW5hZ2VyID0gbmV3IEZpbGVNYW5hZ2VtZW50KClcbiAgICAgICAgYXdhaXQgZmlsZW1hbmFnZXIub3BlbigpXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmaWxlbWFuYWdlci5nZXRGaWxlKHBhdGgpXG4gICAgICAgIGNvbnN0IG1pbWUgPSBmaWxlPy5taW1lIHx8ICd0ZXh0L2h0bWwnXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxlPy5maWxlQ29udGVudCB8fCBub3Rmb3VuZFxuICAgICAgICBjb25zdCBzdGF0dXMgPSBmaWxlPy5maWxlQ29udGVudCA/IDIwMCA6IDQwNFxuICAgICAgICBjb25zdCBzdGF0dXNUZXh0ID0gZmlsZT8uZmlsZUNvbnRlbnQgPyAnU3VjY2VzcycgOiAnTm90IEZvdW5kJ1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGU6IG1pbWUgfSlcblxuICAgICAgICBjb25zdCByZXMgPSBuZXcgUmVzcG9uc2UoYmxvYiwgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSlcblxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmZXRjaChldmVudC5yZXF1ZXN0KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoIGZhaWxlZDonLCBlcnJvcilcbiAgICAgIH0pXG4gICAgfSkoKSxcbiAgKVxufSlcblxuZXhwb3J0IHt9XG4iXX0=