import { Component, OnInit,TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  array:any;
  todayDate:any;

  constructor(private ToDoService: TodoServiceService,private modalService: BsModalService,private toster:ToastrService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  ngOnInit(): void {
    this.todayDate = new Date().toISOString().substring(0, 10);
    this.getCompletedData();
  }

  getCompletedData() {
    let payload = {
      limit: 20,
      start: 1,
      status: 2
    }
    this.ToDoService.getCompletedTaskApi(payload).subscribe((result) => {
      console.log(result);
      this.getData = result;
      this.origData = this.getData.rows;
      this.array=this.ToDoService.filterdata(this.origData);
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
    this.showDelete();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
  showDelete(){
    this.toster.success('Your Task is Deleted Successfully','DELETED!')
  }
}
