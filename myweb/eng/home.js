'use strict';
let header = document.getElementById("heder");
let menu = document.getElementById("lang");
let menu2 = document.getElementById("lang2");
function heder() {

    if(document.documentElement.scrollTop > 5) {
        header.style.background = "#171717";
    } else {
        header.style.background = "";
    }
};
setInterval(heder, 0);

function transa() {
    menu = document.getElementById("lang");
    menu2 = document.getElementById("lang2");

    if(document.documentElement.scrollTop > 5) {

        if(!document.getElementById("lang")) {

        } else{
        menu.style.backgroundColor = "rgb(23, 23, 23)";
        }
    } else {

        if(!document.getElementById("lang")) {
            
        } else{
        menu.style.backgroundColor = "";
        }
    }
}
const por = setInterval(transa, 0);

document.getElementById("follow1").onclick = function() {
    window.open("https://discord.gg/YsEY6rWkcZ");
}
document.getElementById("follow2").onclick = function() {
    window.open("https://www.youtube.com/@Superov");
}
document.getElementById("follow3").onclick = function() {
    window.open("https://www.tiktok.com/@mapahce2212");
}
document.getElementById("follow4").onclick = function() {
    window.open("https://www.twitch.tv/mapache2212_games");
}

// Event content

let content = document.getElementById("contenta").offsetTop - 100;
function conta() {
    window.scrollTo({
        top: content,
        left: 0,
        behavior: "smooth"
    });
    window.location.hash = "#content"
}   
document.getElementById("butta1").onclick = conta;
document.getElementById("contas").onclick = conta;
document.getElementById("contas2").onclick = conta;

// Event home

function homi() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}  
document.getElementById("home").onclick = homi;
document.getElementById("home2").onclick = homi;
document.getElementById("homas").onclick = homi;

// Event about

let abu = document.getElementById("about-us").offsetTop - 100;

function abou() {
    window.scrollTo({
        top: abu,
        left: 0,
        behavior: "smooth"
    });
}
document.getElementById("about1").onclick = abou;
document.getElementById("about12").onclick = abou;
// Switchs start


// switch sol-day

let getsol = document.getElementById("sol-day");

function solToNight() {
    getsol.src= "../moon_icon_125979.svg";
    document.querySelector(".pagePrincipal").style.backgroundColor = "rgb(85 85 85)";

    // text switch color

    document.querySelector(".page1 > h1").style.color = "white";
    document.querySelector(".page1 > p").style.color = "white";
    document.querySelector(".page2 > h1").style.color = "white";

    document.getElementById("links1").style.color = "white";
    document.getElementById("links2").style.color = "white";
    document.getElementById("links3").style.color = "white";
    document.getElementById("links4").style.color = "white";
    document.getElementById("links5").style.color = "white";
    document.getElementById("links6").style.color = "white";


    document.querySelector(".page3 > h1").style.color = "white";
    document.querySelector(".about").style.color = "white";

    document.getElementById("white").style.backgroundColor = "rgb(46, 46, 46)";
    document.getElementById("white2").style.backgroundColor = "rgb(46, 46, 46)";

    document.querySelector(".text3").style.color = "white";
    document.querySelector(".followers2").style.color = "white";

    document.getElementById("twita").style.color = "white";
    document.getElementById("folla2").style.color = "white";

    getsol.removeEventListener("click", solToNight);
    getsol.addEventListener("click", nightToSol);

};
function nightToSol() {
    getsol.src= "../soln.png";
    document.querySelector(".pagePrincipal").style.backgroundColor = "";

    // text switch color

    document.querySelector(".page1 > h1").style.color = "";
    document.querySelector(".page1 > p").style.color = "";
    document.querySelector(".page2 > h1").style.color = "";

    document.getElementById("links1").style.color = "";
    document.getElementById("links2").style.color = "";
    document.getElementById("links3").style.color = "";
    document.getElementById("links4").style.color = "";
    document.getElementById("links5").style.color = "";
    document.getElementById("links6").style.color = "";


    document.querySelector(".page3 > h1").style.color = "";
    document.querySelector(".about").style.color = "";

    document.getElementById("white").style.backgroundColor = "";
    document.getElementById("white2").style.backgroundColor = "";

    document.querySelector(".text3").style.color = "";
    document.querySelector(".followers2").style.color = "";

    document.getElementById("twita").style.color = "";
    document.getElementById("folla2").style.color = "";

    getsol.removeEventListener("click", nightToSol);
    getsol.addEventListener("click", solToNight);

};


getsol.addEventListener("click", solToNight);

// Switchs end

// language switch

let butSW = document.getElementById("switch");

function list() {
    menu = document.getElementById("lang");
    menu2 = document.getElementById("lang2");

     menu2.className = "languages";
     menu2.id = "lang";

     butSW.removeEventListener("click", list);
     butSW.addEventListener("click", list2);
}
function list2() {
    menu = document.getElementById("lang");
    menu2 = document.getElementById("lang2");

    menu.className = "hidenn";
    menu.id = "lang2";

    butSW.removeEventListener("click", list2);
    butSW.addEventListener("click", list);
}
butSW.addEventListener("click", list);

// Line active

let loc = window.location.hash;

let buca = document.getElementById("line");

function ifs() {
     loc = window.location.hash;
    if(loc == "#home") {
        buca.className = "lhome";
    }
    if(loc == "#content") {
        buca.className = "lcontent";
    }
    if(loc == "#about") {
        buca.className = "labout";
    }
    if(loc != "#home") {
        if(loc != "#content") {
            if(loc != "#about") {
                buca.className = "hider"
            }
        }
    }
};
setInterval(ifs, 0);

