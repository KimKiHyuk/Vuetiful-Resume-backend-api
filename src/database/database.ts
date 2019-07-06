export interface Database {
    initalizeDatabase?(): void,
    disposeDatabase?(): void,
    getAllFromDatabase(): any
}