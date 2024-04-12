"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseComponent_1 = __importDefault(require("../../base/BaseComponent"));
class DrawingToolBar extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { display: 'flex', 'flex-wrap': 'nowrap', 'flex-direction': 'column', 'justify-content': 'space-around' }));
    }
    appendChildren(...children) {
        super.appendChildren(...children);
    }
}
exports.default = DrawingToolBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ1Rvb2xCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkVBQW9EO0FBS3BELE1BQU0sY0FBZSxTQUFRLHVCQUFhO0lBQ3hDLFlBQVksS0FBYztRQUN4QixLQUFLLGlDQUNBLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEtBQ2hCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsV0FBVyxFQUFFLFFBQVEsRUFDckIsZ0JBQWdCLEVBQUUsUUFBUSxFQUMxQixpQkFBaUIsRUFBRSxjQUFjLElBQ2pDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLEdBQUcsUUFBOEI7UUFDOUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Q0FDRjtBQUVELGtCQUFlLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBJRHJhd2luZ1Rvb2xCYXIgZnJvbSAnLi4vLi4vYmFzZS9tb2RlbC9JRHJhd2luZ1Rvb2xCYXInXG5pbXBvcnQgSVN0eWxlIGZyb20gJy4uLy4uL2Jhc2UvbW9kZWwvSVN0eWxlJ1xuaW1wb3J0IERyYXdpbmdUb29sYmFySXRlbSBmcm9tICcuL0RyYXdpbmdUb29sYmFySXRlbSdcblxuY2xhc3MgRHJhd2luZ1Rvb2xCYXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSURyYXdpbmdUb29sQmFyIHtcbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJU3R5bGUpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgJ2ZsZXgtd3JhcCc6ICdub3dyYXAnLFxuICAgICAgJ2ZsZXgtZGlyZWN0aW9uJzogJ2NvbHVtbicsXG4gICAgICAnanVzdGlmeS1jb250ZW50JzogJ3NwYWNlLWFyb3VuZCcsXG4gICAgfSlcbiAgfVxuXG4gIGFwcGVuZENoaWxkcmVuKC4uLmNoaWxkcmVuOiBEcmF3aW5nVG9vbGJhckl0ZW1bXSk6IHZvaWQge1xuICAgIHN1cGVyLmFwcGVuZENoaWxkcmVuKC4uLmNoaWxkcmVuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdUb29sQmFyXG4iXX0=