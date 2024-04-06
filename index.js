"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
const react_router_dom_1 = require("react-router-dom");
const AppContainer_1 = __importDefault(require("./layers/view/application/components/base/AppContainer"));
const customElementRegistration_1 = require("./customElementRegistration");
const react_router_dom_2 = require("react-router-dom");
const root = client_1.default.createRoot(document.getElementById('root'));
(0, customElementRegistration_1.register)();
const appContainer = new AppContainer_1.default();
appContainer.style.minWidth = (_a = process.env.REACT_APP_MIN_WIDTH) !== null && _a !== void 0 ? _a : '100vw';
appContainer.style.minHeight = (_b = process.env.REACT_APP_MIN_HEIGHT) !== null && _b !== void 0 ? _b : '100vh';
// reportWebVitals(console.log);
if ('serviceWorker' in navigator) {
    if (!navigator.serviceWorker.controller) {
        navigator.serviceWorker.register('cacher.js').catch((error) => {
            console.error('Cacher Worker registration failed:', error);
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then((registrations) => {
                    registrations.forEach((registration) => {
                        registration.unregister();
                        console.log('Service worker unregistered successfully:', registration);
                    });
                });
            }
        });
        navigator.serviceWorker.register('extension-store/extensionprovider.js').catch((error) => {
            console.error('Extension Provider Worker registration failed:', error);
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then((registrations) => {
                    registrations.forEach((registration) => {
                        registration.unregister();
                        console.log('Service worker unregistered successfully:', registration);
                    });
                });
            }
        });
    }
}
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", Component: () => (0, jsx_runtime_1.jsx)(App_1.default, { appContainer: appContainer }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", Component: () => (0, jsx_runtime_1.jsx)(react_router_dom_2.Navigate, { to: "/" }) })] }) }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ydWlnL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDhEQUF1QztBQUN2QyxnREFBdUI7QUFDdkIsdURBQStEO0FBQy9ELDBHQUFpRjtBQUNqRiwyRUFBc0Q7QUFDdEQsdURBQTJDO0FBRTNDLE1BQU0sSUFBSSxHQUFHLGdCQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFnQixDQUFDLENBQUE7QUFFaEYsSUFBQSxvQ0FBUSxHQUFFLENBQUE7QUFFVixNQUFNLFlBQVksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQTtBQUV2QyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW9CLG1DQUFJLE9BQU8sQ0FBQTtBQUN6RSxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQXFCLG1DQUFJLE9BQU8sQ0FBQTtBQUMzRSxnQ0FBZ0M7QUFFaEMsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO0lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtRQUN2QyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1RCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBRTFELElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTtnQkFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUNoRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7d0JBQ3JDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTt3QkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxZQUFZLENBQUMsQ0FBQTtvQkFDeEUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO1FBRUYsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2RixPQUFPLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBRXRFLElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTtnQkFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUNoRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7d0JBQ3JDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTt3QkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxZQUFZLENBQUMsQ0FBQTtvQkFDeEUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0tBQ0g7Q0FDRjtBQUVELElBQUksQ0FBQyxNQUFNLENBQ1QsdUJBQUMsZ0NBQWEsY0FDWix3QkFBQyx5QkFBTSxlQUNMLHVCQUFDLHdCQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsdUJBQUMsYUFBRyxJQUFDLFlBQVksRUFBRSxZQUFZLEdBQUksR0FBSSxFQUN4RSx1QkFBQyx3QkFBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLHVCQUFDLDJCQUFRLElBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRyxHQUFJLElBQ2pELEdBQ0ssQ0FDakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9BcHBDb250YWluZXInXG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vY3VzdG9tRWxlbWVudFJlZ2lzdHJhdGlvbidcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSBhcyBIVE1MRWxlbWVudClcblxucmVnaXN0ZXIoKVxuXG5jb25zdCBhcHBDb250YWluZXIgPSBuZXcgQXBwQ29udGFpbmVyKClcblxuYXBwQ29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01JTl9XSURUSCEgPz8gJzEwMHZ3J1xuYXBwQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NSU5fSEVJR0hUISA/PyAnMTAwdmgnXG4vLyByZXBvcnRXZWJWaXRhbHMoY29uc29sZS5sb2cpO1xuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignY2FjaGVyLmpzJykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYWNoZXIgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6JywgZXJyb3IpXG5cbiAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKS50aGVuKChyZWdpc3RyYXRpb25zKSA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9ucy5mb3JFYWNoKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciB1bnJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5OicsIHJlZ2lzdHJhdGlvbilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignZXh0ZW5zaW9uLXN0b3JlL2V4dGVuc2lvbnByb3ZpZGVyLmpzJykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFeHRlbnNpb24gUHJvdmlkZXIgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6JywgZXJyb3IpXG5cbiAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKS50aGVuKChyZWdpc3RyYXRpb25zKSA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9ucy5mb3JFYWNoKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciB1bnJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5OicsIHJlZ2lzdHJhdGlvbilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxucm9vdC5yZW5kZXIoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBDb21wb25lbnQ9eygpID0+IDxBcHAgYXBwQ29udGFpbmVyPXthcHBDb250YWluZXJ9IC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgQ29tcG9uZW50PXsoKSA9PiA8TmF2aWdhdGUgdG89XCIvXCIgLz59IC8+XG4gICAgPC9Sb3V0ZXM+XG4gIDwvQnJvd3NlclJvdXRlcj4sXG4pXG4iXX0=