import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-classform',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './classform.component.html',
  styleUrl: './classform.component.css'
})
export class ClassformComponent implements OnInit{

  classForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.classForm = this.fb.group({
      name:['',Validators.required],
      status:['',Validators.required,this.statusValidator(['Active','inActive'])],
      createdBy:['',Validators.required]


    })
  }

  statusValidator(allowedStatus: string[]){

    return (control: any)=>{
      if(control.value && !allowedStatus.includes(control.value)){
        return {invalidStatus:true}
      }
      return null
    }

  }


  onSubmit() {
    if (this.classForm.valid) {
      console.log(this.classForm.value);
      alert('form submitted successfully')
    }
    else{
      alert('please correc the errors before starting ')
    }
  }

}
