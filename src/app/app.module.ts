import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './Components/header/header.component';
import { AsideBarComponent } from './Components/aside-bar/aside-bar.component';
import { CreateTaskComponent } from './Components/create-task/create-task.component';
import { ProgressTaskComponent } from './Components/progress-task/progress-task.component';
import { CompletedTaskComponent } from './Components/completed-task/completed-task.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideBarComponent,
    CreateTaskComponent,
    ProgressTaskComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
