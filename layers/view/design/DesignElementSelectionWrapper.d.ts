import IAnyObject from '../../../common/models/IAnyObject';
import BaseComponent from '../application/components/base/BaseComponent';
import DesignElement from './DesignElement';
import IDesignElementSelectWrapper from './models/IDesignElementSelectionWrapper';
declare class DesignElementSelectionWrapper extends BaseComponent implements IDesignElementSelectWrapper {
    private wrappedElement;
    constructor(style?: IAnyObject);
    setElementToWrap(element: DesignElement): void;
    updateSize(element: DesignElement): void;
    getWrappedElement(): DesignElement;
}
export default DesignElementSelectionWrapper;
