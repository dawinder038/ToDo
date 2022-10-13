import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TodoServiceService } from '../../todo-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})

export class CreateTaskComponent implements OnInit {
  isOpen!:boolean;
  modalRef?: BsModalRef;
  myForm!:FormGroup;

  constructor(private modalService: BsModalService, private TodoService: TodoServiceService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    this.formData();
  }
formData(){
this.myForm=new FormGroup({
  task_name:new FormControl('',[Validators.required]),
  date: new FormControl('',[Validators.required])
})
}
 submit(data: any):void {
    this.TodoService.postApi({"task_name":data.task_name,"date":data.date.toISOString().substring(0,10)}).subscribe((result) => {
      console.log(result);
      this.isOpen=true;
    })
  }
}
