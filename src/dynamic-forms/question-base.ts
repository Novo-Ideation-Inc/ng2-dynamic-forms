/**
 * Created by Jamie on 2016-08-25.
 */
import { ValidatorFn } from "@angular/forms";

interface ErrorMessageCallback {
    (validationResult:{[s: string]: boolean}):string
}

export class QuestionBase<T> {

    value: T;
    key: string;
    label: string;
    validators: ValidatorFn[];
    controlType: string;
    getErrorMessage:ErrorMessageCallback;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        validators?: ValidatorFn[],
        controlType?: string,
        errorMessageCallback?: ErrorMessageCallback
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validators = options.validators || [];
        this.controlType = options.controlType || '';
        this.getErrorMessage = options.errorMessageCallback || this.defualtErrorMessageCallback;
    }

    defualtErrorMessageCallback(validationResult:{[s: string]: boolean}):string {
        return this.label + " is required";
    }

}