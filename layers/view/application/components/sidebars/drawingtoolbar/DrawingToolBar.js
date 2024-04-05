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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ1Rvb2xCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQW9EO0FBSXBELE1BQU0sY0FBZSxTQUFRLHVCQUFhO0lBQ3hDLFlBQVksS0FBa0I7UUFDNUIsS0FBSyxpQ0FDQSxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxLQUNoQixPQUFPLEVBQUUsTUFBTSxFQUNmLFdBQVcsRUFBRSxRQUFRLEVBQ3JCLGdCQUFnQixFQUFFLFFBQVEsRUFDMUIsaUJBQWlCLEVBQUUsY0FBYyxJQUNqQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFHLFFBQThCO1FBQzlDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgSURyYXdpbmdUb29sQmFyIGZyb20gJy4uLy4uL2Jhc2UvbW9kZWwvSURyYXdpbmdUb29sQmFyJ1xuaW1wb3J0IERyYXdpbmdUb29sYmFySXRlbSBmcm9tICcuL0RyYXdpbmdUb29sYmFySXRlbSdcblxuY2xhc3MgRHJhd2luZ1Rvb2xCYXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSURyYXdpbmdUb29sQmFyIHtcbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0KSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICdmbGV4LXdyYXAnOiAnbm93cmFwJyxcbiAgICAgICdmbGV4LWRpcmVjdGlvbic6ICdjb2x1bW4nLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdzcGFjZS1hcm91bmQnLFxuICAgIH0pXG4gIH1cblxuICBhcHBlbmRDaGlsZHJlbiguLi5jaGlsZHJlbjogRHJhd2luZ1Rvb2xiYXJJdGVtW10pOiB2b2lkIHtcbiAgICBzdXBlci5hcHBlbmRDaGlsZHJlbiguLi5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nVG9vbEJhclxuIl19