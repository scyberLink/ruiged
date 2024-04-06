import AppContainer from './layers/view/application/components/base/AppContainer';
import BaseExtension from './extension/BaseExtension';
declare function App({ extensions, appContainer }: {
    extensions?: BaseExtension[];
    appContainer: AppContainer;
}): import("react/jsx-runtime").JSX.Element;
export default App;
