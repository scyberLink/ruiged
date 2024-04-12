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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uYWJsZUljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21tb24vQWN0aW9uYWJsZUljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsbUZBQTBEO0FBQzFELDREQUFzSDtBQUV0SCx5RkFBZ0U7QUFDaEUsOENBQXFEO0FBRXJELHFGQUE0RDtBQUM1RCxvREFBMkI7QUFJM0IsTUFBZSxjQUFlLFNBQVEsdUJBQWE7SUFDakQsWUFBWSxLQUFrQixFQUFFLElBQWlCO1FBQy9DLEtBQUssaUJBRUQsUUFBUSxFQUFFLFVBQVUsRUFDcEIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxHQUFHLEVBQ1gsT0FBTyxFQUFFLFNBQVMsRUFDbEIsZUFBZSxFQUFFLEtBQUssSUFDbkIsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsR0FFbEIsSUFBSSxDQUNMLENBQUE7UUFtQ0gsNkRBQTZEO1FBQzdELFdBQU0sR0FBRyxDQUFDLGFBQTRCLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQTtRQTRDN0MsWUFBTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQzlCLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxjQUFjLEVBQUUsQ0FBQTtZQUN2QixNQUFNLGFBQWEsR0FBRyxzQkFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFRLENBQUE7WUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUE7UUFsRkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxHQUFHLGVBQUssQ0FBQyxTQUFTLEVBQUU7U0FDakMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQU1ELElBQUksQ0FBQyxJQUFpQjtRQUNwQixNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsTUFBTSxHQUFHLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUN4QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFDdEIsQ0FBQztJQU9ELFNBQVM7UUFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsMEJBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDMUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHdCQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxvS0FBb0s7SUFDdEssQ0FBQztJQUVEOzs7VUFHTTtJQUVOLFlBQVksQ0FBQyxFQUFPO1FBQ2xCLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFPO1FBQ2pCLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUNwQixNQUFNLEVBQUUsQ0FBQyxxQ0FBeUIsQ0FBQyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxNQUFhLENBQUE7UUFFeEUsSUFBSSxhQUFhLEVBQUU7WUFDakIsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQTtZQUNyQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO2FBQ3JCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUF5QjtRQUN2QyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSw0QkFBa0IsQ0FBQyxHQUFHLEVBQUU7WUFDMUQsT0FBTyxJQUFJLENBQUE7U0FDWjtRQUNELEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ3JELElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUE7YUFDWjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0NBT0Y7QUFFRCxrQkFBZSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgU2hhcmVkQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9TaGFyZWRDb25maWcnXG5pbXBvcnQgeyBBQ1RJVkVfRUxFTUVOVCwgREVTSUdOX0VMRU1FTlRfRVZFTlRfREFUQSwgRVZFTlRfREVTRUxFQ1QsIEVWRU5UX1NFTEVDVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgRGVzaWduRWxlbWVudFR5cGVzIGZyb20gJy4uLy4uL2NvbW1vbi9EZXNpZ25FbGVtZW50VHlwZXMnXG5pbXBvcnQgeyBjcmVhdGVTVkdFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWxzJ1xuaW1wb3J0IERlc2lnbkVsZW1lbnQgZnJvbSAnLi4vLi4vZGVzaWduL2Jhc2UvRGVzaWduRWxlbWVudCdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IENvbG9yIGZyb20gJy4vQ29sb3InXG5pbXBvcnQgSUFjdGlvbiwgeyBJQWN0aW9uSW5pdCB9IGZyb20gJy4vSUFjdGlvbidcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4vU2hhZG93TW9kZSdcblxuYWJzdHJhY3QgY2xhc3MgQWN0aW9uYWJsZUljb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCwgbW9kZT86IFNoYWRvd01vZGUpIHtcbiAgICBzdXBlcihcbiAgICAgIHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMThweCcsXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgICBib3JkZXI6ICcwJyxcbiAgICAgICAgcGFkZGluZzogJzFweCAycHgnLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICc1cHgnLFxuICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgfSxcbiAgICAgIG1vZGUsXG4gICAgKVxuXG4gICAgdGhpcy5ob3ZlcmVkKHtcbiAgICAgIGJhY2tncm91bmQ6IGAke0NvbG9yLmxpZ2h0Qmx1ZX1gLFxuICAgIH0pXG5cbiAgICB0aGlzLnNldEN1cnNvcigncG9pbnRlcicpXG5cbiAgICB0aGlzLnN1YnNjcmliZSgpXG4gIH1cblxuICBzdmdQYXRoRGF0YSE6IHN0cmluZ1xuICBoaW50ITogc3RyaW5nXG4gIGRlc2NyaXB0aW9uITogc3RyaW5nXG5cbiAgaW5pdChpbml0OiBJQWN0aW9uSW5pdCkge1xuICAgIGNvbnN0IHsgc3ZnUGF0aERhdGEsIGhpbnQsIGRlc2NyaXB0aW9uIH0gPSBpbml0XG4gICAgdGhpcy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhXG4gICAgdGhpcy5oaW50ID0gaGludFxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IHN2ZyA9IGNyZWF0ZVNWR0VsZW1lbnQoeyBwYXRoOiB0aGlzLnN2Z1BhdGhEYXRhIH0pXG4gICAgdGhpcy5hcHBlbmRDaGlsZChzdmcpXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuaGludFxuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICB9XG5cbiAgYWJzdHJhY3Qgc3VwcG9ydGVkRGVzaWduRWxlbWVudHM6IERlc2lnbkVsZW1lbnRUeXBlcyB8IERlc2lnbkVsZW1lbnRUeXBlc1tdXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBhY3Rpb24gPSAoZGVzaWduRWxlbWVudDogRGVzaWduRWxlbWVudCkgPT4ge31cblxuICBzdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfREVTRUxFQ1QsIHRoaXMuZGlzYWJsZUNoZWNrKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEVWRU5UX1NFTEVDVCwgdGhpcy5lbmFibGVDaGVjaylcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLmhpbnQpXG4gICAgLy90aGlzLmFkZENsYXNzTmFtZXModGhpcy5mb250QXdlc29tZVNvbGlkSWNvbiwgdGhpcy5pY29uLmluY2x1ZGVzKHRoaXMuZm9udEF3ZXNvbWUpID8gdGhpcy5pY29uIDogYCR7dGhpcy5mb250QXdlc29tZX0ke3RoaXMuaWNvbn1gLCB0aGlzLmZvbnRBd2Vzb21lWHRyYVNtYWxsSWNvbilcbiAgfVxuXG4gIC8qIG5vdEZvbnRBd2Vzb21lSWNvbigpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzc05hbWVzKHRoaXMuZm9udEF3ZXNvbWVTb2xpZEljb24sIGAke3RoaXMuZm9udEF3ZXNvbWV9KmApXG4gICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lcyh0aGlzLmljb24pXG4gICAgfSAqL1xuXG4gIGRpc2FibGVDaGVjayhldjogYW55KSB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRpc2FibGUoKVxuICB9XG5cbiAgZW5hYmxlQ2hlY2soZXY6IGFueSkge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgeyBbREVTSUdOX0VMRU1FTlRfRVZFTlRfREFUQV06IGRlc2lnbkVsZW1lbnQgfSA9IGV2Py5kZXRhaWwgYXMgYW55XG5cbiAgICBpZiAoZGVzaWduRWxlbWVudCkge1xuICAgICAgY29uc3QgZGVzaWduVHlwZSA9IGRlc2lnbkVsZW1lbnQudHlwZVxuICAgICAgaWYgKHRoaXMuaXNUeXBlU3VwcG9ydGVkKGRlc2lnblR5cGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuYWJsZSgpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZSgpXG4gIH1cblxuICBpc1R5cGVTdXBwb3J0ZWQodHlwZT86IERlc2lnbkVsZW1lbnRUeXBlcykge1xuICAgIGlmICh0aGlzLnN1cHBvcnRlZERlc2lnbkVsZW1lbnRzID09IERlc2lnbkVsZW1lbnRUeXBlcy5BbGwpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGZvciAoY29uc3QgZGVzaWduVHlwZSBvZiB0aGlzLnN1cHBvcnRlZERlc2lnbkVsZW1lbnRzKSB7XG4gICAgICBpZiAoZGVzaWduVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBldmVudD8ucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBTaGFyZWRDb25maWcuZ2V0KEFDVElWRV9FTEVNRU5UKSBhcyBhbnlcbiAgICB0aGlzLmFjdGlvbihhY3RpdmVFbGVtZW50KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbmFibGVJY29uXG4iXX0=