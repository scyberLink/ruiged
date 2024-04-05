"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHAREDCONFIG_ADDTOOBJECT_INITIAL_INDEX = exports.EVENT_EXTENSION_UNINSTALL = exports.EVENT_EXTENSION_DISABLE = exports.EVENT_EXTENSION_ENABLE = exports.EVENT_EXTENSION_MANUAL_INSTALL = exports.EVENT_EXTENSION_INSTALL = exports.EXTENSION_EVENT_DATA = exports.RUIG_EXTENSION_INTERFACE = exports.RUIGEM = exports.EXTENSION_POOL = exports.DISABLED_EXTENSION = exports.ENABLED_EXTENSION = exports.MANUAL_INSTALLED_EXTENSION = exports.INSTALLED_EXTENSION = exports.BUILTIN_EXTENSION = exports.EXTENSION_SCRIPT = exports.APPCONTAINER = exports.EXTENDED_TOOLS = exports.DESIGN_ELEMENT_EVENT_DATA = exports.EVENT_SELECT = exports.EVENT_DESELECT = exports.CLIPBOARD = exports.CONTEXT_MENU = exports.DESIGN_ELEMENT_WRAPPER = exports.DRAWING_CANVAS_MOUSE_COORDINATE = exports.DRAWING_CANVAS = exports.ACTIVE_ELEMENT = exports.MAX_Z_INDEX = exports.MIN_Z_INDEX = exports.DECADE = exports.YEAR = exports.MONTH = exports.WEEK = exports.DAY = exports.HOUR = exports.MINUTE = exports.MIN = exports.SECOND = exports.SEC = exports.MILLISECOND = exports.MILLIS = void 0;
exports.MILLIS = 1;
exports.MILLISECOND = 1;
exports.SEC = exports.MILLIS * 1000;
exports.SECOND = exports.MILLIS * 1000;
exports.MIN = exports.SECOND * 60;
exports.MINUTE = exports.SECOND * 60;
exports.HOUR = exports.MINUTE * 60;
exports.DAY = exports.HOUR * 24;
exports.WEEK = exports.DAY * 7;
exports.MONTH = 2628002880;
exports.YEAR = 31536000000;
exports.DECADE = 315360000000;
exports.MIN_Z_INDEX = '-99999';
exports.MAX_Z_INDEX = '99999';
exports.ACTIVE_ELEMENT = 'selectedElement';
exports.DRAWING_CANVAS = 'drawingCanvas';
exports.DRAWING_CANVAS_MOUSE_COORDINATE = 'mouseCoordinate';
exports.DESIGN_ELEMENT_WRAPPER = 'designElementWrapper';
exports.CONTEXT_MENU = 'contextMenu';
exports.CLIPBOARD = 'clipboard';
exports.EVENT_DESELECT = 'designElementDeselection';
exports.EVENT_SELECT = 'designElementSelection';
exports.DESIGN_ELEMENT_EVENT_DATA = 'designElementEventData';
exports.EXTENDED_TOOLS = 'extendedTools';
exports.APPCONTAINER = 'appContainer';
exports.EXTENSION_SCRIPT = 'extensionScript';
exports.BUILTIN_EXTENSION = 'builtinExtension';
exports.INSTALLED_EXTENSION = 'installedExtension';
exports.MANUAL_INSTALLED_EXTENSION = 'manualInstalledExtension';
exports.ENABLED_EXTENSION = 'enabledExtension';
exports.DISABLED_EXTENSION = 'disabledExtension';
exports.EXTENSION_POOL = 'extensionPool';
exports.RUIGEM = 'extension.min.ruigem';
exports.RUIG_EXTENSION_INTERFACE = 'REI';
exports.EXTENSION_EVENT_DATA = 'extensionEventData';
exports.EVENT_EXTENSION_INSTALL = 'eventExtensionInstall';
exports.EVENT_EXTENSION_MANUAL_INSTALL = 'eventExtensionManualInstall';
exports.EVENT_EXTENSION_ENABLE = 'eventExtensionEnable';
exports.EVENT_EXTENSION_DISABLE = 'eventExtensionDisable';
exports.EVENT_EXTENSION_UNINSTALL = 'eventExtensionUninstall';
exports.SHAREDCONFIG_ADDTOOBJECT_INITIAL_INDEX = 'SharedConfigAddToObjectInitialIndex';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcnVpZy9zcmMvY29tbW9uL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLE1BQU0sR0FBRyxDQUFDLENBQUE7QUFDVixRQUFBLFdBQVcsR0FBRyxDQUFDLENBQUE7QUFDZixRQUFBLEdBQUcsR0FBRyxjQUFNLEdBQUcsSUFBSSxDQUFBO0FBQ25CLFFBQUEsTUFBTSxHQUFHLGNBQU0sR0FBRyxJQUFJLENBQUE7QUFDdEIsUUFBQSxHQUFHLEdBQUcsY0FBTSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixRQUFBLE1BQU0sR0FBRyxjQUFNLEdBQUcsRUFBRSxDQUFBO0FBQ3BCLFFBQUEsSUFBSSxHQUFHLGNBQU0sR0FBRyxFQUFFLENBQUE7QUFDbEIsUUFBQSxHQUFHLEdBQUcsWUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUNmLFFBQUEsSUFBSSxHQUFHLFdBQUcsR0FBRyxDQUFDLENBQUE7QUFDZCxRQUFBLEtBQUssR0FBRyxVQUFhLENBQUE7QUFDckIsUUFBQSxJQUFJLEdBQUcsV0FBYyxDQUFBO0FBQ3JCLFFBQUEsTUFBTSxHQUFHLFlBQWUsQ0FBQTtBQUV4QixRQUFBLFdBQVcsR0FBRyxRQUFRLENBQUE7QUFDdEIsUUFBQSxXQUFXLEdBQUcsT0FBTyxDQUFBO0FBRXJCLFFBQUEsY0FBYyxHQUFHLGlCQUFpQixDQUFBO0FBQ2xDLFFBQUEsY0FBYyxHQUFHLGVBQWUsQ0FBQTtBQUNoQyxRQUFBLCtCQUErQixHQUFHLGlCQUFpQixDQUFBO0FBQ25ELFFBQUEsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUE7QUFDL0MsUUFBQSxZQUFZLEdBQUcsYUFBYSxDQUFBO0FBQzVCLFFBQUEsU0FBUyxHQUFHLFdBQVcsQ0FBQTtBQUN2QixRQUFBLGNBQWMsR0FBRywwQkFBMEIsQ0FBQTtBQUMzQyxRQUFBLFlBQVksR0FBRyx3QkFBd0IsQ0FBQTtBQUN2QyxRQUFBLHlCQUF5QixHQUFHLHdCQUF3QixDQUFBO0FBQ3BELFFBQUEsY0FBYyxHQUFHLGVBQWUsQ0FBQTtBQUNoQyxRQUFBLFlBQVksR0FBRyxjQUFjLENBQUE7QUFFN0IsUUFBQSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQTtBQUNwQyxRQUFBLGlCQUFpQixHQUFHLGtCQUFrQixDQUFBO0FBQ3RDLFFBQUEsbUJBQW1CLEdBQUcsb0JBQW9CLENBQUE7QUFDMUMsUUFBQSwwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQTtBQUN2RCxRQUFBLGlCQUFpQixHQUFHLGtCQUFrQixDQUFBO0FBQ3RDLFFBQUEsa0JBQWtCLEdBQUcsbUJBQW1CLENBQUE7QUFFeEMsUUFBQSxjQUFjLEdBQUcsZUFBZSxDQUFBO0FBQ2hDLFFBQUEsTUFBTSxHQUFHLHNCQUFzQixDQUFBO0FBQy9CLFFBQUEsd0JBQXdCLEdBQUcsS0FBSyxDQUFBO0FBRWhDLFFBQUEsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUE7QUFDM0MsUUFBQSx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQTtBQUNqRCxRQUFBLDhCQUE4QixHQUFHLDZCQUE2QixDQUFBO0FBQzlELFFBQUEsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUE7QUFDL0MsUUFBQSx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQTtBQUNqRCxRQUFBLHlCQUF5QixHQUFHLHlCQUF5QixDQUFBO0FBRXJELFFBQUEsc0NBQXNDLEdBQUcscUNBQXFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTUlMTElTID0gMVxuZXhwb3J0IGNvbnN0IE1JTExJU0VDT05EID0gMVxuZXhwb3J0IGNvbnN0IFNFQyA9IE1JTExJUyAqIDEwMDBcbmV4cG9ydCBjb25zdCBTRUNPTkQgPSBNSUxMSVMgKiAxMDAwXG5leHBvcnQgY29uc3QgTUlOID0gU0VDT05EICogNjBcbmV4cG9ydCBjb25zdCBNSU5VVEUgPSBTRUNPTkQgKiA2MFxuZXhwb3J0IGNvbnN0IEhPVVIgPSBNSU5VVEUgKiA2MFxuZXhwb3J0IGNvbnN0IERBWSA9IEhPVVIgKiAyNFxuZXhwb3J0IGNvbnN0IFdFRUsgPSBEQVkgKiA3XG5leHBvcnQgY29uc3QgTU9OVEggPSAyXzYyOF8wMDJfODgwXG5leHBvcnQgY29uc3QgWUVBUiA9IDMxXzUzNl8wMDBfMDAwXG5leHBvcnQgY29uc3QgREVDQURFID0gMzE1XzM2MF8wMDBfMDAwXG5cbmV4cG9ydCBjb25zdCBNSU5fWl9JTkRFWCA9ICctOTk5OTknXG5leHBvcnQgY29uc3QgTUFYX1pfSU5ERVggPSAnOTk5OTknXG5cbmV4cG9ydCBjb25zdCBBQ1RJVkVfRUxFTUVOVCA9ICdzZWxlY3RlZEVsZW1lbnQnXG5leHBvcnQgY29uc3QgRFJBV0lOR19DQU5WQVMgPSAnZHJhd2luZ0NhbnZhcydcbmV4cG9ydCBjb25zdCBEUkFXSU5HX0NBTlZBU19NT1VTRV9DT09SRElOQVRFID0gJ21vdXNlQ29vcmRpbmF0ZSdcbmV4cG9ydCBjb25zdCBERVNJR05fRUxFTUVOVF9XUkFQUEVSID0gJ2Rlc2lnbkVsZW1lbnRXcmFwcGVyJ1xuZXhwb3J0IGNvbnN0IENPTlRFWFRfTUVOVSA9ICdjb250ZXh0TWVudSdcbmV4cG9ydCBjb25zdCBDTElQQk9BUkQgPSAnY2xpcGJvYXJkJ1xuZXhwb3J0IGNvbnN0IEVWRU5UX0RFU0VMRUNUID0gJ2Rlc2lnbkVsZW1lbnREZXNlbGVjdGlvbidcbmV4cG9ydCBjb25zdCBFVkVOVF9TRUxFQ1QgPSAnZGVzaWduRWxlbWVudFNlbGVjdGlvbidcbmV4cG9ydCBjb25zdCBERVNJR05fRUxFTUVOVF9FVkVOVF9EQVRBID0gJ2Rlc2lnbkVsZW1lbnRFdmVudERhdGEnXG5leHBvcnQgY29uc3QgRVhURU5ERURfVE9PTFMgPSAnZXh0ZW5kZWRUb29scydcbmV4cG9ydCBjb25zdCBBUFBDT05UQUlORVIgPSAnYXBwQ29udGFpbmVyJ1xuXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX1NDUklQVCA9ICdleHRlbnNpb25TY3JpcHQnXG5leHBvcnQgY29uc3QgQlVJTFRJTl9FWFRFTlNJT04gPSAnYnVpbHRpbkV4dGVuc2lvbidcbmV4cG9ydCBjb25zdCBJTlNUQUxMRURfRVhURU5TSU9OID0gJ2luc3RhbGxlZEV4dGVuc2lvbidcbmV4cG9ydCBjb25zdCBNQU5VQUxfSU5TVEFMTEVEX0VYVEVOU0lPTiA9ICdtYW51YWxJbnN0YWxsZWRFeHRlbnNpb24nXG5leHBvcnQgY29uc3QgRU5BQkxFRF9FWFRFTlNJT04gPSAnZW5hYmxlZEV4dGVuc2lvbidcbmV4cG9ydCBjb25zdCBESVNBQkxFRF9FWFRFTlNJT04gPSAnZGlzYWJsZWRFeHRlbnNpb24nXG5cbmV4cG9ydCBjb25zdCBFWFRFTlNJT05fUE9PTCA9ICdleHRlbnNpb25Qb29sJ1xuZXhwb3J0IGNvbnN0IFJVSUdFTSA9ICdleHRlbnNpb24ubWluLnJ1aWdlbSdcbmV4cG9ydCBjb25zdCBSVUlHX0VYVEVOU0lPTl9JTlRFUkZBQ0UgPSAnUkVJJ1xuXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX0VWRU5UX0RBVEEgPSAnZXh0ZW5zaW9uRXZlbnREYXRhJ1xuZXhwb3J0IGNvbnN0IEVWRU5UX0VYVEVOU0lPTl9JTlNUQUxMID0gJ2V2ZW50RXh0ZW5zaW9uSW5zdGFsbCdcbmV4cG9ydCBjb25zdCBFVkVOVF9FWFRFTlNJT05fTUFOVUFMX0lOU1RBTEwgPSAnZXZlbnRFeHRlbnNpb25NYW51YWxJbnN0YWxsJ1xuZXhwb3J0IGNvbnN0IEVWRU5UX0VYVEVOU0lPTl9FTkFCTEUgPSAnZXZlbnRFeHRlbnNpb25FbmFibGUnXG5leHBvcnQgY29uc3QgRVZFTlRfRVhURU5TSU9OX0RJU0FCTEUgPSAnZXZlbnRFeHRlbnNpb25EaXNhYmxlJ1xuZXhwb3J0IGNvbnN0IEVWRU5UX0VYVEVOU0lPTl9VTklOU1RBTEwgPSAnZXZlbnRFeHRlbnNpb25Vbmluc3RhbGwnXG5cbmV4cG9ydCBjb25zdCBTSEFSRURDT05GSUdfQUREVE9PQkpFQ1RfSU5JVElBTF9JTkRFWCA9ICdTaGFyZWRDb25maWdBZGRUb09iamVjdEluaXRpYWxJbmRleCdcbiJdfQ==