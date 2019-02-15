import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UniversityFormComponent } from "./university-form.component";

const routes: Routes = [
  {
    path: "",
    component: UniversityFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityFormRoutingModule {}
