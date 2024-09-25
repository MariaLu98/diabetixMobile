
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  logo: string = '';
  expand = true;
  constructor(private route: Router) {
  }

  async ngOnInit() {
  }

  logOut() {
    this.route.navigate([`/auth/login`]);    
  }
  open(){
    this.expand = !this.expand;
  }
}
