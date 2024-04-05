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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduU2VsZWN0aW9uV3JhcHBlckl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9kZXNpZ24vZGVzaWduc2VsZWN0aW9ud3JhcHBlcml0ZW0vRGVzaWduU2VsZWN0aW9uV3JhcHBlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRkFBMEQ7QUFDMUQsNERBQTZEO0FBRzdELG9HQUEyRTtBQUszRSxNQUFNLDBCQUEyQixTQUFRLHVCQUFhO0lBSXBELFlBQVksS0FBa0IsRUFBRSxJQUFpQjtRQUMvQyxLQUFLLGlCQUVELFFBQVEsRUFBRSxVQUFVLEVBQ3BCLE1BQU0sRUFBRSxHQUFHLEVBQ1gsVUFBVSxFQUFFLGFBQWEsSUFDdEIsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsR0FFbEIsSUFBSSxDQUNMLENBQUE7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLG9CQUFtRDtRQUM1RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUE7SUFDbEQsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFtQixDQUFBO0lBQ3ZFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxhQUE0QixDQUFBO0lBQ3ZELENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLHNCQUFZLENBQUMsR0FBRyxDQUFDLDBCQUFjLENBQWtCLENBQUE7SUFDMUQsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUNyRCxJQUFJLENBQUMsYUFBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1FBQ3RDLDZCQUE2QjtJQUMvQixDQUFDO0lBRUQsSUFBSTs7UUFDRixJQUFJLENBQUMsYUFBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBQSxJQUFJLENBQUMsYUFBYSxtQ0FBSSxpQkFBaUIsQ0FBQTtRQUMxRSxnQ0FBZ0M7SUFDbEMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsMEJBQTBCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhcmVkQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9TaGFyZWRDb25maWcnXG5pbXBvcnQgeyBEUkFXSU5HX0NBTlZBUyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgU2hhZG93TW9kZSBmcm9tICcuLi8uLi9hcHBsaWNhdGlvbi9jb21tb24vU2hhZG93TW9kZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IERyYXdpbmdDYW52YXMgZnJvbSAnLi4vLi4vYXBwbGljYXRpb24vY29tcG9uZW50cy9kcmF3aW5nY2FudmFzL0RyYXdpbmdDYW52YXMnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi9EZXNpZ25FbGVtZW50J1xuaW1wb3J0IERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyIGZyb20gJy4uL0Rlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyJ1xuXG5jbGFzcyBEZXNpZ25TZWxlY3Rpb25XcmFwcGVySXRlbSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcml2YXRlIGRlc2lnbkVsZW1lbnRXcmFwcGVyITogRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXJcbiAgaW5pdGlhbEJvcmRlciE6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCwgbW9kZT86IFNoYWRvd01vZGUpIHtcbiAgICBzdXBlcihcbiAgICAgIHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgfSxcbiAgICAgIG1vZGUsXG4gICAgKVxuICB9XG5cbiAgc2V0V3JhcHBlcihkZXNpZ25FbGVtZW50V3JhcHBlcjogRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIpIHtcbiAgICB0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyID0gZGVzaWduRWxlbWVudFdyYXBwZXJcbiAgfVxuXG4gIGdldFdyYXBwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXJcbiAgfVxuXG4gIGdldFdyYXBwZWQoKTogRGVzaWduRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXIuZ2V0V3JhcHBlZEVsZW1lbnQoKSBhcyBEZXNpZ25FbGVtZW50XG4gIH1cblxuICBnZXRXcmFwcGVkUGFyZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5nZXRXcmFwcGVkKCkucGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudFxuICB9XG5cbiAgZ2V0RHJhd2luZ0NhbnZhcygpOiBEcmF3aW5nQ2FudmFzIHtcbiAgICByZXR1cm4gU2hhcmVkQ29uZmlnLmdldChEUkFXSU5HX0NBTlZBUykgYXMgRHJhd2luZ0NhbnZhc1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmluaXRpYWxCb3JkZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQhLnN0eWxlLmJvcmRlclxuICAgIHRoaXMucGFyZW50RWxlbWVudCEuc3R5bGUuYm9yZGVyID0gJzAnXG4gICAgLy90aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50IS5zdHlsZS5ib3JkZXIgPSB0aGlzLmluaXRpYWxCb3JkZXIgPz8gJzAuNXB4IHNvbGlkIHJlZCdcbiAgICAvL3RoaXMuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2lnblNlbGVjdGlvbldyYXBwZXJJdGVtXG4iXX0=