import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionControlService } from "./question-control.service";
import { QuestionBase } from "./question-base";
@Component({
    moduleId: module.id,
    selector: "df-form",
    templateUrl: "dynamic-form.component.html",
    styleUrls: ["dynamic-form.component.css"],
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    @Input() submitText:string;
    @Input() submit:FormCallback;
    @Input() onInit:FormCallback;
    @Input() questions:QuestionBase<any>[] = [];
    @Input() extra:any = {};
    @Input() postSubmitError:string;
    form:FormGroup;

    constructor(private questionControlService:QuestionControlService) {
    }

    ngOnInit():any {
        this.form = this.questionControlService.group(this.questions, this.extra);
        if (this.onInit) {
            this.onInit(this.form);
        }
    }

}

interface FormCallback {
    (form:FormGroup): any;
}