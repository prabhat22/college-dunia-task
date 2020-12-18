import { HttpClient } from "@angular/common/http";
import { Component, HostListener } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public colleges: any = [];
  public collegesArr: any = [];
  public collegeCounter = 0;

  constructor(private http: HttpClient) {
    this.http.get("assets/data.json").subscribe(data => {
      this.colleges = data;
      for (let i = 0; i < 10; i++) {
        this.collegesArr[this.collegeCounter] = this.colleges[i];
        this.collegeCounter++;
      }
    });
  }
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    let windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    let body = document.body,
      html = document.documentElement;
    let docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    let windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      if (this.collegeCounter < this.colleges.length) {
        let counter = this.collegeCounter;
        for (let i = this.collegeCounter; i < counter + 10; i++) {
          this.collegesArr[this.collegeCounter] = this.colleges[i];
          this.collegeCounter++;
        }
      }
    }
  }
}
