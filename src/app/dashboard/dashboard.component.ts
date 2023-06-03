import { Component, OnInit } from '@angular/core';
import { ILeavesCount, ServiceResponse } from '../interface';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  public leavesCount: ILeavesCount = <ILeavesCount>{};
  
  /**
   *
   */
  constructor(private api: ApiService, private auth: AuthService) {
    
  }

  getLeavesCount(){
    this.api.GetById('Leave/GetLeavesByUser', '/' + this.auth.getUserId())
    .subscribe((x: ServiceResponse<ILeavesCount>)=>{
      if(x.success){
        this.leavesCount = x.data;
      }
    })
  }

  ngOnInit(): void {
    this.getLeavesCount();
  }

}
