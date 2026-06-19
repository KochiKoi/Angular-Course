import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "../shared/share_module";

@NgModule({
    declarations:[
         TasksComponent,
         TaskComponent, 
         NewTaskComponent],
    exports:[TasksComponent],
    imports: [CommonModule ,FormsModule,ShareModule]
})

export class TasksModule{
    
}