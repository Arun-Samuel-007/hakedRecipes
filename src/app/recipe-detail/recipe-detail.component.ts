import { Recipe } from './../common/models';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  id;
  recipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = param.id;
      console.log(this.id);
      this.recipeService.getParticularRecipe().then((recipes: Recipe[]) => {
        console.log(recipes);
        this.recipe = recipes[param.id];
      });
    });
  }

}
