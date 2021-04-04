import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { distinctUntilChanged } from "rxjs/operators";
@Component({
  selector: "app-articledetails",
  templateUrl: "./articledetails.component.html",
  styleUrls: ["./articledetails.component.css"]
})
export class ArticledetailsComponent {
  // header;
  // content = "";
  // upvote;
  // comments = [];
  //@Input article;
  //constructor(private router: Router) {}
  article;
  id;
  data;
  constructor(
    private afStore: AngularFirestore,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.afStore
      .doc(`Articles/${this.id}`)
      .valueChanges()
      .subscribe(article => {
        this.data = article;
        console.log(this.data);
      });
  }
}
