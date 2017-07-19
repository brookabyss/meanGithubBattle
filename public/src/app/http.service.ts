import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router'
@Injectable()
export class HttpService {
  observedPlayers= new BehaviorSubject(null)
  constructor(private _http: Http, private _router: Router) { }
  
  updatePlayers(player1,player2){
    this.observedPlayers.next([player1,player2])
  }



  getUser(username){
    let github_path="https://api.github.com/users/"+username
    return this._http.get(github_path).map(data=>data.json()).toPromise()
  }
  combat_users(player1,player2){
    if (player1.score> player2.score){
        this._router.navigate(['/results',1])
    }
    else if(player1.score< player2.score){
         this._router.navigate(['/results',2])
    }
    else{
       this._router.navigate(['/results',0])
    }
  }
}
