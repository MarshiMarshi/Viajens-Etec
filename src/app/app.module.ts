import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControleViajemComponent } from './controle-viajem/controle-viajem.component';
import { CadastroViajemComponent } from './cadastro-viajem/cadastro-viajem.component';
import { ExclusaoViajemComponent } from './exclusao-viajem/exclusao-viajem.component';
import { DetalhesViajemComponent } from './detalhes-viajem/detalhes-viajem.component';

@NgModule({
  declarations: [
    AppComponent,
    ControleViajemComponent,
    CadastroViajemComponent,
    ExclusaoViajemComponent,
    DetalhesViajemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
