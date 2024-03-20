import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';
@Component({
  selector: 'app-home',
  template: `
  <h2>WellCome {{name}} </h2>
  <h2><a [routerLink]="['/','exercise']">List of exercise</a></h2>
  <h2><a [routerLink]="['/','nutration']">List of nutration</a></h2>
  <h2><a [routerLink]="['/','addExercise']">Add Exercise</a></h2>
  <h2><a [routerLink]="['/','addNutration']">Add nutration</a></h2>
  <button [routerLink]="['/']">sign out</button>
  
  <router-outlet></router-outlet>
  `,
  styles: [`
  h1{ 
    color:black;
  }
  `
  ]
})
export class HomeComponent {
  name:any=[];
  constructor(private myname:LogService) {}
ngOnInit(): void {
  this.myname.username().subscribe(response=>{
  this.name=response;
  })
   }
  }