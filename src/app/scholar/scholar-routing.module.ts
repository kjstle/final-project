import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScholarPage } from './scholar.page';

const routes: Routes = [
  {
    path: '',
    component: ScholarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScholarPageRoutingModule {}
