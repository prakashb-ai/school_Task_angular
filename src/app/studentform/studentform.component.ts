import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-studentform',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './studentform.component.html',
})
export class StudentformComponent implements OnInit{
  studentsForm! : FormGroup;

  constructor(private fb:FormBuilder){
  }
  ngOnInit(): void {
    this.studentsForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phonenumber:['',Validators.required,Validators.pattern('^[0-9]+$')],
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
    if (this.studentsForm.valid) {
      console.log(this.studentsForm.value);
      alert('form submitted successfully')
    }
    else{
      alert('please correc the errors before starting ')
    }
  }

}
