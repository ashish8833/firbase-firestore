import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityFormRoutingModule } from './university-form-routing.module';
import { UniversityFormComponent } from './university-form.component';

@NgModule({
  declarations: [UniversityFormComponent],
  imports: [
    CommonModule,
    UniversityFormRoutingModule
  ]
})
export class UniversityFormModule { }
