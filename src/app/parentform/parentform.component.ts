import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parentform',
  templateUrl: './parentform.component.html',
  imports:[CommonModule,ReactiveFormsModule]
})
export class ParentformComponent {

  parentsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.parentsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit(): void {}

  // Optional: Add a submit function
  onSubmit() {
    if (this.parentsForm.valid) {
      console.log(this.parentsForm.value);
    }
  }
}
