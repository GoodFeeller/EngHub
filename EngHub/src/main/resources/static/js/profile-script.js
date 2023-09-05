const toSettings = document.getElementById("toSettings")
toSettings.onclick = function () { document.location.href = "/settings"}
const toLogout = document.getElementById("logout")
toLogout.onclick = function () { document.location.href = "/logout"}

let name_label;
let surname_label;
const username_label = document.getElementById("profile-username")

let user;
let name_val;
let surname_val;

$.get("http://localhost:8070/getResultInfo", function (data) {
    createResult(data);
})

function createResult(data) {
    user = data.username;
    name_val = data.name;
    surname_val = data.surname;

    name_label = document.getElementById("profile-name")
    surname_label = document.getElementById("profile-surname")
    name_label.textContent = name_val;
    surname_label.textContent = surname_val
    username_label.textContent = user
    const img = document.querySelector(".profile-image")
    if (data.url == null || data.url == "") img.src = "../static/images/nophoto.jpg";
    else try {
        img.src = data.url
    } catch(e) {img.src = "../static/images/nophoto.jpg";}
    const result = JSON.parse(data.tests)
    const article_result = document.getElementById("article-result")
    const article_line = document.getElementById("article-line")
    const article_res_line = document.getElementById("article-res-line")

    const pronoun_result = document.getElementById("pronoun-result")
    const pronoun_line = document.getElementById("pronoun-line")
    const pronoun_res_line = document.getElementById("pronoun-res-line")

    const adjective_result = document.getElementById("adjective-result")
    const adjective_line = document.getElementById("adjective-line")
    const adjective_res_line = document.getElementById("adjective-res-line")

    const tobe_result = document.getElementById("tobe-result")
    const tobe_line = document.getElementById("tobe-line")
    const tobe_res_line = document.getElementById("tobe-res-line")

    const modal_line = document.getElementById("modal-line")
    const modal_result = document.getElementById("modal-result")
    const modal_res_line = document.getElementById("modal-res-line")

    if (result.article != null) {
        article_result.textContent = result.article + '%'
        if (result.article == 100) {
            article_res_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            article_line.style = "width: 0;"
        } else
        if (result.article == 0) {
            article_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            article_res_line.style = "width: 0; border-radius: 0;"
        } else {
            let res_line = 0.12 * result.article
            let line = 12 - res_line
            article_line.style = "width: calc(var(--index) * " +  line  +");"
            article_res_line.style = "width: calc(var(--index) * " + res_line + ");"

        }
        if (result.article <= 25) {
            article_result.style = "color: red;"
        } else if (result.article <= 75) {
            article_result.style = "color: orange;"
        } else {
            article_result.style = "color: green;"
        }
    } else {
        article_result.textContent = "0%"
        article_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
        article_res_line.style = "width: 0;"
        article_result.style = "color: red;"
    }
    if (result.pronoun != null) {
        pronoun_result.textContent = result.pronoun + '%'
        if (result.pronoun == 100) {
            pronoun_res_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            pronoun_line.style = "width: 0;"
        } else
        if (result.pronoun == 0) {
            pronoun_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            pronoun_res_line.style = "width: 0; border-radius: 0;"
        }else {
            let res_line = 0.12 * result.pronoun
            let line = 12 - res_line
            pronoun_line.style = "width: calc(var(--index) * " +  line  +");"
            pronoun_res_line.style = "width: calc(var(--index) * " + res_line + ");"

        }
        if (result.pronoun <= 25) {
            pronoun_result.style = "color: red;"
        } else if (result.pronoun <= 75) {
            pronoun_result.style = "color: orange;"
        } else {
            pronoun_result.style = "color: green;"
        }
    } else {
        pronoun_result.textContent = "0%"
        pronoun_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
        pronoun_res_line.style = "width: 0;"
        pronoun_result.style = "color: red;"
    }
    if (result.adjective != null) {
        adjective_result.textContent = result.adjective + '%'
        if (result.adjective == 100) {
            adjective_res_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            adjective_line.style = "width: 0;"
        } else
        if (result.adjective == 0) {
            adjective_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            adjective_res_line.style = "width: 0; border-radius: 0;"
        }else {
            let res_line = 0.12 * result.adjective
            let line = 12 - res_line
            adjective_line.style = "width: calc(var(--index) * " +  line  +");"
            adjective_res_line.style = "width: calc(var(--index) * " + res_line + ");"

        }
        if (result.adjective <= 25) {
            adjective_result.style = "color: red;"
        } else if (result.adjective <= 75) {
            adjective_result.style = "color: orange;"
        } else {
            adjective_result.style = "color: green;"
        }
    } else {
        adjective_result.textContent = "0%"
        adjective_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
        adjective_res_line.style = "width: 0;"
        adjective_result.style = "color: red;"
    }
    if (result.tobe != null) {
        tobe_result.textContent = result.tobe + '%'
        if (result.tobe == 100) {
            tobe_res_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            tobe_line.style = "width: 0;"
        } else
        if (result.tobe == 0) {
            tobe_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            tobe_res_line.style = "width: 0; border-radius: 0;"
        } else {
            let res_line = 0.12 * result.tobe
            let line = 12 - res_line
            tobe_line.style = "width: calc(var(--index) * " +  line  +");"
            tobe_res_line.style = "width: calc(var(--index) * " + res_line + ");"

        }
        if (result.tobe <= 25) {
            tobe_result.style = "color: red;"
        } else if (result.tobe <= 75) {
            tobe_result.style = "color: orange;"
        } else {
            tobe_result.style = "color: green;"
        }
    } else {
        tobe_result.textContent = "0%"
        tobe_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
        tobe_res_line.style = "width: 0;"
        tobe_result.style = "color: red;"
    }
    if (result.modal != null) {
        modal_result.textContent = result.modal + '%'
        if (result.modal == 100) {
            modal_res_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            modal_line.style = "width: 0;"
        } else
        if (result.modal == 0) {
            modal_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
            modal_res_line.style = "width: 0; border-radius: 0;"
        } else {
            let res_line = 0.12 * result.modal
            let line = 12 - res_line
            modal_line.style = "width: calc(var(--index) * " +  line  +");"
            modal_res_line.style = "width: calc(var(--index) * " + res_line + ");"

        }
        if (result.modal <= 25) {
            modal_result.style = "color: red;"
        } else if (result.modal <= 75) {
            modal_result.style = "color: orange;"
        } else {
            modal_result.style = "color: green;"
        }
    } else {
        modal_result.textContent = "0%"
        modal_line.style = "width: calc(var(--index) * 12); border-radius: calc(var(--index));"
        modal_res_line.style = "width: 0;"
        modal_result.style = "color: red;"
    }
}

