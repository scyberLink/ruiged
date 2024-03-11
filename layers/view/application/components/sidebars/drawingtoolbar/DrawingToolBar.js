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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ1Rvb2xCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbEJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDZFQUFvRDtBQUlwRCxNQUFNLGNBQWUsU0FBUSx1QkFBYTtJQUN4QyxZQUFZLEtBQWtCO1FBQzVCLEtBQUssaUNBQ0EsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsS0FDaEIsT0FBTyxFQUFFLE1BQU0sRUFDZixXQUFXLEVBQUUsUUFBUSxFQUNyQixnQkFBZ0IsRUFBRSxRQUFRLEVBQzFCLGlCQUFpQixFQUFFLGNBQWMsSUFDakMsQ0FBQTtJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBRyxRQUE4QjtRQUM5QyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUE7SUFDbkMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsY0FBYyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IElEcmF3aW5nVG9vbEJhciBmcm9tICcuLi8uLi9iYXNlL21vZGVsL0lEcmF3aW5nVG9vbEJhcidcbmltcG9ydCBEcmF3aW5nVG9vbGJhckl0ZW0gZnJvbSAnLi9EcmF3aW5nVG9vbGJhckl0ZW0nXG5cbmNsYXNzIERyYXdpbmdUb29sQmFyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElEcmF3aW5nVG9vbEJhciB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCkge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAnZmxleC13cmFwJzogJ25vd3JhcCcsXG4gICAgICAnZmxleC1kaXJlY3Rpb24nOiAnY29sdW1uJyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtYXJvdW5kJyxcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kQ2hpbGRyZW4oLi4uY2hpbGRyZW46IERyYXdpbmdUb29sYmFySXRlbVtdKTogdm9pZCB7XG4gICAgc3VwZXIuYXBwZW5kQ2hpbGRyZW4oLi4uY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZ1Rvb2xCYXJcbiJdfQ==