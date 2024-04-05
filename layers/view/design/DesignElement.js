"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SharedConfig_1 = __importDefault(require("../../../common/SharedConfig"));
const constants_1 = require("../../../common/constants");
const NullException_1 = __importDefault(require("../../../common/exceptions/NullException"));
const DesignElementTypes_1 = __importDefault(require("../common/DesignElementTypes"));
const BaseDesignComponent_1 = __importDefault(require("./base/BaseDesignComponent"));
class DesignElement extends BaseDesignComponent_1.default {
    constructor(style) {
        super(Object.assign({}, (style !== null && style !== void 0 ? style : {})));
        this.lock = false;
        this.position = { x: 1, y: 2, metric: '%' };
        this.oncontextmenu = () => {
            this.showPopover();
            return true;
        };
        this.oncopy = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
            SharedConfig_1.default.set(constants_1.CLIPBOARD, this);
        };
        this.oncut = (ev) => {
            var _a;
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
            SharedConfig_1.default.set(constants_1.CLIPBOARD, this.cloneNode(true));
            (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this);
        };
        this.onpaste = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
            const copiedDesignElement = SharedConfig_1.default.get(constants_1.CLIPBOARD);
            if (copiedDesignElement && (this.type == DesignElementTypes_1.default.DIV || this.type == DesignElementTypes_1.default.SPAN)) {
                this.appendChildren(copiedDesignElement);
            }
        };
        this.autofocus = false;
        this.initExtendedElement();
    }
    initExtendedElement() {
        this.extendedElement = document.createElement(`${this.type}`);
    }
    hidePopover() {
        this.removeLastChild();
    }
    showPopover() {
        const contextMenu = SharedConfig_1.default.get(constants_1.CONTEXT_MENU);
        if (!contextMenu) {
            throw new NullException_1.default('Context Menu element not found');
        }
        this.appendChildren(contextMenu);
        contextMenu.focus();
        contextMenu.onblur = (e) => {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            this.hidePopover();
        };
    }
    set index(index) {
        this.zIndex = index;
        this.style.zIndex = `${index}`;
    }
    get index() {
        return this.zIndex;
    }
}
exports.default = DesignElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2Rlc2lnbi9EZXNpZ25FbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0ZBQXVEO0FBQ3ZELHlEQUE4RjtBQUM5Riw2RkFBb0U7QUFJcEUsc0ZBQTZEO0FBRTdELHFGQUE0RDtBQU01RCxNQUFlLGFBQWMsU0FBUSw2QkFBbUI7SUFTdEQsWUFBWSxLQUFrQjtRQUM1QixLQUFLLG1CQUNBLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEVBQ2hCLENBQUE7UUFSSixTQUFJLEdBQUcsS0FBSyxDQUFBO1FBRVosYUFBUSxHQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQWNqRCxrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDbEIsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDLENBQUE7UUFxQkQsV0FBTSxHQUFHLENBQUMsRUFBa0IsRUFBRSxFQUFFO1lBQzlCLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtZQUNwQixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25DLENBQUMsQ0FBQTtRQUVELFVBQUssR0FBRyxDQUFDLEVBQWtCLEVBQUUsRUFBRTs7WUFDN0IsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLGNBQWMsRUFBRSxDQUFBO1lBQ3BCLHNCQUFZLENBQUMsR0FBRyxDQUFDLHFCQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQ2pELE1BQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQTtRQUVELFlBQU8sR0FBRyxDQUFDLEVBQWtCLEVBQUUsRUFBRTtZQUMvQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FBYyxFQUFFLENBQUE7WUFDcEIsTUFBTSxtQkFBbUIsR0FBa0Isc0JBQVksQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBZ0MsQ0FBQTtZQUNyRyxJQUFJLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSw0QkFBa0IsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSw0QkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsY0FBUyxHQUFZLEtBQUssQ0FBQTtRQWxEeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBT0QsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sV0FBVyxHQUFrQixzQkFBWSxDQUFDLEdBQUcsQ0FBQyx3QkFBWSxDQUFnQyxDQUFBO1FBRWhHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLHVCQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtTQUMxRDtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25CLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN6QixDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsY0FBYyxFQUFFLENBQUE7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLENBQUMsQ0FBQTtJQUNILENBQUM7SUF1QkQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQztDQXdCRjtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IENMSVBCT0FSRCwgQ09OVEVYVF9NRU5VLCBERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBJRGVzaWduRWxlbWVudCBmcm9tICcuL21vZGVscy9JRGVzaWduRWxlbWVudCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcbmltcG9ydCBJUG9zaXRpb24gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9JUG9zaXRpb24nXG5pbXBvcnQgQmFzZURlc2lnbkNvbXBvbmVudCBmcm9tICcuL2Jhc2UvQmFzZURlc2lnbkNvbXBvbmVudCdcblxuZXhwb3J0IGludGVyZmFjZSBERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBX1RZUEUge1xuICBbREVTSUdOX0VMRU1FTlRfRVZFTlRfREFUQV06IElEZXNpZ25FbGVtZW50XG59XG5cbmFic3RyYWN0IGNsYXNzIERlc2lnbkVsZW1lbnQgZXh0ZW5kcyBCYXNlRGVzaWduQ29tcG9uZW50IGltcGxlbWVudHMgSURlc2lnbkVsZW1lbnQge1xuICBhYnN0cmFjdCB0eXBlOiBEZXNpZ25FbGVtZW50VHlwZXNcbiAgcHJvdGVjdGVkIGV4dGVuZGVkRWxlbWVudCE6IEhUTUxFbGVtZW50XG5cbiAgbG9jayA9IGZhbHNlXG5cbiAgcG9zaXRpb246IElQb3NpdGlvbiA9IHsgeDogMSwgeTogMiwgbWV0cmljOiAnJScgfVxuICB6SW5kZXghOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgIH0pXG4gICAgdGhpcy5pbml0RXh0ZW5kZWRFbGVtZW50KClcbiAgfVxuXG4gIGluaXRFeHRlbmRlZEVsZW1lbnQoKSB7XG4gICAgdGhpcy5leHRlbmRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3RoaXMudHlwZX1gKVxuICB9XG5cbiAgb25jb250ZXh0bWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNob3dQb3BvdmVyKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGlkZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMYXN0Q2hpbGQoKVxuICB9XG5cbiAgc2hvd1BvcG92ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dE1lbnU6IEJhc2VDb21wb25lbnQgPSBTaGFyZWRDb25maWcuZ2V0KENPTlRFWFRfTUVOVSkgYXMgSUFueU9iamVjdCBhcyBCYXNlQ29tcG9uZW50XG5cbiAgICBpZiAoIWNvbnRleHRNZW51KSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignQ29udGV4dCBNZW51IGVsZW1lbnQgbm90IGZvdW5kJylcbiAgICB9XG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKGNvbnRleHRNZW51KVxuICAgIGNvbnRleHRNZW51LmZvY3VzKClcbiAgICBjb250ZXh0TWVudS5vbmJsdXIgPSAoZSkgPT4ge1xuICAgICAgZT8ucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpXG4gICAgfVxuICB9XG5cbiAgb25jb3B5ID0gKGV2OiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gICAgU2hhcmVkQ29uZmlnLnNldChDTElQQk9BUkQsIHRoaXMpXG4gIH1cblxuICBvbmN1dCA9IChldjogQ2xpcGJvYXJkRXZlbnQpID0+IHtcbiAgICBldj8ucHJldmVudERlZmF1bHQoKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoQ0xJUEJPQVJELCB0aGlzLmNsb25lTm9kZSh0cnVlKSlcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKHRoaXMpXG4gIH1cblxuICBvbnBhc3RlID0gKGV2OiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgY29waWVkRGVzaWduRWxlbWVudDogRGVzaWduRWxlbWVudCA9IFNoYXJlZENvbmZpZy5nZXQoQ0xJUEJPQVJEKSBhcyBJQW55T2JqZWN0IGFzIERlc2lnbkVsZW1lbnRcbiAgICBpZiAoY29waWVkRGVzaWduRWxlbWVudCAmJiAodGhpcy50eXBlID09IERlc2lnbkVsZW1lbnRUeXBlcy5ESVYgfHwgdGhpcy50eXBlID09IERlc2lnbkVsZW1lbnRUeXBlcy5TUEFOKSkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZHJlbihjb3BpZWREZXNpZ25FbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGF1dG9mb2N1czogYm9vbGVhbiA9IGZhbHNlXG5cbiAgc2V0IGluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnpJbmRleCA9IGluZGV4XG4gICAgdGhpcy5zdHlsZS56SW5kZXggPSBgJHtpbmRleH1gXG4gIH1cblxuICBnZXQgaW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuekluZGV4XG4gIH1cblxuICAvKiBvbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBldmVudD8ucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0OiBET01SZWN0ID0gU2hhcmVkQ29uZmlnLmdldChEUkFXSU5HX0NBTlZBUykhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSBjb250YWluZXJSZWN0LmxlZnQgLSB0aGlzLmV2ZW5ldE9mZnNldFg7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIGNvbnRhaW5lclJlY3QudG9wIC0gdGhpcy5ldmVuZXRPZmZzZXRZO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ldmVuZXRPZmZzZXRYID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgICAgdGhpcy5ldmVuZXRPZmZzZXRZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB9XG5cbiAgICBvbm1vdXNldXAgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25FbGVtZW50XG4iXX0=