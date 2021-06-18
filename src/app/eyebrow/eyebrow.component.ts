import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-eyebrow',
  templateUrl: './eyebrow.component.html',
  styleUrls: ['./eyebrow.component.css']
})
export class EyebrowComponent implements OnInit {

  eyebrow: any = [];

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getEyebrow().subscribe(
      (response:any) => {
        this.eyebrow = response
      }
    );
  }

}
