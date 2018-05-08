import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

export interface TwitterMetaConfig {
  cardType: "summary";
  title: string;
  description: string;
}

@Injectable({
  providedIn: "root"
})
export class TwitterService {
  constructor(private meta: Meta) {}

  setTwitterMetadata(config: TwitterMetaConfig) {
    this.meta.updateTag({
      name: "twitter:card",
      content: config.cardType
    });
    this.meta.updateTag({
      name: "twitter:title",
      content: config.title
    });
    this.meta.updateTag({
      name: "twitter:description",
      content: config.description
    });
  }
}
