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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcnVpZy9zcmMvQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBd0M7QUFDeEMseURBQXlEO0FBQ3pELDBHQUFpRjtBQUNqRix1REFBdUM7QUFDdkMsMkRBQW1EO0FBR25ELFNBQVMsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBYztJQUMxQyxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFOztRQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFBO1FBRXZDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBb0IsbUNBQUksT0FBTyxDQUFBO1FBQ3pFLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBcUIsbUNBQUksT0FBTyxDQUFBO1FBQzNFLGdDQUFnQztRQUNoQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFL0IsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEMsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDNUI7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFTixJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtnQkFDdkMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLENBQUE7b0JBRTFELElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTt3QkFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFOzRCQUNoRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0NBQ3JDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQ0FDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxZQUFZLENBQUMsQ0FBQTs0QkFDeEUsQ0FBQyxDQUFDLENBQUE7d0JBQ0osQ0FBQyxDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdkYsT0FBTyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxLQUFLLENBQUMsQ0FBQTtvQkFFdEUsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO3dCQUNoQyxTQUFTLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7NEJBQ2hFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQ0FDckMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dDQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLFlBQVksQ0FBQyxDQUFBOzRCQUN4RSxDQUFDLENBQUMsQ0FBQTt3QkFDSixDQUFDLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFTixPQUFPLENBQ0wsMkRBQ0UsK0NBQUssRUFBRSxFQUFDLEtBQUssaUJBQ1gsdUJBQUMsdUJBQUksa0JBQ0gsRUFBRSxFQUFDLFdBQVcsRUFDZCxFQUFFLEVBQUUseUJBQVMsRUFDYixLQUFLLEVBQUU7d0JBQ0wsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLG1EQUFtRCxDQUFDLFFBQVEsRUFBRSxPQUFPO3dCQUNyRSxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsR0FBRyxFQUFFLENBQUM7d0JBQ04sS0FBSyxFQUFFLENBQUM7d0JBQ1IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsTUFBTSxFQUFFLE1BQU07cUJBQ2YsZ0JBRUEsR0FBRyxJQUNDLEVBQ1AsNENBQVE7Ozs7V0FJTCxHQUFTLEtBQ1IsR0FDTCxDQUNKLENBQUE7QUFDSCxDQUFDO0FBRUQsa0JBQWUsR0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHJlcG9ydFdlYlZpdGFscyBmcm9tICcuL2NvbW1vbi9yZXBvcnRXZWJWaXRhbHMnXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vbGF5ZXJzL3ZpZXcvYXBwbGljYXRpb24vY29tcG9uZW50cy9iYXNlL0FwcENvbnRhaW5lcidcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRVhURU5TSU9OIH0gZnJvbSAnLi9jb25maWdzL1Jlc3RFbmRwb2ludHMnXG5pbXBvcnQgSUFueU9iamVjdCBmcm9tICcuL2NvbW1vbi9tb2RlbHMvSUFueU9iamVjdCdcblxuZnVuY3Rpb24gQXBwKHsgZXh0ZW5zaW9ucyA9IFtdIH06IElBbnlPYmplY3QpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhcHBDb250YWluZXIgPSBuZXcgQXBwQ29udGFpbmVyKClcblxuICAgIGFwcENvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NSU5fV0lEVEghID8/ICcxMDB2dydcbiAgICBhcHBDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01JTl9IRUlHSFQhID8/ICcxMDB2aCdcbiAgICAvLyByZXBvcnRXZWJWaXRhbHMoY29uc29sZS5sb2cpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICBib2R5Py5hcHBlbmRDaGlsZChhcHBDb250YWluZXIpXG5cbiAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbiBvZiBleHRlbnNpb25zKSB7XG4gICAgICBuZXcgZXh0ZW5zaW9uKGFwcENvbnRhaW5lcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIGlmICghbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignY2FjaGVyLmpzJykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQ2FjaGVyIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOicsIGVycm9yKVxuXG4gICAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKS50aGVuKChyZWdpc3RyYXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnMuZm9yRWFjaCgocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciB1bnJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5OicsIHJlZ2lzdHJhdGlvbilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdleHRlbnNpb24tc3RvcmUvZXh0ZW5zaW9ucHJvdmlkZXIuanMnKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFeHRlbnNpb24gUHJvdmlkZXIgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6JywgZXJyb3IpXG5cbiAgICAgICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9ucygpLnRoZW4oKHJlZ2lzdHJhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9ucy5mb3JFYWNoKChyZWdpc3RyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHVucmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHk6JywgcmVnaXN0cmF0aW9uKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaWQ9XCJleHRlbnNpb25cIlxuICAgICAgICAgIHRvPXtFWFRFTlNJT059XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZWQnLFxuICAgICAgICAgICAgLyogYm9yZGVyOiAnMXB4IHNvbGlkIHJlZCcsIGJvcmRlclJhZGl1czogJzVweCcsICovIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgekluZGV4OiAnOTk5OTk5JyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICNleHRlbnNpb246YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXFxcZWI1MSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl19