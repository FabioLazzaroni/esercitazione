import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  product: any = []
  productDetail: any = null;
  errors: any;
  message: any;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(
      (response: any) => {
        this.product = response;
        if (response) {
          hideloader();
        }
        console.log(response)
        this.product = response;
      }
    );
    function hideloader() {
      document.getElementById('loading').style.display = 'none';
    }
    (error:any) => {
      console.log("Errore da componente",error)
      this.errors=true;
      this.message = "OOOOOPS ! Qualcosa non ha funzionato!"
  }

  }
  viewDetail(id:number){
    this.productDetail = id;
  }

}
