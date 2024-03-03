import BaseExtension from './BaseExtension';
import ExtensionPool from './ExtensionPool';
declare class ExtensionDevelopment {
    extensionPool: ExtensionPool;
    constructor();
    install(extension: typeof BaseExtension): void;
}
export default ExtensionDevelopment;
