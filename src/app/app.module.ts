import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HttpClient } from '@angular/common/http';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HabilidadesComponent,
    PruebaComponent,
    IngresarComponent,
    PortfolioComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,{provide:HTTP_INTERCEPTORS, useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
