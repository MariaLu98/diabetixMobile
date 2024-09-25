import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-auth',
  templateUrl: './base-auth.component.html',
  styleUrls: ['./base-auth.component.scss']
})
export class BaseAuthComponent implements OnInit {  

  constructor(private router: Router) { }


  ngOnInit() {
  }

}
