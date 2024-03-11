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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvQmFzZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELG1HQUEwRTtBQUcxRSx1REFBa0U7QUFDbEUsK0RBQXNDO0FBQ3RDLHlFQUFnRDtBQUNoRCxvR0FBMkU7QUFHM0UsTUFBTSxhQUFjLFNBQVEsV0FBVztJQU9yQyxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUVELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQTtJQUNuQyxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsS0FBSyxHQUFHLENBQUE7SUFDMUMsQ0FBQztJQUVELFlBQVksS0FBa0IsRUFBRSxJQUFpQjs7UUFDL0MsS0FBSyxFQUFFLENBQUE7UUF0QkQsV0FBTSxHQUFXLENBQUMsQ0FBQTtRQUNsQixZQUFPLEdBQVcsQ0FBQyxDQUFBO1FBNk8zQixXQUFNLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNuQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsY0FBYyxFQUFFLENBQUE7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsVUFBSyxHQUFHLENBQUMsRUFB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QWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQ3hDO1FBQUMsT0FBTyxLQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDNUI7UUFDRCxPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IE51bGxFeGNlcHRpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2V4Y2VwdGlvbnMvTnVsbEV4Y2VwdGlvbidcbmltcG9ydCB0eXBlIElBbnlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQW55T2JqZWN0J1xuaW1wb3J0IHR5cGUgSVBhaXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JUGFpcidcbmltcG9ydCB7IGNzc1N0cmluZywgc25ha2VDYXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL3V0aWxzJ1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL2NvbW1vbi9Db2xvcidcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4uLy4uL2NvbW1vbi9TaGFkb3dNb2RlJ1xuaW1wb3J0IEludmFsaWRUYWdOYW1lRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbnMvSW52YWxpZFRhZ05hbWVFeGNlcHRpb24nXG5pbXBvcnQgdHlwZSBJRGVsZWdhdGVNb2RlbCBmcm9tICcuL0lEZWxlZ2F0ZU1vZGVsJ1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBJRGVsZWdhdGVNb2RlbCB7XG4gIHByb3RlY3RlZCBzaGFkb3c6IFNoYWRvd1Jvb3RcbiAgcHJvdGVjdGVkIHNoYWRvd1dyYXBwZXI6IEhUTUxFbGVtZW50XG4gIHByb3RlY3RlZCBzaGFkb3dTdHlsZTogSFRNTFN0eWxlRWxlbWVudFxuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyID0gMVxuICBwcml2YXRlIF9yb3RhdGU6IG51bWJlciA9IDBcblxuICBwdWJsaWMgZ2V0IHJvdGF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yb3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcm90YXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yb3RhdGUgPSB2YWx1ZVxuICAgIHRoaXMuc3R5bGUucm90YXRlID0gYCR7dmFsdWV9ZGVnYFxuICB9XG5cbiAgcHVibGljIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZVxuICB9XG5cbiAgcHVibGljIHNldCBzY2FsZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2NhbGUgPSB2YWx1ZVxuICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7dmFsdWV9KWBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCwgbW9kZT86IFNoYWRvd01vZGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IG1vZGUgPz8gU2hhZG93TW9kZS5DTE9TRSB9KVxuICAgIHRoaXMuc2hhZG93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5zaGFkb3dTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICB0aGlzLmlkID0gYCR7dGhpcy50YWdOYW1lPy50b0xvd2VyQ2FzZSgpfWBcbiAgICB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICMke3RoaXMudGFnTmFtZT8udG9Mb3dlckNhc2UoKX0ge1xuICAgICAgICAke2Nzc1N0cmluZyh7XG4gICAgICAgICAgYmFja2dyb3VuZDogQ29sb3IubGlnaHRBc2gsXG4gICAgICAgICAgY29sb3I6IENvbG9yLmJsYWNrLFxuICAgICAgICAgIGJvcmRlcjogYDAuNXB4IHNvbGlkICR7Q29sb3IuYXNofWAsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAndXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAgICAgLi4uKHN0eWxlID8/IHt9KSxcbiAgICAgICAgfSl9XG4gICAgICB9XG4gICAgYFxuICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkKHRoaXMuc2hhZG93V3JhcHBlcilcbiAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCh0aGlzLnNoYWRvd1N0eWxlKVxuICB9XG5cbiAgcmVtb3ZlQ2hpbGQ8VCBleHRlbmRzIE5vZGU+KGNoaWxkOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5yZW1vdmVDaGlsZChjaGlsZClcbiAgfVxuXG4gIC8vIERlbGVnYXRlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdG8gdGhlIHNoYWRvd1dyYXBwZXJcblxuICBnZXQgYWNjZXNzS2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5hY2Nlc3NLZXlcbiAgfVxuXG4gIHNldCBhY2Nlc3NLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5hY2Nlc3NLZXkgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGF0dHJpYnV0ZXMoKTogTmFtZWROb2RlTWFwIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmF0dHJpYnV0ZXNcbiAgfVxuXG4gIGdldCBjbGFzc0xpc3QoKTogRE9NVG9rZW5MaXN0IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTGlzdFxuICB9XG5cbiAgZ2V0IGNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lXG4gIH1cblxuICBzZXQgY2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY2xhc3NOYW1lID0gdmFsdWVcbiAgfVxuXG4gIGdldCBjb250ZW50RWRpdGFibGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmNvbnRlbnRFZGl0YWJsZVxuICB9XG5cbiAgc2V0IGNvbnRlbnRFZGl0YWJsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmNvbnRlbnRFZGl0YWJsZSA9IHZhbHVlXG4gIH1cblxuICBnZXQgY2xpZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmNsaWVudFdpZHRoXG4gIH1cblxuICBzZXQgY2xpZW50V2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIDsodGhpcy5zaGFkb3dXcmFwcGVyIGFzIGFueSkuY2xpZW50V2lkdGggPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGNsaWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xpZW50SGVpZ2h0XG4gIH1cblxuICBzZXQgY2xpZW50SGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICA7KHRoaXMuc2hhZG93V3JhcHBlciBhcyBhbnkpLmNsaWVudEhlaWdodCA9IHZhbHVlXG4gIH1cblxuICBnZXQgaW5uZXJUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5pbm5lclRleHRcbiAgfVxuXG4gIHNldCBpbm5lclRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5pbm5lclRleHQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlubmVySFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaW5uZXJIVE1MXG4gIH1cblxuICBzZXQgaW5uZXJIVE1MKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaW5uZXJIVE1MID0gdmFsdWVcbiAgfVxuXG4gIGdldCBkYXRhc2V0KCk6IERPTVN0cmluZ01hcCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5kYXRhc2V0XG4gIH1cblxuICBnZXQgZGlyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5kaXJcbiAgfVxuXG4gIGFwcGVuZENoaWxkcmVuKC4uLmNoaWxkcmVuOiBIVE1MRWxlbWVudFtdKSB7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9XG4gIH1cblxuICBzZXQgZGlyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuZGlyID0gdmFsdWVcbiAgfVxuXG4gIGdldCBkcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5kcmFnZ2FibGVcbiAgfVxuXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuZHJhZ2dhYmxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oaWRkZW5cbiAgfVxuXG4gIHNldCBoaWRkZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaGlkZGVuID0gdmFsdWVcbiAgfVxuXG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaWRcbiAgfVxuXG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmlkID0gdmFsdWVcbiAgfVxuXG4gIGdldCB0ZXh0Q29udGVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIudGV4dENvbnRlbnQhXG4gIH1cblxuICBzZXQgdGV4dENvbnRlbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50ZXh0Q29udGVudCA9IHZhbHVlXG4gIH1cblxuICBnZXQgbGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIubGFuZ1xuICB9XG5cbiAgc2V0IGxhbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5sYW5nID0gdmFsdWVcbiAgfVxuXG4gIGdldCBvZmZzZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldEhlaWdodFxuICB9XG5cbiAgZ2V0IG9mZnNldExlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldExlZnRcbiAgfVxuXG4gIGdldCBvZmZzZXRQYXJlbnQoKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0UGFyZW50XG4gIH1cblxuICBnZXQgb2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5vZmZzZXRUb3BcbiAgfVxuXG4gIGdldCBvZmZzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0V2lkdGhcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXNhYmxlKClcbiAgfVxuXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0RGlzYWJsZSh2YWx1ZSlcbiAgfVxuXG4gIGdldERpc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgfVxuXG4gIGFwcGVuZENoaWxkPFQgZXh0ZW5kcyBOb2RlPihub2RlOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5hcHBlbmRDaGlsZChub2RlKVxuICB9XG5cbiAgc2V0RGlzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxuXG4gIGdldCBzdHlsZSgpOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnN0eWxlXG4gIH1cblxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRhYkluZGV4XG4gIH1cblxuICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50YWJJbmRleCA9IHZhbHVlXG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRpdGxlXG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50aXRsZSA9IHZhbHVlXG4gIH1cblxuICBzZXQgb25zZWxlY3QodmFsdWU6IGFueSkge31cblxuICBvbmNvcHkgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmN1dCA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ucGFzdGUgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbnJlc2l6ZSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ud2hlZWwgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuICAvLyAuLi4gKG90aGVyIGRlbGVnYXRlZCBtZXRob2RzKVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfVxuXG4gIGFwcGVuZCguLi5ub2RlczogQXJyYXk8Tm9kZSB8IHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYXBwZW5kKC4uLm5vZGVzKVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYmx1cigpXG4gIH1cblxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY2xpY2soKVxuICB9XG5cbiAgb25jb250ZXh0bWVudSA9IChlOiBhbnkpID0+IHtcbiAgICBlPy5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjbG9zZXN0KHNlbGVjdG9yczogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xvc2VzdChzZWxlY3RvcnMpXG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxuXG4gIGZvY3VzKG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuZm9jdXMob3B0aW9ucylcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlKG5hbWU6IHN0cmluZyk6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmdldEF0dHJpYnV0ZU5vZGUobmFtZSlcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogQXR0ciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKVxuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaGFzQXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGVzKClcbiAgfVxuXG4gIGluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIGluc2VydGVkRWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50KVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiwgdGV4dClcbiAgfVxuXG4gIGluc2VydEFkamFjZW50VGV4dChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5pbnNlcnRBZGphY2VudFRleHQocG9zaXRpb24sIHRleHQpXG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cjogQXR0cik6IEF0dHIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSTogc3RyaW5nIHwgbnVsbCwgcXVhbGlmaWVkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlKGF0dHI6IEF0dHIpOiBBdHRyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlTlMoYXR0cjogQXR0cik6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5vZGVOUyhhdHRyKVxuICB9XG5cbiAgdG9nZ2xlQXR0cmlidXRlKHF1YWxpZmllZE5hbWU6IHN0cmluZywgZm9yY2U/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci50b2dnbGVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgZm9yY2UpXG4gIH1cblxuICBwdWJsaWMgZ2V0U2hhZG93V3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlclxuICB9XG5cbiAgLyogYWRkU3R5bGVzaGVldHMoLi4ucGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5hZGRTdHlsZSguLi5wYXRocylcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIilcbiAgfSAqL1xuXG4gIGFkZFN0eWxlKHN0eWxlczogc3RyaW5nW10pOiBIVE1MU3R5bGVFbGVtZW50XG4gIGFkZFN0eWxlKHN0eWxlOiBJQW55T2JqZWN0KTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nW10gfCBJQW55T2JqZWN0IHwgc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudCB7XG4gICAgbGV0IHN0eWxlU3RyaW5nOiBzdHJpbmcgPSAnJ1xuICAgIGxldCBwcmV2aW91c1N0eWxlID0gdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA/PyAnJ1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdHlsZVN0cmluZyA9IHN0eWxlXG4gICAgICB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID0gcHJldmlvdXNTdHlsZSArIHN0eWxlU3RyaW5nXG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIHN0eWxlU3RyaW5nID0gYCR7Y3NzU3RyaW5nKHN0eWxlKX1gXG4gICAgICBjb25zdCBzdGFydE9mVGhpc0lkU3R5bGUgPSBgIyR7dGhpcy5pZH0ge2BcbiAgICAgIHByZXZpb3VzU3R5bGUgPSBwcmV2aW91c1N0eWxlLnJlcGxhY2Uoc3RhcnRPZlRoaXNJZFN0eWxlLCBgJHtzdGFydE9mVGhpc0lkU3R5bGV9JHtzdHlsZVN0cmluZ31gKVxuICAgICAgdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA9IHByZXZpb3VzU3R5bGVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0eWxlSSBvZiBzdHlsZSkge1xuICAgICAgICBzdHlsZVN0cmluZyA9IHN0eWxlU3RyaW5nPy5jb25jYXQoJ1xcblxcbicsIHN0eWxlSSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBwcmV2aW91c1N0eWxlICsgc3R5bGVTdHJpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaGFkb3dTdHlsZVxuICB9XG5cbiAgYWRkUHNldWRvQ2xhc3MoY2xheno6IHN0cmluZywgc3R5bGU6IElBbnlPYmplY3QpIHtcbiAgICBpZiAoIWNsYXp6KSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIG5hbWUgbm90IHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIHN0eWxlIG5vdCBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKCFjbGF6ei5pbmNsdWRlcygnOicpKSB7XG4gICAgICBjbGF6eiA9IGA6JHtjbGF6en1gXG4gICAgfVxuICAgIGNsYXp6ID0gYCR7dGhpcy5pZH0ke2NsYXp6fWBcbiAgICB0aGlzLmFkZFN0eWxlKGAjJHtjbGF6en17JHtjc3NTdHJpbmcoc3R5bGUpfX1gKVxuICB9XG5cbiAgaG92ZXJlZChzdHlsZTogSUFueU9iamVjdCkge1xuICAgIHRoaXMuYWRkUHNldWRvQ2xhc3MoJ2hvdmVyJywgc3R5bGUpXG4gIH1cblxuICBzZXRDdXJzb3IobmFtZTogc3RyaW5nKSB7XG4gICAgaW1wb3J0KGAuLi8uLi8uLi8uLi8uLi9hc3NldHMvcmF3cy9jdXJzb3IvJHtuYW1lfS5zdmdgKVxuICAgICAgLnRoZW4oKHsgZGVmYXVsdDogY3Vyc29yIH0pID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBgdXJsKCR7Y3Vyc29yfSksIGF1dG9gXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBjdXJzb3I6JywgZXJyb3IpXG4gICAgICB9KVxuICB9XG5cbiAgYWRkSW5saW5lU3R5bGUoeyBuYW1lLCB2YWx1ZSB9OiBJUGFpcikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZVtuYW1lIGFzIGFueV0gPSB2YWx1ZVxuICB9XG5cbiAgYWRkQ2xhc3NOYW1lcyguLi5jbGFzc05hbWVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpXG4gIH1cblxuICByZW1vdmVDbGFzc05hbWVzKC4uLmNsYXNzTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcylcbiAgfVxuXG4gIHJlcGxhY2VDbGFzc05hbWUob2xkQ2xhc3NOYW1lOiBzdHJpbmcsIG5ld0NsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3QucmVwbGFjZShvbGRDbGFzc05hbWUsIG5ld0NsYXNzTmFtZSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoXG4gICAgZWxlbWVudDogdHlwZW9mIEJhc2VDb21wb25lbnQgfCB0eXBlb2YgSFRNTEVsZW1lbnQsXG4gICk6IHR5cGVvZiBCYXNlQ29tcG9uZW50IHwgdHlwZW9mIEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbigpXG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBzbmFrZUNhc2UoZWxlbWVudC5uYW1lKVxuICAgIHRyeSB7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgZWxlbWVudClcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iXX0=