import { LogService } from '../../log.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template: `
  <div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-4" id="middlediv">
    <form [formGroup]="myform" (ngSubmit)="signup()">
      <label for="name">Name</label><br />
      <input type="text" id="name" formControlName="name" /><br />
      <label for="email">Email</label><br />
      <input type="email" id="email" formControlName="email" /><br />
      <p *ngIf="emailExits" id="emailExits">try another email</p>
      <label for="password">Password</label><br />
      <input type="password" id="password" formControlName="password" /><br />
      <label for="age">Age</label><br />
      <input type="number" id="age" formControlName="age" /><br />
      <label for="role">Role</label><br />
      <input type="text" id="role" formControlName="role" /><br />

          <button
            class="btn btn-info"
            [disabled]="myform.valid"
            id="signupsignin"
          >
            Signup 
          </button>
          <button class="btn btn-info" [routerLink]="['/']" id="signin">
            Signin
          </button>
    </form>
  </div>
  <div class="col-md-4"></div>
</div>

  `,
  styles: [
  ]
})
export class SignupComponent implements OnInit {
  myform: FormGroup;
  image: any;
  emailExits: boolean = false;
  constructor(
    private formbuild: FormBuilder,
    private myservice: LogService,
    private route: Router
  ) {
    this.myform = this.formbuild.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      Age: ['', Validators.required],
      role: ['', Validators.required],
      }),
    this.myform.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
  signup() {
    this.myservice.signup(this.myform.value).subscribe((data: any) => {
      if (data.status === 'User exists') {
        this.emailExits = true;
        this.route.navigate(['']);
      }
    });
    alert("Registor sucessfully")
  }
}
