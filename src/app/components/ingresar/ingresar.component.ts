import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

 form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
   this.form=this.formBuilder.group(
    {
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      deviceinfo:this.formBuilder.group({
        deviceid:["178678768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificacionToken: ["67657575eececc34"]
      })
    }

   ) 


  


  }

  ngOnInit(): void {
  }
   get Email()
   {
     return this.form.get('email')

   }
   get Password()
   {
     return this.form.get('pasword')

   }
  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>
      {
        console.log("DATA:"+JSON.stringify(data));
        this.ruta.navigate(['/portfolio'])

      }



      
      )

  }

}
