import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterDatePopoverPageRoutingModule } from './filter-date-popover-routing.module';

import { FilterDatePopoverPage } from './filter-date-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterDatePopoverPageRoutingModule
  ],
  declarations: [FilterDatePopoverPage]
})
export class FilterDatePopoverPageModule {}
