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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ0NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2RyYXdpbmdjYW52YXMvRHJhd2luZ0NhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUE2RDtBQUM3RCxtR0FBMEU7QUFHMUUsdURBQXNEO0FBQ3RELDBFQUFpRDtBQUdqRCxNQUFNLGFBQWMsU0FBUSx1QkFBYTtJQUN2QyxZQUFZLEtBQWtCO1FBQzVCLEtBQUssaUNBQ0EsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsS0FDaEIsVUFBVSxFQUFFLGFBQWEsRUFDekIsU0FBUyxFQUFFLHVCQUFXLElBQ3RCLENBQUE7SUFDSixDQUFDO0lBRUQ7UUFDSTtJQUVKLGdCQUFnQixDQUFDLE9BQW9CLEVBQUUsUUFBb0I7UUFDekQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sdUJBQWEsQ0FBQTtTQUNwQjtRQUVELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQTtRQUUzRCxJQUFBLGdCQUFRLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxLQUFJLElBQUksRUFBRTtZQUN0QyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxLQUFJLElBQUksRUFBRTtTQUN4QyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTVCLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7Q0FlRjtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1JTl9aX0lOREVYIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgSVBvc2l0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSVBvc2l0aW9uJ1xuaW1wb3J0IHsgc3ByZWFkVG8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgSURyYXdpbmdDYW52YXMgZnJvbSAnLi4vYmFzZS9tb2RlbC9JRHJhd2luZ0NhbnZhcydcblxuY2xhc3MgRHJhd2luZ0NhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJRHJhd2luZ0NhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCkge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgJ3otaW5kZXgnOiBNSU5fWl9JTkRFWCxcbiAgICB9KVxuICB9XG5cbiAgLyogY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gIH0gKi9cblxuICBhZGREZXNpZ25FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwb3NpdGlvbj86IElQb3NpdGlvbikge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgdGhyb3cgTnVsbEV4Y2VwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9zaXRpb24gfHwgeyB4OiAxMCwgeTogMTAsIG1ldHJpYzogJ3B4JyB9XG5cbiAgICBzcHJlYWRUbyhlbGVtZW50LnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogYCR7eX0ke3Bvc2l0aW9uPy5tZXRyaWMgfHwgJ3B4J31gLFxuICAgICAgbGVmdDogYCR7eH0ke3Bvc2l0aW9uPy5tZXRyaWMgfHwgJ3B4J31gLFxuICAgIH0pXG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLyogb25kcm9wID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBlbGVtZW50ID0gIFNoYXJlZENvbmZpZy5nZXQoQUNUSVZFX0VMRU1FTlQpIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRoaXNSZWN0OiBET01SZWN0ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gdGhpc1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHRoaXNSZWN0LnRvcDtcbiAgICBlbGVtZW50IS5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgZWxlbWVudCEuc3R5bGUudG9wID0geSArICdweCc7XG4gIH1cbiAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nQ2FudmFzXG4iXX0=