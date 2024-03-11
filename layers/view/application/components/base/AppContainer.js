"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
const ActionBar_1 = __importDefault(require("../actionbar/ActionBar"));
const BaseComponent_1 = __importDefault(require("./BaseComponent"));
const ColorPalette_1 = __importDefault(require("../colorpalette/ColorPalette"));
const DrawingCanvas_1 = __importDefault(require("../drawingcanvas/DrawingCanvas"));
const DrawingToolBar_1 = __importDefault(require("../sidebars/drawingtoolbar/DrawingToolBar"));
const HorizontalRuler_1 = __importDefault(require("../rulers/horizontalruler/HorizontalRuler"));
const HorizontalScrollBar_1 = __importDefault(require("../scrollbars/horizontalscrollbar/HorizontalScrollBar"));
const MenuBar_1 = __importDefault(require("../menubar/MenuBar"));
//import ObjectManagerSelector from '../objectmanagerselector/ObjectManagerSelector'
const StatusBar_1 = __importDefault(require("../statusbar/StatusBar"));
const ToolBar_1 = __importDefault(require("../toolbar/ToolBar"));
const VerticalRuler_1 = __importDefault(require("../rulers/verticalruler/VerticalRuler"));
const VerticalScrollBar_1 = __importDefault(require("../scrollbars/verticalscrollbar/VerticalScrollBar"));
const ConsoleCanvas_1 = __importDefault(require("../consolecanvas/ConsoleCanvas"));
const LeftSideBar_1 = __importDefault(require("../sidebars/leftsidebar/LeftSideBar"));
const TabPane_1 = __importDefault(require("../tabpane/TabPane"));
const ParserContainer_1 = __importDefault(require("../ParserContainer"));
const ContextMenu_1 = __importDefault(require("../contextmenu/ContextMenu"));
const SharedConfig_1 = __importDefault(require("../../../../../common/SharedConfig"));
const constants_1 = require("../../../../../common/constants");
const ShadowMode_1 = __importDefault(require("../../common/ShadowMode"));
const ExtensionPool_1 = __importDefault(require("../../../../../extension/ExtensionPool"));
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
class AppContainer extends BaseComponent_1.default {
    constructor() {
        super();
        this.menuBar = new MenuBar_1.default({
            width: Dimension.fullWidth,
            height: Dimension.menubarHeight,
            top: Dimension.top,
        }, ShadowMode_1.default.OPEN);
        this.toolBar = new ToolBar_1.default({
            width: Dimension.fullWidth,
            height: Dimension.toolBarHeight,
            top: Dimension.menubarHeight,
        });
        this.actionBar = new ActionBar_1.default({
            width: Dimension.fullWidth,
            height: Dimension.actionBarHeight,
            top: Dimension.actionBarTop,
        });
        this.horizontalRuler = new HorizontalRuler_1.default({
            width: Dimension.fullWidth,
            height: Dimension.horizontalRulerHeight,
            top: Dimension.horizontalRulerTop,
            left: Dimension.horizontalRulerLeft,
        });
        this.verticalRuler = new VerticalRuler_1.default({
            width: Dimension.verticalRulerWidth,
            top: Dimension.verticalRulerTop,
            height: Dimension.fullHeight,
            left: Dimension.verticalRulerLeft,
        });
        this.drawingToolBar = new DrawingToolBar_1.default({
            width: Dimension.drawingToolBarWidth,
            top: Dimension.drawingToolBarTop,
            height: Dimension.fullHeight,
            left: Dimension.drawingToolBarLeft,
        });
        this.drawingCanvas = new DrawingCanvas_1.default({
            left: Dimension.drawingCanvasLeft,
            top: Dimension.drawingCanvasTop,
            bottom: Dimension.drawingCanvasBottom,
            right: Dimension.drawingCanvasRight,
            overflow: 'auto',
        });
        this.colorPalette = new ColorPalette_1.default({
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
        this.verticalScrollBar = new VerticalScrollBar_1.default();
        this.horizontalScrollBar = new HorizontalScrollBar_1.default();
        this.statusBar = new StatusBar_1.default({
            width: Dimension.statusBarWidth,
            height: Dimension.statusBarHeight,
            bottom: Dimension.statusBarBottom,
        });
        this.consolecanvas = new ConsoleCanvas_1.default({
            width: '100%',
            height: '200px',
            bottom: 0,
            display: 'none',
        });
        this.leftSideBar = new LeftSideBar_1.default();
        this.parserContainer = new ParserContainer_1.default();
        this.tabPane = new TabPane_1.default();
        /* private designElementWrapper: IDesignElementSelectWrapper =
          new DesignElementSelectionWrapper() as IDesignElementSelectWrapper
       */
        this.contextMenu = new ContextMenu_1.default({
            position: 'absolute',
            bottom: '0',
            display: 'flex',
            borderRadius: '10px',
            border: '0.5px solid gray',
        });
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
        SharedConfig_1.default.set(constants_1.CONTEXT_MENU, this.contextMenu);
        SharedConfig_1.default.set(constants_1.DRAWING_CANVAS, this.drawingCanvas);
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
        const extensionPool = new ExtensionPool_1.default(this, true);
        SharedConfig_1.default.set(constants_1.EXTENSION_POOL, extensionPool);
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
exports.default = AppContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9BcHBDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBZ0U7QUFDaEUsdUVBQThDO0FBQzlDLG9FQUEyQztBQUMzQyxnRkFBdUQ7QUFDdkQsbUZBQTBEO0FBQzFELCtGQUFzRTtBQUN0RSxnR0FBdUU7QUFDdkUsZ0hBQXVGO0FBQ3ZGLGlFQUF3QztBQUN4QyxvRkFBb0Y7QUFDcEYsdUVBQThDO0FBQzlDLGlFQUF3QztBQUN4QywwRkFBaUU7QUFDakUsMEdBQWlGO0FBQ2pGLG1GQUEwRDtBQUMxRCxzRkFBNkQ7QUFDN0QsaUVBQXdDO0FBQ3hDLHlFQUFnRDtBQUNoRCw2RUFBb0Q7QUFDcEQsc0ZBQTZEO0FBQzdELCtEQUE4RjtBQUM5Rix5RUFBZ0Q7QUFFaEQsMkZBQWtFO0FBRWxFLElBQUssU0E4Q0o7QUE5Q0QsV0FBSyxTQUFTO0lBQ1osc0JBQVMsQ0FBQTtJQUNULHlCQUFZLENBQUE7SUFDWiwrQkFBa0IsQ0FBQTtJQUNsQixnQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiwrQkFBa0IsQ0FBQTtJQUVsQixtQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBc0IsQ0FBQTtJQUV0QixxQ0FBd0IsQ0FBQTtJQUN4QixrQ0FBcUIsQ0FBQTtJQUVyQiwyQ0FBOEIsQ0FBQTtJQUM5Qix3Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBNEIsQ0FBQTtJQUU1Qix5Q0FBNEIsQ0FBQTtJQUM1Qix1Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBd0IsQ0FBQTtJQUV4Qix3Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBMEIsQ0FBQTtJQUMxQixzQ0FBeUIsQ0FBQTtJQUV6Qix3Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBNEIsQ0FBQTtJQUM1Qix1Q0FBMEIsQ0FBQTtJQUMx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QUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDekIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR1cGxpY2F0ZS1lbnVtLXZhbHVlcyAqL1xuaW1wb3J0IEFjdGlvbkJhciBmcm9tICcuLi9hY3Rpb25iYXIvQWN0aW9uQmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuLi9jb2xvcnBhbGV0dGUvQ29sb3JQYWxldHRlJ1xuaW1wb3J0IERyYXdpbmdDYW52YXMgZnJvbSAnLi4vZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzJ1xuaW1wb3J0IERyYXdpbmdUb29sQmFyIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sQmFyJ1xuaW1wb3J0IEhvcml6b250YWxSdWxlciBmcm9tICcuLi9ydWxlcnMvaG9yaXpvbnRhbHJ1bGVyL0hvcml6b250YWxSdWxlcidcbmltcG9ydCBIb3Jpem9udGFsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvaG9yaXpvbnRhbHNjcm9sbGJhci9Ib3Jpem9udGFsU2Nyb2xsQmFyJ1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi4vbWVudWJhci9NZW51QmFyJ1xuLy9pbXBvcnQgT2JqZWN0TWFuYWdlclNlbGVjdG9yIGZyb20gJy4uL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uL3N0YXR1c2Jhci9TdGF0dXNCYXInXG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi90b29sYmFyL1Rvb2xCYXInXG5pbXBvcnQgVmVydGljYWxSdWxlciBmcm9tICcuLi9ydWxlcnMvdmVydGljYWxydWxlci9WZXJ0aWNhbFJ1bGVyJ1xuaW1wb3J0IFZlcnRpY2FsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvdmVydGljYWxzY3JvbGxiYXIvVmVydGljYWxTY3JvbGxCYXInXG5pbXBvcnQgQ29uc29sZUNhbnZhcyBmcm9tICcuLi9jb25zb2xlY2FudmFzL0NvbnNvbGVDYW52YXMnXG5pbXBvcnQgTGVmdFNpZGVCYXIgZnJvbSAnLi4vc2lkZWJhcnMvbGVmdHNpZGViYXIvTGVmdFNpZGVCYXInXG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuLi90YWJwYW5lL1RhYlBhbmUnXG5pbXBvcnQgUGFyc2VyQ29udGFpbmVyIGZyb20gJy4uL1BhcnNlckNvbnRhaW5lcidcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuLi9jb250ZXh0bWVudS9Db250ZXh0TWVudSdcbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IENPTlRFWFRfTUVOVSwgRFJBV0lOR19DQU5WQVMsIEVYVEVOU0lPTl9QT09MIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4uLy4uL2NvbW1vbi9TaGFkb3dNb2RlJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi9tb2RlbC9JQXBwQ29udGFpbmVyJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXh0ZW5zaW9uL0V4dGVuc2lvblBvb2wnXG5cbmVudW0gRGltZW5zaW9uIHtcbiAgdG9wID0gJzAnLFxuICBib3R0b20gPSAnMCcsXG4gIGZ1bGxXaWR0aCA9ICcxMDAlJyxcbiAgZnVsbEhlaWdodCA9ICcxMDAlJyxcbiAgaGFsZldpZHRoID0gJzUwJScsXG4gIGhhbGZIZWlnaHQgPSAnNTAlJyxcblxuICBtZW51YmFySGVpZ2h0ID0gJzIwcHgnLFxuICB0b29sQmFySGVpZ2h0ID0gJzMwcHgnLFxuXG4gIGFjdGlvbkJhckhlaWdodCA9ICcyOXB4JyxcbiAgYWN0aW9uQmFyVG9wID0gJzUwcHgnLFxuXG4gIGhvcml6b250YWxSdWxlckhlaWdodCA9ICcxMHB4JyxcbiAgaG9yaXpvbnRhbFJ1bGVyVG9wID0gJzgwcHgnLFxuICBob3Jpem9udGFsUnVsZXJMZWZ0ID0gJzMwcHgnLFxuXG4gIGRyYXdpbmdUb29sQmFyV2lkdGggPSAnMjBweCcsXG4gIGRyYXdpbmdUb29sQmFyVG9wID0gJzgwcHgnLFxuICBkcmF3aW5nVG9vbEJhckxlZnQgPSAnMCcsXG5cbiAgdmVydGljYWxSdWxlcldpZHRoID0gJzEwcHgnLFxuICB2ZXJ0aWNhbFJ1bGVyTGVmdCA9ICcyMHB4JyxcbiAgdmVydGljYWxSdWxlclRvcCA9ICc5MHB4JyxcblxuICBkcmF3aW5nQ2FudmFzV2lkdGggPSAnMTAwJScsXG4gIGRyYXdpbmdDYW52YXNIZWlnaHQgPSAnMTAwJScsXG4gIGRyYXdpbmdDYW52YXNMZWZ0ID0gJzMwcHgnLCAvL3ZlcnRpY2FsUnVsZXJMZWZ0ICsgdmVydGljYWxSdWxlcldpZHRoXG4gIGRyYXdpbmdDYW52YXNUb3AgPSAnOTBweCcsXG4gIGRyYXdpbmdDYW52YXNCb3R0b20gPSAnMjBweCcsXG4gIGRyYXdpbmdDYW52YXNSaWdodCA9ICcyMHB4JyxcblxuICBjb2xvclBhbGV0dGVXaWR0aCA9ICcyMHB4JyxcbiAgY29sb3JQYWxldHRlSGVpZ2h0ID0gJzEwMCUnLFxuICBjb2xvclBhbGV0dGVSaWdodCA9ICcwJyxcbiAgY29sb3JQYWxldHRlVG9wID0gJzgwcHgnLFxuXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoID0gJzIwcHgnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQgPSAnMjBweCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvclJpZ2h0ID0gJzAnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JCb3R0b20gPSAnMjBweCcsXG5cbiAgc3RhdHVzQmFyV2lkdGggPSAnMTAwJScsXG4gIHN0YXR1c0JhckhlaWdodCA9ICcyMHB4JyxcbiAgc3RhdHVzQmFyQm90dG9tID0gJzAnLFxufVxuXG5jbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUFwcENvbnRhaW5lciB7XG4gIHByaXZhdGUgbWVudUJhcjogTWVudUJhciA9IG5ldyBNZW51QmFyKFxuICAgIHtcbiAgICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgICAgaGVpZ2h0OiBEaW1lbnNpb24ubWVudWJhckhlaWdodCxcbiAgICAgIHRvcDogRGltZW5zaW9uLnRvcCxcbiAgICB9LFxuICAgIFNoYWRvd01vZGUuT1BFTixcbiAgKVxuXG4gIHByaXZhdGUgdG9vbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBUb29sQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi50b29sQmFySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLm1lbnViYXJIZWlnaHQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGFjdGlvbkJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBBY3Rpb25CYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmFjdGlvbkJhckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5hY3Rpb25CYXJUb3AsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGhvcml6b250YWxSdWxlcjogQmFzZUNvbXBvbmVudCA9IG5ldyBIb3Jpem9udGFsUnVsZXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJUb3AsXG4gICAgbGVmdDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHZlcnRpY2FsUnVsZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgVmVydGljYWxSdWxlcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyV2lkdGgsXG4gICAgdG9wOiBEaW1lbnNpb24udmVydGljYWxSdWxlclRvcCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5mdWxsSGVpZ2h0LFxuICAgIGxlZnQ6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgZHJhd2luZ1Rvb2xCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgRHJhd2luZ1Rvb2xCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJXaWR0aCxcbiAgICB0b3A6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhclRvcCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5mdWxsSGVpZ2h0LFxuICAgIGxlZnQ6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGRyYXdpbmdDYW52YXM6IEJhc2VDb21wb25lbnQgPSBuZXcgRHJhd2luZ0NhbnZhcyh7XG4gICAgbGVmdDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNMZWZ0LFxuICAgIHRvcDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNUb3AsXG4gICAgYm90dG9tOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0JvdHRvbSxcbiAgICByaWdodDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNSaWdodCxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBjb2xvclBhbGV0dGU6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29sb3JQYWxldHRlKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZUhlaWdodCxcbiAgICByaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVJpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIC8qICBwcml2YXRlIG9iamVjdE1hbmFnZXJTZWxlY3RvcjogQmFzZUNvbXBvbmVudCA9IG5ldyBPYmplY3RNYW5hZ2VyU2VsZWN0b3Ioe1xuICAgICB3aWR0aDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoLFxuICAgICBoZWlnaHQ6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQsXG4gICAgIHJpZ2h0OiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQsXG4gICAgIGJvdHRvbTogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSxcbiAgIH0pICBhcyBCYXNlQ29tcG9uZW50Ki9cblxuICBwcml2YXRlIHZlcnRpY2FsU2Nyb2xsQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsU2Nyb2xsQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFNjcm9sbEJhcigpIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHN0YXR1c0JhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBTdGF0dXNCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uc3RhdHVzQmFyV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uc3RhdHVzQmFySGVpZ2h0LFxuICAgIGJvdHRvbTogRGltZW5zaW9uLnN0YXR1c0JhckJvdHRvbSxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgY29uc29sZWNhbnZhczogQmFzZUNvbXBvbmVudCA9IG5ldyBDb25zb2xlQ2FudmFzKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBib3R0b206IDAsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBsZWZ0U2lkZUJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBMZWZ0U2lkZUJhcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSBwYXJzZXJDb250YWluZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgUGFyc2VyQ29udGFpbmVyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIHRhYlBhbmU6IEJhc2VDb21wb25lbnQgPSBuZXcgVGFiUGFuZSgpIGFzIEJhc2VDb21wb25lbnRcblxuICAvKiBwcml2YXRlIGRlc2lnbkVsZW1lbnRXcmFwcGVyOiBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIgPVxuICAgIG5ldyBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIGFzIElEZXNpZ25FbGVtZW50U2VsZWN0V3JhcHBlclxuICovXG4gIGNvbnRleHRNZW51OiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbnRleHRNZW51KHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcwJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgZ3JheScsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKiAgICBzcHJlYWRUbyh0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyLnN0eWxlLCB7XG4gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxuICAgICAgIH0pICovXG5cbiAgICAvL1NoYXJlZENvbmZpZy5zZXQoREVTSUdOX0VMRU1FTlRfV1JBUFBFUiwgdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlcilcbiAgICBTaGFyZWRDb25maWcuc2V0KENPTlRFWFRfTUVOVSwgdGhpcy5jb250ZXh0TWVudSlcbiAgICBTaGFyZWRDb25maWcuc2V0KERSQVdJTkdfQ0FOVkFTLCB0aGlzLmRyYXdpbmdDYW52YXMpXG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKFxuICAgICAgdGhpcy5tZW51QmFyLFxuICAgICAgdGhpcy50b29sQmFyLFxuICAgICAgdGhpcy5hY3Rpb25CYXIsXG4gICAgICB0aGlzLnRhYlBhbmUsXG4gICAgICB0aGlzLmhvcml6b250YWxSdWxlcixcbiAgICAgIHRoaXMuZHJhd2luZ1Rvb2xCYXIsXG4gICAgICB0aGlzLnZlcnRpY2FsUnVsZXIsXG4gICAgICB0aGlzLmRyYXdpbmdDYW52YXMsXG4gICAgICB0aGlzLmNvbG9yUGFsZXR0ZSxcbiAgICAgIC8vdGhpcy5vYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5zdGF0dXNCYXIsXG4gICAgICB0aGlzLmNvbnNvbGVjYW52YXMsXG4gICAgICB0aGlzLmxlZnRTaWRlQmFyLFxuICAgICAgdGhpcy5wYXJzZXJDb250YWluZXIsXG4gICAgKVxuICAgIHRoaXMubWVudUJhci5kaXNhYmxlZCA9IHRydWVcblxuICAgIHdpbmRvdy5vbndoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBDdHJsIGtleSBpcyBwcmVzc2VkXG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgc2NhbGUgZmFjdG9yIGJhc2VkIG9uIHRoZSB3aGVlbCBkZWx0YVxuXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZXG4gICAgICAgIGNvbnN0IHpvb21GYWN0b3IgPSAwLjAyIC8vIFlvdSBjYW4gYWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciB6b29tIHNlbnNpdGl2aXR5XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHBhcnNlRmxvYXQodGhpcy5kcmF3aW5nQ2FudmFzLnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKCdzY2FsZSgnLCAnJykucmVwbGFjZSgnKScsICcnKSkgfHwgMVxuICAgICAgICBsZXQgc2NhbGVcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlICsgem9vbUZhY3RvclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlIC0gem9vbUZhY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgc2NhbGUgZmFjdG9yXG4gICAgICAgIHRoaXMuZHJhd2luZ0NhbnZhcy5zY2FsZSA9IHNjYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoJ2RlZmF1bHQnKVxuICAgIGNvbnN0IGV4dGVuc2lvblBvb2wgPSBuZXcgRXh0ZW5zaW9uUG9vbCh0aGlzIGFzIHVua25vd24gYXMgSUFwcENvbnRhaW5lciwgdHJ1ZSlcbiAgICBTaGFyZWRDb25maWcuc2V0KEVYVEVOU0lPTl9QT09MLCBleHRlbnNpb25Qb29sKVxuICB9XG5cbiAgZ2V0TWVudUJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51QmFyXG4gIH1cbiAgZ2V0VG9vbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy50b29sQmFyXG4gIH1cbiAgZ2V0QWN0aW9uQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbkJhclxuICB9XG4gIGdldEhvcml6b250YWxSdWxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsUnVsZXJcbiAgfVxuICBnZXRWZXJ0aWNhbFJ1bGVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsUnVsZXJcbiAgfVxuICBnZXREcmF3aW5nVG9vbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmF3aW5nVG9vbEJhclxuICB9XG4gIGdldERyYXdpbmdDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhd2luZ0NhbnZhc1xuICB9XG4gIGdldENvbG9yUGFsZXR0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvclBhbGV0dGVcbiAgfVxuICBnZXRWZXJ0aWNhbFNjcm9sbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFNjcm9sbEJhclxuICB9XG4gIGdldEhvcml6b250YWxTY3JvbGxCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbFNjcm9sbEJhclxuICB9XG4gIGdldFN0YXR1c0JhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXNCYXJcbiAgfVxuICBnZXRDb25zb2xlQ2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNvbGVjYW52YXNcbiAgfVxuICBnZXRMZWZ0U2lkZUJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0U2lkZUJhclxuICB9XG4gIGdldFBhcnNlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJDb250YWluZXJcbiAgfVxuICBnZXRUYWJQYW5lKCkge1xuICAgIHJldHVybiB0aGlzLnRhYlBhbmVcbiAgfVxuICAvKiBnZXREZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlclxuICB9ICovXG4gIGdldENvbnRleHRNZW51KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGFpbmVyXG4iXX0=