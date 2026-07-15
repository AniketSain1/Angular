import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  count = signal(0);
  increment() {
    this.count.update((c) => c + 1);
  }
  decrement() {
    this.count.update(prev => prev - 1);
  }
  reset() {
    this.count.set(0);
  }
}

