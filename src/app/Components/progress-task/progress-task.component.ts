import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit, ɵLocaleDataIndex } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'app-progress-task',
  templateUrl: './progress-task.component.html',
  styleUrls: ['./progress-task.component.scss']
})
export class ProgressTaskComponent implements OnInit {
  date: any = "";
  getData: any = "";
  origData: any = "";
  getDataById: any;
  doneId: any = "";
  constructor(private ToDoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getProgres()
  }
  getProgres() {
    let payload = {
      limit: 20,
      start: 1,
      status: 1
    }
    this.ToDoService.getProgressTaskApi(payload).subscribe((result) => {
      console.log(result);
      this.getData = result;
      this.origData = this.getData.rows;
    });
  }
  deleteTask(id: any) {
    console.log(id);
    this.ToDoService.deleteApi(id).subscribe((result) => {
      console.log(result);
      this.getProgres();
    })

  }
  markDone(id: any) {
    this.ToDoService.getTaskByIdApi(id).subscribe((result) => {
      console.log(result);
      this.getDataById = result;
      this.doneId = this.getDataById.id;
      console.log(this.doneId)
      this.statusUpdate();
    });

  }
  statusUpdate() {
    this.ToDoService.taskDoneApi({ "id": this.doneId, "status": 2 }).subscribe((result) => {
      console.log("id", this.doneId);
      console.log(result);
      this.getProgres();
    })
  }
}
