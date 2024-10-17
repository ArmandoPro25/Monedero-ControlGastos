import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PositionStackService {
  private apiKey = '763479e8da67a1f2ed6d766a3d9ad7a4';  // Tu API Key

  constructor() {}

  getGeolocationByIP(): Promise<any> {
    const url = `http://api.positionstack.com/v1/forward?access_key=${this.apiKey}&query=IP_ADDRESS`;
    return axios.get(url).then(response => response.data);
  }
}
