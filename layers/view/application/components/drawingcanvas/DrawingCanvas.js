"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignMode = void 0;
const constants_1 = require("../../../../../common/constants");
const NullException_1 = __importDefault(require("../../../../../common/exceptions/NullException"));
const utils_1 = require("../../../../../common/utils");
const BaseDesignComponent_1 = __importDefault(require("../../../design/base/BaseDesignComponent"));
const BaseComponent_1 = __importDefault(require("../base/BaseComponent"));
var DesignMode;
(function (DesignMode) {
    DesignMode[DesignMode["PREVIEWING"] = 0] = "PREVIEWING";
    DesignMode[DesignMode["DESIGNING"] = 1] = "DESIGNING";
})(DesignMode = exports.DesignMode || (exports.DesignMode = {}));
class DrawingCanvas extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { background: 'transparent', 'z-index': constants_1.MIN_Z_INDEX }));
        this.mode = DesignMode.PREVIEWING;
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
    activateDesignMode() {
        this.traverseAndActivateDesignMode(this);
        this.mode = DesignMode.DESIGNING;
    }
    activatePreviewMode() {
        this.traverseAndActivatePreviewMode(this);
        this.mode = DesignMode.PREVIEWING;
    }
    traverseAndActivateDesignMode(element) {
        for (let i = 0; i < element.children.length; i++) {
            const child = element.children.item(i);
            if (child instanceof HTMLElement) {
                if (!(child instanceof BaseDesignComponent_1.default)) {
                    const newChild = BaseDesignComponent_1.default.new(child);
                    element.replaceChild(newChild, child);
                }
                else {
                    this.traverseAndActivateDesignMode(child);
                }
            }
        }
    }
    traverseAndActivatePreviewMode(element) {
        for (let i = 0; i < element.children.length; i++) {
            const child = element.children.item(i);
            if (child instanceof BaseDesignComponent_1.default) {
                const originalChild = child.childNodes[0];
                if (originalChild) {
                    element.replaceChild(originalChild, child);
                }
            }
            else if (child instanceof HTMLElement) {
                this.traverseAndActivatePreviewMode(child);
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ0NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtEQUE2RDtBQUM3RCxtR0FBMEU7QUFHMUUsdURBQXNEO0FBQ3RELG1HQUEwRTtBQUMxRSwwRUFBaUQ7QUFHakQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHVEQUFVLENBQUE7SUFDVixxREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBRUQsTUFBTSxhQUFjLFNBQVEsdUJBQWE7SUFHdkMsWUFBWSxLQUFrQjtRQUM1QixLQUFLLGlDQUNBLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEtBQ2hCLFVBQVUsRUFBRSxhQUFhLEVBQ3pCLFNBQVMsRUFBRSx1QkFBVyxJQUN0QixDQUFBO1FBUEosU0FBSSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFVNUIsWUFBTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQzlCLCtCQUErQjtZQUMvQixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLHlCQUF5QjtnQkFFekIsMERBQTBEO2dCQUUxRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO2dCQUMxQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUEsQ0FBQywyREFBMkQ7Z0JBQ25GLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENB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LEVBQUU7U0FDeEMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLDZCQUFtQixDQUFDLEVBQUU7WUFDN0MsT0FBTyxHQUFHLDZCQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFNUIsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztDQWVGO0FBRUQsa0JBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUlOX1pfSU5ERVggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuaW1wb3J0IE51bGxFeGNlcHRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2V4Y2VwdGlvbnMvTnVsbEV4Y2VwdGlvbidcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBJUG9zaXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JUG9zaXRpb24nXG5pbXBvcnQgeyBzcHJlYWRUbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscydcbmltcG9ydCBCYXNlRGVzaWduQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2Rlc2lnbi9iYXNlL0Jhc2VEZXNpZ25Db21wb25lbnQnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgSURyYXdpbmdDYW52YXMgZnJvbSAnLi4vYmFzZS9tb2RlbC9JRHJhd2luZ0NhbnZhcydcblxuZXhwb3J0IGVudW0gRGVzaWduTW9kZSB7XG4gIFBSRVZJRVdJTkcsXG4gIERFU0lHTklORyxcbn1cblxuY2xhc3MgRHJhd2luZ0NhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJRHJhd2luZ0NhbnZhcyB7XG4gIG1vZGUgPSBEZXNpZ25Nb2RlLlBSRVZJRVdJTkdcblxuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICd6LWluZGV4JzogTUlOX1pfSU5ERVgsXG4gICAgfSlcbiAgfVxuXG4gIG9ud2hlZWwgPSAoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAvLyBDaGVjayBpZiBDdHJsIGtleSBpcyBwcmVzc2VkXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgc2NhbGUgZmFjdG9yIGJhc2VkIG9uIHRoZSB3aGVlbCBkZWx0YVxuXG4gICAgICBjb25zdCBkZWx0YSA9IGV2ZW50LmRlbHRhWVxuICAgICAgY29uc3Qgem9vbUZhY3RvciA9IDAuMDIgLy8gWW91IGNhbiBhZGp1c3QgdGhpcyB2YWx1ZSBiYXNlZCBvbiB5b3VyIHpvb20gc2Vuc2l0aXZpdHlcbiAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHBhcnNlRmxvYXQodGhpcy5zdHlsZS50cmFuc2Zvcm0ucmVwbGFjZSgnc2NhbGUoJywgJycpLnJlcGxhY2UoJyknLCAnJykpIHx8IDFcbiAgICAgIGxldCBzY2FsZVxuICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICBzY2FsZSA9IGN1cnJlbnRTY2FsZSArIHpvb21GYWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlIC0gem9vbUZhY3RvclxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdGhlIG5ldyBzY2FsZSBmYWN0b3JcbiAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZVxuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlRGVzaWduTW9kZSgpIHtcbiAgICB0aGlzLnRyYXZlcnNlQW5kQWN0aXZhdGVEZXNpZ25Nb2RlKHRoaXMpXG4gICAgdGhpcy5tb2RlID0gRGVzaWduTW9kZS5ERVNJR05JTkdcbiAgfVxuXG4gIGFjdGl2YXRlUHJldmlld01vZGUoKSB7XG4gICAgdGhpcy50cmF2ZXJzZUFuZEFjdGl2YXRlUHJldmlld01vZGUodGhpcylcbiAgICB0aGlzLm1vZGUgPSBEZXNpZ25Nb2RlLlBSRVZJRVdJTkdcbiAgfVxuXG4gIHByaXZhdGUgdHJhdmVyc2VBbmRBY3RpdmF0ZURlc2lnbk1vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gZWxlbWVudC5jaGlsZHJlbi5pdGVtKGkpXG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEJhc2VEZXNpZ25Db21wb25lbnQpKSB7XG4gICAgICAgICAgY29uc3QgbmV3Q2hpbGQgPSBCYXNlRGVzaWduQ29tcG9uZW50Lm5ldyhjaGlsZClcbiAgICAgICAgICBlbGVtZW50LnJlcGxhY2VDaGlsZChuZXdDaGlsZCwgY2hpbGQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZUFuZEFjdGl2YXRlRGVzaWduTW9kZShjaGlsZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhdmVyc2VBbmRBY3RpdmF0ZVByZXZpZXdNb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQuY2hpbGRyZW4uaXRlbShpKVxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQmFzZURlc2lnbkNvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbENoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAob3JpZ2luYWxDaGlsZCkge1xuICAgICAgICAgIGVsZW1lbnQucmVwbGFjZUNoaWxkKG9yaWdpbmFsQ2hpbGQsIGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUFuZEFjdGl2YXRlUHJldmlld01vZGUoY2hpbGQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkRGVzaWduRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgcG9zaXRpb24/OiBJUG9zaXRpb24pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IE51bGxFeGNlcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCB7IHgsIHkgfSA9IHBvc2l0aW9uIHx8IHsgeDogMTAsIHk6IDEwLCBtZXRyaWM6ICdweCcgfVxuXG4gICAgc3ByZWFkVG8oZWxlbWVudC5zdHlsZSwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IGAke3l9JHtwb3NpdGlvbj8ubWV0cmljIHx8ICdweCd9YCxcbiAgICAgIGxlZnQ6IGAke3h9JHtwb3NpdGlvbj8ubWV0cmljIHx8ICdweCd9YCxcbiAgICB9KVxuXG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEJhc2VEZXNpZ25Db21wb25lbnQpKSB7XG4gICAgICBlbGVtZW50ID0gQmFzZURlc2lnbkNvbXBvbmVudC5uZXcoZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLyogb25kcm9wID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBlbGVtZW50ID0gIFNoYXJlZENvbmZpZy5nZXQoQUNUSVZFX0VMRU1FTlQpIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRoaXNSZWN0OiBET01SZWN0ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gdGhpc1JlY3QubGVmdDtcbiAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHRoaXNSZWN0LnRvcDtcbiAgICBlbGVtZW50IS5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgZWxlbWVudCEuc3R5bGUudG9wID0geSArICdweCc7XG4gIH1cbiAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nQ2FudmFzXG4iXX0=