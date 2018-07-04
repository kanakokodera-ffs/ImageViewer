import { Injectable } from '@angular/core';
import { ImageModel } from './image-model';
import { ServerService } from '../common/server.service';
import { deserialize } from 'serializer.ts/Serializer';
import { serialize } from 'serializer.ts/Serializer';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageModelService {
  images: ImageModel[];
  constructor(private serverService: ServerService) { }

  fetch(): Observable<ImageModel[]> {
    return this.serverService.getImages()
      .pipe(
        tap(images => this.images = images.map(image => this.deserialize(image)))
      );
  }


  addTag(imageModel: ImageModel, tag: string): Observable<any> {
    imageModel.addTag(tag);
    return this.serverService.updateImage(imageModel.id, this.serialize(imageModel));
  }

  private deserialize(image: any): ImageModel {
    return  deserialize<ImageModel>(ImageModel, {
      id: image.Id,
      path: image.Path,
      tags: image.Tags
    });
  }

  private serialize(imageModel: ImageModel): string {
    return serialize({
      Id: imageModel.id,
      Path: imageModel.path,
      Tags: imageModel.tags
    });
  }
}
