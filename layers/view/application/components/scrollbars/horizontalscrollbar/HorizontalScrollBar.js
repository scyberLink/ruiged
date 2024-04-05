"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseComponent_1 = __importDefault(require("../../base/BaseComponent"));
class HorizontalScrollBar extends BaseComponent_1.default {
    constructor(style) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { background: 'gray' }));
    }
}
exports.default = HorizontalScrollBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9yaXpvbnRhbFNjcm9sbEJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvc2Nyb2xsYmFycy9ob3Jpem9udGFsc2Nyb2xsYmFyL0hvcml6b250YWxTY3JvbGxCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2RUFBb0Q7QUFHcEQsTUFBTSxtQkFBb0IsU0FBUSx1QkFBYTtJQUM3QyxZQUFZLEtBQWtCO1FBQzVCLEtBQUssaUNBQ0EsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsS0FDaEIsVUFBVSxFQUFFLE1BQU0sSUFDbEIsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQUVELGtCQUFlLG1CQUFtQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vYmFzZS9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IElIb3Jpem9udGFsU2Nyb2xsQmFyIGZyb20gJy4uLy4uL2Jhc2UvbW9kZWwvSUhvcml6b250YWxTY3JvbGxCYXInXG5cbmNsYXNzIEhvcml6b250YWxTY3JvbGxCYXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUhvcml6b250YWxTY3JvbGxCYXIge1xuICBjb25zdHJ1Y3RvcihzdHlsZT86IElBbnlPYmplY3QpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgYmFja2dyb3VuZDogJ2dyYXknLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbFNjcm9sbEJhclxuIl19