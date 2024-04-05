"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullException_1 = __importDefault(require("../common/exceptions/NullException"));
const ExtensionPool_1 = __importDefault(require("./ExtensionPool"));
class BaseExtension {
    constructor(appContainer) {
        this.appContainer = appContainer;
        this.pool = new ExtensionPool_1.default(this.appContainer);
        this.init();
    }
    static getId(extension) {
        if (!(extension.prototype instanceof BaseExtension)) {
            throw new Error(`Class does not extend BaseExtension`);
        }
        if (!extension.extensionAuthor || !extension.extensionName) {
            throw new NullException_1.default(`You have not defined either extensionAuthor or extensionName`);
        }
        return `${extension.extensionAuthor}.${extension.extensionName}`;
    }
    start() { }
    install() { }
    enable() { }
    disable() { }
    upgrade() { }
    enableAutoUpgrade() { }
    disableAutoUpgrade() { }
}
exports.default = BaseExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUV4dGVuc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3J1aWcvc3JjL2V4dGVuc2lvbi9CYXNlRXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUZBQThEO0FBRTlELG9FQUEyQztBQUUzQyxNQUFlLGFBQWE7SUFJMUIsWUFBWSxZQUE0QjtRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksdUJBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUtELE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBK0I7UUFDMUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsWUFBWSxhQUFhLENBQUMsRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7U0FDdkQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDMUQsTUFBTSxJQUFJLHVCQUFhLENBQUMsOERBQThELENBQUMsQ0FBQTtTQUN4RjtRQUVELE9BQU8sR0FBRyxTQUFTLENBQUMsZUFBZSxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUNsRSxDQUFDO0lBSUQsS0FBSyxLQUFJLENBQUM7SUFFVixPQUFPLEtBQUksQ0FBQztJQUVaLE1BQU0sS0FBSSxDQUFDO0lBRVgsT0FBTyxLQUFJLENBQUM7SUFFWixPQUFPLEtBQUksQ0FBQztJQUVaLGlCQUFpQixLQUFJLENBQUM7SUFFdEIsa0JBQWtCLEtBQUksQ0FBQztDQUN4QjtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSUFwcENvbnRhaW5lciBmcm9tICcuLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvbW9kZWwvSUFwcENvbnRhaW5lcidcbmltcG9ydCBFeHRlbnNpb25Qb29sIGZyb20gJy4vRXh0ZW5zaW9uUG9vbCdcblxuYWJzdHJhY3QgY2xhc3MgQmFzZUV4dGVuc2lvbiB7XG4gIGFwcENvbnRhaW5lcj86IElBcHBDb250YWluZXJcbiAgcG9vbDogRXh0ZW5zaW9uUG9vbFxuXG4gIGNvbnN0cnVjdG9yKGFwcENvbnRhaW5lcj86IElBcHBDb250YWluZXIpIHtcbiAgICB0aGlzLmFwcENvbnRhaW5lciA9IGFwcENvbnRhaW5lclxuICAgIHRoaXMucG9vbCA9IG5ldyBFeHRlbnNpb25Qb29sKHRoaXMuYXBwQ29udGFpbmVyKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGF0aWMgZXh0ZW5zaW9uQXV0aG9yOiBzdHJpbmdcbiAgc3RhdGljIGV4dGVuc2lvbk5hbWU6IHN0cmluZ1xuXG4gIHN0YXRpYyBnZXRJZChleHRlbnNpb246IHR5cGVvZiBCYXNlRXh0ZW5zaW9uKSB7XG4gICAgaWYgKCEoZXh0ZW5zaW9uLnByb3RvdHlwZSBpbnN0YW5jZW9mIEJhc2VFeHRlbnNpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENsYXNzIGRvZXMgbm90IGV4dGVuZCBCYXNlRXh0ZW5zaW9uYClcbiAgICB9XG5cbiAgICBpZiAoIWV4dGVuc2lvbi5leHRlbnNpb25BdXRob3IgfHwgIWV4dGVuc2lvbi5leHRlbnNpb25OYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbihgWW91IGhhdmUgbm90IGRlZmluZWQgZWl0aGVyIGV4dGVuc2lvbkF1dGhvciBvciBleHRlbnNpb25OYW1lYClcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7ZXh0ZW5zaW9uLmV4dGVuc2lvbkF1dGhvcn0uJHtleHRlbnNpb24uZXh0ZW5zaW9uTmFtZX1gXG4gIH1cblxuICBhYnN0cmFjdCBpbml0KCk6IHZvaWRcblxuICBzdGFydCgpIHt9XG5cbiAgaW5zdGFsbCgpIHt9XG5cbiAgZW5hYmxlKCkge31cblxuICBkaXNhYmxlKCkge31cblxuICB1cGdyYWRlKCkge31cblxuICBlbmFibGVBdXRvVXBncmFkZSgpIHt9XG5cbiAgZGlzYWJsZUF1dG9VcGdyYWRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUV4dGVuc2lvblxuIl19