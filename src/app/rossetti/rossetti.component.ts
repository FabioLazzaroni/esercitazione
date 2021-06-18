import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rossetti',
  templateUrl: './rossetti.component.html',
  styleUrls: ['./rossetti.component.css']
})
export class RossettiComponent implements OnInit {
  
  rossetti: any = []

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getRossetti().subscribe(
      (response:any) => {
        this.rossetti = response
      }
    );
  }

}
