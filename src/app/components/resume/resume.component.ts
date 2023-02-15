import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  resumeItems = [
    {
      itemId: 1,
      title: 'B.Sc Software Engineering',
      location: 'Afeka College, Tel-aviv',
      description:
        'Bachelor degree in software engineering.\nSoftware information technologies specialization.',
      years: '2017-2022',
      iconLocation: '../../../assets/afekalogo.png',
    },
    {
      itemId: 2,
      title: 'Chief information security officer course',
      location: 'Sela College, Bnei brak',
      description: 'A year-long course in cyber security.',
      years: '2013-2014',
      iconLocation: '../../../assets/sela-logo-black.svg',
    },
  ];
}
