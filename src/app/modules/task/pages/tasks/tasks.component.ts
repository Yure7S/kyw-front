import { Component, inject } from '@angular/core';
import { TaskStatus } from 'src/app/core/enums/TaskStatus.enum';
import { Task } from 'src/app/core/model/task.interface';
import { TrackByService } from 'src/app/core/utils/track-by.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  trackByService = inject(TrackByService)

  taskList: Task[] = [
    {
      id: 'asdfadsfsf',
      title: 'É um facto',
      status: TaskStatus.Open,
      criticality: 'critical',
      description: 'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).',
      attachments: [],
      createAt: '',
      completedAt: '',
      project: {
        projectId: '',
        name: ''
      },
      attributedTo: {
        userId: '',
        nickname: ''
      },
      pin: false,
    },
    {
      id: 'asdfadsfsf',
      title: 'É um facto',
      status: TaskStatus.Pending,
      criticality: 'critical',
      description: 'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).',
      attachments: [],
      createAt: '',
      completedAt: '',
      project: {
        projectId: '',
        name: ''
      },
      attributedTo: {
        userId: '',
        nickname: ''
      },
      pin: false
    },
    {
      id: 'asdfadsfsf',
      title: 'É um facto',
      status: TaskStatus.Open,
      criticality: 'critical',
      description: 'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).',
      attachments: [],
      createAt: '',
      completedAt: '',
      project: {
        projectId: '',
        name: ''
      },
      attributedTo: {
        userId: '',
        nickname: ''
      },
      pin: false
    },
  ]
}
