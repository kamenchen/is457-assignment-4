import { Injectable } from '@angular/core';

import { Quotes } from './quotes.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private _quotes: Quotes[] = [
    new Quotes(
      '1',
      'Theodore Roosevelt',
      'Believe you can and you\'re halfway there'
    ),
    new Quotes(
      '2',
      'Norman Vincent Peale',
      'Change your thoughts and you change your world.'
    ),
    new Quotes(
      '3',
      'Robert H. Schuller',
      'What great thing would you attempt if you knew you could not fail?'
    ),
    new Quotes(
      '4',
      'John Wooden',
      'Ability may get you to the top, but it takes character to keep you there.'
    ),
    new Quotes(
      '5',
      'Robert Frost',
      'Education is the ability to listen to almost anything without losing your temper.'
    ),
    new Quotes(
      '6',
      'Benjamin Disraeli',
      'Every product of genius must be the product of enthusiasm.'
    ),
    new Quotes(
      '7',
      'Norman Vincent Peale',
      'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.'
    ),
    new Quotes(
      '8',
      'Jim Rohn',
      'Either you run the day or the day runs you.'
    ),
    new Quotes(
      '9',
      'Donna Brazile',
      'I was motivated to be different in part because I was different.'
    )
  ]

  constructor() { }
}
