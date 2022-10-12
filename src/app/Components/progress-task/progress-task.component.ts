import { Component, OnInit, TemplateRef, ɵLocaleDataIndex } from '@angular/core';
import { TodoServiceService } from '../../todo-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-progress-task',
  templateUrl: './progress-task.component.html',
  styleUrls: ['./progress-task.component.scss']
})
export class ProgressTaskComponent implements OnInit {
  modalRef?: BsModalRef;
  message?: string;
  date: any = "";
  getData: any = "";
  origData: any = "";
  getDataById: any;
  doneId: any = "";
  edittask: any = "";
  editDate: any;
  idNew: any;
  idNew2: any;
  getDate:any;
  getDate2:any;

  constructor(private ToDoService: TodoServiceService, private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
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
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
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
      this.log()
    })
  }

  log() {
    console.log('alert message closed');
  }

  renderDate(){
    this.getProgres();
  }
}
