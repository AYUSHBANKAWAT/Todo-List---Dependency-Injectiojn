import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TaskService } from './app/tasks/tasks.service';

export const TaskServiceToken = new InjectionToken<TaskService>('task-service-token')

bootstrapApplication(AppComponent,{
    providers :[{provide:TaskServiceToken,useClass:TaskService}]
}).catch((err) => console.error(err));
