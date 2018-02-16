import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../../components/typescript/services/services.component';

import { EvilSchemeRoutingModule } from './evil-scheme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EvilSchemeRoutingModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class EvilSchemeModule { }