const changeProfileBtn = document.querySelector(".change-profile-btn")
changeProfileBtn.onclick = async function () {
    const name_div = document.getElementById("name-div")
    const surname_div = document.getElementById("surname-div")
    const input_url = document.getElementById("input-url-body")
    if (changeProfileBtn.textContent == "Редактировать") {
        changeProfileBtn.textContent = "Сохранить"
        name_div.style = "opacity: 0;"
        surname_div.style = "opacity: 0;"
        setTimeout(function () {
            name_div.innerHTML = '<div  class="div-input" > <input id="name-input" type="text" placeholder="Enter name"/></div>'
            surname_div.innerHTML = '<div  class="div-input" > <input id="surname-input" type="text" placeholder="Enter surname"/></div>'
            input_url.style = "height: calc(var(--index) * 2);"
            setTimeout(function () {
                input_url.innerHTML = '<div id="url-div" class="div-input" > <input id="url-input" type="text" placeholder="Enter photo url"/></div>'
                input_url.style = "opacity: 1;"
                name_div.style = "opacity: 1;"
                surname_div.style = "opacity: 1;"
            }, 500)
        }, 500)
    } else {
        changeProfileBtn.textContent = "Редактировать"
        name_val = document.getElementById("name-input").value
        surname_val = document.getElementById("surname-input").value
        const url_val = document.getElementById("url-input").value
        const response = await fetch("/writeProfileData", {
            method: 'POST',
            body: JSON.stringify({username: user, name: name_val, surname: surname_val, url: url_val}),
            headers: {
                'Content-Type': "application/json"
            },
            dataType: 'json',
            url: '/writeProfileData',
        });
        await response
        if (response.ok == true) {
            name_div.style = "opacity: 0;"
            surname_div.style = "opacity: 0;"
            input_url.style = "opacity: 0;"
            setTimeout(function () {
                name_div.innerHTML = 'Имя: <span id="profile-name" >' + name_val + '</span> '
                surname_div.innerHTML = 'Фамилия: <span id="profile-surname">' + surname_val + '</span>'
                const img = document.querySelector(".profile-image")
                if (url_val == null || url_val == "") img.src = "../static/images/nophoto.jpg";
                else try {
                    img.src = url_val
                } catch(e) {img.src = "../static/images/nophoto.jpg";}
                input_url.style = "height: 0;"
                setTimeout(function () {
                    input_url.innerHTML = '<div id="url-div" class="div-input" > <input id="url-input" type="text" placeholder="Enter photo url"/></div>'
                    $.get("http://localhost:8070/getResultInfo", function (data) {
                        createResult(data);
                    })
                    name_div.style = "opacity: 1;"
                    surname_div.style = "opacity: 1;"

                }, 500)
            }, 500)
        }
    }


}