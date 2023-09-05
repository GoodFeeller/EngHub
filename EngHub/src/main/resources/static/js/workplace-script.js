const test_static = "../static/images/tests-static.png"
const test_gif = "../static/images/tests.gif"
const settings_static = "../static/images/settings-static.png"
const settings_gif = "../static/images/settings.gif"
const theory_static = "../static/images/theory-static.png"
const theory_gif = "../static/images/theory.gif"
const profile_static = "../static/images/profile-static.png"
const profile_gif = "../static/images/profile.gif"

const test = document.getElementById("tests")
const settings = document.getElementById("setting")
const profile = document.getElementById("profile")
const theory = document.getElementById("theory")
const test_block = document.getElementById("tests-block")
const settings_block = document.getElementById("settings-block")
const profile_block = document.getElementById("profile-block")
const theory_block = document.getElementById("theory-block")

test_block.onmouseenter = function () {
    test.src = test_gif
    test.classList.add("img-buttons-hover")
}
test_block.onmouseleave = function () {
    test.src = test_static
    test.classList.remove("img-buttons-hover")
}
settings_block.onmouseleave = function () {
    settings.src = settings_static
    settings.classList.remove("img-buttons-hover")

}
settings_block.onmouseenter = function () {
    settings.src = settings_gif
    settings.classList.add("img-buttons-hover")

}
profile_block.onmouseleave = function () {
    profile.src = profile_static
    profile.classList.remove("img-buttons-hover")
}
profile_block.onmouseenter = function () {
    profile.src = profile_gif
    profile.classList.add("img-buttons-hover")

}
theory_block.onmouseenter = function () {
    theory.src = theory_gif
    theory.classList.add("img-buttons-hover")

}
theory_block.onmouseleave = function () {
    theory.src = theory_static
    theory.classList.remove("img-buttons-hover")

}