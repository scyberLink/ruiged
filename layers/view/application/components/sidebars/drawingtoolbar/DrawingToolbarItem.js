"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tool_1 = __importDefault(require("../../../common/Tool"));
class DrawingToolbarItem extends Tool_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { position: 'relative' }));
    }
}
exports.default = DrawingToolbarItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhd2luZ1Rvb2xiYXJJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbGJhckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnRUFBdUM7QUFFdkMsTUFBTSxrQkFBbUIsU0FBUSxjQUFJO0lBQ25DLFlBQVksS0FBa0I7UUFDNUIsS0FBSyxpQ0FDQSxDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxLQUNoQixRQUFRLEVBQUUsVUFBVSxJQUNwQixDQUFBO0lBQ0osQ0FBQztDQUNGO0FBRUQsa0JBQWUsa0JBQWtCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgVG9vbCBmcm9tICcuLi8uLi8uLi9jb21tb24vVG9vbCdcblxuY2xhc3MgRHJhd2luZ1Rvb2xiYXJJdGVtIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCkge1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdpbmdUb29sYmFySXRlbVxuIl19