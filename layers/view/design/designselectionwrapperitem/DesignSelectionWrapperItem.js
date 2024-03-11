"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SharedConfig_1 = __importDefault(require("../../../../common/SharedConfig"));
const constants_1 = require("../../../../common/constants");
const BaseComponent_1 = __importDefault(require("../../application/components/base/BaseComponent"));
class DesignSelectionWrapperItem extends BaseComponent_1.default {
    constructor(style, mode) {
        super(Object.assign({ position: 'absolute', border: '0', background: 'transparent' }, (style !== null && style !== void 0 ? style : {})), mode);
    }
    setWrapper(designElementWrapper) {
        this.designElementWrapper = designElementWrapper;
    }
    getWrapper() {
        return this.designElementWrapper;
    }
    getWrapped() {
        return this.designElementWrapper.getWrappedElement();
    }
    getWrappedParent() {
        return this.getWrapped().parentElement;
    }
    getDrawingCanvas() {
        return SharedConfig_1.default.get(constants_1.DRAWING_CANVAS);
    }
    hide() {
        this.initialBorder = this.parentElement.style.border;
        this.parentElement.style.border = '0';
        //this.style.display = 'none'
    }
    show() {
        var _a;
        this.parentElement.style.border = (_a = this.initialBorder) !== null && _a !== void 0 ? _a : '0.5px solid red';
        //this.style.display = 'initial'
    }
}
exports.default = DesignSelectionWrapperItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduU2VsZWN0aW9uV3JhcHBlckl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGF5ZXJzL3ZpZXcvZGVzaWduL2Rlc2lnbnNlbGVjdGlvbndyYXBwZXJpdGVtL0Rlc2lnblNlbGVjdGlvbldyYXBwZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUZBQTBEO0FBQzFELDREQUE2RDtBQUc3RCxvR0FBMkU7QUFLM0UsTUFBTSwwQkFBMkIsU0FBUSx1QkFBYTtJQUlwRCxZQUFZLEtBQWtCLEVBQUUsSUFBaUI7UUFDL0MsS0FBSyxpQkFFRCxRQUFRLEVBQUUsVUFBVSxFQUNwQixNQUFNLEVBQUUsR0FBRyxFQUNYLFVBQVUsRUFBRSxhQUFhLElBQ3RCLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEdBRWxCLElBQUksQ0FDTCxDQUFBO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxvQkFBbUQ7UUFDNUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFBO0lBQ2xELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUE7SUFDbEMsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBbUIsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsYUFBNEIsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxzQkFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFrQixDQUFBO0lBQzFELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDckQsSUFBSSxDQUFDLGFBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUN0Qyw2QkFBNkI7SUFDL0IsQ0FBQztJQUVELElBQUk7O1FBQ0YsSUFBSSxDQUFDLGFBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQUEsSUFBSSxDQUFDLGFBQWEsbUNBQUksaUJBQWlCLENBQUE7UUFDMUUsZ0NBQWdDO0lBQ2xDLENBQUM7Q0FDRjtBQUVELGtCQUFlLDBCQUEwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXJlZENvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vU2hhcmVkQ29uZmlnJ1xuaW1wb3J0IHsgRFJBV0lOR19DQU5WQVMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi4vLi4vYXBwbGljYXRpb24vY29tbW9uL1NoYWRvd01vZGUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBEcmF3aW5nQ2FudmFzIGZyb20gJy4uLy4uL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzJ1xuaW1wb3J0IERlc2lnbkVsZW1lbnQgZnJvbSAnLi4vRGVzaWduRWxlbWVudCdcbmltcG9ydCBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlciBmcm9tICcuLi9EZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcidcblxuY2xhc3MgRGVzaWduU2VsZWN0aW9uV3JhcHBlckl0ZW0gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBkZXNpZ25FbGVtZW50V3JhcHBlciE6IERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyXG4gIGluaXRpYWxCb3JkZXIhOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QsIG1vZGU/OiBTaGFkb3dNb2RlKSB7XG4gICAgc3VwZXIoXG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3JkZXI6ICcwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIH0sXG4gICAgICBtb2RlLFxuICAgIClcbiAgfVxuXG4gIHNldFdyYXBwZXIoZGVzaWduRWxlbWVudFdyYXBwZXI6IERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyKSB7XG4gICAgdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlciA9IGRlc2lnbkVsZW1lbnRXcmFwcGVyXG4gIH1cblxuICBnZXRXcmFwcGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyXG4gIH1cblxuICBnZXRXcmFwcGVkKCk6IERlc2lnbkVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyLmdldFdyYXBwZWRFbGVtZW50KCkgYXMgRGVzaWduRWxlbWVudFxuICB9XG5cbiAgZ2V0V3JhcHBlZFBhcmVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V3JhcHBlZCgpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnRcbiAgfVxuXG4gIGdldERyYXdpbmdDYW52YXMoKTogRHJhd2luZ0NhbnZhcyB7XG4gICAgcmV0dXJuIFNoYXJlZENvbmZpZy5nZXQoRFJBV0lOR19DQU5WQVMpIGFzIERyYXdpbmdDYW52YXNcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5pbml0aWFsQm9yZGVyID0gdGhpcy5wYXJlbnRFbGVtZW50IS5zdHlsZS5ib3JkZXJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQhLnN0eWxlLmJvcmRlciA9ICcwJ1xuICAgIC8vdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudCEuc3R5bGUuYm9yZGVyID0gdGhpcy5pbml0aWFsQm9yZGVyID8/ICcwLjVweCBzb2xpZCByZWQnXG4gICAgLy90aGlzLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25TZWxlY3Rpb25XcmFwcGVySXRlbVxuIl19