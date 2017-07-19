import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { HttpService } from '../http.service'
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  subscription: Subscription
  winner: number;
  player1: any;
  player2: any;
  winning_player: any;
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) {
     this._route.params.subscribe((param)=>{
      this.winner=Number(param.winner)
    })
    this._httpService.observedPlayers.subscribe(
        players=> {
          console.log("Subscribed users from registration",players);
          this.player1=players[0]
          this.player2=players[1]
        },
        (err)=> console.log(err),
        ()=>{}
      )
      this._httpService.createPlayer(this.player1)
      this._httpService.createPlayer(this.player2)
   }

  ngOnInit() {
  }
 

}
