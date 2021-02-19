import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioCreateComponent } from './components/portfolio-create/portfolio-create.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioCreateComponent,
    PortfolioEditComponent,
    PortfolioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
