import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';
@Component({
  selector: 'app-nutration',
  template:`
  <h1>List of Nutrations</h1>
  <div *ngFor="let data of nutrationList">
  <h2>{{data.list}}</h2>
</div>
<button [routerLink]="['/schedule']" >Procced</button>
  `,
  styles: [``]
})
export class NutrationComponent implements OnInit {
 nutrationList:any=[]
  constructor(
  private myList:LogService
  ) { }

  ngOnInit(): void {
    this.myList.listofNutration().subscribe(response=>{
    this.nutrationList=response;
  })
  }
}
