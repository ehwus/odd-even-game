import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  gameStarted: boolean = false;
  secondPassed = new EventEmitter<Number>();

  constructor() {}

  startGame() {
    this.gameStarted = true;

    let counter = 1;
    let gameLoop = setInterval(() => {
      if (!this.gameStarted) {
        clearInterval(gameLoop);
      }
      this.secondPassed.emit(counter);
      counter++;
    }, 1000);
  }

  stopGame() {
    this.gameStarted = false;
  }

  ngOnInit(): void {}
}
