import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const images = [
      { id: 1, path: '../../assets/images/test-image.png', tags:[]},
      { id: 2, path: '../../assets/images/test-image.png', tags:[] },
      { id: 3, path: '../../assets/images/test-image.png', tags:[] },
      { id: 4, path: '../../assets/images/test-image.png', tags:[] },
      { id: 5, path: '../../assets/images/test-image.png', tags:[] },
      { id: 6, path: '../../assets/images/test-image.png', tags:[] },
      { id: 7, path: '../../assets/images/test-image.png', tags:[] },
      { id: 8, path: '../../assets/images/test-image.png', tags:[] },
      { id: 9, path: '../../assets/images/test-image.png', tags:[] },
      { id: 10, path: '../../assets/images/test-image.png', tags:[] }
    ];
    return {images};
  }
}