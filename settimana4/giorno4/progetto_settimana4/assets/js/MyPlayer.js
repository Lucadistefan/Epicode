$(document).ready(function() {
    liste = {};
    $.ajax({
        url: "assets/json/media.json",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            liste = data;
            $.each(data.audio, function(i, el) {
                var titolo = el.title;
                console.log(titolo);
                $("#ul_audio").append(
                    '<li class="list-group-item" onclick="cambio(' +
                    0 +
                    "," +
                    i +
                    ')">' +
                    titolo +
                    "</li>"
                );
            });
            $.each(data.video, function(i, el) {
                var titolo2 = el.title;
                console.log(titolo2);
                $("#ul_video").append(
                    '<li class="list-group-item" onclick="cambio(' +
                    1 +
                    "," +
                    i +
                    ')">' +
                    titolo2 +
                    "</li>"
                );
            });
        },
    });
});

function cambio(av, index) {
    audio = document.querySelector("audio");
    video = document.querySelector("video");
    if (av == 0) {
        $("#myaudio").attr("src", "assets/audio/" + liste.audio[index].file);
        audio.play();
        video.pause();
    } else {
        $("#myvideo").attr("src", "assets/video/" + liste.video[index].file);
        video.play();
        audio.pause();
    }
}