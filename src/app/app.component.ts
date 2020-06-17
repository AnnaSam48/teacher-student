import { Component} from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private _interactionService : InteractionService){}

  greetStudent(){
    this._interactionService.sendMessage('Good morning!');
  }
  praiseStudent(){
      this._interactionService.sendMessage('Great work!');
  }
}
