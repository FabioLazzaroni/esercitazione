import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-errore',
  templateUrl: './errore.component.html',
  styleUrls: ['./errore.component.css']
})
export class ErroreComponent implements OnInit {

  constructor(private api: ApiService) { }
  error = false;
  message: string
  errors: any


  ngOnInit(): void {
    this.api.getError().subscribe(
      (response:any) => {
        this.errors = response
      }
    );   
    (error:any)=> {console.log('Errore dal component', error.message);
    this.error = true;
    this.message = "OOOOOPS non funziona :-("
  }
  }

}
