"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customElementRegistration_1 = require("./customElementRegistration");
const AppContainer_1 = __importDefault(require("./layers/view/application/components/base/AppContainer"));
const initAppContainer = () => {
    var _a, _b;
    (0, customElementRegistration_1.register)();
    const appContainer = new AppContainer_1.default();
    appContainer.style.minWidth = (_a = process.env.REACT_APP_MIN_WIDTH) !== null && _a !== void 0 ? _a : '100vw';
    appContainer.style.minHeight = (_b = process.env.REACT_APP_MIN_HEIGHT) !== null && _b !== void 0 ? _b : '100vh';
    // reportWebVitals(console.log);
    if ('serviceWorker' in navigator) {
        if (!navigator.serviceWorker.controller) {
            navigator.serviceWorker.register('sw.js').catch((error) => {
                console.error('Worker registration failed:', error);
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
    return appContainer;
};
exports.default = initAppContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3J1aWcvc3JjL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyRUFBc0Q7QUFDdEQsMEdBQWlGO0FBRWpGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFOztJQUM1QixJQUFBLG9DQUFRLEdBQUUsQ0FBQTtJQUVWLE1BQU0sWUFBWSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFBO0lBRXZDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBb0IsbUNBQUksT0FBTyxDQUFBO0lBQ3pFLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBcUIsbUNBQUksT0FBTyxDQUFBO0lBQzNFLGdDQUFnQztJQUVoQyxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUVuRCxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7b0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTt3QkFDaEUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFOzRCQUNyQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUE7NEJBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsWUFBWSxDQUFDLENBQUE7d0JBQ3hFLENBQUMsQ0FBQyxDQUFBO29CQUNKLENBQUMsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDLENBQUE7U0FDSDtLQUNGO0lBQ0QsT0FBTyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vY3VzdG9tRWxlbWVudFJlZ2lzdHJhdGlvbidcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi9sYXllcnMvdmlldy9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2Jhc2UvQXBwQ29udGFpbmVyJ1xuXG5jb25zdCBpbml0QXBwQ29udGFpbmVyID0gKCkgPT4ge1xuICByZWdpc3RlcigpXG5cbiAgY29uc3QgYXBwQ29udGFpbmVyID0gbmV3IEFwcENvbnRhaW5lcigpXG5cbiAgYXBwQ29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01JTl9XSURUSCEgPz8gJzEwMHZ3J1xuICBhcHBDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX01JTl9IRUlHSFQhID8/ICcxMDB2aCdcbiAgLy8gcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKTtcblxuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIGlmICghbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOicsIGVycm9yKVxuXG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9ucygpLnRoZW4oKHJlZ2lzdHJhdGlvbnMpID0+IHtcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbnMuZm9yRWFjaCgocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHVucmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHk6JywgcmVnaXN0cmF0aW9uKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXBwQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBcHBDb250YWluZXJcbiJdfQ==