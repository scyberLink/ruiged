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
const RuigRouting_1 = __importDefault(require("../../../../../RuigRouting"));
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
            RuigRouting: RuigRouting_1.default,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcnVpZy9zcmMvbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUFnRTtBQUNoRSx1RUFBOEM7QUFDOUMsb0VBQTJDO0FBQzNDLGdGQUF1RDtBQUN2RCxtRkFBMEQ7QUFDMUQsK0ZBQXNFO0FBQ3RFLGdHQUF1RTtBQUN2RSxnSEFBdUY7QUFDdkYsaUVBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRix1RUFBOEM7QUFDOUMsaUVBQXdDO0FBQ3hDLDBGQUFpRTtBQUNqRSwwR0FBaUY7QUFDakYsbUZBQTBEO0FBQzFELHNGQUE2RDtBQUM3RCxpRUFBd0M7QUFDeEMseUVBQWdEO0FBQ2hELDZFQUFvRDtBQUNwRCxzRkFBNkQ7QUFDN0QsK0RBQXdIO0FBQ3hILHlFQUFnRDtBQUVoRCwyRkFBa0U7QUFDbEUsMkZBQWtFO0FBQ2xFLHlHQUFnRjtBQUNoRix1R0FBOEU7QUFDOUUsNkVBQW9EO0FBQ3BELHdGQUFvRjtBQUNwRiwyR0FBa0Y7QUFDbEYsa0ZBQXlEO0FBQ3pELDRGQUFtRTtBQUVuRSxJQUFLLFNBOENKO0FBOUNELFdBQUssU0FBUztJQUNaLHNCQUFTLENBQUE7SUFDVCx5QkFBWSxDQUFBO0lBQ1osK0JBQWtCLENBQUE7SUFDbEIsZ0NBQW1CLENBQUE7SUFDbkIsOEJBQWlCLENBQUE7SUFDakIsK0JBQWtCLENBQUE7SUFFbEIsbUNBQXNCLENBQUE7SUFDdEIsbUNBQXNCLENBQUE7SUFFdEIscUNBQXdCLENBQUE7SUFDeEIsa0NBQXFCLENBQUE7SUFFckIsMkNBQThCLENBQUE7SUFDOUIsd0NBQTJCLENBQUE7SUFDM0IseUNBQTRCLENBQUE7SUFFNUIseUNBQTRCLENBQUE7SUFDNUIsdUNBQTBCLENBQUE7SUFDMUIscUNBQXdCLENBQUE7SUFFeEIsd0NBQTJCLENBQUE7SUFDM0IsdUNBQTBCLENBQUE7SUFDMUIsc0NBQXlCLENBQUE7SUFFekIsd0NBQTJCLENBQUE7SUFDM0IseUNBQTRCLENBQUE7SUFDNUIsdUNBQTBCLENBQUE7SUFDMUIsc0NBQXlCLENBQUE7SUFDekIseUNBQTRCLENBQUE7SUFDNUIsd0NBQTJCLENBQUE7SUFFM0IsdUNBQTBCLENBQUE7SUFDMUIsd0NBQTJCLENBQUE7SUFDM0Isb0NBQXVCLENBQUE7SUFDdkIscUNBQXdCLENBQUE7SUFFeEIsZ0RBQW1DLENBQUE7SUFDbkMsaURBQW9DLENBQUE7SUFDcEMsNkNBQWdDLENBQUE7SUFDaEMsaURBQW9DLENBQUE7SUFFcEMsb0NBQXVCLENBQUE7SUFDdkIscUNBQXdCLENBQUE7SUFDeEIsa0NBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQTlDSSxTQUFTLEtBQVQsU0FBUyxRQThDYjtBQUVELE1BQU0sWUFBYSxTQUFRLHVCQUFhO0lBNkh0QztRQUNFLEtBQUssRUFBRSxDQUFBO1FBN0hELFlBQU8sR0FBWSxJQUFJLGlCQUFPLENBQ3BDO1lBQ0UsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxTQUFTLENBQUMsYUFBYTtZQUMvQixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDbkIsRUFDRCxvQkFBVSxDQUFDLElBQUksQ0FDaEIsQ0FBQTtRQUVPLFlBQU8sR0FBa0IsSUFBSSxpQkFBTyxDQUFDO1lBQzNDLEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsU0FBUyxDQUFDLGFBQWE7WUFDL0IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhO1NBQzdCLENBQWtCLENBQUE7UUFFWCxjQUFTLEdBQWtCLElBQUksbUJBQVMsQ0FBQztZQUMvQyxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVM7WUFDMUIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxlQUFlO1lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsWUFBWTtTQUM1QixDQUFrQixDQUFBO1FBRVgsb0JBQWUsR0FBa0IsSUFBSSx5QkFBZSxDQUFDO1lBQzNELEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUztZQUMxQixNQUFNLEVBQUUsU0FBUyxDQUFDLHFCQUFxQjtZQUN2QyxHQUFHLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtZQUNqQyxJQUFJLEVBQUUsU0FBUyxDQUFDLG1CQUFtQjtTQUNwQyxDQUFrQixDQUFBO1FBRVgsa0JBQWEsR0FBa0IsSUFBSSx1QkFBYSxDQUFDO1lBQ3ZELEtBQUssRUFBRSxTQUFTLENBQUMsa0JBQWtCO1lBQ25DLEdBQUcsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtTQUNsQyxDQUFrQixDQUFBO1FBRVgsbUJBQWMsR0FBa0IsSUFBSSx3QkFBYyxDQUFDO1lBQ3pELEtBQUssRUFBRSxTQUFTLENBQUMsbUJBQW1CO1lBQ3BDLEdBQUcsRUFBRSxTQUFTLENBQUMsaUJBQWlCO1lBQ2hDLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtTQUNuQyxDQUFrQixDQUFBO1FBRVgsa0JBQWEsR0FBa0IsSUFBSSx1QkFBYSxDQUFDO1lBQ3ZELElBQUksRUFBRSxTQUFTLENBQUMsaUJBQWlCO1lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1lBQy9CLE1BQU0sRUFBRSxTQUFTLENBQUMsbUJBQW1CO1lBQ3JDLEtBQUssRUFBRSxTQUFTLENBQUMsa0JBQWtCO1lBQ25DLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQWtCLENBQUE7UUFFWCxpQkFBWSxHQUFrQixJQUFJLHNCQUFZLENBQUM7WUFDckQsS0FBSyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7WUFDbEMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0I7WUFDcEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7WUFDbEMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxlQUFlO1NBQy9CLENBQWtCLENBQUE7UUFFbkI7Ozs7OytCQUt1QjtRQUVmLHNCQUFpQixHQUFrQixJQUFJLDJCQUFpQixFQUFtQixDQUFBO1FBQzNFLHdCQUFtQixHQUFrQixJQUFJLDZCQUFtQixFQUFtQixDQUFBO1FBRS9FLGNBQVMsR0FBa0IsSUFBSSxtQkFBUyxDQUFDO1lBQy9DLEtBQUssRUFBRSxTQUFTLENBQUMsY0FBYztZQUMvQixNQUFNLEVBQUUsU0FBUyxDQUFDLGVBQWU7WUFDakMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxlQUFlO1NBQ2xDLENBQWtCLENBQUE7UUFFWCxrQkFBYSxHQUFrQixJQUFJLHVCQUFhLENBQUM7WUFDdkQsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTztZQUNmLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLE1BQU07U0FDaEIsQ0FBa0IsQ0FBQTtRQUVYLGdCQUFXLEdBQWtCLElBQUkscUJBQVcsRUFBbUIsQ0FBQTtRQUMvRCxvQkFBZSxHQUFrQixJQUFJLHlCQUFlLEVBQW1CLENBQUE7UUFDdkUsWUFBTyxHQUFrQixJQUFJLGlCQUFPLEVBQW1CLENBQUE7UUFFL0Q7O1NBRUM7UUFDRCxnQkFBVyxHQUFrQixJQUFJLHFCQUFXLENBQUM7WUFDM0MsUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE1BQU0sRUFBRSxrQkFBa0I7U0FDM0IsQ0FBa0IsQ0FBQTtRQUVuQixRQUFHLEdBQUc7WUFDSixhQUFhLEVBQWIsdUJBQWE7WUFDYixvQkFBb0IsRUFBcEIsOEJBQW9CO1lBQ3BCLFNBQVMsRUFBVCxtQkFBUztZQUNULGFBQWEsRUFBYix1QkFBYTtZQUNiLFlBQVksRUFBWixzQkFBWTtZQUNaLGFBQWEsRUFBYix1QkFBYTtZQUNiLGNBQWMsRUFBZCx3QkFBYztZQUNkLGtCQUFrQixFQUFsQiw0QkFBa0I7WUFDbEIsZUFBZSxFQUFmLHlCQUFlO1lBQ2YsbUJBQW1CLEVBQW5CLDZCQUFtQjtZQUNuQixPQUFPLEVBQVAsaUJBQU87WUFDUCxxQkFBcUIsRUFBckIsK0JBQXFCO1lBQ3JCLFNBQVMsRUFBVCxtQkFBUztZQUNULE9BQU8sRUFBUCxpQkFBTztZQUNQLGFBQWEsRUFBYix1QkFBYTtZQUNiLGlCQUFpQixFQUFqQiwyQkFBaUI7WUFDakIsYUFBYSxFQUFiLHVCQUFhO1lBQ2IsV0FBVyxFQUFYLHFCQUFXO1lBQ1gsT0FBTyxFQUFQLGlCQUFPO1lBQ1AsZUFBZSxFQUFmLHlCQUFlO1lBQ2YsV0FBVyxFQUFYLHFCQUFXO1lBQ1gsUUFBUSxFQUFSLG9DQUFRO1lBQ1IsZUFBZSxFQUFmLDJDQUFlO1lBQ2YsWUFBWTtZQUNaLGFBQWEsRUFBYix1QkFBYTtZQUNiLGtCQUFrQixFQUFsQiw0QkFBa0I7WUFDbEIsV0FBVyxFQUFYLHFCQUFXO1NBQ1osQ0FBQTtRQUlDOzs7Ozs7OztnQkFRUTtRQUVSLHFFQUFxRTtRQUNyRSxzQkFBWSxDQUFDLEdBQUcsQ0FBQyx3QkFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNoRCxzQkFBWSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUVwRCxJQUFJLENBQUMsY0FBYyxDQUNqQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZO1FBQ2pCLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsZUFBZSxDQUNyQixDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBRTVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDckMsK0JBQStCO1lBQy9CLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDakIseUJBQXlCO2dCQUV6QiwwREFBMEQ7Z0JBRTFELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7Z0JBQzFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQSxDQUFDLDJEQUEyRDtnQkFDbkYsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQy9HLElBQUksS0FBSyxDQUFBO2dCQUNULElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDYixLQUFLLEdBQUcsWUFBWSxHQUFHLFVBQVUsQ0FBQTtpQkFDbEM7cUJBQU07b0JBQ0wsS0FBSyxHQUFHLFlBQVksR0FBRyxVQUFVLENBQUE7aUJBQ2xDO2dCQUVELDJCQUEyQjtnQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN6QixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxvQ0FBd0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEQsTUFBTSxhQUFhLEdBQUcsSUFBSSx1QkFBYSxDQUFDLElBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDL0Usc0JBQVksQ0FBQyxHQUFHLENBQUMsMEJBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN2QixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFDRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMxQixDQUFDO0lBQ0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBO0lBQy9CLENBQUM7SUFDRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUE7SUFDakMsQ0FBQztJQUNELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDdkIsQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtJQUN6QixDQUFDO0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0Q7O1FBRUk7SUFDSixjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFlBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1kdXBsaWNhdGUtZW51bS12YWx1ZXMgKi9cbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vYWN0aW9uYmFyL0FjdGlvbkJhcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vQmFzZUNvbXBvbmVudCdcbmltcG9ydCBDb2xvclBhbGV0dGUgZnJvbSAnLi4vY29sb3JwYWxldHRlL0NvbG9yUGFsZXR0ZSdcbmltcG9ydCBEcmF3aW5nQ2FudmFzIGZyb20gJy4uL2RyYXdpbmdjYW52YXMvRHJhd2luZ0NhbnZhcydcbmltcG9ydCBEcmF3aW5nVG9vbEJhciBmcm9tICcuLi9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbEJhcidcbmltcG9ydCBIb3Jpem9udGFsUnVsZXIgZnJvbSAnLi4vcnVsZXJzL2hvcml6b250YWxydWxlci9Ib3Jpem9udGFsUnVsZXInXG5pbXBvcnQgSG9yaXpvbnRhbFNjcm9sbEJhciBmcm9tICcuLi9zY3JvbGxiYXJzL2hvcml6b250YWxzY3JvbGxiYXIvSG9yaXpvbnRhbFNjcm9sbEJhcidcbmltcG9ydCBNZW51QmFyIGZyb20gJy4uL21lbnViYXIvTWVudUJhcidcbi8vaW1wb3J0IE9iamVjdE1hbmFnZXJTZWxlY3RvciBmcm9tICcuLi9vYmplY3RtYW5hZ2Vyc2VsZWN0b3IvT2JqZWN0TWFuYWdlclNlbGVjdG9yJ1xuaW1wb3J0IFN0YXR1c0JhciBmcm9tICcuLi9zdGF0dXNiYXIvU3RhdHVzQmFyJ1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vdG9vbGJhci9Ub29sQmFyJ1xuaW1wb3J0IFZlcnRpY2FsUnVsZXIgZnJvbSAnLi4vcnVsZXJzL3ZlcnRpY2FscnVsZXIvVmVydGljYWxSdWxlcidcbmltcG9ydCBWZXJ0aWNhbFNjcm9sbEJhciBmcm9tICcuLi9zY3JvbGxiYXJzL3ZlcnRpY2Fsc2Nyb2xsYmFyL1ZlcnRpY2FsU2Nyb2xsQmFyJ1xuaW1wb3J0IENvbnNvbGVDYW52YXMgZnJvbSAnLi4vY29uc29sZWNhbnZhcy9Db25zb2xlQ2FudmFzJ1xuaW1wb3J0IExlZnRTaWRlQmFyIGZyb20gJy4uL3NpZGViYXJzL2xlZnRzaWRlYmFyL0xlZnRTaWRlQmFyJ1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi4vdGFicGFuZS9UYWJQYW5lJ1xuaW1wb3J0IFBhcnNlckNvbnRhaW5lciBmcm9tICcuLi9QYXJzZXJDb250YWluZXInXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi4vY29udGV4dG1lbnUvQ29udGV4dE1lbnUnXG5pbXBvcnQgU2hhcmVkQ29uZmlnIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9TaGFyZWRDb25maWcnXG5pbXBvcnQgeyBDT05URVhUX01FTlUsIERSQVdJTkdfQ0FOVkFTLCBFWFRFTlNJT05fUE9PTCwgUlVJR19FWFRFTlNJT05fSU5URVJGQUNFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cydcbmltcG9ydCBTaGFkb3dNb2RlIGZyb20gJy4uLy4uL2NvbW1vbi9TaGFkb3dNb2RlJ1xuaW1wb3J0IElBcHBDb250YWluZXIgZnJvbSAnLi9tb2RlbC9JQXBwQ29udGFpbmVyJ1xuaW1wb3J0IEV4dGVuc2lvblBvb2wgZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXh0ZW5zaW9uL0V4dGVuc2lvblBvb2wnXG5pbXBvcnQgQmFzZUV4dGVuc2lvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vQmFzZUV4dGVuc2lvbidcbmltcG9ydCBFeHRlbnNpb25EZXZlbG9wbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9leHRlbnNpb24vRXh0ZW5zaW9uRGV2ZWxvcG1lbnQnXG5pbXBvcnQgRHJhd2luZ1Rvb2xiYXJJdGVtIGZyb20gJy4uL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sYmFySXRlbSdcbmltcG9ydCBSdWlnUm91dGluZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9SdWlnUm91dGluZydcbmltcG9ydCB7IHJlZ2lzdGVyLCByZWdpc3RlckVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jdXN0b21FbGVtZW50UmVnaXN0cmF0aW9uJ1xuaW1wb3J0IE9iamVjdE1hbmFnZXJTZWxlY3RvciBmcm9tICcuLi9vYmplY3RtYW5hZ2Vyc2VsZWN0b3IvT2JqZWN0TWFuYWdlclNlbGVjdG9yJ1xuaW1wb3J0IERlc2lnbkVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vZGVzaWduL0Rlc2lnbkVsZW1lbnQnXG5pbXBvcnQgRGVzaWduRWxlbWVudFR5cGVzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9EZXNpZ25FbGVtZW50VHlwZXMnXG5cbmVudW0gRGltZW5zaW9uIHtcbiAgdG9wID0gJzAnLFxuICBib3R0b20gPSAnMCcsXG4gIGZ1bGxXaWR0aCA9ICcxMDAlJyxcbiAgZnVsbEhlaWdodCA9ICcxMDAlJyxcbiAgaGFsZldpZHRoID0gJzUwJScsXG4gIGhhbGZIZWlnaHQgPSAnNTAlJyxcblxuICBtZW51YmFySGVpZ2h0ID0gJzIwcHgnLFxuICB0b29sQmFySGVpZ2h0ID0gJzMwcHgnLFxuXG4gIGFjdGlvbkJhckhlaWdodCA9ICcyOXB4JyxcbiAgYWN0aW9uQmFyVG9wID0gJzUwcHgnLFxuXG4gIGhvcml6b250YWxSdWxlckhlaWdodCA9ICcxMHB4JyxcbiAgaG9yaXpvbnRhbFJ1bGVyVG9wID0gJzgwcHgnLFxuICBob3Jpem9udGFsUnVsZXJMZWZ0ID0gJzMwcHgnLFxuXG4gIGRyYXdpbmdUb29sQmFyV2lkdGggPSAnMjBweCcsXG4gIGRyYXdpbmdUb29sQmFyVG9wID0gJzgwcHgnLFxuICBkcmF3aW5nVG9vbEJhckxlZnQgPSAnMCcsXG5cbiAgdmVydGljYWxSdWxlcldpZHRoID0gJzEwcHgnLFxuICB2ZXJ0aWNhbFJ1bGVyTGVmdCA9ICcyMHB4JyxcbiAgdmVydGljYWxSdWxlclRvcCA9ICc5MHB4JyxcblxuICBkcmF3aW5nQ2FudmFzV2lkdGggPSAnMTAwJScsXG4gIGRyYXdpbmdDYW52YXNIZWlnaHQgPSAnMTAwJScsXG4gIGRyYXdpbmdDYW52YXNMZWZ0ID0gJzMwcHgnLCAvL3ZlcnRpY2FsUnVsZXJMZWZ0ICsgdmVydGljYWxSdWxlcldpZHRoXG4gIGRyYXdpbmdDYW52YXNUb3AgPSAnOTBweCcsXG4gIGRyYXdpbmdDYW52YXNCb3R0b20gPSAnMjBweCcsXG4gIGRyYXdpbmdDYW52YXNSaWdodCA9ICcyMHB4JyxcblxuICBjb2xvclBhbGV0dGVXaWR0aCA9ICcyMHB4JyxcbiAgY29sb3JQYWxldHRlSGVpZ2h0ID0gJzEwMCUnLFxuICBjb2xvclBhbGV0dGVSaWdodCA9ICcwJyxcbiAgY29sb3JQYWxldHRlVG9wID0gJzgwcHgnLFxuXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoID0gJzIwcHgnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQgPSAnMjBweCcsXG4gIG9iamVjdE1hbmFnZXJTZWxlY3RvclJpZ2h0ID0gJzAnLFxuICBvYmplY3RNYW5hZ2VyU2VsZWN0b3JCb3R0b20gPSAnMjBweCcsXG5cbiAgc3RhdHVzQmFyV2lkdGggPSAnMTAwJScsXG4gIHN0YXR1c0JhckhlaWdodCA9ICcyMHB4JyxcbiAgc3RhdHVzQmFyQm90dG9tID0gJzAnLFxufVxuXG5jbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSUFwcENvbnRhaW5lciB7XG4gIHByaXZhdGUgbWVudUJhcjogTWVudUJhciA9IG5ldyBNZW51QmFyKFxuICAgIHtcbiAgICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgICAgaGVpZ2h0OiBEaW1lbnNpb24ubWVudWJhckhlaWdodCxcbiAgICAgIHRvcDogRGltZW5zaW9uLnRvcCxcbiAgICB9LFxuICAgIFNoYWRvd01vZGUuT1BFTixcbiAgKVxuXG4gIHByaXZhdGUgdG9vbEJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBUb29sQmFyKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmZ1bGxXaWR0aCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi50b29sQmFySGVpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLm1lbnViYXJIZWlnaHQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGFjdGlvbkJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBBY3Rpb25CYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmFjdGlvbkJhckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5hY3Rpb25CYXJUb3AsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGhvcml6b250YWxSdWxlcjogQmFzZUNvbXBvbmVudCA9IG5ldyBIb3Jpem9udGFsUnVsZXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZnVsbFdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlckhlaWdodCxcbiAgICB0b3A6IERpbWVuc2lvbi5ob3Jpem9udGFsUnVsZXJUb3AsXG4gICAgbGVmdDogRGltZW5zaW9uLmhvcml6b250YWxSdWxlckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHZlcnRpY2FsUnVsZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgVmVydGljYWxSdWxlcih7XG4gICAgd2lkdGg6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyV2lkdGgsXG4gICAgdG9wOiBEaW1lbnNpb24udmVydGljYWxSdWxlclRvcCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5mdWxsSGVpZ2h0LFxuICAgIGxlZnQ6IERpbWVuc2lvbi52ZXJ0aWNhbFJ1bGVyTGVmdCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgZHJhd2luZ1Rvb2xCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgRHJhd2luZ1Rvb2xCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uZHJhd2luZ1Rvb2xCYXJXaWR0aCxcbiAgICB0b3A6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhclRvcCxcbiAgICBoZWlnaHQ6IERpbWVuc2lvbi5mdWxsSGVpZ2h0LFxuICAgIGxlZnQ6IERpbWVuc2lvbi5kcmF3aW5nVG9vbEJhckxlZnQsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIGRyYXdpbmdDYW52YXM6IEJhc2VDb21wb25lbnQgPSBuZXcgRHJhd2luZ0NhbnZhcyh7XG4gICAgbGVmdDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNMZWZ0LFxuICAgIHRvcDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNUb3AsXG4gICAgYm90dG9tOiBEaW1lbnNpb24uZHJhd2luZ0NhbnZhc0JvdHRvbSxcbiAgICByaWdodDogRGltZW5zaW9uLmRyYXdpbmdDYW52YXNSaWdodCxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBjb2xvclBhbGV0dGU6IEJhc2VDb21wb25lbnQgPSBuZXcgQ29sb3JQYWxldHRlKHtcbiAgICB3aWR0aDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVdpZHRoLFxuICAgIGhlaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZUhlaWdodCxcbiAgICByaWdodDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVJpZ2h0LFxuICAgIHRvcDogRGltZW5zaW9uLmNvbG9yUGFsZXR0ZVRvcCxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIC8qICBwcml2YXRlIG9iamVjdE1hbmFnZXJTZWxlY3RvcjogQmFzZUNvbXBvbmVudCA9IG5ldyBPYmplY3RNYW5hZ2VyU2VsZWN0b3Ioe1xuICAgICB3aWR0aDogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvcldpZHRoLFxuICAgICBoZWlnaHQ6IERpbWVuc2lvbi5vYmplY3RNYW5hZ2VyU2VsZWN0b3JIZWlnaHQsXG4gICAgIHJpZ2h0OiBEaW1lbnNpb24ub2JqZWN0TWFuYWdlclNlbGVjdG9yUmlnaHQsXG4gICAgIGJvdHRvbTogRGltZW5zaW9uLm9iamVjdE1hbmFnZXJTZWxlY3RvckJvdHRvbSxcbiAgIH0pICBhcyBCYXNlQ29tcG9uZW50Ki9cblxuICBwcml2YXRlIHZlcnRpY2FsU2Nyb2xsQmFyOiBCYXNlQ29tcG9uZW50ID0gbmV3IFZlcnRpY2FsU2Nyb2xsQmFyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIGhvcml6b250YWxTY3JvbGxCYXI6IEJhc2VDb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbFNjcm9sbEJhcigpIGFzIEJhc2VDb21wb25lbnRcblxuICBwcml2YXRlIHN0YXR1c0JhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBTdGF0dXNCYXIoe1xuICAgIHdpZHRoOiBEaW1lbnNpb24uc3RhdHVzQmFyV2lkdGgsXG4gICAgaGVpZ2h0OiBEaW1lbnNpb24uc3RhdHVzQmFySGVpZ2h0LFxuICAgIGJvdHRvbTogRGltZW5zaW9uLnN0YXR1c0JhckJvdHRvbSxcbiAgfSkgYXMgQmFzZUNvbXBvbmVudFxuXG4gIHByaXZhdGUgY29uc29sZWNhbnZhczogQmFzZUNvbXBvbmVudCA9IG5ldyBDb25zb2xlQ2FudmFzKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBib3R0b206IDAsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSBhcyBCYXNlQ29tcG9uZW50XG5cbiAgcHJpdmF0ZSBsZWZ0U2lkZUJhcjogQmFzZUNvbXBvbmVudCA9IG5ldyBMZWZ0U2lkZUJhcigpIGFzIEJhc2VDb21wb25lbnRcbiAgcHJpdmF0ZSBwYXJzZXJDb250YWluZXI6IEJhc2VDb21wb25lbnQgPSBuZXcgUGFyc2VyQ29udGFpbmVyKCkgYXMgQmFzZUNvbXBvbmVudFxuICBwcml2YXRlIHRhYlBhbmU6IEJhc2VDb21wb25lbnQgPSBuZXcgVGFiUGFuZSgpIGFzIEJhc2VDb21wb25lbnRcblxuICAvKiBwcml2YXRlIGRlc2lnbkVsZW1lbnRXcmFwcGVyOiBJRGVzaWduRWxlbWVudFNlbGVjdFdyYXBwZXIgPVxuICAgIG5ldyBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcigpIGFzIElEZXNpZ25FbGVtZW50U2VsZWN0V3JhcHBlclxuICovXG4gIGNvbnRleHRNZW51OiBCYXNlQ29tcG9uZW50ID0gbmV3IENvbnRleHRNZW51KHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcwJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgZ3JheScsXG4gIH0pIGFzIEJhc2VDb21wb25lbnRcblxuICBSRUkgPSB7XG4gICAgQmFzZUV4dGVuc2lvbixcbiAgICBFeHRlbnNpb25EZXZlbG9wbWVudCxcbiAgICBBY3Rpb25CYXIsXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBDb2xvclBhbGV0dGUsXG4gICAgRHJhd2luZ0NhbnZhcyxcbiAgICBEcmF3aW5nVG9vbEJhcixcbiAgICBEcmF3aW5nVG9vbGJhckl0ZW0sXG4gICAgSG9yaXpvbnRhbFJ1bGVyLFxuICAgIEhvcml6b250YWxTY3JvbGxCYXIsXG4gICAgTWVudUJhcixcbiAgICBPYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgU3RhdHVzQmFyLFxuICAgIFRvb2xCYXIsXG4gICAgVmVydGljYWxSdWxlcixcbiAgICBWZXJ0aWNhbFNjcm9sbEJhcixcbiAgICBDb25zb2xlQ2FudmFzLFxuICAgIExlZnRTaWRlQmFyLFxuICAgIFRhYlBhbmUsXG4gICAgUGFyc2VyQ29udGFpbmVyLFxuICAgIENvbnRleHRNZW51LFxuICAgIHJlZ2lzdGVyLFxuICAgIHJlZ2lzdGVyRWxlbWVudCxcbiAgICBBcHBDb250YWluZXIsXG4gICAgRGVzaWduRWxlbWVudCxcbiAgICBEZXNpZ25FbGVtZW50VHlwZXMsXG4gICAgUnVpZ1JvdXRpbmcsXG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLyogICAgc3ByZWFkVG8odGhpcy5kZXNpZ25FbGVtZW50V3JhcHBlci5zdHlsZSwge1xuICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcbiAgICAgICB9KSAqL1xuXG4gICAgLy9TaGFyZWRDb25maWcuc2V0KERFU0lHTl9FTEVNRU5UX1dSQVBQRVIsIHRoaXMuZGVzaWduRWxlbWVudFdyYXBwZXIpXG4gICAgU2hhcmVkQ29uZmlnLnNldChDT05URVhUX01FTlUsIHRoaXMuY29udGV4dE1lbnUpXG4gICAgU2hhcmVkQ29uZmlnLnNldChEUkFXSU5HX0NBTlZBUywgdGhpcy5kcmF3aW5nQ2FudmFzKVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZHJlbihcbiAgICAgIHRoaXMubWVudUJhcixcbiAgICAgIHRoaXMudG9vbEJhcixcbiAgICAgIHRoaXMuYWN0aW9uQmFyLFxuICAgICAgdGhpcy50YWJQYW5lLFxuICAgICAgdGhpcy5ob3Jpem9udGFsUnVsZXIsXG4gICAgICB0aGlzLmRyYXdpbmdUb29sQmFyLFxuICAgICAgdGhpcy52ZXJ0aWNhbFJ1bGVyLFxuICAgICAgdGhpcy5kcmF3aW5nQ2FudmFzLFxuICAgICAgdGhpcy5jb2xvclBhbGV0dGUsXG4gICAgICAvL3RoaXMub2JqZWN0TWFuYWdlclNlbGVjdG9yLFxuICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbEJhcixcbiAgICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbEJhcixcbiAgICAgIHRoaXMuc3RhdHVzQmFyLFxuICAgICAgdGhpcy5jb25zb2xlY2FudmFzLFxuICAgICAgdGhpcy5sZWZ0U2lkZUJhcixcbiAgICAgIHRoaXMucGFyc2VyQ29udGFpbmVyLFxuICAgIClcbiAgICB0aGlzLm1lbnVCYXIuZGlzYWJsZWQgPSB0cnVlXG5cbiAgICB3aW5kb3cub253aGVlbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgQ3RybCBrZXkgaXMgcHJlc3NlZFxuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IHNjYWxlIGZhY3RvciBiYXNlZCBvbiB0aGUgd2hlZWwgZGVsdGFcblxuICAgICAgICBjb25zdCBkZWx0YSA9IGV2ZW50LmRlbHRhWVxuICAgICAgICBjb25zdCB6b29tRmFjdG9yID0gMC4wMiAvLyBZb3UgY2FuIGFkanVzdCB0aGlzIHZhbHVlIGJhc2VkIG9uIHlvdXIgem9vbSBzZW5zaXRpdml0eVxuICAgICAgICBjb25zdCBjdXJyZW50U2NhbGUgPSBwYXJzZUZsb2F0KHRoaXMuZHJhd2luZ0NhbnZhcy5zdHlsZS50cmFuc2Zvcm0ucmVwbGFjZSgnc2NhbGUoJywgJycpLnJlcGxhY2UoJyknLCAnJykpIHx8IDFcbiAgICAgICAgbGV0IHNjYWxlXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICBzY2FsZSA9IGN1cnJlbnRTY2FsZSArIHpvb21GYWN0b3JcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY2FsZSA9IGN1cnJlbnRTY2FsZSAtIHpvb21GYWN0b3JcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgbmV3IHNjYWxlIGZhY3RvclxuICAgICAgICB0aGlzLmRyYXdpbmdDYW52YXMuc2NhbGUgPSBzY2FsZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0Q3Vyc29yKCdkZWZhdWx0JylcbiAgICBTaGFyZWRDb25maWcuc2V0KFJVSUdfRVhURU5TSU9OX0lOVEVSRkFDRSwgdGhpcy5SRUkpXG4gICAgY29uc3QgZXh0ZW5zaW9uUG9vbCA9IG5ldyBFeHRlbnNpb25Qb29sKHRoaXMgYXMgdW5rbm93biBhcyBJQXBwQ29udGFpbmVyLCB0cnVlKVxuICAgIFNoYXJlZENvbmZpZy5zZXQoRVhURU5TSU9OX1BPT0wsIGV4dGVuc2lvblBvb2wpXG4gIH1cblxuICBnZXRNZW51QmFyKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVCYXJcbiAgfVxuICBnZXRUb29sQmFyKCkge1xuICAgIHJldHVybiB0aGlzLnRvb2xCYXJcbiAgfVxuICBnZXRBY3Rpb25CYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uQmFyXG4gIH1cbiAgZ2V0SG9yaXpvbnRhbFJ1bGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxSdWxlclxuICB9XG4gIGdldFZlcnRpY2FsUnVsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxSdWxlclxuICB9XG4gIGdldERyYXdpbmdUb29sQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdUb29sQmFyXG4gIH1cbiAgZ2V0RHJhd2luZ0NhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmF3aW5nQ2FudmFzXG4gIH1cbiAgZ2V0Q29sb3JQYWxldHRlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG9yUGFsZXR0ZVxuICB9XG4gIGdldFZlcnRpY2FsU2Nyb2xsQmFyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyXG4gIH1cbiAgZ2V0SG9yaXpvbnRhbFNjcm9sbEJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsU2Nyb2xsQmFyXG4gIH1cbiAgZ2V0U3RhdHVzQmFyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c0JhclxuICB9XG4gIGdldENvbnNvbGVDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZWNhbnZhc1xuICB9XG4gIGdldExlZnRTaWRlQmFyKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRTaWRlQmFyXG4gIH1cbiAgZ2V0UGFyc2VyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlckNvbnRhaW5lclxuICB9XG4gIGdldFRhYlBhbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFiUGFuZVxuICB9XG4gIC8qIGdldERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2lnbkVsZW1lbnRXcmFwcGVyXG4gIH0gKi9cbiAgZ2V0Q29udGV4dE1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXJcbiJdfQ==