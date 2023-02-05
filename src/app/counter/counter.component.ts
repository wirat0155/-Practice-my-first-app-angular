import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
    .text-white {
      color: white;
    }
  `]
})
export class CounterComponent {
  isDisplay = false;
  log = [];

  onPressButton() {
    this.isDisplay = !this.isDisplay;
    this.log.push(new Date());
  }
}
