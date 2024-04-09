import IAnyObject from '../../../../../common/models/IAnyObject';
import IPosition from '../../../../../common/models/IPosition';
import BaseComponent from '../base/BaseComponent';
import IDrawingCanvas from '../base/model/IDrawingCanvas';
export declare enum DesignMode {
    PREVIEWING = 0,
    DESIGNING = 1
}
declare class DrawingCanvas extends BaseComponent implements IDrawingCanvas {
    mode: DesignMode;
    constructor(style?: IAnyObject);
    onwheel: (event: WheelEvent) => void;
    activateDesignMode(): void;
    activatePreviewMode(): void;
    private traverseAndActivateDesignMode;
    private traverseAndActivatePreviewMode;
    addDesignElement(element: HTMLElement, position?: IPosition): HTMLElement;
}
export default DrawingCanvas;
