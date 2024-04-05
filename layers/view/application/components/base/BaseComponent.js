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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsbUdBQTBFO0FBRzFFLHVEQUFrRTtBQUNsRSwrREFBc0M7QUFDdEMseUVBQWdEO0FBQ2hELG9HQUEyRTtBQUczRSxNQUFNLGFBQWMsU0FBUSxXQUFXO0lBT3JDLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxLQUFLLEdBQUcsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsWUFBWSxLQUFrQixFQUFFLElBQWlCOztRQUMvQyxLQUFLLEVBQUUsQ0FBQTtRQXRCRCxXQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLFlBQU8sR0FBVyxDQUFDLENBQUE7UUE2TzNCLFdBQU0sR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFFO1lBQ25CLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUN0QixDQUFDLENBQUE7UUFFRCxVQUFLLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNsQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FBYyxFQUFFLENBQUE7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsWUFBTyxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQUU7WUFDcEIsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLGNBQWMsRUFBRSxDQUFBO1FBQ3RCLENBQUMsQ0FBQTtRQUVELGFBQVEsR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFFO1lBQ3JCLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxjQUFjLEVBQUUsQ0FBQTtRQUN0QixDQUFDLENBQUE7UUFFRCxZQUFPLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNwQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FBYyxFQUFFLENBQUE7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsZUFBVSxHQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN4QixDQUFDLENBQUE7UUFFRCxXQUFNLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDNUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3hCLENBQUMsQ0FBQTtRQTJCRCxrQkFBYSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDekIsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLENBQUMsQ0FBQTtRQTlRQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksb0JBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQTtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRztPQUM1QixNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFdBQVcsRUFBRTtVQUN4QixJQUFBLGlCQUFTLGtCQUNULFVBQVUsRUFBRSxlQUFLLENBQUMsUUFBUSxFQUMxQixLQUFLLEVBQUUsZUFBSyxDQUFDLEtBQUssRUFDbEIsTUFBTSxFQUFFLGVBQWUsZUFBSyxDQUFDLEdBQUcsRUFBRSxFQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsT0FBTyxFQUNqQixhQUFhLEVBQUUsTUFBTSxJQUNsQixDQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsQ0FBQyxFQUNoQjs7S0FFTCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsV0FBVyxDQUFpQixLQUFRO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELHVEQUF1RDtJQUV2RCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUN0QyxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDdEMsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFBO0lBQzNDLENBQUM7SUFFRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUM1QyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUMzQixDQUFDO1FBQUMsSUFBSSxDQUFDLGFBQXFCLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtJQUNsRCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQTtJQUN4QyxDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLGFBQXFCLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtJQUNuRCxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFDdEMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUE7SUFDckMsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFBO0lBQ25DLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFBO0lBQy9CLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBRyxRQUF1QjtRQUN2QyxLQUFLLE1BQU0sS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELElBQUksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtJQUN0QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQTtJQUNsQyxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBQy9CLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBWSxDQUFBO0lBQ3hDLENBQUM7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtJQUN4QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQTtJQUNoQyxDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUE7SUFDeEMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUE7SUFDdEMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUE7SUFDeEMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUE7SUFDckMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7SUFDdkMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxXQUFXLENBQWlCLElBQU87UUFDakMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUE7U0FDaEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQy9DO0lBQ0gsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUE7SUFDakMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUE7SUFDcEMsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNsQyxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBVSxJQUFHLENBQUM7SUE2QjNCLGdDQUFnQztJQUVoQyxnQkFBZ0IsQ0FDZCxJQUFZLEVBQ1osUUFBNEMsRUFDNUMsT0FBMkM7UUFFM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUE7SUFDbkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLEtBQTJCO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBTUQsT0FBTyxDQUFDLFNBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFZO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFzQjtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsY0FBYyxDQUFDLFlBQTJCLEVBQUUsU0FBaUI7UUFDM0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxZQUEyQixFQUFFLFNBQWlCO1FBQy9ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELGNBQWMsQ0FBQyxZQUEyQixFQUFFLFNBQWlCO1FBQzNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQzNDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxRQUF3QixFQUFFLGVBQXdCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDNUUsQ0FBQztJQUVELGtCQUFrQixDQUFDLFFBQXdCLEVBQUUsSUFBWTtRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBd0IsRUFBRSxJQUFZO1FBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsWUFBMkIsRUFBRSxTQUFpQjtRQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELG1CQUFtQixDQUNqQixJQUFZLEVBQ1osUUFBNEMsRUFDNUMsT0FBd0M7UUFFeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFFRCxjQUFjLENBQUMsWUFBMkIsRUFBRSxhQUFxQixFQUFFLEtBQWE7UUFDOUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVU7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxlQUFlLENBQUMsYUFBcUIsRUFBRSxLQUFlO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFVRCxRQUFRLENBQUMsS0FBcUM7O1FBQzVDLElBQUksV0FBVyxHQUFXLEVBQUUsQ0FBQTtRQUM1QixJQUFJLGFBQWEsR0FBRyxNQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUE7UUFDdEQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsV0FBVyxHQUFHLEtBQUssQ0FBQTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxhQUFhLEdBQUcsV0FBVyxDQUFBO1NBQzNEO2FBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsV0FBVyxHQUFHLEdBQUcsSUFBQSxpQkFBUyxFQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7WUFDbkMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQTtZQUMxQyxhQUFhLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLGtCQUFrQixHQUFHLFdBQVcsRUFBRSxDQUFDLENBQUE7WUFDaEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFBO1NBQzdDO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLEtBQUssTUFBTSxNQUFNLElBQUksS0FBSyxFQUFFO2dCQUMxQixXQUFXLEdBQUcsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7YUFDbEQ7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxhQUFhLEdBQUcsV0FBVyxDQUFBO1NBQzNEO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBYSxFQUFFLEtBQWlCO1FBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLElBQUksdUJBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1NBQzFEO1FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSx1QkFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7U0FDM0Q7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtTQUNwQjtRQUNELEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFBLGlCQUFTLEVBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFZOztRQUNwQixNQUFPLHFDQUFxQyxJQUFJLE1BQU0sMkRBQ25ELElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxNQUFNLFNBQVMsQ0FBQTtRQUM1QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBUztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFXLENBQUMsR0FBRyxLQUFLLENBQUE7SUFDL0MsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFHLFVBQW9CO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFHLFVBQW9CO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxZQUFvQixFQUFFLFlBQW9CO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FDcEIsT0FBa0Q7UUFFbEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sSUFBSSxpQ0FBdUIsRUFBRSxDQUFBO1NBQ3BDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBQSxpQkFBUyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QyxJQUFJO1lBQ0YsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDeEM7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM1QjtRQUNELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgTnVsbEV4Y2VwdGlvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vZXhjZXB0aW9ucy9OdWxsRXhjZXB0aW9uJ1xuaW1wb3J0IHR5cGUgSUFueU9iamVjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5pbXBvcnQgdHlwZSBJUGFpciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lQYWlyJ1xuaW1wb3J0IHsgY3NzU3RyaW5nLCBzbmFrZUNhc2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vdXRpbHMnXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vY29tbW9uL0NvbG9yJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi4vLi4vY29tbW9uL1NoYWRvd01vZGUnXG5pbXBvcnQgSW52YWxpZFRhZ05hbWVFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9ucy9JbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbidcbmltcG9ydCB0eXBlIElEZWxlZ2F0ZU1vZGVsIGZyb20gJy4vSURlbGVnYXRlTW9kZWwnXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIElEZWxlZ2F0ZU1vZGVsIHtcbiAgcHJvdGVjdGVkIHNoYWRvdzogU2hhZG93Um9vdFxuICBwcm90ZWN0ZWQgc2hhZG93V3JhcHBlcjogSFRNTEVsZW1lbnRcbiAgcHJvdGVjdGVkIHNoYWRvd1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxXG4gIHByaXZhdGUgX3JvdGF0ZTogbnVtYmVyID0gMFxuXG4gIHB1YmxpYyBnZXQgcm90YXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVxuICB9XG5cbiAgcHVibGljIHNldCByb3RhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JvdGF0ZSA9IHZhbHVlXG4gICAgdGhpcy5zdHlsZS5yb3RhdGUgPSBgJHt2YWx1ZX1kZWdgXG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlXG4gIH1cblxuICBwdWJsaWMgc2V0IHNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2FsZSA9IHZhbHVlXG4gICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt2YWx1ZX0pYFxuICB9XG5cbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJQW55T2JqZWN0LCBtb2RlPzogU2hhZG93TW9kZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogbW9kZSA/PyBTaGFkb3dNb2RlLkNMT1NFIH0pXG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLnNoYWRvd1N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHRoaXMuaWQgPSBgJHt0aGlzLnRhZ05hbWU/LnRvTG93ZXJDYXNlKCl9YFxuICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgIyR7dGhpcy50YWdOYW1lPy50b0xvd2VyQ2FzZSgpfSB7XG4gICAgICAgICR7Y3NzU3RyaW5nKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBDb2xvci5saWdodEFzaCxcbiAgICAgICAgICBjb2xvcjogQ29sb3IuYmxhY2ssXG4gICAgICAgICAgYm9yZGVyOiBgMC41cHggc29saWQgJHtDb2xvci5hc2h9YCxcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICAgICAuLi4oc3R5bGUgPz8ge30pLFxuICAgICAgICB9KX1cbiAgICAgIH1cbiAgICBgXG4gICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dXcmFwcGVyKVxuICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkKHRoaXMuc2hhZG93U3R5bGUpXG4gIH1cblxuICByZW1vdmVDaGlsZDxUIGV4dGVuZHMgTm9kZT4oY2hpbGQ6IFQpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuICB9XG5cbiAgLy8gRGVsZWdhdGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0byB0aGUgc2hhZG93V3JhcHBlclxuXG4gIGdldCBhY2Nlc3NLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmFjY2Vzc0tleVxuICB9XG5cbiAgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmFjY2Vzc0tleSA9IHZhbHVlXG4gIH1cblxuICBnZXQgYXR0cmlidXRlcygpOiBOYW1lZE5vZGVNYXAge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuYXR0cmlidXRlc1xuICB9XG5cbiAgZ2V0IGNsYXNzTGlzdCgpOiBET01Ub2tlbkxpc3Qge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xhc3NMaXN0XG4gIH1cblxuICBnZXQgY2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc05hbWVcbiAgfVxuXG4gIHNldCBjbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc05hbWUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGNvbnRlbnRFZGl0YWJsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY29udGVudEVkaXRhYmxlXG4gIH1cblxuICBzZXQgY29udGVudEVkaXRhYmxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY29udGVudEVkaXRhYmxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCBjbGllbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xpZW50V2lkdGhcbiAgfVxuXG4gIHNldCBjbGllbnRXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgOyh0aGlzLnNoYWRvd1dyYXBwZXIgYXMgYW55KS5jbGllbnRXaWR0aCA9IHZhbHVlXG4gIH1cblxuICBnZXQgY2xpZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGllbnRIZWlnaHRcbiAgfVxuXG4gIHNldCBjbGllbnRIZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIDsodGhpcy5zaGFkb3dXcmFwcGVyIGFzIGFueSkuY2xpZW50SGVpZ2h0ID0gdmFsdWVcbiAgfVxuXG4gIGdldCBpbm5lclRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmlubmVyVGV4dFxuICB9XG5cbiAgc2V0IGlubmVyVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmlubmVyVGV4dCA9IHZhbHVlXG4gIH1cblxuICBnZXQgaW5uZXJIVE1MKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5pbm5lckhUTUxcbiAgfVxuXG4gIHNldCBpbm5lckhUTUwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5pbm5lckhUTUwgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRhdGFzZXQoKTogRE9NU3RyaW5nTWFwIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmRhdGFzZXRcbiAgfVxuXG4gIGdldCBkaXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmRpclxuICB9XG5cbiAgYXBwZW5kQ2hpbGRyZW4oLi4uY2hpbGRyZW46IEhUTUxFbGVtZW50W10pIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIHNldCBkaXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5kaXIgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmRyYWdnYWJsZVxuICB9XG5cbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5kcmFnZ2FibGUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmhpZGRlblxuICB9XG5cbiAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5oaWRkZW4gPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5pZFxuICB9XG5cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaWQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IHRleHRDb250ZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci50ZXh0Q29udGVudCFcbiAgfVxuXG4gIHNldCB0ZXh0Q29udGVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnRleHRDb250ZW50ID0gdmFsdWVcbiAgfVxuXG4gIGdldCBsYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5sYW5nXG4gIH1cblxuICBzZXQgbGFuZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmxhbmcgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IG9mZnNldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0SGVpZ2h0XG4gIH1cblxuICBnZXQgb2Zmc2V0TGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0TGVmdFxuICB9XG5cbiAgZ2V0IG9mZnNldFBhcmVudCgpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5vZmZzZXRQYXJlbnRcbiAgfVxuXG4gIGdldCBvZmZzZXRUb3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldFRvcFxuICB9XG5cbiAgZ2V0IG9mZnNldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5vZmZzZXRXaWR0aFxuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldERpc2FibGUoKVxuICB9XG5cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlKHZhbHVlKVxuICB9XG5cbiAgZ2V0RGlzYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICB9XG5cbiAgYXBwZW5kQ2hpbGQ8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFQpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cblxuICBzZXREaXNhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNoYWRvd1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0eWxlKCk6IENTU1N0eWxlRGVjbGFyYXRpb24ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuc3R5bGVcbiAgfVxuXG4gIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIudGFiSW5kZXhcbiAgfVxuXG4gIHNldCB0YWJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnRhYkluZGV4ID0gdmFsdWVcbiAgfVxuXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIudGl0bGVcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnRpdGxlID0gdmFsdWVcbiAgfVxuXG4gIHNldCBvbnNlbGVjdCh2YWx1ZTogYW55KSB7fVxuXG4gIG9uY29weSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uY3V0ID0gKGV2OiBhbnkpID0+IHtcbiAgICBldj8ucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgb25wYXN0ZSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ucmVzaXplID0gKGV2OiBhbnkpID0+IHtcbiAgICBldj8ucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgb253aGVlbCA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uZHJvcCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG4gIC8vIC4uLiAob3RoZXIgZGVsZWdhdGVkIG1ldGhvZHMpXG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gIH1cblxuICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9XG5cbiAgYXBwZW5kKC4uLm5vZGVzOiBBcnJheTxOb2RlIHwgc3RyaW5nPik6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5hcHBlbmQoLi4ubm9kZXMpXG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5ibHVyKClcbiAgfVxuXG4gIGNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jbGljaygpXG4gIH1cblxuICBvbmNvbnRleHRtZW51ID0gKGU6IGFueSkgPT4ge1xuICAgIGU/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNsb3Nlc3Qoc2VsZWN0b3JzOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbG9zZXN0KHNlbGVjdG9ycylcbiAgfVxuXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICB9XG5cbiAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5mb2N1cyhvcHRpb25zKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5nZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5vZGUobmFtZTogc3RyaW5nKTogQXR0ciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTm9kZShuYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSTogc3RyaW5nIHwgbnVsbCwgbG9jYWxOYW1lOiBzdHJpbmcpOiBBdHRyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGUobmFtZSlcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSTogc3RyaW5nIHwgbnVsbCwgbG9jYWxOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmhhc0F0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKVxuICB9XG5cbiAgaGFzQXR0cmlidXRlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmhhc0F0dHJpYnV0ZXMoKVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50OiBFbGVtZW50KTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uLCBpbnNlcnRlZEVsZW1lbnQpXG4gIH1cblxuICBpbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb246IEluc2VydFBvc2l0aW9uLCB0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uLCB0ZXh0KVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRUZXh0KHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50VGV4dChwb3NpdGlvbiwgdGV4dClcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyOiBBdHRyKTogQXR0ciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEV2ZW50TGlzdGVuZXJPcHRpb25zLFxuICApOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBxdWFsaWZpZWROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZU5vZGUoYXR0cjogQXR0cik6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZU5vZGVOUyhhdHRyOiBBdHRyKTogQXR0ciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuc2V0QXR0cmlidXRlTm9kZU5TKGF0dHIpXG4gIH1cblxuICB0b2dnbGVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZTogc3RyaW5nLCBmb3JjZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZShxdWFsaWZpZWROYW1lLCBmb3JjZSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaGFkb3dXcmFwcGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyXG4gIH1cblxuICAvKiBhZGRTdHlsZXNoZWV0cyguLi5wYXRoczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmFkZFN0eWxlKC4uLnBhdGhzKVxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKVxuICB9ICovXG5cbiAgYWRkU3R5bGUoc3R5bGVzOiBzdHJpbmdbXSk6IEhUTUxTdHlsZUVsZW1lbnRcbiAgYWRkU3R5bGUoc3R5bGU6IElBbnlPYmplY3QpOiBIVE1MU3R5bGVFbGVtZW50XG4gIGFkZFN0eWxlKHN0eWxlOiBzdHJpbmcpOiBIVE1MU3R5bGVFbGVtZW50XG4gIGFkZFN0eWxlKHN0eWxlOiBzdHJpbmdbXSB8IElBbnlPYmplY3QgfCBzdHJpbmcpOiBIVE1MU3R5bGVFbGVtZW50IHtcbiAgICBsZXQgc3R5bGVTdHJpbmc6IHN0cmluZyA9ICcnXG4gICAgbGV0IHByZXZpb3VzU3R5bGUgPSB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID8/ICcnXG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN0eWxlU3RyaW5nID0gc3R5bGVcbiAgICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBwcmV2aW91c1N0eWxlICsgc3R5bGVTdHJpbmdcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgc3R5bGVTdHJpbmcgPSBgJHtjc3NTdHJpbmcoc3R5bGUpfWBcbiAgICAgIGNvbnN0IHN0YXJ0T2ZUaGlzSWRTdHlsZSA9IGAjJHt0aGlzLmlkfSB7YFxuICAgICAgcHJldmlvdXNTdHlsZSA9IHByZXZpb3VzU3R5bGUucmVwbGFjZShzdGFydE9mVGhpc0lkU3R5bGUsIGAke3N0YXJ0T2ZUaGlzSWRTdHlsZX0ke3N0eWxlU3RyaW5nfWApXG4gICAgICB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID0gcHJldmlvdXNTdHlsZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIGZvciAoY29uc3Qgc3R5bGVJIG9mIHN0eWxlKSB7XG4gICAgICAgIHN0eWxlU3RyaW5nID0gc3R5bGVTdHJpbmc/LmNvbmNhdCgnXFxuXFxuJywgc3R5bGVJKVxuICAgICAgfVxuICAgICAgdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA9IHByZXZpb3VzU3R5bGUgKyBzdHlsZVN0cmluZ1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNoYWRvd1N0eWxlXG4gIH1cblxuICBhZGRQc2V1ZG9DbGFzcyhjbGF6ejogc3RyaW5nLCBzdHlsZTogSUFueU9iamVjdCkge1xuICAgIGlmICghY2xhenopIHtcbiAgICAgIHRocm93IG5ldyBOdWxsRXhjZXB0aW9uKCdQc2V1ZG8gQ2xhc3MgbmFtZSBub3QgcHJvdmlkZWQnKVxuICAgIH1cblxuICAgIGlmICghc3R5bGUpIHtcbiAgICAgIHRocm93IG5ldyBOdWxsRXhjZXB0aW9uKCdQc2V1ZG8gQ2xhc3Mgc3R5bGUgbm90IHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoIWNsYXp6LmluY2x1ZGVzKCc6JykpIHtcbiAgICAgIGNsYXp6ID0gYDoke2NsYXp6fWBcbiAgICB9XG4gICAgY2xhenogPSBgJHt0aGlzLmlkfSR7Y2xhenp9YFxuICAgIHRoaXMuYWRkU3R5bGUoYCMke2NsYXp6fXske2Nzc1N0cmluZyhzdHlsZSl9fWApXG4gIH1cblxuICBob3ZlcmVkKHN0eWxlOiBJQW55T2JqZWN0KSB7XG4gICAgdGhpcy5hZGRQc2V1ZG9DbGFzcygnaG92ZXInLCBzdHlsZSlcbiAgfVxuXG4gIHNldEN1cnNvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpbXBvcnQoYC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9yYXdzL2N1cnNvci8ke25hbWV9LnN2Z2ApXG4gICAgICAudGhlbigoeyBkZWZhdWx0OiBjdXJzb3IgfSkgPT4ge1xuICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IGB1cmwoJHtjdXJzb3J9KSwgYXV0b2BcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGN1cnNvcjonLCBlcnJvcilcbiAgICAgIH0pXG4gIH1cblxuICBhZGRJbmxpbmVTdHlsZSh7IG5hbWUsIHZhbHVlIH06IElQYWlyKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnN0eWxlW25hbWUgYXMgYW55XSA9IHZhbHVlXG4gIH1cblxuICBhZGRDbGFzc05hbWVzKC4uLmNsYXNzTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcylcbiAgfVxuXG4gIHJlbW92ZUNsYXNzTmFtZXMoLi4uY2xhc3NOYW1lczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKVxuICB9XG5cbiAgcmVwbGFjZUNsYXNzTmFtZShvbGRDbGFzc05hbWU6IHN0cmluZywgbmV3Q2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTGlzdC5yZXBsYWNlKG9sZENsYXNzTmFtZSwgbmV3Q2xhc3NOYW1lKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZWdpc3RlcihcbiAgICBlbGVtZW50OiB0eXBlb2YgQmFzZUNvbXBvbmVudCB8IHR5cGVvZiBIVE1MRWxlbWVudCxcbiAgKTogdHlwZW9mIEJhc2VDb21wb25lbnQgfCB0eXBlb2YgSFRNTEVsZW1lbnQge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRUYWdOYW1lRXhjZXB0aW9uKClcbiAgICB9XG4gICAgY29uc3QgdGFnTmFtZSA9IHNuYWtlQ2FzZShlbGVtZW50Lm5hbWUpXG4gICAgdHJ5IHtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBlbGVtZW50KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgc2V0U2NhbGUoc2NhbGU6IG51bWJlcikge1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiJdfQ==