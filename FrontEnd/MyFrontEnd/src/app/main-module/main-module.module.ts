import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../Components/signup/signup.component';
import { LoginComponent } from '../Components/login/login.component';
import { HomeComponent } from '../Components/home/home.component';
import { ExerciseComponent } from '../Components/exercise/exercise.component';
import { NutrationComponent } from '../Components/nutration/nutration.component';
import { AddExerciseComponent } from '../Components/add-exercise/add-exercise.component';
import { AddNutrationComponent } from '../Components/add-nutration/add-nutration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ScheduelComponent } from '../Components/scheduel/scheduel.component';
import {MysecurityGuard} from '.././myGurd/my-scurity.guard'
@NgModule({
  declarations: [
  HomeComponent,
  LoginComponent,
  SignupComponent,
  AddExerciseComponent,
  AddNutrationComponent,
  ScheduelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'home',component:HomeComponent},
      {path:'',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'exercise',component:ExerciseComponent},
      {path:'nutration',component:NutrationComponent},
      {path:'addExercise',component:AddExerciseComponent,canActivate:[MysecurityGuard]},
      {path:'addNutration',component:AddNutrationComponent,canActivate:[MysecurityGuard]},
      {path:'schedule',component:ScheduelComponent},

      ])
  ], 
  exports:[HomeComponent,RouterModule]
})
export class MainModuleModule { }
