import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { RecordsComponent } from './records/records.component';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';

import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    RecordsComponent,
    LoginComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
