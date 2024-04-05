"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../../../common/constants");
const NullException_1 = __importDefault(require("../../../../../common/exceptions/NullException"));
const utils_1 = require("../../../../../common/utils");
const BaseComponent_1 = __importDefault(require("../base/BaseComponent"));
class DrawingCanvas extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { background: 'transparent', 'z-index': constants_1.MIN_Z_INDEX }));
    }
    /* connectedCallback() {
    } */
    addDesignElement(element, position) {
        if (!element) {
            throw NullException_1.default;
        }
        const { x, y } = position || { x: 10, y: 10, metric: 'px' };
        (0, utils_1.spreadTo)(element.style, {
            position: 'absolute',
            top: `${y}${(position === null || position === void 0 ? void 0 : position.metric) || 'px'}`,
            left: `${x}${(position === null || position === void 0 ? void 0 : position.metric) || 'px'}`,
        });
        this.appendChildren(element);
        return element;
    }
}
exports.default = DrawingCanvas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ0NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQTZEO0FBQzdELG1HQUEwRTtBQUcxRSx1REFBc0Q7QUFDdEQsMEVBQWlEO0FBR2pELE1BQU0sYUFBYyxTQUFRLHVCQUFhO0lBQ3ZDLFlBQVksS0FBa0I7UUFDNUIsS0FBSyxpQ0FDQSxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxLQUNoQixVQUFVLEVBQUUsYUFBYSxFQUN6QixTQUFTLEVBQUUsdUJBQVcsSUFDdEIsQ0FBQTtJQUNKLENBQUM7SUFFRDtRQUNJO0lBRUosZ0JBQWdCLENBQUMsT0FBb0IsRUFBRSxRQUFvQjtRQUN6RCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSx1QkFBYSxDQUFBO1NBQ3BCO1FBRUQsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFBO1FBRTNELElBQUEsZ0JBQVEsRUFBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLEtBQUksSUFBSSxFQUFFO1lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLEtBQUksSUFBSSxFQUFFO1NBQ3hDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFNUIsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztDQWVGO0FBRUQsa0JBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUlOX1pfSU5ERVggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuaW1wb3J0IE51bGxFeGNlcHRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2V4Y2VwdGlvbnMvTnVsbEV4Y2VwdGlvbidcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBJUG9zaXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JUG9zaXRpb24nXG5pbXBvcnQgeyBzcHJlYWRUbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscydcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBJRHJhd2luZ0NhbnZhcyBmcm9tICcuLi9iYXNlL21vZGVsL0lEcmF3aW5nQ2FudmFzJ1xuXG5jbGFzcyBEcmF3aW5nQ2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElEcmF3aW5nQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0KSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAnei1pbmRleCc6IE1JTl9aX0lOREVYLFxuICAgIH0pXG4gIH1cblxuICAvKiBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgfSAqL1xuXG4gIGFkZERlc2lnbkVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uPzogSVBvc2l0aW9uKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICB0aHJvdyBOdWxsRXhjZXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBwb3NpdGlvbiB8fCB7IHg6IDEwLCB5OiAxMCwgbWV0cmljOiAncHgnIH1cblxuICAgIHNwcmVhZFRvKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiBgJHt5fSR7cG9zaXRpb24/Lm1ldHJpYyB8fCAncHgnfWAsXG4gICAgICBsZWZ0OiBgJHt4fSR7cG9zaXRpb24/Lm1ldHJpYyB8fCAncHgnfWAsXG4gICAgfSlcblxuICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oZWxlbWVudClcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvKiBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGVsZW1lbnQgPSAgU2hhcmVkQ29uZmlnLmdldChBQ1RJVkVfRUxFTUVOVCkgYXMgSFRNTEVsZW1lbnRcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGhpc1JlY3Q6IERPTVJlY3QgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSB0aGlzUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gdGhpc1JlY3QudG9wO1xuICAgIGVsZW1lbnQhLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBlbGVtZW50IS5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfVxuICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdDYW52YXNcbiJdfQ==