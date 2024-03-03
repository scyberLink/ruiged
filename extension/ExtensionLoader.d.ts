import IAppContainer from '../layers/view/application/components/base/model/IAppContainer';
import BaseExtension from './BaseExtension';
import IExtension from './IExtension';
declare class ExtensionLoader {
    load(code: string, appContainer: IAppContainer): BaseExtension;
    getExtension(id: string, builtin?: boolean): Promise<IExtension | null>;
    private executor;
}
export default ExtensionLoader;
