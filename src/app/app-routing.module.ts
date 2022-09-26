import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: '',
     redirectTo: 'inicio',
     pathMatch: 'full'
  },
  {
     path: 'inicio',
     loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'campeonatos',
    loadChildren: () => import('./paginas/campeonatos/campeonatos.module').then( m => m.CampeonatosPageModule)
  },
  {
    path: 'equipes',
    loadChildren: () => import('./paginas/equipes/equipes.module').then( m => m.EquipesPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./paginas/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'apostas',
    loadChildren: () => import('./paginas/apostas/apostas.module').then( m => m.ApostasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
