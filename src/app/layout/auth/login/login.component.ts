import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginRequest } from '../models/login.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formObj: LoginRequest = new LoginRequest();
  formGroup: FormGroup = new FormGroup({});
  hide = true;
  
  constructor(private formBuilder: RxFormBuilder, private route: Router, private router: ActivatedRoute,
              private http: HttpClient) {  }

  ngOnInit() {
    this.formObj = new LoginRequest();
    this.formGroup = this.formBuilder.formGroup(this.formObj);
  }

  submitServer() { 
    this.route.navigate([`/main/home`]);    
  }

  setDisableFields() {

  }
  setEnableFields() {

  }
}
