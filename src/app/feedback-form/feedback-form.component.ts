import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss',
})
export class FeedbackFormComponent {
[x: string]: any;
  surveyForm: FormGroup;

  partnerOptions = [
    { value: '1', label: 'In a group' },
    { value: '2', label: 'With a friend/girlfriend' },
    { value: '3', label: 'Alone' },
  ];

  timeOptions = [
    { value: '1', label: 'Everyday' },
    { value: '2', label: 'Four times per week' },
    { value: '3', label: 'Three times per week' },
    { value: '4', label: 'Twice per week' },
    { value: '5', label: 'Once per weel' },
  ];

  genderOptions = [
    { name: 'male', value: '1', label: 'Male' },
    { name: 'female', value: '2', label: 'Female' },
  ];

  triedOptions = [
    { name: 'gymTraining', value: '1', label: 'GymTraining' },
    { name: 'streetWorkout', value: '2', label: 'Streetworkout' },
    { name: 'crossfit', value: '3', label: 'Crossfit' },
    { name: 'cycling', value: '4', label: 'Cycling' },
    { name: 'run', value: '5', label: 'Running' },
    { name: 'swim', value: '6', label: 'Swimming' },
    { name: 'tennis', value: '7', label: 'Tennis' },
    { name: 'basketball', value: '8', label: 'Basketball' },
    { name: 'dance', value: '9', label: 'Dancing' },
  ];

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      userInform: this.fb.group({
        username: ['',
          [
            Validators.required('The name is required!'),
            Validators.minLength(5, minLength => `The minimum length is ${minLength}!`)
          ]],
        email: ['',
          [
            Validators.required('The e-mail is required!'),
            Validators.email('Helytelen formátumú e-mail cím!'),
          ]],
        age: ['',
          [
            Validators.required('An age is required!'),
            Validators.min(12, minLength => `The minimum age is ${minLength}!`),
            Validators.max(99,  maxLength => `The maximum age is ${maxLength}!`)
          ]],
      }),
      gender: [false,
        Validators.requiredTrue('Gender is required!'),
      ],
      partner: [null,
        Validators.required('Partner is required, select one!'),
      ],
      times: [null,
        Validators.required('Time is required, select one!'),
      ],
      tried: [false,
        Validators.requiredTrue('Sport is required, select atleast three!'),
      ],
      healthProblem: [''],
    });
  }
  
  submitForm() {
    if (this.surveyForm.valid) {
      console.log(this.surveyForm.value);
    }
    else {
      console.log('Error');
    }
  }
}