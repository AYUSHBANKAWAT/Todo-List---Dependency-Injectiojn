import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  //private taskService:TaskService;

  constructor( @Inject(TaskServiceToken) private taskService:TaskService ){}

  onAddTask(title: string, description: string) {
    this.taskService.addTask({title:title,description:description})
    this.formEl()?.nativeElement.reset();
  }
}