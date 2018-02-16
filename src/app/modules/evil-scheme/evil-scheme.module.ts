import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvilSchemeRoutingModule } from './evil-scheme-routing.module';
import { PromisesComponent } from '../../components/typescript/promises/promises.component';

@NgModule({
  imports: [
    CommonModule,
    EvilSchemeRoutingModule
  ],
  declarations: [
    PromisesComponent
  ]
})
export class EvilSchemeModule { }
