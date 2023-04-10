import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from "@angular/core";
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
