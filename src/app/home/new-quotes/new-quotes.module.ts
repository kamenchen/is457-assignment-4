import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewQuotesPageRoutingModule } from './new-quotes-routing.module';

import { NewQuotesPage } from './new-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewQuotesPageRoutingModule
  ],
  declarations: [NewQuotesPage]
})
export class NewQuotesPageModule {}
