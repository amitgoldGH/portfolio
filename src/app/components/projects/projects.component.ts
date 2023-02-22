import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Finals } from 'src/assets/finals/finals';
import { ProjectI } from './project';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {

  projects: ProjectI[] = [
    {
      title: 'Converting resuscitation manikins',
      description:
        "A server-client project. mobile application client written in react-native. spring-boot server provides REST API, connected to mongodb.",
      posterUrl: Finals.images.manikinposter,
      github: Finals.urls.manikinFront,
      skills: ['Java','Spring-boot','Javascript','React-native','BLE','MongoDB','REST-API'],
    },
    {
      title: 'Portfolio Website',
      description:
        'Written with Angular & PrimeNG, Deployed to Azure, no backend.',
      posterUrl: Finals.images.resumeposter,
      github: Finals.urls.portfolio,
      skills: ['Javascript','Angular','PrimeNG'],
    },
  ]

  
  
}
