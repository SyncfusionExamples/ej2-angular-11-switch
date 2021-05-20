import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';
 
enableRipple(true);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
