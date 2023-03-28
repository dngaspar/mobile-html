$(document).ready(() => {
    // framed.htm:
    $("#run").click(() => {
        $("#iframe_mobile")[0].setAttribute("src", $("#url_mobile")[0].value)
    })
    $("#url_mobile").keydown((e) => {
        if(e.key == "Enter") $("#iframe_mobile")[0].setAttribute("src", $("#url_mobile")[0].value)
    })
})