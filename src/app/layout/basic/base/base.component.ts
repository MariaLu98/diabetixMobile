import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  
  isOpen = false;
  modeSideNav = 'side';

  constructor() {
  }

  ngOnInit(): void {
  }

  menuItemPressed(item: any): void {
    if (this.modeSideNav === 'over') {
      this.isOpen = false;
    }
  }

  toogleSideMenuEventHandlers(): void {
    this.isOpen = !this.isOpen;
  }

  openSideMenuEventHandlers($event: any): void {
    setTimeout(() => {
      this.isOpen = !$event.isScreenSmall;
      this.modeSideNav = $event.isScreenSmall ? 'over' : 'side';
    });
  }
}
