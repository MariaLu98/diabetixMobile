import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute, QueryParamsHandling, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { of, Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConfirmComponent>);

  constructor(private route: Router, private router: ActivatedRoute,
    private http: HttpClient) {
  }

  fetchDataFormView() {

  }
  submitServer(stayAtPage?: boolean) {

  }

  setDisableFields() {

  }
  setEnableFields() {

  }

  async ngOnInit() {
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
