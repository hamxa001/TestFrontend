import { Component, OnInit } from '@angular/core';
import { Ilogin, ServiceResponse } from '../interface';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { commonCode } from '../CommonCode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public UserModel: Ilogin = <Ilogin>{ username: '', password: '' };
  public loginuser: string = "";
  public LoginForm: any;

  /**
   *
   */
  constructor( private api: ApiService,
    private auth: AuthService,
    private route: Router,
    private appcomp: AppComponent,
    public LoginFormFormbuilder: FormBuilder) {
  }

  form(){
    this.LoginForm = this.LoginFormFormbuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(commonCode.PasswordRegex)]]
    });
  }

  ngOnInit(): void {
    this.form()
  }

  async login() {
    
    if ((this.UserModel.username == null || this.UserModel.password == null) ||
      (this.UserModel.username == "" || this.UserModel.password == "")) {
      return;
    }

    let UserLogin: ServiceResponse<any> = await this.api.post('Login/login', this.UserModel)
    
    if (UserLogin != (undefined || null)) {
      let notifHeader = "Login Unsuccessful";
      if (UserLogin.success) {
        notifHeader = "Login Successful";
        this.auth.saveAuthData(UserLogin.data);
        this.route.navigate(['/dashboard']);
      }
      else{
        alert(notifHeader);
      }
    }
    return;
  }
}
