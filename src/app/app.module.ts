import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ArticledetailsComponent } from "./articledetails/articledetails.component";
import { ArticleserviceService } from "./articles.service";
import { AppRoutingModule } from "./app-routing.module";
import { MyhomepageComponent } from "./myhomepage/myhomepage.component";
import { ViewfullarticleComponent } from "./viewfullarticle/viewfullarticle.component";
const firebaseConfig = {};
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ArticledetailsComponent,
    MyhomepageComponent,
    ViewfullarticleComponent
  ],
  bootstrap: [AppComponent],
  providers: [ArticleserviceService]
})
export class AppModule {}
