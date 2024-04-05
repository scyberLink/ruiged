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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmV0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3J1aWcvc3JjL2NvbW1vbi9GZXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELGtDQUFrQztBQUNsQyxrRUFBeUM7QUFDekMsNkNBQWlDO0FBQ2pDLDREQUE0RDtBQUM1RCxrREFBNEM7QUFJNUMsSUFBSyxtQkFJSjtBQUpELFdBQUssbUJBQW1CO0lBQ3RCLDZEQUFJLENBQUE7SUFDSixxRUFBUSxDQUFBO0lBQ1IsNkRBQUksQ0FBQTtBQUNOLENBQUMsRUFKSSxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSXZCO0FBa0pRLGtEQUFtQjtBQWhKNUIsTUFBTSxPQUFPO0lBUVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsb0JBQUksSUFBSSwyQkFBVyxFQUFFLENBQUE7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsaUJBQWlCLENBQ2YsWUFBd0IsRUFDeEIsUUFBaUMsRUFDakMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQzFCLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLEVBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CO1FBRW5DLElBQUksQ0FBQyxZQUFZO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxRQUFRO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQzNELElBQUksQ0FBQyxVQUFVO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1FBQy9ELElB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YmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MgKi9cbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi9TaGFyZWRDb25maWcnXG5pbXBvcnQgbWQ1LCB7IHJhbmQgfSBmcm9tICcuL21kNSdcbmltcG9ydCB7IEFQSV9WRVJTSU9OLCBCQVNFIH0gZnJvbSAnLi4vY29uZmlncy9SZXN0RW5kcG9pbnRzJ1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgSUZldGNoRGF0YSBmcm9tICcuL21vZGVscy9JRmV0Y2hEYXRhJ1xuXG5lbnVtIEZldGNoZXJSZXNwb25zZVR5cGUge1xuICBKU09OLFxuICBSRVNQT05TRSxcbiAgQkxPQixcbn1cblxuY2xhc3MgRmV0Y2hlciB7XG4gIHN0YXRpYyBpbnN0YW5jZTogRmV0Y2hlclxuXG4gIGJhc2VfdXJsOiBzdHJpbmdcbiAgbGlzdGVuZXJzOiBJQW55T2JqZWN0XG4gIGZyZXF1ZW5jeTogbnVtYmVyXG4gIEZBSUxfU0FGRV9USFJFU0hPTEQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZV91cmwgPSBgJHtCQVNFfS8ke0FQSV9WRVJTSU9OfWBcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9XG4gICAgdGhpcy5mcmVxdWVuY3kgPSAzMDAwMFxuICAgIHRoaXMuRkFJTF9TQUZFX1RIUkVTSE9MRCA9IDUwMFxuICB9XG5cbiAgYWRkTGlzdGVuZXJGb3JVcmwoXG4gICAgZmV0Y2hPcHRpb25zOiBJQW55T2JqZWN0LFxuICAgIGxpc3RlbmVyOiAoYXJnMDogdW5rbm93bikgPT4gdm9pZCxcbiAgICBmcmVxdWVuY3kgPSB0aGlzLmZyZXF1ZW5jeSxcbiAgICByZXR1cm5UeXBlID0gRmV0Y2hlclJlc3BvbnNlVHlwZS5KU09OLFxuICAgIGZhaWxzdG9wID0gdGhpcy5GQUlMX1NBRkVfVEhSRVNIT0xELFxuICApIHtcbiAgICBpZiAoIWZldGNoT3B0aW9ucykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGZldGNoIG9wdGlvbnMgcHJvdmlkZWQnKVxuICAgIGlmICghbGlzdGVuZXIpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBsaXN0ZW5lciBwcm92aWRlZCcpXG4gICAgaWYgKCFyZXR1cm5UeXBlKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmV0dXJuVHlwZSBwcm92aWRlZCcpXG4gICAgaWYgKCFmcmVxdWVuY3kpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmcmVxdWVuY3kgcHJvdmlkZWQnKVxuICAgIGlmICghZmFpbHN0b3ApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmYWlsc3RvcCBwcm92aWRlZCcpXG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKClcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJ2YWxPd25lciA9IHRoaXMubGlzdGVuZXJzW2lkXVxuICAgICAgY29uc3QgaGFzUmVhY2hUaHJlc2hIb2xkID0gaW50ZXJ2YWxPd25lci5mYWlsIC0gaW50ZXJ2YWxPd25lci5zdWNjZXNzID49IGZhaWxzdG9wXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mZXRjaChmZXRjaE9wdGlvbnMsIHJldHVyblR5cGUpXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgKytpbnRlcnZhbE93bmVyLnN1Y2Nlc3NcbiAgICAgICAgICBsaXN0ZW5lcihkYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChoYXNSZWFjaFRocmVzaEhvbGQpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoaWQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraW50ZXJ2YWxPd25lci5mYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoYXNSZWFjaFRocmVzaEhvbGQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICsraW50ZXJ2YWxPd25lci5mYWlsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBmcmVxdWVuY3kpXG4gICAgdGhpcy5saXN0ZW5lcnNbaWRdID0ge1xuICAgICAgZmV0Y2hPcHRpb25zOiBmZXRjaE9wdGlvbnMsXG4gICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICBpbnRlcnZhbElkOiBpbnRlcnZhbElkLFxuICAgICAgZmFpbDogMCxcbiAgICAgIHN1Y2Nlc3M6IDAsXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoaWQ6IHN0cmluZykge1xuICAgIGlmICghaWQpIHRocm93IEVycm9yKCdJZCByZXF1aXJlZCB0byByZW1vdmUgbGlzdGVuZXInKVxuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmxpc3RlbmVycywgaWQpKSB7XG4gICAgICB0aGlzLmNsZWFyKHRoaXMubGlzdGVuZXJzW2lkXS5pbnRlcnZhbElkKVxuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW2lkXVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbGVhc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgbGlzdGVuZXJzQXJyID0gT2JqZWN0LnZhbHVlcyh0aGlzLmxpc3RlbmVycylcbiAgICAgIGxpc3RlbmVyc0Fyci5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICB0aGlzLmNsZWFyKGxpc3RlbmVyLmludGVydmFsSWQpXG4gICAgICB9KVxuICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fVxuICAgICAgbGlzdGVuZXJzQXJyID0gW11cbiAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2goXG4gICAgb3B0aW9uczogSUFueU9iamVjdCB8IHN0cmluZyxcbiAgICByZXR1cm5UeXBlID0gRmV0Y2hlclJlc3BvbnNlVHlwZS5KU09OLFxuICApOiBQcm9taXNlPElGZXRjaERhdGEgfCBBeGlvc1Jlc3BvbnNlIHwgQmxvYj4ge1xuICAgIGxldCB1cmxcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1cmwgPSBvcHRpb25zXG4gICAgICBkZWZhdWx0T3B0aW9ucy5tZXRob2QgPSAnR0VUJ1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zXG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IG9wdGlvbnMudXJsXG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLnVybFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVUkwgbm90IGZvdW5kIGluIG9wdGlvbnMnKVxuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuICAgIH1cbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICcgbm8tY2FjaGUnLFxuICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgIH1cbiAgICBjb25zdCBhdXRoID0gU2hhcmVkQ29uZmlnPy5nZXRMb2NhbERhdGEoJ2F1dGgnKVxuICAgIGF1dGggJiYgKG9wdGlvbnMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYXV0aClcbiAgICBpZiAodXJsLnNlYXJjaCgnaHR0cCcpIDwgMSkge1xuICAgICAgdXJsID0gYCR7dGhpcy5iYXNlX3VybH0ke3VybH1gXG4gICAgfVxuICAgIG9wdGlvbnMgPSB7IHVybCwgLi4ub3B0aW9ucyB9XG4gICAgcmV0dXJuVHlwZSA9PSBGZXRjaGVyUmVzcG9uc2VUeXBlLkJMT0IgJiYgKG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pXG4gICAgbGV0IHJlc1xuICAgIHRyeSB7XG4gICAgICByZXMgPSBhd2FpdCBheGlvcyhvcHRpb25zKVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBpZiAoIWVycj8ucmVzcG9uc2U/LmRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgfVxuICAgICAgcmVzID0gZXJyLnJlc3BvbnNlXG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSByZXM/LmRhdGFcbiAgICBpZiAoZGF0YT8uY29ubmVjdGlvbj8uc3RhdHVzQ29kZSA9PSA0MDEpIHtcbiAgICAgIFNoYXJlZENvbmZpZy5yZW1vdmVMb2NhbERhdGEoJ2F1dGgnKVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuVHlwZSA9PSBGZXRjaGVyUmVzcG9uc2VUeXBlLlJFU1BPTlNFID8gcmVzIDogZGF0YVxuICB9XG5cbiAgY2xlYXIoaW50ZXJ2YWxJZDogYW55KSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgbGV0IGlkID0gbWQ1KGAke3JhbmQoKX1gKVxuICAgIHdoaWxlIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmxpc3RlbmVycywgaWQpKSB7XG4gICAgICBpZCA9IG1kNShyYW5kKCkpXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9XG59XG5cbmV4cG9ydCB7IEZldGNoZXJSZXNwb25zZVR5cGUgfVxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hlclxuIl19