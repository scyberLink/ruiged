import IAnyObject from '../../../../../../common/models/IAnyObject';
import BaseComponent from '../../base/BaseComponent';
import IDrawingToolBar from '../../base/model/IDrawingToolBar';
import DrawingToolbarItem from './DrawingToolbarItem';
declare class DrawingToolBar extends BaseComponent implements IDrawingToolBar {
    constructor(style?: IAnyObject);
    appendChildren(...children: DrawingToolbarItem[]): void;
}
export default DrawingToolBar;
