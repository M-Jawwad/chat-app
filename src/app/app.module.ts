import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { ApiService } from './services/api.service';
import { ChatInterceptor } from './services/chat.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ChatInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
