import { Component } from '@angular/core';
import { Finals } from 'src/assets/finals/finals';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  links = {
    github: Finals.urls.githubMain,
    linkedin: Finals.urls.linkedin,
    resumedl: Finals.urls.resumedl,
  }
}
