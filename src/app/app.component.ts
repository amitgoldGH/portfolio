import { Component } from '@angular/core';
import { Finals } from 'src/assets/finals/finals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  ids = {
    home: Finals.routing.route.home,
    resume: Finals.routing.route.resume,
    project: Finals.routing.route.projects,
  }
}
