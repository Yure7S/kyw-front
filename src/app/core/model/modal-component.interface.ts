import { EventEmitter } from "@angular/core";

export interface ModalComponentInterface {
   close: EventEmitter<void>;
   submit: EventEmitter<boolean>;
   onClose(): void;
   onSubmit(response: boolean): void;
}