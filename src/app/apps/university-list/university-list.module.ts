import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UniversityListComponent } from "./university-list.component";
import { UniversityListRoutingModule } from "./university-list-routing.module";
import {
  MatCardModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";
@NgModule({
  declarations: [UniversityListComponent],
  imports: [
    CommonModule,
    UniversityListRoutingModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UniversityListModule {}
