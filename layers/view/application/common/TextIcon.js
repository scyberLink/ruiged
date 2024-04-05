"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionableIcon_1 = __importDefault(require("./ActionableIcon"));
class TextIcon extends ActionableIcon_1.default {
    constructor(style, mode) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { width: 'unset' }), mode);
        this.supportedDesignElements = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.action = (_designElement) => { };
    }
    subscribe() { }
    init(init) {
        super.init(init);
        this.innerText = this.hint;
    }
}
exports.default = TextIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21tb24vVGV4dEljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxzRUFBNkM7QUFJN0MsTUFBTSxRQUFTLFNBQVEsd0JBQWM7SUFDbkMsWUFBWSxLQUFrQixFQUFFLElBQWlCO1FBQy9DLEtBQUssaUNBRUUsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsS0FDaEIsS0FBSyxFQUFFLE9BQU8sS0FFaEIsSUFBSSxDQUNMLENBQUE7UUFHSCw0QkFBdUIsR0FBeUIsRUFBRSxDQUFBO1FBRWxELDZEQUE2RDtRQUM3RCxXQUFNLEdBQUcsQ0FBQyxjQUE2QixFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUE7SUFMOUMsQ0FBQztJQU9ELFNBQVMsS0FBSSxDQUFDO0lBRWQsSUFBSSxDQUFDLElBQWlCO1FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQzVCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFFBQVEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcbmltcG9ydCBEZXNpZ25FbGVtZW50IGZyb20gJy4uLy4uL2Rlc2lnbi9EZXNpZ25FbGVtZW50J1xuaW1wb3J0IEFjdGlvbmFibGVJY29uIGZyb20gJy4vQWN0aW9uYWJsZUljb24nXG5pbXBvcnQgeyBJQWN0aW9uSW5pdCB9IGZyb20gJy4vSUFjdGlvbidcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4vU2hhZG93TW9kZSdcblxuY2xhc3MgVGV4dEljb24gZXh0ZW5kcyBBY3Rpb25hYmxlSWNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCwgbW9kZT86IFNoYWRvd01vZGUpIHtcbiAgICBzdXBlcihcbiAgICAgIHtcbiAgICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgICAgd2lkdGg6ICd1bnNldCcsXG4gICAgICB9LFxuICAgICAgbW9kZSxcbiAgICApXG4gIH1cblxuICBzdXBwb3J0ZWREZXNpZ25FbGVtZW50czogRGVzaWduRWxlbWVudFR5cGVzW10gPSBbXVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgYWN0aW9uID0gKF9kZXNpZ25FbGVtZW50OiBEZXNpZ25FbGVtZW50KSA9PiB7fVxuXG4gIHN1YnNjcmliZSgpIHt9XG5cbiAgaW5pdChpbml0OiBJQWN0aW9uSW5pdCk6IHZvaWQge1xuICAgIHN1cGVyLmluaXQoaW5pdClcbiAgICB0aGlzLmlubmVyVGV4dCA9IHRoaXMuaGludFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJY29uXG4iXX0=