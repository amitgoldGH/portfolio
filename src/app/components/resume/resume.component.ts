import { Component } from '@angular/core';
import { Finals } from 'src/assets/finals/finals';
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
        'Bachelor degree in software engineering.\nMajor in Software information technologies.',
      years: '2017-2022',
      iconLocation: Finals.images.afekalogo,
    },
    {
      itemId: 2,
      title: 'Chief information security officer course',
      location: 'Sela College, Bnei brak',
      description: 'A year-long course in cyber security.',
      years: '2013-2014',
      iconLocation: Finals.images.selalogo,
    },
  ];
}
