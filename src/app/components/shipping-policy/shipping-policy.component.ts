import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shipping-policy',
  templateUrl: './shipping-policy.component.html',
  styleUrls: ['./shipping-policy.component.scss']
})
export class ShippingPolicyComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Shipping Policy');
  }

  ngOnInit() {
  }

}
