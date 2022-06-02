import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'ingresar', component:IngresarComponent},
  {path:'',redirectTo:'ingresar',pathMatch:'full'},
  {path:'**',component:NoEncontradoComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
