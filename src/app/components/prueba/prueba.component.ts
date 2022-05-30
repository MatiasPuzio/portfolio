import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
    educationList:any;
  constructor(private datosPortfolio:ServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>)


  }

}
