import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {},
  {}
]

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent, 
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
