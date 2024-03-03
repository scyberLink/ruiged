import IAnyObject from '../../../../common/models/IAnyObject';
import ShadowMode from '../../application/common/ShadowMode';
import BaseComponent from '../../application/components/base/BaseComponent';
import DrawingCanvas from '../../application/components/drawingcanvas/DrawingCanvas';
import DesignElement from '../DesignElement';
import DesignElementSelectionWrapper from '../DesignElementSelectionWrapper';
declare class DesignSelectionWrapperItem extends BaseComponent {
    private designElementWrapper;
    initialBorder: string;
    constructor(style?: IAnyObject, mode?: ShadowMode);
    setWrapper(designElementWrapper: DesignElementSelectionWrapper): void;
    getWrapper(): DesignElementSelectionWrapper;
    getWrapped(): DesignElement;
    getWrappedParent(): HTMLElement;
    getDrawingCanvas(): DrawingCanvas;
    hide(): void;
    show(): void;
}
export default DesignSelectionWrapperItem;
