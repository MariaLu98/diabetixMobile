import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = persons;
  ngOnInit(): void{
  }

}
export interface Person {
  name: string;
  birthdate: Date;
  email: string;
  cellphone: number;
}

const persons: Person[] = [
  {
    name: "John Doe",
    birthdate: new Date(1990, 5, 15),
    email: "john.doe@example.com",
    cellphone: 1234567890
  },
  {
    name: "Jane Smith",
    birthdate: new Date(1985, 10, 20),
    email: "jane.smith@example.com",
    cellphone: 2345678901
  },
  {
    name: "Alice Johnson",
    birthdate: new Date(1992, 3, 25),
    email: "alice.johnson@example.com",
    cellphone: 3456789012
  },
  {
    name: "Bob Brown",
    birthdate: new Date(1988, 7, 30),
    email: "bob.brown@example.com",
    cellphone: 4567890123
  },
  {
    name: "Charlie Davis",
    birthdate: new Date(1995, 1, 10),
    email: "charlie.davis@example.com",
    cellphone: 5678901234
  }
];
