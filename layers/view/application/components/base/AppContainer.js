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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUFnRTtBQUNoRSx1RUFBOEM7QUFDOUMsb0VBQTJDO0FBQzNDLGdGQUF1RDtBQUN2RCxtRkFBMEQ7QUFDMUQsK0ZBQXNFO0FBQ3RFLGdHQUF1RTtBQUN2RSxnSEFBdUY7QUFDdkYsaUVBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRix1RUFBOEM7QUFDOUMsaUVBQXdDO0FBQ3hDLDBGQUFpRTtBQUNqRSwwR0FBaUY7QUFDakYsbUZBQTBEO0FBQzFELHNGQUE2RDtBQUM3RCxpRUFBd0M7QUFDeEMseUVBQWdEO0FBQ2hELDZFQUFvRDtBQUNwRCxzRkFBNkQ7QUFDN0QsK0RBQXdIO0FBQ3hILHlFQUFnRDtBQUVoRCwyRkFBa0U7QUFDbEUsMkZBQWtFO0FBQ2xFLHlHQUFnRjtBQUNoRix1R0FBOEU7QUFDOUUsd0ZBQW9GO0FBQ3BGLDJHQUFrRjtBQUNsRixrRkFBeUQ7QUFDekQsNEZBQW1FO0FBR25FLElBQUssU0E4Q0o7QUE5Q0QsV0FBSyxTQUFTO0lBQ1osc0JBQVMsQ0FBQTtJQUNULHlCQUFZLENBQUE7SUFDWiwrQkFBa0IsQ0FBQTtJQUNsQixnQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiwrQkFBa0IsQ0FBQTtJQUVsQixtQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBc0IsQ0FBQTtJQUV0QixxQ0FBd0IsQ0FBQTtJQUN4QixrQ0FBcUIsQ0FBQTtJQUVyQiwyQ0FBOEIsQ0FBQTtJQUM5Qix3Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBNEIsQ0FBQTtJQUU1Qix5Q0FBNEIsQ0FBQTtJQUM1Qix1Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBd0IsQ0FBQTtJQUV4Qix3Q0FBMkIsQ0FB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SUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0Q7O1FBRUk7SUFDSixjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFlBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1kdXBsaWNhdGUtZW51bS12YWx1ZXMgKi9cbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vYWN0aW9uYmFyL0FjdGlvbkJhcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vQmFzZUNvbXBvbmVudCdcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSAnLi4vY29sb3JwYWxldHRlL0NvbG9yUGFsZXR0ZSdcbmltcG9ydCBEcmF3aW5nQ2FudmFzIGZyb20gJy4uL2RyYXdpbmdjYW52YXMvRHJhd2luZ0NhbnZhcydcbmltcG9ydCBEcmF3aW5nVG9vbEJhciBmcm9tICcuLi9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbEJhcidcbmltcG9ydCBIb3Jpem9udGFsUnVsZXIgZnJvbSAnLi4vcnVsZXJzL2hvcml6b250YWxydWxlci9Ib3Jpem9udGFsUnVsZXInXG5pbXBvcnQgSG9yaXpvbnRhbFNjcm9sbEJhciBmcm9tICcuLi9zY3JvbGxiYXJzL2hvcml6b250YWxzY3JvbGxiYXIvSG9yaXpvbnRhbFNjcm9sbEJhcidcbmltcG9ydCBNZW51QmFyIGZyb20gJy4uL21lbnViYXIvTWVudUJhcidcbi8vaW1wb3J0IE9iamVjdE1hbmFnZXJTZWxlY3RvciBmcm9tICcuLi9vYmplY3RtYW5hZ2Vyc2VsZWN0b3IvT2JqZWN0TWFuYWdlclNlbGVjdG9yJ1xuaW1wb3J0IFN0YXR1c0JhciBmcm9tICcuLi9zdGF0dXNiYXIvU3RhdHVzQmFyJ1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vdG9vbGJhci9Ub29sQmFyJ1xuaW1wb3J0IFZlcnRpY2FsUnVsZXIgZnJvbSAnLi4vcnVsZXJzL3ZlcnRpY2FscnVsZXIvVmVydGljYWxSdWxlcidcbmltcG9ydCBWZXJ0aWNhbFNjcm9sbEJhciBmcm9tICcuLi9zY3JvbGxiYXJzL3ZlcnRpY2Fsc2Nyb2xsYmFyL1ZlcnRpY2FsU2Nyb2xsQmFyJ1xuaW1wb3J0IENvbnNvbGVDYW52YXMgZnJvbSAnLi4vY29uc29sZWNhbnZhcy9Db25zb2xlQ2FudmFzJ1xuaW1wb3J0IExlZnRTaWRlQmFyIGZyb20gJy4uL3NpZGViYXJzL2xlZnRzaWRlYmFyL0xlZnRTaWRlQmFyJ1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi4vdGFicGFuZS9UYWJQYW5lJ1xuaW1wb3J0IFBhcnNlckNvbnRhaW5lciBmcm9tICcuLi9QYXJzZXJDb250YWluZXInXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi4vY29udGV4dG1lbnUvQ29udGV4dE1lbnUnXG5pbXBvcnQgU2hhcmVkQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9TaGFyZWRDb25maWcnXG5pbXBvcnQgeyBDT05URVhUX01FTlUsIERSQVdJTkdfQ0FOVkFTLCBFWFRFTlNJT05fUE9PTCwgUlVJR19FWFRFTlNJT05fSU5URVJGQUNFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4uLy4uL2NvbW1vbi9TaGFkb3dNb2RlJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi9tb2RlbC9JQXBwQ29udGFpbmVyJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXh0ZW5zaW9uL0V4dGVuc2lvblBvb2wnXG5pbXBvcnQgQmFzZUV4dGVuc2lvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vQmFzZUV4dGVuc2lvbidcbmltcG9ydCBFeHRlbnNpb25EZXZlbG9wbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vRXh0ZW5zaW9uRGV2ZWxvcG1lbnQnXG5pbXBvcnQgRHJhd2luZ1Rvb2xiYXJJdGVtIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sYmFySXRlbSdcbmltcG9ydCB7IHJlZ2lzdGVyLCByZWdpc3RlckVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jdXN0b21FbGVtZW50UmVnaXN0cmF0aW9uJ1xuaW1wb3J0IE9iamVjdE1hbmFnZXJTZWxlY3RvciBmcm9tICcuLi9vYmplY3RtYW5hZ2Vyc2VsZWN0b3IvT2JqZWN0TWFuYWdlclNlbGVjdG9yJ1xuaW1wb3J0IERlc2lnbkVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vZGVzaWduL0Rlc2lnbkVsZW1lbnQnXG5pbXBvcnQgRGVzaWduRWxlbWVudFR5cGVzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9EZXNpZ25FbGVtZW50VHlwZXMnXG5pbXBvcnQgSURyYXdpbmdDYW52YXMgZnJvbSAnLi9tb2RlbC9JRHJhd2luZ0NhbnZhcydcblxuZW51bSBEaW1lbnNpb24ge1xuICB0b3AgPSAnMCcsXG4gIGJvdHRvbSA9ICcwJyxcbiAgZnVsbFdpZHRoID0gJzEwMCUnLFxuICBmdWxsSGVpZ2h0ID0gJzEwMCUnLFxuICBoYWxmV2lkdGggPSAnNTAlJyxcbiAgaGFsZkhlaWdodCA9ICc1MCUnLFxuXG4gIG1lbnViYXJIZWlnaHQgPSAnMjBweCcsXG4gIHRvb2xCYXJIZWlnaHQgPSAnMzBweCcsXG5cbiAgYWN0aW9uQmFySGVpZ2h0ID0gJzI5cHgnLFxuICBhY3Rpb25CYXJUb3AgPSAnNTBweCcsXG5cbiAgaG9yaXpvbnRhbFJ1bGVySGVpZ2h0ID0gJzEwcHgnLFxuICBob3Jpem9udGFsUnVsZXJUb3AgPSAnODBweCcsXG4gIGhvcml6b250YWxSdWxlckxlZnQgPSAnMzBweCcsXG5cbiAgZHJhd2luZ1Rvb2xCYXJXaWR0aCA9ICcyMHB4JyxcbiAgZHJhd2luZ1Rvb2xCYXJUb3AgPSAnODBweCcsXG4gIGRyYXdpbmdUb29sQmFyTGVmdCA9ICcwJyxcblxuICB2ZXJ0aWNhbFJ1bGVyV2lkdGggPSAnMTBweCcsXG4gIHZlcnRpY2FsUnVsZXJMZWZ0ID0gJzIwcHgnLFxuICB2ZXJ0aWNhbFJ1bGVyVG9wID0gJzkwcHgnLFxuXG4gIGRyYXdpbmdDYW52YXNXaWR0aCA9ICcxMDAlJyxcbiAgZHJhd2luZ0NhbnZhc0hlaWdodCA9ICcxMDAlJyxcbiAgZHJhd2luZ0NhbnZhc0xlZnQgPSAnMzBweCcsIC8vdmVydGljYWxSdWxlckxlZnQgKyB2ZXJ0aWNhbFJ1bGVyV2lkdGhcbiAgZHJhd2luZ0NhbnZhc1RvcCA9ICc5MHB4JyxcbiAgZHJhd2luZ0NhbnZhc0JvdHRvbSA9ICcyMHB4JyxcbiAgZHJhd2luZ0NhbnZhc1JpZ2h0ID0gJzIwcHgnLFxuXG4gIGNvbG9yUGFsZXR0ZVdpZHRoID0gJzIwcHgnLFxuICBjb2xvclBhbGV0dGVIZWlnaHQgPSAnMTAwJScsXG4gIGNvbG9yUGFsZXR0ZVJpZ2h0ID0gJzAnLFxuICBjb2xvclBhbGV0dGVUb3AgPSAnODBweCcsXG5cbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9yV2lkdGggPSAnMjBweCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvckhlaWdodCA9ICcyMHB4JyxcbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQgPSAnMCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSA9ICcyMHB4JyxcblxuICBzdGF0dXNCYXJXaWR0aCA9ICcxMDAlJyxcbiAgc3RhdHVzQmFySGVpZ2h0ID0gJzIwcHgnLFxuICBzdGF0dXNCYXJCb3R0b20gPSAnMCcsXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJQXBwQ29udGFpbmVyIHtcbiAgcHJpdmF0ZSBtZW51QmFyOiBNZW51QmFyID0gbmV3IE1lbnVCYXIoXG4gICAge1xuICAgICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgICBoZWlnaHQ6IERpbWVuc2lvbi5tZW51YmFySGVpZ2h0LFxuICAgICAgdG9wOiBEaW1lbnNpb24udG9wLFxuICAgIH0sXG4gICAgU2hhZG93TW9kZS5PUEVOLFxuICApXG5cbiAgcHJpdmF0ZSB0b29sQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFRvb2xCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLnRvb2xCYXJIZWlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24ubWVudWJhckhlaWdodCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgYWN0aW9uQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IEFjdGlvbkJhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uYWN0aW9uQmFySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmFjdGlvbkJhclRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgaG9yaXpvbnRhbFJ1bGVyOiBCYXNlQ29tcG9uZW50ID0gbmV3IEhvcml6b250YWxSdWxlcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uaG9yaXpvbnRhbFJ1bGVySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlclRvcCxcbiAgICBsZWZ0OiBEaW1lbnNpb24uaG9yaXpvbnRhbFJ1bGVyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgdmVydGljYWxSdWxlcjogQmFzZUNvbXBvbmVudCA9IG5ldyBWZXJ0aWNhbFJ1bGVyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLnZlcnRpY2FsUnVsZXJXaWR0aCxcbiAgICB0b3A6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyVG9wLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmZ1bGxIZWlnaHQsXG4gICAgbGVmdDogRGltZW5zaW9uLnZlcnRpY2FsUnVsZXJMZWZ0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBkcmF3aW5nVG9vbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBEcmF3aW5nVG9vbEJhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhcldpZHRoLFxuICAgIHRvcDogRGltZW5zaW9uLmRyYXdpbmdUb29sQmFyVG9wLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmZ1bGxIZWlnaHQsXG4gICAgbGVmdDogRGltZW5zaW9uLmRyYXdpbmdUb29sQmFyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgZHJhd2luZ0NhbnZhczogSURyYXdpbmdDYW52YXMgPSBuZXcgRHJhd2luZ0NhbnZhcyh7XG4gICAgbGVmdDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNMZWZ0LFxuICAgIHRvcDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNUb3AsXG4gICAgYm90dG9tOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0JvdHRvbSxcbiAgICByaWdodDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNSaWdodCxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICB9KSBhcyBJRHJhd2luZ0NhbnZhc1xuXG4gIHByaXZhdGUgY29sb3JQYWxldHRlOiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbG9yUGFsZXR0ZSh7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5jb2xvclBhbGV0dGVXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5jb2xvclBhbGV0dGVIZWlnaHQsXG4gICAgcmlnaHQ6IERpbWVuc2lvbi5jb2xvclBhbGV0dGVSaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5jb2xvclBhbGV0dGVUb3AsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICAvKiAgcHJpdmF0ZSBvYmplY3RNYW5hZ2VyU2VsZWN0b3I6IEJhc2VDb21wb25lbnQgPSBuZXcgT2JqZWN0TWFuYWdlclNlbGVjdG9yKHtcbiAgICAgd2lkdGg6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JXaWR0aCxcbiAgICAgaGVpZ2h0OiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9ySGVpZ2h0LFxuICAgICByaWdodDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvclJpZ2h0LFxuICAgICBib3R0b206IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JCb3R0b20sXG4gICB9KSAgYXMgQmFzZUNvbXBvbmVudCovXG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFNjcm9sbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBWZXJ0aWNhbFNjcm9sbEJhcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSBob3Jpem9udGFsU2Nyb2xsQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IEhvcml6b250YWxTY3JvbGxCYXIoKSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBzdGF0dXNCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgU3RhdHVzQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLnN0YXR1c0JhcldpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLnN0YXR1c0JhckhlaWdodCxcbiAgICBib3R0b206IERpbWVuc2lvbi5zdGF0dXNCYXJCb3R0b20sXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGNvbnNvbGVjYW52YXM6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29uc29sZUNhbnZhcyh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgYm90dG9tOiAwLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgbGVmdFNpZGVCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgTGVmdFNpZGVCYXIoKSBhcyBCYXNlQ29tcG9uZW50XG4gIHByaXZhdGUgcGFyc2VyQ29udGFpbmVyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFBhcnNlckNvbnRhaW5lcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSB0YWJQYW5lOiBCYXNlQ29tcG9uZW50ID0gbmV3IFRhYlBhbmUoKSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgLyogcHJpdmF0ZSBkZXNpZ25FbGVtZW50V3JhcHBlcjogSURlc2lnbkVsZW1lbnRTZWxlY3RXcmFwcGVyID1cbiAgICBuZXcgRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIoKSBhcyBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXJcbiAqL1xuICBjb250ZXh0TWVudTogQmFzZUNvbXBvbmVudCA9IG5ldyBDb250ZXh0TWVudSh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAnMCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkIGdyYXknLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgUkVJID0ge1xuICAgIEJhc2VFeHRlbnNpb24sXG4gICAgRXh0ZW5zaW9uRGV2ZWxvcG1lbnQsXG4gICAgQWN0aW9uQmFyLFxuICAgIEJhc2VDb21wb25lbnQsXG4gICAgQ29sb3JQYWxldHRlLFxuICAgIERyYXdpbmdDYW52YXMsXG4gICAgRHJhd2luZ1Rvb2xCYXIsXG4gICAgRHJhd2luZ1Rvb2xiYXJJdGVtLFxuICAgIEhvcml6b250YWxSdWxlcixcbiAgICBIb3Jpem9udGFsU2Nyb2xsQmFyLFxuICAgIE1lbnVCYXIsXG4gICAgT2JqZWN0TWFuYWdlclNlbGVjdG9yLFxuICAgIFN0YXR1c0JhcixcbiAgICBUb29sQmFyLFxuICAgIFZlcnRpY2FsUnVsZXIsXG4gICAgVmVydGljYWxTY3JvbGxCYXIsXG4gICAgQ29uc29sZUNhbnZhcyxcbiAgICBMZWZ0U2lkZUJhcixcbiAgICBUYWJQYW5lLFxuICAgIFBhcnNlckNvbnRhaW5lcixcbiAgICBDb250ZXh0TWVudSxcbiAgICByZWdpc3RlcixcbiAgICByZWdpc3RlckVsZW1lbnQsXG4gICAgQXBwQ29udGFpbmVyLFxuICAgIERlc2lnbkVsZW1lbnQsXG4gICAgRGVzaWduRWxlbWVudFR5cGVzLFxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIC8qICAgIHNwcmVhZFRvKHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXIuc3R5bGUsIHtcbiAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmx1ZScsXG4gICAgICAgfSkgKi9cblxuICAgIC8vU2hhcmVkQ29uZmlnLnNldChERVNJR05fRUxFTUVOVF9XUkFQUEVSLCB0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoQ09OVEVYVF9NRU5VLCB0aGlzLmNvbnRleHRNZW51KVxuICAgIFNoYXJlZENvbmZpZy5zZXQoRFJBV0lOR19DQU5WQVMsIHRoaXMuZHJhd2luZ0NhbnZhcylcblxuICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICB0aGlzLm1lbnVCYXIsXG4gICAgICB0aGlzLnRvb2xCYXIsXG4gICAgICB0aGlzLmFjdGlvbkJhcixcbiAgICAgIHRoaXMudGFiUGFuZSxcbiAgICAgIHRoaXMuaG9yaXpvbnRhbFJ1bGVyLFxuICAgICAgdGhpcy5kcmF3aW5nVG9vbEJhcixcbiAgICAgIHRoaXMudmVydGljYWxSdWxlcixcbiAgICAgIHRoaXMuZHJhd2luZ0NhbnZhcyxcbiAgICAgIHRoaXMuY29sb3JQYWxldHRlLFxuICAgICAgLy90aGlzLm9iamVjdE1hbmFnZXJTZWxlY3RvcixcbiAgICAgIHRoaXMudmVydGljYWxTY3JvbGxCYXIsXG4gICAgICB0aGlzLmhvcml6b250YWxTY3JvbGxCYXIsXG4gICAgICB0aGlzLnN0YXR1c0JhcixcbiAgICAgIHRoaXMuY29uc29sZWNhbnZhcyxcbiAgICAgIHRoaXMubGVmdFNpZGVCYXIsXG4gICAgICB0aGlzLnBhcnNlckNvbnRhaW5lcixcbiAgICApXG4gICAgdGhpcy5tZW51QmFyLmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoJ2RlZmF1bHQnKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoUlVJR19FWFRFTlNJT05fSU5URVJGQUNFLCB0aGlzLlJFSSlcbiAgICBjb25zdCBleHRlbnNpb25Qb29sID0gbmV3IEV4dGVuc2lvblBvb2wodGhpcyBhcyB1bmtub3duIGFzIElBcHBDb250YWluZXIsIHRydWUpXG4gICAgU2hhcmVkQ29uZmlnLnNldChFWFRFTlNJT05fUE9PTCwgZXh0ZW5zaW9uUG9vbClcbiAgfVxuXG4gIGdldE1lbnVCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudUJhclxuICB9XG4gIGdldFRvb2xCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbEJhclxuICB9XG4gIGdldEFjdGlvbkJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25CYXJcbiAgfVxuICBnZXRIb3Jpem9udGFsUnVsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbFJ1bGVyXG4gIH1cbiAgZ2V0VmVydGljYWxSdWxlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFJ1bGVyXG4gIH1cbiAgZ2V0RHJhd2luZ1Rvb2xCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhd2luZ1Rvb2xCYXJcbiAgfVxuICBnZXREcmF3aW5nQ2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdDYW52YXNcbiAgfVxuICBnZXRDb2xvclBhbGV0dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JQYWxldHRlXG4gIH1cbiAgZ2V0VmVydGljYWxTY3JvbGxCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxTY3JvbGxCYXJcbiAgfVxuICBnZXRIb3Jpem9udGFsU2Nyb2xsQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxTY3JvbGxCYXJcbiAgfVxuICBnZXRTdGF0dXNCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQmFyXG4gIH1cbiAgZ2V0Q29uc29sZUNhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zb2xlY2FudmFzXG4gIH1cbiAgZ2V0TGVmdFNpZGVCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFNpZGVCYXJcbiAgfVxuICBnZXRQYXJzZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29udGFpbmVyXG4gIH1cbiAgZ2V0VGFiUGFuZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJQYW5lXG4gIH1cbiAgLyogZ2V0RGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXJcbiAgfSAqL1xuICBnZXRDb250ZXh0TWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRhaW5lclxuIl19