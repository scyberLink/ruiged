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
const BaseExtension_1 = __importDefault(require("../../../../../extension/BaseExtension"));
const ExtensionDevelopment_1 = __importDefault(require("../../../../../extension/ExtensionDevelopment"));
const DrawingToolbarItem_1 = __importDefault(require("../sidebars/drawingtoolbar/DrawingToolbarItem"));
const customElementRegistration_1 = require("../../../../../customElementRegistration");
const ObjectManagerSelector_1 = __importDefault(require("../objectmanagerselector/ObjectManagerSelector"));
const DesignElement_1 = __importDefault(require("../../../design/DesignElement"));
const DesignElementTypes_1 = __importDefault(require("../../../common/DesignElementTypes"));
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
        this.REI = {
            BaseExtension: BaseExtension_1.default,
            ExtensionDevelopment: ExtensionDevelopment_1.default,
            ActionBar: ActionBar_1.default,
            BaseComponent: BaseComponent_1.default,
            ColorPalette: ColorPalette_1.default,
            DrawingCanvas: DrawingCanvas_1.default,
            DrawingToolBar: DrawingToolBar_1.default,
            DrawingToolbarItem: DrawingToolbarItem_1.default,
            HorizontalRuler: HorizontalRuler_1.default,
            HorizontalScrollBar: HorizontalScrollBar_1.default,
            MenuBar: MenuBar_1.default,
            ObjectManagerSelector: ObjectManagerSelector_1.default,
            StatusBar: StatusBar_1.default,
            ToolBar: ToolBar_1.default,
            VerticalRuler: VerticalRuler_1.default,
            VerticalScrollBar: VerticalScrollBar_1.default,
            ConsoleCanvas: ConsoleCanvas_1.default,
            LeftSideBar: LeftSideBar_1.default,
            TabPane: TabPane_1.default,
            ParserContainer: ParserContainer_1.default,
            ContextMenu: ContextMenu_1.default,
            register: customElementRegistration_1.register,
            registerElement: customElementRegistration_1.registerElement,
            AppContainer,
            DesignElement: DesignElement_1.default,
            DesignElementTypes: DesignElementTypes_1.default,
        };
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
        SharedConfig_1.default.set(constants_1.RUIG_EXTENSION_INTERFACE, this.REI);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUFnRTtBQUNoRSx1RUFBOEM7QUFDOUMsb0VBQTJDO0FBQzNDLGdGQUF1RDtBQUN2RCxtRkFBMEQ7QUFDMUQsK0ZBQXNFO0FBQ3RFLGdHQUF1RTtBQUN2RSxnSEFBdUY7QUFDdkYsaUVBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRix1RUFBOEM7QUFDOUMsaUVBQXdDO0FBQ3hDLDBGQUFpRTtBQUNqRSwwR0FBaUY7QUFDakYsbUZBQTBEO0FBQzFELHNGQUE2RDtBQUM3RCxpRUFBd0M7QUFDeEMseUVBQWdEO0FBQ2hELDZFQUFvRDtBQUNwRCxzRkFBNkQ7QUFDN0QsK0RBQXdIO0FBQ3hILHlFQUFnRDtBQUVoRCwyRkFBa0U7QUFDbEUsMkZBQWtFO0FBQ2xFLHlHQUFnRjtBQUNoRix1R0FBOEU7QUFDOUUsd0ZBQW9GO0FBQ3BGLDJHQUFrRjtBQUNsRixrRkFBeUQ7QUFDekQsNEZBQW1FO0FBRW5FLElBQUssU0E4Q0o7QUE5Q0QsV0FBSyxTQUFTO0lBQ1osc0JBQVMsQ0FBQTtJQUNULHlCQUFZLENBQUE7SUFDWiwrQkFBa0IsQ0FBQTtJQUNsQixnQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiwrQkFBa0IsQ0FBQTtJQUVsQixtQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBc0IsQ0FBQTtJQUV0QixxQ0FBd0IsQ0FBQTtJQUN4QixrQ0FBcUIsQ0FBQTtJQUVyQiwyQ0FBOEIsQ0FBQTtJQUM5Qix3Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBNEIsQ0FBQTtJQUU1Qix5Q0FBNEIsQ0FBQTtJQUM1Qix1Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBd0IsQ0FBQTtJQUV4Qix3Q0FBMkIsQ0FB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T0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQzdCLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDM0IsQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFDRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFDRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUE7SUFDL0IsQ0FBQztJQUNELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN2QixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFDRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQzdCLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFDRDs7UUFFSTtJQUNKLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDekIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR1cGxpY2F0ZS1lbnVtLXZhbHVlcyAqL1xuaW1wb3J0IEFjdGlvbkJhciBmcm9tICcuLi9hY3Rpb25iYXIvQWN0aW9uQmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuLi9jb2xvcnBhbGV0dGUvQ29sb3JQYWxldHRlJ1xuaW1wb3J0IERyYXdpbmdDYW52YXMgZnJvbSAnLi4vZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzJ1xuaW1wb3J0IERyYXdpbmdUb29sQmFyIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sQmFyJ1xuaW1wb3J0IEhvcml6b250YWxSdWxlciBmcm9tICcuLi9ydWxlcnMvaG9yaXpvbnRhbHJ1bGVyL0hvcml6b250YWxSdWxlcidcbmltcG9ydCBIb3Jpem9udGFsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvaG9yaXpvbnRhbHNjcm9sbGJhci9Ib3Jpem9udGFsU2Nyb2xsQmFyJ1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi4vbWVudWJhci9NZW51QmFyJ1xuLy9pbXBvcnQgT2JqZWN0TWFuYWdlclNlbGVjdG9yIGZyb20gJy4uL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uL3N0YXR1c2Jhci9TdGF0dXNCYXInXG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi90b29sYmFyL1Rvb2xCYXInXG5pbXBvcnQgVmVydGljYWxSdWxlciBmcm9tICcuLi9ydWxlcnMvdmVydGljYWxydWxlci9WZXJ0aWNhbFJ1bGVyJ1xuaW1wb3J0IFZlcnRpY2FsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvdmVydGljYWxzY3JvbGxiYXIvVmVydGljYWxTY3JvbGxCYXInXG5pbXBvcnQgQ29uc29sZUNhbnZhcyBmcm9tICcuLi9jb25zb2xlY2FudmFzL0NvbnNvbGVDYW52YXMnXG5pbXBvcnQgTGVmdFNpZGVCYXIgZnJvbSAnLi4vc2lkZWJhcnMvbGVmdHNpZGViYXIvTGVmdFNpZGVCYXInXG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuLi90YWJwYW5lL1RhYlBhbmUnXG5pbXBvcnQgUGFyc2VyQ29udGFpbmVyIGZyb20gJy4uL1BhcnNlckNvbnRhaW5lcidcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuLi9jb250ZXh0bWVudS9Db250ZXh0TWVudSdcbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IENPTlRFWFRfTUVOVSwgRFJBV0lOR19DQU5WQVMsIEVYVEVOU0lPTl9QT09MLCBSVUlHX0VYVEVOU0lPTl9JTlRFUkZBQ0UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi4vLi4vY29tbW9uL1NoYWRvd01vZGUnXG5pbXBvcnQgSUFwcENvbnRhaW5lciBmcm9tICcuL21vZGVsL0lBcHBDb250YWluZXInXG5pbXBvcnQgRXh0ZW5zaW9uUG9vbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vRXh0ZW5zaW9uUG9vbCdcbmltcG9ydCBCYXNlRXh0ZW5zaW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2V4dGVuc2lvbi9CYXNlRXh0ZW5zaW9uJ1xuaW1wb3J0IEV4dGVuc2lvbkRldmVsb3BtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2V4dGVuc2lvbi9FeHRlbnNpb25EZXZlbG9wbWVudCdcbmltcG9ydCBEcmF3aW5nVG9vbGJhckl0ZW0gZnJvbSAnLi4vc2lkZWJhcnMvZHJhd2luZ3Rvb2xiYXIvRHJhd2luZ1Rvb2xiYXJJdGVtJ1xuaW1wb3J0IHsgcmVnaXN0ZXIsIHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2N1c3RvbUVsZW1lbnRSZWdpc3RyYXRpb24nXG5pbXBvcnQgT2JqZWN0TWFuYWdlclNlbGVjdG9yIGZyb20gJy4uL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi8uLi8uLi9kZXNpZ24vRGVzaWduRWxlbWVudCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcblxuZW51bSBEaW1lbnNpb24ge1xuICB0b3AgPSAnMCcsXG4gIGJvdHRvbSA9ICcwJyxcbiAgZnVsbFdpZHRoID0gJzEwMCUnLFxuICBmdWxsSGVpZ2h0ID0gJzEwMCUnLFxuICBoYWxmV2lkdGggPSAnNTAlJyxcbiAgaGFsZkhlaWdodCA9ICc1MCUnLFxuXG4gIG1lbnViYXJIZWlnaHQgPSAnMjBweCcsXG4gIHRvb2xCYXJIZWlnaHQgPSAnMzBweCcsXG5cbiAgYWN0aW9uQmFySGVpZ2h0ID0gJzI5cHgnLFxuICBhY3Rpb25CYXJUb3AgPSAnNTBweCcsXG5cbiAgaG9yaXpvbnRhbFJ1bGVySGVpZ2h0ID0gJzEwcHgnLFxuICBob3Jpem9udGFsUnVsZXJUb3AgPSAnODBweCcsXG4gIGhvcml6b250YWxSdWxlckxlZnQgPSAnMzBweCcsXG5cbiAgZHJhd2luZ1Rvb2xCYXJXaWR0aCA9ICcyMHB4JyxcbiAgZHJhd2luZ1Rvb2xCYXJUb3AgPSAnODBweCcsXG4gIGRyYXdpbmdUb29sQmFyTGVmdCA9ICcwJyxcblxuICB2ZXJ0aWNhbFJ1bGVyV2lkdGggPSAnMTBweCcsXG4gIHZlcnRpY2FsUnVsZXJMZWZ0ID0gJzIwcHgnLFxuICB2ZXJ0aWNhbFJ1bGVyVG9wID0gJzkwcHgnLFxuXG4gIGRyYXdpbmdDYW52YXNXaWR0aCA9ICcxMDAlJyxcbiAgZHJhd2luZ0NhbnZhc0hlaWdodCA9ICcxMDAlJyxcbiAgZHJhd2luZ0NhbnZhc0xlZnQgPSAnMzBweCcsIC8vdmVydGljYWxSdWxlckxlZnQgKyB2ZXJ0aWNhbFJ1bGVyV2lkdGhcbiAgZHJhd2luZ0NhbnZhc1RvcCA9ICc5MHB4JyxcbiAgZHJhd2luZ0NhbnZhc0JvdHRvbSA9ICcyMHB4JyxcbiAgZHJhd2luZ0NhbnZhc1JpZ2h0ID0gJzIwcHgnLFxuXG4gIGNvbG9yUGFsZXR0ZVdpZHRoID0gJzIwcHgnLFxuICBjb2xvclBhbGV0dGVIZWlnaHQgPSAnMTAwJScsXG4gIGNvbG9yUGFsZXR0ZVJpZ2h0ID0gJzAnLFxuICBjb2xvclBhbGV0dGVUb3AgPSAnODBweCcsXG5cbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9yV2lkdGggPSAnMjBweCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvckhlaWdodCA9ICcyMHB4JyxcbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQgPSAnMCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSA9ICcyMHB4JyxcblxuICBzdGF0dXNCYXJXaWR0aCA9ICcxMDAlJyxcbiAgc3RhdHVzQmFySGVpZ2h0ID0gJzIwcHgnLFxuICBzdGF0dXNCYXJCb3R0b20gPSAnMCcsXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJQXBwQ29udGFpbmVyIHtcbiAgcHJpdmF0ZSBtZW51QmFyOiBNZW51QmFyID0gbmV3IE1lbnVCYXIoXG4gICAge1xuICAgICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgICBoZWlnaHQ6IERpbWVuc2lvbi5tZW51YmFySGVpZ2h0LFxuICAgICAgdG9wOiBEaW1lbnNpb24udG9wLFxuICAgIH0sXG4gICAgU2hhZG93TW9kZS5PUEVOLFxuICApXG5cbiAgcHJpdmF0ZSB0b29sQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFRvb2xCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLnRvb2xCYXJIZWlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24ubWVudWJhckhlaWdodCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgYWN0aW9uQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IEFjdGlvbkJhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uYWN0aW9uQmFySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmFjdGlvbkJhclRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgaG9yaXpvbnRhbFJ1bGVyOiBCYXNlQ29tcG9uZW50ID0gbmV3IEhvcml6b250YWxSdWxlcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uaG9yaXpvbnRhbFJ1bGVySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlclRvcCxcbiAgICBsZWZ0OiBEaW1lbnNpb24uaG9yaXpvbnRhbFJ1bGVyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgdmVydGljYWxSdWxlcjogQmFzZUNvbXBvbmVudCA9IG5ldyBWZXJ0aWNhbFJ1bGVyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLnZlcnRpY2FsUnVsZXJXaWR0aCxcbiAgICB0b3A6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyVG9wLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmZ1bGxIZWlnaHQsXG4gICAgbGVmdDogRGltZW5zaW9uLnZlcnRpY2FsUnVsZXJMZWZ0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBkcmF3aW5nVG9vbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBEcmF3aW5nVG9vbEJhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhcldpZHRoLFxuICAgIHRvcDogRGltZW5zaW9uLmRyYXdpbmdUb29sQmFyVG9wLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmZ1bGxIZWlnaHQsXG4gICAgbGVmdDogRGltZW5zaW9uLmRyYXdpbmdUb29sQmFyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgZHJhd2luZ0NhbnZhczogQmFzZUNvbXBvbmVudCA9IG5ldyBEcmF3aW5nQ2FudmFzKHtcbiAgICBsZWZ0OiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0xlZnQsXG4gICAgdG9wOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc1RvcCxcbiAgICBib3R0b206IERpbWVuc2lvbi5kcmF3aW5nQ2FudmFzQm90dG9tLFxuICAgIHJpZ2h0OiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc1JpZ2h0LFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGNvbG9yUGFsZXR0ZTogQmFzZUNvbXBvbmVudCA9IG5ldyBDb2xvclBhbGV0dGUoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uY29sb3JQYWxldHRlV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uY29sb3JQYWxldHRlSGVpZ2h0LFxuICAgIHJpZ2h0OiBEaW1lbnNpb24uY29sb3JQYWxldHRlUmlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24uY29sb3JQYWxldHRlVG9wLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgLyogIHByaXZhdGUgb2JqZWN0TWFuYWdlclNlbGVjdG9yOiBCYXNlQ29tcG9uZW50ID0gbmV3IE9iamVjdE1hbmFnZXJTZWxlY3Rvcih7XG4gICAgIHdpZHRoOiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yV2lkdGgsXG4gICAgIGhlaWdodDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvckhlaWdodCxcbiAgICAgcmlnaHQ6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JSaWdodCxcbiAgICAgYm90dG9tOiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yQm90dG9tLFxuICAgfSkgIGFzIEJhc2VDb21wb25lbnQqL1xuXG4gIHByaXZhdGUgdmVydGljYWxTY3JvbGxCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgVmVydGljYWxTY3JvbGxCYXIoKSBhcyBCYXNlQ29tcG9uZW50XG4gIHByaXZhdGUgaG9yaXpvbnRhbFNjcm9sbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBIb3Jpem9udGFsU2Nyb2xsQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgc3RhdHVzQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFN0YXR1c0Jhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5zdGF0dXNCYXJXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5zdGF0dXNCYXJIZWlnaHQsXG4gICAgYm90dG9tOiBEaW1lbnNpb24uc3RhdHVzQmFyQm90dG9tLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBjb25zb2xlY2FudmFzOiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbnNvbGVDYW52YXMoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIGJvdHRvbTogMCxcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGxlZnRTaWRlQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IExlZnRTaWRlQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIHBhcnNlckNvbnRhaW5lcjogQmFzZUNvbXBvbmVudCA9IG5ldyBQYXJzZXJDb250YWluZXIoKSBhcyBCYXNlQ29tcG9uZW50XG4gIHByaXZhdGUgdGFiUGFuZTogQmFzZUNvbXBvbmVudCA9IG5ldyBUYWJQYW5lKCkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIC8qIHByaXZhdGUgZGVzaWduRWxlbWVudFdyYXBwZXI6IElEZXNpZ25FbGVtZW50U2VsZWN0V3JhcHBlciA9XG4gICAgbmV3IERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyKCkgYXMgSURlc2lnbkVsZW1lbnRTZWxlY3RXcmFwcGVyXG4gKi9cbiAgY29udGV4dE1lbnU6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29udGV4dE1lbnUoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCBncmF5JyxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIFJFSSA9IHtcbiAgICBCYXNlRXh0ZW5zaW9uLFxuICAgIEV4dGVuc2lvbkRldmVsb3BtZW50LFxuICAgIEFjdGlvbkJhcixcbiAgICBCYXNlQ29tcG9uZW50LFxuICAgIENvbG9yUGFsZXR0ZSxcbiAgICBEcmF3aW5nQ2FudmFzLFxuICAgIERyYXdpbmdUb29sQmFyLFxuICAgIERyYXdpbmdUb29sYmFySXRlbSxcbiAgICBIb3Jpem9udGFsUnVsZXIsXG4gICAgSG9yaXpvbnRhbFNjcm9sbEJhcixcbiAgICBNZW51QmFyLFxuICAgIE9iamVjdE1hbmFnZXJTZWxlY3RvcixcbiAgICBTdGF0dXNCYXIsXG4gICAgVG9vbEJhcixcbiAgICBWZXJ0aWNhbFJ1bGVyLFxuICAgIFZlcnRpY2FsU2Nyb2xsQmFyLFxuICAgIENvbnNvbGVDYW52YXMsXG4gICAgTGVmdFNpZGVCYXIsXG4gICAgVGFiUGFuZSxcbiAgICBQYXJzZXJDb250YWluZXIsXG4gICAgQ29udGV4dE1lbnUsXG4gICAgcmVnaXN0ZXIsXG4gICAgcmVnaXN0ZXJFbGVtZW50LFxuICAgIEFwcENvbnRhaW5lcixcbiAgICBEZXNpZ25FbGVtZW50LFxuICAgIERlc2lnbkVsZW1lbnRUeXBlcyxcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKiAgICBzcHJlYWRUbyh0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyLnN0eWxlLCB7XG4gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxuICAgICAgIH0pICovXG5cbiAgICAvL1NoYXJlZENvbmZpZy5zZXQoREVTSUdOX0VMRU1FTlRfV1JBUFBFUiwgdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlcilcbiAgICBTaGFyZWRDb25maWcuc2V0KENPTlRFWFRfTUVOVSwgdGhpcy5jb250ZXh0TWVudSlcbiAgICBTaGFyZWRDb25maWcuc2V0KERSQVdJTkdfQ0FOVkFTLCB0aGlzLmRyYXdpbmdDYW52YXMpXG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKFxuICAgICAgdGhpcy5tZW51QmFyLFxuICAgICAgdGhpcy50b29sQmFyLFxuICAgICAgdGhpcy5hY3Rpb25CYXIsXG4gICAgICB0aGlzLnRhYlBhbmUsXG4gICAgICB0aGlzLmhvcml6b250YWxSdWxlcixcbiAgICAgIHRoaXMuZHJhd2luZ1Rvb2xCYXIsXG4gICAgICB0aGlzLnZlcnRpY2FsUnVsZXIsXG4gICAgICB0aGlzLmRyYXdpbmdDYW52YXMsXG4gICAgICB0aGlzLmNvbG9yUGFsZXR0ZSxcbiAgICAgIC8vdGhpcy5vYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5zdGF0dXNCYXIsXG4gICAgICB0aGlzLmNvbnNvbGVjYW52YXMsXG4gICAgICB0aGlzLmxlZnRTaWRlQmFyLFxuICAgICAgdGhpcy5wYXJzZXJDb250YWluZXIsXG4gICAgKVxuICAgIHRoaXMubWVudUJhci5kaXNhYmxlZCA9IHRydWVcblxuICAgIHdpbmRvdy5vbndoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiBDdHJsIGtleSBpcyBwcmVzc2VkXG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgc2NhbGUgZmFjdG9yIGJhc2VkIG9uIHRoZSB3aGVlbCBkZWx0YVxuXG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZXG4gICAgICAgIGNvbnN0IHpvb21GYWN0b3IgPSAwLjAyIC8vIFlvdSBjYW4gYWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciB6b29tIHNlbnNpdGl2aXR5XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHBhcnNlRmxvYXQodGhpcy5kcmF3aW5nQ2FudmFzLnN0eWxlLnRyYW5zZm9ybS5yZXBsYWNlKCdzY2FsZSgnLCAnJykucmVwbGFjZSgnKScsICcnKSkgfHwgMVxuICAgICAgICBsZXQgc2NhbGVcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlICsgem9vbUZhY3RvclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlID0gY3VycmVudFNjYWxlIC0gem9vbUZhY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgc2NhbGUgZmFjdG9yXG4gICAgICAgIHRoaXMuZHJhd2luZ0NhbnZhcy5zY2FsZSA9IHNjYWxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoJ2RlZmF1bHQnKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoUlVJR19FWFRFTlNJT05fSU5URVJGQUNFLCB0aGlzLlJFSSlcbiAgICBjb25zdCBleHRlbnNpb25Qb29sID0gbmV3IEV4dGVuc2lvblBvb2wodGhpcyBhcyB1bmtub3duIGFzIElBcHBDb250YWluZXIsIHRydWUpXG4gICAgU2hhcmVkQ29uZmlnLnNldChFWFRFTlNJT05fUE9PTCwgZXh0ZW5zaW9uUG9vbClcbiAgfVxuXG4gIGdldE1lbnVCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudUJhclxuICB9XG4gIGdldFRvb2xCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbEJhclxuICB9XG4gIGdldEFjdGlvbkJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25CYXJcbiAgfVxuICBnZXRIb3Jpem9udGFsUnVsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbFJ1bGVyXG4gIH1cbiAgZ2V0VmVydGljYWxSdWxlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFJ1bGVyXG4gIH1cbiAgZ2V0RHJhd2luZ1Rvb2xCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhd2luZ1Rvb2xCYXJcbiAgfVxuICBnZXREcmF3aW5nQ2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdDYW52YXNcbiAgfVxuICBnZXRDb2xvclBhbGV0dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JQYWxldHRlXG4gIH1cbiAgZ2V0VmVydGljYWxTY3JvbGxCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxTY3JvbGxCYXJcbiAgfVxuICBnZXRIb3Jpem9udGFsU2Nyb2xsQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxTY3JvbGxCYXJcbiAgfVxuICBnZXRTdGF0dXNCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQmFyXG4gIH1cbiAgZ2V0Q29uc29sZUNhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zb2xlY2FudmFzXG4gIH1cbiAgZ2V0TGVmdFNpZGVCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFNpZGVCYXJcbiAgfVxuICBnZXRQYXJzZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29udGFpbmVyXG4gIH1cbiAgZ2V0VGFiUGFuZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJQYW5lXG4gIH1cbiAgLyogZ2V0RGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXJcbiAgfSAqL1xuICBnZXRDb250ZXh0TWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRhaW5lclxuIl19