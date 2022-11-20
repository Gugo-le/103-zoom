function zojong() //조종례: Zoom만 시행하는 과목
{
    swal("조, 종례: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zoom.us/j/3585993000?pwd=SmVielBWUW9DNkVnekVmNERPYjBVZz09";
                    break;
                default:

            }
        });
}

function ca() //창체: Zoom만 시행하는 과목
{
    swal("창체: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zoom.us/j/3585993000?pwd=SmVielBWUW9DNkVnekVmNERPYjBVZz09";
                    break;
                default:

            }
        });
}

function social() //통합사회: Zoom만 시행하는 과목
{
    swal("통합사회: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us04web.zoom.us/j/6315897692?pwd=UXo2eGdOaFYwQnNmYjhmMXVsTFJ6QT09";
                    break;
                default:

            }
        });

}

function history() //한국사: Zoom만 시행하는 과목
{
    swal("한국사: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us05web.zoom.us/j/83786134913?pwd=MDg0cEljS25PK3QzR29kcjE3N2JrZz09";
                    break;
                default:

            }
        });
}

function math() //수학: Zoom만 시행하는 과목
{
    swal("수학: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us02web.zoom.us/j/9076717845?pwd=QVZkUmhTYWZaaGZrcEI3em5KVUtHZz09";
                    break;
                default:

            }
        });
}

function music() //음악: Zoom만 시행하는 과목
{
    swal("음악: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us02web.zoom.us/j/9222655961?pwd=RFhjVFl1T3FVVmN0aEhWOWs1MThVZz09";
                    break;
                default:

            }
        });
}


function science() //통과: Zoom만 시행하는 과목
{
    swal("통합과학: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us04web.zoom.us/j/4313387961?pwd=d1pOQ3krOFJVWTc1dk1ER1p4blpYUT09";
                    break;
                default:

            }
        });
}


function tamsil() //과탐: Zoom만 시행하는 과목
{
    swal("과학 탐구 실험: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zoom.us/j/2987563875?pwd=NnlpTHVkZG1RT0wvSzdRWU1ERzAzUT09";
                    break;
                default:

            }
        });
}

function koreanpark() //국어 박병두: Zoom만 시행하는 과목
{
    swal("국어(박병두): Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us02web.zoom.us/j/7297277073?pwd=dFBlUU5CWG1Bb0dZeEEwZzZkUm8zdz09";
                    break;
                default:

            }
        });
}

function koreanahn() //국어 안지영: Zoom만 시행하는 과목
{
    swal("국어(안지영): Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zoom.us/j/96401872426?pwd=bG5vaGc1a0s5eVVURDNrREJYcEFoUT09";
                    break;
                default:

            }
        });
}

function koreanjang() //국어 장기형: Zoom만 시행하는 과목
{
    swal("국어(장기형): Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zoom.us/j/9782997894?pwd=Z3BDUXNiS1pOeVRFZHVCOHA1KzlKZz09";
                    break;
                default:

            }
        });
}

function copyToClipboard() {
    var copyText = document.getElementById("pw").value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
}

function tech() //기술: Zoom만 시행하는 과목
{
    swal("기술: Zep으로 이동할까요?", "", "success", {
            buttons: {
                pw: "PW: 1234",
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zep.us/play/8MqMMZ";
                    break;
                default:
                    switch (value) {
                        case "pw":

                    }
            }
        });
}


function home() //가정: Zoom만 시행하는 과목
{
    swal("가정: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us02web.zoom.us/j/9407240816?pwd=MHMvMGFFY20wMDFORHN1T0NyLzhnUT09";
                    break;
                default:

            }
        });
}


function english() //영어: Zoom만 시행하는 과목
{
    swal("영어: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://zoom.us/j/3585993000?pwd=SmVielBWUW9DNkVnekVmNERPYjBVZz09";
                    break;
                default:

            }
        });
}

function zinro() //진로: Zoom만 시행하는 과목
{
    swal("진로: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us02web.zoom.us/j/9061893383?pwd=aVo0MlRncXprSkdTNG5KeUtVUmdLQT09";
                    break;
                default:

            }
        });
}

function pe() //체육: Zoom만 시행하는 과목
{
    swal("체육: Zoom으로 이동할까요?", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://us05web.zoom.us/j/5729925096?pwd=YnF4MTJyTm5HcGZzTnpSa1lqbHMvQT09";
                    break;
                default:

            }
        });
}

function done() // 특별 기능: 건우 후원
{
    swal("아직 기능이 오픈되지 않았어요.", "", "success", {
            buttons: {
                cancel: "취소",
                OK: true,
            }
        })
        .then((value) => {
            switch (value) {

                case "OK":
                    location.href = "https://103-zoom.netlify.app/";
                    break;
                default:

            }
        });
}