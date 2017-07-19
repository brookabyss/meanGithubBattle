import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { HttpService } from '../http.service'
import { Player } from '../player'

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players=[]

  constructor(private _httpService: HttpService) {
    this._httpService.getPlayers()
    .then(players=> this.players=players)
    .catch(err=> console.log(err))
   }

  ngOnInit() {
  }

}
