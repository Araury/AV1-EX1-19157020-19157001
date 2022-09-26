import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApostasPage } from './apostas.page';

const routes: Routes = [
  {
    path: '',
    component: ApostasPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApostasPageRoutingModule {}
