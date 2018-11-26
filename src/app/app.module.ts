import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';

import { TreeModule } from 'angular-tree-component';
import {StorageService} from "./services/storage.service";
import { FormComponent } from './form/form.component';
import { ChmodPipe } from './pipes/chmod.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    FormComponent,
    ChmodPipe
  ],
  imports: [
    BrowserModule,
    TreeModule.forRoot()
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
