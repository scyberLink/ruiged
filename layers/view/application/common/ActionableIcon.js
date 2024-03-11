"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const SharedConfig_1 = __importDefault(require("../../../../common/SharedConfig"));
const constants_1 = require("../../../../common/constants");
const DesignElementTypes_1 = __importDefault(require("../../common/DesignElementTypes"));
const utils_1 = require("../../common/utils");
const BaseComponent_1 = __importDefault(require("../components/base/BaseComponent"));
const Color_1 = __importDefault(require("./Color"));
class ActionableIcon extends BaseComponent_1.default {
    constructor(style, mode) {
        super(Object.assign({ position: 'relative', width: '18px', height: '18px', border: '0', padding: '1px 2px', 'border-radius': '5px' }, (style !== null && style !== void 0 ? style : {})), mode);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.action = (designElement) => { };
        this.onclick = (event) => {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            const activeElement = SharedConfig_1.default.get(constants_1.ACTIVE_ELEMENT);
            this.action(activeElement);
        };
        this.hovered({
            background: `${Color_1.default.lightBlue}`,
        });
        this.setCursor('pointer');
        this.subscribe();
    }
    init(init) {
        const { svgPathData, hint, description } = init;
        this.svgPathData = svgPathData;
        this.hint = hint;
        this.description = description;
        const svg = (0, utils_1.createSVGElement)({ path: this.svgPathData });
        this.appendChild(svg);
        this.title = this.hint;
    }
    enable() {
        this.disabled = false;
    }
    disable() {
        this.disabled = true;
    }
    subscribe() {
        window.addEventListener(constants_1.EVENT_DESELECT, this.disableCheck);
        window.addEventListener(constants_1.EVENT_SELECT, this.enableCheck);
        this.setAttribute('title', this.hint);
        //this.addClassNames(this.fontAwesomeSolidIcon, this.icon.includes(this.fontAwesome) ? this.icon : `${this.fontAwesome}${this.icon}`, this.fontAwesomeXtraSmallIcon)
    }
    /* notFontAwesomeIcon() {
          this.removeClassNames(this.fontAwesomeSolidIcon, `${this.fontAwesome}*`)
          this.addClassNames(this.icon)
      } */
    disableCheck(ev) {
        ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        this.disable();
    }
    enableCheck(ev) {
        ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        const { [constants_1.DESIGN_ELEMENT_EVENT_DATA]: designElement } = ev === null || ev === void 0 ? void 0 : ev.detail;
        if (designElement) {
            const designType = designElement.type;
            if (this.isTypeSupported(designType)) {
                return this.enable();
            }
        }
        this.disable();
    }
    isTypeSupported(type) {
        if (this.supportedDesignElements == DesignElementTypes_1.default.All) {
            return true;
        }
        for (const designType of this.supportedDesignElements) {
            if (designType === type) {
                return true;
            }
        }
        return false;
    }
}
exports.default = ActionableIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uYWJsZUljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tbW9uL0FjdGlvbmFibGVJY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELG1GQUEwRDtBQUMxRCw0REFBc0g7QUFFdEgseUZBQWdFO0FBQ2hFLDhDQUFxRDtBQUVyRCxxRkFBNEQ7QUFDNUQsb0RBQTJCO0FBSTNCLE1BQWUsY0FBZSxTQUFRLHVCQUFhO0lBQ2pELFlBQVksS0FBa0IsRUFBRSxJQUFpQjtRQUMvQyxLQUFLLGlCQUVELFFBQVEsRUFBRSxVQUFVLEVBQ3BCLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsR0FBRyxFQUNYLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLGVBQWUsRUFBRSxLQUFLLElBQ25CLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEdBRWxCLElBQUksQ0FDTCxDQUFBO1FBbUNILDZEQUE2RDtRQUM3RCxXQUFNLEdBQUcsQ0FBQyxhQUE0QixFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUE7UUE0QzdDLFlBQU8sR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUM5QixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsY0FBYyxFQUFFLENBQUE7WUFDdkIsTUFBTSxhQUFhLEdBQUcsc0JBQVksQ0FBQyxHQUFHLENBQUMsMEJBQWMsQ0FBUSxDQUFBO1lBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFBO1FBbEZDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsR0FBRyxlQUFLLENBQUMsU0FBUyxFQUFFO1NBQ2pDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFNRCxJQUFJLENBQUMsSUFBaUI7UUFDcEIsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUEsd0JBQWdCLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO0lBQ3RCLENBQUM7SUFPRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLDBCQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckMsb0tBQW9LO0lBQ3RLLENBQUM7SUFFRDs7O1VBR007SUFFTixZQUFZLENBQUMsRUFBTztRQUNsQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FBYyxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxXQUFXLENBQUMsRUFBTztRQUNqQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FBYyxFQUFFLENBQUE7UUFDcEIsTUFBTSxFQUFFLENBQUMscUNBQXlCLENBQUMsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsTUFBd0MsQ0FBQTtRQUVuRyxJQUFJLGFBQWEsRUFBRTtZQUNqQixNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFBO1lBQ3JDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7YUFDckI7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQXlCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLDRCQUFrQixDQUFDLEdBQUcsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDckQsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQTthQUNaO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7Q0FPRjtBQUVELGtCQUFlLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IEFDVElWRV9FTEVNRU5ULCBERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBLCBFVkVOVF9ERVNFTEVDVCwgRVZFTlRfU0VMRUNUIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcbmltcG9ydCB7IGNyZWF0ZVNWR0VsZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMnXG5pbXBvcnQgRGVzaWduRWxlbWVudCwgeyBERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBX1RZUEUgfSBmcm9tICcuLi8uLi9kZXNpZ24vRGVzaWduRWxlbWVudCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IENvbG9yIGZyb20gJy4vQ29sb3InXG5pbXBvcnQgSUFjdGlvbiwgeyBJQWN0aW9uSW5pdCB9IGZyb20gJy4vSUFjdGlvbidcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4vU2hhZG93TW9kZSdcblxuYWJzdHJhY3QgY2xhc3MgQWN0aW9uYWJsZUljb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCwgbW9kZT86IFNoYWRvd01vZGUpIHtcbiAgICBzdXBlcihcbiAgICAgIHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMThweCcsXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgICBib3JkZXI6ICcwJyxcbiAgICAgICAgcGFkZGluZzogJzFweCAycHgnLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICc1cHgnLFxuICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgfSxcbiAgICAgIG1vZGUsXG4gICAgKVxuXG4gICAgdGhpcy5ob3ZlcmVkKHtcbiAgICAgIGJhY2tncm91bmQ6IGAke0NvbG9yLmxpZ2h0Qmx1ZX1gLFxuICAgIH0pXG5cbiAgICB0aGlzLnNldEN1cnNvcigncG9pbnRlcicpXG5cbiAgICB0aGlzLnN1YnNjcmliZSgpXG4gIH1cblxuICBzdmdQYXRoRGF0YSE6IHN0cmluZ1xuICBoaW50ITogc3RyaW5nXG4gIGRlc2NyaXB0aW9uITogc3RyaW5nXG5cbiAgaW5pdChpbml0OiBJQWN0aW9uSW5pdCkge1xuICAgIGNvbnN0IHsgc3ZnUGF0aERhdGEsIGhpbnQsIGRlc2NyaXB0aW9uIH0gPSBpbml0XG4gICAgdGhpcy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhXG4gICAgdGhpcy5oaW50ID0gaGludFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IHN2ZyA9IGNyZWF0ZVNWR0VsZW1lbnQoeyBwYXRoOiB0aGlzLnN2Z1BhdGhEYXRhIH0pXG4gICAgdGhpcy5hcHBlbmRDaGlsZChzdmcpXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuaGludFxuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICB9XG5cbiAgYWJzdHJhY3Qgc3VwcG9ydGVkRGVzaWduRWxlbWVudHM6IERlc2lnbkVsZW1lbnRUeXBlcyB8IERlc2lnbkVsZW1lbnRUeXBlc1tdXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBhY3Rpb24gPSAoZGVzaWduRWxlbWVudDogRGVzaWduRWxlbWVudCkgPT4ge31cblxuICBzdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfREVTRUxFQ1QsIHRoaXMuZGlzYWJsZUNoZWNrKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEVWRU5UX1NFTEVDVCwgdGhpcy5lbmFibGVDaGVjaylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLmhpbnQpXG4gICAgLy90aGlzLmFkZENsYXNzTmFtZXModGhpcy5mb250QXdlc29tZVNvbGlkSWNvbiwgdGhpcy5pY29uLmluY2x1ZGVzKHRoaXMuZm9udEF3ZXNvbWUpID8gdGhpcy5pY29uIDogYCR7dGhpcy5mb250QXdlc29tZX0ke3RoaXMuaWNvbn1gLCB0aGlzLmZvbnRBd2Vzb21lWHRyYVNtYWxsSWNvbilcbiAgfVxuXG4gIC8qIG5vdEZvbnRBd2Vzb21lSWNvbigpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWVzKHRoaXMuZm9udEF3ZXNvbWVTb2xpZEljb24sIGAke3RoaXMuZm9udEF3ZXNvbWV9KmApXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lcyh0aGlzLmljb24pXG4gICAgfSAqL1xuXG4gIGRpc2FibGVDaGVjayhldjogYW55KSB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRpc2FibGUoKVxuICB9XG5cbiAgZW5hYmxlQ2hlY2soZXY6IGFueSkge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyBbREVTSUdOX0VMRU1FTlRfRVZFTlRfREFUQV06IGRlc2lnbkVsZW1lbnQgfSA9IGV2Py5kZXRhaWwgYXMgREVTSUdOX0VMRU1FTlRfRVZFTlRfREFUQV9UWVBFXG5cbiAgICBpZiAoZGVzaWduRWxlbWVudCkge1xuICAgICAgY29uc3QgZGVzaWduVHlwZSA9IGRlc2lnbkVsZW1lbnQudHlwZVxuICAgICAgaWYgKHRoaXMuaXNUeXBlU3VwcG9ydGVkKGRlc2lnblR5cGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuYWJsZSgpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZSgpXG4gIH1cblxuICBpc1R5cGVTdXBwb3J0ZWQodHlwZT86IERlc2lnbkVsZW1lbnRUeXBlcykge1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZERlc2lnbkVsZW1lbnRzID09IERlc2lnbkVsZW1lbnRUeXBlcy5BbGwpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGZvciAoY29uc3QgZGVzaWduVHlwZSBvZiB0aGlzLnN1cHBvcnRlZERlc2lnbkVsZW1lbnRzKSB7XG4gICAgICBpZiAoZGVzaWduVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBldmVudD8ucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBTaGFyZWRDb25maWcuZ2V0KEFDVElWRV9FTEVNRU5UKSBhcyBhbnlcbiAgICB0aGlzLmFjdGlvbihhY3RpdmVFbGVtZW50KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbmFibGVJY29uXG4iXX0=