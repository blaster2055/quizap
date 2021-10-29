import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any=FormGroup;
  user = JSON.parse(localStorage.getItem("users") || "[]");

  
  constructor(private fb:FormBuilder,
              private router: Router) { }
  
  ngOnInit(): void {
    this.login = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,Validators.email])]
  });
}
loginSubmit(data:any){
  console.log(this.login.value)
  
}



goTosignup(){
this.router.navigate(['register']);
}
usercheck(){
  const userfound=this.user.filter((x: any)=>x.email==this.login.value.email)
}
  }
 
