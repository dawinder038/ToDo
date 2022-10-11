import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  getData:any="";
  origData:any="";

  constructor(private ToDoService:TodoServiceService) { }

  ngOnInit(): void {
    this.deleteTaskShow();
  }
deleteTaskShow(){
  let payload={
    limit: 10,
    start: 1,
    status: 0
  }
  this.ToDoService.deleteTaskShowApi(payload).subscribe((result)=>{
    console.log(result);
    this.getData=result;
    this.origData=this.getData.rows;
  })
}
}
