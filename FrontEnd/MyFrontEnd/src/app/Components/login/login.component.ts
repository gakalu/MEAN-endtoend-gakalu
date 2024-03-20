
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router,RouterLink } from '@angular/router';

import { LogService } from '../../log.service';

@Component({
  selector: 'app-login',
  template: `
   
   <form [formGroup]="myform" (ngSubmit)="signin()">
      
      <label for="email" id='label'>Email:</label><br/>
      <input type="text" id="email" formControlName="email" /><br />
      <label for="password" id='label'>Password:</label><br/>
      <input type="password" id="password" formControlName="password" id='inputfield' /><br />
    
      <input
        type="submit"
        value="signin"
        class="btn btn-info"
        [disabled]="!myform.valid"
       id="signin"
      />
      <button class="btn btn-info" [routerLink]="['/signup']"  id="signup">
        Signup
      </button>
    </form>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  constructor(
    private formbuild: FormBuilder,
    private myservice: LogService,
    private route: Router
  ) {
    this.myform = formbuild.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  signin() {
  let response= this.myservice.signin(this.myform.value).subscribe((data: any) => {
    return data.email;
  })
  if(response){
  this.route.navigate(['home'])
}
  }
  ngOnInit(): void {
  }


}

