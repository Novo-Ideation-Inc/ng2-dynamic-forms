import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "./question-base";
import { AbstractControl } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "df-field",
    templateUrl: "dynamic-form-field.component.html",
    styleUrls: ["dynamic-form-field.component.css"]
})
export class DynamicFormFieldComponent {

    @Input() question: QuestionBase<any>;
    @Input() form:FormGroup;

    get isValid() {
        let control: AbstractControl = this.form.controls[this.question.key];
        return control.valid;
    }

    get isTouched() {
        let control: AbstractControl = this.form.controls[this.question.key];
        return control.touched;
    }

    validationResult() {
        let control: AbstractControl = this.form.controls[this.question.key];
        return control.validator(control);
    }
}
