import { Component } from '@angular/core';

@Component({
  selector: 'app-reservacion',
  imports: [],
  templateUrl: './reservacion.component.html',
  styleUrl: './reservacion.component.css'
})
export class ReservacionComponent {

  //inicializacion de imagenes carrusel
  img1: string= "/Casa portada.webp";
  img2: string= "/sala.webp";
  img3: string= "/recámara.webp";
  img4: string= "";

  //variable conteo huespedes
  numHuespedes: number= 1;

  //variable conteo noches
  numNoches: number= 1;

  //variable Total
  total: number= 1500;

  //variables extras
  mascota: boolean= false;
  calefaccion: boolean= false;
  montana: boolean= false;
  senderismo: boolean= false;
  cascada: boolean= false;


  ngOnInit(): void{
    this.show(1);
  }

  show(op: number): void{
    switch (op) {
      case 1:
        this.img4 = this.img1;
        break;
    
      case 2:
        this.img4 = this.img2;
        break;

      case 3:
        this.img4 = this.img3;
        break;
    }
  }

  sumHuespedes(sum:boolean): void{
    if (sum){
      this.numHuespedes = this.numHuespedes +1;
    }
    else if (this.numHuespedes>1){
      this.numHuespedes = this.numHuespedes -1;
    }
  }

  sumNoches(sum:boolean): void{
    if (sum){
      this.numNoches = this.numNoches +1;
    }
    else if (this.numNoches>1){
      this.numNoches = this.numNoches -1;
    }
  }

  onSelectExtra (extra:string): void{
    switch(extra){
      case "mascota": this.mascota= !this.mascota;
      break;
      case "calefaccion": this.calefaccion= !this.calefaccion;
      break;
      case "montana": this.montana= !this.montana;
      break;
      case "senderismo": this.senderismo= !this.senderismo;
      break;
      case "cascada": this.cascada= !this.cascada;
      break;
    }
  }

  calcularTotal (): number{
    let sumTotal= 1500;
    if (this.numHuespedes > 1){
      let huespedesExtras= this.numHuespedes -1;
      let costoExtra= huespedesExtras *500;
      sumTotal=sumTotal + costoExtra;
    }

    if (this.numNoches > 1){
      let nochesExtras= this.numNoches -1;
      let costoExtra= nochesExtras *1000;
      sumTotal= sumTotal + costoExtra;
    }

    if (this.mascota){
      sumTotal=sumTotal + 250;
    }

    if (this.calefaccion){
      sumTotal=sumTotal + 500;
    }

    if (this.montana){
      sumTotal=sumTotal + 150;
    }

    if (this.senderismo){
      sumTotal=sumTotal + 200;
    }

    if (this.cascada){
      sumTotal=sumTotal + 50;
    }

    return sumTotal;
  }
}

