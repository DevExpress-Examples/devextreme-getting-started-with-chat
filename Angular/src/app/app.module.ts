import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSplitterModule } from 'devextreme-angular/ui/splitter';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSplitterModule,
    DxFormModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
