import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: any = FormGroup
  user: any = []
  userid: any;
  
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });


  }


  onSubmit() {
    console.log(this.register.value)
    this.user.push( this.register.value)
    localStorage.setItem('users', JSON.stringify(this.user))

  }

  check(){
    
    
  }


}
