import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  projects = [
    {
      projectId: 1,
      title: 'Converting resuscitation manikins to smart manikins',
      description:
        'React-native mobile application frontend along a spring boot rest api backend.',
      posterUrl: '../../../assets/manikinposter.png',
      github: 'https://github.com/amitgoldGH/CPR-FE-BLEProject',
    },
  ];
}
