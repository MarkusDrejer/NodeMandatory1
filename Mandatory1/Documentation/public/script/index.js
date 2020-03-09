let imgFiles = [];
    $.get('/imgFiles', (data) => {
        imgFiles = data;
    });

$(document).ready(() => {

    $(".openbtn").click(() => {
        $("#mySidebar").toggleClass("open");
        $("#main").toggleClass("move");
    });

    $(".closebtn").click(() => {
        $("#mySidebar").css("width", "0");
        $("#main").css("margin-left", "0");
        $(event.currentTarget).attr("class", "openbtn");
    });

    $(".openbtn").mouseenter(() => {
        $(event.currentTarget).text("Side-Menu");
    }).mouseout(() => {
        $(event.currentTarget).text("☰");
    });

    //Maybe use for better image injection
    /*$("#testing").mouseenter(() => {
        $(event.currentTarget).append('<img class="hello" src="/img/bodyT1.png">');
        $(event.currentTarget).append('<img class="hello" src="/img/bodyT2.png">');

    }).mouseout(() => {
        $(".hello").remove();

    });*/

    $(".examples").mouseenter(() => {
        let currentTagId = $(event.currentTarget).attr("id");
        let count = 1;

        for(let i = 0; i < imgFiles.length; i += 1) {
            const firstDigit = imgFiles[i].search(/\d/);
            const trackedFileId = imgFiles[i].substr(0, firstDigit);
            const trackedNumber = imgFiles[i].charAt(firstDigit);

            if(trackedFileId === currentTagId) {
                $("#ex" + trackedNumber).css("visibility", "visible");
                $("#ex" + trackedNumber).attr("src", "img/" + imgFiles[i]);
                count += 1;
            }
        }
        for(count; count <= 3; count += 1) {
            $("#ex" + count).css("visibility", "hidden");
            console.log(count);
        }
    });

    $("#npmC").click(() => {
        $("#ex1").attr("src", "img/npmC4.png");
        $("#ex2").attr("src", "img/npmC5.png");
        $("#ex3").attr("src", "img/npmC6.png");
    });
});