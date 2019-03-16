import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareerComponent } from './components/career/career.component';
import { DashersComponent } from './components/dashers/dashers.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { FleetAgreementComponent } from './components/fleet-agreement/fleet-agreement.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CareerComponent,
    DashersComponent,
    RestaurantsComponent,
    PrivacyComponent,
    TermsComponent,
    FleetAgreementComponent,
    ShippingPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
