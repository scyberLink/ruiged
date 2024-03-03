import { IDBPDatabase } from 'idb';
declare class FileManagement {
    constructor();
    saveFile(fileName: string, fileContent: string | Blob, type?: string): Promise<void>;
    getFile(fileName: string): Promise<any>;
    upgrade(db: IDBPDatabase<unknown>): void;
    KEYPATH: string;
    DATABASE: string;
    DATABASE_VERSION: number;
    TABLE: string;
}
export default FileManagement;
