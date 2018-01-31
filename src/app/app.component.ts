import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html'
})
export class AppComponent {
  	nombre:string = "Jonatan";
  	arr:number[] = [0,1,2,3,4,5,6];
  	PI = Math.PI;
  	porcentaje:number = 0.523;
  	salario:number = 2000;
  	casa = {
  		nombre:"Jonatan",
  		direccion:"Av. 609",
  		delegacion: "GAM"
  	};

  	promesa = new Promise((resolve, reject)=>{
  		setTimeout(()=>{ resolve('Estoy bien'), 35000 });
  	});

  	fecha:Date = new Date();

  	nombreCompleto:string = "jonAtan mOralEs torRes"; 

  	video:string = "Qe67_13SdJI";

  	activar:boolean = true;
}
