import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-exercise',
  template:`
  <h1>List of workout</h1>
  <div *ngFor="let data of exerciseList">
  <h2>{{data.list}}</h2>
</div>
<button [routerLink]="['/nutration']">Procced</button>
  `,
  styles: [``]
})
export class ExerciseComponent implements OnInit {
  exerciseList:any=[];
  constructor(private myList:LogService,
              private route:Router ) { }

  ngOnInit(): void {
 this.myList.listofExercises().subscribe(response=>{
 this.exerciseList=response;
 console.log(this.exerciseList);
 })
  }
  }

