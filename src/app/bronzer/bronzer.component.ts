import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-bronzer',
  templateUrl: './bronzer.component.html',
  styleUrls: ['./bronzer.component.css']
})
export class BronzerComponent implements OnInit {

  bronzer : any = [];

  constructor(private api: ApiService, private route: ActivatedRoute) { 
  }



  ngOnInit(): void {
    this.api.getBronzer().subscribe(
      (response:any) => {
        this.bronzer = response
      }
    );   
  }
  

}
