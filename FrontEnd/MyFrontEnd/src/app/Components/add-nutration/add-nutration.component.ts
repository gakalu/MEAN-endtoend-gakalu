import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LogService } from '../../log.service';
@Component({
  selector: 'app-add-nutration',
  template: `
  <form [formGroup]="myForm" (ngSubmit)="addNutration()">
  <label for="type">Nutration Type</label><br />
  <input type="text" id="nutrationType" formControlName="type" /><br />
  <label for="list">Nutration Name</label><br />
  <input type="list" id="list" formControlName="list" /><br />
  <button>Add Exercise</button>
  `,
  styles: [` `]
})
export class AddNutrationComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private form:FormBuilder,
    private http:LogService,
  ) { 
    this.myForm=this.form.group({
      'type':['',Validators.required],
      'list':['',Validators.required],
  })
  }
  ngOnInit(): void {}
  addNutration(){
    this.http.postNutration(this.myForm.value).subscribe(response=>{response
    alert('Nutration added sucessfully');
})
}
}
