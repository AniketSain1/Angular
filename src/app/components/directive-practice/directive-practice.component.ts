import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  showParagraph: boolean = true;
  showParagraph1: boolean = true;

  text1: string = "";
  text2: string = "";

  fruits = ["Apple", "Banana", "Mango", "Orange"];
  employees: any[] = [
    { id: 1, name: "John", age: 30, department: "IT", status: "true" },
    { id: 2, name: "Jane", age: 25, department: "HR", status: "false" },
    { id: 3, name: "Bob", age: 35, department: "Finance", status: "true" }
  ];

  hide() {
    this.showParagraph = false;
  }
  show() {
    this.showParagraph = true;
  }
  toggleParagraph() {
    this.showParagraph1 = !this.showParagraph1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
