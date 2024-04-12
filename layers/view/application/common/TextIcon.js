"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionableIcon_1 = __importDefault(require("./ActionableIcon"));
class TextIcon extends ActionableIcon_1.default {
    constructor(style, mode) {
        super(Object.assign(Object.assign({}, (style !== null && style !== void 0 ? style : {})), { width: 'unset' }), mode);
        this.supportedDesignElements = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.action = (_designElement) => { };
    }
    subscribe() { }
    init(init) {
        super.init(init);
        this.innerText = this.hint;
    }
}
exports.default = TextIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ydWlnL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21tb24vVGV4dEljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxzRUFBNkM7QUFJN0MsTUFBTSxRQUFTLFNBQVEsd0JBQWM7SUFDbkMsWUFBWSxLQUFrQixFQUFFLElBQWlCO1FBQy9DLEtBQUssaUNBRUUsQ0FBQyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxFQUFFLENBQUMsS0FDaEIsS0FBSyxFQUFFLE9BQU8sS0FFaEIsSUFBSSxDQUNMLENBQUE7UUFHSCw0QkFBdUIsR0FBeUIsRUFBRSxDQUFBO1FBRWxELDZEQUE2RDtRQUM3RCxXQUFNLEdBQUcsQ0FBQyxjQUE2QixFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUE7SUFMOUMsQ0FBQztJQU9ELFNBQVMsS0FBSSxDQUFDO0lBRWQsSUFBSSxDQUFDLElBQWlCO1FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQzVCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFFBQVEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcbmltcG9ydCBEZXNpZ25FbGVtZW50IGZyb20gJy4uLy4uL2Rlc2lnbi9iYXNlL0Rlc2lnbkVsZW1lbnQnXG5pbXBvcnQgQWN0aW9uYWJsZUljb24gZnJvbSAnLi9BY3Rpb25hYmxlSWNvbidcbmltcG9ydCB7IElBY3Rpb25Jbml0IH0gZnJvbSAnLi9JQWN0aW9uJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi9TaGFkb3dNb2RlJ1xuXG5jbGFzcyBUZXh0SWNvbiBleHRlbmRzIEFjdGlvbmFibGVJY29uIHtcbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0LCBtb2RlPzogU2hhZG93TW9kZSkge1xuICAgIHN1cGVyKFxuICAgICAge1xuICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgICB3aWR0aDogJ3Vuc2V0JyxcbiAgICAgIH0sXG4gICAgICBtb2RlLFxuICAgIClcbiAgfVxuXG4gIHN1cHBvcnRlZERlc2lnbkVsZW1lbnRzOiBEZXNpZ25FbGVtZW50VHlwZXNbXSA9IFtdXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBhY3Rpb24gPSAoX2Rlc2lnbkVsZW1lbnQ6IERlc2lnbkVsZW1lbnQpID0+IHt9XG5cbiAgc3Vic2NyaWJlKCkge31cblxuICBpbml0KGluaXQ6IElBY3Rpb25Jbml0KTogdm9pZCB7XG4gICAgc3VwZXIuaW5pdChpbml0KVxuICAgIHRoaXMuaW5uZXJUZXh0ID0gdGhpcy5oaW50XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEljb25cbiJdfQ==