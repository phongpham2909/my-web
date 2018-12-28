import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product, Collection, MenuHeader, Slider } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public PRODUCTS_API: string = 'http://localhost:3000/products';
  public COLLECTIONS_API: string = 'http://localhost:3000/collection';
  public SLIDER_API: string = 'http://localhost:3000/slider';
  public USER_DATA_API: string = 'http://localhost:3000/user-data';
  public MENU_API: string = 'http://localhost:3000/menu';

  constructor(public http: HttpClient) { }
  // Get all data products 
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_API)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  // Get id Product
  getProductbyID(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.PRODUCTS_API}/${id}`);
  }
  // Get all data collections
  getAllCollection(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.COLLECTIONS_API)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  // Get all data menuHeader
  getAllMenuHeader(): Observable<MenuHeader[]> {
    return this.http.get<MenuHeader[]>(this.MENU_API)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  // Get all data Image Slider
  getAllImageSlider(): Observable<Slider[]> {
    return this.http.get<Slider[]>(this.SLIDER_API)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
