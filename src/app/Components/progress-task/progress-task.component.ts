import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';

@Component({
  selector: 'app-progress-task',
  templateUrl: './progress-task.component.html',
  styleUrls: ['./progress-task.component.scss']
})
export class ProgressTaskComponent implements OnInit {
  date: any = "";
  getData:any="";
  origData:any="";
  constructor(private ToDoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getProgres( )
  }
  getProgres() {
   let payload={
      limit: 10,
      start: 1,
      status: 1
    }
    this.ToDoService.getProgressTaskApi(payload).subscribe((result) => {
      console.log(result);
      this.getData=result;
      this.origData=this.getData.rows;
    });
  }
  // postData(data:any){
  //   this.ToDoService.postApi(data).subscribe((result)=>{
  //     console.log(result);
  //   })
  // }

}
