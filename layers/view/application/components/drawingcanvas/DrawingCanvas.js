"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../../../common/constants");
const NullException_1 = __importDefault(require("../../../../../common/exceptions/NullException"));
const utils_1 = require("../../../../../common/utils");
const BaseDesignComponent_1 = __importDefault(require("../../../design/base/BaseDesignComponent"));
const BaseComponent_1 = __importDefault(require("../base/BaseComponent"));
class DrawingCanvas extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { background: 'transparent', 'z-index': constants_1.MIN_Z_INDEX }));
        this.onwheel = (event) => {
            // Check if Ctrl key is pressed
            if (event.ctrlKey) {
                //event.preventDefault();
                // Calculate the new scale factor based on the wheel delta
                const delta = event.deltaY;
                const zoomFactor = 0.02; // You can adjust this value based on your zoom sensitivity
                const currentScale = parseFloat(this.style.transform.replace('scale(', '').replace(')', '')) || 1;
                let scale;
                if (delta < 0) {
                    scale = currentScale + zoomFactor;
                }
                else {
                    scale = currentScale - zoomFactor;
                }
                // Set the new scale factor
                this.scale = scale;
            }
        };
    }
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
        if (!(element instanceof BaseDesignComponent_1.default)) {
            element = BaseDesignComponent_1.default.new(element);
        }
        this.appendChildren(element);
        return element;
    }
}
exports.default = DrawingCanvas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ0NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQTZEO0FBQzdELG1HQUEwRTtBQUcxRSx1REFBc0Q7QUFDdEQsbUdBQTBFO0FBQzFFLDBFQUFpRDtBQUdqRCxNQUFNLGFBQWMsU0FBUSx1QkFBYTtJQUN2QyxZQUFZLEtBQWtCO1FBQzVCLEtBQUssaUNBQ0EsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsS0FDaEIsVUFBVSxFQUFFLGFBQWEsRUFDekIsU0FBUyxFQUFFLHVCQUFXLElBQ3RCLENBQUE7UUFHSixZQUFPLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDOUIsK0JBQStCO1lBQy9CLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDakIseUJBQXlCO2dCQUV6QiwwREFBMEQ7Z0JBRTFELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7Z0JBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQSxDQUFDLDJEQUEyRDtnQkFDbkYsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakcsSUFBSSxLQUFLLENBQUE7Z0JBQ1QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNiLEtBQUssR0FBRyxZQUFZLEdBQUcsVUFBVSxDQUFBO2lCQUNsQztxQkFBTTtvQkFDTCxLQUFLLEdBQUcsWUFBWSxHQUFHLFVBQVUsQ0FBQTtpQkFDbEM7Z0JBRUQsMkJBQTJCO2dCQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTthQUNuQjtRQUNILENBQUMsQ0FBQTtJQXRCRCxDQUFDO0lBd0JELGdCQUFnQixDQUFDLE9BQW9CLEVBQUUsUUFBb0I7UUFDekQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sdUJBQWEsQ0FBQTtTQUNwQjtRQUVELE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQTtRQUUzRCxJQUFBLGdCQUFRLEVBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxLQUFJLElBQUksRUFBRTtZQUN0QyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxLQUFJLElBQUksRUFBRTtTQUN4QyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksNkJBQW1CLENBQUMsRUFBRTtZQUM3QyxPQUFPLEdBQUcsNkJBQW1CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUU1QixPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0NBZUY7QUFFRCxrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNSU5fWl9JTkRFWCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnXG5pbXBvcnQgTnVsbEV4Y2VwdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZXhjZXB0aW9ucy9OdWxsRXhjZXB0aW9uJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IElQb3NpdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lQb3NpdGlvbidcbmltcG9ydCB7IHNwcmVhZFRvIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzJ1xuaW1wb3J0IEJhc2VEZXNpZ25Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vZGVzaWduL2Jhc2UvQmFzZURlc2lnbkNvbXBvbmVudCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBJRHJhd2luZ0NhbnZhcyBmcm9tICcuLi9iYXNlL21vZGVsL0lEcmF3aW5nQ2FudmFzJ1xuXG5jbGFzcyBEcmF3aW5nQ2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElEcmF3aW5nQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0KSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAnei1pbmRleCc6IE1JTl9aX0lOREVYLFxuICAgIH0pXG4gIH1cblxuICBvbndoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgQ3RybCBrZXkgaXMgcHJlc3NlZFxuICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IHNjYWxlIGZhY3RvciBiYXNlZCBvbiB0aGUgd2hlZWwgZGVsdGFcblxuICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5kZWx0YVlcbiAgICAgIGNvbnN0IHpvb21GYWN0b3IgPSAwLjAyIC8vIFlvdSBjYW4gYWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciB6b29tIHNlbnNpdGl2aXR5XG4gICAgICBjb25zdCBjdXJyZW50U2NhbGUgPSBwYXJzZUZsb2F0KHRoaXMuc3R5bGUudHJhbnNmb3JtLnJlcGxhY2UoJ3NjYWxlKCcsICcnKS5yZXBsYWNlKCcpJywgJycpKSB8fCAxXG4gICAgICBsZXQgc2NhbGVcbiAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgc2NhbGUgPSBjdXJyZW50U2NhbGUgKyB6b29tRmFjdG9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2FsZSA9IGN1cnJlbnRTY2FsZSAtIHpvb21GYWN0b3JcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSBuZXcgc2NhbGUgZmFjdG9yXG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgICB9XG4gIH1cblxuICBhZGREZXNpZ25FbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwb3NpdGlvbj86IElQb3NpdGlvbikge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgdGhyb3cgTnVsbEV4Y2VwdGlvblxuICAgIH1cblxuICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9zaXRpb24gfHwgeyB4OiAxMCwgeTogMTAsIG1ldHJpYzogJ3B4JyB9XG5cbiAgICBzcHJlYWRUbyhlbGVtZW50LnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogYCR7eX0ke3Bvc2l0aW9uPy5tZXRyaWMgfHwgJ3B4J31gLFxuICAgICAgbGVmdDogYCR7eH0ke3Bvc2l0aW9uPy5tZXRyaWMgfHwgJ3B4J31gLFxuICAgIH0pXG5cbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgQmFzZURlc2lnbkNvbXBvbmVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSBCYXNlRGVzaWduQ29tcG9uZW50Lm5ldyhlbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oZWxlbWVudClcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvKiBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGVsZW1lbnQgPSAgU2hhcmVkQ29uZmlnLmdldChBQ1RJVkVfRUxFTUVOVCkgYXMgSFRNTEVsZW1lbnRcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGhpc1JlY3Q6IERPTVJlY3QgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSB0aGlzUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gdGhpc1JlY3QudG9wO1xuICAgIGVsZW1lbnQhLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBlbGVtZW50IS5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfVxuICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdDYW52YXNcbiJdfQ==