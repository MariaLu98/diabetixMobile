import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RxFormBuilder, email } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { RegisterRequest } from '../models/register.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formObj: RegisterRequest = new RegisterRequest();
  hide = true;
  hideConfirmPassword = true;
  hasCodeVerification = false;
  public formGroup: FormGroup = new FormGroup({});
  loading = false;
  readonly dialog = inject(MatDialog);
  constructor(private formBuilder: RxFormBuilder, private route: Router, private router: ActivatedRoute,
    private http: HttpClient) {  }

  ngOnInit() {
    this.fetchDataFormView();
  }

  async fetchDataFormView() {
    this.formObj = new RegisterRequest();
    this.formGroup = this.formBuilder.formGroup(this.formObj);   
    this.loading = false;

  }

  submitServer() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {email: this.formGroup.value.email()},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.route.navigate([`/auth/login`]);
    });
  }

  setDisableFields() {

  }
  setEnableFields() {

  }
}
