import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { IntroGuard } from "./guards/intro.guard";

const routes: Routes = [
  {
    path: "menu",
    loadChildren: () =>
      import("./pages/menu/menu.module").then((m) => m.MenuPageModule),
    canActivate: [IntroGuard],
  },
  {
    path: "intro",
    loadChildren: () =>
      import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
  },
  {
    path: "",
    redirectTo: "menu/tracker",
    pathMatch: "full",
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'filter-date-popover',
    loadChildren: () => import('./pages/filter-date-popover/filter-date-popover.module').then( m => m.FilterDatePopoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
