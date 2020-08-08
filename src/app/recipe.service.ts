import { Recipe } from './common/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = '/api/recipe';
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.url);
  }

  getParticularRecipe() {
    return this.http.get(this.url).toPromise();
  }
}
