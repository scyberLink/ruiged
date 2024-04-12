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
    get children() {
        return this.shadowWrapper.children;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3J1aWcvc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsbUdBQTBFO0FBRzFFLHVEQUFrRTtBQUNsRSwrREFBc0M7QUFDdEMseUVBQWdEO0FBQ2hELG9HQUEyRTtBQUkzRSxNQUFNLGFBQWMsU0FBUSxXQUFXO0lBU3JDLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxLQUFLLEdBQUcsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsWUFBWSxLQUFjLEVBQUUsSUFBaUI7O1FBQzNDLEtBQUssRUFBRSxDQUFBO1FBeEJELFdBQU0sR0FBVyxDQUFDLENBQUE7UUFDbEIsWUFBTyxHQUFXLENBQUMsQ0FBQTtRQUNuQixtQkFBYyxHQUFXLFNBQVMsQ0FBQTtRQUNsQyxZQUFPLEdBQVksSUFBSSxDQUFBO1FBMlAvQixXQUFNLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNuQixFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENB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LENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQUcsVUFBb0I7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLFlBQW9CLEVBQUUsWUFBb0I7UUFDekQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUNwQixPQUFrRDtRQUVsRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxJQUFJLGlDQUF1QixFQUFFLENBQUE7U0FDcEM7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFBLGlCQUFTLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUk7WUFDRixjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtTQUN4QztRQUFDLE9BQU8sS0FBVSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzVCO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7Q0FDRjtBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBOdWxsRXhjZXB0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9leGNlcHRpb25zL051bGxFeGNlcHRpb24nXG5pbXBvcnQgdHlwZSBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCB0eXBlIElQYWlyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSVBhaXInXG5pbXBvcnQgeyBjc3NTdHJpbmcsIHNuYWtlQ2FzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi91dGlscydcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9jb21tb24vQ29sb3InXG5pbXBvcnQgU2hhZG93TW9kZSBmcm9tICcuLi8uLi9jb21tb24vU2hhZG93TW9kZSdcbmltcG9ydCBJbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb25zL0ludmFsaWRUYWdOYW1lRXhjZXB0aW9uJ1xuaW1wb3J0IHR5cGUgSURlbGVnYXRlTW9kZWwgZnJvbSAnLi9JRGVsZWdhdGVNb2RlbCdcbmltcG9ydCBJU3R5bGUgZnJvbSAnLi9tb2RlbC9JU3R5bGUnXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIElEZWxlZ2F0ZU1vZGVsIHtcbiAgcHJvdGVjdGVkIHNoYWRvdzogU2hhZG93Um9vdFxuICBwcm90ZWN0ZWQgc2hhZG93V3JhcHBlcjogSFRNTEVsZW1lbnRcbiAgcHJvdGVjdGVkIHNoYWRvd1N0eWxlOiBIVE1MU3R5bGVFbGVtZW50XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxXG4gIHByaXZhdGUgX3JvdGF0ZTogbnVtYmVyID0gMFxuICBwcml2YXRlIGluaXRpYWxEaXNwbGF5OiBzdHJpbmcgPSAnaW5pdGlhbCdcbiAgcHJpdmF0ZSBzaG93aW5nOiBib29sZWFuID0gdHJ1ZVxuXG4gIHB1YmxpYyBnZXQgcm90YXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVxuICB9XG5cbiAgcHVibGljIHNldCByb3RhdGUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JvdGF0ZSA9IHZhbHVlXG4gICAgdGhpcy5zdHlsZS5yb3RhdGUgPSBgJHt2YWx1ZX1kZWdgXG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlXG4gIH1cblxuICBwdWJsaWMgc2V0IHNjYWxlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY2FsZSA9IHZhbHVlXG4gICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt2YWx1ZX0pYFxuICB9XG5cbiAgY29uc3RydWN0b3Ioc3R5bGU/OiBJU3R5bGUsIG1vZGU/OiBTaGFkb3dNb2RlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBtb2RlID8/IFNoYWRvd01vZGUuQ0xPU0UgfSlcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2hhZG93U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgdGhpcy5pZCA9IGAke3RoaXMudGFnTmFtZT8udG9Mb3dlckNhc2UoKX1gXG4gICAgdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAjJHt0aGlzLnRhZ05hbWU/LnRvTG93ZXJDYXNlKCl9IHtcbiAgICAgICAgJHtjc3NTdHJpbmcoe1xuICAgICAgICAgIGJhY2tncm91bmQ6IENvbG9yLmxpZ2h0QXNoLFxuICAgICAgICAgIGNvbG9yOiBDb2xvci5ibGFjayxcbiAgICAgICAgICBib3JkZXI6IGAwLjVweCBzb2xpZCAke0NvbG9yLmFzaH1gLFxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICAgIH0pfVxuICAgICAgfVxuICAgIGBcbiAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCh0aGlzLnNoYWRvd1dyYXBwZXIpXG4gICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQodGhpcy5zaGFkb3dTdHlsZSlcbiAgfVxuXG4gIHJlbW92ZUNoaWxkPFQgZXh0ZW5kcyBOb2RlPihjaGlsZDogVCk6IFQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gIH1cblxuICAvLyBEZWxlZ2F0ZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRvIHRoZSBzaGFkb3dXcmFwcGVyXG5cbiAgZ2V0IGFjY2Vzc0tleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuYWNjZXNzS2V5XG4gIH1cblxuICBzZXQgYWNjZXNzS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYWNjZXNzS2V5ID0gdmFsdWVcbiAgfVxuXG4gIGdldCBhdHRyaWJ1dGVzKCk6IE5hbWVkTm9kZU1hcCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5hdHRyaWJ1dGVzXG4gIH1cblxuICBnZXQgY2xhc3NMaXN0KCk6IERPTVRva2VuTGlzdCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3RcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTmFtZVxuICB9XG5cbiAgc2V0IGNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTmFtZSA9IHZhbHVlXG4gIH1cblxuICBnZXQgY29udGVudEVkaXRhYmxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jb250ZW50RWRpdGFibGVcbiAgfVxuXG4gIHNldCBjb250ZW50RWRpdGFibGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jb250ZW50RWRpdGFibGUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGNsaWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGllbnRXaWR0aFxuICB9XG5cbiAgc2V0IGNsaWVudFdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICA7KHRoaXMuc2hhZG93V3JhcHBlciBhcyBhbnkpLmNsaWVudFdpZHRoID0gdmFsdWVcbiAgfVxuXG4gIGdldCBjbGllbnRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmNsaWVudEhlaWdodFxuICB9XG5cbiAgc2V0IGNsaWVudEhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgOyh0aGlzLnNoYWRvd1dyYXBwZXIgYXMgYW55KS5jbGllbnRIZWlnaHQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlubmVyVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaW5uZXJUZXh0XG4gIH1cblxuICBzZXQgaW5uZXJUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaW5uZXJUZXh0ID0gdmFsdWVcbiAgfVxuXG4gIGdldCBpbm5lckhUTUwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmlubmVySFRNTFxuICB9XG5cbiAgc2V0IGlubmVySFRNTCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmlubmVySFRNTCA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGF0YXNldCgpOiBET01TdHJpbmdNYXAge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZGF0YXNldFxuICB9XG5cbiAgZ2V0IGRpcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZGlyXG4gIH1cblxuICBhcHBlbmRDaGlsZHJlbiguLi5jaGlsZHJlbjogSFRNTEVsZW1lbnRbXSkge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgc2V0IGRpcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmRpciA9IHZhbHVlXG4gIH1cblxuICBnZXQgZHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZHJhZ2dhYmxlXG4gIH1cblxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmRyYWdnYWJsZSA9IHZhbHVlXG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jaGlsZHJlblxuICB9XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmhpZGRlblxuICB9XG5cbiAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5oaWRkZW4gPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5pZFxuICB9XG5cbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuaWQgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IHRleHRDb250ZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci50ZXh0Q29udGVudCFcbiAgfVxuXG4gIHNldCB0ZXh0Q29udGVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnRleHRDb250ZW50ID0gdmFsdWVcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgaWYgKHRoaXMuc2hvd2luZykge1xuICAgICAgdGhpcy5pbml0aWFsRGlzcGxheSA9IHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZS5kaXNwbGF5IHx8IHRoaXMuaW5pdGlhbERpc3BsYXlcbiAgICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gdGhpcy5pbml0aWFsRGlzcGxheVxuICAgIH1cbiAgICB0aGlzLnNob3dpbmcgPSAhdGhpcy5zaG93aW5nXG4gIH1cblxuICBnZXQgbGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIubGFuZ1xuICB9XG5cbiAgc2V0IGxhbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5sYW5nID0gdmFsdWVcbiAgfVxuXG4gIGdldCBvZmZzZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldEhlaWdodFxuICB9XG5cbiAgZ2V0IG9mZnNldExlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLm9mZnNldExlZnRcbiAgfVxuXG4gIGdldCBvZmZzZXRQYXJlbnQoKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0UGFyZW50XG4gIH1cblxuICBnZXQgb2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5vZmZzZXRUb3BcbiAgfVxuXG4gIGdldCBvZmZzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIub2Zmc2V0V2lkdGhcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREaXNhYmxlKClcbiAgfVxuXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0RGlzYWJsZSh2YWx1ZSlcbiAgfVxuXG4gIGdldERpc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgfVxuXG4gIGFwcGVuZENoaWxkPFQgZXh0ZW5kcyBOb2RlPihub2RlOiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5hcHBlbmRDaGlsZChub2RlKVxuICB9XG5cbiAgc2V0RGlzYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgIH1cbiAgfVxuXG4gIGdldCBzdHlsZSgpOiBDU1NTdHlsZURlY2xhcmF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnN0eWxlXG4gIH1cblxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRhYkluZGV4XG4gIH1cblxuICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50YWJJbmRleCA9IHZhbHVlXG4gIH1cblxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnRpdGxlXG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci50aXRsZSA9IHZhbHVlXG4gIH1cblxuICBzZXQgb25zZWxlY3QodmFsdWU6IGFueSkge31cblxuICBvbmNvcHkgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmN1dCA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ucGFzdGUgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbnJlc2l6ZSA9IChldjogYW55KSA9PiB7XG4gICAgZXY/LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9ud2hlZWwgPSAoZXY6IGFueSkgPT4ge1xuICAgIGV2Py5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvbmRyb3AgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuICAvLyAuLi4gKG90aGVyIGRlbGVnYXRlZCBtZXRob2RzKVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfVxuXG4gIGFwcGVuZCguLi5ub2RlczogQXJyYXk8Tm9kZSB8IHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYXBwZW5kKC4uLm5vZGVzKVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuYmx1cigpXG4gIH1cblxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuY2xpY2soKVxuICB9XG5cbiAgb25jb250ZXh0bWVudSA9IChlOiBhbnkpID0+IHtcbiAgICBlPy5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjbG9zZXN0KHNlbGVjdG9yczogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuY2xvc2VzdChzZWxlY3RvcnMpXG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZGlzcGF0Y2hFdmVudChldmVudClcbiAgfVxuXG4gIGZvY3VzKG9wdGlvbnM/OiBGb2N1c09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnNoYWRvd1dyYXBwZXIuZm9jdXMob3B0aW9ucylcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlKG5hbWU6IHN0cmluZyk6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmdldEF0dHJpYnV0ZU5vZGUobmFtZSlcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogQXR0ciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKVxuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIuaGFzQXR0cmlidXRlKG5hbWUpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkk6IHN0cmluZyB8IG51bGwsIGxvY2FsTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5oYXNBdHRyaWJ1dGVzKClcbiAgfVxuXG4gIGluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIGluc2VydGVkRWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiwgaW5zZXJ0ZWRFbGVtZW50KVxuICB9XG5cbiAgaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiwgdGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiwgdGV4dClcbiAgfVxuXG4gIGluc2VydEFkamFjZW50VGV4dChwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24sIHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5pbnNlcnRBZGphY2VudFRleHQocG9zaXRpb24sIHRleHQpXG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJOiBzdHJpbmcgfCBudWxsLCBsb2NhbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5yZW1vdmVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSlcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cjogQXR0cik6IEF0dHIge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1dyYXBwZXIucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBFdmVudExpc3RlbmVyT3B0aW9ucyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSTogc3RyaW5nIHwgbnVsbCwgcXVhbGlmaWVkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlKGF0dHI6IEF0dHIpOiBBdHRyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gIH1cblxuICBzZXRBdHRyaWJ1dGVOb2RlTlMoYXR0cjogQXR0cik6IEF0dHIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dXcmFwcGVyLnNldEF0dHJpYnV0ZU5vZGVOUyhhdHRyKVxuICB9XG5cbiAgdG9nZ2xlQXR0cmlidXRlKHF1YWxpZmllZE5hbWU6IHN0cmluZywgZm9yY2U/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci50b2dnbGVBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSwgZm9yY2UpXG4gIH1cblxuICBwdWJsaWMgZ2V0U2hhZG93V3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlclxuICB9XG5cbiAgLyogYWRkU3R5bGVzaGVldHMoLi4ucGF0aHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5hZGRTdHlsZSguLi5wYXRocylcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIilcbiAgfSAqL1xuXG4gIGFkZFN0eWxlKHN0eWxlczogc3RyaW5nW10pOiBIVE1MU3R5bGVFbGVtZW50XG4gIGFkZFN0eWxlKHN0eWxlOiBJQW55T2JqZWN0KTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudFxuICBhZGRTdHlsZShzdHlsZTogc3RyaW5nW10gfCBJQW55T2JqZWN0IHwgc3RyaW5nKTogSFRNTFN0eWxlRWxlbWVudCB7XG4gICAgbGV0IHN0eWxlU3RyaW5nOiBzdHJpbmcgPSAnJ1xuICAgIGxldCBwcmV2aW91c1N0eWxlID0gdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA/PyAnJ1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdHlsZVN0cmluZyA9IHN0eWxlXG4gICAgICB0aGlzLnNoYWRvd1N0eWxlLnRleHRDb250ZW50ID0gcHJldmlvdXNTdHlsZSArIHN0eWxlU3RyaW5nXG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIHN0eWxlU3RyaW5nID0gYCR7Y3NzU3RyaW5nKHN0eWxlKX1gXG4gICAgICBjb25zdCBzdGFydE9mVGhpc0lkU3R5bGUgPSBgIyR7dGhpcy5pZH0ge2BcbiAgICAgIHByZXZpb3VzU3R5bGUgPSBwcmV2aW91c1N0eWxlLnJlcGxhY2Uoc3RhcnRPZlRoaXNJZFN0eWxlLCBgJHtzdGFydE9mVGhpc0lkU3R5bGV9JHtzdHlsZVN0cmluZ31gKVxuICAgICAgdGhpcy5zaGFkb3dTdHlsZS50ZXh0Q29udGVudCA9IHByZXZpb3VzU3R5bGVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0eWxlSSBvZiBzdHlsZSkge1xuICAgICAgICBzdHlsZVN0cmluZyA9IHN0eWxlU3RyaW5nPy5jb25jYXQoJ1xcblxcbicsIHN0eWxlSSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hhZG93U3R5bGUudGV4dENvbnRlbnQgPSBwcmV2aW91c1N0eWxlICsgc3R5bGVTdHJpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaGFkb3dTdHlsZVxuICB9XG5cbiAgYWRkUHNldWRvQ2xhc3MoY2xheno6IHN0cmluZywgc3R5bGU6IElBbnlPYmplY3QpIHtcbiAgICBpZiAoIWNsYXp6KSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIG5hbWUgbm90IHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICB0aHJvdyBuZXcgTnVsbEV4Y2VwdGlvbignUHNldWRvIENsYXNzIHN0eWxlIG5vdCBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKCFjbGF6ei5pbmNsdWRlcygnOicpKSB7XG4gICAgICBjbGF6eiA9IGA6JHtjbGF6en1gXG4gICAgfVxuICAgIGNsYXp6ID0gYCR7dGhpcy5pZH0ke2NsYXp6fWBcbiAgICB0aGlzLmFkZFN0eWxlKGAjJHtjbGF6en17JHtjc3NTdHJpbmcoc3R5bGUpfX1gKVxuICB9XG5cbiAgaG92ZXJlZChzdHlsZTogSUFueU9iamVjdCkge1xuICAgIHRoaXMuYWRkUHNldWRvQ2xhc3MoJ2hvdmVyJywgc3R5bGUpXG4gIH1cblxuICBzZXRDdXJzb3IobmFtZTogc3RyaW5nKSB7XG4gICAgaW1wb3J0KGAuLi8uLi8uLi8uLi8uLi9hc3NldHMvcmF3cy9jdXJzb3IvJHtuYW1lfS5zdmdgKVxuICAgICAgLnRoZW4oKHsgZGVmYXVsdDogY3Vyc29yIH0pID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBgdXJsKCR7Y3Vyc29yfSksIGF1dG9gXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBjdXJzb3I6JywgZXJyb3IpXG4gICAgICB9KVxuICB9XG5cbiAgYWRkSW5saW5lU3R5bGUoeyBuYW1lLCB2YWx1ZSB9OiBJUGFpcikge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5zdHlsZVtuYW1lIGFzIGFueV0gPSB2YWx1ZVxuICB9XG5cbiAgYWRkQ2xhc3NOYW1lcyguLi5jbGFzc05hbWVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpXG4gIH1cblxuICByZW1vdmVDbGFzc05hbWVzKC4uLmNsYXNzTmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5zaGFkb3dXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcylcbiAgfVxuXG4gIHJlcGxhY2VDbGFzc05hbWUob2xkQ2xhc3NOYW1lOiBzdHJpbmcsIG5ld0NsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93V3JhcHBlci5jbGFzc0xpc3QucmVwbGFjZShvbGRDbGFzc05hbWUsIG5ld0NsYXNzTmFtZSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoXG4gICAgZWxlbWVudDogdHlwZW9mIEJhc2VDb21wb25lbnQgfCB0eXBlb2YgSFRNTEVsZW1lbnQsXG4gICk6IHR5cGVvZiBCYXNlQ29tcG9uZW50IHwgdHlwZW9mIEhUTUxFbGVtZW50IHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbigpXG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBzbmFrZUNhc2UoZWxlbWVudC5uYW1lKVxuICAgIHRyeSB7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgZWxlbWVudClcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iXX0=