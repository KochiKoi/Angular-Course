import{NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { ShareModule } from './shared/share_module';
import { TasksModule } from './tasks/tasks_module';



@NgModule({
    declarations:[AppComponent,
         HeaderComponent, 
         UserComponent, 
        ],
    bootstrap:[AppComponent],
    imports: [BrowserModule,ShareModule,TasksModule]
})
export class AppModule{}