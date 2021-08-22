import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string = 'tomimelo';
  private baseUrl: string = "https://api.github.com";

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${this.username}/repos`);
  }
}
