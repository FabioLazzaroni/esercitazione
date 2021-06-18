import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dettaglio-prodotti',
  templateUrl: './dettaglio-prodotti.component.html',
  styleUrls: ['./dettaglio-prodotti.component.css']
})
export class DettaglioProdottiComponent implements OnInit {

  item : any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'))
    this.api.getProducts(productIdFromRoute).subscribe(
      (response : any) => {this.item = response}
    );
  }

}
