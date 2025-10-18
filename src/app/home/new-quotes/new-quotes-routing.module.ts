import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewQuotesPage } from './new-quotes.page';

const routes: Routes = [
  {
    path: '',
    component: NewQuotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewQuotesPageRoutingModule {}
