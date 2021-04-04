import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { AddnewarticleComponent } from "./addnewarticle/addnewarticle.component";
import { ArticledetailsComponent } from "./articledetails/articledetails.component";
import { MyhomepageComponent } from "./myhomepage/myhomepage.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MyhomepageComponent
  },
  {
    path: "articles/:id",
    component: ArticledetailsComponent
  },
  {
    path: "newarticle",
    component: AddnewarticleComponent
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
