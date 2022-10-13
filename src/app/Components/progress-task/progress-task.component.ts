import { Component, OnInit, TemplateRef } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-progress-task',
  templateUrl: './progress-task.component.html',
  styleUrls: ['./progress-task.component.scss']
})
export class ProgressTaskComponent implements OnInit {
  modalRef?: BsModalRef;
  message?: string;
  getData: any ;
  origData: any ;
  getDataById: any;
  doneId: any ;
  edittask: any ;
  editDate: any;
  idNew: any;
  idNew2: any;
  todayDate:any;
  array:any[]=[];
  constructor(private ToDoService: TodoServiceService, private modalService: BsModalService,private toster:ToastrService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  ngOnInit(): void {
    this.todayDate = new Date().toISOString().substring(0, 10);
    this.getProgres();
  }

  getProgres() {
    let payload = {
      limit: 20,
      start: 1,
      status: 1
    }
    this.ToDoService.getProgressTaskApi(payload).subscribe((result) => {
      console.log("result",result);
      this.getData = result;
      this.origData = this.getData.rows;
      this.array=this.ToDoService.filterdata(this.origData);
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
      this.showSuccess();
    
    });
  }

  statusUpdate() {
    this.ToDoService.taskDoneApi({ "id": this.doneId, "status": 2 }).subscribe((result) => {
      console.log("id", this.doneId);
      console.log(result);
      this.getProgres();
    })
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
    this.showDelete();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  getDataById2(id: any) {
    this.ToDoService.getTaskByIdApi(id).subscribe((result) => {
      this.idNew = result;
      this.idNew2 = this.idNew.id
    })
  }

  editTask(data: any) {
    this.edittask = data.task_name;
    this.editDate = data.date
    this.ToDoService.editTaskApi({ "id": this.idNew2, "task_name": this.edittask, "date": this.editDate }).subscribe((result) => {
      this.getProgres();
    })
  }
  showSuccess() {
    this.toster.success('your Task is Successfully Completed','Done!' );
  }

  showDelete(){
    this.toster.success('Your Task is Deleted Successfully','DELETED!')
  }
  
}
