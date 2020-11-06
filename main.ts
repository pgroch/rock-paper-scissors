input.onButtonPressed(Button.AB, function () {
    music.setVolume(105)
    music.setTempo(100)
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
    	
    }
    for (let index = 0; index < 3; index++) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
    music.playTone(370, music.beat(BeatFraction.Whole))
})
