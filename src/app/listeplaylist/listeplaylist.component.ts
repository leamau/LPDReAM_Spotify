import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-listeplaylist',
  templateUrl: './listeplaylist.component.html',
  styleUrls: ['./listeplaylist.component.css']
})
export class ListeplaylistComponent implements OnInit {

  private playlists : Object[];

  constructor(private spotService : SpotifyService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.chercherPlaylists()
  }

  chercherPlaylists(){
    this.spotService.getPlaylists().subscribe((resultat) =>{
    this.playlists=resultat["items"]
    console.log(resultat)
    });
  }

  CreatePlaylist(nomPlaylist : string,description : string, visibilite : string){
    console.log(nomPlaylist,description,publique);
    var publique = false
    if(visibilite == "public"){
      publique = true
    }

    var playlist={
      "name": nomPlaylist,
      "description" : description,
      "public" : publique
    }

    this.spotService.CreatePlaylist(playlist)
  }


}
