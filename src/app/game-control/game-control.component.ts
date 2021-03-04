import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  counter: number = 1;
  gameStarted: boolean = false;
  @Output() secondPassed = new EventEmitter<number>();

  constructor() {}

  startGame() {
    this.gameStarted = true;

    let gameLoop = setInterval(() => {
      if (!this.gameStarted) {
        clearInterval(gameLoop);
        this.counter = 0;
      } else {
        this.secondPassed.emit(this.counter);
        this.counter++;
      }
    }, 1000);
  }

  stopGame() {
    this.gameStarted = false;
  }

  ngOnInit(): void {}
}
