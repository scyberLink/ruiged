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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const idb_1 = require("idb");
var FileManagementMode;
(function (FileManagementMode) {
    FileManagementMode["READONLY"] = "readonly";
    FileManagementMode["READWRITE"] = "readwrite";
})(FileManagementMode || (FileManagementMode = {}));
var Table;
(function (Table) {
    Table["METAS"] = "metas";
    Table["ASSETS"] = "assets";
})(Table = exports.Table || (exports.Table = {}));
class FileManagement {
    constructor() {
        this.db = null;
        this.KEYPATH = 'fileName';
        this.DATABASE = 'ExtensionStore';
        this.DATABASE_VERSION = 1;
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, idb_1.openDB)(this.DATABASE, this.DATABASE_VERSION, {
                upgrade: (db) => {
                    db.createObjectStore(Table.ASSETS, { keyPath: this.KEYPATH });
                    db.createObjectStore(Table.METAS, { keyPath: this.KEYPATH });
                },
            });
        });
    }
    saveFile(fileName, fileContent, type, table = Table.ASSETS) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tx = this.db.transaction(table, FileManagementMode.READWRITE);
                const store = tx.objectStore(table);
                const mime = this.getMime(type);
                store.put({ fileName, file: { mime, type, fileContent } });
                yield tx.done;
            }
            catch (error) {
                console.error('Error saving file:', error);
            }
        });
    }
    getMime(extension) {
        switch (extension) {
            case 'txt':
                return 'text/plain';
            case 'html':
                return 'text/html';
            case 'css':
                return 'text/css';
            case 'js':
                return 'text/javascript';
            case 'json':
                return 'application/json';
            case 'svg':
                return 'image/svg+xml';
            case 'jpg':
            case 'jpeg':
                return 'image/jpeg';
            case 'png':
                return 'image/png';
            case 'gif':
                return 'image/gif';
            case 'pdf':
                return 'application/pdf';
            default:
                return 'application/octet-stream';
        }
    }
    getFile(fileName, table = Table.ASSETS) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tx = this.db.transaction(table, FileManagementMode.READONLY);
                const store = tx.objectStore(table);
                const { file } = (yield store.get(fileName)) || { file: null };
                yield tx.done;
                return file;
            }
            catch (error) {
                console.error('Error retrieving:', error);
                return null;
            }
        });
    }
    close() {
        var _a;
        (_a = this.db) === null || _a === void 0 ? void 0 : _a.close();
    }
}
exports.default = FileManagement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL0ZpbGVNYW5hZ2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RCw2QkFBMEM7QUFFMUMsSUFBSyxrQkFHSjtBQUhELFdBQUssa0JBQWtCO0lBQ3JCLDJDQUFxQixDQUFBO0lBQ3JCLDZDQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFISSxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBR3RCO0FBRUQsSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2Ysd0JBQWUsQ0FBQTtJQUNmLDBCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFHaEI7QUFFRCxNQUFNLGNBQWM7SUFBcEI7UUFDRSxPQUFFLEdBQTBCLElBQVcsQ0FBQTtRQW9FL0IsWUFBTyxHQUFHLFVBQVUsQ0FBQTtRQUNwQixhQUFRLEdBQUcsZ0JBQWdCLENBQUE7UUFDM0IscUJBQWdCLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFyRU8sSUFBSTs7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBQSxZQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzNELE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO29CQUNkLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO29CQUM3RCxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtnQkFDOUQsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxRQUFnQixFQUFFLFdBQTBCLEVBQUUsSUFBWSxFQUFFLFFBQWUsS0FBSyxDQUFDLE1BQU07O1lBQ3BHLElBQUk7Z0JBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNuRSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUMxRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUE7YUFDZDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDM0M7UUFDSCxDQUFDO0tBQUE7SUFFRCxPQUFPLENBQUMsU0FBaUI7UUFDdkIsUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sWUFBWSxDQUFBO1lBQ3JCLEtBQUssTUFBTTtnQkFDVCxPQUFPLFdBQVcsQ0FBQTtZQUNwQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxVQUFVLENBQUE7WUFDbkIsS0FBSyxJQUFJO2dCQUNQLE9BQU8saUJBQWlCLENBQUE7WUFDMUIsS0FBSyxNQUFNO2dCQUNULE9BQU8sa0JBQWtCLENBQUE7WUFDM0IsS0FBSyxLQUFLO2dCQUNSLE9BQU8sZUFBZSxDQUFBO1lBQ3hCLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxNQUFNO2dCQUNULE9BQU8sWUFBWSxDQUFBO1lBQ3JCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQTtZQUNwQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxXQUFXLENBQUE7WUFDcEIsS0FBSyxLQUFLO2dCQUNSLE9BQU8saUJBQWlCLENBQUE7WUFDMUI7Z0JBQ0UsT0FBTywwQkFBMEIsQ0FBQTtTQUNwQztJQUNILENBQUM7SUFFSyxPQUFPLENBQUMsUUFBZ0IsRUFBRSxRQUFlLEtBQUssQ0FBQyxNQUFNOztZQUN6RCxJQUFJO2dCQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDbEUsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUE7Z0JBQzlELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQTtnQkFDYixPQUFPLElBQUksQ0FBQTthQUNaO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDekMsT0FBTyxJQUFJLENBQUE7YUFDWjtRQUNILENBQUM7S0FBQTtJQUVELEtBQUs7O1FBQ0gsTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxLQUFLLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBS0Y7QUFFRCxrQkFBZSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBJREJQRGF0YWJhc2UsIG9wZW5EQiB9IGZyb20gJ2lkYidcblxuZW51bSBGaWxlTWFuYWdlbWVudE1vZGUge1xuICBSRUFET05MWSA9ICdyZWFkb25seScsXG4gIFJFQURXUklURSA9ICdyZWFkd3JpdGUnLFxufVxuXG5leHBvcnQgZW51bSBUYWJsZSB7XG4gIE1FVEFTID0gJ21ldGFzJyxcbiAgQVNTRVRTID0gJ2Fzc2V0cycsXG59XG5cbmNsYXNzIEZpbGVNYW5hZ2VtZW50IHtcbiAgZGI6IElEQlBEYXRhYmFzZTx1bmtub3duPiA9IG51bGwgYXMgYW55XG5cbiAgYXN5bmMgb3BlbigpIHtcbiAgICB0aGlzLmRiID0gYXdhaXQgb3BlbkRCKHRoaXMuREFUQUJBU0UsIHRoaXMuREFUQUJBU0VfVkVSU0lPTiwge1xuICAgICAgdXBncmFkZTogKGRiKSA9PiB7XG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKFRhYmxlLkFTU0VUUywgeyBrZXlQYXRoOiB0aGlzLktFWVBBVEggfSlcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoVGFibGUuTUVUQVMsIHsga2V5UGF0aDogdGhpcy5LRVlQQVRIIH0pXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBzYXZlRmlsZShmaWxlTmFtZTogc3RyaW5nLCBmaWxlQ29udGVudDogc3RyaW5nIHwgQmxvYiwgdHlwZTogc3RyaW5nLCB0YWJsZTogVGFibGUgPSBUYWJsZS5BU1NFVFMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdHggPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRhYmxlLCBGaWxlTWFuYWdlbWVudE1vZGUuUkVBRFdSSVRFKVxuICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSh0YWJsZSlcbiAgICAgIGNvbnN0IG1pbWUgPSB0aGlzLmdldE1pbWUodHlwZSlcbiAgICAgIHN0b3JlLnB1dCh7IGZpbGVOYW1lLCBmaWxlOiB7IG1pbWUsIHR5cGUsIGZpbGVDb250ZW50IH0gfSlcbiAgICAgIGF3YWl0IHR4LmRvbmVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGZpbGU6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgZ2V0TWltZShleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgIGNhc2UgJ3R4dCc6XG4gICAgICAgIHJldHVybiAndGV4dC9wbGFpbidcbiAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICByZXR1cm4gJ3RleHQvaHRtbCdcbiAgICAgIGNhc2UgJ2Nzcyc6XG4gICAgICAgIHJldHVybiAndGV4dC9jc3MnXG4gICAgICBjYXNlICdqcyc6XG4gICAgICAgIHJldHVybiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgIHJldHVybiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgIHJldHVybiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICBjYXNlICdqcGVnJzpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9qcGVnJ1xuICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9wbmcnXG4gICAgICBjYXNlICdnaWYnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2dpZidcbiAgICAgIGNhc2UgJ3BkZic6XG4gICAgICAgIHJldHVybiAnYXBwbGljYXRpb24vcGRmJ1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0RmlsZShmaWxlTmFtZTogc3RyaW5nLCB0YWJsZTogVGFibGUgPSBUYWJsZS5BU1NFVFMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdHggPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHRhYmxlLCBGaWxlTWFuYWdlbWVudE1vZGUuUkVBRE9OTFkpXG4gICAgICBjb25zdCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKHRhYmxlKVxuICAgICAgY29uc3QgeyBmaWxlIH0gPSAoYXdhaXQgc3RvcmUuZ2V0KGZpbGVOYW1lKSkgfHwgeyBmaWxlOiBudWxsIH1cbiAgICAgIGF3YWl0IHR4LmRvbmVcbiAgICAgIHJldHVybiBmaWxlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmc6JywgZXJyb3IpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGI/LmNsb3NlKClcbiAgfVxuXG4gIHByaXZhdGUgS0VZUEFUSCA9ICdmaWxlTmFtZSdcbiAgcHJpdmF0ZSBEQVRBQkFTRSA9ICdFeHRlbnNpb25TdG9yZSdcbiAgcHJpdmF0ZSBEQVRBQkFTRV9WRVJTSU9OID0gMVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlTWFuYWdlbWVudFxuIl19