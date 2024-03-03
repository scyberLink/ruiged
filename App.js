import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
// import reportWebVitals from './common/reportWebVitals'
import AppContainer from './layers/view/application/components/base/AppContainer';
import { Link } from 'react-router-dom';
import { EXTENSION } from './configs/RestEndpoints';
function App({ extensions = [] }) {
    useEffect(() => {
        const appContainer = new AppContainer();
        appContainer.style.minWidth = process.env.REACT_APP_MIN_WIDTH ?? '100vw';
        appContainer.style.minHeight = process.env.REACT_APP_MIN_HEIGHT ?? '100vh';
        // reportWebVitals(console.log);
        const body = document.getElementById('app');
        body?.appendChild(appContainer);
        for (const extension of extensions) {
            new extension(appContainer);
        }
    }, []);
    useEffect(() => {
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
    return (_jsx(_Fragment, { children: _jsxs("div", { id: "app", children: [_jsx(Link, { id: "extension", to: EXTENSION, style: {
                        background: 'red',
                        /* border: '1px solid red', borderRadius: '5px', */ position: 'fixed',
                        zIndex: '999999',
                        top: 0,
                        right: 0,
                        width: '10px',
                        height: '10px',
                    }, children: ' ' }), _jsx("style", { children: `
          #extension:before {
            content: '\\eb51';
          }
          ` })] }) }));
}
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDeEMseURBQXlEO0FBQ3pELE9BQU8sWUFBWSxNQUFNLHdEQUF3RCxDQUFBO0FBQ2pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFHbkQsU0FBUyxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFjO0lBQzFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBRXZDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW9CLElBQUksT0FBTyxDQUFBO1FBQ3pFLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQXFCLElBQUksT0FBTyxDQUFBO1FBQzNFLGdDQUFnQztRQUNoQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNDLElBQUksRUFBRSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFL0IsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEMsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDNUI7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFTixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtnQkFDdkMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzVELE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLENBQUE7b0JBRTFELElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTt3QkFDaEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFOzRCQUNoRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0NBQ3JDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQ0FDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxZQUFZLENBQUMsQ0FBQTs0QkFDeEUsQ0FBQyxDQUFDLENBQUE7d0JBQ0osQ0FBQyxDQUFDLENBQUE7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdkYsT0FBTyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsRUFBRSxLQUFLLENBQUMsQ0FBQTtvQkFFdEUsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO3dCQUNoQyxTQUFTLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7NEJBQ2hFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQ0FDckMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dDQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLFlBQVksQ0FBQyxDQUFBOzRCQUN4RSxDQUFDLENBQUMsQ0FBQTt3QkFDSixDQUFDLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFTixPQUFPLENBQ0wsNEJBQ0UsZUFBSyxFQUFFLEVBQUMsS0FBSyxhQUNYLEtBQUMsSUFBSSxJQUNILEVBQUUsRUFBQyxXQUFXLEVBQ2QsRUFBRSxFQUFFLFNBQVMsRUFDYixLQUFLLEVBQUU7d0JBQ0wsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLG1EQUFtRCxDQUFDLFFBQVEsRUFBRSxPQUFPO3dCQUNyRSxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsR0FBRyxFQUFFLENBQUM7d0JBQ04sS0FBSyxFQUFFLENBQUM7d0JBQ1IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsTUFBTSxFQUFFLE1BQU07cUJBQ2YsWUFFQSxHQUFHLEdBQ0MsRUFDUCwwQkFBUTs7OztXQUlMLEdBQVMsSUFDUixHQUNMLENBQ0osQ0FBQTtBQUNILENBQUM7QUFFRCxlQUFlLEdBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCByZXBvcnRXZWJWaXRhbHMgZnJvbSAnLi9jb21tb24vcmVwb3J0V2ViVml0YWxzJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuL2xheWVycy92aWV3L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvYmFzZS9BcHBDb250YWluZXInXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEVYVEVOU0lPTiB9IGZyb20gJy4vY29uZmlncy9SZXN0RW5kcG9pbnRzJ1xuaW1wb3J0IElBbnlPYmplY3QgZnJvbSAnLi9jb21tb24vbW9kZWxzL0lBbnlPYmplY3QnXG5cbmZ1bmN0aW9uIEFwcCh7IGV4dGVuc2lvbnMgPSBbXSB9OiBJQW55T2JqZWN0KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gbmV3IEFwcENvbnRhaW5lcigpXG5cbiAgICBhcHBDb250YWluZXIuc3R5bGUubWluV2lkdGggPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUlOX1dJRFRIISA/PyAnMTAwdncnXG4gICAgYXBwQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9NSU5fSEVJR0hUISA/PyAnMTAwdmgnXG4gICAgLy8gcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgYm9keT8uYXBwZW5kQ2hpbGQoYXBwQ29udGFpbmVyKVxuXG4gICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAgICAgbmV3IGV4dGVuc2lvbihhcHBDb250YWluZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ2NhY2hlci5qcycpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhY2hlciBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDonLCBlcnJvcilcblxuICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb25zKCkudGhlbigocmVnaXN0cmF0aW9ucykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RyYXRpb25zLmZvckVhY2goKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgdW5yZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseTonLCByZWdpc3RyYXRpb24pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignZXh0ZW5zaW9uLXN0b3JlL2V4dGVuc2lvbnByb3ZpZGVyLmpzJykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXh0ZW5zaW9uIFByb3ZpZGVyIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOicsIGVycm9yKVxuXG4gICAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKS50aGVuKChyZWdpc3RyYXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnMuZm9yRWFjaCgocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciB1bnJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5OicsIHJlZ2lzdHJhdGlvbilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGlkPVwiZXh0ZW5zaW9uXCJcbiAgICAgICAgICB0bz17RVhURU5TSU9OfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmVkJyxcbiAgICAgICAgICAgIC8qIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCAqLyBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogJzk5OTk5OScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAjZXh0ZW5zaW9uOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnXFxcXGViNTEnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdfQ==