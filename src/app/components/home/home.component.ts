import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('resize', function () {
      if ($(window).width() > 568) {
        $('#foreground').addClass('background');
        $('#ground').removeClass('background');
      } else {
        $('#foreground').removeClass('background');
        $('#ground').addClass('background');
      }
    });
    if ($(window).width() > 568) {
      $('#foreground').addClass('background');
      $('#ground').removeClass('background');
    } else {
      $('#foreground').removeClass('background');
      $('#ground').addClass('background');
    }
  }

}
