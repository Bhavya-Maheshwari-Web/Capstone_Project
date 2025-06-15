import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Register } from './register/register';
import { Login } from './login/login';
import { TrainSearch } from './train-search/train-search';
import { Payment } from './payment/payment';
import { TicketConfirmation } from './ticket-confirmation/ticket-confirmation';

@NgModule({
  declarations: [
    App,
    Register,
    Login,
    TrainSearch,
    Payment,
    TicketConfirmation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
