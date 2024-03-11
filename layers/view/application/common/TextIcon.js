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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tbW9uL1RleHRJY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0Esc0VBQTZDO0FBSTdDLE1BQU0sUUFBUyxTQUFRLHdCQUFjO0lBQ25DLFlBQVksS0FBa0IsRUFBRSxJQUFpQjtRQUMvQyxLQUFLLGlDQUVFLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEtBQ2hCLEtBQUssRUFBRSxPQUFPLEtBRWhCLElBQUksQ0FDTCxDQUFBO1FBR0gsNEJBQXVCLEdBQXlCLEVBQUUsQ0FBQTtRQUVsRCw2REFBNkQ7UUFDN0QsV0FBTSxHQUFHLENBQUMsY0FBNkIsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFBO0lBTDlDLENBQUM7SUFPRCxTQUFTLEtBQUksQ0FBQztJQUVkLElBQUksQ0FBQyxJQUFpQjtRQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxRQUFRLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgRGVzaWduRWxlbWVudFR5cGVzIGZyb20gJy4uLy4uL2NvbW1vbi9EZXNpZ25FbGVtZW50VHlwZXMnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi8uLi9kZXNpZ24vRGVzaWduRWxlbWVudCdcbmltcG9ydCBBY3Rpb25hYmxlSWNvbiBmcm9tICcuL0FjdGlvbmFibGVJY29uJ1xuaW1wb3J0IHsgSUFjdGlvbkluaXQgfSBmcm9tICcuL0lBY3Rpb24nXG5pbXBvcnQgU2hhZG93TW9kZSBmcm9tICcuL1NoYWRvd01vZGUnXG5cbmNsYXNzIFRleHRJY29uIGV4dGVuZHMgQWN0aW9uYWJsZUljb24ge1xuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QsIG1vZGU/OiBTaGFkb3dNb2RlKSB7XG4gICAgc3VwZXIoXG4gICAgICB7XG4gICAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICAgIHdpZHRoOiAndW5zZXQnLFxuICAgICAgfSxcbiAgICAgIG1vZGUsXG4gICAgKVxuICB9XG5cbiAgc3VwcG9ydGVkRGVzaWduRWxlbWVudHM6IERlc2lnbkVsZW1lbnRUeXBlc1tdID0gW11cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGFjdGlvbiA9IChfZGVzaWduRWxlbWVudDogRGVzaWduRWxlbWVudCkgPT4ge31cblxuICBzdWJzY3JpYmUoKSB7fVxuXG4gIGluaXQoaW5pdDogSUFjdGlvbkluaXQpOiB2b2lkIHtcbiAgICBzdXBlci5pbml0KGluaXQpXG4gICAgdGhpcy5pbm5lclRleHQgPSB0aGlzLmhpbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SWNvblxuIl19