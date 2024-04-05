"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseComponent_1 = __importDefault(require("../../base/BaseComponent"));
class VerticalScrollBar extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign({ background: 'red' }, (style !== null && style !== void 0 ? style : {})));
    }
}
exports.default = VerticalScrollBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVydGljYWxTY3JvbGxCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3Njcm9sbGJhcnMvdmVydGljYWxzY3JvbGxiYXIvVmVydGljYWxTY3JvbGxCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2RUFBb0Q7QUFHcEQsTUFBTSxpQkFBa0IsU0FBUSx1QkFBYTtJQUMzQyxZQUFZLEtBQWtCO1FBQzVCLEtBQUssaUJBQ0gsVUFBVSxFQUFFLEtBQUssSUFDZCxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxFQUNoQixDQUFBO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsaUJBQWlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgSVZlcnRpY2FsU2Nyb2xsQmFyIGZyb20gJy4uLy4uL2Jhc2UvbW9kZWwvSVZlcnRpY2FsU2Nyb2xsQmFyJ1xuXG5jbGFzcyBWZXJ0aWNhbFNjcm9sbEJhciBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJVmVydGljYWxTY3JvbGxCYXIge1xuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICBiYWNrZ3JvdW5kOiAncmVkJyxcbiAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbFNjcm9sbEJhclxuIl19