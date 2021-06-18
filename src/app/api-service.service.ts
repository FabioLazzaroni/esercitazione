import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apipath = 'https://makeup-api.herokuapp.com/api/v1/products'
  
  constructor(private http: HttpClient, private Router : Router) { }

  
getProduct(){
  return this.http.get(this.apipath + '.json').pipe(
    catchError(this.handleError)
)}
getProducts(id) {
  return this.http.get(this.apipath + '/' + id +'.json').pipe(
    catchError(this.handleError)
);
}

getBronzer(){
  return this.http.get(this.apipath +'.json' +'?product_type=bronzer').pipe(
    catchError(this.handleError)
);
}
getEyebrow(){
  return this.http.get(this.apipath +'.json' +'?product_type=eyebrow').pipe(
    catchError(this.handleError)
  );
};
getRossetti(){
  return this.http.get(this.apipath +'.json' +'?product_type=lipstick').pipe(
    catchError(this.handleError)
  );
};

getError(){
  return this.http.get(this.apipath +'.json' +'?product_tpyebrow').pipe(
    catchError(this.handleError)
  );
};

private handleError(error:any){
  if(error.status ===0){
      console.log("Trovato un essore:", error.error)
  }else {
      console.log(`Backend returned code ${error.status},` + 
      `Il messaggio è: ${error.message}`);
  }
  return throwError(error);
}



}


