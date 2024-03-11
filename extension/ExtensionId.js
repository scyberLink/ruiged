"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("../common/md5"));
class ExtensionId {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = this.hash(value);
    }
    constructor(id) {
        this.id = id;
    }
    hash(id) {
        const hash = (0, md5_1.default)(id);
        return hash;
    }
}
exports.default = ExtensionId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5zaW9uL0V4dGVuc2lvbklkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQStCO0FBRy9CLE1BQU0sV0FBVztJQUdmLElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBVyxFQUFFLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELFlBQVksRUFBVTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBVTtRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUEsYUFBRyxFQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXBCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztDQUNGO0FBRUQsa0JBQWUsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tICcuLi9jb21tb24vbWQ1J1xuaW1wb3J0IElFeHRlbnNpb25JZCBmcm9tICcuL0lFeHRlbnNpb25JZCdcblxuY2xhc3MgRXh0ZW5zaW9uSWQgaW1wbGVtZW50cyBJRXh0ZW5zaW9uSWQge1xuICBwcml2YXRlIF9pZCE6IHN0cmluZ1xuXG4gIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWRcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdGhpcy5oYXNoKHZhbHVlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgaGFzaChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBoYXNoID0gbWQ1KGlkKVxuXG4gICAgcmV0dXJuIGhhc2hcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlbnNpb25JZFxuIl19