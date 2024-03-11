"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseComponent_1 = __importDefault(require("./base/BaseComponent"));
class ParserContainer extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign({ display: 'none', position: 'initial' }, (style !== null && style !== void 0 ? style : {})));
    }
}
exports.default = ParserContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvUGFyc2VyQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseUVBQWdEO0FBR2hELE1BQU0sZUFBZ0IsU0FBUSx1QkFBYTtJQUN6QyxZQUFZLEtBQWtCO1FBQzVCLEtBQUssaUJBQ0gsT0FBTyxFQUFFLE1BQU0sRUFDZixRQUFRLEVBQUUsU0FBUyxJQUNoQixDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxFQUNoQixDQUFBO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsZUFBZSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgSVBhcnNlckNvbnRhaW5lciBmcm9tICcuL2Jhc2UvbW9kZWwvSVBhcnNlckNvbnRhaW5lcidcblxuY2xhc3MgUGFyc2VyQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElQYXJzZXJDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ2luaXRpYWwnLFxuICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnNlckNvbnRhaW5lclxuIl19