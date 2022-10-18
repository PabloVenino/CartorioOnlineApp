import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirthComponent } from './birth/birth.component';
import { BirthApiService } from './birth/birth-api.service';
import { DeathComponent } from './death/death.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthComponent,
    DeathComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BirthApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
