"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextIcon_1 = __importDefault(require("../../common/TextIcon"));
const BaseComponent_1 = __importDefault(require("../base/BaseComponent"));
class MenuBar extends BaseComponent_1.default {
    constructor(style, mode) {
        super(Object.assign({ display: 'flex', overflow: 'hidden' }, (style !== null && style !== void 0 ? style : {})), mode);
        this.fileMenuItem = new TextIcon_1.default();
        this.editMenuItem = new TextIcon_1.default();
        this.viewMenuItem = new TextIcon_1.default();
        this.toolMenuItem = new TextIcon_1.default();
        this.fileMenuItem.init({ hint: 'File', description: '', svgPathData: '' });
        this.editMenuItem.init({ hint: 'Edit', description: '', svgPathData: '' });
        this.viewMenuItem.init({ hint: 'View', description: '', svgPathData: '' });
        this.toolMenuItem.init({ hint: 'Tool', description: '', svgPathData: '' });
        this.appendChildren(this.fileMenuItem, this.editMenuItem, this.viewMenuItem, this.toolMenuItem);
    }
    getFileMenu() {
        return this.fileMenuItem;
    }
    getEditMenu() {
        return this.editMenuItem;
    }
    getViewMenu() {
        return this.viewMenuItem;
    }
    getToolMenu() {
        return this.toolMenuItem;
    }
}
exports.default = MenuBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL21lbnViYXIvTWVudUJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLHFFQUE0QztBQUM1QywwRUFBaUQ7QUFHakQsTUFBTSxPQUFRLFNBQVEsdUJBQWE7SUFNakMsWUFBWSxLQUFrQixFQUFFLElBQWlCO1FBQy9DLEtBQUssaUJBRUQsT0FBTyxFQUFFLE1BQU0sRUFDZixRQUFRLEVBQUUsUUFBUSxJQUNmLENBQUMsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksRUFBRSxDQUFDLEdBRWxCLElBQUksQ0FDTCxDQUFBO1FBYkgsaUJBQVksR0FBbUIsSUFBSSxrQkFBUSxFQUFvQixDQUFBO1FBQy9ELGlCQUFZLEdBQW1CLElBQUksa0JBQVEsRUFBb0IsQ0FBQTtRQUMvRCxpQkFBWSxHQUFtQixJQUFJLGtCQUFRLEVBQW9CLENBQUE7UUFDL0QsaUJBQVksR0FBbUIsSUFBSSxrQkFBUSxFQUFvQixDQUFBO1FBWTdELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRTFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pHLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7Q0FDRjtBQUVELGtCQUFlLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQW55T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcbmltcG9ydCBBY3Rpb25hYmxlSWNvbiBmcm9tICcuLi8uLi9jb21tb24vQWN0aW9uYWJsZUljb24nXG5pbXBvcnQgU2hhZG93TW9kZSBmcm9tICcuLi8uLi9jb21tb24vU2hhZG93TW9kZSdcbmltcG9ydCBUZXh0SWNvbiBmcm9tICcuLi8uLi9jb21tb24vVGV4dEljb24nXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9iYXNlL0Jhc2VDb21wb25lbnQnXG5pbXBvcnQgSU1lbnVCYXIgZnJvbSAnLi4vYmFzZS9tb2RlbC9JTWVudUJhcidcblxuY2xhc3MgTWVudUJhciBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBJTWVudUJhciB7XG4gIGZpbGVNZW51SXRlbTogQWN0aW9uYWJsZUljb24gPSBuZXcgVGV4dEljb24oKSBhcyBBY3Rpb25hYmxlSWNvblxuICBlZGl0TWVudUl0ZW06IEFjdGlvbmFibGVJY29uID0gbmV3IFRleHRJY29uKCkgYXMgQWN0aW9uYWJsZUljb25cbiAgdmlld01lbnVJdGVtOiBBY3Rpb25hYmxlSWNvbiA9IG5ldyBUZXh0SWNvbigpIGFzIEFjdGlvbmFibGVJY29uXG4gIHRvb2xNZW51SXRlbTogQWN0aW9uYWJsZUljb24gPSBuZXcgVGV4dEljb24oKSBhcyBBY3Rpb25hYmxlSWNvblxuXG4gIGNvbnN0cnVjdG9yKHN0eWxlPzogSUFueU9iamVjdCwgbW9kZT86IFNoYWRvd01vZGUpIHtcbiAgICBzdXBlcihcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIC4uLihzdHlsZSA/PyB7fSksXG4gICAgICB9LFxuICAgICAgbW9kZSxcbiAgICApXG5cbiAgICB0aGlzLmZpbGVNZW51SXRlbS5pbml0KHsgaGludDogJ0ZpbGUnLCBkZXNjcmlwdGlvbjogJycsIHN2Z1BhdGhEYXRhOiAnJyB9KVxuICAgIHRoaXMuZWRpdE1lbnVJdGVtLmluaXQoeyBoaW50OiAnRWRpdCcsIGRlc2NyaXB0aW9uOiAnJywgc3ZnUGF0aERhdGE6ICcnIH0pXG4gICAgdGhpcy52aWV3TWVudUl0ZW0uaW5pdCh7IGhpbnQ6ICdWaWV3JywgZGVzY3JpcHRpb246ICcnLCBzdmdQYXRoRGF0YTogJycgfSlcbiAgICB0aGlzLnRvb2xNZW51SXRlbS5pbml0KHsgaGludDogJ1Rvb2wnLCBkZXNjcmlwdGlvbjogJycsIHN2Z1BhdGhEYXRhOiAnJyB9KVxuXG4gICAgdGhpcy5hcHBlbmRDaGlsZHJlbih0aGlzLmZpbGVNZW51SXRlbSwgdGhpcy5lZGl0TWVudUl0ZW0sIHRoaXMudmlld01lbnVJdGVtLCB0aGlzLnRvb2xNZW51SXRlbSlcbiAgfVxuXG4gIGdldEZpbGVNZW51KCk6IEFjdGlvbmFibGVJY29uIHtcbiAgICByZXR1cm4gdGhpcy5maWxlTWVudUl0ZW1cbiAgfVxuXG4gIGdldEVkaXRNZW51KCk6IEFjdGlvbmFibGVJY29uIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0TWVudUl0ZW1cbiAgfVxuXG4gIGdldFZpZXdNZW51KCk6IEFjdGlvbmFibGVJY29uIHtcbiAgICByZXR1cm4gdGhpcy52aWV3TWVudUl0ZW1cbiAgfVxuXG4gIGdldFRvb2xNZW51KCk6IEFjdGlvbmFibGVJY29uIHtcbiAgICByZXR1cm4gdGhpcy50b29sTWVudUl0ZW1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyXG4iXX0=