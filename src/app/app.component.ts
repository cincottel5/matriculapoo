import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  user;
  title = 'Matricula poo';

  constructor() {}
  
  ngOnInit() {
    this.user = localStorage.getItem("username");
  }

}
