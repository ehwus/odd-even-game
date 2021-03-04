import { Component } from '@angular/core';
import { Round } from './round.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gamesPlayed: Round[] = [];

  onSecondPassed(currentNumber: number) {
    this.gamesPlayed.push(new Round(currentNumber));
  }
}
