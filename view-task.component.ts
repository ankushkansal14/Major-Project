import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  firstnamebind: string;
  taskbind: any="Manager";

  userArray: Array<any> = [];
  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.userArray.push(element);
      });
    })
  }
    
  curId:string;
  ngOnInit() {
    
  }
  // sendname(event){
  //   this.firstnamebind=document.getElementById("namee");
  // }

  sendId(indx:string){
    
   this.curId =indx;
   console.log(this.curId);
  }

  

}
