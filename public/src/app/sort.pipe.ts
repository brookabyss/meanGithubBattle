import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(players: any, args?: any): any {
     if (players.length==0){
      console.log('empty')
      return players
    }
    console.log("Try me")
    return players.sort(function(a,b){
      console.log(a.createdAt)
      return a.score -b.score
    })
  }

}
