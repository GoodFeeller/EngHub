

async function register() {
    const user = document.getElementById("username")
    const pas = document.getElementById("password")
    const repeat = document.getElementById("repeat")
    var error = "/registration?"
    const valUser = valid(user.value)
    const valPas = valid(pas.value)
    var valRep = true;
    if (pas.value !== repeat.value) valRep = false;
    if (valUser && valPas && valRep) {
        const response = await fetch("/registration", {
            method: 'POST',
            body: JSON.stringify({username: user.value, password: pas.value}),
            headers: {
                'Content-Type': "application/json"
            },
            dataType: 'json',
            url: '/registration',
        });
        await response
        if(response.ok == false) {
            error += "exist";
            document.location.href = error;
        }
        else document.location.href = "/login"
    }
    else {
        if (!valUser) error += "errUser&"
        if (!valPas) error += "errPas&"
        if (!valRep) error += "errRep&"
        document.location.href = error
    }
}

function valid(str) {
    if (str.length < 6) return false;
    if (str.length > 12) return false;
    if (str.match(/[^0-9A-Za-z]/)) return false;
    return true;
}