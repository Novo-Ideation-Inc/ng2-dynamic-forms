/**
 * Created by Jamie on 2016-08-25.
 */
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor(private formBuilder: FormBuilder) {
    }

    group(questions: QuestionBase<any>[], extra?: {}) : FormGroup {
        let group: any = {};

        questions.forEach(question => {
            let value: any = question.value || '';
            group[ question.key ] = question.validators.length > 0 ?
                question.validators.length === 1 ?
                    new FormControl(value, question.validators[ 0 ])
                    : new FormControl(value, Validators.compose(question.validators))
                : new FormControl(value);
        });

        return this.formBuilder.group(group, extra);
    }
}
