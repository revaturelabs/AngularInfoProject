import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DefinitionsComponent } from './components/definitions/definitions.component';

import { DecoratorComponent } from './components/definitions/decorator/decorator.component';
import { RattlesnakeRoutingModule } from './rattlesnake-routing.module';
import { ComponentComponent } from './components/definitions/component/component.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AccessComponent,
    NavbarComponent,
    DatabindingComponent,
    DefinitionsComponent,
    DecoratorComponent,
    ComponentComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    RattlesnakeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
