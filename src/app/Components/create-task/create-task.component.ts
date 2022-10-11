import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TodoServiceService } from '../../todo-service.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private TodoService: TodoServiceService,) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
  }

 submit(data: any):void {
  console.log(data);
    this.TodoService.postApi(data).subscribe((result) => {
      console.log(result);
      console.log(data);
    })
  }
}
