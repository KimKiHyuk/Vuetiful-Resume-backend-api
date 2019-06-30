export interface IDatabase {
    initalizeDatabase?(): void,
    disposeDatabase?(): void,
    getAllFromDatabase(): any
}