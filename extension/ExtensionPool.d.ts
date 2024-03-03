import { EXTENSION_EVENT_DATA } from '../common/constants';
import IAppContainer from '../layers/view/application/components/base/model/IAppContainer';
import IExtension from './IExtension';
export declare enum ExtensionState {
    BUILTIN = "builtin",
    ENABLE = "enable",
    DISABLE = "disable",
    INSTALL = "install",
    MANUAL_INSTALL = "manualInstall"
}
export interface EXTENSION_EVENT_DATA_TYPE {
    [EXTENSION_EVENT_DATA]: string;
}
export interface ExtensionStore {
    [key: string]: IExtension;
}
declare class ExtensionPool {
    private appContainer?;
    private loader;
    private builtin;
    private installed;
    private enabled;
    private disabled;
    private manualInstalled;
    constructor(appContainer?: IAppContainer, load?: boolean);
    getEvent(id: string, eventType: string): CustomEvent<EXTENSION_EVENT_DATA_TYPE>;
    dispatchEvent(id: string, eventType: string): void;
    private init;
    loadExtension(load?: boolean): void;
    install(id: string): Promise<boolean>;
    manualInstall(extension: IExtension): boolean;
    uninstall(id: string): any;
    private remove;
    private delete;
    private add;
    enable(id: string): boolean;
    disable(id: string): boolean;
    isEnabled(id: string): boolean;
    isDisabled(id: string): boolean;
    isInstalled(id: string): boolean;
    isBuiltin(id: string): boolean;
}
export default ExtensionPool;
