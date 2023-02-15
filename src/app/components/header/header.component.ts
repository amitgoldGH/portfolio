import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  linkItems = [
    { linkId: 1, linkName: 'Home', linkUrl: 'home' },
    { linkId: 2, linkName: 'Resume', linkUrl: 'resume' },
    { linkId: 3, linkName: 'Projects', linkUrl: 'projects' },
    { linkId: 4, linkName: 'Contact', linkUrl: 'contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
