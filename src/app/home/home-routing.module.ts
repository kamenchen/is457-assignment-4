import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'quote-details',
    loadChildren: () => import('./quote-details/quote-details.module').then( m => m.QuoteDetailsPageModule)
  },
  {
    path: 'new-quotes',
    loadChildren: () => import('./new-quotes/new-quotes.module').then( m => m.NewQuotesPageModule)
  },
  {
    path: 'edit-quote',
    loadChildren: () => import('./edit-quote/edit-quote.module').then( m => m.EditQuotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
