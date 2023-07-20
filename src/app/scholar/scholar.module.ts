import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScholarPageRoutingModule } from './scholar-routing.module';

import { ScholarPage } from './scholar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScholarPageRoutingModule
  ],
  declarations: [ScholarPage]
})
export class ScholarPageModule {}
