"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// import reportWebVitals from './common/reportWebVitals'
const AppContainer_1 = __importDefault(require("./layers/view/application/components/base/AppContainer"));
const react_router_dom_1 = require("react-router-dom");
const RestEndpoints_1 = require("./configs/RestEndpoints");
function App({ extensions = [] }) {
    (0, react_1.useEffect)(() => {
        var _a, _b;
        const appContainer = new AppContainer_1.default();
        appContainer.style.minWidth = (_a = process.env.REACT_APP_MIN_WIDTH) !== null && _a !== void 0 ? _a : '100vw';
        appContainer.style.minHeight = (_b = process.env.REACT_APP_MIN_HEIGHT) !== null && _b !== void 0 ? _b : '100vh';
        // reportWebVitals(console.log);
        const body = document.getElementById('app');
        body === null || body === void 0 ? void 0 : body.appendChild(appContainer);
        for (const extension of extensions) {
            new extension(appContainer);
        }
    }, []);
    (0, react_1.useEffect)(() => {
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
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "app" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ id: "extension", to: RestEndpoints_1.EXTENSION, style: {
                        background: 'red',
                        /* border: '1px solid red', borderRadius: '5px', */ position: 'fixed',
                        zIndex: '999999',
                        top: 0,
                        right: 0,
                        width: '10px',
                        height: '10px',
                    } }, { children: ' ' })), (0, jsx_runtime_1.jsx)("style", { children: `
          #extension:before {
            content: '\\eb51';
          }
          ` })] })) }));
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQXdDO0FBQ3hDLHlEQUF5RDtBQUN6RCwwR0FBaUY7QUFDakYsdURBQXVDO0FBQ3ZDLDJEQUFtRDtBQUduRCxTQUFTLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQWM7SUFDMUMsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTs7UUFDYixNQUFNLFlBQVksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQTtRQUV2QyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW9CLG1DQUFJLE9BQU8sQ0FBQTtRQUN6RSxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQXFCLG1DQUFJLE9BQU8sQ0FBQTtRQUMzRSxnQ0FBZ0M7UUFDaEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRS9CLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2xDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRU4sSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUM1RCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxDQUFBO29CQUUxRCxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7d0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTs0QkFDaEUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dDQUNyQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUE7Z0NBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsWUFBWSxDQUFDLENBQUE7NEJBQ3hFLENBQUMsQ0FBQyxDQUFBO3dCQUNKLENBQUMsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUMsQ0FBQyxDQUFBO2dCQUVGLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZGLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEVBQUUsS0FBSyxDQUFDLENBQUE7b0JBRXRFLElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTt3QkFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFOzRCQUNoRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0NBQ3JDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQ0FDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxZQUFZLENBQUMsQ0FBQTs0QkFDeEUsQ0FBQyxDQUFDLENBQUE7d0JBQ0osQ0FBQyxDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7YUFDSDtTQUNGO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRU4sT0FBTyxDQUNMLDJEQUNFLCtDQUFLLEVBQUUsRUFBQyxLQUFLLGlCQUNYLHVCQUFDLHVCQUFJLGtCQUNILEVBQUUsRUFBQyxXQUFXLEVBQ2QsRUFBRSxFQUFFLHlCQUFTLEVBQ2IsS0FBSyxFQUFFO3dCQUNMLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixtREFBbUQsQ0FBQyxRQUFRLEVBQUUsT0FBTzt3QkFDckUsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLEdBQUcsRUFBRSxDQUFDO3dCQUNOLEtBQUssRUFBRSxDQUFDO3dCQUNSLEtBQUssRUFBRSxNQUFNO3dCQUNiLE1BQU0sRUFBRSxNQUFNO3FCQUNmLGdCQUVBLEdBQUcsSUFDQyxFQUNQLDRDQUFROzs7O1dBSUwsR0FBUyxLQUNSLEdBQ0wsQ0FDSixDQUFBO0FBQ0gsQ0FBQztBQUVELGtCQUFlLEdBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCByZXBvcnRXZWJWaXRhbHMgZnJvbSAnLi9jb21tb24vcmVwb3J0V2ViVml0YWxzJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9BcHBDb250YWluZXInXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEVYVEVOU0lPTiB9IGZyb20gJy4vY29uZmlncy9SZXN0RW5kcG9pbnRzJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5cbmZ1bmN0aW9uIEFwcCh7IGV4dGVuc2lvbnMgPSBbXSB9OiBJQW55T2JqZWN0KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gbmV3IEFwcENvbnRhaW5lcigpXG5cbiAgICBhcHBDb250YWluZXIuc3R5bGUubWluV2lkdGggPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUlOX1dJRFRIISA/PyAnMTAwdncnXG4gICAgYXBwQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NSU5fSEVJR0hUISA/PyAnMTAwdmgnXG4gICAgLy8gcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgYm9keT8uYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyKVxuXG4gICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAgICAgbmV3IGV4dGVuc2lvbihhcHBDb250YWluZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ2NhY2hlci5qcycpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhY2hlciBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDonLCBlcnJvcilcblxuICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb25zKCkudGhlbigocmVnaXN0cmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RyYXRpb25zLmZvckVhY2goKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgdW5yZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseTonLCByZWdpc3RyYXRpb24pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignZXh0ZW5zaW9uLXN0b3JlL2V4dGVuc2lvbnByb3ZpZGVyLmpzJykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXh0ZW5zaW9uIFByb3ZpZGVyIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOicsIGVycm9yKVxuXG4gICAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKS50aGVuKChyZWdpc3RyYXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnMuZm9yRWFjaCgocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciB1bnJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5OicsIHJlZ2lzdHJhdGlvbilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGlkPVwiZXh0ZW5zaW9uXCJcbiAgICAgICAgICB0bz17RVhURU5TSU9OfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmVkJyxcbiAgICAgICAgICAgIC8qIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCAqLyBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogJzk5OTk5OScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAjZXh0ZW5zaW9uOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnXFxcXGViNTEnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdfQ==