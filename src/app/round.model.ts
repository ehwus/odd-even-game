export class Round {
  constructor(public number: number) {}

  type() {
    return this.number % 2 === 0 ? 'even' : 'odd';
  }
}
