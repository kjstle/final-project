import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VappPage } from './vapp.page';

const routes: Routes = [
  {
    path: '',
    component: VappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VappPageRoutingModule {}
