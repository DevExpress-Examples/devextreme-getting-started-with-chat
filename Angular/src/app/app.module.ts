import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxChatModule } from 'devextreme-angular/ui/chat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
