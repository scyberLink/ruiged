import { IDBPDatabase } from 'idb';
type TABLE = 'metas' | 'assets';
declare class FileManagement {
    db: IDBPDatabase<unknown>;
    open(): Promise<void>;
    saveFile(fileName: string, fileContent: string | Blob, type: string, table?: TABLE): Promise<void>;
    getMime(extension: string): string;
    getFile(fileName: string, table?: TABLE): Promise<any>;
    close(): void;
    private KEYPATH;
    private DATABASE;
    private DATABASE_VERSION;
    private ASSET_TABLE;
    private METAS_TABLE;
}
export default FileManagement;
