import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatDialogModule

  ],
  exports:[
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatDialogModule


  ]
})
export class MaterialModule { }
