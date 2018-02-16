import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedTypesComponent } from '../../components/typescript/advanced-types/advanced-types.component';
import { EvilSchemeRoutingModule } from './evil-scheme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EvilSchemeRoutingModule
  ],
  declarations: [
  	AdvancedTypesComponent
  ]
})
export class EvilSchemeModule { }
