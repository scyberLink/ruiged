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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUV4dGVuc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlbnNpb24vQmFzZUV4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVGQUE4RDtBQUU5RCxvRUFBMkM7QUFFM0MsTUFBZSxhQUFhO0lBSTFCLFlBQVksWUFBNEI7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHVCQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFLRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQStCO1FBQzFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLFlBQVksYUFBYSxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzFELE1BQU0sSUFBSSx1QkFBYSxDQUFDLDhEQUE4RCxDQUFDLENBQUE7U0FDeEY7UUFFRCxPQUFPLEdBQUcsU0FBUyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDbEUsQ0FBQztJQUlELEtBQUssS0FBSSxDQUFDO0lBRVYsT0FBTyxLQUFJLENBQUM7SUFFWixNQUFNLEtBQUksQ0FBQztJQUVYLE9BQU8sS0FBSSxDQUFDO0lBRVosT0FBTyxLQUFJLENBQUM7SUFFWixpQkFBaUIsS0FBSSxDQUFDO0lBRXRCLGtCQUFrQixLQUFJLENBQUM7Q0FDeEI7QUFFRCxrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTnVsbEV4Y2VwdGlvbiBmcm9tICcuLi9jb21tb24vZXhjZXB0aW9ucy9OdWxsRXhjZXB0aW9uJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL21vZGVsL0lBcHBDb250YWluZXInXG5pbXBvcnQgRXh0ZW5zaW9uUG9vbCBmcm9tICcuL0V4dGVuc2lvblBvb2wnXG5cbmFic3RyYWN0IGNsYXNzIEJhc2VFeHRlbnNpb24ge1xuICBhcHBDb250YWluZXI/OiBJQXBwQ29udGFpbmVyXG4gIHBvb2w6IEV4dGVuc2lvblBvb2xcblxuICBjb25zdHJ1Y3RvcihhcHBDb250YWluZXI/OiBJQXBwQ29udGFpbmVyKSB7XG4gICAgdGhpcy5hcHBDb250YWluZXIgPSBhcHBDb250YWluZXJcbiAgICB0aGlzLnBvb2wgPSBuZXcgRXh0ZW5zaW9uUG9vbCh0aGlzLmFwcENvbnRhaW5lcilcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhdGljIGV4dGVuc2lvbkF1dGhvcjogc3RyaW5nXG4gIHN0YXRpYyBleHRlbnNpb25OYW1lOiBzdHJpbmdcblxuICBzdGF0aWMgZ2V0SWQoZXh0ZW5zaW9uOiB0eXBlb2YgQmFzZUV4dGVuc2lvbikge1xuICAgIGlmICghKGV4dGVuc2lvbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBCYXNlRXh0ZW5zaW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDbGFzcyBkb2VzIG5vdCBleHRlbmQgQmFzZUV4dGVuc2lvbmApXG4gICAgfVxuXG4gICAgaWYgKCFleHRlbnNpb24uZXh0ZW5zaW9uQXV0aG9yIHx8ICFleHRlbnNpb24uZXh0ZW5zaW9uTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IE51bGxFeGNlcHRpb24oYFlvdSBoYXZlIG5vdCBkZWZpbmVkIGVpdGhlciBleHRlbnNpb25BdXRob3Igb3IgZXh0ZW5zaW9uTmFtZWApXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke2V4dGVuc2lvbi5leHRlbnNpb25BdXRob3J9LiR7ZXh0ZW5zaW9uLmV4dGVuc2lvbk5hbWV9YFxuICB9XG5cbiAgYWJzdHJhY3QgaW5pdCgpOiB2b2lkXG5cbiAgc3RhcnQoKSB7fVxuXG4gIGluc3RhbGwoKSB7fVxuXG4gIGVuYWJsZSgpIHt9XG5cbiAgZGlzYWJsZSgpIHt9XG5cbiAgdXBncmFkZSgpIHt9XG5cbiAgZW5hYmxlQXV0b1VwZ3JhZGUoKSB7fVxuXG4gIGRpc2FibGVBdXRvVXBncmFkZSgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFeHRlbnNpb25cbiJdfQ==