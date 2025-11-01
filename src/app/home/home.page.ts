import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage{
  quoteGroup: Quotes[];
  constructor(private quoteService: QuoteService) {}

  ionViewWillEnter() {
    this.quoteGroup = this.quoteService.quotes;
  }
  onEditQuote() {

  }
  onRemoveQuote() {
    //this.quoteService.removeQuote(quoteId);
    this.quoteGroup = this.quoteService.quotes;
  }
}
