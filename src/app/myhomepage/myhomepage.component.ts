import { Component, Input, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { distinctUntilChanged } from "rxjs/operators";
import { Router } from "@angular/router";
@Component({
  selector: "app-myhomepage",
  templateUrl: "./myhomepage.component.html",
  styleUrls: ["./myhomepage.component.css"]
})
export class MyhomepageComponent implements OnInit {
  displayArray = [];
  constructor(private afStore: AngularFirestore, private router: Router) {
    this.afStore
      .collection("Articles")
      .valueChanges({ idField: "propertyId" })
      .pipe(
        distinctUntilChanged((a, b) => {
          return a.length === b.length;
        })
      )
      .subscribe(data => {
        this.displayArray = data;
        console.log(data);
      });
  }
  ngOnInit() {}
  viewFullArticle(article) {
    console.log(article);
    this.router.navigate(["/", "articles", article.propertyId]);
  }
  SerchAny() {
    console.log(this.search);
    console.log(this.article);
  }
}
