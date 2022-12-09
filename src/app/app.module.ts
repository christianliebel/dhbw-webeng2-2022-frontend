import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'christianliebel.eu.auth0.com',
      clientId: 'fSvT5BY4jJ462nmekyJpayXNpn5jl22O',
      audience: 'https://christianliebel.com/todo/',
      httpInterceptor: {
        allowedList: ['http://localhost:3000/*']
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }, {
    provide: LOCALE_ID,
    useValue: 'de'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
