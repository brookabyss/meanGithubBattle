import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Player } from "../player"
import { Router } from '@angular/router'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  player1=new Player
  player2=new Player
  github_error:boolean= false
  battle: boolean=false;
  constructor(private _httpService: HttpService,private _router: Router) { 
    this._httpService.updatePlayers(this.player1,this.player2)
  }

  ngOnInit() {
  }
  onSubmit(player){
    let github_user: any;
    return this._httpService.getUser(player.username)
    .then(user=>  {
      player.score=(user.followers+user.public_repos);
      player.avatar=user.avatar_url
      console.log(player.score)
      this._httpService.updatePlayers(this.player1,this.player2)
      this.ready_to_battle()
    })
    .catch(err=> {this.github_error=true;
    console.log(this.github_error)})
  
  }
  ready_to_battle(): void{
    console.log("scores",this.player1.score,this.player2.score)
    if (this.player1.score&&this.player2.score){
      this.battle=true
    }
  }
  combat(): void{
    
    console.log("boogie")
    this._httpService.combat_users(this.player1,this.player2)
  }

}
