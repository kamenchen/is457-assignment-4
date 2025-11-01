import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.page.html',
  styleUrls: ['./new-quotes.page.scss'],
  standalone: false,
})
export class NewQuotesPage implements OnInit {
  form: FormGroup
  constructor(private quoteService: QuoteService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      person: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      text: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(200)]
      }),
    });
  }
  onAddQuote() {
    this.quoteService.addQuote(
      this.form.value.person,
      this.form.value.text
    );
    this.form.reset();
    this.router.navigate(['/home']);
  }

}
