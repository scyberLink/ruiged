"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignMode = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const constants_1 = require("../../../../../common/constants");
const NullException_1 = __importDefault(require("../../../../../common/exceptions/NullException"));
const utils_1 = require("../../../../../common/utils");
const DesignElement_1 = __importDefault(require("../../../design/base/DesignElement"));
const BaseComponent_1 = __importDefault(require("../base/BaseComponent"));
var DesignMode;
(function (DesignMode) {
    DesignMode[DesignMode["PREVIEWING"] = 0] = "PREVIEWING";
    DesignMode[DesignMode["DESIGNING"] = 1] = "DESIGNING";
})(DesignMode = exports.DesignMode || (exports.DesignMode = {}));
class DrawingCanvas extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { background: 'transparent', overflow: 'none', 'z-index': constants_1.MIN_Z_INDEX }));
        this.mode = DesignMode.PREVIEWING;
        this.designElements = [];
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
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children.item(i);
            if (child && !(child instanceof DesignElement_1.default)) {
                const newChild = new DesignElement_1.default(child);
                if (this.contains(child)) {
                    this.replaceChild(newChild, child);
                }
            }
        }
        this.mode = DesignMode.DESIGNING;
    }
    activatePreviewMode() {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children.item(i);
            if (child instanceof DesignElement_1.default) {
                const originalChild = child.childNodes[0];
                if (originalChild && this.contains(child)) {
                    this.replaceChild(originalChild, child);
                }
            }
        }
        this.mode = DesignMode.PREVIEWING;
    }
    addDesignElement(element, position) {
        if (!element) {
            throw NullException_1.default;
        }
        const { x, y } = position || { x: 1, y: 1, metric: 'px' };
        (0, utils_1.spreadTo)(element.style, {
            top: `${y}${(position === null || position === void 0 ? void 0 : position.metric) || 'px'}`,
            left: `${x}${(position === null || position === void 0 ? void 0 : position.metric) || 'px'}`,
        });
        if (!(element instanceof DesignElement_1.default)) {
            element = new DesignElement_1.default(element);
        }
        this.appendChildren(element);
        return element;
    }
    /* ondrop = (event: DragEvent) => {
      event.preventDefault();
      let element =  SharedConfig.get(ACTIVE_ELEMENT) as HTMLElement
      if (!element) {
        return;
      }
      const thisRect: DOMRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = event.clientX - thisRect.left;
      const y = event.clientY - thisRect.top;
      element!.style.left = x + 'px';
      element!.style.top = y + 'px';
    }
   */
    addEventToDesignElement(eventName, listener) {
        for (const designElement of this.designElements) {
            designElement.addEventListener(eventName, listener);
        }
    }
}
exports.default = DrawingCanvas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ0NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVEQUF1RDtBQUN2RCwrREFBNkQ7QUFDN0QsbUdBQTBFO0FBRTFFLHVEQUFzRDtBQUN0RCx1RkFBOEQ7QUFDOUQsMEVBQWlEO0FBSWpELElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQix1REFBVSxDQUFBO0lBQ1YscURBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQUVELE1BQU0sYUFBYyxTQUFRLHVCQUFhO0lBR3ZDLFlBQVksS0FBYztRQUN4QixLQUFLLGlDQUNBLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEtBQ2hCLFVBQVUsRUFBRSxhQUFhLEVBQ3pCLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLFNBQVMsRUFBRSx1QkFBVyxJQUN0QixDQUFBO1FBUkosU0FBSSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFDNUIsbUJBQWMsR0FBb0IsRUFBRSxDQUFBO1FBVXBDLFlBQU8sR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUM5QiwrQkFBK0I7WUFDL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQix5QkFBeUI7Z0JBRXpCLDBEQUEwRDtnQkFFMUQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtnQkFDMUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFBLENBQUMsMkRBQTJEO2dCQUNuRixNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxF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Ozs7Ozs7Ozs7OztLQVlDO0lBRUQsdUJBQXVCLENBQUMsU0FBaUIsRUFBRSxRQUEyQjtRQUNwRSxLQUFLLE1BQU0sYUFBYSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDL0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtTQUNwRDtJQUNILENBQUM7Q0FDRjtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IE1JTl9aX0lOREVYIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSVBvc2l0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSVBvc2l0aW9uJ1xuaW1wb3J0IHsgc3ByZWFkVG8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi8uLi8uLi9kZXNpZ24vYmFzZS9EZXNpZ25FbGVtZW50J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IElEcmF3aW5nQ2FudmFzIGZyb20gJy4uL2Jhc2UvbW9kZWwvSURyYXdpbmdDYW52YXMnXG5pbXBvcnQgSVN0eWxlIGZyb20gJy4uL2Jhc2UvbW9kZWwvSVN0eWxlJ1xuXG5leHBvcnQgZW51bSBEZXNpZ25Nb2RlIHtcbiAgUFJFVklFV0lORyxcbiAgREVTSUdOSU5HLFxufVxuXG5jbGFzcyBEcmF3aW5nQ2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElEcmF3aW5nQ2FudmFzIHtcbiAgbW9kZSA9IERlc2lnbk1vZGUuUFJFVklFV0lOR1xuICBkZXNpZ25FbGVtZW50czogRGVzaWduRWxlbWVudFtdID0gW11cbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJU3R5bGUpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG92ZXJmbG93OiAnbm9uZScsXG4gICAgICAnei1pbmRleCc6IE1JTl9aX0lOREVYLFxuICAgIH0pXG4gIH1cblxuICBvbndoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgQ3RybCBrZXkgaXMgcHJlc3NlZFxuICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IHNjYWxlIGZhY3RvciBiYXNlZCBvbiB0aGUgd2hlZWwgZGVsdGFcblxuICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5kZWx0YVlcbiAgICAgIGNvbnN0IHpvb21GYWN0b3IgPSAwLjAyIC8vIFlvdSBjYW4gYWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciB6b29tIHNlbnNpdGl2aXR5XG4gICAgICBjb25zdCBjdXJyZW50U2NhbGUgPSBwYXJzZUZsb2F0KHRoaXMuc3R5bGUudHJhbnNmb3JtLnJlcGxhY2UoJ3NjYWxlKCcsICcnKS5yZXBsYWNlKCcpJywgJycpKSB8fCAxXG4gICAgICBsZXQgc2NhbGVcbiAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgc2NhbGUgPSBjdXJyZW50U2NhbGUgKyB6b29tRmFjdG9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2FsZSA9IGN1cnJlbnRTY2FsZSAtIHpvb21GYWN0b3JcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSBuZXcgc2NhbGUgZmFjdG9yXG4gICAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgICB9XG4gIH1cblxuICBhY3RpdmF0ZURlc2lnbk1vZGUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW4uaXRlbShpKSBhcyBIVE1MRWxlbWVudFxuICAgICAgaWYgKGNoaWxkICYmICEoY2hpbGQgaW5zdGFuY2VvZiBEZXNpZ25FbGVtZW50KSkge1xuICAgICAgICBjb25zdCBuZXdDaGlsZCA9IG5ldyBEZXNpZ25FbGVtZW50KGNoaWxkKVxuICAgICAgICBpZiAodGhpcy5jb250YWlucyhjaGlsZCkpIHtcbiAgICAgICAgICB0aGlzLnJlcGxhY2VDaGlsZChuZXdDaGlsZCwgY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tb2RlID0gRGVzaWduTW9kZS5ERVNJR05JTkdcbiAgfVxuXG4gIGFjdGl2YXRlUHJldmlld01vZGUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW4uaXRlbShpKVxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRGVzaWduRWxlbWVudCkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbENoaWxkID0gY2hpbGQuY2hpbGROb2Rlc1swXSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAob3JpZ2luYWxDaGlsZCAmJiB0aGlzLmNvbnRhaW5zKGNoaWxkKSkge1xuICAgICAgICAgIHRoaXMucmVwbGFjZUNoaWxkKG9yaWdpbmFsQ2hpbGQsIGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubW9kZSA9IERlc2lnbk1vZGUuUFJFVklFV0lOR1xuICB9XG5cbiAgYWRkRGVzaWduRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCwgcG9zaXRpb24/OiBJUG9zaXRpb24pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IE51bGxFeGNlcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCB7IHgsIHkgfSA9IHBvc2l0aW9uIHx8IHsgeDogMSwgeTogMSwgbWV0cmljOiAncHgnIH1cblxuICAgIHNwcmVhZFRvKGVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIHRvcDogYCR7eX0ke3Bvc2l0aW9uPy5tZXRyaWMgfHwgJ3B4J31gLFxuICAgICAgbGVmdDogYCR7eH0ke3Bvc2l0aW9uPy5tZXRyaWMgfHwgJ3B4J31gLFxuICAgIH0pXG5cbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgRGVzaWduRWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnQgPSBuZXcgRGVzaWduRWxlbWVudChlbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oZWxlbWVudClcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvKiBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGVsZW1lbnQgPSAgU2hhcmVkQ29uZmlnLmdldChBQ1RJVkVfRUxFTUVOVCkgYXMgSFRNTEVsZW1lbnRcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGhpc1JlY3Q6IERPTVJlY3QgPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSB0aGlzUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gdGhpc1JlY3QudG9wO1xuICAgIGVsZW1lbnQhLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBlbGVtZW50IS5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfVxuICovXG5cbiAgYWRkRXZlbnRUb0Rlc2lnbkVsZW1lbnQoZXZlbnROYW1lOiBzdHJpbmcsIGxpc3RlbmVyOiAoZTogRXZlbnQpID0+IGFueSkge1xuICAgIGZvciAoY29uc3QgZGVzaWduRWxlbWVudCBvZiB0aGlzLmRlc2lnbkVsZW1lbnRzKSB7XG4gICAgICBkZXNpZ25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZ0NhbnZhc1xuIl19