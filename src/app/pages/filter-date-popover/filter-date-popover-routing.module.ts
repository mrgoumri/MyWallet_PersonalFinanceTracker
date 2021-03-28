import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterDatePopoverPage } from './filter-date-popover.page';

const routes: Routes = [
  {
    path: '',
    component: FilterDatePopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterDatePopoverPageRoutingModule {}
