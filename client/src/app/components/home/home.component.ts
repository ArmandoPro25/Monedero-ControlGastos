import { Component, OnInit } from '@angular/core';
import { PositionStackService } from '../../services/positionstack.service';  // Ajusta la ruta si es necesario

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corregido: styleUrls en plural
})
export class HomeComponent implements OnInit {
  latitud: number | undefined;
  longitud: number | undefined;

  constructor(private positionStackService: PositionStackService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener la ubicación del usuario
    this.positionStackService.getGeolocationByIP().then(data => {
      if (data && data.data.length > 0) {
        const location = data.data[0];
        this.latitud = location.latitude;
        this.longitud = location.longitude;
        console.log(`Latitud: ${this.latitud}, Longitud: ${this.longitud}`);
      }
    }).catch(error => {
      console.error('Error al obtener la ubicación:', error);
    });
  }
}
