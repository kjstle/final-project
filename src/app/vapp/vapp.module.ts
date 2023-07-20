import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VappPageRoutingModule } from './vapp-routing.module';

import { VappPage } from './vapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VappPageRoutingModule
  ],
  declarations: [VappPage]
})
export class VappPageModule {}
