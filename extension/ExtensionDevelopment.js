"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionPool_1 = __importDefault(require("./ExtensionPool"));
class ExtensionDevelopment {
    constructor() {
        this.extensionPool = new ExtensionPool_1.default();
    }
    install(extension) {
        this.extensionPool.manualInstall({
            id: extension.getId(extension),
            rating: 0,
            downloads: 0,
            builtin: false,
        });
    }
}
exports.default = ExtensionDevelopment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5zaW9uRGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXh0ZW5zaW9uL0V4dGVuc2lvbkRldmVsb3BtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0VBQTJDO0FBRTNDLE1BQU0sb0JBQW9CO0lBR3hCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHVCQUFhLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQStCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQy9CLEVBQUUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUM5QixNQUFNLEVBQUUsQ0FBQztZQUNULFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlRXh0ZW5zaW9uIGZyb20gJy4vQmFzZUV4dGVuc2lvbidcbmltcG9ydCBFeHRlbnNpb25Qb29sIGZyb20gJy4vRXh0ZW5zaW9uUG9vbCdcblxuY2xhc3MgRXh0ZW5zaW9uRGV2ZWxvcG1lbnQge1xuICBleHRlbnNpb25Qb29sOiBFeHRlbnNpb25Qb29sXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5leHRlbnNpb25Qb29sID0gbmV3IEV4dGVuc2lvblBvb2woKVxuICB9XG5cbiAgaW5zdGFsbChleHRlbnNpb246IHR5cGVvZiBCYXNlRXh0ZW5zaW9uKSB7XG4gICAgdGhpcy5leHRlbnNpb25Qb29sLm1hbnVhbEluc3RhbGwoe1xuICAgICAgaWQ6IGV4dGVuc2lvbi5nZXRJZChleHRlbnNpb24pLFxuICAgICAgcmF0aW5nOiAwLFxuICAgICAgZG93bmxvYWRzOiAwLFxuICAgICAgYnVpbHRpbjogZmFsc2UsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHRlbnNpb25EZXZlbG9wbWVudFxuIl19