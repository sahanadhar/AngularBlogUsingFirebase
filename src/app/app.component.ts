import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string;
  age: number;

  // addEntry() {
  //   console.log(this.name);
  //   console.log(this.age);
  //   this.afStore.collection("col1").add({ name: this.name, age: this.age });
  //   //this.afStore.collection("col1").valueChanges(data => {});
  // }
}
