import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HieuleComponent } from './hieule/hieule.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HieuleComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
