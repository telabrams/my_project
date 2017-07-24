import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { RecordsComponent } from './records/records.component';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    RecordsComponent,
    LoginComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
