import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gpro-material';

  ngOnInit(): void {
    this.jqueryCode();
  }

  jqueryCode() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }


}


