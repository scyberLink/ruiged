"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DesignElementTypes_1 = __importDefault(require("../../../../common/DesignElementTypes"));
const ActionableIcon_1 = __importDefault(require("../../../common/ActionableIcon"));
class DrawingToolbarItem extends ActionableIcon_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { position: 'relative' }));
        this.supportedDesignElements = DesignElementTypes_1.default.All;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.action = (designElement) => {
            throw new Error('Method not implemented.');
        };
    }
}
exports.default = DrawingToolbarItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ1Rvb2xiYXJJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbGJhckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwrRkFBc0U7QUFFdEUsb0ZBQTJEO0FBRTNELE1BQU0sa0JBQW1CLFNBQVEsd0JBQWM7SUFRN0MsWUFBWSxLQUFrQjtRQUM1QixLQUFLLGlDQUNBLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEtBQ2hCLFFBQVEsRUFBRSxVQUFVLElBQ3BCLENBQUE7UUFYSiw0QkFBdUIsR0FBRyw0QkFBa0IsQ0FBQyxHQUFHLENBQUE7UUFFaEQsNkRBQTZEO1FBQzdELFdBQU0sR0FBRyxDQUFDLGFBQTRCLEVBQUUsRUFBRTtZQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDNUMsQ0FBQyxDQUFBO0lBT0QsQ0FBQztDQUNGO0FBRUQsa0JBQWUsa0JBQWtCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgRGVzaWduRWxlbWVudFR5cGVzIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9EZXNpZ25FbGVtZW50VHlwZXMnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi9kZXNpZ24vRGVzaWduRWxlbWVudCdcbmltcG9ydCBBY3Rpb25hYmxlSWNvbiBmcm9tICcuLi8uLi8uLi9jb21tb24vQWN0aW9uYWJsZUljb24nXG5cbmNsYXNzIERyYXdpbmdUb29sYmFySXRlbSBleHRlbmRzIEFjdGlvbmFibGVJY29uIHtcbiAgc3VwcG9ydGVkRGVzaWduRWxlbWVudHMgPSBEZXNpZ25FbGVtZW50VHlwZXMuQWxsXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBhY3Rpb24gPSAoZGVzaWduRWxlbWVudDogRGVzaWduRWxlbWVudCkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKVxuICB9XG5cbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0KSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZ1Rvb2xiYXJJdGVtXG4iXX0=