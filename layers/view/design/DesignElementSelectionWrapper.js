"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullException_1 = __importDefault(require("../../../common/exceptions/NullException"));
const BaseComponent_1 = __importDefault(require("../application/components/base/BaseComponent"));
class DesignElementSelectionWrapper extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign({ background: 'transparent', border: '0', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, (style !== null && style !== void 0 ? style : {})));
    }
    setElementToWrap(element) {
        if (!element) {
            throw new NullException_1.default();
        }
        this.wrappedElement = element;
        this.updateSize(element);
    }
    updateSize(element) {
        const width = element.clientWidth;
        const height = element.clientHeight;
        this.style.width = width + 15 + 'px';
        this.style.height = height + 15 + 'px';
    }
    getWrappedElement() {
        return this.wrappedElement;
    }
}
exports.default = DesignElementSelectionWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGF5ZXJzL3ZpZXcvZGVzaWduL0Rlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkZBQW9FO0FBRXBFLGlHQUF3RTtBQUl4RSxNQUFNLDZCQUE4QixTQUFRLHVCQUFhO0lBR3ZELFlBQVksS0FBa0I7UUFDNUIsS0FBSyxpQkFDSCxVQUFVLEVBQUUsYUFBYSxFQUN6QixNQUFNLEVBQUUsR0FBRyxFQUNYLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLEdBQUcsRUFBRSxLQUFLLEVBQ1YsSUFBSSxFQUFFLEtBQUssRUFDWCxTQUFTLEVBQUUsdUJBQXVCLElBQy9CLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEVBQ2hCLENBQUE7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBc0I7UUFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sSUFBSSx1QkFBYSxFQUFFLENBQUE7U0FDMUI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQTtRQUU3QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBc0I7UUFDL0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQTtRQUNqQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFBO1FBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ3hDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsNkJBQTZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTnVsbEV4Y2VwdGlvbiBmcm9tICcuLi8uLi8uLi9jb21tb24vZXhjZXB0aW9ucy9OdWxsRXhjZXB0aW9uJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuL0Rlc2lnbkVsZW1lbnQnXG5pbXBvcnQgSURlc2lnbkVsZW1lbnRTZWxlY3RXcmFwcGVyIGZyb20gJy4vbW9kZWxzL0lEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcidcblxuY2xhc3MgRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSURlc2lnbkVsZW1lbnRTZWxlY3RXcmFwcGVyIHtcbiAgcHJpdmF0ZSB3cmFwcGVkRWxlbWVudCE6IERlc2lnbkVsZW1lbnRcblxuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyOiAnMCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgIH0pXG4gIH1cblxuICBzZXRFbGVtZW50VG9XcmFwKGVsZW1lbnQ6IERlc2lnbkVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBOdWxsRXhjZXB0aW9uKClcbiAgICB9XG4gICAgdGhpcy53cmFwcGVkRWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMudXBkYXRlU2l6ZShlbGVtZW50KVxuICB9XG5cbiAgdXBkYXRlU2l6ZShlbGVtZW50OiBEZXNpZ25FbGVtZW50KSB7XG4gICAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoXG4gICAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIHRoaXMuc3R5bGUud2lkdGggPSB3aWR0aCArIDE1ICsgJ3B4J1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgMTUgKyAncHgnXG4gIH1cblxuICBnZXRXcmFwcGVkRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy53cmFwcGVkRWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyXG4iXX0=