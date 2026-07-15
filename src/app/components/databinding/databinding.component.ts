import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  courseName: string = "Angular";

  inputType = "checkbox";

  rollNo: number = 101;

  isIndian: boolean = true;


  currentDate: Date = new Date();
  constructor() { }
  showMessage(message: string) {
    alert(message);
  }
  // firstName: string = Signal("Aniket");
  changeCoursName() {
    this.courseName = "React";
    // this.firstName.set("Aniket Saini");
  };
  ngOnInit(): void {
  }


}
