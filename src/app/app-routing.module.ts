import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleViajemComponent } from './controle-viajem/controle-viajem.component';
import { CadastroViajemComponent } from './cadastro-viajem/cadastro-viajem.component';
import { DetalhesViajemComponent } from './detalhes-viajem/detalhes-viajem.component';
import { ExclusaoViajemComponent } from './exclusao-viajem/exclusao-viajem.component';

const routes: Routes = [
  {path:'', redirectTo:'/controle', pathMatch:'full'},
  {path:'controle', component:ControleViajemComponent},
  {path:'cadastro', component:CadastroViajemComponent},
  {path:'detalhes/:id', component:DetalhesViajemComponent},
  {path:'exclusao/:id', component:ExclusaoViajemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
