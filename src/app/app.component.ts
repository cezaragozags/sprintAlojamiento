import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalbarComponent } from './principalbar/principalbar.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { RulesComponent } from './rules/rules.component';

@Component({
  selector: 'app-root',
  imports: [DetallesComponent, EstanciasComponent, FooterComponent, NavbarComponent, PrincipalbarComponent, ReservacionComponent, RulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprintAlojamiento';

  
}
