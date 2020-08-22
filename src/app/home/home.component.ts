import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../common/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipeService.getRecipes().then(res => res.json()).then(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        console.log(recipes);
       }
    ).catch(err => console.log(err));
    // .subscribe((recipes: Recipe[]) => {
      // this.recipes = recipes;
      // console.log(recipes);
    // });
  }
}
