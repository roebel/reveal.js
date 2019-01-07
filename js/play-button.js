/*
 * simple audio player using play button and graphic feedback for play activity
 */

var audio_player = new Audio();

var audio_player_src = audio_player.currentSrc;
audio_player.loop = false;
last_audio_button = false;

function reset_button() {       
    if (last_audio_button != false) {
        last_audio_button.style.background = 'lightgray';
        last_audio_button.style.filter = 'opacity(1)';
    }
}

function play_audio(tt, el) {
    //console.log(audio_player_src);
    //console.log("this");
    //console.log(this);
    //console.log("el");
    //console.log(el);
    //console.log("el.object");
    //console.log(el.object);
    //console.log("el.style");
    //console.log(el.style);
    if(audio_player_src != tt) {
        //console.log("load and play");
        audio_player.pause();
        audio_player_src = tt;
        reset_button();
        audio_player.setAttribute('src', audio_player_src);
        audio_player.load();
        el.style.background = 'red';
        el.style.filter = 'opacity(0.75)';
        last_audio_button   = el;
        audio_player.addEventListener('ended', function () {
            reset_button();
        });
        audio_player.play();       
    }
    else {
        if(!audio_player.paused) {
            //  console.log("pause");
            el.style.background = 'lightgray';
            el.style.filter = 'opacity(1)';
            audio_player.pause();
        }
        else{
            //console.log("restart")
            audio_player.currentTime = 0;
            last_audio_button   = el;
            el.style.background = 'red';
            el.style.filter = 'opacity(0.75)';
            audio_player.addEventListener('ended', function () {
                reset_button();
            });
            audio_player.play();
        }       
    }
}
    
