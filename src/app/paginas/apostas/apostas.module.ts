import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApostasPageRoutingModule } from './apostas-routing.module';

import { ApostasPage } from './apostas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApostasPageRoutingModule
  ],
  declarations: [ApostasPage]
})
export class ApostasPageModule {}
