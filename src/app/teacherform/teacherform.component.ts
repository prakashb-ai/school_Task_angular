import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-teacherform',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './teacherform.component.html',
  styleUrl: './teacherform.component.css'
})
export class TeacherformComponent implements OnInit{

  teacherForm!: FormGroup;

  constructor(private fb: FormBuilder){}
  

  ngOnInit(): void {
    this.teacherForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phonenumber:['',Validators.required,Validators.pattern('^[0-9]+$')],
      createdBy:['',Validators.required]

    })
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      console.log(this.teacherForm.value);
      alert('form submitted successfully')
    }
    else{
      alert('please correc the errors before starting ')
    }
  }

}
