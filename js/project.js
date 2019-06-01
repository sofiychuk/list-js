var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
   ];
window.onload = function (){



function showPlaylist(playlist){
var list = document.getElementById('list');


for (var i = 0; i < playlist.length; i++){
var li = document.createElement('li');
li.appendChild(document.createTextNode(playlist[i].author + " - " + playlist[i].song));
list.appendChild(li);
}
}

showPlaylist(playList)

}