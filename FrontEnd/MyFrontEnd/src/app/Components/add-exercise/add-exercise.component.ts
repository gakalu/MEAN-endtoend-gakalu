import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from '../../log.service';
@Component({
  selector: 'app-add-exercise',
  template: `
  <form [formGroup]="myForm" (ngSubmit)="addExercise()">
  <label for="type">Exercise Type</label><br />
  <input type="text" id="exerciseType" formControlName="type" /><br />
  <label for="name">Exercise Name</label><br />
  <input type="name" id="name" formControlName="name" /><br />
  <button type="submit">Add Exercise</button>
  `,
  styles: [` `]
})
export class AddExerciseComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private form:FormBuilder,
    private http:LogService,
    private route:Router
  ) { 
    this.myForm=this.form.group({
      'type':['',Validators.required],
      'name':['',Validators.required],
  })
  }
  ngOnInit(): void {}
  addExercise(){
  this.http.postExercise(this.myForm.value).subscribe((response=>{
  this.route.navigate(['home']);
  }))

}
  }

