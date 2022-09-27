import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidatorFn } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValidationModule {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
 }
