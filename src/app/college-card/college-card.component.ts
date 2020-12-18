import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-college-card",
  templateUrl: "./college-card.component.html",
  styleUrls: ["./college-card.component.css"]
})
export class CollegeCardComponent implements OnInit {
  @Input() college: any;
  constructor() {}

  ngOnInit() {}
}
