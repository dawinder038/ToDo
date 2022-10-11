import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTaskComponent } from './Components/completed-task/completed-task.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { HomeComponent } from './Components/home/home.component';
import { ProgressTaskComponent } from './Components/progress-task/progress-task.component';

const routes: Routes = [
  {path:"inprogress",component:ProgressTaskComponent},
  {path:"completed",component:CompletedTaskComponent},
  {path:"home",component:HomeComponent},
  {path:"delete",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
