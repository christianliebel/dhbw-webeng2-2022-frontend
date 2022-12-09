import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
