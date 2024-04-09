import IPosition from '../../../../../../common/models/IPosition';
import BaseComponent from '../BaseComponent';
interface IDrawingCanvas extends BaseComponent {
    addDesignElement(element: HTMLElement, position?: IPosition): HTMLElement;
}
export default IDrawingCanvas;
