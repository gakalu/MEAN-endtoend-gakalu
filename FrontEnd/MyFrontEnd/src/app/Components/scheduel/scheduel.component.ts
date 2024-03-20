import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-scheduel',
  template: `
  <div class="container">
 <div clas="heading">
 <h1>Weekly Workout/Nutration Scheduel</h1>
 </div>
 <div *ngFor="let data of exerciseList">
</div>

 <table border="5">
    <thead>
        <tr>
        <th>Date</th>
        <th>EXCERCISE</th>
        <th>NUTRATION</th>
        </tr>
    </thead>

    <tbody>
        <tr >
            <td><label for="start"></label>
       <input type="date" id='start' name="trip-start" value="2022-07-22"></td>
            <td>
            <div *ngFor="let exercisedata of exerciseList">
            <h2><input type="checkbox" >{{exercisedata.list}}</h2>
            </div>
          </td>
            <td>
            <div *ngFor="let nutrationdata of nutrationList">
            <h2><input type="checkbox">{{nutrationdata.list}}</h2>
             </div>
            </td>
         </tr>
           
    </tbody>
 </table>
 <button onclick="alert('scheduled sucessfully')">scheduled</button>
</div>
  
  `,
  styles: [`
  table, th, td {
  border-collapse: collapse;
  max-width: 100%;
  text-align: center;
  padding:10px;
  padding-right:200px
}
h2{
  text-align:left;
}

  `]
})
export class ScheduelComponent implements OnInit {
  exerciseList:any=[];
  nutrationList:any=[];
  constructor(private myList:LogService,
              private route:Router) { }

 ngOnInit(): void {
 this.myList.listofExercises().subscribe(response=>{
 this.exerciseList=response;
 console.log(this.exerciseList);
 })
 this.myList.listofNutration().subscribe(response=>{
  this.nutrationList=response;
})
}
}