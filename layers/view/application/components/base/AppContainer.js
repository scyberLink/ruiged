"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVEQUF1RDtBQUN2RCxnRUFBZ0U7QUFDaEUsdUVBQThDO0FBQzlDLG9FQUEyQztBQUMzQyxnRkFBdUQ7QUFDdkQsbUZBQTBEO0FBQzFELCtGQUFzRTtBQUN0RSxnR0FBdUU7QUFDdkUsZ0hBQXVGO0FBQ3ZGLGlFQUF3QztBQUN4QyxvRkFBb0Y7QUFDcEYsdUVBQThDO0FBQzlDLGlFQUF3QztBQUN4QywwRkFBaUU7QUFDakUsMEdBQWlGO0FBQ2pGLG1GQUEwRDtBQUMxRCxzRkFBNkQ7QUFDN0QsaUVBQXdDO0FBQ3hDLHlFQUFnRDtBQUNoRCw2RUFBb0Q7QUFDcEQsc0ZBQTZEO0FBQzdELCtEQUF3SDtBQUN4SCx5RUFBZ0Q7QUFFaEQsMkZBQWtFO0FBQ2xFLDJGQUFrRTtBQUNsRSx5R0FBZ0Y7QUFDaEYsdUdBQThFO0FBQzlFLHdGQUFvRjtBQUNwRiwyR0FBa0Y7QUFDbEYsa0ZBQXlEO0FBQ3pELDRGQUFtRTtBQUduRSxJQUFLLFNBOENKO0FBOUNELFdBQUssU0FBUztJQUNaLHNCQUFTLENBQUE7SUFDVCx5QkFBWSxDQUFBO0lBQ1osK0JBQWtCLENBQUE7SUFDbEIsZ0NBQW1CLENBQUE7SUFDbkIsOEJBQWlCLENBQUE7SUFDakIsK0JBQWtCLENBQUE7SUFFbEIsbUNBQXNCLENBQUE7SUFDdEIsbUNBQXNCLENBQUE7SUFFdEIscUNBQXdCLENBQUE7SUFDeEIsa0NBQXFCLENBQUE7SUFFckIsMkNBQThCLENBQUE7SUFDOUIsd0NBQTJCLENBQUE7SUFDM0IseUNBQTRCLENBQUE7SUFFNUIseUNBQTRCLENBQUE7SUFDNUIsdUNBQTBCLENBQUE7SUFDMUIscUNBQXdCLENBQUE7SUFFeEIsd0NBQTJCLENBQUE7SUFDM0IsdUNBQTBCLENBQUE7SUFDMUIsc0NBQXlCLENBQUE7SUFFekIsd0NBQTJCLENBQUE7SUFDM0IseUNBQTRCLENBQUE7SUFDNUIsdUNBQTBCLENBQUE7SUFDMUIsc0NBQXlCLENBQUE7SUFDekIseUNBQTRCLENBQUE7SUFDNUIsd0NBQTJCLENBQUE7SUFFM0IsdUNBQTBCLENBQUE7SUFDMUIsd0NBQTJCLENBQUE7SUFDM0Isb0NBQXVCLENBQUE7SUFDdkIscUNBQXdCLENBQUE7SUFFeEIsZ0RBQW1DLENBQUE7SUFDbkMsaURBQW9DLENBQUE7SUFDcEMsNkNBQWdDLENBQUE7SUFDaEMsaURBQW9DLENBQUE7SUFFcEMsb0NBQXVCLENBQUE7SUFDdkIscUNBQXdCLENBQUE7SUFDeEIsa0NBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQTlDSSxTQUFTLEtBQVQsU0FBUyxRQThDYjtBQUVELE1BQU0sWUFBYSxTQUFRLHVCQUFhO0lBNEh0QztRQUNFLEtBQUssRUFBRSxDQUFBO1FBNUhELFlBQU8sR0FBWSxJQUFJLGlCQUFPLENBQ3BDO1lBQ0UsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxTQUFTLENBQUMsYUFBYTtZQUMvQixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDbkIsRUFDRCxvQkFBVSxDQUFDLElBQUksQ0FDaEIsQ0FBQTtRQUVPLFlBQU8sR0FBa0IsSUFBSSxpQkFBTyxDQUFDO1lBQzNDLEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsU0FBUyxDQUFDLGFBQWE7WUFDL0IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhO1NBQzdCLENBQWtCLENBQUE7UUFFWCxjQUFTLEdBQWtCLElBQUksbUJBQVMsQ0FBQztZQUMvQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVM7WUFDMUIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxlQUFlO1lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsWUFBWTtTQUM1QixDQUFrQixDQUFBO1FBRVgsb0JBQWUsR0FBa0IsSUFBSSx5QkFBZSxDQUFDO1lBQzNELEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsU0FBUyxDQUFDLHFCQUFxQjtZQUN2QyxHQUFHLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtZQUNqQyxJQUFJLEVBQUUsU0FBUyxDQUFDLG1CQUFtQjtTQUNwQyxDQUFrQixDQUFBO1FBRVgsa0JBQWEsR0FBa0IsSUFBSSx1QkFBYSxDQUFDO1lBQ3ZELEtBQUssRUFBRSxTQUFTLENBQUMsa0JBQWtCO1lBQ25DLEdBQUcsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtTQUNsQyxDQUFrQixDQUFBO1FBRVgsbUJBQWMsR0FBa0IsSUFBSSx3QkFBYyxDQUFDO1lBQ3pELEtBQUssRUFBRSxTQUFTLENBQUMsbUJBQW1CO1lBQ3BDLEdBQUcsRUFBRSxTQUFTLENBQUMsaUJBQWlCO1lBQ2hDLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtTQUNuQyxDQUFrQixDQUFBO1FBRVgsa0JBQWEsR0FBbUIsSUFBSSx1QkFBYSxDQUFDO1lBQ3hELElBQUksRUFBRSxTQUFTLENBQUMsaUJBQWlCO1lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSxTQUFTLENBQUMsbUJBQW1CO1lBQ3JDLEtBQUssRUFBRSxTQUFTLENBQUMsa0JBQWtCO1lBQ25DLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQW1CLENBQUE7UUFFWixpQkFBWSxHQUFrQixJQUFJLHNCQUFZLENBQUM7WUFDckQsS0FBSyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7WUFDbEMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0I7WUFDcEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7WUFDbEMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxlQUFlO1NBQy9CLENBQWtCLENBQUE7UUFFbkI7Ozs7OytCQUt1QjtRQUVmLHNCQUFpQixHQUFrQixJQUFJLDJCQUFpQixFQUFtQixDQUFBO1FBQzNFLHdCQUFtQixHQUFrQixJQUFJLDZCQUFtQixFQUFtQixDQUFBO1FBRS9FLGNBQVMsR0FBa0IsSUFBSSxtQkFBUyxDQUFDO1lBQy9DLEtBQUssRUFBRSxTQUFTLENBQUMsY0FBYztZQUMvQixNQUFNLEVBQUUsU0FBUyxDQUFDLGVBQWU7WUFDakMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxlQUFlO1NBQ2xDLENBQWtCLENBQUE7UUFFWCxrQkFBYSxHQUFrQixJQUFJLHVCQUFhLENBQUM7WUFDdkQsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTztZQUNmLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLE1BQU07U0FDaEIsQ0FBa0IsQ0FBQTtRQUVYLGdCQUFXLEdBQWtCLElBQUkscUJBQVcsRUFBbUIsQ0FBQTtRQUMvRCxvQkFBZSxHQUFrQixJQUFJLHlCQUFlLEVBQW1CLENBQUE7UUFDdkUsWUFBTyxHQUFrQixJQUFJLGlCQUFPLEVBQW1CLENBQUE7UUFFL0Q7O1NBRUM7UUFDRCxnQkFBVyxHQUFrQixJQUFJLHFCQUFXLENBQUM7WUFDM0MsUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE1BQU0sRUFBRSxrQkFBa0I7U0FDM0IsQ0FBa0IsQ0FBQTtRQUVuQixRQUFHLEdBQUc7WUFDSixhQUFhLEVBQWIsdUJBQWE7WUFDYixvQkFBb0IsRUFBcEIsOEJBQW9CO1lBQ3BCLFNBQVMsRUFBVCxtQkFBUztZQUNULGFBQWEsRUFBYix1QkFBYTtZQUNiLFlBQVksRUFBWixzQkFBWTtZQUNaLGFBQWEsRUFBYix1QkFBYTtZQUNiLGNBQWMsRUFBZCx3QkFBYztZQUNkLGtCQUFrQixFQUFsQiw0QkFBa0I7WUFDbEIsZUFBZSxFQUFmLHlCQUFlO1lBQ2YsbUJBQW1CLEVBQW5CLDZCQUFtQjtZQUNuQixPQUFPLEVBQVAsaUJBQU87WUFDUCxxQkFBcUIsRUFBckIsK0JBQXFCO1lBQ3JCLFNBQVMsRUFBVCxtQkFBUztZQUNULE9BQU8sRUFBUCxpQkFBTztZQUNQLGFBQWEsRUFBYix1QkFBYTtZQUNiLGlCQUFpQixFQUFqQiwyQkFBaUI7WUFDakIsYUFBYSxFQUFiLHVCQUFhO1lBQ2IsV0FBVyxFQUFYLHFCQUFXO1lBQ1gsT0FBTyxFQUFQLGlCQUFPO1lBQ1AsZUFBZSxFQUFmLHlCQUFlO1lBQ2YsV0FBVyxFQUFYLHFCQUFXO1lBQ1gsUUFBUSxFQUFSLG9DQUFRO1lBQ1IsZUFBZSxFQUFmLDJDQUFlO1lBQ2YsWUFBWTtZQUNaLGFBQWEsRUFBYix1QkFBYTtZQUNiLGtCQUFrQixFQUFsQiw0QkFBa0I7U0FDbkIsQ0FBQTtRQUlDOzs7Ozs7OztnQkFRUTtRQUVSLHFFQUFxRTtRQUNyRSxzQkFBWSxDQUFDLEdBQUcsQ0FBQyx3QkFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNoRCxzQkFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUVwRCxJQUFJLENBQUMsY0FBYyxDQUNqQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFvQixFQUN6QixJQUFJLENBQUMsWUFBWTtRQUNqQiw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FDckIsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtRQUU1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3pCLHNCQUFZLENBQUMsR0FBRyxDQUFDLG9DQUF3QixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwRCxNQUFNLGFBQWEsR0FBRyxJQUFJLHVCQUFhLENBQUMsSUFBZ0MsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvRSxzQkFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQzdCLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDM0IsQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFDRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFDRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUE7SUFDL0IsQ0FBQztJQUNELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN2QixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFDRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO0lBQzdCLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFDRDs7UUFFSTtJQUNKLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDekIsQ0FBQztDQUNGO0FBRUQsa0JBQWUsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWR1cGxpY2F0ZS1lbnVtLXZhbHVlcyAqL1xuaW1wb3J0IEFjdGlvbkJhciBmcm9tICcuLi9hY3Rpb25iYXIvQWN0aW9uQmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9CYXNlQ29tcG9uZW50J1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuLi9jb2xvcnBhbGV0dGUvQ29sb3JQYWxldHRlJ1xuaW1wb3J0IERyYXdpbmdDYW52YXMgZnJvbSAnLi4vZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzJ1xuaW1wb3J0IERyYXdpbmdUb29sQmFyIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sQmFyJ1xuaW1wb3J0IEhvcml6b250YWxSdWxlciBmcm9tICcuLi9ydWxlcnMvaG9yaXpvbnRhbHJ1bGVyL0hvcml6b250YWxSdWxlcidcbmltcG9ydCBIb3Jpem9udGFsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvaG9yaXpvbnRhbHNjcm9sbGJhci9Ib3Jpem9udGFsU2Nyb2xsQmFyJ1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi4vbWVudWJhci9NZW51QmFyJ1xuLy9pbXBvcnQgT2JqZWN0TWFuYWdlclNlbGVjdG9yIGZyb20gJy4uL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uL3N0YXR1c2Jhci9TdGF0dXNCYXInXG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi90b29sYmFyL1Rvb2xCYXInXG5pbXBvcnQgVmVydGljYWxSdWxlciBmcm9tICcuLi9ydWxlcnMvdmVydGljYWxydWxlci9WZXJ0aWNhbFJ1bGVyJ1xuaW1wb3J0IFZlcnRpY2FsU2Nyb2xsQmFyIGZyb20gJy4uL3Njcm9sbGJhcnMvdmVydGljYWxzY3JvbGxiYXIvVmVydGljYWxTY3JvbGxCYXInXG5pbXBvcnQgQ29uc29sZUNhbnZhcyBmcm9tICcuLi9jb25zb2xlY2FudmFzL0NvbnNvbGVDYW52YXMnXG5pbXBvcnQgTGVmdFNpZGVCYXIgZnJvbSAnLi4vc2lkZWJhcnMvbGVmdHNpZGViYXIvTGVmdFNpZGVCYXInXG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuLi90YWJwYW5lL1RhYlBhbmUnXG5pbXBvcnQgUGFyc2VyQ29udGFpbmVyIGZyb20gJy4uL1BhcnNlckNvbnRhaW5lcidcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuLi9jb250ZXh0bWVudS9Db250ZXh0TWVudSdcbmltcG9ydCBTaGFyZWRDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL1NoYXJlZENvbmZpZydcbmltcG9ydCB7IENPTlRFWFRfTUVOVSwgRFJBV0lOR19DQU5WQVMsIEVYVEVOU0lPTl9QT09MLCBSVUlHX0VYVEVOU0lPTl9JTlRFUkZBQ0UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJ1xuaW1wb3J0IFNoYWRvd01vZGUgZnJvbSAnLi4vLi4vY29tbW9uL1NoYWRvd01vZGUnXG5pbXBvcnQgSUFwcENvbnRhaW5lciBmcm9tICcuL21vZGVsL0lBcHBDb250YWluZXInXG5pbXBvcnQgRXh0ZW5zaW9uUG9vbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vRXh0ZW5zaW9uUG9vbCdcbmltcG9ydCBCYXNlRXh0ZW5zaW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2V4dGVuc2lvbi9CYXNlRXh0ZW5zaW9uJ1xuaW1wb3J0IEV4dGVuc2lvbkRldmVsb3BtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2V4dGVuc2lvbi9FeHRlbnNpb25EZXZlbG9wbWVudCdcbmltcG9ydCBEcmF3aW5nVG9vbGJhckl0ZW0gZnJvbSAnLi4vc2lkZWJhcnMvZHJhd2luZ3Rvb2xiYXIvRHJhd2luZ1Rvb2xiYXJJdGVtJ1xuaW1wb3J0IHsgcmVnaXN0ZXIsIHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2N1c3RvbUVsZW1lbnRSZWdpc3RyYXRpb24nXG5pbXBvcnQgT2JqZWN0TWFuYWdlclNlbGVjdG9yIGZyb20gJy4uL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuLi8uLi8uLi9kZXNpZ24vRGVzaWduRWxlbWVudCdcbmltcG9ydCBEZXNpZ25FbGVtZW50VHlwZXMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0Rlc2lnbkVsZW1lbnRUeXBlcydcbmltcG9ydCBJRHJhd2luZ0NhbnZhcyBmcm9tICcuL21vZGVsL0lEcmF3aW5nQ2FudmFzJ1xuXG5lbnVtIERpbWVuc2lvbiB7XG4gIHRvcCA9ICcwJyxcbiAgYm90dG9tID0gJzAnLFxuICBmdWxsV2lkdGggPSAnMTAwJScsXG4gIGZ1bGxIZWlnaHQgPSAnMTAwJScsXG4gIGhhbGZXaWR0aCA9ICc1MCUnLFxuICBoYWxmSGVpZ2h0ID0gJzUwJScsXG5cbiAgbWVudWJhckhlaWdodCA9ICcyMHB4JyxcbiAgdG9vbEJhckhlaWdodCA9ICczMHB4JyxcblxuICBhY3Rpb25CYXJIZWlnaHQgPSAnMjlweCcsXG4gIGFjdGlvbkJhclRvcCA9ICc1MHB4JyxcblxuICBob3Jpem9udGFsUnVsZXJIZWlnaHQgPSAnMTBweCcsXG4gIGhvcml6b250YWxSdWxlclRvcCA9ICc4MHB4JyxcbiAgaG9yaXpvbnRhbFJ1bGVyTGVmdCA9ICczMHB4JyxcblxuICBkcmF3aW5nVG9vbEJhcldpZHRoID0gJzIwcHgnLFxuICBkcmF3aW5nVG9vbEJhclRvcCA9ICc4MHB4JyxcbiAgZHJhd2luZ1Rvb2xCYXJMZWZ0ID0gJzAnLFxuXG4gIHZlcnRpY2FsUnVsZXJXaWR0aCA9ICcxMHB4JyxcbiAgdmVydGljYWxSdWxlckxlZnQgPSAnMjBweCcsXG4gIHZlcnRpY2FsUnVsZXJUb3AgPSAnOTBweCcsXG5cbiAgZHJhd2luZ0NhbnZhc1dpZHRoID0gJzEwMCUnLFxuICBkcmF3aW5nQ2FudmFzSGVpZ2h0ID0gJzEwMCUnLFxuICBkcmF3aW5nQ2FudmFzTGVmdCA9ICczMHB4JywgLy92ZXJ0aWNhbFJ1bGVyTGVmdCArIHZlcnRpY2FsUnVsZXJXaWR0aFxuICBkcmF3aW5nQ2FudmFzVG9wID0gJzkwcHgnLFxuICBkcmF3aW5nQ2FudmFzQm90dG9tID0gJzIwcHgnLFxuICBkcmF3aW5nQ2FudmFzUmlnaHQgPSAnMjBweCcsXG5cbiAgY29sb3JQYWxldHRlV2lkdGggPSAnMjBweCcsXG4gIGNvbG9yUGFsZXR0ZUhlaWdodCA9ICcxMDAlJyxcbiAgY29sb3JQYWxldHRlUmlnaHQgPSAnMCcsXG4gIGNvbG9yUGFsZXR0ZVRvcCA9ICc4MHB4JyxcblxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JXaWR0aCA9ICcyMHB4JyxcbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9ySGVpZ2h0ID0gJzIwcHgnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JSaWdodCA9ICcwJyxcbiAgb2JqZWN0TWFuYWdlclNlbGVjdG9yQm90dG9tID0gJzIwcHgnLFxuXG4gIHN0YXR1c0JhcldpZHRoID0gJzEwMCUnLFxuICBzdGF0dXNCYXJIZWlnaHQgPSAnMjBweCcsXG4gIHN0YXR1c0JhckJvdHRvbSA9ICcwJyxcbn1cblxuY2xhc3MgQXBwQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElBcHBDb250YWluZXIge1xuICBwcml2YXRlIG1lbnVCYXI6IE1lbnVCYXIgPSBuZXcgTWVudUJhcihcbiAgICB7XG4gICAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICAgIGhlaWdodDogRGltZW5zaW9uLm1lbnViYXJIZWlnaHQsXG4gICAgICB0b3A6IERpbWVuc2lvbi50b3AsXG4gICAgfSxcbiAgICBTaGFkb3dNb2RlLk9QRU4sXG4gIClcblxuICBwcml2YXRlIHRvb2xCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgVG9vbEJhcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi5mdWxsV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24udG9vbEJhckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5tZW51YmFySGVpZ2h0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBhY3Rpb25CYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgQWN0aW9uQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5hY3Rpb25CYXJIZWlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24uYWN0aW9uQmFyVG9wLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBob3Jpem9udGFsUnVsZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFJ1bGVyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJIZWlnaHQsXG4gICAgdG9wOiBEaW1lbnNpb24uaG9yaXpvbnRhbFJ1bGVyVG9wLFxuICAgIGxlZnQ6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJMZWZ0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFJ1bGVyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsUnVsZXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24udmVydGljYWxSdWxlcldpZHRoLFxuICAgIHRvcDogRGltZW5zaW9uLnZlcnRpY2FsUnVsZXJUb3AsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uZnVsbEhlaWdodCxcbiAgICBsZWZ0OiBEaW1lbnNpb24udmVydGljYWxSdWxlckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGRyYXdpbmdUb29sQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IERyYXdpbmdUb29sQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmRyYXdpbmdUb29sQmFyV2lkdGgsXG4gICAgdG9wOiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJUb3AsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uZnVsbEhlaWdodCxcbiAgICBsZWZ0OiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJMZWZ0LFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBkcmF3aW5nQ2FudmFzOiBJRHJhd2luZ0NhbnZhcyA9IG5ldyBEcmF3aW5nQ2FudmFzKHtcbiAgICBsZWZ0OiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0xlZnQsXG4gICAgdG9wOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc1RvcCxcbiAgICBib3R0b206IERpbWVuc2lvbi5kcmF3aW5nQ2FudmFzQm90dG9tLFxuICAgIHJpZ2h0OiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc1JpZ2h0LFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gIH0pIGFzIElEcmF3aW5nQ2FudmFzXG5cbiAgcHJpdmF0ZSBjb2xvclBhbGV0dGU6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29sb3JQYWxldHRlKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZUhlaWdodCxcbiAgICByaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVJpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIC8qICBwcml2YXRlIG9iamVjdE1hbmFnZXJTZWxlY3RvcjogQmFzZUNvbXBvbmVudCA9IG5ldyBPYmplY3RNYW5hZ2VyU2VsZWN0b3Ioe1xuICAgICB3aWR0aDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoLFxuICAgICBoZWlnaHQ6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQsXG4gICAgIHJpZ2h0OiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQsXG4gICAgIGJvdHRvbTogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSxcbiAgIH0pICBhcyBCYXNlQ29tcG9uZW50Ki9cblxuICBwcml2YXRlIHZlcnRpY2FsU2Nyb2xsQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsU2Nyb2xsQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFNjcm9sbEJhcigpIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHN0YXR1c0JhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBTdGF0dXNCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uc3RhdHVzQmFyV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uc3RhdHVzQmFySGVpZ2h0LFxuICAgIGJvdHRvbTogRGltZW5zaW9uLnN0YXR1c0JhckJvdHRvbSxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgY29uc29sZWNhbnZhczogQmFzZUNvbXBvbmVudCA9IG5ldyBDb25zb2xlQ2FudmFzKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBib3R0b206IDAsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBsZWZ0U2lkZUJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBMZWZ0U2lkZUJhcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSBwYXJzZXJDb250YWluZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgUGFyc2VyQ29udGFpbmVyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIHRhYlBhbmU6IEJhc2VDb21wb25lbnQgPSBuZXcgVGFiUGFuZSgpIGFzIEJhc2VDb21wb25lbnRcblxuICAvKiBwcml2YXRlIGRlc2lnbkVsZW1lbnRXcmFwcGVyOiBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIgPVxuICAgIG5ldyBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIGFzIElEZXNpZ25FbGVtZW50U2VsZWN0V3JhcHBlclxuICovXG4gIGNvbnRleHRNZW51OiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbnRleHRNZW51KHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcwJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgZ3JheScsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBSRUkgPSB7XG4gICAgQmFzZUV4dGVuc2lvbixcbiAgICBFeHRlbnNpb25EZXZlbG9wbWVudCxcbiAgICBBY3Rpb25CYXIsXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBDb2xvclBhbGV0dGUsXG4gICAgRHJhd2luZ0NhbnZhcyxcbiAgICBEcmF3aW5nVG9vbEJhcixcbiAgICBEcmF3aW5nVG9vbGJhckl0ZW0sXG4gICAgSG9yaXpvbnRhbFJ1bGVyLFxuICAgIEhvcml6b250YWxTY3JvbGxCYXIsXG4gICAgTWVudUJhcixcbiAgICBPYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgU3RhdHVzQmFyLFxuICAgIFRvb2xCYXIsXG4gICAgVmVydGljYWxSdWxlcixcbiAgICBWZXJ0aWNhbFNjcm9sbEJhcixcbiAgICBDb25zb2xlQ2FudmFzLFxuICAgIExlZnRTaWRlQmFyLFxuICAgIFRhYlBhbmUsXG4gICAgUGFyc2VyQ29udGFpbmVyLFxuICAgIENvbnRleHRNZW51LFxuICAgIHJlZ2lzdGVyLFxuICAgIHJlZ2lzdGVyRWxlbWVudCxcbiAgICBBcHBDb250YWluZXIsXG4gICAgRGVzaWduRWxlbWVudCxcbiAgICBEZXNpZ25FbGVtZW50VHlwZXMsXG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyogICAgc3ByZWFkVG8odGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlci5zdHlsZSwge1xuICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcbiAgICAgICB9KSAqL1xuXG4gICAgLy9TaGFyZWRDb25maWcuc2V0KERFU0lHTl9FTEVNRU5UX1dSQVBQRVIsIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXIpXG4gICAgU2hhcmVkQ29uZmlnLnNldChDT05URVhUX01FTlUsIHRoaXMuY29udGV4dE1lbnUpXG4gICAgU2hhcmVkQ29uZmlnLnNldChEUkFXSU5HX0NBTlZBUywgdGhpcy5kcmF3aW5nQ2FudmFzKVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZHJlbihcbiAgICAgIHRoaXMubWVudUJhcixcbiAgICAgIHRoaXMudG9vbEJhcixcbiAgICAgIHRoaXMuYWN0aW9uQmFyLFxuICAgICAgdGhpcy50YWJQYW5lLFxuICAgICAgdGhpcy5ob3Jpem9udGFsUnVsZXIsXG4gICAgICB0aGlzLmRyYXdpbmdUb29sQmFyLFxuICAgICAgdGhpcy52ZXJ0aWNhbFJ1bGVyLFxuICAgICAgdGhpcy5kcmF3aW5nQ2FudmFzIGFzIGFueSxcbiAgICAgIHRoaXMuY29sb3JQYWxldHRlLFxuICAgICAgLy90aGlzLm9iamVjdE1hbmFnZXJTZWxlY3RvcixcbiAgICAgIHRoaXMudmVydGljYWxTY3JvbGxCYXIsXG4gICAgICB0aGlzLmhvcml6b250YWxTY3JvbGxCYXIsXG4gICAgICB0aGlzLnN0YXR1c0JhcixcbiAgICAgIHRoaXMuY29uc29sZWNhbnZhcyxcbiAgICAgIHRoaXMubGVmdFNpZGVCYXIsXG4gICAgICB0aGlzLnBhcnNlckNvbnRhaW5lcixcbiAgICApXG4gICAgdGhpcy5tZW51QmFyLmRpc2FibGVkID0gdHJ1ZVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoJ2RlZmF1bHQnKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoUlVJR19FWFRFTlNJT05fSU5URVJGQUNFLCB0aGlzLlJFSSlcbiAgICBjb25zdCBleHRlbnNpb25Qb29sID0gbmV3IEV4dGVuc2lvblBvb2wodGhpcyBhcyB1bmtub3duIGFzIElBcHBDb250YWluZXIsIHRydWUpXG4gICAgU2hhcmVkQ29uZmlnLnNldChFWFRFTlNJT05fUE9PTCwgZXh0ZW5zaW9uUG9vbClcbiAgfVxuXG4gIGdldE1lbnVCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudUJhclxuICB9XG4gIGdldFRvb2xCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbEJhclxuICB9XG4gIGdldEFjdGlvbkJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25CYXJcbiAgfVxuICBnZXRIb3Jpem9udGFsUnVsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpvbnRhbFJ1bGVyXG4gIH1cbiAgZ2V0VmVydGljYWxSdWxlcigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbFJ1bGVyXG4gIH1cbiAgZ2V0RHJhd2luZ1Rvb2xCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhd2luZ1Rvb2xCYXJcbiAgfVxuICBnZXREcmF3aW5nQ2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdDYW52YXNcbiAgfVxuICBnZXRDb2xvclBhbGV0dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JQYWxldHRlXG4gIH1cbiAgZ2V0VmVydGljYWxTY3JvbGxCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxTY3JvbGxCYXJcbiAgfVxuICBnZXRIb3Jpem9udGFsU2Nyb2xsQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxTY3JvbGxCYXJcbiAgfVxuICBnZXRTdGF0dXNCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzQmFyXG4gIH1cbiAgZ2V0Q29uc29sZUNhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zb2xlY2FudmFzXG4gIH1cbiAgZ2V0TGVmdFNpZGVCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFNpZGVCYXJcbiAgfVxuICBnZXRQYXJzZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyQ29udGFpbmVyXG4gIH1cbiAgZ2V0VGFiUGFuZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJQYW5lXG4gIH1cbiAgLyogZ2V0RGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXJcbiAgfSAqL1xuICBnZXRDb250ZXh0TWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRhaW5lclxuIl19