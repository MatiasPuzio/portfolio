import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio3';
}
