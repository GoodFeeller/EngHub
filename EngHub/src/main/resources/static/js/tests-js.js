href = document.location.href.split('=')[1]
content = document.getElementById('data-content')
let user;
$.get("http://localhost:8070/getUser", function (data) {
    user = data;
    console.log(user)
})
$.get("http://localhost:8070/getTest?number="+href, function (data) {
    createTest(data);
})

let count;
let titleRes;

function createTest(data) {
    const title = document.createElement('div')
    const json = JSON.parse(data.data)
    content.append(title)
    count = data.count
    content.style = "margin-bottom: 5%;"
    title.textContent = data.title
    titleRes = data.title
    for (let i in json) getTest(i, json)
    title.className = 'theme-title'
    const accept = document.createElement('button')
    accept.className = "accept-btn"
    accept.textContent = "Continue"
    accept.onclick = acceptFunction;
    content.append(accept)
}

function getTest(count, json) {
    const questions = document.createElement('div')
    const text = document.createElement('div')
    text.className = 'test-text'
    text.innerHTML = json[count].question
    for (let i in json[count]) {
        if (i == "question") continue;
        const questionHolder = document.createElement('div')
        const answer = document.createElement('span')
        const btn = document.createElement('input')
        btn.className = "answer-btn"
        if (i == "true_answer") btn.value = "true"
        else btn.value = "false"
        answer.textContent = json[count][i]
        btn.type = "radio";
        btn.name = count
        questionHolder.append(btn,answer)
        questions.append(questionHolder)
        content.append(text, questions)
    }
}

async function acceptFunction() {
    const radioList = document.querySelectorAll('input')
    let trueAnswers = 0;
    for (let btn in radioList) {
        if (radioList[btn].value === "true" && radioList[btn].checked == true) {
            trueAnswers++;
        }
    }
    const percent = Math.round(trueAnswers / count * 100)
    const response = await fetch("/writeProgress", {
        method: 'POST',
        body: JSON.stringify({username: user, result: percent, test: href}),
        headers: {
            'Content-Type': "application/json"
        },
        dataType: 'json',
        url: '/writeProgress',
    });
    await response
    if (response.ok == true) {
        const result = document.createElement('div')
        result.className = "theme-title"
        result.textContent = titleRes
        const percentRes = document.createElement('div')
        percentRes.textContent = "Your result: " + percent + "%";
        percentRes.className = "test-text"
        content.innerHTML = ""
        content.append(result, percentRes)
    }
}