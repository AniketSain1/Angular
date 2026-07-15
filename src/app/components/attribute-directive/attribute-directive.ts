import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

  isActive = true;
  isBold = false;
  isDarkMode = false;
  marks = 75;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  increaseMarks() {
    this.marks += 5;
  }
  decreaseMarks() {
    this.marks -= 5;
  }
}
