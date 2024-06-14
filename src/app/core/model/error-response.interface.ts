import { HttpStatusCode } from "@angular/common/http";
import { timestamp } from "rxjs";

export class ErrorResponse {
    timestamp?: string
    status?: HttpStatusCode
    error?: string
    message?: string
    path?: string

    constructor(value: ErrorResponse) {
        this.timestamp = value.timestamp
        this.status = value.status
        this.error = value.error
        this.message = value.message
        this.path = value.path
    }
}