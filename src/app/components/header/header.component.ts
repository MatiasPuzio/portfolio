import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  miPortfolio:any;

  constructor(private datosPortfolio:ServiceService) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data=>{
    
       this.miPortfolio=data;

    });

    

  }

}
