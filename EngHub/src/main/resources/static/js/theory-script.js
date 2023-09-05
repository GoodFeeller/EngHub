href = document.location.href.split('=')[1]
content = document.getElementById('data-content')
console.log(href)
$.get("http://localhost:8070/getTheme?theme="+href, function (data) {
    createTheory(data);
})

function createTheory(data) {
    const title = document.createElement('div')
    const text = document.createElement('div')
    const next = document.createElement('a')
    const prev = document.createElement('a')
    text.innerHTML = data.data
    text.className = 'theme-text'
    title.textContent = data.title
    title.className = 'theme-title'
    next.className = prev.className = 'next-prev-a'
    next.id = "theme-next"
    prev.id = "theme-prev"

    content.append(title, text)
    if(data.next != "null") {
        next.textContent = "Next theme ->"
        next.href = '/theory?theme=' + data.next
        content.append(next)
    }
    if(data.prev != 'null') {
        prev.href = '/theory?theme=' + data.prev
        prev.textContent = "<- Back"
        content.append(prev)
    }
}
