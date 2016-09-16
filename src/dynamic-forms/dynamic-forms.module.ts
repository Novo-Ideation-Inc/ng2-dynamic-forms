/**
 * Created by Jamie on 2016-08-25.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./dynamic-form.component";
import { DynamicFormFieldComponent } from "./dynamic-form-field.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormFieldComponent
    ],
    exports: [
        DynamicFormComponent
    ]
})
export class DynamicFormsModule {}