import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';

import { RegisterComponent } from './register/register.component';
import { HelppComponent } from './helpp/helpp.component';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { BusComponent } from './bus/bus.component';
import { LuggageComponent } from './luggage/luggage.component';
import { HomeComponent } from './home/home.component';
import { BicycleInfoComponent } from './bicycle-info/bicycle-info.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import {  } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UsersComponent } from './users/users.component';
import { MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    routingComponents,
    RegisterComponent,
    HelppComponent,
    BicycleComponent,
    BikeComponent,
    CarComponent,
    BusComponent,
    LuggageComponent,
    HomeComponent,
    BicycleInfoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    CarouselModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
