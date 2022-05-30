import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  miPortfolio2:any;

  constructor(private datosPortfolio2:ServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio2.obtenerDatos().subscribe(data=>{
      
       this.miPortfolio2=data;

    });

    


  }

}
