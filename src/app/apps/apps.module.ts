import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { AppsRoutingModule } from "./apps-routing.module";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ToolbarComponent, LayoutComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class AppsModule {}
