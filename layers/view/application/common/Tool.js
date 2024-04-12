"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const SharedConfig_1 = __importDefault(require("../../../../common/SharedConfig"));
const constants_1 = require("../../../../common/constants");
const utils_1 = require("../../common/utils");
const BaseComponent_1 = __importDefault(require("../components/base/BaseComponent"));
const Color_1 = __importDefault(require("./Color"));
class Tool extends BaseComponent_1.default {
    constructor(style, mode) {
        super(Object.assign({ position: 'relative', width: '18px', height: '18px', border: '0', padding: '1px 2px', 'border-radius': '5px' }, (style !== null && style !== void 0 ? style : {})), mode);
        this.onclick = (event) => {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            const previousActiveTool = SharedConfig_1.default.get(constants_1.ACTIVE_TOOL);
            previousActiveTool === null || previousActiveTool === void 0 ? void 0 : previousActiveTool.disable();
            previousActiveTool === null || previousActiveTool === void 0 ? void 0 : previousActiveTool.deactivate();
            this.activate();
            this.enable();
            SharedConfig_1.default.set(constants_1.ACTIVE_TOOL, this);
        };
        this.hovered({
            background: `${Color_1.default.lightBlue}`,
        });
        this.setCursor('pointer');
    }
    enable() {
        this.style.background = 'blue';
    }
    disable() {
        this.style.background = 'white';
    }
    init(init) {
        const { svgPathData, hint, description, deactivate, activate } = init;
        this.svgPathData = svgPathData;
        this.hint = hint;
        this.description = description;
        this.deactivate = deactivate;
        this.activate = activate;
        const svg = (0, utils_1.createSVGElement)({ path: this.svgPathData });
        this.appendChild(svg);
        this.title = this.hint;
    }
}
exports.default = Tool;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbW1vbi9Ub29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELG1GQUEwRDtBQUMxRCw0REFBMEQ7QUFFMUQsOENBQXFEO0FBQ3JELHFGQUE0RDtBQUM1RCxvREFBMkI7QUFXM0IsTUFBZSxJQUFLLFNBQVEsdUJBQWE7SUFDdkMsWUFBWSxLQUFrQixFQUFFLElBQWlCO1FBQy9DLEtBQUssaUJBRUQsUUFBUSxFQUFFLFVBQVUsRUFDcEIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLE1BQU0sRUFBRSxHQUFHLEVBQ1gsT0FBTyxFQUFFLFNBQVMsRUFDbEIsZUFBZSxFQUFFLEtBQUssSUFDbkIsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsR0FFbEIsSUFBSSxDQUNMLENBQUE7UUFtQ0gsWUFBTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQzlCLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxjQUFjLEVBQUUsQ0FBQTtZQUN2QixNQUFNLGtCQUFrQixHQUFTLHNCQUFZLENBQUMsR0FBRyxDQUFDLHVCQUFXLENBQVEsQ0FBQTtZQUNyRSxrQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxPQUFPLEVBQUUsQ0FBQTtZQUM3QixrQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxVQUFVLEVBQUUsQ0FBQTtZQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDYixzQkFBWSxDQUFDLEdBQUcsQ0FBQyx1QkFBVyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQTtRQXpDQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEdBQUcsZUFBSyxDQUFDLFNBQVMsRUFBRTtTQUNqQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFRRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBZTtRQUNsQixNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQTtRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFBLHdCQUFnQixFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ3hCLENBQUM7Q0FXRjtBQUVELGtCQUFlLElBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IEFDVElWRV9UT09MIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCB7IGNyZWF0ZVNWR0VsZW1lbnQgfSBmcm9tICcuLi8uLi9jb21tb24vdXRpbHMnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2UvQmFzZUNvbXBvbmVudCdcbmltcG9ydCBDb2xvciBmcm9tICcuL0NvbG9yJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi9TaGFkb3dNb2RlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb29sSW5pdCB7XG4gIHN2Z1BhdGhEYXRhOiBzdHJpbmdcbiAgaGludDogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgZGVhY3RpdmF0ZSgpOiB2b2lkXG4gIGFjdGl2YXRlKCk6IHZvaWRcbn1cblxuYWJzdHJhY3QgY2xhc3MgVG9vbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QsIG1vZGU/OiBTaGFkb3dNb2RlKSB7XG4gICAgc3VwZXIoXG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogJzE4cHgnLFxuICAgICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgYm9yZGVyOiAnMCcsXG4gICAgICAgIHBhZGRpbmc6ICcxcHggMnB4JyxcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiAnNXB4JyxcbiAgICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIH0sXG4gICAgICBtb2RlLFxuICAgIClcblxuICAgIHRoaXMuaG92ZXJlZCh7XG4gICAgICBiYWNrZ3JvdW5kOiBgJHtDb2xvci5saWdodEJsdWV9YCxcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoJ3BvaW50ZXInKVxuICB9XG5cbiAgc3ZnUGF0aERhdGEhOiBzdHJpbmdcbiAgaGludCE6IHN0cmluZ1xuICBkZXNjcmlwdGlvbiE6IHN0cmluZ1xuICBkZWFjdGl2YXRlITogKCkgPT4gYW55XG4gIGFjdGl2YXRlITogKCkgPT4gYW55XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICdibHVlJ1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnXG4gIH1cblxuICBpbml0KGluaXQ6IElUb29sSW5pdCkge1xuICAgIGNvbnN0IHsgc3ZnUGF0aERhdGEsIGhpbnQsIGRlc2NyaXB0aW9uLCBkZWFjdGl2YXRlLCBhY3RpdmF0ZSB9ID0gaW5pdFxuICAgIHRoaXMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YVxuICAgIHRoaXMuaGludCA9IGhpbnRcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmRlYWN0aXZhdGUgPSBkZWFjdGl2YXRlXG4gICAgdGhpcy5hY3RpdmF0ZSA9IGFjdGl2YXRlXG4gICAgY29uc3Qgc3ZnID0gY3JlYXRlU1ZHRWxlbWVudCh7IHBhdGg6IHRoaXMuc3ZnUGF0aERhdGEgfSlcbiAgICB0aGlzLmFwcGVuZENoaWxkKHN2ZylcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5oaW50XG4gIH1cblxuICBvbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBwcmV2aW91c0FjdGl2ZVRvb2w6IFRvb2wgPSBTaGFyZWRDb25maWcuZ2V0KEFDVElWRV9UT09MKSBhcyBhbnlcbiAgICBwcmV2aW91c0FjdGl2ZVRvb2w/LmRpc2FibGUoKVxuICAgIHByZXZpb3VzQWN0aXZlVG9vbD8uZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5hY3RpdmF0ZSgpXG4gICAgdGhpcy5lbmFibGUoKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoQUNUSVZFX1RPT0wsIHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbFxuIl19