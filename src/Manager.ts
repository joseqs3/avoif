export interface Manager<T> {
    add(item: T): this;
    get(args?: any): T
}