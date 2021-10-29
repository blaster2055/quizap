import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  skillsForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.skillsForm=this.fb.group({
      name:"",
      skills:this.fb.array([])
    })
  }

    get skills():FormArray{
      return this.skillsForm.get("skills")as FormArray
    }
    
    newSkill(): FormGroup {
      return this.fb.group({
        skill: '',
        exp: '',
      })
   }
   addSkills() {
    this.skills.push(this.newSkill());
 }
 removeSkill(i:number) {
  this.skills.removeAt(i);
}
onSubmit() {
  console.log(this.skillsForm.value);
}


    ngOnInit(): void {
 
    }
  }

  




