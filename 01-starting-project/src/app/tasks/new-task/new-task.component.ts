import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import type { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required:true}) UserId!:string;
@Output() close = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTaskData>();
enteredtitle='';
enteredsummary='';
entereddate='';
private tasksService = inject(TasksService)
  onCancel(){
    this.close.emit();
}

Onsubmit(){
  this.tasksService.addTask({
    title: this.enteredtitle,
    summary: this.enteredsummary,
    dueDate: this.entereddate
  },this.UserId);
  this.close.emit();
}
}
