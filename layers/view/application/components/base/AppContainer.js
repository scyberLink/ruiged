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
const DesignElementTypes_1 = __importDefault(require("../../../common/DesignElementTypes"));
const DesignElement_1 = __importDefault(require("../../../design/base/DesignElement"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUFnRTtBQUNoRSx1RUFBOEM7QUFDOUMsb0VBQTJDO0FBQzNDLGdGQUF1RDtBQUN2RCxtRkFBMEQ7QUFDMUQsK0ZBQXNFO0FBQ3RFLGdHQUF1RTtBQUN2RSxnSEFBdUY7QUFDdkYsaUVBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRix1RUFBOEM7QUFDOUMsaUVBQXdDO0FBQ3hDLDBGQUFpRTtBQUNqRSwwR0FBaUY7QUFDakYsbUZBQTBEO0FBQzFELHNGQUE2RDtBQUM3RCxpRUFBd0M7QUFDeEMseUVBQWdEO0FBQ2hELDZFQUFvRDtBQUNwRCxzRkFBNkQ7QUFDN0QsK0RBQXdIO0FBQ3hILHlFQUFnRDtBQUVoRCwyRkFBa0U7QUFDbEUsMkZBQWtFO0FBQ2xFLHlHQUFnRjtBQUNoRix1R0FBOEU7QUFDOUUsd0ZBQW9GO0FBQ3BGLDJHQUFrRjtBQUVsRiw0RkFBbUU7QUFDbkUsdUZBQThEO0FBRTlELElBQUssU0E4Q0o7QUE5Q0QsV0FBSyxTQUFTO0lBQ1osc0JBQVMsQ0FBQTtJQUNULHlCQUFZLENBQUE7SUFDWiwrQkFBa0IsQ0FBQTtJQUNsQixnQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiwrQkFBa0IsQ0FBQTtJQUVsQixtQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBc0IsQ0FBQTtJQUV0QixxQ0FBd0IsQ0FBQTtJQUN4QixrQ0FBcUIsQ0FBQTtJQUVyQiwyQ0FBOEIsQ0FBQTtJQUM5Qix3Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBNEIsQ0FBQTtJQUU1Qix5Q0FBNEIsQ0FBQTtJQUM1Qix1Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBd0IsQ0FBQTtJQUV4Qix3Q0FBMkIsQ0FB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SUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0Q7O1FBRUk7SUFDSixjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFlBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1kdXBsaWNhdGUtZW51bS12YWx1ZXMgKi9cbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vYWN0aW9uYmFyL0FjdGlvbkJhcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vQmFzZUNvbXBvbmVudCdcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSAnLi4vY29sb3JwYWxldHRlL0NvbG9yUGFsZXR0ZSdcbmltcG9ydCBEcmF3aW5nQ2FudmFzIGZyb20gJy4uL2RyYXdpbmdjYW52YXMvRHJhd2luZ0NhbnZhcydcbmltcG9ydCBEcmF3aW5nVG9vbEJhciBmcm9tICcuLi9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbEJhcidcbmltcG9ydCBIb3Jpem9udGFsUnVsZXIgZnJvbSAnLi4vcnVsZXJzL2hvcml6b250YWxydWxlci9Ib3Jpem9udGFsUnVsZXInXG5pbXBvcnQgSG9yaXpvbnRhbFNjcm9sbEJhciBmcm9tICcuLi9zY3JvbGxiYXJzL2hvcml6b250YWxzY3JvbGxiYXIvSG9yaXpvbnRhbFNjcm9sbEJhcidcbmltcG9ydCBNZW51QmFyIGZyb20gJy4uL21lbnViYXIvTWVudUJhcidcbi8vaW1wb3J0IE9iamVjdE1hbmFnZXJTZWxlY3RvciBmcm9tICcuLi9vYmplY3RtYW5hZ2Vyc2VsZWN0b3IvT2JqZWN0TWFuYWdlclNlbGVjdG9yJ1xuaW1wb3J0IFN0YXR1c0JhciBmcm9tICcuLi9zdGF0dXNiYXIvU3RhdHVzQmFyJ1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vdG9vbGJhci9Ub29sQmFyJ1xuaW1wb3J0IFZlcnRpY2FsUnVsZXIgZnJvbSAnLi4vcnVsZXJzL3ZlcnRpY2FscnVsZXIvVmVydGljYWxSdWxlcidcbmltcG9ydCBWZXJ0aWNhbFNjcm9sbEJhciBmcm9tICcuLi9zY3JvbGxiYXJzL3ZlcnRpY2Fsc2Nyb2xsYmFyL1ZlcnRpY2FsU2Nyb2xsQmFyJ1xuaW1wb3J0IENvbnNvbGVDYW52YXMgZnJvbSAnLi4vY29uc29sZWNhbnZhcy9Db25zb2xlQ2FudmFzJ1xuaW1wb3J0IExlZnRTaWRlQmFyIGZyb20gJy4uL3NpZGViYXJzL2xlZnRzaWRlYmFyL0xlZnRTaWRlQmFyJ1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi4vdGFicGFuZS9UYWJQYW5lJ1xuaW1wb3J0IFBhcnNlckNvbnRhaW5lciBmcm9tICcuLi9QYXJzZXJDb250YWluZXInXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi4vY29udGV4dG1lbnUvQ29udGV4dE1lbnUnXG5pbXBvcnQgU2hhcmVkQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9TaGFyZWRDb25maWcnXG5pbXBvcnQgeyBDT05URVhUX01FTlUsIERSQVdJTkdfQ0FOVkFTLCBFWFRFTlNJT05fUE9PTCwgUlVJR19FWFRFTlNJT05fSU5URVJGQUNFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4uLy4uL2NvbW1vbi9TaGFkb3dNb2RlJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi9tb2RlbC9JQXBwQ29udGFpbmVyJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXh0ZW5zaW9uL0V4dGVuc2lvblBvb2wnXG5pbXBvcnQgQmFzZUV4dGVuc2lvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vQmFzZUV4dGVuc2lvbidcbmltcG9ydCBFeHRlbnNpb25EZXZlbG9wbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vRXh0ZW5zaW9uRGV2ZWxvcG1lbnQnXG5pbXBvcnQgRHJhd2luZ1Rvb2xiYXJJdGVtIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sYmFySXRlbSdcbmltcG9ydCB7IHJlZ2lzdGVyLCByZWdpc3RlckVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jdXN0b21FbGVtZW50UmVnaXN0cmF0aW9uJ1xuaW1wb3J0IE9iamVjdE1hbmFnZXJTZWxlY3RvciBmcm9tICcuLi9vYmplY3RtYW5hZ2Vyc2VsZWN0b3IvT2JqZWN0TWFuYWdlclNlbGVjdG9yJ1xuaW1wb3J0IElEcmF3aW5nQ2FudmFzIGZyb20gJy4vbW9kZWwvSURyYXdpbmdDYW52YXMnXG5pbXBvcnQgRGVzaWduRWxlbWVudFR5cGVzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9EZXNpZ25FbGVtZW50VHlwZXMnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi8uLi8uLi9kZXNpZ24vYmFzZS9EZXNpZ25FbGVtZW50J1xuXG5lbnVtIERpbWVuc2lvbiB7XG4gIHRvcCA9ICcwJyxcbiAgYm90dG9tID0gJzAnLFxuICBmdWxsV2lkdGggPSAnMTAwJScsXG4gIGZ1bGxIZWlnaHQgPSAnMTAwJScsXG4gIGhhbGZXaWR0aCA9ICc1MCUnLFxuICBoYWxmSGVpZ2h0ID0gJzUwJScsXG5cbiAgbWVudWJhckhlaWdodCA9ICcyMHB4JyxcbiAgdG9vbEJhckhlaWdodCA9ICczMHB4JyxcblxuICBhY3Rpb25CYXJIZWlnaHQgPSAnMjlweCcsXG4gIGFjdGlvbkJhclRvcCA9ICc1MHB4JyxcblxuICBob3Jpem9udGFsUnVsZXJIZWlnaHQgPSAnMTBweCcsXG4gIGhvcml6b250YWxSdWxlclRvcCA9ICc4MHB4JyxcbiAgaG9yaXpvbnRhbFJ1bGVyTGVmdCA9ICczMHB4JyxcblxuICBkcmF3aW5nVG9vbEJhcldpZHRoID0gJzIwcHgnLFxuICBkcmF3aW5nVG9vbEJhclRvcCA9ICc4MHB4JyxcbiAgZHJhd2luZ1Rvb2xCYXJMZWZ0ID0gJzAnLFxuXG4gIHZlcnRpY2FsUnVsZXJXaWR0aCA9ICcxMHB4JyxcbiAgdmVydGljYWxSdWxlckxlZnQgPSAnMjBweCcsXG4gIHZlcnRpY2FsUnVsZXJUb3AgPSAnOTBweCcsXG5cbiAgZHJhd2luZ0NhbnZhc1dpZHRoID0gJzEwMCUnLFxuICBkcmF3aW5nQ2FudmFzSGVpZ2h0ID0gJzEwMCUnLFxuICBkcmF3aW5nQ2FudmFzTGVmdCA9ICczMHB4JywgLy92ZXJ0aWNhbFJ1bGVyTGVmdCArIHZlcnRpY2FsUnVsZXJXaWR0aFxuICBkcmF3aW5nQ2FudmFzVG9wID0gJzkwcHgnLFxuICBkcmF3aW5nQ2FudmFzQm90dG9tID0gJzIwcHgnLFxuICBkcmF3aW5nQ2FudmFzUmlnaHQgPSAnMjBweCcsXG5cbiAgY29sb3JQYWxldHRlV2lkdGggPSAnMjBweCcsXG4gIGNvbG9yUGFsZXR0ZUhlaWdodCA9ICcxMDAlJyxcbiAgY29sb3JQYWxldHRlUmlnaHQgPSAnMCcsXG4gIGNvbG9yUGFsZXR0ZVRvcCA9ICc4MHB4JyxcblxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JXaWR0aCA9ICcyMHB4JyxcbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9ySGVpZ2h0ID0gJzIwcHgnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JSaWdodCA9ICcwJyxcbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9yQm90dG9tID0gJzIwcHgnLFxuXG4gIHN0YXR1c0JhcldpZHRoID0gJzEwMCUnLFxuICBzdGF0dXNCYXJIZWlnaHQgPSAnMjBweCcsXG4gIHN0YXR1c0JhckJvdHRvbSA9ICcwJyxcbn1cblxuY2xhc3MgQXBwQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElBcHBDb250YWluZXIge1xuICBwcml2YXRlIG1lbnVCYXI6IE1lbnVCYXIgPSBuZXcgTWVudUJhcihcbiAgICB7XG4gICAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICAgIGhlaWdodDogRGltZW5zaW9uLm1lbnViYXJIZWlnaHQsXG4gICAgICB0b3A6IERpbWVuc2lvbi50b3AsXG4gICAgfSxcbiAgICBTaGFkb3dNb2RlLk9QRU4sXG4gIClcblxuICBwcml2YXRlIHRvb2xCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgVG9vbEJhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24udG9vbEJhckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5tZW51YmFySGVpZ2h0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBhY3Rpb25CYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgQWN0aW9uQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5hY3Rpb25CYXJIZWlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24uYWN0aW9uQmFyVG9wLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBob3Jpem9udGFsUnVsZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFJ1bGVyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJIZWlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24uaG9yaXpvbnRhbFJ1bGVyVG9wLFxuICAgIGxlZnQ6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJMZWZ0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFJ1bGVyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsUnVsZXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24udmVydGljYWxSdWxlcldpZHRoLFxuICAgIHRvcDogRGltZW5zaW9uLnZlcnRpY2FsUnVsZXJUb3AsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uZnVsbEhlaWdodCxcbiAgICBsZWZ0OiBEaW1lbnNpb24udmVydGljYWxSdWxlckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGRyYXdpbmdUb29sQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IERyYXdpbmdUb29sQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmRyYXdpbmdUb29sQmFyV2lkdGgsXG4gICAgdG9wOiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJUb3AsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uZnVsbEhlaWdodCxcbiAgICBsZWZ0OiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJMZWZ0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBkcmF3aW5nQ2FudmFzOiBJRHJhd2luZ0NhbnZhcyA9IG5ldyBEcmF3aW5nQ2FudmFzKHtcbiAgICBsZWZ0OiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0xlZnQsXG4gICAgdG9wOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc1RvcCxcbiAgICBib3R0b206IERpbWVuc2lvbi5kcmF3aW5nQ2FudmFzQm90dG9tLFxuICAgIHJpZ2h0OiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc1JpZ2h0LFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gIH0pIGFzIElEcmF3aW5nQ2FudmFzXG5cbiAgcHJpdmF0ZSBjb2xvclBhbGV0dGU6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29sb3JQYWxldHRlKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZUhlaWdodCxcbiAgICByaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVJpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIC8qICBwcml2YXRlIG9iamVjdE1hbmFnZXJTZWxlY3RvcjogQmFzZUNvbXBvbmVudCA9IG5ldyBPYmplY3RNYW5hZ2VyU2VsZWN0b3Ioe1xuICAgICB3aWR0aDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoLFxuICAgICBoZWlnaHQ6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQsXG4gICAgIHJpZ2h0OiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQsXG4gICAgIGJvdHRvbTogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSxcbiAgIH0pICBhcyBCYXNlQ29tcG9uZW50Ki9cblxuICBwcml2YXRlIHZlcnRpY2FsU2Nyb2xsQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsU2Nyb2xsQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFNjcm9sbEJhcigpIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHN0YXR1c0JhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBTdGF0dXNCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uc3RhdHVzQmFyV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uc3RhdHVzQmFySGVpZ2h0LFxuICAgIGJvdHRvbTogRGltZW5zaW9uLnN0YXR1c0JhckJvdHRvbSxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgY29uc29sZWNhbnZhczogQmFzZUNvbXBvbmVudCA9IG5ldyBDb25zb2xlQ2FudmFzKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBib3R0b206IDAsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBsZWZ0U2lkZUJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBMZWZ0U2lkZUJhcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSBwYXJzZXJDb250YWluZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgUGFyc2VyQ29udGFpbmVyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIHRhYlBhbmU6IEJhc2VDb21wb25lbnQgPSBuZXcgVGFiUGFuZSgpIGFzIEJhc2VDb21wb25lbnRcblxuICAvKiBwcml2YXRlIGRlc2lnbkVsZW1lbnRXcmFwcGVyOiBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIgPVxuICAgIG5ldyBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIGFzIElEZXNpZ25FbGVtZW50U2VsZWN0V3JhcHBlclxuICovXG4gIGNvbnRleHRNZW51OiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbnRleHRNZW51KHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcwJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgZ3JheScsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBSRUkgPSB7XG4gICAgQmFzZUV4dGVuc2lvbixcbiAgICBFeHRlbnNpb25EZXZlbG9wbWVudCxcbiAgICBBY3Rpb25CYXIsXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBDb2xvclBhbGV0dGUsXG4gICAgRHJhd2luZ0NhbnZhcyxcbiAgICBEcmF3aW5nVG9vbEJhcixcbiAgICBEcmF3aW5nVG9vbGJhckl0ZW0sXG4gICAgSG9yaXpvbnRhbFJ1bGVyLFxuICAgIEhvcml6b250YWxTY3JvbGxCYXIsXG4gICAgTWVudUJhcixcbiAgICBPYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgU3RhdHVzQmFyLFxuICAgIFRvb2xCYXIsXG4gICAgVmVydGljYWxSdWxlcixcbiAgICBWZXJ0aWNhbFNjcm9sbEJhcixcbiAgICBDb25zb2xlQ2FudmFzLFxuICAgIExlZnRTaWRlQmFyLFxuICAgIFRhYlBhbmUsXG4gICAgUGFyc2VyQ29udGFpbmVyLFxuICAgIENvbnRleHRNZW51LFxuICAgIHJlZ2lzdGVyLFxuICAgIHJlZ2lzdGVyRWxlbWVudCxcbiAgICBBcHBDb250YWluZXIsXG4gICAgRGVzaWduRWxlbWVudCxcbiAgICBEZXNpZ25FbGVtZW50VHlwZXMsXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICAvKiAgICBzcHJlYWRUbyh0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyLnN0eWxlLCB7XG4gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLFxuICAgICAgIH0pICovXG5cbiAgICAvL1NoYXJlZENvbmZpZy5zZXQoREVTSUdOX0VMRU1FTlRfV1JBUFBFUiwgdGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlcilcbiAgICBTaGFyZWRDb25maWcuc2V0KENPTlRFWFRfTUVOVSwgdGhpcy5jb250ZXh0TWVudSlcbiAgICBTaGFyZWRDb25maWcuc2V0KERSQVdJTkdfQ0FOVkFTLCB0aGlzLmRyYXdpbmdDYW52YXMpXG5cbiAgICB0aGlzLmFwcGVuZENoaWxkcmVuKFxuICAgICAgdGhpcy5tZW51QmFyLFxuICAgICAgdGhpcy50b29sQmFyLFxuICAgICAgdGhpcy5hY3Rpb25CYXIsXG4gICAgICB0aGlzLnRhYlBhbmUsXG4gICAgICB0aGlzLmhvcml6b250YWxSdWxlcixcbiAgICAgIHRoaXMuZHJhd2luZ1Rvb2xCYXIsXG4gICAgICB0aGlzLnZlcnRpY2FsUnVsZXIsXG4gICAgICB0aGlzLmRyYXdpbmdDYW52YXMsXG4gICAgICB0aGlzLmNvbG9yUGFsZXR0ZSxcbiAgICAgIC8vdGhpcy5vYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsQmFyLFxuICAgICAgdGhpcy5zdGF0dXNCYXIsXG4gICAgICB0aGlzLmNvbnNvbGVjYW52YXMsXG4gICAgICB0aGlzLmxlZnRTaWRlQmFyLFxuICAgICAgdGhpcy5wYXJzZXJDb250YWluZXIsXG4gICAgKVxuICAgIHRoaXMubWVudUJhci5kaXNhYmxlZCA9IHRydWVcblxuICAgIHRoaXMuc2V0Q3Vyc29yKCdkZWZhdWx0JylcbiAgICBTaGFyZWRDb25maWcuc2V0KFJVSUdfRVhURU5TSU9OX0lOVEVSRkFDRSwgdGhpcy5SRUkpXG4gICAgY29uc3QgZXh0ZW5zaW9uUG9vbCA9IG5ldyBFeHRlbnNpb25Qb29sKHRoaXMgYXMgdW5rbm93biBhcyBJQXBwQ29udGFpbmVyLCB0cnVlKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoRVhURU5TSU9OX1BPT0wsIGV4dGVuc2lvblBvb2wpXG4gIH1cblxuICBnZXRNZW51QmFyKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVCYXJcbiAgfVxuICBnZXRUb29sQmFyKCkge1xuICAgIHJldHVybiB0aGlzLnRvb2xCYXJcbiAgfVxuICBnZXRBY3Rpb25CYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uQmFyXG4gIH1cbiAgZ2V0SG9yaXpvbnRhbFJ1bGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxSdWxlclxuICB9XG4gIGdldFZlcnRpY2FsUnVsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxSdWxlclxuICB9XG4gIGdldERyYXdpbmdUb29sQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdUb29sQmFyXG4gIH1cbiAgZ2V0RHJhd2luZ0NhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmF3aW5nQ2FudmFzXG4gIH1cbiAgZ2V0Q29sb3JQYWxldHRlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG9yUGFsZXR0ZVxuICB9XG4gIGdldFZlcnRpY2FsU2Nyb2xsQmFyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyXG4gIH1cbiAgZ2V0SG9yaXpvbnRhbFNjcm9sbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsU2Nyb2xsQmFyXG4gIH1cbiAgZ2V0U3RhdHVzQmFyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c0JhclxuICB9XG4gIGdldENvbnNvbGVDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZWNhbnZhc1xuICB9XG4gIGdldExlZnRTaWRlQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRTaWRlQmFyXG4gIH1cbiAgZ2V0UGFyc2VyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbnRhaW5lclxuICB9XG4gIGdldFRhYlBhbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFiUGFuZVxuICB9XG4gIC8qIGdldERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyXG4gIH0gKi9cbiAgZ2V0Q29udGV4dE1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXJcbiJdfQ==