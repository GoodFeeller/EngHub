const btn_check = document.getElementById('checkpass')
const old_pas = document.getElementById("enter-old-pas")
const newPasswordForm = document.querySelector(".new-pas")
const btn_back = document.getElementById("back")
const btn_profile = document.getElementById("profile")
const del_progress= document.getElementById("delete-progress")
let user;
let checkPas = false;

$.get("http://localhost:8070/getUser", function (data) {
    user = data;
    console.log(user)
})


btn_check.onclick = async function () {
    if(!checkPas){
        if (valid(old_pas.value)) {
            const response = await fetch("/checkOldPass", {
                method: 'POST',
                body: JSON.stringify({username: user, password: old_pas.value}),
                headers: {
                    'Content-Type': "application/json"
                },
                dataType: 'json',
                url: '/checkOldPass',
            });
            await response
            if (!response.ok) {
                btn_check.classList.add("wrong-password")
                btn_check.classList.remove("pas-btn")
                setTimeout(function () {
                    btn_check.classList.remove("wrong-password")
                    btn_check.classList.add("pas-btn")
                }, 1000)

            } else {
                btn_check.classList.add("success-password")
                btn_check.classList.remove("pas-btn")
                setTimeout(function () {
                    btn_check.classList.remove("success-password")
                    btn_check.classList.add("pas-btn")
                    old_pas.setAttribute('disabled','disabled')
                    newPasswordForm.classList.remove('new-pas')
                    newPasswordForm.classList.add("new-pas-open")
                    checkPas = true;
                }, 1000)
            }
        } else {
            btn_check.classList.add("wrong-password")
            btn_check.classList.remove("pas-btn")
            setTimeout(function () {
                btn_check.classList.remove("wrong-password")
                btn_check.classList.add("pas-btn")
            }, 1000)
            return false;
        }
    }
    else await changePas();

}

async function changePas() {
    const pas = document.getElementById("enter-new-pas")
    const repeat = document.getElementById("enter-conf-pas")
    const valPas = valid(pas.value)
    var valRep = true;
    if (pas.value !== repeat.value) valRep = false;
    if (valPas && valRep) {
        const response = await fetch("/changePassword", {
            method: 'POST',
            body: JSON.stringify({username: user, password: pas.value}),
            headers: {
                'Content-Type': "application/json"
            },
            dataType: 'json',
            url: '/changePassword',
        });
        await response
        if(response.ok == false) {
            btn_check.classList.add("wrong-password")
            btn_check.classList.remove("pas-btn")
            setTimeout(function () {
                btn_check.classList.remove("wrong-password")
                btn_check.classList.add("pas-btn")
            }, 1000)
            return false;
        }
        else {
            btn_check.classList.add("success-password")
            btn_check.classList.remove("pas-btn")
            setTimeout(function () {
                btn_check.classList.remove("success-password")
                btn_check.classList.add("pas-btn")
                old_pas.removeAttribute('disabled', 'disabled')
                newPasswordForm.classList.remove('new-pas-open')
                newPasswordForm.classList.add("new-pas")
                checkPas = true;
            }, 1000)
        }
    }
    else {
        btn_check.classList.add("wrong-password")
        btn_check.classList.remove("pas-btn")
        setTimeout(function () {
            btn_check.classList.remove("wrong-password")
            btn_check.classList.add("pas-btn")
        }, 1000)
    }
}

function valid(str) {
    if (str.length < 6) return false;
    if (str.length > 12) return false;
    return !str.match(/[^0-9A-Za-z]/);

}
btn_profile.onclick = function () {
    document.location.href = "profile"
}
btn_back.onclick = function () {
    document.location.href = "/workplace"
}

del_progress.onclick = async function () {
    const response = await fetch("/delProgress", {
        method: 'POST',
        body: JSON.stringify({username: user}),
        headers: {
            'Content-Type': "application/json"
        },
        dataType: 'json',
        url: '/delProgress',
    });
    await response;
    if (response.ok) {
        const del = document.querySelector(".delete")
        const body = document.querySelector(".settings-body")
        const title = document.getElementById("title")
        title.classList.add("title-black")
        title.classList.remove("title")

        del.classList.add("delete-open")
        body.classList.add("settings-body-close")
        setTimeout(function () {
            title.classList.add("title")
            title.classList.remove("title-black")
            del.classList.remove("delete-open")
            body.classList.remove("settings-body-close")
        }, 3000)
    }
    else {
        del_progress.textContent = "Error"
    }
}