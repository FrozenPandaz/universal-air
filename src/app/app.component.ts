import { Component } from "@angular/core";
import { TwitterService } from "./seo/twitter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ng air";

  constructor(private twitterService: TwitterService) {}

  ngOnInit() {
    this.twitterService.setTwitterMetadata({
      cardType: "summary",
      title: "Universal Air",
      description: "An app developed on the air, in the universe"
    });
  }
}
