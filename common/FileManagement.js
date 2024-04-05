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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZU1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ydWlnL3NyYy9jb21tb24vRmlsZU1hbmFnZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELDZCQUEwQztBQUUxQyxJQUFLLGtCQUdKO0FBSEQsV0FBSyxrQkFBa0I7SUFDckIsMkNBQXFCLENBQUE7SUFDckIsNkNBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUhJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHdEI7QUFFRCxJQUFZLEtBR1g7QUFIRCxXQUFZLEtBQUs7SUFDZix3QkFBZSxDQUFBO0lBQ2YsMEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUdoQjtBQUVELE1BQU0sY0FBYztJQUFwQjtRQUNFLE9BQUUsR0FBMEIsSUFBVyxDQUFBO1FBb0UvQixZQUFPLEdBQUcsVUFBVSxDQUFBO1FBQ3BCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQTtRQUMzQixxQkFBZ0IsR0FBRyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQXJFTyxJQUFJOztZQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxJQUFBLFlBQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDM0QsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7b0JBQ2QsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7b0JBQzdELEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUM5RCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLFFBQWdCLEVBQUUsV0FBMEIsRUFBRSxJQUFZLEVBQUUsUUFBZSxLQUFLLENBQUMsTUFBTTs7WUFDcEcsSUFBSTtnQkFDRixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ25FLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQzFELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQTthQUNkO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQTthQUMzQztRQUNILENBQUM7S0FBQTtJQUVELE9BQU8sQ0FBQyxTQUFpQjtRQUN2QixRQUFRLFNBQVMsRUFBRTtZQUNqQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxZQUFZLENBQUE7WUFDckIsS0FBSyxNQUFNO2dCQUNULE9BQU8sV0FBVyxDQUFBO1lBQ3BCLEtBQUssS0FBSztnQkFDUixPQUFPLFVBQVUsQ0FBQTtZQUNuQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxpQkFBaUIsQ0FBQTtZQUMxQixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxrQkFBa0IsQ0FBQTtZQUMzQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxlQUFlLENBQUE7WUFDeEIsS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxZQUFZLENBQUE7WUFDckIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sV0FBVyxDQUFBO1lBQ3BCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQTtZQUNwQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxpQkFBaUIsQ0FBQTtZQUMxQjtnQkFDRSxPQUFPLDBCQUEwQixDQUFBO1NBQ3BDO0lBQ0gsQ0FBQztJQUVLLE9BQU8sQ0FBQyxRQUFnQixFQUFFLFFBQWUsS0FBSyxDQUFDLE1BQU07O1lBQ3pELElBQUk7Z0JBQ0YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNsRSxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQTtnQkFDOUQsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFBO2dCQUNiLE9BQU8sSUFBSSxDQUFBO2FBQ1o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUN6QyxPQUFPLElBQUksQ0FBQTthQUNaO1FBQ0gsQ0FBQztLQUFBO0lBRUQsS0FBSzs7UUFDSCxNQUFBLElBQUksQ0FBQyxFQUFFLDBDQUFFLEtBQUssRUFBRSxDQUFBO0lBQ2xCLENBQUM7Q0FLRjtBQUVELGtCQUFlLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IElEQlBEYXRhYmFzZSwgb3BlbkRCIH0gZnJvbSAnaWRiJ1xuXG5lbnVtIEZpbGVNYW5hZ2VtZW50TW9kZSB7XG4gIFJFQURPTkxZID0gJ3JlYWRvbmx5JyxcbiAgUkVBRFdSSVRFID0gJ3JlYWR3cml0ZScsXG59XG5cbmV4cG9ydCBlbnVtIFRhYmxlIHtcbiAgTUVUQVMgPSAnbWV0YXMnLFxuICBBU1NFVFMgPSAnYXNzZXRzJyxcbn1cblxuY2xhc3MgRmlsZU1hbmFnZW1lbnQge1xuICBkYjogSURCUERhdGFiYXNlPHVua25vd24+ID0gbnVsbCBhcyBhbnlcblxuICBhc3luYyBvcGVuKCkge1xuICAgIHRoaXMuZGIgPSBhd2FpdCBvcGVuREIodGhpcy5EQVRBQkFTRSwgdGhpcy5EQVRBQkFTRV9WRVJTSU9OLCB7XG4gICAgICB1cGdyYWRlOiAoZGIpID0+IHtcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoVGFibGUuQVNTRVRTLCB7IGtleVBhdGg6IHRoaXMuS0VZUEFUSCB9KVxuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShUYWJsZS5NRVRBUywgeyBrZXlQYXRoOiB0aGlzLktFWVBBVEggfSlcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHNhdmVGaWxlKGZpbGVOYW1lOiBzdHJpbmcsIGZpbGVDb250ZW50OiBzdHJpbmcgfCBCbG9iLCB0eXBlOiBzdHJpbmcsIHRhYmxlOiBUYWJsZSA9IFRhYmxlLkFTU0VUUykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0eCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGFibGUsIEZpbGVNYW5hZ2VtZW50TW9kZS5SRUFEV1JJVEUpXG4gICAgICBjb25zdCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKHRhYmxlKVxuICAgICAgY29uc3QgbWltZSA9IHRoaXMuZ2V0TWltZSh0eXBlKVxuICAgICAgc3RvcmUucHV0KHsgZmlsZU5hbWUsIGZpbGU6IHsgbWltZSwgdHlwZSwgZmlsZUNvbnRlbnQgfSB9KVxuICAgICAgYXdhaXQgdHguZG9uZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZmlsZTonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICBnZXRNaW1lKGV4dGVuc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xuICAgICAgY2FzZSAndHh0JzpcbiAgICAgICAgcmV0dXJuICd0ZXh0L3BsYWluJ1xuICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgIHJldHVybiAndGV4dC9odG1sJ1xuICAgICAgY2FzZSAnY3NzJzpcbiAgICAgICAgcmV0dXJuICd0ZXh0L2NzcydcbiAgICAgIGNhc2UgJ2pzJzpcbiAgICAgICAgcmV0dXJuICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9zdmcreG1sJ1xuICAgICAgY2FzZSAnanBnJzpcbiAgICAgIGNhc2UgJ2pwZWcnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2pwZWcnXG4gICAgICBjYXNlICdwbmcnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL3BuZydcbiAgICAgIGNhc2UgJ2dpZic6XG4gICAgICAgIHJldHVybiAnaW1hZ2UvZ2lmJ1xuICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9wZGYnXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRGaWxlKGZpbGVOYW1lOiBzdHJpbmcsIHRhYmxlOiBUYWJsZSA9IFRhYmxlLkFTU0VUUykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0eCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGFibGUsIEZpbGVNYW5hZ2VtZW50TW9kZS5SRUFET05MWSlcbiAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUodGFibGUpXG4gICAgICBjb25zdCB7IGZpbGUgfSA9IChhd2FpdCBzdG9yZS5nZXQoZmlsZU5hbWUpKSB8fCB7IGZpbGU6IG51bGwgfVxuICAgICAgYXdhaXQgdHguZG9uZVxuICAgICAgcmV0dXJuIGZpbGVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmV0cmlldmluZzonLCBlcnJvcilcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kYj8uY2xvc2UoKVxuICB9XG5cbiAgcHJpdmF0ZSBLRVlQQVRIID0gJ2ZpbGVOYW1lJ1xuICBwcml2YXRlIERBVEFCQVNFID0gJ0V4dGVuc2lvblN0b3JlJ1xuICBwcml2YXRlIERBVEFCQVNFX1ZFUlNJT04gPSAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVNYW5hZ2VtZW50XG4iXX0=