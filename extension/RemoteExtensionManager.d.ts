import IExtension from './IExtension';
export interface SearchOption {
    searchBy: string;
    version: string;
    searchRegexOption: string;
}
declare class RemoteExtensionManager {
    search(regex: string, option: SearchOption): IExtension[];
    getExtension(id: string): IExtension;
    hasUpgrade(id: string): boolean;
}
export default RemoteExtensionManager;
