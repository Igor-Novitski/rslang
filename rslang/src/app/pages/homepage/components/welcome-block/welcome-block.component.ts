import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-block',
  templateUrl: './welcome-block.component.html',
  styleUrls: ['./welcome-block.component.scss']
})
export class WelcomeBlockComponent {

  @Input() name: String;


}
