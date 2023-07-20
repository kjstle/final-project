import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-item',
    loadChildren: () => import('./page-item/page-item.module').then( m => m.PageItemPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./page/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./page/options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./page/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'renewal',
    loadChildren: () => import('./page/renewal/renewal.module').then( m => m.RenewalPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'alogin',
    loadChildren: () => import('./alogin/alogin.module').then( m => m.AloginPageModule)
  },
  {
    path: 'vapp',
    loadChildren: () => import('./vapp/vapp.module').then( m => m.VappPageModule)
  },
  {
    path: 'scholar',
    loadChildren: () => import('./scholar/scholar.module').then( m => m.ScholarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }