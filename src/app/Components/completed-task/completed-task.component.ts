import { Component, OnInit } from '@angular/core';
import { esUsLocale } from 'ngx-bootstrap/chronos';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  getData: any = "";
  origData: any = "";

  constructor(private ToDoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getCompletedData();
  }

  getCompletedData() {
    let payload = {
      limit: 10,
      start: 1,
      status: 2
    }
    this.ToDoService.getCompletedTaskApi(payload).subscribe((result) => {
      console.log(result);
      this.getData = result;
      this.origData = this.getData.rows;
    })
  }
  deleteTask(id: any) {
    console.log(id);
    this.ToDoService.deleteApi(id).subscribe((result) => {
      console.log(result);
      this.getCompletedData();
    })
  }
}
