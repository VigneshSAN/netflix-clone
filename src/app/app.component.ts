import { Component } from '@angular/core';
import requests from './services/request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-clone';

  Request: any = requests;

}
