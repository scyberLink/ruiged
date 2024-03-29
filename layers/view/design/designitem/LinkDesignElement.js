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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0Rlc2lnbkVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGF5ZXJzL3ZpZXcvZGVzaWduL2Rlc2lnbml0ZW0vTGlua0Rlc2lnbkVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBNkM7QUFFN0MseUZBQWdFO0FBQ2hFLHFFQUE0QztBQUU1QyxNQUFNLGlCQUFrQixTQUFRLHVCQUFhO0lBRzNDLFlBQVksS0FBa0I7UUFDNUIsS0FBSyxpQ0FDQSxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxLQUNoQixPQUFPLEVBQUUsUUFBUSxJQUNqQixDQUFBO1FBTkosU0FBSSxHQUF1Qiw0QkFBa0IsQ0FBQyxJQUFJLENBQUE7UUFRaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxHQUFHLElBQUEsVUFBSSxHQUFFLENBQUE7SUFDcEQsQ0FBQztDQUNGO0FBRUQsa0JBQWUsaUJBQWlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21kNSdcbmltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcbmltcG9ydCBEZXNpZ25FbGVtZW50IGZyb20gJy4uL0Rlc2lnbkVsZW1lbnQnXG5cbmNsYXNzIExpbmtEZXNpZ25FbGVtZW50IGV4dGVuZHMgRGVzaWduRWxlbWVudCB7XG4gIHR5cGU6IERlc2lnbkVsZW1lbnRUeXBlcyA9IERlc2lnbkVsZW1lbnRUeXBlcy5MSU5LXG5cbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0KSB7XG4gICAgc3VwZXIoe1xuICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgIH0pXG5cbiAgICB0aGlzLmV4dGVuZGVkRWxlbWVudC50ZXh0Q29udGVudCA9ICdMaW5rJyArIHJhbmQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtEZXNpZ25FbGVtZW50XG4iXX0=