import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChildComponent} from './child/child.component'
import { AppComponent } from './app.component';
import { InteractionService } from './interaction.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InteractionService]
})
export class AppModule { }
