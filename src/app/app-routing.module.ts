import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTaskComponent } from './Components/completed-task/completed-task.component';
import { ProgressTaskComponent } from './Components/progress-task/progress-task.component';

const routes: Routes = [
  {path:"inprogress",component:ProgressTaskComponent},
  {path:"completed",component:CompletedTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
