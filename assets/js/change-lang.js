const select = document.querySelector('select');
const allLang = ["en", "ru"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }

    select.value = hash

    document.querySelector(".lng-creator").innerHTML = langArr["creator"][hash];
    document.querySelector(".lng-notification   ").innerHTML = langArr["notification"][hash];
    document.querySelector(".lng-intro").innerHTML = langArr["intro"][hash];
    document.querySelector(".lng-main").innerHTML = langArr["main"][hash];
    document.querySelector(".lng-works").innerHTML = langArr["works"][hash];
    document.querySelector(".lng-team").innerHTML = langArr["team"][hash];
    document.querySelector(".lng-contact").innerHTML = langArr["contact"][hash];
    document.querySelector(".lng-look").innerHTML = langArr["look"][hash];
    document.querySelector(".lng-name-1").innerHTML = langArr["name-1"][hash];
    document.querySelector(".lng-ourworks").innerHTML = langArr["ourworks"][hash];
    document.querySelector(".tbd1").innerHTML = langArr["tbd"][hash];
    // document.querySelector(".tbd2").innerHTML = langArr["tbd"][hash];
    document.querySelector(".tbd3").innerHTML = langArr["tbd"][hash];
    document.querySelector(".lng-about-1").innerHTML = langArr["about-1"][hash];
    // document.querySelector(".lng-name-2").innerHTML = langArr["name-2"][hash];
    // document.querySelector(".lng-name-3").innerHTML = langArr["name-3"][hash];
    // document.querySelector(".lng-about-2").innerHTML = langArr["about-2"][hash];
    // document.querySelector(".lng-about-3").innerHTML = langArr["about-3"][hash];
    document.querySelector(".lng-banner").innerHTML = langArr["banner"][hash];
    document.querySelector(".lng-part").innerHTML = langArr["part"][hash];
    document.querySelector(".lng-location").innerHTML = langArr["location"][hash];
    document.querySelector(".lng-contactus").innerHTML = langArr["contactus"][hash];
    document.querySelector(".lng-sarasoon").innerHTML = langArr["sarasoon"][hash];
    document.querySelector(".lng-main-out").innerHTML = langArr["main"][hash];
    document.querySelector(".lng-works-out").innerHTML = langArr["works"][hash];
    document.querySelector(".lng-team-out").innerHTML = langArr["team"][hash];
    document.querySelector(".lng-contact-out").innerHTML = langArr["contact"][hash];
    document.querySelector(".lng-saraabout").innerHTML = langArr["saraabout"][hash];
    document.querySelector(".lng-about-works-2").innerHTML = langArr["about-works-2"][hash];
}

changeLanguage()