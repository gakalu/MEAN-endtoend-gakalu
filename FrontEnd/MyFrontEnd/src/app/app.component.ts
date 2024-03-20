import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <div style="background-color:black;color:white; width:100% position:fixed;text-align: center;">
   <h2> Weekly Workout Scheduel<br/>
    weekly Nutration Scheduel</h2>
</div>
  <img src="https://i.pinimg.com/originals/4b/22/da/4b22da9ae75f8b89a32175ee0306683f.jpg" class="center">
  
<marquee><h1 style="color:blue; weight:'bold' font-family: 'Normal', 'Courier New', monospace; ">Scheduel your Workout/Nutration and be Healthy</h1></marquee>
  <body class="div">
   <router-outlet></router-outlet> 
</body>
  <footer class="footer" >
  <p>@Getachew Akalu 2022<br/>Maharishi International University
  </footer>
  `,
  styles: [`
  body{
    padding:100px;
    top: 0;
    width:100%;
    border: 3px solid white;
  },
  button{
    text-align:right;
  }
  .footer{
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  border: 3px solid white;
  padding-top: 5px
}
h3,h1{
color:white;
align:center;
},
.div{
  border: 10px outset black;
  text-align: center;
  display:center; 
}
ul {
  list-style-type: none;
  margin: 0;
  padding:0;
}

li {
  display: inline;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}
  `]
})
export class AppComponent {
    }
