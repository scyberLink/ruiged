import { IDBPDatabase } from 'idb';
export declare enum Table {
    METAS = "metas",
    ASSETS = "assets"
}
declare class FileManagement {
    db: IDBPDatabase<unknown>;
    open(): Promise<void>;
    saveFile(fileName: string, fileContent: string | Blob, type: string, table?: Table): Promise<void>;
    getMime(extension: string): string;
    getFile(fileName: string, table?: Table): Promise<any>;
    close(): void;
    private KEYPATH;
    private DATABASE;
    private DATABASE_VERSION;
}
export default FileManagement;
