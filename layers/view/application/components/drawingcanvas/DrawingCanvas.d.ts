import IAnyObject from '../../../../../common/models/IAnyObject';
import IPosition from '../../../../../common/models/IPosition';
import BaseComponent from '../base/BaseComponent';
import IDrawingCanvas from '../base/model/IDrawingCanvas';
declare class DrawingCanvas extends BaseComponent implements IDrawingCanvas {
    constructor(style?: IAnyObject);
    onwheel: (event: WheelEvent) => void;
    addDesignElement(element: HTMLElement, position?: IPosition): HTMLElement;
}
export default DrawingCanvas;
