/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import ActionBar from '../actionbar/ActionBar';
import BaseComponent from './BaseComponent';
import ColorPalette from '../colorpalette/ColorPalette';
import DrawingCanvas from '../drawingcanvas/DrawingCanvas';
import DrawingToolBar from '../sidebars/drawingtoolbar/DrawingToolBar';
import HorizontalRuler from '../rulers/horizontalruler/HorizontalRuler';
import HorizontalScrollBar from '../scrollbars/horizontalscrollbar/HorizontalScrollBar';
import MenuBar from '../menubar/MenuBar';
//import ObjectManagerSelector from '../objectmanagerselector/ObjectManagerSelector'
import StatusBar from '../statusbar/StatusBar';
import ToolBar from '../toolbar/ToolBar';
import VerticalRuler from '../rulers/verticalruler/VerticalRuler';
import VerticalScrollBar from '../scrollbars/verticalscrollbar/VerticalScrollBar';
import ConsoleCanvas from '../consolecanvas/ConsoleCanvas';
import LeftSideBar from '../sidebars/leftsidebar/LeftSideBar';
import TabPane from '../tabpane/TabPane';
import ParserContainer from '../ParserContainer';
import ContextMenu from '../contextmenu/ContextMenu';
import SharedConfig from '../../../../../common/SharedConfig';
import { CONTEXT_MENU, DRAWING_CANVAS, EXTENSION_POOL } from '../../../../../common/constants';
import ShadowMode from '../../common/ShadowMode';
import ExtensionPool from '../../../../../extension/ExtensionPool';
var Dimension;
(function (Dimension) {
    Dimension["top"] = "0";
    Dimension["bottom"] = "0";
    Dimension["fullWidth"] = "100%";
    Dimension["fullHeight"] = "100%";
    Dimension["halfWidth"] = "50%";
    Dimension["halfHeight"] = "50%";
    Dimension["menubarHeight"] = "20px";
    Dimension["toolBarHeight"] = "30px";
    Dimension["actionBarHeight"] = "29px";
    Dimension["actionBarTop"] = "50px";
    Dimension["horizontalRulerHeight"] = "10px";
    Dimension["horizontalRulerTop"] = "80px";
    Dimension["horizontalRulerLeft"] = "30px";
    Dimension["drawingToolBarWidth"] = "20px";
    Dimension["drawingToolBarTop"] = "80px";
    Dimension["drawingToolBarLeft"] = "0";
    Dimension["verticalRulerWidth"] = "10px";
    Dimension["verticalRulerLeft"] = "20px";
    Dimension["verticalRulerTop"] = "90px";
    Dimension["drawingCanvasWidth"] = "100%";
    Dimension["drawingCanvasHeight"] = "100%";
    Dimension["drawingCanvasLeft"] = "30px";
    Dimension["drawingCanvasTop"] = "90px";
    Dimension["drawingCanvasBottom"] = "20px";
    Dimension["drawingCanvasRight"] = "20px";
    Dimension["colorPaletteWidth"] = "20px";
    Dimension["colorPaletteHeight"] = "100%";
    Dimension["colorPaletteRight"] = "0";
    Dimension["colorPaletteTop"] = "80px";
    Dimension["objectManagerSelectorWidth"] = "20px";
    Dimension["objectManagerSelectorHeight"] = "20px";
    Dimension["objectManagerSelectorRight"] = "0";
    Dimension["objectManagerSelectorBottom"] = "20px";
    Dimension["statusBarWidth"] = "100%";
    Dimension["statusBarHeight"] = "20px";
    Dimension["statusBarBottom"] = "0";
})(Dimension || (Dimension = {}));
class AppContainer extends BaseComponent {
    menuBar = new MenuBar({
        width: Dimension.fullWidth,
        height: Dimension.menubarHeight,
        top: Dimension.top,
    }, ShadowMode.OPEN);
    toolBar = new ToolBar({
        width: Dimension.fullWidth,
        height: Dimension.toolBarHeight,
        top: Dimension.menubarHeight,
    });
    actionBar = new ActionBar({
        width: Dimension.fullWidth,
        height: Dimension.actionBarHeight,
        top: Dimension.actionBarTop,
    });
    horizontalRuler = new HorizontalRuler({
        width: Dimension.fullWidth,
        height: Dimension.horizontalRulerHeight,
        top: Dimension.horizontalRulerTop,
        left: Dimension.horizontalRulerLeft,
    });
    verticalRuler = new VerticalRuler({
        width: Dimension.verticalRulerWidth,
        top: Dimension.verticalRulerTop,
        height: Dimension.fullHeight,
        left: Dimension.verticalRulerLeft,
    });
    drawingToolBar = new DrawingToolBar({
        width: Dimension.drawingToolBarWidth,
        top: Dimension.drawingToolBarTop,
        height: Dimension.fullHeight,
        left: Dimension.drawingToolBarLeft,
    });
    drawingCanvas = new DrawingCanvas({
        left: Dimension.drawingCanvasLeft,
        top: Dimension.drawingCanvasTop,
        bottom: Dimension.drawingCanvasBottom,
        right: Dimension.drawingCanvasRight,
        overflow: 'auto',
    });
    colorPalette = new ColorPalette({
        width: Dimension.colorPaletteWidth,
        height: Dimension.colorPaletteHeight,
        right: Dimension.colorPaletteRight,
        top: Dimension.colorPaletteTop,
    });
    /*  private objectManagerSelector: BaseComponent = new ObjectManagerSelector({
       width: Dimension.objectManagerSelectorWidth,
       height: Dimension.objectManagerSelectorHeight,
       right: Dimension.objectManagerSelectorRight,
       bottom: Dimension.objectManagerSelectorBottom,
     })  as BaseComponent*/
    verticalScrollBar = new VerticalScrollBar();
    horizontalScrollBar = new HorizontalScrollBar();
    statusBar = new StatusBar({
        width: Dimension.statusBarWidth,
        height: Dimension.statusBarHeight,
        bottom: Dimension.statusBarBottom,
    });
    consolecanvas = new ConsoleCanvas({
        width: '100%',
        height: '200px',
        bottom: 0,
        display: 'none',
    });
    leftSideBar = new LeftSideBar();
    parserContainer = new ParserContainer();
    tabPane = new TabPane();
    /* private designElementWrapper: IDesignElementSelectWrapper =
      new DesignElementSelectionWrapper() as IDesignElementSelectWrapper
   */
    contextMenu = new ContextMenu({
        position: 'absolute',
        bottom: '0',
        display: 'flex',
        borderRadius: '10px',
        border: '0.5px solid gray',
    });
    constructor() {
        super();
        /*    spreadTo(this.designElementWrapper.style, {
             display: 'flex',
             position: 'absolute',
             top: '0',
             left: '0',
             bottom: '0',
             right: '0',
             border: '1px solid blue',
           }) */
        //SharedConfig.set(DESIGN_ELEMENT_WRAPPER, this.designElementWrapper)
        SharedConfig.set(CONTEXT_MENU, this.contextMenu);
        SharedConfig.set(DRAWING_CANVAS, this.drawingCanvas);
        this.appendChildren(this.menuBar, this.toolBar, this.actionBar, this.tabPane, this.horizontalRuler, this.drawingToolBar, this.verticalRuler, this.drawingCanvas, this.colorPalette, 
        //this.objectManagerSelector,
        this.verticalScrollBar, this.horizontalScrollBar, this.statusBar, this.consolecanvas, this.leftSideBar, this.parserContainer);
        this.menuBar.disabled = true;
        window.onwheel = (event) => {
            // Check if Ctrl key is pressed
            if (event.ctrlKey) {
                //event.preventDefault();
                // Calculate the new scale factor based on the wheel delta
                const delta = event.deltaY;
                const zoomFactor = 0.02; // You can adjust this value based on your zoom sensitivity
                const currentScale = parseFloat(this.drawingCanvas.style.transform.replace('scale(', '').replace(')', '')) || 1;
                let scale;
                if (delta < 0) {
                    scale = currentScale + zoomFactor;
                }
                else {
                    scale = currentScale - zoomFactor;
                }
                // Set the new scale factor
                this.drawingCanvas.scale = scale;
            }
        };
        this.setCursor('default');
        const extensionPool = new ExtensionPool(this, true);
        SharedConfig.set(EXTENSION_POOL, extensionPool);
    }
    getMenuBar() {
        return this.menuBar;
    }
    getToolBar() {
        return this.toolBar;
    }
    getActionBar() {
        return this.actionBar;
    }
    getHorizontalRuler() {
        return this.horizontalRuler;
    }
    getVerticalRuler() {
        return this.verticalRuler;
    }
    getDrawingToolBar() {
        return this.drawingToolBar;
    }
    getDrawingCanvas() {
        return this.drawingCanvas;
    }
    getColorPalette() {
        return this.colorPalette;
    }
    getVerticalScrollBar() {
        return this.verticalScrollBar;
    }
    getHorizontalScrollBar() {
        return this.horizontalScrollBar;
    }
    getStatusBar() {
        return this.statusBar;
    }
    getConsoleCanvas() {
        return this.consolecanvas;
    }
    getLeftSideBar() {
        return this.leftSideBar;
    }
    getParserContainer() {
        return this.parserContainer;
    }
    getTabPane() {
        return this.tabPane;
    }
    /* getDesignElementSelectionWrapper() {
      return this.designElementWrapper
    } */
    getContextMenu() {
        return this.contextMenu;
    }
}
export default AppContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9BcHBDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0VBQWdFO0FBQ2hFLE9BQU8sU0FBUyxNQUFNLHdCQUF3QixDQUFBO0FBQzlDLE9BQU8sYUFBYSxNQUFNLGlCQUFpQixDQUFBO0FBQzNDLE9BQU8sWUFBWSxNQUFNLDhCQUE4QixDQUFBO0FBQ3ZELE9BQU8sYUFBYSxNQUFNLGdDQUFnQyxDQUFBO0FBQzFELE9BQU8sY0FBYyxNQUFNLDJDQUEyQyxDQUFBO0FBQ3RFLE9BQU8sZUFBZSxNQUFNLDJDQUEyQyxDQUFBO0FBQ3ZFLE9BQU8sbUJBQW1CLE1BQU0sdURBQXVELENBQUE7QUFDdkYsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUE7QUFDeEMsb0ZBQW9GO0FBQ3BGLE9BQU8sU0FBUyxNQUFNLHdCQUF3QixDQUFBO0FBQzlDLE9BQU8sT0FBTyxNQUFNLG9CQUFvQixDQUFBO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLHVDQUF1QyxDQUFBO0FBQ2pFLE9BQU8saUJBQWlCLE1BQU0sbURBQW1ELENBQUE7QUFDakYsT0FBTyxhQUFhLE1BQU0sZ0NBQWdDLENBQUE7QUFDMUQsT0FBTyxXQUFXLE1BQU0scUNBQXFDLENBQUE7QUFDN0QsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUE7QUFDeEMsT0FBTyxlQUFlLE1BQU0sb0JBQW9CLENBQUE7QUFDaEQsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUE7QUFDcEQsT0FBTyxZQUFZLE1BQU0sb0NBQW9DLENBQUE7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDOUYsT0FBTyxVQUFVLE1BQU0seUJBQXlCLENBQUE7QUFFaEQsT0FBTyxh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Q0FBQTtJQUMxQixDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBO0lBQy9CLENBQUM7SUFDRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUE7SUFDakMsQ0FBQztJQUNELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDdkIsQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0Q7O1FBRUk7SUFDSixjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQUVELGVBQWUsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR1cGxpY2F0ZS1lbnVtLXZhbHVlcyAqL1xuaW1wb3J0IEFjdGlvbkJhciBmcm9tICcuLi9hY3Rpb25iYXIvQWN0aW9uQmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuLi9jb2xvcnBhbGV0dGUvQ29sb3JQYWxldHRlJ1xuaW1wb3J0IERyYXdpbmdDYW52YXMgZnJvbSAnLi4vZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzJ1xuaW1wb3J0IERyYXdpbmdUb29sQmFyIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sQmFyJ1xuaW1wb3J0IEhvcml6b250YWxSdWxlciBmcm9tICcuLi9ydWxlcnMvaG9yaXpvbnRhbHJ1bGVyL0hvcml6b250YWxSdWxlcidcbmltcG9ydCBIb3Jpem9udGFsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvaG9yaXpvbnRhbHNjcm9sbGJhci9Ib3Jpem9udGFsU2Nyb2xsQmFyJ1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi4vbWVudWJhci9NZW51QmFyJ1xuLy9pbXBvcnQgT2JqZWN0TWFuYWdlclNlbGVjdG9yIGZyb20gJy4uL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uL3N0YXR1c2Jhci9TdGF0dXNCYXInXG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi90b29sYmFyL1Rvb2xCYXInXG5pbXBvcnQgVmVydGljYWxSdWxlciBmcm9tICcuLi9ydWxlcnMvdmVydGljYWxydWxlci9WZXJ0aWNhbFJ1bGVyJ1xuaW1wb3J0IFZlcnRpY2FsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvdmVydGljYWxzY3JvbGxiYXIvVmVydGljYWxTY3JvbGxCYXInXG5pbXBvcnQgQ29uc29sZUNhbnZhcyBmcm9tICcuLi9jb25zb2xlY2FudmFzL0NvbnNvbGVDYW52YXMnXG5pbXBvcnQgTGVmdFNpZGVCYXIgZnJvbSAnLi4vc2lkZWJhcnMvbGVmdHNpZGViYXIvTGVmdFNpZGVCYXInXG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuLi90YWJwYW5lL1RhYlBhbmUnXG5pbXBvcnQgUGFyc2VyQ29udGFpbmVyIGZyb20gJy4uL1BhcnNlckNvbnRhaW5lcidcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuLi9jb250ZXh0bWVudS9Db250ZXh0TWVudSdcbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IENPTlRFWFRfTUVOVSwgRFJBV0lOR19DQU5WQVMsIEVYVEVOU0lPTl9QT09MIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4uLy4uL2NvbW1vbi9TaGFkb3dNb2RlJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi9tb2RlbC9JQXBwQ29udGFpbmVyJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXh0ZW5zaW9uL0V4dGVuc2lvblBvb2wnXG5cbmVudW0gRGltZW5zaW9uIHtcbiAgdG9wID0gJzAnLFxuICBib3R0b20gPSAnMCcsXG4gIGZ1bGxXaWR0aCA9ICcxMDAlJyxcbiAgZnVsbEhlaWdodCA9ICcxMDAlJyxcbiAgaGFsZldpZHRoID0gJzUwJScsXG4gIGhhbGZIZWlnaHQgPSAnNTAlJyxcblxuICBtZW51YmFySGVpZ2h0ID0gJzIwcHgnLFxuICB0b29sQmFySGVpZ2h0ID0gJzMwcHgnLFxuXG4gIGFjdGlvbkJhckhlaWdodCA9ICcyOXB4JyxcbiAgYWN0aW9uQmFyVG9wID0gJzUwcHgnLFxuXG4gIGhvcml6b250YWxSdWxlckhlaWdodCA9ICcxMHB4JyxcbiAgaG9yaXpvbnRhbFJ1bGVyVG9wID0gJzgwcHgnLFxuICBob3Jpem9udGFsUnVsZXJMZWZ0ID0gJzMwcHgnLFxuXG4gIGRyYXdpbmdUb29sQmFyV2lkdGggPSAnMjBweCcsXG4gIGRyYXdpbmdUb29sQmFyVG9wID0gJzgwcHgnLFxuICBkcmF3aW5nVG9vbEJhckxlZnQgPSAnMCcsXG5cbiAgdmVydGljYWxSdWxlcldpZHRoID0gJzEwcHgnLFxuICB2ZXJ0aWNhbFJ1bGVyTGVmdCA9ICcyMHB4JyxcbiAgdmVydGljYWxSdWxlclRvcCA9ICc5MHB4JyxcblxuICBkcmF3aW5nQ2FudmFzV2lkdGggPSAnMTAwJScsXG4gIGRyYXdpbmdDYW52YXNIZWlnaHQgPSAnMTAwJScsXG4gIGRyYXdpbmdDYW52YXNMZWZ0ID0gJzMwcHgnLCAvL3ZlcnRpY2FsUnVsZXJMZWZ0ICsgdmVydGljYWxSdWxlcldpZHRoXG4gIGRyYXdpbmdDYW52YXNUb3AgPSAnOTBweCcsXG4gIGRyYXdpbmdDYW52YXNCb3R0b20gPSAnMjBweCcsXG4gIGRyYXdpbmdDYW52YXNSaWdodCA9ICcyMHB4JyxcblxuICBjb2xvclBhbGV0dGVXaWR0aCA9ICcyMHB4JyxcbiAgY29sb3JQYWxldHRlSGVpZ2h0ID0gJzEwMCUnLFxuICBjb2xvclBhbGV0dGVSaWdodCA9ICcwJyxcbiAgY29sb3JQYWxldHRlVG9wID0gJzgwcHgnLFxuXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoID0gJzIwcHgnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQgPSAnMjBweCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvclJpZ2h0ID0gJzAnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JCb3R0b20gPSAnMjBweCcsXG5cbiAgc3RhdHVzQmFyV2lkdGggPSAnMTAwJScsXG4gIHN0YXR1c0JhckhlaWdodCA9ICcyMHB4JyxcbiAgc3RhdHVzQmFyQm90dG9tID0gJzAnLFxufVxuXG5jbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUFwcENvbnRhaW5lciB7XG4gIHByaXZhdGUgbWVudUJhcjogTWVudUJhciA9IG5ldyBNZW51QmFyKFxuICAgIHtcbiAgICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgICAgaGVpZ2h0OiBEaW1lbnNpb24ubWVudWJhckhlaWdodCxcbiAgICAgIHRvcDogRGltZW5zaW9uLnRvcCxcbiAgICB9LFxuICAgIFNoYWRvd01vZGUuT1BFTixcbiAgKVxuXG4gIHByaXZhdGUgdG9vbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBUb29sQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi50b29sQmFySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLm1lbnViYXJIZWlnaHQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGFjdGlvbkJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBBY3Rpb25CYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmFjdGlvbkJhckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5hY3Rpb25CYXJUb3AsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGhvcml6b250YWxSdWxlcjogQmFzZUNvbXBvbmVudCA9IG5ldyBIb3Jpem9udGFsUnVsZXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJUb3AsXG4gICAgbGVmdDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHZlcnRpY2FsUnVsZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgVmVydGljYWxSdWxlcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyV2lkdGgsXG4gICAgdG9wOiBEaW1lbnNpb24udmVydGljYWxSdWxlclRvcCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5mdWxsSGVpZ2h0LFxuICAgIGxlZnQ6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgZHJhd2luZ1Rvb2xCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgRHJhd2luZ1Rvb2xCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJXaWR0aCxcbiAgICB0b3A6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhclRvcCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5mdWxsSGVpZ2h0LFxuICAgIGxlZnQ6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGRyYXdpbmdDYW52YXM6IEJhc2VDb21wb25lbnQgPSBuZXcgRHJhd2luZ0NhbnZhcyh7XG4gICAgbGVmdDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNMZWZ0LFxuICAgIHRvcDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNUb3AsXG4gICAgYm90dG9tOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0JvdHRvbSxcbiAgICByaWdodDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNSaWdodCxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBjb2xvclBhbGV0dGU6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29sb3JQYWxldHRlKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZUhlaWdodCxcbiAgICByaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVJpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIC8qICBwcml2YXRlIG9iamVjdE1hbmFnZXJTZWxlY3RvcjogQmFzZUNvbXBvbmVudCA9IG5ldyBPYmplY3RNYW5hZ2VyU2VsZWN0b3Ioe1xuICAgICB3aWR0aDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoLFxuICAgICBoZWlnaHQ6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQsXG4gICAgIHJpZ2h0OiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQsXG4gICAgIGJvdHRvbTogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSxcbiAgIH0pICBhcyBCYXNlQ29tcG9uZW50Ki9cblxuICBwcml2YXRlIHZlcnRpY2FsU2Nyb2xsQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsU2Nyb2xsQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFNjcm9sbEJhcigpIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHN0YXR1c0JhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBTdGF0dXNCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uc3RhdHVzQmFyV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uc3RhdHVzQmFySGVpZ2h0LFxuICAgIGJvdHRvbTogRGltZW5zaW9uLnN0YXR1c0JhckJvdHRvbSxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgY29uc29sZWNhbnZhczogQmFzZUNvbXBvbmVudCA9IG5ldyBDb25zb2xlQ2FudmFzKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBib3R0b206IDAsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBsZWZ0U2lkZUJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBMZWZ0U2lkZUJhcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSBwYXJzZXJDb250YWluZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgUGFyc2VyQ29udGFpbmVyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIHRhYlBhbmU6IEJhc2VDb21wb25lbnQgPSBuZXcgVGFiUGFuZSgpIGFzIEJhc2VDb21wb25lbnRcblxuICAvKiBwcml2YXRlIGRlc2lnbkVsZW1lbnRXcmFwcGVyOiBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIgPVxuICAgIG5ldyBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIGFzIElEZXNpZ25FbGVtZW50U2VsZWN0V3JhcHBlclxuICovXG4gIGNvbnRleHRNZW51OiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbnRleHRNZW51KHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcwJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgZ3JheScsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKiAgICBzcHJlYWRUbyh0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyLnN0eWxlLCB7XG4gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxuICAgICAgIH0pICovXG5cbiAgICAvL1NoYXJlZENvbmZpZy5zZXQoREVTSUdOX0VMRU1FTlRfV1JBUFBFUiwgdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlcilcbiAgICBTaGFyZWRDb25maWcuc2V0KENPTlRFWFRfTUVOVSwgdGhpcy5jb250ZXh0TWVudSlcbiAgICBTaGFyZWRDb25maWcuc2V0KERSQVdJTkdfQ0FOVkFTLCB0aGlzLmRyYXdpbmdDYW52YXMpXG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKFxuICAgICAgdGhpcy5tZW51QmFyLFxuICAgICAgdGhpcy50b29sQmFyLFxuICAgICAgdGhpcy5hY3Rpb25CYXIsXG4gICAgICB0aGlzLnRhYlBhbmUsXG4gICAgICB0aGlzLmhvcml6b250YWxSdWxlcixcbiAgICAgIHRoaXMuZHJhd2luZ1Rvb2xCYXIsXG4gICAgICB0aGlzLnZlcnRpY2FsUnVsZXIsXG4gICAgICB0aGlzLmRyYXdpbmdDYW52YXMsXG4gICAgICB0aGlzLmNvbG9yUGFsZXR0ZSxcbiAgICAgIC8vdGhpcy5vYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5zdGF0dXNCYXIsXG4gICAgICB0aGlzLmNvbnNvbGVjYW52YXMsXG4gICAgICB0aGlzLmxlZnRTaWRlQmFyLFxuICAgICAgdGhpcy5wYXJzZXJDb250YWluZXIsXG4gICAgKVxuICAgIHRoaXMubWVudUJhci5kaXNhYmxlZCA9IHRydWVcblxuICAgIHdpbmRvdy5vbndoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBDdHJsIGtleSBpcyBwcmVzc2VkXG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgc2NhbGUgZmFjdG9yIGJhc2VkIG9uIHRoZSB3aGVlbCBkZWx0YVxuXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZXG4gICAgICAgIGNvbnN0IHpvb21GYWN0b3IgPSAwLjAyIC8vIFlvdSBjYW4gYWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciB6b29tIHNlbnNpdGl2aXR5XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHBhcnNlRmxvYXQodGhpcy5kcmF3aW5nQ2FudmFzLnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKCdzY2FsZSgnLCAnJykucmVwbGFjZSgnKScsICcnKSkgfHwgMVxuICAgICAgICBsZXQgc2NhbGVcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlICsgem9vbUZhY3RvclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlIC0gem9vbUZhY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgc2NhbGUgZmFjdG9yXG4gICAgICAgIHRoaXMuZHJhd2luZ0NhbnZhcy5zY2FsZSA9IHNjYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoJ2RlZmF1bHQnKVxuICAgIGNvbnN0IGV4dGVuc2lvblBvb2wgPSBuZXcgRXh0ZW5zaW9uUG9vbCh0aGlzIGFzIHVua25vd24gYXMgSUFwcENvbnRhaW5lciwgdHJ1ZSlcbiAgICBTaGFyZWRDb25maWcuc2V0KEVYVEVOU0lPTl9QT09MLCBleHRlbnNpb25Qb29sKVxuICB9XG5cbiAgZ2V0TWVudUJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51QmFyXG4gIH1cbiAgZ2V0VG9vbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy50b29sQmFyXG4gIH1cbiAgZ2V0QWN0aW9uQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbkJhclxuICB9XG4gIGdldEhvcml6b250YWxSdWxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsUnVsZXJcbiAgfVxuICBnZXRWZXJ0aWNhbFJ1bGVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsUnVsZXJcbiAgfVxuICBnZXREcmF3aW5nVG9vbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmF3aW5nVG9vbEJhclxuICB9XG4gIGdldERyYXdpbmdDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhd2luZ0NhbnZhc1xuICB9XG4gIGdldENvbG9yUGFsZXR0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvclBhbGV0dGVcbiAgfVxuICBnZXRWZXJ0aWNhbFNjcm9sbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFNjcm9sbEJhclxuICB9XG4gIGdldEhvcml6b250YWxTY3JvbGxCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbFNjcm9sbEJhclxuICB9XG4gIGdldFN0YXR1c0JhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXNCYXJcbiAgfVxuICBnZXRDb25zb2xlQ2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNvbGVjYW52YXNcbiAgfVxuICBnZXRMZWZ0U2lkZUJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0U2lkZUJhclxuICB9XG4gIGdldFBhcnNlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb250YWluZXJcbiAgfVxuICBnZXRUYWJQYW5lKCkge1xuICAgIHJldHVybiB0aGlzLnRhYlBhbmVcbiAgfVxuICAvKiBnZXREZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlclxuICB9ICovXG4gIGdldENvbnRleHRNZW51KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGFpbmVyXG4iXX0=