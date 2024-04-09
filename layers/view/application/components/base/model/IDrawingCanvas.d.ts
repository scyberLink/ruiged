import IPosition from '../../../../../../common/models/IPosition';
interface IDrawingCanvas {
    addDesignElement(element: HTMLElement, position?: IPosition): HTMLElement;
}
export default IDrawingCanvas;
