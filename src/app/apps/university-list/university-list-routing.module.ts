import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UniversityListComponent } from "./university-list.component";

const routes: Routes = [
  {
    path: "",
    component: UniversityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityListRoutingModule {}
