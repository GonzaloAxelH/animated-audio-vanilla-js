$(document).ready(() => {
    $('.player__spinner-wrap').click(function () {
        var $this = $(this),
            audio = $this.siblings('audio')[0]
        bpm = $this.siblings('audio').data('bpm')
        pulse = (60 / bpm) * 1000;
        console.log(pulse)

        if (audio.paused == false) {
            audio.pause();
            audio.currentTime = 0;
            $this.removeClass('playing');
            clearInterval(myinterval)
        } else {
            audio.play();
            $this.addClass('playing');
            myinterval = setInterval(function () {
                pulsing();
            }, pulse)
        }
        function pulsing() {
            $this.addClass('pulse');
            setTimeout(function () {
                $this.removeClass('pulse');
            }, pulse - 100)
        }
    })


})