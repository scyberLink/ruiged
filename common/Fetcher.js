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
exports.FetcherResponseType = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
const SharedConfig_1 = __importDefault(require("./SharedConfig"));
const md5_1 = __importStar(require("./md5"));
const RestEndpoints_1 = require("../configs/RestEndpoints");
const axios_1 = __importDefault(require("axios"));
var FetcherResponseType;
(function (FetcherResponseType) {
    FetcherResponseType[FetcherResponseType["JSON"] = 0] = "JSON";
    FetcherResponseType[FetcherResponseType["RESPONSE"] = 1] = "RESPONSE";
    FetcherResponseType[FetcherResponseType["BLOB"] = 2] = "BLOB";
})(FetcherResponseType || (FetcherResponseType = {}));
exports.FetcherResponseType = FetcherResponseType;
class Fetcher {
    constructor() {
        this.base_url = `${RestEndpoints_1.BASE}/${RestEndpoints_1.API_VERSION}`;
        this.listeners = {};
        this.frequency = 30000;
        this.FAIL_SAFE_THRESHOLD = 500;
    }
    addListenerForUrl(fetchOptions, listener, frequency = this.frequency, returnType = FetcherResponseType.JSON, failstop = this.FAIL_SAFE_THRESHOLD) {
        if (!fetchOptions)
            throw new Error('Invalid fetch options provided');
        if (!listener)
            throw new Error('Invalid listener provided');
        if (!returnType)
            throw new Error('Invalid returnType provided');
        if (!frequency)
            throw new Error('Invalid frequency provided');
        if (!failstop)
            throw new Error('Invalid failstop provided');
        const id = this.getId();
        const intervalId = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            const intervalOwner = this.listeners[id];
            const hasReachThreshHold = intervalOwner.fail - intervalOwner.success >= failstop;
            try {
                const data = yield this.fetch(fetchOptions, returnType);
                if (data) {
                    ++intervalOwner.success;
                    listener(data);
                }
                else {
                    if (hasReachThreshHold) {
                        this.removeListener(id);
                    }
                    else {
                        ++intervalOwner.fail;
                    }
                }
            }
            catch (e) {
                if (hasReachThreshHold) {
                    this.removeListener(id);
                }
                else {
                    ++intervalOwner.fail;
                }
            }
        }), frequency);
        this.listeners[id] = {
            fetchOptions: fetchOptions,
            listener: listener,
            intervalId: intervalId,
            fail: 0,
            success: 0,
        };
        return id;
    }
    removeListener(id) {
        if (!id)
            throw Error('Id required to remove listener');
        if (Object.hasOwnProperty.call(this.listeners, id)) {
            this.clear(this.listeners[id].intervalId);
            delete this.listeners[id];
        }
    }
    release() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                let listenersArr = Object.values(this.listeners);
                listenersArr.forEach((listener) => {
                    this.clear(listener.intervalId);
                });
                this.listeners = {};
                listenersArr = [];
                resolve(true);
            });
        });
    }
    fetch(options, returnType = FetcherResponseType.JSON) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let url;
            const defaultOptions = {
                method: 'POST',
            };
            if (typeof options === 'string') {
                url = options;
                defaultOptions.method = 'GET';
                options = defaultOptions;
            }
            else {
                url = options.url;
                if (url) {
                    delete options.url;
                }
                else {
                    throw new Error('URL not found in options');
                }
                options = Object.assign(Object.assign({}, defaultOptions), options);
            }
            options.headers = Object.assign({ Accept: 'application/json', 'Content-Type': 'application/json', 'Cache-Control': ' no-cache' }, options.headers);
            const auth = SharedConfig_1.default === null || SharedConfig_1.default === void 0 ? void 0 : SharedConfig_1.default.getLocalData('auth');
            auth && (options.headers['Authorization'] = auth);
            if (url.search('http') < 1) {
                url = `${this.base_url}${url}`;
            }
            options = Object.assign({ url }, options);
            returnType == FetcherResponseType.BLOB && (options = Object.assign(Object.assign({}, options), { responseType: 'blob' }));
            let res;
            try {
                res = yield (0, axios_1.default)(options);
            }
            catch (err) {
                if (!((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data)) {
                    throw new Error(err.message);
                }
                res = err.response;
            }
            const data = res === null || res === void 0 ? void 0 : res.data;
            if (((_b = data === null || data === void 0 ? void 0 : data.connection) === null || _b === void 0 ? void 0 : _b.statusCode) == 401) {
                SharedConfig_1.default.removeLocalData('auth');
            }
            return returnType == FetcherResponseType.RESPONSE ? res : data;
        });
    }
    clear(intervalId) {
        clearInterval(intervalId);
    }
    getId() {
        let id = (0, md5_1.default)(`${(0, md5_1.rand)()}`);
        while (Object.hasOwnProperty.call(this.listeners, id)) {
            id = (0, md5_1.default)((0, md5_1.rand)());
        }
        return id;
    }
}
exports.default = Fetcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmV0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vRmV0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RCxrQ0FBa0M7QUFDbEMsa0VBQXlDO0FBQ3pDLDZDQUFpQztBQUNqQyw0REFBNEQ7QUFDNUQsa0RBQTRDO0FBSTVDLElBQUssbUJBSUo7QUFKRCxXQUFLLG1CQUFtQjtJQUN0Qiw2REFBSSxDQUFBO0lBQ0oscUVBQVEsQ0FBQTtJQUNSLDZEQUFJLENBQUE7QUFDTixDQUFDLEVBSkksbUJBQW1CLEtBQW5CLG1CQUFtQixRQUl2QjtBQWtKUSxrREFBbUI7QUFoSjVCLE1BQU0sT0FBTztJQVFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLG9CQUFJLElBQUksMkJBQVcsRUFBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUE7SUFDaEMsQ0FBQztJQUVELGlCQUFpQixDQUNmLFlBQXdCLEVBQ3hCLFFBQWlDLEVBQ2pDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUMxQixVQUFVLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxFQUNyQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtRQUVuQyxJQUFJLENBQUMsWUFBWTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUMsUUFBUTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsVUFBVTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENB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dHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG5pbXBvcnQgU2hhcmVkQ29uZmlnIGZyb20gJy4vU2hhcmVkQ29uZmlnJ1xuaW1wb3J0IG1kNSwgeyByYW5kIH0gZnJvbSAnLi9tZDUnXG5pbXBvcnQgeyBBUElfVkVSU0lPTiwgQkFTRSB9IGZyb20gJy4uL2NvbmZpZ3MvUmVzdEVuZHBvaW50cydcbmltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IElGZXRjaERhdGEgZnJvbSAnLi9tb2RlbHMvSUZldGNoRGF0YSdcblxuZW51bSBGZXRjaGVyUmVzcG9uc2VUeXBlIHtcbiAgSlNPTixcbiAgUkVTUE9OU0UsXG4gIEJMT0IsXG59XG5cbmNsYXNzIEZldGNoZXIge1xuICBzdGF0aWMgaW5zdGFuY2U6IEZldGNoZXJcblxuICBiYXNlX3VybDogc3RyaW5nXG4gIGxpc3RlbmVyczogSUFueU9iamVjdFxuICBmcmVxdWVuY3k6IG51bWJlclxuICBGQUlMX1NBRkVfVEhSRVNIT0xEOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VfdXJsID0gYCR7QkFTRX0vJHtBUElfVkVSU0lPTn1gXG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fVxuICAgIHRoaXMuZnJlcXVlbmN5ID0gMzAwMDBcbiAgICB0aGlzLkZBSUxfU0FGRV9USFJFU0hPTEQgPSA1MDBcbiAgfVxuXG4gIGFkZExpc3RlbmVyRm9yVXJsKFxuICAgIGZldGNoT3B0aW9uczogSUFueU9iamVjdCxcbiAgICBsaXN0ZW5lcjogKGFyZzA6IHVua25vd24pID0+IHZvaWQsXG4gICAgZnJlcXVlbmN5ID0gdGhpcy5mcmVxdWVuY3ksXG4gICAgcmV0dXJuVHlwZSA9IEZldGNoZXJSZXNwb25zZVR5cGUuSlNPTixcbiAgICBmYWlsc3RvcCA9IHRoaXMuRkFJTF9TQUZFX1RIUkVTSE9MRCxcbiAgKSB7XG4gICAgaWYgKCFmZXRjaE9wdGlvbnMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmZXRjaCBvcHRpb25zIHByb3ZpZGVkJylcbiAgICBpZiAoIWxpc3RlbmVyKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbGlzdGVuZXIgcHJvdmlkZWQnKVxuICAgIGlmICghcmV0dXJuVHlwZSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJldHVyblR5cGUgcHJvdmlkZWQnKVxuICAgIGlmICghZnJlcXVlbmN5KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZnJlcXVlbmN5IHByb3ZpZGVkJylcbiAgICBpZiAoIWZhaWxzdG9wKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZmFpbHN0b3AgcHJvdmlkZWQnKVxuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCgpXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGludGVydmFsT3duZXIgPSB0aGlzLmxpc3RlbmVyc1tpZF1cbiAgICAgIGNvbnN0IGhhc1JlYWNoVGhyZXNoSG9sZCA9IGludGVydmFsT3duZXIuZmFpbCAtIGludGVydmFsT3duZXIuc3VjY2VzcyA+PSBmYWlsc3RvcFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2goZmV0Y2hPcHRpb25zLCByZXR1cm5UeXBlKVxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICsraW50ZXJ2YWxPd25lci5zdWNjZXNzXG4gICAgICAgICAgbGlzdGVuZXIoZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaGFzUmVhY2hUaHJlc2hIb2xkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGlkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2ludGVydmFsT3duZXIuZmFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGFzUmVhY2hUaHJlc2hIb2xkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihpZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICArK2ludGVydmFsT3duZXIuZmFpbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZnJlcXVlbmN5KVxuICAgIHRoaXMubGlzdGVuZXJzW2lkXSA9IHtcbiAgICAgIGZldGNoT3B0aW9uczogZmV0Y2hPcHRpb25zLFxuICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgaW50ZXJ2YWxJZDogaW50ZXJ2YWxJZCxcbiAgICAgIGZhaWw6IDAsXG4gICAgICBzdWNjZXNzOiAwLFxuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGlkOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlkKSB0aHJvdyBFcnJvcignSWQgcmVxdWlyZWQgdG8gcmVtb3ZlIGxpc3RlbmVyJylcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5saXN0ZW5lcnMsIGlkKSkge1xuICAgICAgdGhpcy5jbGVhcih0aGlzLmxpc3RlbmVyc1tpZF0uaW50ZXJ2YWxJZClcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tpZF1cbiAgICB9XG4gIH1cblxuICBhc3luYyByZWxlYXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGxpc3RlbmVyc0FyciA9IE9iamVjdC52YWx1ZXModGhpcy5saXN0ZW5lcnMpXG4gICAgICBsaXN0ZW5lcnNBcnIuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhcihsaXN0ZW5lci5pbnRlcnZhbElkKVxuICAgICAgfSlcbiAgICAgIHRoaXMubGlzdGVuZXJzID0ge31cbiAgICAgIGxpc3RlbmVyc0FyciA9IFtdXG4gICAgICByZXNvbHZlKHRydWUpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoKFxuICAgIG9wdGlvbnM6IElBbnlPYmplY3QgfCBzdHJpbmcsXG4gICAgcmV0dXJuVHlwZSA9IEZldGNoZXJSZXNwb25zZVR5cGUuSlNPTixcbiAgKTogUHJvbWlzZTxJRmV0Y2hEYXRhIHwgQXhpb3NSZXNwb25zZSB8IEJsb2I+IHtcbiAgICBsZXQgdXJsXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgdXJsID0gb3B0aW9uc1xuICAgICAgZGVmYXVsdE9wdGlvbnMubWV0aG9kID0gJ0dFVCdcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybFxuICAgICAgaWYgKHVybCkge1xuICAgICAgICBkZWxldGUgb3B0aW9ucy51cmxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVVJMIG5vdCBmb3VuZCBpbiBvcHRpb25zJylcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH1cbiAgICB9XG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnIG5vLWNhY2hlJyxcbiAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICB9XG4gICAgY29uc3QgYXV0aCA9IFNoYXJlZENvbmZpZz8uZ2V0TG9jYWxEYXRhKCdhdXRoJylcbiAgICBhdXRoICYmIChvcHRpb25zLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGF1dGgpXG4gICAgaWYgKHVybC5zZWFyY2goJ2h0dHAnKSA8IDEpIHtcbiAgICAgIHVybCA9IGAke3RoaXMuYmFzZV91cmx9JHt1cmx9YFxuICAgIH1cbiAgICBvcHRpb25zID0geyB1cmwsIC4uLm9wdGlvbnMgfVxuICAgIHJldHVyblR5cGUgPT0gRmV0Y2hlclJlc3BvbnNlVHlwZS5CTE9CICYmIChvcHRpb25zID0geyAuLi5vcHRpb25zLCByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxuICAgIGxldCByZXNcbiAgICB0cnkge1xuICAgICAgcmVzID0gYXdhaXQgYXhpb3Mob3B0aW9ucylcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgaWYgKCFlcnI/LnJlc3BvbnNlPy5kYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIubWVzc2FnZSlcbiAgICAgIH1cbiAgICAgIHJlcyA9IGVyci5yZXNwb25zZVxuICAgIH1cbiAgICBjb25zdCBkYXRhID0gcmVzPy5kYXRhXG4gICAgaWYgKGRhdGE/LmNvbm5lY3Rpb24/LnN0YXR1c0NvZGUgPT0gNDAxKSB7XG4gICAgICBTaGFyZWRDb25maWcucmVtb3ZlTG9jYWxEYXRhKCdhdXRoJylcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblR5cGUgPT0gRmV0Y2hlclJlc3BvbnNlVHlwZS5SRVNQT05TRSA/IHJlcyA6IGRhdGFcbiAgfVxuXG4gIGNsZWFyKGludGVydmFsSWQ6IGFueSkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIGxldCBpZCA9IG1kNShgJHtyYW5kKCl9YClcbiAgICB3aGlsZSAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5saXN0ZW5lcnMsIGlkKSkge1xuICAgICAgaWQgPSBtZDUocmFuZCgpKVxuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfVxufVxuXG5leHBvcnQgeyBGZXRjaGVyUmVzcG9uc2VUeXBlIH1cbmV4cG9ydCBkZWZhdWx0IEZldGNoZXJcbiJdfQ==