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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ1Rvb2xiYXJJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvc2lkZWJhcnMvZHJhd2luZ3Rvb2xiYXIvRHJhd2luZ1Rvb2xiYXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsK0ZBQXNFO0FBRXRFLG9GQUEyRDtBQUUzRCxNQUFNLGtCQUFtQixTQUFRLHdCQUFjO0lBUTdDLFlBQVksS0FBa0I7UUFDNUIsS0FBSyxpQ0FDQSxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxLQUNoQixRQUFRLEVBQUUsVUFBVSxJQUNwQixDQUFBO1FBWEosNEJBQXVCLEdBQUcsNEJBQWtCLENBQUMsR0FBRyxDQUFBO1FBRWhELDZEQUE2RDtRQUM3RCxXQUFNLEdBQUcsQ0FBQyxhQUE0QixFQUFFLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQTtJQU9ELENBQUM7Q0FDRjtBQUVELGtCQUFlLGtCQUFrQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IERlc2lnbkVsZW1lbnRUeXBlcyBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vRGVzaWduRWxlbWVudFR5cGVzJ1xuaW1wb3J0IERlc2lnbkVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vZGVzaWduL0Rlc2lnbkVsZW1lbnQnXG5pbXBvcnQgQWN0aW9uYWJsZUljb24gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FjdGlvbmFibGVJY29uJ1xuXG5jbGFzcyBEcmF3aW5nVG9vbGJhckl0ZW0gZXh0ZW5kcyBBY3Rpb25hYmxlSWNvbiB7XG4gIHN1cHBvcnRlZERlc2lnbkVsZW1lbnRzID0gRGVzaWduRWxlbWVudFR5cGVzLkFsbFxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgYWN0aW9uID0gKGRlc2lnbkVsZW1lbnQ6IERlc2lnbkVsZW1lbnQpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCkge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdUb29sYmFySXRlbVxuIl19