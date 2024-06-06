import { Component, inject } from '@angular/core';
import { Project } from 'src/app/core/model/project.interface';
import { TrackByService } from 'src/app/core/utils/track-by.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  trackByService = inject(TrackByService)

  projectList: Project[] = [
    {
      id: 'asdfasdf',
      name: 'Nome do projeto',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      creator: {
        userId: '',
        nickname: ''
      },
      imageUrl: '',
      linkGroup: '',
      pin: false,
      createAt: '2024-06-06T13:10:42.942Z'
    },
    {
      id: 'asdfasdf',
      name: 'Nome do projeto',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      creator: {
        userId: '',
        nickname: ''
      },
      imageUrl: '',
      linkGroup: '',
      pin: false,
      createAt: '2024-06-06T13:10:42.942Z'
    },
    {
      id: 'asdfasdf',
      name: 'Nome do projeto',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      creator: {
        userId: '',
        nickname: ''
      },
      imageUrl: '',
      linkGroup: '',
      pin: false,
      createAt: '2024-06-06T13:10:42.942Z'
    },
  ]
}