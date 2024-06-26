import IAnyObject from '../../../../common/models/IAnyObject';
import IPair from '../../../../common/models/IPair';
import IDelegateModel from '../../application/components/base/IDelegateModel';
declare class BaseDesignComponent extends HTMLElement implements IDelegateModel {
    protected shadowStyle: HTMLStyleElement;
    private _scale;
    private _rotate;
    get rotate(): number;
    set rotate(value: number);
    get scale(): number;
    set scale(value: number);
    constructor(style?: IAnyObject);
    removeChild<T extends Node>(child: T): T;
    get accessKey(): string;
    set accessKey(value: string);
    get attributes(): NamedNodeMap;
    get classList(): DOMTokenList;
    get className(): string;
    set className(value: string);
    get contentEditable(): string;
    set contentEditable(value: string);
    get clientWidth(): number;
    set clientWidth(value: number);
    get clientHeight(): number;
    set clientHeight(value: number);
    get innerText(): string;
    set innerText(value: string);
    get innerHTML(): string;
    set innerHTML(value: string);
    get dataset(): DOMStringMap;
    get dir(): string;
    appendChildren(...children: HTMLElement[]): void;
    set dir(value: string);
    get draggable(): boolean;
    set draggable(value: boolean);
    get hidden(): boolean;
    set hidden(value: boolean);
    get id(): string;
    set id(value: string);
    get textContent(): string;
    set textContent(value: string);
    get lang(): string;
    set lang(value: string);
    get offsetHeight(): number;
    get offsetLeft(): number;
    get offsetParent(): Element | null;
    get offsetTop(): number;
    get offsetWidth(): number;
    get disabled(): boolean;
    set disabled(value: boolean);
    getDisable(): boolean;
    appendChild<T extends Node>(node: T): T;
    setDisable(value: boolean): void;
    get style(): CSSStyleDeclaration;
    get tabIndex(): number;
    set tabIndex(value: number);
    get title(): string;
    set title(value: string);
    set onselect(value: any);
    oncopy: (ev: any) => void;
    oncut: (ev: any) => void;
    onpaste: (ev: any) => void;
    onresize: (ev: any) => void;
    onwheel: (ev: any) => void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    getBoundingClientRect(): DOMRect;
    append(...nodes: (Node | string)[]): void;
    blur(): void;
    click(): void;
    oncontextmenu: (e: any) => void;
    closest(selectors: string): Element | null;
    dispatchEvent(event: Event): boolean;
    focus(options?: FocusOptions): void;
    getAttribute(name: string): string | null;
    getAttributeNS(namespaceURI: string | null, localName: string): string | null;
    getAttributeNode(name: string): Attr | null;
    getAttributeNodeNS(namespaceURI: string | null, localName: string): Attr | null;
    hasAttribute(name: string): boolean;
    hasAttributeNS(namespaceURI: string | null, localName: string): boolean;
    hasAttributes(): boolean;
    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null;
    insertAdjacentHTML(position: InsertPosition, text: string): void;
    insertAdjacentText(position: InsertPosition, text: string): void;
    removeAttribute(name: string): void;
    removeAttributeNS(namespaceURI: string | null, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    setAttribute(name: string, value: string): void;
    setAttributeNS(namespaceURI: string | null, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    getShadowWrapper(): HTMLElement;
    addStyle(styles: string[]): HTMLStyleElement;
    addStyle(style: IAnyObject): HTMLStyleElement;
    addStyle(style: string): HTMLStyleElement;
    addPseudoClass(clazz: string, style: IAnyObject): void;
    hovered(style: IAnyObject): void;
    setCursor(name: string): void;
    addInlineStyle({ name, value }: IPair): void;
    addClassNames(...classNames: string[]): void;
    removeClassNames(...classNames: string[]): void;
    replaceClassName(oldClassName: string, newClassName: string): boolean;
    static new(element: BaseDesignComponent | HTMLElement): BaseDesignComponent;
    setScale(scale: number): void;
    ondragover: (event: DragEvent) => void;
    ondrop: (event: DragEvent) => void;
    removeLastChild(): void;
}
export default BaseDesignComponent;
