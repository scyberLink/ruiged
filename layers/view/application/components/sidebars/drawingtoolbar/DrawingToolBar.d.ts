import BaseComponent from '../../base/BaseComponent';
import IDrawingToolBar from '../../base/model/IDrawingToolBar';
import IStyle from '../../base/model/IStyle';
import DrawingToolbarItem from './DrawingToolbarItem';
declare class DrawingToolBar extends BaseComponent implements IDrawingToolBar {
    constructor(style?: IStyle);
    appendChildren(...children: DrawingToolbarItem[]): void;
}
export default DrawingToolBar;
