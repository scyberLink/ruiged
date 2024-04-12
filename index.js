"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const init_1 = __importDefault(require("./init"));
const root = client_1.default.createRoot(document.getElementById('root'));
const appContainer = (0, init_1.default)();
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", Component: () => (0, jsx_runtime_1.jsx)(App_1.default, { appContainer: appContainer }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", Component: () => (0, jsx_runtime_1.jsx)(react_router_dom_2.Navigate, { to: "/" }) })] }) }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ydWlnL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQXVDO0FBQ3ZDLGdEQUF1QjtBQUN2Qix1REFBK0Q7QUFDL0QsdURBQTJDO0FBQzNDLGtEQUFxQztBQUVyQyxNQUFNLElBQUksR0FBRyxnQkFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQyxDQUFBO0FBRWhGLE1BQU0sWUFBWSxHQUFHLElBQUEsY0FBZ0IsR0FBRSxDQUFBO0FBRXZDLElBQUksQ0FBQyxNQUFNLENBQ1QsdUJBQUMsZ0NBQWEsY0FDWix3QkFBQyx5QkFBTSxlQUNMLHVCQUFDLHdCQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsdUJBQUMsYUFBRyxJQUFDLFlBQVksRUFBRSxZQUFZLEdBQUksR0FBSSxFQUN4RSx1QkFBQyx3QkFBSyxJQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLHVCQUFDLDJCQUFRLElBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRyxHQUFJLElBQ2pELEdBQ0ssQ0FDakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGluaXRBcHBDb250YWluZXIgZnJvbSAnLi9pbml0J1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpIGFzIEhUTUxFbGVtZW50KVxuXG5jb25zdCBhcHBDb250YWluZXIgPSBpbml0QXBwQ29udGFpbmVyKClcblxucm9vdC5yZW5kZXIoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBDb21wb25lbnQ9eygpID0+IDxBcHAgYXBwQ29udGFpbmVyPXthcHBDb250YWluZXJ9IC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgQ29tcG9uZW50PXsoKSA9PiA8TmF2aWdhdGUgdG89XCIvXCIgLz59IC8+XG4gICAgPC9Sb3V0ZXM+XG4gIDwvQnJvd3NlclJvdXRlcj4sXG4pXG4iXX0=