import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Form01Component } from './components/form-01/form-01.component';
import { Form02Component } from './components/form-02/form-02.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, Form01Component, Form02Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
