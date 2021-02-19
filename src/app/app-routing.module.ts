import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCreateComponent } from './components/portfolio-create/portfolio-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'create-portfolio' },
  { path: 'create-portfolio', component: PortfolioCreateComponent },
  { path: 'edit-portfolio/:id', component: PortfolioEditComponent },
  { path: 'portfolio-list', component: PortfolioListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
