import { Component, OnInit } from '@angular/core';
import { GetLeavesDto, ILeavesDto, ServiceResponse } from '../interface';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
import { LeaveStatus, LeaveType, NatureOfLeave } from '../enum';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit{
  public allLeaves: GetLeavesDto[] = [];
/**
 *
 */
constructor(private api: ApiService, private auth: AuthService) {
  
  
}

getAllLeaves() {
  
  this.api.GetAllrecords('Leave/GetAllLeaves').subscribe((response: ServiceResponse<ILeavesDto[]>) => {
    if (response.success) {
      
      this.allLeaves = response.data.map((leave: ILeavesDto) => {
        return {
          id: leave.id,
          userId: leave.userId,
          fromDate: leave.fromDate,
          toDate: leave.toDate,
          leaveType: LeaveType[leave.leaveType],
          natureOfLeave: NatureOfLeave[leave.natureOfLeave],
          leaveStatus: LeaveStatus[leave.leaveStatus]
        };
      });
    }
    
  });
}


  ngOnInit(): void {
    this.getAllLeaves();  
  }

}
