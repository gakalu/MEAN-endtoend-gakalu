import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainModuleModule } from './main-module/main-module.module'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseComponent } from './Components/exercise/exercise.component';
import { NutrationComponent } from './Components/nutration/nutration.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NgxCaptureModule } from 'ngx-capture';
@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    NutrationComponent,
  
  ],
  imports:[
    BrowserModule,
    MainModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptureModule,
    RouterModule.forRoot([
    {
      path: '',
      loadChildren: () => {
        return import('../app/main-module/main-module.module').then((data) => {
          return data.MainModuleModule;
        });
      },
    },
  ]),
],
exports:[RouterModule],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
