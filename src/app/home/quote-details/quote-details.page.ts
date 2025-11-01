import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes.model';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
  standalone: false,
})
export class QuoteDetailsPage implements OnInit {
  quote: Quotes;
  id: string;
  constructor(private route: ActivatedRoute, private quoteService: QuoteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('quoteId');
    this.quote = this.quoteService.getQuote(this.id);
  }

}
