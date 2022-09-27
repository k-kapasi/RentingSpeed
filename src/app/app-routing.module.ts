import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { BicycleComponent } from './bicycle/bicycle.component';
import { BikeComponent } from './bike/bike.component';
import { BusComponent } from './bus/bus.component';
import { CarComponent } from './car/car.component';
import { HelppComponent } from './helpp/helpp.component';
import { HomeComponent } from './home/home.component';
import { LuggageComponent } from './luggage/luggage.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },

  {
    path:'aboutus',
    component: AboutusComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'helpp',
    component: HelppComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },


  {
    path:'sidenav',component:SidenavComponent, outlet:'secondary'
  },
  {
    path:'bicycle', component:BicycleComponent
  },
  {
    path:'bike', component:BikeComponent
  },
  {
    path:'car', component:CarComponent
  },
  {
    path:'bus', component:BusComponent
  },
  {
    path:'luggage', component:LuggageComponent
  } 
];
  
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutusComponent,ServicesComponent
]