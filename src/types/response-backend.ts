export interface ResponseBackend<T> {
    success: boolean;
    message: string;
    data: T
}