"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullException_1 = __importDefault(require("../../../common/exceptions/NullException"));
const BaseComponent_1 = __importDefault(require("../application/components/base/BaseComponent"));
class DesignElementSelectionWrapper extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign({ background: 'transparent', border: '0', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, (style !== null && style !== void 0 ? style : {})));
    }
    setElementToWrap(element) {
        if (!element) {
            throw new NullException_1.default();
        }
        this.wrappedElement = element;
        this.updateSize(element);
    }
    updateSize(element) {
        const width = element.clientWidth;
        const height = element.clientHeight;
        this.style.width = width + 15 + 'px';
        this.style.height = height + 15 + 'px';
    }
    getWrappedElement() {
        return this.wrappedElement;
    }
}
exports.default = DesignElementSelectionWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9kZXNpZ24vRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RkFBb0U7QUFFcEUsaUdBQXdFO0FBSXhFLE1BQU0sNkJBQThCLFNBQVEsdUJBQWE7SUFHdkQsWUFBWSxLQUFrQjtRQUM1QixLQUFLLGlCQUNILFVBQVUsRUFBRSxhQUFhLEVBQ3pCLE1BQU0sRUFBRSxHQUFHLEVBQ1gsUUFBUSxFQUFFLFVBQVUsRUFDcEIsR0FBRyxFQUFFLEtBQUssRUFDVixJQUFJLEVBQUUsS0FBSyxFQUNYLFNBQVMsRUFBRSx1QkFBdUIsSUFDL0IsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsRUFDaEIsQ0FBQTtJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFzQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxJQUFJLHVCQUFhLEVBQUUsQ0FBQTtTQUMxQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFBO1FBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFzQjtRQUMvQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFBO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUE7UUFFbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFDeEMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSw2QkFBNkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBEZXNpZ25FbGVtZW50IGZyb20gJy4vRGVzaWduRWxlbWVudCdcbmltcG9ydCBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIgZnJvbSAnLi9tb2RlbHMvSURlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyJ1xuXG5jbGFzcyBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlciBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIge1xuICBwcml2YXRlIHdyYXBwZWRFbGVtZW50ITogRGVzaWduRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXI6ICcwJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgfSlcbiAgfVxuXG4gIHNldEVsZW1lbnRUb1dyYXAoZWxlbWVudDogRGVzaWduRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IE51bGxFeGNlcHRpb24oKVxuICAgIH1cbiAgICB0aGlzLndyYXBwZWRFbGVtZW50ID0gZWxlbWVudFxuXG4gICAgdGhpcy51cGRhdGVTaXplKGVsZW1lbnQpXG4gIH1cblxuICB1cGRhdGVTaXplKGVsZW1lbnQ6IERlc2lnbkVsZW1lbnQpIHtcbiAgICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgdGhpcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgMTUgKyAncHgnXG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAxNSArICdweCdcbiAgfVxuXG4gIGdldFdyYXBwZWRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLndyYXBwZWRFbGVtZW50XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXJcbiJdfQ==