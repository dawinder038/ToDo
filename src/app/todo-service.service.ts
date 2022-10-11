import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  apiUrl:any='http://139.59.47.49:4004/api'

  constructor(private http:HttpClient) { }
  getProgressTaskApi(payload:any){
    return this.http.get(this.apiUrl+"/tasks?limit="+payload.limit+"&start="+payload.start +"&status="+payload.status)
  }

  getCompletedTaskApi(payload:any){
    return this.http.get(this.apiUrl+"/tasks?limit="+payload.limit+"&start="+payload.start +"&status="+payload.status)
  }
  deleteTaskShowApi(payload:any){
    return this.http.get(this.apiUrl+"/tasks?limit="+payload.limit+"&start="+payload.start +"&status="+payload.status)
  }
  postApi(data:any){
    return this.http.post(this.apiUrl+"/task",data)
  }
  deleteApi(id:any){
    return this.http.delete(this.apiUrl+"/task"+"/delete/"+id);
  }
  getTaskByIdApi(id:any){
    return this.http.get(this.apiUrl+"/task/{id}?id="+id);
  }
  taskDoneApi(data:any){
    return this.http.post(this.apiUrl+"/task"+"/status",data);
  }
}

