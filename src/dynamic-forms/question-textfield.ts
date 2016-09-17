/**
 * Created by Jamie on 2016-08-25.
 */
import { QuestionBase } from './question-base';

export class TextfieldQuestion extends QuestionBase<string> {

    controlType = 'textfield';
    type: string;

    constructor(options: any = {}) {
        super(options);
        this.type = options[ 'type' ] || '';
    }
}
