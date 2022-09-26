import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
imports: [
  CommonModule,
  IonicModule
];

@NgModule({
  declarations: [
    HeaderComponent
  ],
  
  exports:[
    HeaderComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }