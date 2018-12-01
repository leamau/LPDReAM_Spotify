import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailplaylist',
  templateUrl: './detailplaylist.component.html',
  styleUrls: ['./detailplaylist.component.css']
})
export class DetailplaylistComponent implements OnInit {

  private playlist : Object
  private idPlaylist :string

  constructor(private spotService : SpotifyService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.idPlaylist = this.route.snapshot.params["id"]  
    console.log(this.idPlaylist)  
    this.spotService.getPlaylistTracks(this.idPlaylist).subscribe(      
      (res) =>{
      this.playlist = res
      console.log(this.playlist)})
  }

  supprimerTrackPlaylist(position,uri){    
    console.log(uri+" "+position);
    this.spotService.deleteOnePlaylistTrack(this.idPlaylist,position,uri).subscribe((res) =>
    console.log(res)) 
    window.location.reload();
  }

}



