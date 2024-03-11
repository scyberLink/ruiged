"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable require-jsdoc */
const Fetcher_1 = __importDefault(require("./Fetcher"));
class SharedFetcher extends Fetcher_1.default {
    constructor() {
        if (!SharedFetcher.instance) {
            super();
            SharedFetcher.instance = this;
        }
        return SharedFetcher.instance;
    }
}
const fetcher = new SharedFetcher();
exports.default = fetcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVkRmV0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vU2hhcmVkRmV0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtDQUFrQztBQUNsQyx3REFBK0I7QUFFL0IsTUFBTSxhQUFjLFNBQVEsaUJBQU87SUFDakM7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUMzQixLQUFLLEVBQUUsQ0FBQTtZQUNQLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQzlCO1FBQ0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFBO0lBQy9CLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUE7QUFDbkMsa0JBQWUsT0FBTyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYyAqL1xuaW1wb3J0IEZldGNoZXIgZnJvbSAnLi9GZXRjaGVyJ1xuXG5jbGFzcyBTaGFyZWRGZXRjaGVyIGV4dGVuZHMgRmV0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghU2hhcmVkRmV0Y2hlci5pbnN0YW5jZSkge1xuICAgICAgc3VwZXIoKVxuICAgICAgU2hhcmVkRmV0Y2hlci5pbnN0YW5jZSA9IHRoaXNcbiAgICB9XG4gICAgcmV0dXJuIFNoYXJlZEZldGNoZXIuaW5zdGFuY2VcbiAgfVxufVxuXG5jb25zdCBmZXRjaGVyID0gbmV3IFNoYXJlZEZldGNoZXIoKVxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlclxuIl19