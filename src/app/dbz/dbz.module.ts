import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { FormsComponent } from './components/forms/forms.component';





@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainComponent,
  ]
})
export class DbzModule {

}
