import { Component, OnInit,TemplateRef } from '@angular/core';
import { esUsLocale } from 'ngx-bootstrap/chronos';
import { TodoServiceService } from '../../todo-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  modalRef?: BsModalRef;
  getData: any = "";
  origData: any = "";
  message?: string;

  constructor(private ToDoService: TodoServiceService,private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
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
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
}
