import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MealComponent} from "./meal/meal.component";
import {MealDetailComponent} from "./meal-detail/meal-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Strona główna'}},
  {path: 'meals', component: MealComponent, data: {title: 'Posiłki'}},
  {path: 'meals/:id', component: MealDetailComponent, data: {title: 'Informajce o posiłku'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
