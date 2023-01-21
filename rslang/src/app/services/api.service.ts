import { Injectable, ɵnoSideEffects } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedUser, User, IWord, userWord, Word } from 'src/types';

export const BASE_URL = 'https://learnlangapp1.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${BASE_URL}/users`,
      {
        'name': user.name,
        'email': user.email,
        'password': user.password
      }
    )
  }

  public loginUser(user: User): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      `${BASE_URL}/signin`,
      {
        'email': user.email,
        'password': user.password
      }
    )
  }

  public getWords(group: number, page: number): Observable<IWord[]> {
    return this.http.get<IWord[]>(
      `${BASE_URL}/words`,
      {
        params: {
          'group': group,
          'page': page
        }
      }
    )
  }

  public getWord(wordId: string): Observable<IWord> {
    return this.http.get<IWord>(
      `${BASE_URL}/words/${wordId}`
    )
  }

  public createUserWord(userId: string, wordId: string, word: Word): Observable<object> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    if (word.difficulty === "false") {
    localStorage.setItem('studWords', `${+localStorage.getItem('studWords')!+1}`);
    }
    return this.http.post<object>(
      `${BASE_URL}/users/${userId}/words/${wordId}`,
        word,
      {headers:myHeaders}
    )
  }

  public updateUserWord(userId: string, wordId: string, word: Word): Observable<object> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    if (word.difficulty === "false") {
      localStorage.setItem('studWords', `${+localStorage.getItem('studWords')!+1}`);
      }
    return this.http.put<object>(
      `${BASE_URL}/users/${userId}/words/${wordId}`,
        word,
      {headers:myHeaders}
    )
  }

  public deleteUserWord(userId: string, wordId: string): Observable<object> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    if (+localStorage.getItem('studWords')! >= 1) {
    localStorage.setItem('studWords', `${+localStorage.getItem('studWords')!-1}`);
    }
    return this.http.delete<object>(
      `${BASE_URL}/users/${userId}/words/${wordId}`,
      {headers:myHeaders}
    )
  }

  public getUserWords(userId: string): Observable<userWord[]> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<userWord[]>(
      `${BASE_URL}/users/${userId}/words`,
      {headers:myHeaders}
    )
  }

  public getUserWord(userId: string, wordId: string): Observable<userWord> {
    const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<userWord>(
      `${BASE_URL}/users/${userId}/words/${wordId}`,
      {headers:myHeaders}
    )
  }

}
