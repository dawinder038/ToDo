import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule} from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './Components/header/header.component';
import { AsideBarComponent } from './Components/aside-bar/aside-bar.component';
import { CreateTaskComponent } from './Components/create-task/create-task.component';
import { ProgressTaskComponent } from './Components/progress-task/progress-task.component';
import { CompletedTaskComponent } from './Components/completed-task/completed-task.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';

const appRoutes:Routes=[
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideBarComponent,
    CreateTaskComponent,
    ProgressTaskComponent,
    CompletedTaskComponent,
    HomeComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule ,
    AlertModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
