/**
 * Created by Jamie on 2016-08-25.
 */
import { FormGroup, FormControl } from '@angular/forms';

export class DfValidators {


    static valueMatcher(field1: string, field2: string) {
        return (group: FormGroup) => {
            if (group.value[ field1 ] !== group.value[ field2 ]) {
                return { mismatch: true };
            }
        };
    }

    static isEmail(control: FormControl): {[s: string]: boolean} {
        if (control.value === '') {
            return;
        }
        if (!control.value.match('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))' +
                '@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')) {
            return { invalidEmail: true };
        }
    }

    static isName(control: FormControl): {[s: string]: boolean} {
        if (control.value === '') {
            return;
        }
        if (!control.value.match('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅ' +
                'ĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\'-]+$')) {
            return { invalidName: true };
        }
    }

}
