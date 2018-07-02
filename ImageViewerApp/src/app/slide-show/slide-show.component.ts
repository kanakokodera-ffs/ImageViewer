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
  images:ImageModel[];
  showIndex:number = 0;
  isStart:boolean = true;
  isEnd:boolean = false;
  tagString:string = '';

  constructor(private imageModelService: ImageModelService, private observerService: ObserverService) { }

  ngOnInit() {
    this.imageModelService.fetch();
    this.images = this.imageModelService.images;
    this.setIsBound();

    this.observerService.addEventLister('addTagEvent', this, (tag) => {
      this.imageModelService.addTag(this.images[this.showIndex], tag)
      .subscribe(
        () => this.observerService.fireEvent('updatedTagEvent')
      );
    });
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
    this.isStart = (this.showIndex == 0);
    this.isEnd = (this.showIndex == (this.images.length - 1));
  }

  getTagString():string {
    this.tagString = '';
    this.images[this.showIndex].tags.forEach(tag => {
      this.tagString += ('[' + tag + ']');
    });
    return this.tagString;
  }
}
