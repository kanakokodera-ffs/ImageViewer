import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ImageModel } from '../model/image-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private baseUrl = 'api/images';

  constructor(private http: HttpClient) { }

    /** GET images from the server */
    getImages (): Observable<ImageModel[]> {
      // return this.http.get<ImageModel[]>(this.baseUrl)
      //   .pipe(
      //     tap(images => this.log(`fetched images`)),
      //     catchError(this.handleError('getImages', []))
      //   );
      const images = [
        { id: 1, path: '../../assets/images/test-image.png', tags:[]},
        { id: 2, path: '../../assets/images/test-image2.jpg', tags:[] },
        { id: 3, path: '../../assets/images/test-image.png', tags:[] },
        { id: 4, path: '../../assets/images/test-image2.jpg', tags:[] },
        { id: 5, path: '../../assets/images/test-image.png', tags:[] },
        { id: 6, path: '../../assets/images/test-image2.jpg', tags:[] },
        { id: 7, path: '../../assets/images/test-image.png', tags:[] },
        { id: 8, path: '../../assets/images/test-image2.jpg', tags:[] },
        { id: 9, path: '../../assets/images/test-image.png', tags:[] },
        { id: 10, path: '../../assets/images/test-image2.jpg', tags:[] }
      ];
      return of(images);
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      //this.messageService.add('HeroService: ' + message);
    }
}
