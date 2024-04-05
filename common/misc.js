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
exports.getCurrentUrl = exports.getDataUrlFromUrl = exports.getDataUrl = exports.encodeQuery = exports.objectEquals = exports.isActivePath = void 0;
/* eslint-disable require-jsdoc */
const SharedFetcher_1 = __importDefault(require("./SharedFetcher"));
const Fetcher_1 = require("./Fetcher");
const isActivePath = (routeName) => {
    const path = window.location.pathname;
    const splitted = path.split('/');
    for (let i = 0; i < splitted.length; i++) {
        const segment = splitted[i];
        const routing = routeName.split('/')[1];
        if (segment === routing) {
            return 'active';
        }
    }
    return null;
};
exports.isActivePath = isActivePath;
function objectEquals(obj1, obj2) {
    // Check if both object are strictly equal
    if (obj1 === obj2) {
        return true;
    }
    // Check if either object is null or not
    if (typeof obj1 !== 'object' || obj1 == null || typeof obj2 !== 'object' || obj2 == null) {
        return false;
    }
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Iterate through the keys and recursively check for equality
    for (const key of keys1) {
        if (!keys2.includes(key) || !objectEquals(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
exports.objectEquals = objectEquals;
function encodeQuery(object = {}) {
    return btoa(JSON.stringify(object));
}
exports.encodeQuery = encodeQuery;
function getDataUrl(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            try {
                const reader = new FileReader();
                reader.readAsDataURL(data);
                reader.onloadend = () => {
                    const uri = reader.result;
                    resolve(uri);
                };
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
exports.getDataUrl = getDataUrl;
function getDataUrlFromUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            function runner() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const imo = {
                            url,
                            method: 'GET',
                        };
                        const idata = (yield SharedFetcher_1.default.fetch(imo, Fetcher_1.FetcherResponseType.BLOB));
                        const uri = yield getDataUrl(idata);
                        resolve(uri);
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            }
            runner();
        });
    });
}
exports.getDataUrlFromUrl = getDataUrlFromUrl;
const getCurrentUrl = (includeHostName = false) => {
    const url = window.location.href;
    if (includeHostName) {
        return url;
    }
    const noScheme = url === null || url === void 0 ? void 0 : url.split('//')[1];
    const pathWithoutShemeAndHostname = noScheme === null || noScheme === void 0 ? void 0 : noScheme.split('/')[1];
    return `../${pathWithoutShemeAndHostname}`;
};
exports.getCurrentUrl = getCurrentUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3J1aWcvc3JjL2NvbW1vbi9taXNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUFrQztBQUNsQyxvRUFBcUM7QUFDckMsdUNBQStDO0FBR3hDLE1BQU0sWUFBWSxHQUFHLENBQUMsU0FBaUIsRUFBRSxFQUFFO0lBQ2hELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFBO0lBQ3JDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzNCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQ3ZCLE9BQU8sUUFBUSxDQUFBO1NBQ2hCO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQVhZLFFBQUEsWUFBWSxnQkFXeEI7QUFFRCxTQUFnQixZQUFZLENBQUMsSUFBZ0IsRUFBRSxJQUFnQjtJQUM3RCwwQ0FBMEM7SUFDMUMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCx3Q0FBd0M7SUFDeEMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUN4RixPQUFPLEtBQUssQ0FBQTtLQUNiO0lBRUQsK0JBQStCO0lBQy9CLE1B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QUFBO0lBQzNELE9BQU8sTUFBTSwyQkFBMkIsRUFBRSxDQUFBO0FBQzVDLENBQUMsQ0FBQTtBQVJZLFFBQUEsYUFBYSxpQkFRekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuL1NoYXJlZEZldGNoZXInXG5pbXBvcnQgeyBGZXRjaGVyUmVzcG9uc2VUeXBlIH0gZnJvbSAnLi9GZXRjaGVyJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi9tb2RlbHMvSUFueU9iamVjdCdcblxuZXhwb3J0IGNvbnN0IGlzQWN0aXZlUGF0aCA9IChyb3V0ZU5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gIGNvbnN0IHNwbGl0dGVkID0gcGF0aC5zcGxpdCgnLycpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzZWdtZW50ID0gc3BsaXR0ZWRbaV1cbiAgICBjb25zdCByb3V0aW5nID0gcm91dGVOYW1lLnNwbGl0KCcvJylbMV1cbiAgICBpZiAoc2VnbWVudCA9PT0gcm91dGluZykge1xuICAgICAgcmV0dXJuICdhY3RpdmUnXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RFcXVhbHMob2JqMTogSUFueU9iamVjdCwgb2JqMjogSUFueU9iamVjdCkge1xuICAvLyBDaGVjayBpZiBib3RoIG9iamVjdCBhcmUgc3RyaWN0bHkgZXF1YWxcbiAgaWYgKG9iajEgPT09IG9iajIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZWl0aGVyIG9iamVjdCBpcyBudWxsIG9yIG5vdFxuICBpZiAodHlwZW9mIG9iajEgIT09ICdvYmplY3QnIHx8IG9iajEgPT0gbnVsbCB8fCB0eXBlb2Ygb2JqMiAhPT0gJ29iamVjdCcgfHwgb2JqMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBHZXQgdGhlIGtleXMgb2YgYm90aCBvYmplY3RzXG4gIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXMob2JqMSlcbiAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmoyKVxuXG4gIC8vIENoZWNrIGlmIHRoZSBudW1iZXIgb2Yga2V5cyBpcyB0aGUgc2FtZVxuICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUga2V5cyBhbmQgcmVjdXJzaXZlbHkgY2hlY2sgZm9yIGVxdWFsaXR5XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XG4gICAgaWYgKCFrZXlzMi5pbmNsdWRlcyhrZXkpIHx8ICFvYmplY3RFcXVhbHMob2JqMVtrZXldLCBvYmoyW2tleV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5KG9iamVjdCA9IHt9KSB7XG4gIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhVXJsKGRhdGE6IEJsb2IpIHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSlcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVyaSA9IHJlYWRlci5yZXN1bHRcbiAgICAgICAgcmVzb2x2ZSh1cmkpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFVcmxGcm9tVXJsKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gcnVubmVyKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW1vID0ge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkYXRhOiBCbG9iID0gKGF3YWl0IGZldGNoZXIuZmV0Y2goaW1vLCBGZXRjaGVyUmVzcG9uc2VUeXBlLkJMT0IpKSBhcyBCbG9iXG4gICAgICAgIGNvbnN0IHVyaSA9IGF3YWl0IGdldERhdGFVcmwoaWRhdGEpXG4gICAgICAgIHJlc29sdmUodXJpKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfVxuICAgIHJ1bm5lcigpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50VXJsID0gKGluY2x1ZGVIb3N0TmFtZSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIGlmIChpbmNsdWRlSG9zdE5hbWUpIHtcbiAgICByZXR1cm4gdXJsXG4gIH1cbiAgY29uc3Qgbm9TY2hlbWUgPSB1cmw/LnNwbGl0KCcvLycpWzFdXG4gIGNvbnN0IHBhdGhXaXRob3V0U2hlbWVBbmRIb3N0bmFtZSA9IG5vU2NoZW1lPy5zcGxpdCgnLycpWzFdXG4gIHJldHVybiBgLi4vJHtwYXRoV2l0aG91dFNoZW1lQW5kSG9zdG5hbWV9YFxufVxuIl19