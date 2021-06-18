import { Component, OnInit } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'secondary',
  message: 'This is a secondary alert',
},
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alerts: Alert[];


  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  ngOnInit(): void {
  }
}

