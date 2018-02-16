import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedTypesComponent } from '../../components/typescript/advanced-types/advanced-types.component';
import { ServicesComponent } from '../../components/typescript/services/services.component';
import { EvilSchemeRoutingModule } from './evil-scheme-routing.module';
import { PromisesComponent } from '../../components/typescript/promises/promises.component';
import { ObservablesComponent } from '../../components/definitions/observables/observables.component';

@NgModule({
  imports: [
    CommonModule,
    EvilSchemeRoutingModule
  ],
  declarations: [
  	AdvancedTypesComponent,
    ServicesComponent,
    PromisesComponent,
    ObservablesComponent
  ]
})
export class EvilSchemeModule { }
