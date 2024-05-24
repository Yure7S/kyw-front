import { HttpStatusCode } from "@angular/common/http";

export interface ErrorResponse {
    timestamp: string,
    status: HttpStatusCode,
    error: string,
    message: string,
    path: string
}