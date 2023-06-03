import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, Validators } from '@angular/forms';
import { commonCode } from '../CommonCode';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const { password, confirmpassword } = control.value;
    if (password === confirmpassword) {
      return null;
    } else {
      return { noMatchingPassword: true };
    }
  }
}