let gomake = document.getElementById("heder");
let objecta = document.createElement("div");
objecta.id = "burger";
objecta.className = "hides";

let lines = document.createElement("div");
lines.id = "lined1";
lines.className = "linera";

let lines2 = document.createElement("div");
lines2.id = "lined2";
lines2.className = "linera2";

let lines3 = document.createElement("div");
lines3.id = "lined3";
lines3.className = "linera3";

if(document.documentElement.clientWidth < 753) {
    document.getElementById("one").remove();
    document.getElementById("second").remove();
    document.getElementById("third").remove();
    document.getElementById("line").remove();
    gomake.append(objecta);

    let op = document.getElementById("burger");

        op.append(lines);
        op.append(lines2);
        op.append(lines3);



        let bucas = document.getElementById("heder");

        let cre = document.createElement("div");
        cre.id = "menus";
        cre.className = "showMenu";

        function clicki() {
            bucas.append(cre);

            cre.innerHTML = `
            <a href="#home" id="home" class="link">HOME</a>
            <a href="#content" id="contas" class="link">CONTENT</a>
            <a href="#about" id="about1" class="link">ABOUT</a>`;


            document.getElementById("home").onclick = homi;
            document.getElementById("contas").onclick = conta;
            document.getElementById("about1").onclick = abou;

            document.getElementById("lined1").onclick = clicki2;
            document.getElementById("lined2").onclick = clicki2;
            document.getElementById("lined3").onclick = clicki2;
        };

        function clicki2() {
            cre.innerHTML = "";
            document.getElementById("menus").remove();
            
            document.getElementById("lined1").onclick = clicki;
            document.getElementById("lined2").onclick = clicki;
            document.getElementById("lined3").onclick = clicki;
        };

        document.getElementById("lined1").onclick = clicki;
        document.getElementById("lined2").onclick = clicki;
        document.getElementById("lined3").onclick = clicki;

        function scrolla() {

        if(document.documentElement.scrollTop > 5) {
    
            if(!document.getElementById("menus")) {
    
            } else{
                document.getElementById("menus").style.backgroundColor = "rgb(23, 23, 23)";
            }
        } else {
    
            if(!document.getElementById("menus")) {
                
            } else{
                document.getElementById("menus").style.backgroundColor = "";
            }
        }
    }
    const inter = setInterval(scrolla, 0)

  function checko() {

    if(document.documentElement.clientWidth < 449) {
    
        clearInterval(inter);
        clearInterval(por);
        if(!document.getElementById("menus")) {

        } else {
        document.getElementById("menus").style.backgroundColor = "rgb(23, 23, 23)";
        }
        if(!document.getElementById("lang")) { 

        } else {
            menu = document.getElementById("lang");
            menu2 = document.getElementById("lang2");
            
        menu.style.backgroundColor = "rgb(23, 23, 23)";
        }
    } 
}
setInterval(checko, 0)
};




if(document.documentElement.clientWidth == 1080) {
    document.getElementById("one").remove();
    document.getElementById("second").remove();
    document.getElementById("third").remove();
    document.getElementById("line").remove();
    gomake.append(objecta);

    let op = document.getElementById("burger");

        op.append(lines);
        op.append(lines2);
        op.append(lines3);



        let bucas = document.getElementById("heder");

        let cre = document.createElement("div");
        cre.id = "menus";
        cre.className = "showMenu";

        function clicki() {
            bucas.append(cre);

            cre.innerHTML = `
            <a href="#home" id="home" class="link">HOME</a>
            <a href="#content" id="contas" class="link">CONTENT</a>
            <a href="#about" id="about1" class="link">ABOUT</a>`;


            document.getElementById("home").onclick = homi;
            document.getElementById("contas").onclick = conta;
            document.getElementById("about1").onclick = abou;

            document.getElementById("lined1").onclick = clicki2;
            document.getElementById("lined2").onclick = clicki2;
            document.getElementById("lined3").onclick = clicki2;
        };

        function clicki2() {
            cre.innerHTML = "";
            document.getElementById("menus").remove();
            
            document.getElementById("lined1").onclick = clicki;
            document.getElementById("lined2").onclick = clicki;
            document.getElementById("lined3").onclick = clicki;
        };

        document.getElementById("lined1").onclick = clicki;
        document.getElementById("lined2").onclick = clicki;
        document.getElementById("lined3").onclick = clicki;

        function scrolla() {

        if(document.documentElement.scrollTop > 5) {
    
            if(!document.getElementById("menus")) {
    
            } else{
                document.getElementById("menus").style.backgroundColor = "rgb(23, 23, 23)";
            }
        } else {
    
            if(!document.getElementById("menus")) {
                
            } else{
                document.getElementById("menus").style.backgroundColor = "";
            }
        }
    }
    const inter = setInterval(scrolla, 0)

  function checko() {

    if(document.documentElement.clientWidth == 1080) {
    
        clearInterval(inter);
        clearInterval(por);
        if(!document.getElementById("menus")) {

        } else {
        document.getElementById("menus").style.backgroundColor = "rgb(23, 23, 23)";
        }
        if(!document.getElementById("lang")) { 

        } else {
            menu = document.getElementById("lang");
            menu2 = document.getElementById("lang2");
            
        menu.style.backgroundColor = "rgb(23, 23, 23)";
        }
    } 
}
setInterval(checko, 0)
};