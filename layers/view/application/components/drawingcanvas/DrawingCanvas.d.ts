import IPosition from '../../../../../common/models/IPosition';
import DesignElement from '../../../design/base/DesignElement';
import BaseComponent from '../base/BaseComponent';
import IDrawingCanvas from '../base/model/IDrawingCanvas';
import IStyle from '../base/model/IStyle';
export declare enum DesignMode {
    PREVIEWING = 0,
    DESIGNING = 1
}
declare class DrawingCanvas extends BaseComponent implements IDrawingCanvas {
    mode: DesignMode;
    designElements: DesignElement[];
    constructor(style?: IStyle);
    onwheel: (event: WheelEvent) => void;
    activateDesignMode(): void;
    activatePreviewMode(): void;
    addDesignElement(element: HTMLElement, position?: IPosition): HTMLElement;
    addEventToDesignElement(eventName: string, listener: (e: Event) => any): void;
}
export default DrawingCanvas;
