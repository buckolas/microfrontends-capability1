import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  // selector: 'app-root',
  templateUrl: './capability1-app.component.html',
  styleUrls: ['./capability1-app.component.scss']
})
export class Capability1AppComponent {
  title = 'Microfrontends Capability #1';
  app = environment.application;
  @Input() parentapp: string;
}
