"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const ExtensionManager_1 = __importDefault(require("./extension/page/ExtensionManager"));
function App({ extensions = [], appContainer }) {
    const [showingExtension, setShowingExtension] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const body = document.getElementById('app');
        body === null || body === void 0 ? void 0 : body.appendChild(appContainer);
        for (const extension of extensions) {
            new extension(appContainer);
        }
        return () => {
            body === null || body === void 0 ? void 0 : body.removeChild(appContainer);
        };
    }, []);
    const openExtensionDialog = (e) => {
        e.preventDefault();
        appContainer.toggleDisplay();
        setShowingExtension(!showingExtension);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "app" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                        position: 'fixed',
                        zIndex: '999999',
                        top: 0,
                        right: 0,
                        width: '20px',
                        height: '40px',
                        border: 0,
                        borderRadius: '5px',
                    } }, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: openExtensionDialog, style: {
                                background: showingExtension ? 'blue' : 'red',
                                height: '20px',
                            } }), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/", style: {
                                background: 'pink',
                                height: '20px',
                            } }, { children: "R" }))] })), showingExtension ? (0, jsx_runtime_1.jsx)(ExtensionManager_1.default, {}) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] })) }));
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcnVpZy9zcmMvQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsaUNBQWtEO0FBR2xELHlGQUFnRTtBQUVoRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFnRTtJQUMxRyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFFL0QsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMvQixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNsQyxJQUFLLFNBQWlCLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDckM7UUFFRCxPQUFPLEdBQUcsRUFBRTtZQUNWLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRU4sTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ3JDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixZQUFZLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDNUIsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3hDLENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FDTCwyREFDRSwrQ0FBSyxFQUFFLEVBQUMsS0FBSyxpQkFDWCwrQ0FDRSxLQUFLLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLE1BQU0sRUFBRSxRQUFRO3dCQUNoQixHQUFHLEVBQUUsQ0FBQzt3QkFDTixLQUFLLEVBQUUsQ0FBQzt3QkFDUixLQUFLLEVBQUUsTUFBTTt3QkFDYixNQUFNLEVBQUUsTUFBTTt3QkFDZCxNQUFNLEVBQUUsQ0FBQzt3QkFDVCxZQUFZLEVBQUUsS0FBSztxQkFDcEIsaUJBRUQsbUNBQ0UsT0FBTyxFQUFFLG1CQUFtQixFQUM1QixLQUFLLEVBQUU7Z0NBQ0wsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0NBQzdDLE1BQU0sRUFBRSxNQUFNOzZCQUNmLEdBQ0QsRUFFRiw0Q0FDRSxJQUFJLEVBQUMsR0FBRyxFQUNSLEtBQUssRUFBRTtnQ0FDTCxVQUFVLEVBQUUsTUFBTTtnQ0FDbEIsTUFBTSxFQUFFLE1BQU07NkJBQ2YsdUJBR0MsS0FDQSxFQUNMLGdCQUFnQixDQUFDLENBQUMsQ0FBQyx1QkFBQywwQkFBZ0IsS0FBRyxDQUFDLENBQUMsQ0FBQyxrREFBSyxLQUM1QyxHQUNMLENBQ0osQ0FBQTtBQUNILENBQUM7QUFFRCxrQkFBZSxHQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9BcHBDb250YWluZXInXG5pbXBvcnQgQmFzZUV4dGVuc2lvbiBmcm9tICcuL2V4dGVuc2lvbi9CYXNlRXh0ZW5zaW9uJ1xuaW1wb3J0IEV4dGVuc2lvbk1hbmFnZXIgZnJvbSAnLi9leHRlbnNpb24vcGFnZS9FeHRlbnNpb25NYW5hZ2VyJ1xuXG5mdW5jdGlvbiBBcHAoeyBleHRlbnNpb25zID0gW10sIGFwcENvbnRhaW5lciB9OiB7IGV4dGVuc2lvbnM/OiBCYXNlRXh0ZW5zaW9uW107IGFwcENvbnRhaW5lcjogQXBwQ29udGFpbmVyIH0pIHtcbiAgY29uc3QgW3Nob3dpbmdFeHRlbnNpb24sIHNldFNob3dpbmdFeHRlbnNpb25dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgYm9keT8uYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyKVxuICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uIG9mIGV4dGVuc2lvbnMpIHtcbiAgICAgIG5ldyAoZXh0ZW5zaW9uIGFzIGFueSkoYXBwQ29udGFpbmVyKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBib2R5Py5yZW1vdmVDaGlsZChhcHBDb250YWluZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvcGVuRXh0ZW5zaW9uRGlhbG9nID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGFwcENvbnRhaW5lci50b2dnbGVEaXNwbGF5KClcbiAgICBzZXRTaG93aW5nRXh0ZW5zaW9uKCFzaG93aW5nRXh0ZW5zaW9uKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgekluZGV4OiAnOTk5OTk5JyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b3BlbkV4dGVuc2lvbkRpYWxvZ31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNob3dpbmdFeHRlbnNpb24gPyAnYmx1ZScgOiAncmVkJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3BpbmsnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaG93aW5nRXh0ZW5zaW9uID8gPEV4dGVuc2lvbk1hbmFnZXIgLz4gOiA8PjwvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl19