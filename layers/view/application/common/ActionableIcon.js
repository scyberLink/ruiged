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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uYWJsZUljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21tb24vQWN0aW9uYWJsZUljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsbUZBQTBEO0FBQzFELDREQUFzSDtBQUV0SCx5RkFBZ0U7QUFDaEUsOENBQXFEO0FBRXJELHFGQUE0RDtBQUM1RCxvREFBMkI7QUFJM0IsTUFBZSxjQUFlLFNBQVEsdUJBQWE7SUFDakQsWUFBWSxLQUFrQixFQUFFLElBQWlCO1FBQy9DLEtBQUssaUJBRUQsUUFBUSxFQUFFLFVBQVUsRUFDcEIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxHQUFHLEVBQ1gsT0FBTyxFQUFFLFNBQVMsRUFDbEIsZUFBZSxFQUFFLEtBQUssSUFDbkIsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsR0FFbEIsSUFBSSxDQUNMLENBQUE7UUFtQ0gsNkRBQTZEO1FBQzdELFdBQU0sR0FBRyxDQUFDLGFBQTRCLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQTtRQTRDN0MsWUFBTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQzlCLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxjQUFjLEVBQUUsQ0FBQTtZQUN2QixNQUFNLGFBQWEsR0FBRyxzQkFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFRLENBQUE7WUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUE7UUFsRkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxHQUFHLGVBQUssQ0FBQyxTQUFTLEVBQUU7U0FDakMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQU1ELElBQUksQ0FBQyxJQUFpQjtRQUNwQixNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsTUFBTSxHQUFHLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUN4QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFDdEIsQ0FBQztJQU9ELFNBQVM7UUFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsMEJBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDMUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHdCQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQyxvS0FBb0s7SUFDdEssQ0FBQztJQUVEOzs7VUFHTTtJQUVOLFlBQVksQ0FBQyxFQUFPO1FBQ2xCLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFPO1FBQ2pCLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUNwQixNQUFNLEVBQUUsQ0FBQyxxQ0FBeUIsQ0FBQyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxNQUF3QyxDQUFBO1FBRW5HLElBQUksYUFBYSxFQUFFO1lBQ2pCLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUE7WUFDckMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUNyQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBeUI7UUFDdkMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLElBQUksNEJBQWtCLENBQUMsR0FBRyxFQUFFO1lBQzFELE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFDRCxLQUFLLE1BQU0sVUFBVSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNyRCxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFBO2FBQ1o7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztDQU9GO0FBRUQsa0JBQWUsY0FBYyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IFNoYXJlZENvbmZpZyBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vU2hhcmVkQ29uZmlnJ1xuaW1wb3J0IHsgQUNUSVZFX0VMRU1FTlQsIERFU0lHTl9FTEVNRU5UX0VWRU5UX0RBVEEsIEVWRU5UX0RFU0VMRUNULCBFVkVOVF9TRUxFQ1QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IERlc2lnbkVsZW1lbnRUeXBlcyBmcm9tICcuLi8uLi9jb21tb24vRGVzaWduRWxlbWVudFR5cGVzJ1xuaW1wb3J0IHsgY3JlYXRlU1ZHRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlscydcbmltcG9ydCBEZXNpZ25FbGVtZW50LCB7IERFU0lHTl9FTEVNRU5UX0VWRU5UX0RBVEFfVFlQRSB9IGZyb20gJy4uLy4uL2Rlc2lnbi9EZXNpZ25FbGVtZW50J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi9Db2xvcidcbmltcG9ydCBJQWN0aW9uLCB7IElBY3Rpb25Jbml0IH0gZnJvbSAnLi9JQWN0aW9uJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi9TaGFkb3dNb2RlJ1xuXG5hYnN0cmFjdCBjbGFzcyBBY3Rpb25hYmxlSWNvbiBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJQWN0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0LCBtb2RlPzogU2hhZG93TW9kZSkge1xuICAgIHN1cGVyKFxuICAgICAge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6ICcxOHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgICBwYWRkaW5nOiAnMXB4IDJweCcsXG4gICAgICAgICdib3JkZXItcmFkaXVzJzogJzVweCcsXG4gICAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICB9LFxuICAgICAgbW9kZSxcbiAgICApXG5cbiAgICB0aGlzLmhvdmVyZWQoe1xuICAgICAgYmFja2dyb3VuZDogYCR7Q29sb3IubGlnaHRCbHVlfWAsXG4gICAgfSlcblxuICAgIHRoaXMuc2V0Q3Vyc29yKCdwb2ludGVyJylcblxuICAgIHRoaXMuc3Vic2NyaWJlKClcbiAgfVxuXG4gIHN2Z1BhdGhEYXRhITogc3RyaW5nXG4gIGhpbnQhOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmdcblxuICBpbml0KGluaXQ6IElBY3Rpb25Jbml0KSB7XG4gICAgY29uc3QgeyBzdmdQYXRoRGF0YSwgaGludCwgZGVzY3JpcHRpb24gfSA9IGluaXRcbiAgICB0aGlzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGFcbiAgICB0aGlzLmhpbnQgPSBoaW50XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgY29uc3Qgc3ZnID0gY3JlYXRlU1ZHRWxlbWVudCh7IHBhdGg6IHRoaXMuc3ZnUGF0aERhdGEgfSlcbiAgICB0aGlzLmFwcGVuZENoaWxkKHN2ZylcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5oaW50XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gIH1cblxuICBhYnN0cmFjdCBzdXBwb3J0ZWREZXNpZ25FbGVtZW50czogRGVzaWduRWxlbWVudFR5cGVzIHwgRGVzaWduRWxlbWVudFR5cGVzW11cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGFjdGlvbiA9IChkZXNpZ25FbGVtZW50OiBEZXNpZ25FbGVtZW50KSA9PiB7fVxuXG4gIHN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVF9ERVNFTEVDVCwgdGhpcy5kaXNhYmxlQ2hlY2spXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfU0VMRUNULCB0aGlzLmVuYWJsZUNoZWNrKVxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuaGludClcbiAgICAvL3RoaXMuYWRkQ2xhc3NOYW1lcyh0aGlzLmZvbnRBd2Vzb21lU29saWRJY29uLCB0aGlzLmljb24uaW5jbHVkZXModGhpcy5mb250QXdlc29tZSkgPyB0aGlzLmljb24gOiBgJHt0aGlzLmZvbnRBd2Vzb21lfSR7dGhpcy5pY29ufWAsIHRoaXMuZm9udEF3ZXNvbWVYdHJhU21hbGxJY29uKVxuICB9XG5cbiAgLyogbm90Rm9udEF3ZXNvbWVJY29uKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzTmFtZXModGhpcy5mb250QXdlc29tZVNvbGlkSWNvbiwgYCR7dGhpcy5mb250QXdlc29tZX0qYClcbiAgICAgICAgdGhpcy5hZGRDbGFzc05hbWVzKHRoaXMuaWNvbilcbiAgICB9ICovXG5cbiAgZGlzYWJsZUNoZWNrKGV2OiBhbnkpIHtcbiAgICBldj8ucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZGlzYWJsZSgpXG4gIH1cblxuICBlbmFibGVDaGVjayhldjogYW55KSB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IFtERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBXTogZGVzaWduRWxlbWVudCB9ID0gZXY/LmRldGFpbCBhcyBERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBX1RZUEVcblxuICAgIGlmIChkZXNpZ25FbGVtZW50KSB7XG4gICAgICBjb25zdCBkZXNpZ25UeXBlID0gZGVzaWduRWxlbWVudC50eXBlXG4gICAgICBpZiAodGhpcy5pc1R5cGVTdXBwb3J0ZWQoZGVzaWduVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlKClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlKClcbiAgfVxuXG4gIGlzVHlwZVN1cHBvcnRlZCh0eXBlPzogRGVzaWduRWxlbWVudFR5cGVzKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydGVkRGVzaWduRWxlbWVudHMgPT0gRGVzaWduRWxlbWVudFR5cGVzLkFsbCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZm9yIChjb25zdCBkZXNpZ25UeXBlIG9mIHRoaXMuc3VwcG9ydGVkRGVzaWduRWxlbWVudHMpIHtcbiAgICAgIGlmIChkZXNpZ25UeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgb25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50Py5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IFNoYXJlZENvbmZpZy5nZXQoQUNUSVZFX0VMRU1FTlQpIGFzIGFueVxuICAgIHRoaXMuYWN0aW9uKGFjdGl2ZUVsZW1lbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uYWJsZUljb25cbiJdfQ==