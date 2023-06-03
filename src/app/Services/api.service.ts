import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ServiceResponse } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BaseURL: string = '';
  public config: any;
  public ServiceResponse: ServiceResponse<any> = <ServiceResponse<any>>{ message: '', data: {}, success: false };
  constructor(
    private http: HttpClient
  ) {
    this.BaseURL = 'https://localhost:7138/api/';
  }

  GetAllrecords(route: string) {
    return this.http.get<ServiceResponse<any>>(this.BaseURL + route, this.httpOptions)
  }

  GetById(route: string, id: any) {
    
    return this.http.get<ServiceResponse<any>>(this.BaseURL + route + id, this.httpOptions)
  }

  async post(
    route: string,
    body: any
  ): Promise<ServiceResponse<any>> {

    const response = (await this.http
      .post(this.BaseURL + route, body, this.httpOptions)
      .toPromise()
      .catch((error: HttpErrorResponse) => {
        this.CatchErrorMethod(error)
        return
      })) as ServiceResponse<any>;

    return response as ServiceResponse<any>
  }

  public options = {
    responseType: 'text' as const,
  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'text/plain'
    })
  };

  CatchErrorMethod(error: HttpErrorResponse) {
    let header, message: string = "";
    if ((!error.ok) && error.status == 0) {
      header = error.statusText;
      message = "No Api Found!";
    }
    else {
      header = error.statusText;
      message = error.message;
    }
    return
  }
}