import { DESIGN_ELEMENT_EVENT_DATA } from '../../../common/constants';
import IAnyObject from '../../../common/models/IAnyObject';
import IDesignElement from './models/IDesignElement';
import DesignElementTypes from '../common/DesignElementTypes';
import IPosition from '../../../common/models/IPosition';
import BaseDesignComponent from './base/BaseDesignComponent';
export interface DESIGN_ELEMENT_EVENT_DATA_TYPE {
    [DESIGN_ELEMENT_EVENT_DATA]: IDesignElement;
}
declare abstract class DesignElement extends BaseDesignComponent implements IDesignElement {
    abstract type: DesignElementTypes;
    protected extendedElement: HTMLElement;
    lock: boolean;
    position: IPosition;
    zIndex: number;
    constructor(style?: IAnyObject);
    initExtendedElement(): void;
    oncontextmenu: () => boolean;
    hidePopover(): void;
    showPopover(): void;
    oncopy: (ev: ClipboardEvent) => void;
    oncut: (ev: ClipboardEvent) => void;
    onpaste: (ev: ClipboardEvent) => void;
    autofocus: boolean;
    set index(index: number);
    get index(): number;
}
export default DesignElement;
