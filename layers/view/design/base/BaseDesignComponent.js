"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const NullException_1 = __importDefault(require("../../../../common/exceptions/NullException"));
const utils_1 = require("../../../../common/utils");
const Color_1 = __importDefault(require("../../application/common/Color"));
const InvalidTagNameException_1 = __importDefault(require("../../application/components/exceptions/InvalidTagNameException"));
class BaseDesignComponent extends HTMLElement {
    get rotate() {
        return this._rotate;
    }
    set rotate(value) {
        this._rotate = value;
        this.style.rotate = `${value}deg`;
    }
    get scale() {
        return this._scale;
    }
    set scale(value) {
        this._scale = value;
        this.style.transform = `scale(${value})`;
    }
    constructor(style) {
        var _a, _b;
        super();
        this._scale = 1;
        this._rotate = 0;
        this.oncopy = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        };
        this.oncut = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        };
        this.onpaste = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        };
        this.onresize = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        };
        this.onwheel = (ev) => {
            ev === null || ev === void 0 ? void 0 : ev.preventDefault();
        };
        this.oncontextmenu = (e) => {
            e === null || e === void 0 ? void 0 : e.preventDefault();
        };
        this.ondragover = (event) => {
            event.preventDefault();
        };
        this.ondrop = (event) => {
            event.preventDefault();
        };
        this.shadowStyle = document.createElement('style');
        this.id = `${(_a = this.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
        this.shadowStyle.textContent = `
    #${(_b = this.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()} {
        ${(0, utils_1.cssString)(Object.assign({ background: Color_1.default.lightAsh, color: Color_1.default.black, border: `0.5px solid ${Color_1.default.ash}`, display: 'block', position: 'fixed', 'user-select': 'none' }, (style !== null && style !== void 0 ? style : {})))}
      }
    `;
        this.appendChild(this.shadowStyle);
    }
    removeChild(child) {
        return this.removeChild(child);
    }
    // Delegate properties and methods to the shadowWrapper
    get accessKey() {
        return this.accessKey;
    }
    set accessKey(value) {
        this.accessKey = value;
    }
    get attributes() {
        return this.attributes;
    }
    get classList() {
        return this.classList;
    }
    get className() {
        return this.className;
    }
    set className(value) {
        this.className = value;
    }
    get contentEditable() {
        return this.contentEditable;
    }
    set contentEditable(value) {
        this.contentEditable = value;
    }
    get clientWidth() {
        return this.clientWidth;
    }
    set clientWidth(value) {
        ;
        this.clientWidth = value;
    }
    get clientHeight() {
        return this.clientHeight;
    }
    set clientHeight(value) {
        ;
        this.clientHeight = value;
    }
    get innerText() {
        return this.innerText;
    }
    set innerText(value) {
        this.innerText = value;
    }
    get innerHTML() {
        return this.innerHTML;
    }
    set innerHTML(value) {
        this.innerHTML = value;
    }
    get dataset() {
        return this.dataset;
    }
    get dir() {
        return this.dir;
    }
    appendChildren(...children) {
        for (const child of children) {
            this.appendChild(child);
        }
    }
    set dir(value) {
        this.dir = value;
    }
    get draggable() {
        return this.draggable;
    }
    set draggable(value) {
        this.draggable = value;
    }
    get hidden() {
        return this.hidden;
    }
    set hidden(value) {
        this.hidden = value;
    }
    get id() {
        return this.id;
    }
    set id(value) {
        this.id = value;
    }
    get textContent() {
        return this.textContent;
    }
    set textContent(value) {
        this.textContent = value;
    }
    get lang() {
        return this.lang;
    }
    set lang(value) {
        this.lang = value;
    }
    get offsetHeight() {
        return this.offsetHeight;
    }
    get offsetLeft() {
        return this.offsetLeft;
    }
    get offsetParent() {
        return this.offsetParent;
    }
    get offsetTop() {
        return this.offsetTop;
    }
    get offsetWidth() {
        return this.offsetWidth;
    }
    get disabled() {
        return this.getDisable();
    }
    set disabled(value) {
        this.setDisable(value);
    }
    getDisable() {
        return this.hasAttribute('disabled');
    }
    appendChild(node) {
        return this.appendChild(node);
    }
    setDisable(value) {
        if (value) {
            this.setAttribute('disabled', '');
        }
        else {
            this.removeAttribute('disabled');
        }
    }
    get style() {
        return this.style;
    }
    get tabIndex() {
        return this.tabIndex;
    }
    set tabIndex(value) {
        this.tabIndex = value;
    }
    get title() {
        return this.title;
    }
    set title(value) {
        this.title = value;
    }
    set onselect(value) { }
    // ... (other delegated methods)
    addEventListener(type, listener, options) {
        this.addEventListener(type, listener, options);
    }
    getBoundingClientRect() {
        return this.getBoundingClientRect();
    }
    append(...nodes) {
        this.append(...nodes);
    }
    blur() {
        this.blur();
    }
    click() {
        this.click();
    }
    closest(selectors) {
        return this.closest(selectors);
    }
    dispatchEvent(event) {
        return this.dispatchEvent(event);
    }
    focus(options) {
        this.focus(options);
    }
    getAttribute(name) {
        return this.getAttribute(name);
    }
    getAttributeNS(namespaceURI, localName) {
        return this.getAttributeNS(namespaceURI, localName);
    }
    getAttributeNode(name) {
        return this.getAttributeNode(name);
    }
    getAttributeNodeNS(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName);
    }
    hasAttribute(name) {
        return this.hasAttribute(name);
    }
    hasAttributeNS(namespaceURI, localName) {
        return this.hasAttributeNS(namespaceURI, localName);
    }
    hasAttributes() {
        return this.hasAttributes();
    }
    insertAdjacentElement(position, insertedElement) {
        return this.insertAdjacentElement(position, insertedElement);
    }
    insertAdjacentHTML(position, text) {
        this.insertAdjacentHTML(position, text);
    }
    insertAdjacentText(position, text) {
        this.insertAdjacentText(position, text);
    }
    removeAttribute(name) {
        this.removeAttribute(name);
    }
    removeAttributeNS(namespaceURI, localName) {
        this.removeAttributeNS(namespaceURI, localName);
    }
    removeAttributeNode(attr) {
        return this.removeAttributeNode(attr);
    }
    removeEventListener(type, listener, options) {
        this.removeEventListener(type, listener, options);
    }
    setAttribute(name, value) {
        this.setAttribute(name, value);
    }
    setAttributeNS(namespaceURI, qualifiedName, value) {
        this.setAttributeNS(namespaceURI, qualifiedName, value);
    }
    setAttributeNode(attr) {
        return this.setAttributeNode(attr);
    }
    setAttributeNodeNS(attr) {
        return this.setAttributeNodeNS(attr);
    }
    toggleAttribute(qualifiedName, force) {
        return this.toggleAttribute(qualifiedName, force);
    }
    getShadowWrapper() {
        return this;
    }
    addStyle(style) {
        var _a;
        let styleString = '';
        let previousStyle = (_a = this.shadowStyle.textContent) !== null && _a !== void 0 ? _a : '';
        if (typeof style == 'string') {
            styleString = style;
            this.shadowStyle.textContent = previousStyle + styleString;
        }
        else if (!Array.isArray(style)) {
            styleString = `${(0, utils_1.cssString)(style)}`;
            const startOfThisIdStyle = `#${this.id} {`;
            previousStyle = previousStyle.replace(startOfThisIdStyle, `${startOfThisIdStyle}${styleString}`);
            this.shadowStyle.textContent = previousStyle;
        }
        else if (Array.isArray(style)) {
            for (const styleI of style) {
                styleString = styleString === null || styleString === void 0 ? void 0 : styleString.concat('\n\n', styleI);
            }
            this.shadowStyle.textContent = previousStyle + styleString;
        }
        return this.shadowStyle;
    }
    addPseudoClass(clazz, style) {
        if (!clazz) {
            throw new NullException_1.default('Pseudo Class name not provided');
        }
        if (!style) {
            throw new NullException_1.default('Pseudo Class style not provided');
        }
        if (!clazz.includes(':')) {
            clazz = `:${clazz}`;
        }
        clazz = `${this.id}${clazz}`;
        this.addStyle(`#${clazz}{${(0, utils_1.cssString)(style)}}`);
    }
    hovered(style) {
        this.addPseudoClass('hover', style);
    }
    setCursor(name) {
        this.style.cursor = `url('cursor/${name}.svg'), auto`;
    }
    addInlineStyle({ name, value }) {
        this.style[name] = value;
    }
    addClassNames(...classNames) {
        this.classList.add(...classNames);
    }
    removeClassNames(...classNames) {
        this.classList.remove(...classNames);
    }
    replaceClassName(oldClassName, newClassName) {
        return this.classList.replace(oldClassName, newClassName);
    }
    static register(element) {
        if (!element) {
            throw new InvalidTagNameException_1.default();
        }
        const tagName = (0, utils_1.snakeCase)(element.name);
        try {
            customElements.define(tagName, element);
        }
        catch (error) {
            console.warn(error.message);
        }
        return element;
    }
    setScale(scale) {
        this.scale = scale;
    }
    removeLastChild() {
        this.removeChild(this.lastChild);
    }
}
exports.default = BaseDesignComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZURlc2lnbkNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9sYXllcnMvdmlldy9kZXNpZ24vYmFzZS9CYXNlRGVzaWduQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELGdHQUF1RTtBQUd2RSxvREFBK0Q7QUFDL0QsMkVBQWtEO0FBRWxELDhIQUFxRztBQUVyRyxNQUFNLG1CQUFvQixTQUFRLFdBQVc7SUFLM0MsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQixDQUFDO0lBRUQsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLEtBQUssR0FBRyxDQUFBO0lBQzFDLENBQUM7SUFFRCxZQUFZLEtBQWtCOztRQUM1QixLQUFLLEVBQUUsQ0FBQTtRQXRCRCxXQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLFlBQU8sR0FBVyxDQUFDLENBQUE7UUEwTzNCLFdBQU0sR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFFO1lBQ25CLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUN0QixDQUFDLENBQUE7UUFFRCxVQUFLLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNsQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FB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bGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgSVBhaXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JUGFpcidcbmltcG9ydCB7IGNzc1N0cmluZywgc25ha2VDYXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzJ1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL2FwcGxpY2F0aW9uL2NvbW1vbi9Db2xvcidcbmltcG9ydCBJRGVsZWdhdGVNb2RlbCBmcm9tICcuLi8uLi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvSURlbGVnYXRlTW9kZWwnXG5pbXBvcnQgSW52YWxpZFRhZ05hbWVFeGNlcHRpb24gZnJvbSAnLi4vLi4vYXBwbGljYXRpb24vY29tcG9uZW50cy9leGNlcHRpb25zL0ludmFsaWRUYWdOYW1lRXhjZXB0aW9uJ1xuXG5jbGFzcyBCYXNlRGVzaWduQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBJRGVsZWdhdGVNb2RlbCB7XG4gIHByb3RlY3RlZCBzaGFkb3dTdHlsZTogSFRNTFN0eWxlRWxlbWVudFxuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyID0gMVxuICBwcml2YXRlIF9yb3RhdGU6IG51bWJlciA9IDBcblxuICBwdWJsaWMgZ2V0IHJvdGF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yb3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcm90YXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yb3RhdGUgPSB2YWx1ZVxuICAgIHRoaXMuc3R5bGUucm90YXRlID0gYCR7dmFsdWV9ZGVnYFxuICB9XG5cbiAgcHVibGljIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZVxuICB9XG5cbiAgcHVibGljIHNldCBzY2FsZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2NhbGUgPSB2YWx1ZVxuICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7dmFsdWV9KWBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnNoYWRvd1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHRoaXMuaWQgPSBgJHt0aGlzLnRhZ05hbWU/LnRvTG93ZXJDYXNlKCl9YFxuICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgIyR7dGhpcy50YWdOYW1lPy50b0xvd2VyQ2FzZSgpfSB7XG4gICAgICAgICR7Y3NzU3RyaW5nKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBDb2xvci5saWdodEFzaCxcbiAgICAgICAgICBjb2xvcjogQ29sb3IuYmxhY2ssXG4gICAgICAgICAgYm9yZGVyOiBgMC41cHggc29saWQgJHtDb2xvci5hc2h9YCxcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgICB9KX1cbiAgICAgIH1cbiAgICBgXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnNoYWRvd1N0eWxlKVxuICB9XG5cbiAgcmVtb3ZlQ2hpbGQ8VCBleHRlbmRzIE5vZGU+KGNoaWxkOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gIH1cblxuICAvLyBEZWxlZ2F0ZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRvIHRoZSBzaGFkb3dXcmFwcGVyXG5cbiAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFjY2Vzc0tleVxuICB9XG5cbiAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hY2Nlc3NLZXkgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGF0dHJpYnV0ZXMoKTogTmFtZWROb2RlTWFwIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzXG4gIH1cblxuICBnZXQgY2xhc3NMaXN0KCk6IERPTVRva2VuTGlzdCB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0XG4gIH1cblxuICBnZXQgY2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lXG4gIH1cblxuICBzZXQgY2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IHZhbHVlXG4gIH1cblxuICBnZXQgY29udGVudEVkaXRhYmxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudEVkaXRhYmxlXG4gIH1cblxuICBzZXQgY29udGVudEVkaXRhYmxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRlbnRFZGl0YWJsZSA9IHZhbHVlXG4gIH1cblxuICBnZXQgY2xpZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnRXaWR0aFxuICB9XG5cbiAgc2V0IGNsaWVudFdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICA7KHRoaXMgYXMgYW55KS5jbGllbnRXaWR0aCA9IHZhbHVlXG4gIH1cblxuICBnZXQgY2xpZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50SGVpZ2h0XG4gIH1cblxuICBzZXQgY2xpZW50SGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICA7KHRoaXMgYXMgYW55KS5jbGllbnRIZWlnaHQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlubmVyVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlubmVyVGV4dFxuICB9XG5cbiAgc2V0IGlubmVyVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbm5lclRleHQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlubmVySFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTFxuICB9XG5cbiAgc2V0IGlubmVySFRNTCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRhdGFzZXQoKTogRE9NU3RyaW5nTWFwIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc2V0XG4gIH1cblxuICBnZXQgZGlyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGlyXG4gIH1cblxuICBhcHBlbmRDaGlsZHJlbiguLi5jaGlsZHJlbjogSFRNTEVsZW1lbnRbXSkge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgc2V0IGRpcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kaXIgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVcbiAgfVxuXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRyYWdnYWJsZSA9IHZhbHVlXG4gIH1cblxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhpZGRlblxuICB9XG5cbiAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaGlkZGVuID0gdmFsdWVcbiAgfVxuXG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlkXG4gIH1cblxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IHRleHRDb250ZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGV4dENvbnRlbnQgYXMgc3RyaW5nXG4gIH1cblxuICBzZXQgdGV4dENvbnRlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGxhbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nXG4gIH1cblxuICBzZXQgbGFuZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sYW5nID0gdmFsdWVcbiAgfVxuXG4gIGdldCBvZmZzZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRIZWlnaHRcbiAgfVxuXG4gIGdldCBvZmZzZXRMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0TGVmdFxuICB9XG5cbiAgZ2V0IG9mZnNldFBhcmVudCgpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0UGFyZW50XG4gIH1cblxuICBnZXQgb2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0VG9wXG4gIH1cblxuICBnZXQgb2Zmc2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRXaWR0aFxuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpc2FibGUoKVxuICB9XG5cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlKHZhbHVlKVxuICB9XG5cbiAgZ2V0RGlzYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgfVxuXG4gIGFwcGVuZENoaWxkPFQgZXh0ZW5kcyBOb2RlPihub2RlOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxuXG4gIHNldERpc2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxuXG4gIGdldCBzdHlsZSgpOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZVxuICB9XG5cbiAgZ2V0IHRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFiSW5kZXhcbiAgfVxuXG4gIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJJbmRleCA9IHZhbHVlXG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZVxuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gdmFsdWVcbiAgfVxuXG4gIHNldCBvbnNlbGVjdCh2YWx1ZTogYW55KSB7fVxuXG4gIG9uY29weSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uY3V0ID0gKGV2OiBhbnkpID0+IHtcbiAgICBldj8ucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgb25wYXN0ZSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ucmVzaXplID0gKGV2OiBhbnkpID0+IHtcbiAgICBldj8ucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgb253aGVlbCA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIC8vIC4uLiAob3RoZXIgZGVsZWdhdGVkIG1ldGhvZHMpXG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH1cblxuICBhcHBlbmQoLi4ubm9kZXM6IChOb2RlIHwgc3RyaW5nKVtdKTogdm9pZCB7XG4gICAgdGhpcy5hcHBlbmQoLi4ubm9kZXMpXG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuYmx1cigpXG4gIH1cblxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrKClcbiAgfVxuXG4gIG9uY29udGV4dG1lbnUgPSAoZTogYW55KSA9PiB7XG4gICAgZT8ucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2xvc2VzdChzZWxlY3RvcnM6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZXN0KHNlbGVjdG9ycylcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxuXG4gIGZvY3VzKG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzKG9wdGlvbnMpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlKG5hbWU6IHN0cmluZyk6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50KVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIHRleHQpXG4gIH1cblxuICBpbnNlcnRBZGphY2VudFRleHQocG9zaXRpb246IEluc2VydFBvc2l0aW9uLCB0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmluc2VydEFkamFjZW50VGV4dChwb3NpdGlvbiwgdGV4dClcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHI6IEF0dHIpOiBBdHRyIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zLFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIHF1YWxpZmllZE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZU5vZGUoYXR0cjogQXR0cik6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlTlMoYXR0cjogQXR0cik6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGVOb2RlTlMoYXR0cilcbiAgfVxuXG4gIHRvZ2dsZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lOiBzdHJpbmcsIGZvcmNlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvZ2dsZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCBmb3JjZSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaGFkb3dXcmFwcGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyogYWRkU3R5bGVzaGVldHMoLi4ucGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5hZGRTdHlsZSguLi5wYXRocylcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIilcbiAgfSAqL1xuXG4gIGFkZFN0eWxlKHN0eWxlczogc3RyaW5nW10pOiBIVE1MU3R5bGVFbGVtZW50XG4gIGFkZFN0eWxlKHN0eWxlOiBJQW55T2JqZWN0KTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nW10gfCBJQW55T2JqZWN0IHwgc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudCB7XG4gICAgbGV0IHN0eWxlU3RyaW5nOiBzdHJpbmcgPSAnJ1xuICAgIGxldCBwcmV2aW91c1N0eWxlID0gdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA/PyAnJ1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT0gJ3N0cmluZycpIHtcbiAgICAgIHN0eWxlU3RyaW5nID0gc3R5bGVcbiAgICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBwcmV2aW91c1N0eWxlICsgc3R5bGVTdHJpbmdcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgc3R5bGVTdHJpbmcgPSBgJHtjc3NTdHJpbmcoc3R5bGUgYXMgSUFueU9iamVjdCl9YFxuICAgICAgY29uc3Qgc3RhcnRPZlRoaXNJZFN0eWxlID0gYCMke3RoaXMuaWR9IHtgXG4gICAgICBwcmV2aW91c1N0eWxlID0gcHJldmlvdXNTdHlsZS5yZXBsYWNlKHN0YXJ0T2ZUaGlzSWRTdHlsZSwgYCR7c3RhcnRPZlRoaXNJZFN0eWxlfSR7c3R5bGVTdHJpbmd9YClcbiAgICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBwcmV2aW91c1N0eWxlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgZm9yIChjb25zdCBzdHlsZUkgb2Ygc3R5bGUpIHtcbiAgICAgICAgc3R5bGVTdHJpbmcgPSBzdHlsZVN0cmluZz8uY29uY2F0KCdcXG5cXG4nLCBzdHlsZUkpXG4gICAgICB9XG4gICAgICB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID0gcHJldmlvdXNTdHlsZSArIHN0eWxlU3RyaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2hhZG93U3R5bGUgYXMgSFRNTFN0eWxlRWxlbWVudFxuICB9XG5cbiAgYWRkUHNldWRvQ2xhc3MoY2xheno6IHN0cmluZywgc3R5bGU6IElBbnlPYmplY3QpIHtcbiAgICBpZiAoIWNsYXp6KSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIG5hbWUgbm90IHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIHN0eWxlIG5vdCBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKCFjbGF6ei5pbmNsdWRlcygnOicpKSB7XG4gICAgICBjbGF6eiA9IGA6JHtjbGF6en1gXG4gICAgfVxuICAgIGNsYXp6ID0gYCR7dGhpcy5pZH0ke2NsYXp6fWBcbiAgICB0aGlzLmFkZFN0eWxlKGAjJHtjbGF6en17JHtjc3NTdHJpbmcoc3R5bGUpfX1gKVxuICB9XG5cbiAgaG92ZXJlZChzdHlsZTogSUFueU9iamVjdCkge1xuICAgIHRoaXMuYWRkUHNldWRvQ2xhc3MoJ2hvdmVyJywgc3R5bGUpXG4gIH1cblxuICBzZXRDdXJzb3IobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBgdXJsKCdjdXJzb3IvJHtuYW1lfS5zdmcnKSwgYXV0b2BcbiAgfVxuXG4gIGFkZElubGluZVN0eWxlKHsgbmFtZSwgdmFsdWUgfTogSVBhaXIpIHtcbiAgICB0aGlzLnN0eWxlW25hbWUgYXMgbmV2ZXJdID0gdmFsdWVcbiAgfVxuXG4gIGFkZENsYXNzTmFtZXMoLi4uY2xhc3NOYW1lczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcylcbiAgfVxuXG4gIHJlbW92ZUNsYXNzTmFtZXMoLi4uY2xhc3NOYW1lczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcylcbiAgfVxuXG4gIHJlcGxhY2VDbGFzc05hbWUob2xkQ2xhc3NOYW1lOiBzdHJpbmcsIG5ld0NsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0LnJlcGxhY2Uob2xkQ2xhc3NOYW1lLCBuZXdDbGFzc05hbWUpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKFxuICAgIGVsZW1lbnQ6IHR5cGVvZiBCYXNlRGVzaWduQ29tcG9uZW50IHwgdHlwZW9mIEhUTUxFbGVtZW50LFxuICApOiB0eXBlb2YgQmFzZURlc2lnbkNvbXBvbmVudCB8IHR5cGVvZiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFRhZ05hbWVFeGNlcHRpb24oKVxuICAgIH1cbiAgICBjb25zdCB0YWdOYW1lID0gc25ha2VDYXNlKGVsZW1lbnQubmFtZSlcbiAgICB0cnkge1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGVsZW1lbnQpXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlXG4gIH1cblxuICBvbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIHJlbW92ZUxhc3RDaGlsZCgpIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkIGFzIEhUTUxFbGVtZW50KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VEZXNpZ25Db21wb25lbnRcbiJdfQ==