import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ClarityModule, BrowserAnimationsModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
