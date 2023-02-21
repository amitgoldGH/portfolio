import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Finals } from 'src/assets/finals/finals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];
  
  links = {
    github: Finals.urls.githubMain,
    linkedin: Finals.urls.linkedin
  }

  images = {
    github: Finals.images.github,
    linkedin: Finals.images.linkedin,
  }
  
  // TODO: FIX Prime menubar routing

  ngOnInit() {

    this.items = [
      {
        label: Finals.routing.title.home, routerLink: Finals.routing.route.home,
      },
      {
        label: Finals.routing.title.resume, routerLink: Finals.routing.route.resume,
      },
      {
        label: Finals.routing.title.projects, routerLink: Finals.routing.route.projects,
      },
      
    ];
  }
}
