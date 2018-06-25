import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageModel } from './image-model';
import { ServerService} from '../common/server.service';

@Injectable({
  providedIn: 'root'
})
export class ImageModelService {
  images: ImageModel[];
  constructor(private serverService: ServerService) { }

  fetch(){
    return this.serverService.getImages()
    .subscribe(
      images => this.images = images
    )
  }

  update() {

  }

  addTag() {
    
  }
}
