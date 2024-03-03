/* eslint-disable @typescript-eslint/no-explicit-any */
import { snakeCase } from './common/utils';
import TextIcon from './layers/view/application/common/TextIcon';
import ParserContainer from './layers/view/application/components/ParserContainer';
import ActionBar from './layers/view/application/components/actionbar/ActionBar';
import AppContainer from './layers/view/application/components/base/AppContainer';
import BaseComponent from './layers/view/application/components/base/BaseComponent';
import ColorPalette from './layers/view/application/components/colorpalette/ColorPalette';
import ConsoleCanvas from './layers/view/application/components/consolecanvas/ConsoleCanvas';
import ContextMenu from './layers/view/application/components/contextmenu/ContextMenu';
import DrawingCanvas from './layers/view/application/components/drawingcanvas/DrawingCanvas';
import InvalidTagNameException from './layers/view/application/components/exceptions/InvalidTagNameException';
import MenuBar from './layers/view/application/components/menubar/MenuBar';
import ObjectManagerSelector from './layers/view/application/components/objectmanagerselector/ObjectManagerSelector';
import HorizontalRuler from './layers/view/application/components/rulers/horizontalruler/HorizontalRuler';
import VerticalRuler from './layers/view/application/components/rulers/verticalruler/VerticalRuler';
import HorizontalScrollBar from './layers/view/application/components/scrollbars/horizontalscrollbar/HorizontalScrollBar';
import VerticalScrollBar from './layers/view/application/components/scrollbars/verticalscrollbar/VerticalScrollBar';
import DrawingToolBar from './layers/view/application/components/sidebars/drawingtoolbar/DrawingToolBar';
import DrawingToolbarItem from './layers/view/application/components/sidebars/drawingtoolbar/DrawingToolbarItem';
import LeftSideBar from './layers/view/application/components/sidebars/leftsidebar/LeftSideBar';
import StatusBar from './layers/view/application/components/statusbar/StatusBar';
import TabPane from './layers/view/application/components/tabpane/TabPane';
import ToolBar from './layers/view/application/components/toolbar/ToolBar';
import DumpElement from './layers/view/common/DumpElement';
import DesignElement from './layers/view/design/DesignElement';
import DesignElementSelectionWrapper from './layers/view/design/DesignElementSelectionWrapper';
import LinkDesignElement from './layers/view/design/designitem/LinkDesignElement';
export function register() {
    const CustomElements = {
        TextIcon: TextIcon,
        AppContainer: AppContainer,
        ActionBar: ActionBar,
        ParserContainer: ParserContainer,
        BaseComponent: BaseComponent,
        ColorPalette: ColorPalette,
        ConsoleCanvas: ConsoleCanvas,
        ContextMenu: ContextMenu,
        DrawingCanvas: DrawingCanvas,
        MenuBar: MenuBar,
        ObjectManagerSelector: ObjectManagerSelector,
        HorizontalRuler: HorizontalRuler,
        VerticalRuler: VerticalRuler,
        HorizontalScrollBar: HorizontalScrollBar,
        VerticalScrollBar: VerticalScrollBar,
        DrawingToolBar: DrawingToolBar,
        DrawingToolbarItem: DrawingToolbarItem,
        LeftSideBar: LeftSideBar,
        StatusBar: StatusBar,
        TabPane: TabPane,
        ToolBar: ToolBar,
        DumpElement: DumpElement,
        DesignElement: DesignElement,
        DesignElementSelectionWrapper: DesignElementSelectionWrapper,
        //BaseDesignComponent: BaseDesignComponent,
        LinkDesignElement: LinkDesignElement,
    };
    for (const [name, customElement] of Object.entries(CustomElements)) {
        registerElement(name, customElement);
    }
}
export function registerElement(name, element) {
    if (!element) {
        throw new InvalidTagNameException();
    }
    const tagName = snakeCase(name);
    try {
        customElements.define(tagName, element);
    }
    catch (error) {
        console.warn(error.message);
    }
    return element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tRWxlbWVudFJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21FbGVtZW50UmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDMUMsT0FBTyxRQUFRLE1BQU0sMkNBQTJDLENBQUE7QUFDaEUsT0FBTyxlQUFlLE1BQU0sc0RBQXNELENBQUE7QUFDbEYsT0FBTyxTQUFTLE1BQU0sMERBQTBELENBQUE7QUFDaEYsT0FBTyxZQUFZLE1BQU0sd0RBQXdELENBQUE7QUFDakYsT0FBTyxhQUFhLE1BQU0seURBQXlELENBQUE7QUFDbkYsT0FBTyxZQUFZLE1BQU0sZ0VBQWdFLENBQUE7QUFDekYsT0FBTyxhQUFhLE1BQU0sa0VBQWtFLENBQUE7QUFDNUYsT0FBTyxXQUFXLE1BQU0sOERBQThELENBQUE7QUFDdEYsT0FBTyxhQUFhLE1BQU0sa0VBQWtFLENBQUE7QUFDNUYsT0FBTyx1QkFBdUIsTUFBTSx5RUFBeUUsQ0FBQTtBQUM3RyxPQUFPLE9BQU8sTUFBTSxzREFBc0QsQ0FBQTtBQUMxRSxPQUFPLHFCQUFxQixNQUFNLGtGQUFrRixDQUFBO0FBQ3BILE9BQU8sZUFBZSxNQUFNLDZFQUE2RSxDQUFBO0FBQ3pHLE9BQU8sYUFBYSxNQUFNLHlFQUF5RSxDQUFBO0FBQ25HLE9BQU8sbUJBQW1CLE1BQU0seUZBQXlGLENBQUE7QUFDekgsT0FBTyxpQkFBaUIsTUFBTSxxRkFBcUYsQ0FBQTtBQUNuSCxPQUFPLGNBQWMsTUFBTSw2RUFBNkUsQ0FBQTtBQUN4RyxPQUFPLGtCQUFrQixNQUFNLGlGQUFpRixDQUFBO0FBQ2hILE9BQU8sV0FBVyxNQUFNLHVFQUF1RSxDQUFBO0FBQy9GLE9BQU8sU0FBUyxNQUFNLDBEQUEwRCxDQUFBO0FBQ2hGLE9BQU8sT0FBTyxNQUFNLHNEQUFzRCxDQUFBO0FBQzFFLE9BQU8sT0FBTyxNQUFNLHNEQUFzRCxDQUFBO0FBQzFFLE9BQU8sV0FBVyxNQUFNLGtDQUFrQyxDQUFBO0FBQzFELE9BQU8sYUFBYSxNQUFNLG9DQUFvQyxDQUFBO0FBQzlELE9BQU8sNkJBQTZCLE1BQU0sb0RBQW9ELENBQUE7QUFDOUYsT0FBTyxpQkFBaUIsTUFBTSxtREFBbUQsQ0FBQTtBQUVqRixNQUFNLFVBQVUsUUFBUTtJQUN0QixNQUFNLGNBQWMsR0FBUTtRQUMxQixRQUFRLEVBQUUsUUFBUTtRQUNsQixZQUFZLEVBQUUsWUFBWTtRQUMxQixTQUFTLEVBQUUsU0FBUztRQUNwQixlQUFlLEVBQUUsZUFBZTtRQUNoQyxhQUFhLEVBQUUsYUFBYTtRQUM1QixZQUFZLEVBQUUsWUFBWTtRQUMxQixhQUFhLEVBQUUsYUFBYTtRQUM1QixXQUFXLEVBQUUsV0FBVztRQUN4QixhQUFhLEVBQUUsYUFBYTtRQUM1QixPQUFPLEVBQUUsT0FBTztRQUNoQixxQkFBcUIsRUFBRSxxQkFBcUI7UUFDNUMsZUFBZSxFQUFFLGVBQWU7UUFDaEMsYUFBYSxFQUFFLGFBQWE7UUFDNUIsbUJBQW1CLEVBQUUsbUJBQW1CO1FBQ3hDLGlCQUFpQixFQUFFLGlCQUFpQjtRQUNwQyxjQUFjLEVBQUUsY0FBYztRQUM5QixrQkFBa0IsRUFBRSxrQkFBa0I7UUFDdEMsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsNkJBQTZCLEVBQUUsNkJBQTZCO1FBQzVELDJDQUEyQztRQUMzQyxpQkFBaUIsRUFBRSxpQkFBaUI7S0FDckMsQ0FBQTtJQUNELEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFxQixjQUFjLENBQUMsRUFBRTtRQUN0RixlQUFlLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0tBQ3JDO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBWSxFQUFFLE9BQTJCO0lBQ3ZFLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixNQUFNLElBQUksdUJBQXVCLEVBQUUsQ0FBQTtLQUNwQztJQUNELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixJQUFJO1FBQ0YsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7S0FDeEM7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUM1QjtJQUNELE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBzbmFrZUNhc2UgfSBmcm9tICcuL2NvbW1vbi91dGlscydcbmltcG9ydCBUZXh0SWNvbiBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbW1vbi9UZXh0SWNvbidcbmltcG9ydCBQYXJzZXJDb250YWluZXIgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL1BhcnNlckNvbnRhaW5lcidcbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2FjdGlvbmJhci9BY3Rpb25CYXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9jb2xvcnBhbGV0dGUvQ29sb3JQYWxldHRlJ1xuaW1wb3J0IENvbnNvbGVDYW52YXMgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbnNvbGVjYW52YXMvQ29uc29sZUNhbnZhcydcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvY29udGV4dG1lbnUvQ29udGV4dE1lbnUnXG5pbXBvcnQgRHJhd2luZ0NhbnZhcyBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHJhd2luZ2NhbnZhcy9EcmF3aW5nQ2FudmFzJ1xuaW1wb3J0IEludmFsaWRUYWdOYW1lRXhjZXB0aW9uIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9leGNlcHRpb25zL0ludmFsaWRUYWdOYW1lRXhjZXB0aW9uJ1xuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL21lbnViYXIvTWVudUJhcidcbmltcG9ydCBPYmplY3RNYW5hZ2VyU2VsZWN0b3IgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL29iamVjdG1hbmFnZXJzZWxlY3Rvci9PYmplY3RNYW5hZ2VyU2VsZWN0b3InXG5pbXBvcnQgSG9yaXpvbnRhbFJ1bGVyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9ydWxlcnMvaG9yaXpvbnRhbHJ1bGVyL0hvcml6b250YWxSdWxlcidcbmltcG9ydCBWZXJ0aWNhbFJ1bGVyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9ydWxlcnMvdmVydGljYWxydWxlci9WZXJ0aWNhbFJ1bGVyJ1xuaW1wb3J0IEhvcml6b250YWxTY3JvbGxCYXIgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3Njcm9sbGJhcnMvaG9yaXpvbnRhbHNjcm9sbGJhci9Ib3Jpem9udGFsU2Nyb2xsQmFyJ1xuaW1wb3J0IFZlcnRpY2FsU2Nyb2xsQmFyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9zY3JvbGxiYXJzL3ZlcnRpY2Fsc2Nyb2xsYmFyL1ZlcnRpY2FsU2Nyb2xsQmFyJ1xuaW1wb3J0IERyYXdpbmdUb29sQmFyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9zaWRlYmFycy9kcmF3aW5ndG9vbGJhci9EcmF3aW5nVG9vbEJhcidcbmltcG9ydCBEcmF3aW5nVG9vbGJhckl0ZW0gZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3NpZGViYXJzL2RyYXdpbmd0b29sYmFyL0RyYXdpbmdUb29sYmFySXRlbSdcbmltcG9ydCBMZWZ0U2lkZUJhciBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvc2lkZWJhcnMvbGVmdHNpZGViYXIvTGVmdFNpZGVCYXInXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9zdGF0dXNiYXIvU3RhdHVzQmFyJ1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RhYnBhbmUvVGFiUGFuZSdcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy90b29sYmFyL1Rvb2xCYXInXG5pbXBvcnQgRHVtcEVsZW1lbnQgZnJvbSAnLi9sYXllcnMvdmlldy9jb21tb24vRHVtcEVsZW1lbnQnXG5pbXBvcnQgRGVzaWduRWxlbWVudCBmcm9tICcuL2xheWVycy92aWV3L2Rlc2lnbi9EZXNpZ25FbGVtZW50J1xuaW1wb3J0IERlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvZGVzaWduL0Rlc2lnbkVsZW1lbnRTZWxlY3Rpb25XcmFwcGVyJ1xuaW1wb3J0IExpbmtEZXNpZ25FbGVtZW50IGZyb20gJy4vbGF5ZXJzL3ZpZXcvZGVzaWduL2Rlc2lnbml0ZW0vTGlua0Rlc2lnbkVsZW1lbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgY29uc3QgQ3VzdG9tRWxlbWVudHM6IGFueSA9IHtcbiAgICBUZXh0SWNvbjogVGV4dEljb24sXG4gICAgQXBwQ29udGFpbmVyOiBBcHBDb250YWluZXIsXG4gICAgQWN0aW9uQmFyOiBBY3Rpb25CYXIsXG4gICAgUGFyc2VyQ29udGFpbmVyOiBQYXJzZXJDb250YWluZXIsXG4gICAgQmFzZUNvbXBvbmVudDogQmFzZUNvbXBvbmVudCxcbiAgICBDb2xvclBhbGV0dGU6IENvbG9yUGFsZXR0ZSxcbiAgICBDb25zb2xlQ2FudmFzOiBDb25zb2xlQ2FudmFzLFxuICAgIENvbnRleHRNZW51OiBDb250ZXh0TWVudSxcbiAgICBEcmF3aW5nQ2FudmFzOiBEcmF3aW5nQ2FudmFzLFxuICAgIE1lbnVCYXI6IE1lbnVCYXIsXG4gICAgT2JqZWN0TWFuYWdlclNlbGVjdG9yOiBPYmplY3RNYW5hZ2VyU2VsZWN0b3IsXG4gICAgSG9yaXpvbnRhbFJ1bGVyOiBIb3Jpem9udGFsUnVsZXIsXG4gICAgVmVydGljYWxSdWxlcjogVmVydGljYWxSdWxlcixcbiAgICBIb3Jpem9udGFsU2Nyb2xsQmFyOiBIb3Jpem9udGFsU2Nyb2xsQmFyLFxuICAgIFZlcnRpY2FsU2Nyb2xsQmFyOiBWZXJ0aWNhbFNjcm9sbEJhcixcbiAgICBEcmF3aW5nVG9vbEJhcjogRHJhd2luZ1Rvb2xCYXIsXG4gICAgRHJhd2luZ1Rvb2xiYXJJdGVtOiBEcmF3aW5nVG9vbGJhckl0ZW0sXG4gICAgTGVmdFNpZGVCYXI6IExlZnRTaWRlQmFyLFxuICAgIFN0YXR1c0JhcjogU3RhdHVzQmFyLFxuICAgIFRhYlBhbmU6IFRhYlBhbmUsXG4gICAgVG9vbEJhcjogVG9vbEJhcixcbiAgICBEdW1wRWxlbWVudDogRHVtcEVsZW1lbnQsXG4gICAgRGVzaWduRWxlbWVudDogRGVzaWduRWxlbWVudCxcbiAgICBEZXNpZ25FbGVtZW50U2VsZWN0aW9uV3JhcHBlcjogRGVzaWduRWxlbWVudFNlbGVjdGlvbldyYXBwZXIsXG4gICAgLy9CYXNlRGVzaWduQ29tcG9uZW50OiBCYXNlRGVzaWduQ29tcG9uZW50LFxuICAgIExpbmtEZXNpZ25FbGVtZW50OiBMaW5rRGVzaWduRWxlbWVudCxcbiAgfVxuICBmb3IgKGNvbnN0IFtuYW1lLCBjdXN0b21FbGVtZW50XSBvZiBPYmplY3QuZW50cmllczx0eXBlb2YgSFRNTEVsZW1lbnQ+KEN1c3RvbUVsZW1lbnRzKSkge1xuICAgIHJlZ2lzdGVyRWxlbWVudChuYW1lLCBjdXN0b21FbGVtZW50KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVsZW1lbnQobmFtZTogc3RyaW5nLCBlbGVtZW50OiB0eXBlb2YgSFRNTEVsZW1lbnQpOiB0eXBlb2YgQmFzZUNvbXBvbmVudCB8IHR5cGVvZiBIVE1MRWxlbWVudCB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHRocm93IG5ldyBJbnZhbGlkVGFnTmFtZUV4Y2VwdGlvbigpXG4gIH1cbiAgY29uc3QgdGFnTmFtZSA9IHNuYWtlQ2FzZShuYW1lKVxuICB0cnkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBlbGVtZW50KVxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS53YXJuKGVycm9yLm1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRcbn1cbiJdfQ==