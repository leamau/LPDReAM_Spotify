import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class SpotifyService {

  userid="oofpwxxvd22medj801u16vj2e"


  private spotifyUrlSearchAlbum = "https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=";
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlListPlaylist="https://api.spotify.com/v1/users/";
  private spotifyUrlPlaylist="https://api.spotify.com/v1/playlists/";
  private spotifyUrlCreatePlaylist = "https://api.spotify.com/v1/users/";
  private spotifyURLAddTrack = "https://api.spotify.com/v1/playlists/";
  private token = "BQCFcHC1gEO_oJ6N5nE42J0sitjBFs8o8S6_UBylOeB3gtWNqTDlkPzK-3F0js0HPZaFmMmQLABUaM7_DOHPsxscLDzYPJMWojCeiM-icIp98C5iRDvSBiGL6I_sltyasaipDggGYIcs6_w_yCLokEHjSPxQrYXUFaVtDetKWsNvekDA78OkbfRKl-n3BeYf3ywP6CiB8wj-yRYweJ4OKENth2MgcTsKdaQ-BJqDS5LeBSKejiTH3mhvUUhIOJvDizdHlBwDxTJt6Y_WxkOsPJkwK1PXiPWDjQGeQAw";
  private headers : HttpHeaders
   

  constructor(private http:HttpClient) { 
   this.headers  = new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization' : 'Bearer '+ this.token})
  }

  getAlbums(mot:string) {
    return this.http.get(this.spotifyUrlSearchAlbum+mot, { headers : this.headers})
   }

   getChanteurs(mot:string) {
    return this.http.get(this.spotifyUrlSearchChanteur+mot, { headers : this.headers})
   }

   getAlbum(id:string) {
    return this.http.get(this.spotifyUrlAlbum+id, { headers : this.headers})
   }

   getPlaylists() {
    return this.http.get(this.spotifyUrlListPlaylist + this.userid + "/playlists", { headers : this.headers} )
   }

   getPlaylistTracks(idplaylist:string) {
    //console.log(this.spotifyUrlPlaylist+idplaylist + "/tracks", { headers : this.headers})
    return this.http.get(this.spotifyUrlPlaylist + idplaylist + "/tracks", { headers : this.headers} )
   }

   deleteOnePlaylistTrack(idplaylist:string,position : number,uri : string){
    //return this.http.delete(this.spotifyUrlPlaylist + idplaylist + "/tracks", { headers : this.headers})
    //{\"tracks\":[{\"uri\": uri,\"positions\": [position]}]}
    console.log(uri+" "+idplaylist+" "+position);
    return this.http.request(
      "delete",
      this.spotifyUrlPlaylist+idplaylist+'/tracks', { 
      "body" : 
      { "tracks" : 
        [{
          uri: uri , 
          positions: [position] 
        }]
      },
      "headers" : this.headers })
  }

  CreatePlaylist(playlist){
    this.http.post(this.spotifyUrlCreatePlaylist + this.userid + "/playlists",playlist,{ headers : this.headers})
      .subscribe(resultat=>{
        if(resultat!=null){
          window.location!.reload()
        }else{
          console.log(resultat)
        }
      })
  }

  AddTrack(playlistId, Track){ 
    console.log(Track)
    this.http.post(this.spotifyURLAddTrack+playlistId+"/tracks",Track,{ headers : this.headers})
      .subscribe(resultat=>{
        if(resultat!=null){
          window.location!.reload()
        }else{
          console.log(resultat)
        }
      })
  }
   
}
