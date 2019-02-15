import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register/register.component";
import { AngularFirestore } from "@angular/fire/firestore";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule {
  constructor(private afs: AngularFirestore) {}
}
