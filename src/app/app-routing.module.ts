import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareerComponent } from './components/career/career.component';
import { DashersComponent } from './components/dashers/dashers.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { FleetAgreementComponent } from './components/fleet-agreement/fleet-agreement.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'restaurants', component: RestaurantsComponent, pathMatch: 'full'},
  {path: 'careers', component: CareerComponent, pathMatch: 'full'},
  {path: 'dashers', component: DashersComponent, pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent, pathMatch: 'full'},
  {path: 'privacy', component: PrivacyComponent, pathMatch: 'full'},
  {path: 'terms', component: TermsComponent, pathMatch: 'full'},
  {path: 'fleet-agreement', component: FleetAgreementComponent, pathMatch: 'full'},
  {path: 'shipping-policy', component: ShippingPolicyComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
