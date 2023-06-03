import { LeaveStatus, LeaveType, NatureOfLeave } from "./enum";

export interface Ilogin{
    username:string;
    password:string
}

export interface ServiceResponse<T>{
    success : boolean;
    data : T;
    message : string
}

export interface ILeavesCount{
    remainingLeaves: number;
    availedLeaved: number;
    pendingLeaves: number;
    rejectedLeaves:number;
    totalLeaves: number;
}

export interface ILeavesDto{
    id: number;
    userId: string;
    fromDate: Date;
    toDate: Date;
    leaveType: LeaveType;
    natureOfLeave: NatureOfLeave;
    leaveStatus: LeaveStatus;
}

export interface GetLeavesDto{
    id: number;
    userId: string;
    fromDate: Date;
    toDate: Date;
    leaveType: string;
    natureOfLeave: string;
    leaveStatus: string;
}