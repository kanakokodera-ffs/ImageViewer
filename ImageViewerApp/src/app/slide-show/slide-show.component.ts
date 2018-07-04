import { Component, OnInit } from '@angular/core';

import { ImageModel } from '../model/image-model';
import { ImageModelService} from '../model/image-model.service';

import { ObserverService} from '../common/observer.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  images: ImageModel[];
  showIndex = 0;
  isStart = true;
  isEnd = false;

  constructor(private imageModelService: ImageModelService) { }

  ngOnInit() {
    this.imageModelService.fetch().subscribe(
      () => {
        this.images = this.imageModelService.images;
        this.setIsBound();
      }
    );
  }

  left() {
    if (!this.isStart) {
      this.showIndex--;
    }
    this.setIsBound();
  }

  right() {
    if (!this.isEnd) {
      this.showIndex++;
    }
    this.setIsBound();
  }

  private setIsBound() {
    this.isStart = (this.showIndex === 0);
    this.isEnd = (this.showIndex === (this.images.length - 1));
  }
}
