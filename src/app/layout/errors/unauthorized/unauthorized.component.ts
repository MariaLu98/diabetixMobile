import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/services/authentication/authorize.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone,
              private authorizeService: AuthorizeService) { }

  ngOnInit(): void {
  }

  goHome() {
    this.zone.run(() => {
      this.router.navigate(['/']);
    });
  }

  logOut() {
    this.authorizeService.clearLocalStorage();
    this.goHome();
  }

}
