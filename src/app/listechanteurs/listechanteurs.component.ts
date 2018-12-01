import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  private artistes : any[]

  constructor(private spotService : SpotifyService) { }

  ngOnInit() {
  }

  chercherChanteur(motCle : string){
    this.spotService.getChanteurs(motCle).subscribe((resultat) =>{
    this.artistes=resultat["artists"].items;
    console.log(this.artistes)
    });
  }
}
