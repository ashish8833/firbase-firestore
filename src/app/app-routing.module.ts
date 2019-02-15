import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./apps/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./apps/apps.module#AppsModule"
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
