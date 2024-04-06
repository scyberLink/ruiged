"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const NullException_1 = __importDefault(require("../../../../../common/exceptions/NullException"));
const utils_1 = require("../../../../../common/utils");
const Color_1 = __importDefault(require("../../common/Color"));
const ShadowMode_1 = __importDefault(require("../../common/ShadowMode"));
const InvalidTagNameException_1 = __importDefault(require("../exceptions/InvalidTagNameException"));
class BaseComponent extends HTMLElement {
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
    constructor(style, mode) {
        var _a, _b;
        super();
        this._scale = 1;
        this._rotate = 0;
        this.initialDisplay = 'initial';
        this.showing = true;
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
        this.ondragover = (event) => {
            event.preventDefault();
        };
        this.ondrop = (event) => {
            event.preventDefault();
        };
        this.oncontextmenu = (e) => {
            e === null || e === void 0 ? void 0 : e.preventDefault();
        };
        this.shadow = this.attachShadow({ mode: mode !== null && mode !== void 0 ? mode : ShadowMode_1.default.CLOSE });
        this.shadowWrapper = document.createElement('div');
        this.shadowStyle = document.createElement('style');
        this.id = `${(_a = this.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
        this.shadowStyle.textContent = `
    #${(_b = this.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()} {
        ${(0, utils_1.cssString)(Object.assign({ background: Color_1.default.lightAsh, color: Color_1.default.black, border: `0.5px solid ${Color_1.default.ash}`, display: 'block', position: 'fixed', 'user-select': 'none' }, (style !== null && style !== void 0 ? style : {})))}
      }
    `;
        this.shadow.appendChild(this.shadowWrapper);
        this.shadow.appendChild(this.shadowStyle);
    }
    removeChild(child) {
        return this.shadowWrapper.removeChild(child);
    }
    // Delegate properties and methods to the shadowWrapper
    get accessKey() {
        return this.shadowWrapper.accessKey;
    }
    set accessKey(value) {
        this.shadowWrapper.accessKey = value;
    }
    get attributes() {
        return this.shadowWrapper.attributes;
    }
    get classList() {
        return this.shadowWrapper.classList;
    }
    get className() {
        return this.shadowWrapper.className;
    }
    set className(value) {
        this.shadowWrapper.className = value;
    }
    get contentEditable() {
        return this.shadowWrapper.contentEditable;
    }
    set contentEditable(value) {
        this.shadowWrapper.contentEditable = value;
    }
    get clientWidth() {
        return this.shadowWrapper.clientWidth;
    }
    set clientWidth(value) {
        ;
        this.shadowWrapper.clientWidth = value;
    }
    get clientHeight() {
        return this.shadowWrapper.clientHeight;
    }
    set clientHeight(value) {
        ;
        this.shadowWrapper.clientHeight = value;
    }
    get innerText() {
        return this.shadowWrapper.innerText;
    }
    set innerText(value) {
        this.shadowWrapper.innerText = value;
    }
    get innerHTML() {
        return this.shadowWrapper.innerHTML;
    }
    set innerHTML(value) {
        this.shadowWrapper.innerHTML = value;
    }
    get dataset() {
        return this.shadowWrapper.dataset;
    }
    get dir() {
        return this.shadowWrapper.dir;
    }
    appendChildren(...children) {
        for (const child of children) {
            this.appendChild(child);
        }
    }
    set dir(value) {
        this.shadowWrapper.dir = value;
    }
    get draggable() {
        return this.shadowWrapper.draggable;
    }
    set draggable(value) {
        this.shadowWrapper.draggable = value;
    }
    get hidden() {
        return this.shadowWrapper.hidden;
    }
    set hidden(value) {
        this.shadowWrapper.hidden = value;
    }
    get id() {
        return this.shadowWrapper.id;
    }
    set id(value) {
        this.shadowWrapper.id = value;
    }
    get textContent() {
        return this.shadowWrapper.textContent;
    }
    set textContent(value) {
        this.shadowWrapper.textContent = value;
    }
    toggleDisplay() {
        if (this.showing) {
            this.initialDisplay = this.shadowWrapper.style.display || this.initialDisplay;
            this.shadowWrapper.style.display = 'none';
        }
        else {
            this.shadowWrapper.style.display = this.initialDisplay;
        }
        this.showing = !this.showing;
    }
    get lang() {
        return this.shadowWrapper.lang;
    }
    set lang(value) {
        this.shadowWrapper.lang = value;
    }
    get offsetHeight() {
        return this.shadowWrapper.offsetHeight;
    }
    get offsetLeft() {
        return this.shadowWrapper.offsetLeft;
    }
    get offsetParent() {
        return this.shadowWrapper.offsetParent;
    }
    get offsetTop() {
        return this.shadowWrapper.offsetTop;
    }
    get offsetWidth() {
        return this.shadowWrapper.offsetWidth;
    }
    get disabled() {
        return this.getDisable();
    }
    set disabled(value) {
        this.setDisable(value);
    }
    getDisable() {
        return this.shadowWrapper.hasAttribute('disabled');
    }
    appendChild(node) {
        return this.shadowWrapper.appendChild(node);
    }
    setDisable(value) {
        if (value) {
            this.shadowWrapper.setAttribute('disabled', '');
        }
        else {
            this.shadowWrapper.removeAttribute('disabled');
        }
    }
    get style() {
        return this.shadowWrapper.style;
    }
    get tabIndex() {
        return this.shadowWrapper.tabIndex;
    }
    set tabIndex(value) {
        this.shadowWrapper.tabIndex = value;
    }
    get title() {
        return this.shadowWrapper.title;
    }
    set title(value) {
        this.shadowWrapper.title = value;
    }
    set onselect(value) { }
    // ... (other delegated methods)
    addEventListener(type, listener, options) {
        this.shadowWrapper.addEventListener(type, listener, options);
    }
    getBoundingClientRect() {
        return this.shadowWrapper.getBoundingClientRect();
    }
    append(...nodes) {
        this.shadowWrapper.append(...nodes);
    }
    blur() {
        this.shadowWrapper.blur();
    }
    click() {
        this.shadowWrapper.click();
    }
    closest(selectors) {
        return this.shadowWrapper.closest(selectors);
    }
    dispatchEvent(event) {
        return this.shadowWrapper.dispatchEvent(event);
    }
    focus(options) {
        this.shadowWrapper.focus(options);
    }
    getAttribute(name) {
        return this.shadowWrapper.getAttribute(name);
    }
    getAttributeNS(namespaceURI, localName) {
        return this.shadowWrapper.getAttributeNS(namespaceURI, localName);
    }
    getAttributeNode(name) {
        return this.shadowWrapper.getAttributeNode(name);
    }
    getAttributeNodeNS(namespaceURI, localName) {
        return this.shadowWrapper.getAttributeNodeNS(namespaceURI, localName);
    }
    hasAttribute(name) {
        return this.shadowWrapper.hasAttribute(name);
    }
    hasAttributeNS(namespaceURI, localName) {
        return this.shadowWrapper.hasAttributeNS(namespaceURI, localName);
    }
    hasAttributes() {
        return this.shadowWrapper.hasAttributes();
    }
    insertAdjacentElement(position, insertedElement) {
        return this.shadowWrapper.insertAdjacentElement(position, insertedElement);
    }
    insertAdjacentHTML(position, text) {
        this.shadowWrapper.insertAdjacentHTML(position, text);
    }
    insertAdjacentText(position, text) {
        this.shadowWrapper.insertAdjacentText(position, text);
    }
    removeAttribute(name) {
        this.shadowWrapper.removeAttribute(name);
    }
    removeAttributeNS(namespaceURI, localName) {
        this.shadowWrapper.removeAttributeNS(namespaceURI, localName);
    }
    removeAttributeNode(attr) {
        return this.shadowWrapper.removeAttributeNode(attr);
    }
    removeEventListener(type, listener, options) {
        this.shadowWrapper.removeEventListener(type, listener, options);
    }
    setAttribute(name, value) {
        this.shadowWrapper.setAttribute(name, value);
    }
    setAttributeNS(namespaceURI, qualifiedName, value) {
        this.shadowWrapper.setAttributeNS(namespaceURI, qualifiedName, value);
    }
    setAttributeNode(attr) {
        return this.shadowWrapper.setAttributeNode(attr);
    }
    setAttributeNodeNS(attr) {
        return this.shadowWrapper.setAttributeNodeNS(attr);
    }
    toggleAttribute(qualifiedName, force) {
        return this.shadowWrapper.toggleAttribute(qualifiedName, force);
    }
    getShadowWrapper() {
        return this.shadowWrapper;
    }
    addStyle(style) {
        var _a;
        let styleString = '';
        let previousStyle = (_a = this.shadowStyle.textContent) !== null && _a !== void 0 ? _a : '';
        if (typeof style === 'string') {
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
        var _a;
        (_a = `../../../../../assets/raws/cursor/${name}.svg`, Promise.resolve().then(() => __importStar(require(_a)))).then(({ default: cursor }) => {
            this.style.cursor = `url(${cursor}), auto`;
        })
            .catch((error) => {
            console.error('Failed to load cursor:', error);
        });
    }
    addInlineStyle({ name, value }) {
        this.shadowWrapper.style[name] = value;
    }
    addClassNames(...classNames) {
        this.shadowWrapper.classList.add(...classNames);
    }
    removeClassNames(...classNames) {
        this.shadowWrapper.classList.remove(...classNames);
    }
    replaceClassName(oldClassName, newClassName) {
        return this.shadowWrapper.classList.replace(oldClassName, newClassName);
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
}
exports.default = BaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsbUdBQTBFO0FBRzFFLHVEQUFrRTtBQUNsRSwrREFBc0M7QUFDdEMseUVBQWdEO0FBQ2hELG9HQUEyRTtBQUczRSxNQUFNLGFBQWMsU0FBUSxXQUFXO0lBU3JDLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxLQUFLLEdBQUcsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsWUFBWSxLQUFrQixFQUFFLElBQWlCOztRQUMvQyxLQUFLLEVBQUUsQ0FBQTtRQXhCRCxXQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLFlBQU8sR0FBVyxDQUFDLENBQUE7UUFDbkIsbUJBQWMsR0FBVyxTQUFTLENBQUE7UUFDbEMsWUFBTyxHQUFZLElBQUksQ0FBQTtRQXVQL0IsV0FBTSxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQUU7WUFDbkIsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxD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QUFHLFVBQW9CO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxZQUFvQixFQUFFLFlBQW9CO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FDcEIsT0FBa0Q7UUFFbEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sSUFBSSxpQ0FBdUIsRUFBRSxDQUFBO1NBQ3BDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBUyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QyxJQUFJO1lBQ0YsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDeEM7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM1QjtRQUNELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgTnVsbEV4Y2VwdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZXhjZXB0aW9ucy9OdWxsRXhjZXB0aW9uJ1xuaW1wb3J0IHR5cGUgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgdHlwZSBJUGFpciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lQYWlyJ1xuaW1wb3J0IHsgY3NzU3RyaW5nLCBzbmFrZUNhc2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMnXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vY29tbW9uL0NvbG9yJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi4vLi4vY29tbW9uL1NoYWRvd01vZGUnXG5pbXBvcnQgSW52YWxpZFRhZ05hbWVFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9ucy9JbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbidcbmltcG9ydCB0eXBlIElEZWxlZ2F0ZU1vZGVsIGZyb20gJy4vSURlbGVnYXRlTW9kZWwnXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIElEZWxlZ2F0ZU1vZGVsIHtcbiAgcHJvdGVjdGVkIHNoYWRvdzogU2hhZG93Um9vdFxuICBwcm90ZWN0ZWQgc2hhZG93V3JhcHBlcjogSFRNTEVsZW1lbnRcbiAgcHJvdGVjdGVkIHNoYWRvd1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxXG4gIHByaXZhdGUgX3JvdGF0ZTogbnVtYmVyID0gMFxuICBwcml2YXRlIGluaXRpYWxEaXNwbGF5OiBzdHJpbmcgPSAnaW5pdGlhbCdcbiAgcHJpdmF0ZSBzaG93aW5nOiBib29sZWFuID0gdHJ1ZVxuXG4gIHB1YmxpYyBnZXQgcm90YXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVxuICB9XG5cbiAgcHVibGljIHNldCByb3RhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JvdGF0ZSA9IHZhbHVlXG4gICAgdGhpcy5zdHlsZS5yb3RhdGUgPSBgJHt2YWx1ZX1kZWdgXG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlXG4gIH1cblxuICBwdWJsaWMgc2V0IHNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2FsZSA9IHZhbHVlXG4gICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt2YWx1ZX0pYFxuICB9XG5cbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0LCBtb2RlPzogU2hhZG93TW9kZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogbW9kZSA/PyBTaGFkb3dNb2RlLkNMT1NFIH0pXG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnNoYWRvd1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHRoaXMuaWQgPSBgJHt0aGlzLnRhZ05hbWU/LnRvTG93ZXJDYXNlKCl9YFxuICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgIyR7dGhpcy50YWdOYW1lPy50b0xvd2VyQ2FzZSgpfSB7XG4gICAgICAgICR7Y3NzU3RyaW5nKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBDb2xvci5saWdodEFzaCxcbiAgICAgICAgICBjb2xvcjogQ29sb3IuYmxhY2ssXG4gICAgICAgICAgYm9yZGVyOiBgMC41cHggc29saWQgJHtDb2xvci5hc2h9YCxcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgICB9KX1cbiAgICAgIH1cbiAgICBgXG4gICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dXcmFwcGVyKVxuICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkKHRoaXMuc2hhZG93U3R5bGUpXG4gIH1cblxuICByZW1vdmVDaGlsZDxUIGV4dGVuZHMgTm9kZT4oY2hpbGQ6IFQpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuICB9XG5cbiAgLy8gRGVsZWdhdGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0byB0aGUgc2hhZG93V3JhcHBlclxuXG4gIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmFjY2Vzc0tleVxuICB9XG5cbiAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmFjY2Vzc0tleSA9IHZhbHVlXG4gIH1cblxuICBnZXQgYXR0cmlidXRlcygpOiBOYW1lZE5vZGVNYXAge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuYXR0cmlidXRlc1xuICB9XG5cbiAgZ2V0IGNsYXNzTGlzdCgpOiBET01Ub2tlbkxpc3Qge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xhc3NMaXN0XG4gIH1cblxuICBnZXQgY2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc05hbWVcbiAgfVxuXG4gIHNldCBjbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGNvbnRlbnRFZGl0YWJsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY29udGVudEVkaXRhYmxlXG4gIH1cblxuICBzZXQgY29udGVudEVkaXRhYmxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY29udGVudEVkaXRhYmxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCBjbGllbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xpZW50V2lkdGhcbiAgfVxuXG4gIHNldCBjbGllbnRXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgOyh0aGlzLnNoYWRvd1dyYXBwZXIgYXMgYW55KS5jbGllbnRXaWR0aCA9IHZhbHVlXG4gIH1cblxuICBnZXQgY2xpZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGllbnRIZWlnaHRcbiAgfVxuXG4gIHNldCBjbGllbnRIZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIDsodGhpcy5zaGFkb3dXcmFwcGVyIGFzIGFueSkuY2xpZW50SGVpZ2h0ID0gdmFsdWVcbiAgfVxuXG4gIGdldCBpbm5lclRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmlubmVyVGV4dFxuICB9XG5cbiAgc2V0IGlubmVyVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmlubmVyVGV4dCA9IHZhbHVlXG4gIH1cblxuICBnZXQgaW5uZXJIVE1MKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5pbm5lckhUTUxcbiAgfVxuXG4gIHNldCBpbm5lckhUTUwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5pbm5lckhUTUwgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRhdGFzZXQoKTogRE9NU3RyaW5nTWFwIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmRhdGFzZXRcbiAgfVxuXG4gIGdldCBkaXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmRpclxuICB9XG5cbiAgYXBwZW5kQ2hpbGRyZW4oLi4uY2hpbGRyZW46IEhUTUxFbGVtZW50W10pIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIHNldCBkaXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5kaXIgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmRyYWdnYWJsZVxuICB9XG5cbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5kcmFnZ2FibGUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmhpZGRlblxuICB9XG5cbiAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5oaWRkZW4gPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5pZFxuICB9XG5cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaWQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IHRleHRDb250ZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci50ZXh0Q29udGVudCFcbiAgfVxuXG4gIHNldCB0ZXh0Q29udGVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnRleHRDb250ZW50ID0gdmFsdWVcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuc2hvd2luZykge1xuICAgICAgdGhpcy5pbml0aWFsRGlzcGxheSA9IHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZS5kaXNwbGF5IHx8IHRoaXMuaW5pdGlhbERpc3BsYXlcbiAgICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gdGhpcy5pbml0aWFsRGlzcGxheVxuICAgIH1cbiAgICB0aGlzLnNob3dpbmcgPSAhdGhpcy5zaG93aW5nXG4gIH1cblxuICBnZXQgbGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIubGFuZ1xuICB9XG5cbiAgc2V0IGxhbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5sYW5nID0gdmFsdWVcbiAgfVxuXG4gIGdldCBvZmZzZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldEhlaWdodFxuICB9XG5cbiAgZ2V0IG9mZnNldExlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldExlZnRcbiAgfVxuXG4gIGdldCBvZmZzZXRQYXJlbnQoKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0UGFyZW50XG4gIH1cblxuICBnZXQgb2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5vZmZzZXRUb3BcbiAgfVxuXG4gIGdldCBvZmZzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0V2lkdGhcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXNhYmxlKClcbiAgfVxuXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0RGlzYWJsZSh2YWx1ZSlcbiAgfVxuXG4gIGdldERpc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgfVxuXG4gIGFwcGVuZENoaWxkPFQgZXh0ZW5kcyBOb2RlPihub2RlOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5hcHBlbmRDaGlsZChub2RlKVxuICB9XG5cbiAgc2V0RGlzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxuXG4gIGdldCBzdHlsZSgpOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnN0eWxlXG4gIH1cblxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRhYkluZGV4XG4gIH1cblxuICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50YWJJbmRleCA9IHZhbHVlXG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRpdGxlXG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50aXRsZSA9IHZhbHVlXG4gIH1cblxuICBzZXQgb25zZWxlY3QodmFsdWU6IGFueSkge31cblxuICBvbmNvcHkgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmN1dCA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ucGFzdGUgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbnJlc2l6ZSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ud2hlZWwgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuICAvLyAuLi4gKG90aGVyIGRlbGVnYXRlZCBtZXRob2RzKVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfVxuXG4gIGFwcGVuZCguLi5ub2RlczogQXJyYXk8Tm9kZSB8IHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYXBwZW5kKC4uLm5vZGVzKVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYmx1cigpXG4gIH1cblxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY2xpY2soKVxuICB9XG5cbiAgb25jb250ZXh0bWVudSA9IChlOiBhbnkpID0+IHtcbiAgICBlPy5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjbG9zZXN0KHNlbGVjdG9yczogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xvc2VzdChzZWxlY3RvcnMpXG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxuXG4gIGZvY3VzKG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuZm9jdXMob3B0aW9ucylcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlKG5hbWU6IHN0cmluZyk6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmdldEF0dHJpYnV0ZU5vZGUobmFtZSlcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogQXR0ciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKVxuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaGFzQXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGVzKClcbiAgfVxuXG4gIGluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIGluc2VydGVkRWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50KVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiwgdGV4dClcbiAgfVxuXG4gIGluc2VydEFkamFjZW50VGV4dChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5pbnNlcnRBZGphY2VudFRleHQocG9zaXRpb24sIHRleHQpXG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cjogQXR0cik6IEF0dHIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSTogc3RyaW5nIHwgbnVsbCwgcXVhbGlmaWVkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlKGF0dHI6IEF0dHIpOiBBdHRyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlTlMoYXR0cjogQXR0cik6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5vZGVOUyhhdHRyKVxuICB9XG5cbiAgdG9nZ2xlQXR0cmlidXRlKHF1YWxpZmllZE5hbWU6IHN0cmluZywgZm9yY2U/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci50b2dnbGVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgZm9yY2UpXG4gIH1cblxuICBwdWJsaWMgZ2V0U2hhZG93V3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlclxuICB9XG5cbiAgLyogYWRkU3R5bGVzaGVldHMoLi4ucGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5hZGRTdHlsZSguLi5wYXRocylcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIilcbiAgfSAqL1xuXG4gIGFkZFN0eWxlKHN0eWxlczogc3RyaW5nW10pOiBIVE1MU3R5bGVFbGVtZW50XG4gIGFkZFN0eWxlKHN0eWxlOiBJQW55T2JqZWN0KTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nW10gfCBJQW55T2JqZWN0IHwgc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudCB7XG4gICAgbGV0IHN0eWxlU3RyaW5nOiBzdHJpbmcgPSAnJ1xuICAgIGxldCBwcmV2aW91c1N0eWxlID0gdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA/PyAnJ1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdHlsZVN0cmluZyA9IHN0eWxlXG4gICAgICB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID0gcHJldmlvdXNTdHlsZSArIHN0eWxlU3RyaW5nXG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIHN0eWxlU3RyaW5nID0gYCR7Y3NzU3RyaW5nKHN0eWxlKX1gXG4gICAgICBjb25zdCBzdGFydE9mVGhpc0lkU3R5bGUgPSBgIyR7dGhpcy5pZH0ge2BcbiAgICAgIHByZXZpb3VzU3R5bGUgPSBwcmV2aW91c1N0eWxlLnJlcGxhY2Uoc3RhcnRPZlRoaXNJZFN0eWxlLCBgJHtzdGFydE9mVGhpc0lkU3R5bGV9JHtzdHlsZVN0cmluZ31gKVxuICAgICAgdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA9IHByZXZpb3VzU3R5bGVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0eWxlSSBvZiBzdHlsZSkge1xuICAgICAgICBzdHlsZVN0cmluZyA9IHN0eWxlU3RyaW5nPy5jb25jYXQoJ1xcblxcbicsIHN0eWxlSSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBwcmV2aW91c1N0eWxlICsgc3R5bGVTdHJpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaGFkb3dTdHlsZVxuICB9XG5cbiAgYWRkUHNldWRvQ2xhc3MoY2xheno6IHN0cmluZywgc3R5bGU6IElBbnlPYmplY3QpIHtcbiAgICBpZiAoIWNsYXp6KSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIG5hbWUgbm90IHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIHN0eWxlIG5vdCBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKCFjbGF6ei5pbmNsdWRlcygnOicpKSB7XG4gICAgICBjbGF6eiA9IGA6JHtjbGF6en1gXG4gICAgfVxuICAgIGNsYXp6ID0gYCR7dGhpcy5pZH0ke2NsYXp6fWBcbiAgICB0aGlzLmFkZFN0eWxlKGAjJHtjbGF6en17JHtjc3NTdHJpbmcoc3R5bGUpfX1gKVxuICB9XG5cbiAgaG92ZXJlZChzdHlsZTogSUFueU9iamVjdCkge1xuICAgIHRoaXMuYWRkUHNldWRvQ2xhc3MoJ2hvdmVyJywgc3R5bGUpXG4gIH1cblxuICBzZXRDdXJzb3IobmFtZTogc3RyaW5nKSB7XG4gICAgaW1wb3J0KGAuLi8uLi8uLi8uLi8uLi9hc3NldHMvcmF3cy9jdXJzb3IvJHtuYW1lfS5zdmdgKVxuICAgICAgLnRoZW4oKHsgZGVmYXVsdDogY3Vyc29yIH0pID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBgdXJsKCR7Y3Vyc29yfSksIGF1dG9gXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBjdXJzb3I6JywgZXJyb3IpXG4gICAgICB9KVxuICB9XG5cbiAgYWRkSW5saW5lU3R5bGUoeyBuYW1lLCB2YWx1ZSB9OiBJUGFpcikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZVtuYW1lIGFzIGFueV0gPSB2YWx1ZVxuICB9XG5cbiAgYWRkQ2xhc3NOYW1lcyguLi5jbGFzc05hbWVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpXG4gIH1cblxuICByZW1vdmVDbGFzc05hbWVzKC4uLmNsYXNzTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcylcbiAgfVxuXG4gIHJlcGxhY2VDbGFzc05hbWUob2xkQ2xhc3NOYW1lOiBzdHJpbmcsIG5ld0NsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3QucmVwbGFjZShvbGRDbGFzc05hbWUsIG5ld0NsYXNzTmFtZSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoXG4gICAgZWxlbWVudDogdHlwZW9mIEJhc2VDb21wb25lbnQgfCB0eXBlb2YgSFRNTEVsZW1lbnQsXG4gICk6IHR5cGVvZiBCYXNlQ29tcG9uZW50IHwgdHlwZW9mIEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbigpXG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBzbmFrZUNhc2UoZWxlbWVudC5uYW1lKVxuICAgIHRyeSB7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgZWxlbWVudClcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iXX0=