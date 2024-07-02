import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../tasks.service';
import { filter } from 'rxjs';
import { TaskServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, TaskStatusOptions, taskStatusProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taskStatusProvider]
})
export class TasksListComponent {
  //alternative to add DI
  private taskService =  inject(TaskServiceToken)
  taskStatusOptions = inject(TASK_STATUS_OPTIONS)
  selectedFilter = signal<string>('all');
  tasks = computed(()=>{
    switch(this.selectedFilter()){
      case 'all':return this.taskService.allTask()
      case 'open':return this.taskService.allTask().filter(task => task.status === 'OPEN')
      case 'in-progress':return this.taskService.allTask().filter(task => task.status === 'IN_PROGRESS')
      case 'done':return this.taskService.allTask().filter(task => task.status === 'DONE')
      default: return  this.taskService.allTask()
    }
  })

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
