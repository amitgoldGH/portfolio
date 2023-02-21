import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MenubarSub } from 'primeng/menubar';
import { Finals } from 'src/assets/finals/finals';
import { ViewportScroller } from '@angular/common';


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

  
  constructor(private vs: ViewportScroller) {}
  scroll(el: any) {
    // el is HTML element's id
    this.vs.scrollToAnchor(el);
  }
  ngOnInit() {

    this.items = [
      {
        label: Finals.routing.title.home, command: () => this.scroll(Finals.routing.route.home) ,
      },
      {
        label: Finals.routing.title.resume, command: () => this.scroll(Finals.routing.route.resume),
      },
      {
        label: Finals.routing.title.projects, command: () => this.scroll(Finals.routing.route.projects),
      },
      
    ];
  }

  
}
