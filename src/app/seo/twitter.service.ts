import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface TwitterMetadata {
  cardType: 'summary' | 'video';
  title: string;
  description: string;
  site: string;
}

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private meta: Meta) { }

  setTwitterMeta(metadata: TwitterMetadata) {
    this.meta.updateTag({
      name: 'twitter:description',
      content: metadata.description
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: metadata.title
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: metadata.cardType
    });
    this.meta.updateTag({
      name: 'twitter:site',
      content: metadata.site
    });
  }
}
