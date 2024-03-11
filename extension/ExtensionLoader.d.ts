import IAppContainer from '../layers/view/application/components/base/model/IAppContainer';
import BaseExtension from './BaseExtension';
import IExtension from './IExtension';
declare class ExtensionLoader {
    private extensionFileManager;
    load(extension: IExtension, appContainer: IAppContainer): Promise<BaseExtension>;
    getExtension(id: string, builtin?: boolean): Promise<IExtension | null>;
    private executor;
}
export default ExtensionLoader;
