import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon' //importacion para usar los iconos de angular material
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports:[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
  ]
})
export class MaterialModule { }
