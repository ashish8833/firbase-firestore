import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "university", pathMatch: "prefix" },
      {
        path: "university",
        loadChildren:
          "./university-list/university-list.module#UniversityListModule"
      }
      // {
      //   path: "university/form",
      //   loadChildren:
      //     "./university-form/university-form-routing.module#UniversityFormModule"
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {}
