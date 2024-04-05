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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVkRmV0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3J1aWcvc3JjL2NvbW1vbi9TaGFyZWRGZXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtDO0FBQ2xDLHdEQUErQjtBQUUvQixNQUFNLGFBQWMsU0FBUSxpQkFBTztJQUNqQztRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQzNCLEtBQUssRUFBRSxDQUFBO1lBQ1AsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7U0FDOUI7UUFDRCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUE7SUFDL0IsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQTtBQUNuQyxrQkFBZSxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jICovXG5pbXBvcnQgRmV0Y2hlciBmcm9tICcuL0ZldGNoZXInXG5cbmNsYXNzIFNoYXJlZEZldGNoZXIgZXh0ZW5kcyBGZXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFTaGFyZWRGZXRjaGVyLmluc3RhbmNlKSB7XG4gICAgICBzdXBlcigpXG4gICAgICBTaGFyZWRGZXRjaGVyLmluc3RhbmNlID0gdGhpc1xuICAgIH1cbiAgICByZXR1cm4gU2hhcmVkRmV0Y2hlci5pbnN0YW5jZVxuICB9XG59XG5cbmNvbnN0IGZldGNoZXIgPSBuZXcgU2hhcmVkRmV0Y2hlcigpXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXG4iXX0=