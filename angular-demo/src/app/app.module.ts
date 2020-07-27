import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HieuleComponent } from './hieule/hieule.component';
import { FontSizeComponent } from './font-size/font-size.component';

@NgModule({
  declarations: [
    AppComponent,
    HieuleComponent,
    FontSizeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
