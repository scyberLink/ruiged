"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = require("../../../../common/md5");
const DesignElementTypes_1 = __importDefault(require("../../common/DesignElementTypes"));
const DesignElement_1 = __importDefault(require("../DesignElement"));
class LinkDesignElement extends DesignElement_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { display: 'inline' }));
        this.type = DesignElementTypes_1.default.LINK;
        this.extendedElement.textContent = 'Link' + (0, md5_1.rand)();
    }
}
exports.default = LinkDesignElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0Rlc2lnbkVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9kZXNpZ24vZGVzaWduaXRlbS9MaW5rRGVzaWduRWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUE2QztBQUU3Qyx5RkFBZ0U7QUFDaEUscUVBQTRDO0FBRTVDLE1BQU0saUJBQWtCLFNBQVEsdUJBQWE7SUFHM0MsWUFBWSxLQUFrQjtRQUM1QixLQUFLLGlDQUNBLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEtBQ2hCLE9BQU8sRUFBRSxRQUFRLElBQ2pCLENBQUE7UUFOSixTQUFJLEdBQXVCLDRCQUFrQixDQUFDLElBQUksQ0FBQTtRQVFoRCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxNQUFNLEdBQUcsSUFBQSxVQUFJLEdBQUUsQ0FBQTtJQUNwRCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJhbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbWQ1J1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IERlc2lnbkVsZW1lbnRUeXBlcyBmcm9tICcuLi8uLi9jb21tb24vRGVzaWduRWxlbWVudFR5cGVzJ1xuaW1wb3J0IERlc2lnbkVsZW1lbnQgZnJvbSAnLi4vRGVzaWduRWxlbWVudCdcblxuY2xhc3MgTGlua0Rlc2lnbkVsZW1lbnQgZXh0ZW5kcyBEZXNpZ25FbGVtZW50IHtcbiAgdHlwZTogRGVzaWduRWxlbWVudFR5cGVzID0gRGVzaWduRWxlbWVudFR5cGVzLkxJTktcblxuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgfSlcblxuICAgIHRoaXMuZXh0ZW5kZWRFbGVtZW50LnRleHRDb250ZW50ID0gJ0xpbmsnICsgcmFuZCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua0Rlc2lnbkVsZW1lbnRcbiJdfQ==