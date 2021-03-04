import { Component } from '@angular/core';
import { Round } from './round.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  roundsPlayed: Round[] = [];

  onSecondPassed(currentNumber: number) {
    this.roundsPlayed.push(new Round(currentNumber));
  }
}
