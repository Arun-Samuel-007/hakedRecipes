import { Recipe } from './common/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'http://starlord.hackerearth.com/recipe';
  constructor(private http: HttpClient) { }

  getRecipes() {
    return fetch('http://starlord.hackerearth.com/recipe', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Security-Policy': 'upgrade-insecure-requests'
        // https: 'unsafe-inline'
        // 'unsafe-eval'
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  }

  getParticularRecipe() {
    return fetch('http://starlord.hackerearth.com/recipe');
  }
}
