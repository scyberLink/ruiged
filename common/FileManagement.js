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
/* eslint-disable @typescript-eslint/no-explicit-any */
const idb_1 = require("idb");
var FileManagementMode;
(function (FileManagementMode) {
    FileManagementMode["READONLY"] = "readonly";
    FileManagementMode["READWRITE"] = "readwrite";
})(FileManagementMode || (FileManagementMode = {}));
class FileManagement {
    constructor() {
        this.db = null;
        this.KEYPATH = 'fileName';
        this.DATABASE = 'ExtensionStore';
        this.DATABASE_VERSION = 1;
        this.ASSET_TABLE = 'assets';
        this.METAS_TABLE = 'metas';
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, idb_1.openDB)(this.DATABASE, this.DATABASE_VERSION, {
                upgrade: (db) => {
                    db.createObjectStore(this.ASSET_TABLE, { keyPath: this.KEYPATH });
                    db.createObjectStore(this.METAS_TABLE, { keyPath: this.KEYPATH });
                },
            });
        });
    }
    saveFile(fileName, fileContent, type, table = this.ASSET_TABLE) {
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
    getFile(fileName, table = this.ASSET_TABLE) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL0ZpbGVNYW5hZ2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELDZCQUEwQztBQUUxQyxJQUFLLGtCQUdKO0FBSEQsV0FBSyxrQkFBa0I7SUFDckIsMkNBQXFCLENBQUE7SUFDckIsNkNBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUhJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHdEI7QUFJRCxNQUFNLGNBQWM7SUFBcEI7UUFDRSxPQUFFLEdBQTBCLElBQVcsQ0FBQTtRQW9FL0IsWUFBTyxHQUFHLFVBQVUsQ0FBQTtRQUNwQixhQUFRLEdBQUcsZ0JBQWdCLENBQUE7UUFDM0IscUJBQWdCLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLGdCQUFXLEdBQVUsUUFBUSxDQUFBO1FBQzdCLGdCQUFXLEdBQVUsT0FBTyxDQUFBO0lBQ3RDLENBQUM7SUF2RU8sSUFBSTs7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBQSxZQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzNELE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO29CQUNkLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO29CQUNqRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtnQkFDbkUsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxRQUFnQixFQUFFLFdBQTBCLEVBQUUsSUFBWSxFQUFFLFFBQWUsSUFBSSxDQUFDLFdBQVc7O1lBQ3hHLElBQUk7Z0JBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNuRSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUMxRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUE7YUFDZDtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDM0M7UUFDSCxDQUFDO0tBQUE7SUFFRCxPQUFPLENBQUMsU0FBaUI7UUFDdkIsUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sWUFBWSxDQUFBO1lBQ3JCLEtBQUssTUFBTTtnQkFDVCxPQUFPLFdBQVcsQ0FBQTtZQUNwQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxVQUFVLENBQUE7WUFDbkIsS0FBSyxJQUFJO2dCQUNQLE9BQU8saUJBQWlCLENBQUE7WUFDMUIsS0FBSyxNQUFNO2dCQUNULE9BQU8sa0JBQWtCLENBQUE7WUFDM0IsS0FBSyxLQUFLO2dCQUNSLE9BQU8sZUFBZSxDQUFBO1lBQ3hCLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxNQUFNO2dCQUNULE9BQU8sWUFBWSxDQUFBO1lBQ3JCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQTtZQUNwQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxXQUFXLENBQUE7WUFDcEIsS0FBSyxLQUFLO2dCQUNSLE9BQU8saUJBQWlCLENBQUE7WUFDMUI7Z0JBQ0UsT0FBTywwQkFBMEIsQ0FBQTtTQUNwQztJQUNILENBQUM7SUFFSyxPQUFPLENBQUMsUUFBZ0IsRUFBRSxRQUFlLElBQUksQ0FBQyxXQUFXOztZQUM3RCxJQUFJO2dCQUNGLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDbEUsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUE7Z0JBQzlELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQTtnQkFDYixPQUFPLElBQUksQ0FBQTthQUNaO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDekMsT0FBTyxJQUFJLENBQUE7YUFDWjtRQUNILENBQUM7S0FBQTtJQUVELEtBQUs7O1FBQ0gsTUFBQSxJQUFJLENBQUMsRUFBRSwwQ0FBRSxLQUFLLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBT0Y7QUFFRCxrQkFBZSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBJREJQRGF0YWJhc2UsIG9wZW5EQiB9IGZyb20gJ2lkYidcblxuZW51bSBGaWxlTWFuYWdlbWVudE1vZGUge1xuICBSRUFET05MWSA9ICdyZWFkb25seScsXG4gIFJFQURXUklURSA9ICdyZWFkd3JpdGUnLFxufVxuXG50eXBlIFRBQkxFID0gJ21ldGFzJyB8ICdhc3NldHMnXG5cbmNsYXNzIEZpbGVNYW5hZ2VtZW50IHtcbiAgZGI6IElEQlBEYXRhYmFzZTx1bmtub3duPiA9IG51bGwgYXMgYW55XG5cbiAgYXN5bmMgb3BlbigpIHtcbiAgICB0aGlzLmRiID0gYXdhaXQgb3BlbkRCKHRoaXMuREFUQUJBU0UsIHRoaXMuREFUQUJBU0VfVkVSU0lPTiwge1xuICAgICAgdXBncmFkZTogKGRiKSA9PiB7XG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMuQVNTRVRfVEFCTEUsIHsga2V5UGF0aDogdGhpcy5LRVlQQVRIIH0pXG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMuTUVUQVNfVEFCTEUsIHsga2V5UGF0aDogdGhpcy5LRVlQQVRIIH0pXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBzYXZlRmlsZShmaWxlTmFtZTogc3RyaW5nLCBmaWxlQ29udGVudDogc3RyaW5nIHwgQmxvYiwgdHlwZTogc3RyaW5nLCB0YWJsZTogVEFCTEUgPSB0aGlzLkFTU0VUX1RBQkxFKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHR4ID0gdGhpcy5kYi50cmFuc2FjdGlvbih0YWJsZSwgRmlsZU1hbmFnZW1lbnRNb2RlLlJFQURXUklURSlcbiAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUodGFibGUpXG4gICAgICBjb25zdCBtaW1lID0gdGhpcy5nZXRNaW1lKHR5cGUpXG4gICAgICBzdG9yZS5wdXQoeyBmaWxlTmFtZSwgZmlsZTogeyBtaW1lLCB0eXBlLCBmaWxlQ29udGVudCB9IH0pXG4gICAgICBhd2FpdCB0eC5kb25lXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBmaWxlOicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGdldE1pbWUoZXh0ZW5zaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XG4gICAgICBjYXNlICd0eHQnOlxuICAgICAgICByZXR1cm4gJ3RleHQvcGxhaW4nXG4gICAgICBjYXNlICdodG1sJzpcbiAgICAgICAgcmV0dXJuICd0ZXh0L2h0bWwnXG4gICAgICBjYXNlICdjc3MnOlxuICAgICAgICByZXR1cm4gJ3RleHQvY3NzJ1xuICAgICAgY2FzZSAnanMnOlxuICAgICAgICByZXR1cm4gJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICBjYXNlICdzdmcnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICBjYXNlICdqcGcnOlxuICAgICAgY2FzZSAnanBlZyc6XG4gICAgICAgIHJldHVybiAnaW1hZ2UvanBlZydcbiAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgIHJldHVybiAnaW1hZ2UvcG5nJ1xuICAgICAgY2FzZSAnZ2lmJzpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9naWYnXG4gICAgICBjYXNlICdwZGYnOlxuICAgICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3BkZidcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEZpbGUoZmlsZU5hbWU6IHN0cmluZywgdGFibGU6IFRBQkxFID0gdGhpcy5BU1NFVF9UQUJMRSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0eCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGFibGUsIEZpbGVNYW5hZ2VtZW50TW9kZS5SRUFET05MWSlcbiAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUodGFibGUpXG4gICAgICBjb25zdCB7IGZpbGUgfSA9IChhd2FpdCBzdG9yZS5nZXQoZmlsZU5hbWUpKSB8fCB7IGZpbGU6IG51bGwgfVxuICAgICAgYXdhaXQgdHguZG9uZVxuICAgICAgcmV0dXJuIGZpbGVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmV0cmlldmluZzonLCBlcnJvcilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kYj8uY2xvc2UoKVxuICB9XG5cbiAgcHJpdmF0ZSBLRVlQQVRIID0gJ2ZpbGVOYW1lJ1xuICBwcml2YXRlIERBVEFCQVNFID0gJ0V4dGVuc2lvblN0b3JlJ1xuICBwcml2YXRlIERBVEFCQVNFX1ZFUlNJT04gPSAxXG4gIHByaXZhdGUgQVNTRVRfVEFCTEU6IFRBQkxFID0gJ2Fzc2V0cydcbiAgcHJpdmF0ZSBNRVRBU19UQUJMRTogVEFCTEUgPSAnbWV0YXMnXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVNYW5hZ2VtZW50XG4iXX0=