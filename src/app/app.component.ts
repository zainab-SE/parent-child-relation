import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-relation';
  // array
  userDetail=[
    {name:'Zainab', email:'zainab@gmail.com'},
    {name:'Saleem', email:'saleem@gmail.com'},

  ]
}
