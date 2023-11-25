'use strict';

let loca = window.location.search.replace(/\+/g, '%20');
let input = document.getElementById("searching").value;
let elem = document.getElementById("helpa");
let base = {
    one: {
        l1: "R",
        l2: "Ro",
        l3: "Rob",
        l4: "Robl",
        l5: "Roblo",
        l6: "Roblox",
        l7: "Roblox ",
        l8: "re",
        l9: "res",
        l10: "rest",
        l11: "resta",
        l12: "restau",
        l13: "restaur",
        l14: "ur",
        l15: "ra",
        l16: "an",
        l17: "nt",
        l18: "nt ",
        l19: " Ty",
        l20: "yc",
        l21: "co",
        l22: "oo",
        l23: "on",
        l24: "n2",
    },
    second: {
        p1: "R",
        p2: "Re",
        p3: "Res",
        p4: "Rest",
        p5: "Resta",
        p6: "Restau",
        p7: "Restaur",
        p8: "Restaura",
        p9: "Restauran",
        p10: "Restaurant",
        p11: "Restaurant L",
        p12: "Restaurant Lu",
        p13: "Restaurant Lui",
        p14: "Restaurant Luig",
        p15: "Restaurant Luigi",
        p16: "Restaurant Luigi'",
        p17: "Restaurant Luigi's"
    }
}
let constructor = document.createElement("div");
constructor.className = "v";
let constructor2 = document.createElement("div");
constructor2.className = "v";

function checka() {
    input = document.getElementById("searching").value;

    if(input == "") {
        if(!document.getElementById("i1")) {} else {

    document.getElementById("i1").remove();
    elem.className = "hidenH";
        }
    }
      if( input.includes(base.one.l1) ) { // R
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s1").style.fontWeight = "bold";
                document.getElementById("s2").style.fontWeight = "";
            }
    
    } else {
        if(!document.getElementById("s1")) {} else {
        document.getElementById("s1").style.fontWeight = "";
        document.getElementById("i1").remove();
        }
    }

    if( input.includes("r") ) { // r
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {

                document.getElementById("s1").style.fontWeight = "bold";
                document.getElementById("s2").style.fontWeight = "";
            }
    
    }

    
    if( input.includes(base.one.l2) ) { // RO
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                if(!document.getElementById("i2")) {} else {
               document.getElementById("i2").remove();
                }
                document.getElementById("s2").style.fontWeight = "bold";
                document.getElementById("s3").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l3) ) { // B
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s3").style.fontWeight = "bold";
                document.getElementById("s4").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l4) ) { // L
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s4").style.fontWeight = "bold";
                document.getElementById("s5").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l5) ) { // LO
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s5").style.fontWeight = "bold";
                document.getElementById("s06").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l6) ) { // OX
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s06").style.fontWeight = "bold";
                document.getElementById("s07").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l7) ) { // Roblox
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s1").style.fontWeight = "bold";
                document.getElementById("s2").style.fontWeight = "bold";
                document.getElementById("s3").style.fontWeight = "bold";
                document.getElementById("s4").style.fontWeight = "bold";
                document.getElementById("s06").style.fontWeight = "bold";
                document.getElementById("s07").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l8) ) { // r
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s07").style.fontWeight = "bold";
                document.getElementById("s08").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l9) ) { // e
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s08").style.fontWeight = "bold";
                document.getElementById("s09").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l10) ) { // s
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s09").style.fontWeight = "bold";
                document.getElementById("s010").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l11) ) { // t
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s010").style.fontWeight = "bold";
                document.getElementById("s10").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l12) ) { // a
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s10").style.fontWeight = "bold";
                document.getElementById("s11").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l13) ) { // u
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s11").style.fontWeight = "bold";
                document.getElementById("s12").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l14) ) { // r
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s12").style.fontWeight = "bold";
                document.getElementById("s13").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l15) ) { // an
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s13").style.fontWeight = "bold";
                document.getElementById("s14").style.fontWeight = "";
            }
    
    }

    if( input.includes(base.one.l16) ) { // es
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s14").style.fontWeight = "bold";
                document.getElementById("s15").style.fontWeight = "";
            }
    
    }

    if( input.includes(base.one.l17) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s15").style.fontWeight = "bold";
                document.getElementById("s16").style.fontWeight = "";
            }
    
    }

    if( input.includes(base.one.l18) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s16").style.fontWeight = "bold";
                document.getElementById("s17").style.fontWeight = "";
            }
    
    }

    if( input.includes(base.one.l19) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s17").style.fontWeight = "bold";
                document.getElementById("s18").style.fontWeight = "";
            }
    
    }

    if( input.includes(base.one.l20) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s18").style.fontWeight = "bold";
                document.getElementById("s19").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l21) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s19").style.fontWeight = "bold";
                document.getElementById("s20").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l22) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s20").style.fontWeight = "bold";
                document.getElementById("s21").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l23) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s21").style.fontWeight = "bold";
                document.getElementById("s22").style.fontWeight = "";
            }
    
    }
    if( input.includes(base.one.l23) ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s22").style.fontWeight = "bold";
            }
    
    }



    if( input.includes("ROBLOX RESTAURANT TYCOON2 || COMPRO SEGUNDO PISO || HALLOWEN EVENT") ) { // st
        if(!document.getElementById("s1")) {
            constructor.innerHTML = `<span id="s1">R</span><span id="s2">o</span><span id="s3">b</span><span id="s4">l</span><span id="s5">o</span><span id="s06">x</span> <span id="s07">r</span><span id="s08">e</span><span id="s09">s</span><span id="s010">t</span><span id="s10">a</span><span id="s11">u</span><span id="s12">r</span><span id="s13">a</span><span id="s14">n</span><span id="s15">t</span> <span id="s16">T</span><span id="s17">y</span><span id="s18">c</span><span id="s19">o</span><span id="s20">o</span><span id="s21">n</span><span id="s22">2</span>`;
            elem.append(constructor);
            elem.className = "helper";
            constructor.id = "i1"
              } else {
                document.getElementById("s1").style.fontWeight = "bold";
                document.getElementById("s2").style.fontWeight = "bold";
                document.getElementById("s3").style.fontWeight = "bold";
                document.getElementById("s4").style.fontWeight = "bold";
                document.getElementById("s5").style.fontWeight = "bold";
                document.getElementById("s07").style.fontWeight = "bold";
                document.getElementById("s06").style.fontWeight = "bold";
                document.getElementById("s08").style.fontWeight = "bold";
                document.getElementById("s09").style.fontWeight = "bold";
                document.getElementById("s010").style.fontWeight = "bold";
                document.getElementById("s10").style.fontWeight = "bold";
                document.getElementById("s12").style.fontWeight = "bold";
                document.getElementById("s13").style.fontWeight = "bold";
                
                document.getElementById("s14").style.fontWeight = "bold";
                document.getElementById("s15").style.fontWeight = "bold";
                document.getElementById("s16").style.fontWeight = "bold";
                document.getElementById("s17").style.fontWeight = "bold";
                document.getElementById("s18").style.fontWeight = "bold";
                document.getElementById("s19").style.fontWeight = "bold";
                document.getElementById("s20").style.fontWeight = "bold";
                document.getElementById("s21").style.fontWeight = "bold";
                document.getElementById("s22").style.fontWeight = "bold";
            }
    
    }






    // second video

    if( input == base.second.p1 ) { // R
        if(!document.getElementById("d1")) {
            constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
            elem.append(constructor2);
            elem.className = "helper";
            constructor2.id = "i2"
            document.getElementById("d1").style.fontWeight = "bold";
              } else {
                document.getElementById("d1").style.fontWeight = "bold";
                document.getElementById("d2").style.fontWeight = "";
            }
          }

          if( input == base.second.p2 ) { // Re
            if(!document.getElementById("d1")) {
                constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                elem.append(constructor2);
                elem.className = "helper";
                constructor2.id = "i2"
                document.getElementById("d2").style.fontWeight = "bold";
                  } else {
                    document.getElementById("i1").remove();
                    document.getElementById("d2").style.fontWeight = "bold";
                    document.getElementById("d3").style.fontWeight = "";
                }
              }

              if( input == base.second.p3 ) { // Res
                if(!document.getElementById("d1")) {
                    constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                    elem.append(constructor2);
                    elem.className = "helper";
                    constructor2.id = "i2"
                    document.getElementById("d3").style.fontWeight = "bold";
                      } else {
                        document.getElementById("i1").remove();
                        document.getElementById("d1").style.fontWeight = "bold";
                        document.getElementById("d2").style.fontWeight = "bold";
                        document.getElementById("d3").style.fontWeight = "bold";
                        document.getElementById("d4").style.fontWeight = "";
                    }
                  }

                  if( input == base.second.p4 ) { // Rest
                    if(!document.getElementById("d1")) {
                        constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                        elem.append(constructor2);
                        elem.className = "helper";
                        constructor2.id = "i2"
                        document.getElementById("d4").style.fontWeight = "bold";
                          } else {
                            document.getElementById("i1").remove();
                            document.getElementById("d1").style.fontWeight = "bold";
                            document.getElementById("d2").style.fontWeight = "bold";
                            document.getElementById("d3").style.fontWeight = "bold";
                            document.getElementById("d4").style.fontWeight = "bold";
                            document.getElementById("d5").style.fontWeight = "";
                        }
                      }

                      if( input == base.second.p5 ) { // Resta
                        if(!document.getElementById("d1")) {
                            constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                            elem.append(constructor2);
                            elem.className = "helper";
                            constructor2.id = "i2"
                            document.getElementById("d5").style.fontWeight = "bold";
                              } else {
                                document.getElementById("i1").remove();
                                document.getElementById("d1").style.fontWeight = "bold";
                                document.getElementById("d2").style.fontWeight = "bold";
                                document.getElementById("d3").style.fontWeight = "bold";
                                document.getElementById("d4").style.fontWeight = "bold";
                                document.getElementById("d5").style.fontWeight = "bold";
                                document.getElementById("d6").style.fontWeight = "";
                            }
                          }

                          if( input == base.second.p6 ) { // Restau
                            if(!document.getElementById("d1")) {
                                constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                elem.append(constructor2);
                                elem.className = "helper";
                                constructor2.id = "i2"
                                document.getElementById("d6").style.fontWeight = "bold";
                                  } else {
                                    document.getElementById("i1").remove();
                                    document.getElementById("d1").style.fontWeight = "bold";
                                    document.getElementById("d2").style.fontWeight = "bold";
                                    document.getElementById("d3").style.fontWeight = "bold";
                                    document.getElementById("d4").style.fontWeight = "bold";
                                    document.getElementById("d5").style.fontWeight = "bold";
                                    document.getElementById("d6").style.fontWeight = "bold";
                                    document.getElementById("d7").style.fontWeight = "";
                                }
                              }

                              if( input == base.second.p7 ) { // Restaur
                                if(!document.getElementById("d1")) {
                                    constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                    elem.append(constructor2);
                                    elem.className = "helper";
                                    constructor2.id = "i2"
                                    document.getElementById("d7").style.fontWeight = "bold";
                                      } else {
                                        document.getElementById("i1").remove();
                                        document.getElementById("d1").style.fontWeight = "bold";
                                        document.getElementById("d2").style.fontWeight = "bold";
                                        document.getElementById("d3").style.fontWeight = "bold";
                                        document.getElementById("d4").style.fontWeight = "bold";
                                        document.getElementById("d5").style.fontWeight = "bold";
                                        document.getElementById("d6").style.fontWeight = "bold";
                                        document.getElementById("d7").style.fontWeight = "bold";
                                        document.getElementById("d8").style.fontWeight = "";
                                    }
                                  }
                                  if( input == base.second.p8 ) { // Restaura
                                    if(!document.getElementById("d1")) {
                                        constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                        elem.append(constructor2);
                                        elem.className = "helper";
                                        constructor2.id = "i2"
                                        document.getElementById("d8").style.fontWeight = "bold";
                                          } else {
                                            document.getElementById("i1").remove();
                                            document.getElementById("d1").style.fontWeight = "bold";
                                            document.getElementById("d2").style.fontWeight = "bold";
                                            document.getElementById("d3").style.fontWeight = "bold";
                                            document.getElementById("d4").style.fontWeight = "bold";
                                            document.getElementById("d5").style.fontWeight = "bold";
                                            document.getElementById("d6").style.fontWeight = "bold";
                                            document.getElementById("d7").style.fontWeight = "bold";
                                            document.getElementById("d8").style.fontWeight = "bold";
                                            document.getElementById("d9").style.fontWeight = "";
                                        }
                                      }

                                      if( input == base.second.p9 ) { // Restaura
                                        if(!document.getElementById("d1")) {
                                            constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                            elem.append(constructor2);
                                            elem.className = "helper";
                                            constructor2.id = "i2"
                                            document.getElementById("d9").style.fontWeight = "bold";
                                              } else {
                                                document.getElementById("i1").remove();
                                                document.getElementById("d1").style.fontWeight = "bold";
                                                document.getElementById("d2").style.fontWeight = "bold";
                                                document.getElementById("d3").style.fontWeight = "bold";
                                                document.getElementById("d4").style.fontWeight = "bold";
                                                document.getElementById("d5").style.fontWeight = "bold";
                                                document.getElementById("d6").style.fontWeight = "bold";
                                                document.getElementById("d7").style.fontWeight = "bold";
                                                document.getElementById("d8").style.fontWeight = "bold";
                                                document.getElementById("d9").style.fontWeight = "bold";
                                                document.getElementById("d10").style.fontWeight = "bold";
                                                document.getElementById("d11").style.fontWeight = "";
                                            }
                                          }

                                          if( input == base.second.p10 ) { // Restaurant
                                            if(!document.getElementById("d1")) {
                                                constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                elem.append(constructor2);
                                                elem.className = "helper";
                                                constructor2.id = "i2"
                                                document.getElementById("d10").style.fontWeight = "bold";
                                                  } else {
                                                    document.getElementById("i1").remove();
                                                    document.getElementById("d1").style.fontWeight = "bold";
                                                    document.getElementById("d2").style.fontWeight = "bold";
                                                    document.getElementById("d3").style.fontWeight = "bold";
                                                    document.getElementById("d4").style.fontWeight = "bold";
                                                    document.getElementById("d5").style.fontWeight = "bold";
                                                    document.getElementById("d6").style.fontWeight = "bold";
                                                    document.getElementById("d7").style.fontWeight = "bold";
                                                    document.getElementById("d8").style.fontWeight = "bold";
                                                    document.getElementById("d9").style.fontWeight = "bold";
                                                    document.getElementById("d10").style.fontWeight = "bold";
                                                    document.getElementById("d11").style.fontWeight = "";
                                                }
                                              }

                                              if( input == base.second.p11 ) { // Restaurant L
                                                if(!document.getElementById("d1")) {
                                                    constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                    elem.append(constructor2);
                                                    elem.className = "helper";
                                                    constructor2.id = "i2"
                                                    document.getElementById("d11").style.fontWeight = "bold";
                                                      } else {
                                                        document.getElementById("i1").remove();
                                                        document.getElementById("d1").style.fontWeight = "bold";
                                                        document.getElementById("d2").style.fontWeight = "bold";
                                                        document.getElementById("d3").style.fontWeight = "bold";
                                                        document.getElementById("d4").style.fontWeight = "bold";
                                                        document.getElementById("d5").style.fontWeight = "bold";
                                                        document.getElementById("d6").style.fontWeight = "bold";
                                                        document.getElementById("d7").style.fontWeight = "bold";
                                                        document.getElementById("d8").style.fontWeight = "bold";
                                                        document.getElementById("d9").style.fontWeight = "bold";
                                                        document.getElementById("d10").style.fontWeight = "bold";
                                                        document.getElementById("d11").style.fontWeight = "bold";
                                                        document.getElementById("d12").style.fontWeight = "";
                                                    }
                                                  }

                                                  if( input == base.second.p12 ) { // Restaurant Lu
                                                    if(!document.getElementById("d1")) {
                                                        constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                        elem.append(constructor2);
                                                        elem.className = "helper";
                                                        constructor2.id = "i2"
                                                        document.getElementById("d12").style.fontWeight = "bold";
                                                          } else {
                                                            document.getElementById("i1").remove();
                                                            document.getElementById("d1").style.fontWeight = "bold";
                                                            document.getElementById("d2").style.fontWeight = "bold";
                                                            document.getElementById("d3").style.fontWeight = "bold";
                                                            document.getElementById("d4").style.fontWeight = "bold";
                                                            document.getElementById("d5").style.fontWeight = "bold";
                                                            document.getElementById("d6").style.fontWeight = "bold";
                                                            document.getElementById("d7").style.fontWeight = "bold";
                                                            document.getElementById("d8").style.fontWeight = "bold";
                                                            document.getElementById("d9").style.fontWeight = "bold";
                                                            document.getElementById("d10").style.fontWeight = "bold";
                                                            document.getElementById("d11").style.fontWeight = "bold";
                                                            document.getElementById("d12").style.fontWeight = "bold";
                                                            document.getElementById("d13").style.fontWeight = "";
                                                        }
                                                      }

                                                      if( input == base.second.p13 ) { // Restaurant Lui
                                                        if(!document.getElementById("d1")) {
                                                            constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                            elem.append(constructor2);
                                                            elem.className = "helper";
                                                            constructor2.id = "i2"
                                                            document.getElementById("d13").style.fontWeight = "bold";
                                                              } else {
                                                                document.getElementById("i1").remove();
                                                                document.getElementById("d1").style.fontWeight = "bold";
                                                                document.getElementById("d2").style.fontWeight = "bold";
                                                                document.getElementById("d3").style.fontWeight = "bold";
                                                                document.getElementById("d4").style.fontWeight = "bold";
                                                                document.getElementById("d5").style.fontWeight = "bold";
                                                                document.getElementById("d6").style.fontWeight = "bold";
                                                                document.getElementById("d7").style.fontWeight = "bold";
                                                                document.getElementById("d8").style.fontWeight = "bold";
                                                                document.getElementById("d9").style.fontWeight = "bold";
                                                                document.getElementById("d10").style.fontWeight = "bold";
                                                                document.getElementById("d11").style.fontWeight = "bold";
                                                                document.getElementById("d12").style.fontWeight = "bold";
                                                                document.getElementById("d13").style.fontWeight = "bold";
                                                                document.getElementById("d14").style.fontWeight = "";
                                                            }
                                                          }

                                                          if( input == base.second.p14 ) { // Restaurant Luig
                                                            if(!document.getElementById("d1")) {
                                                                constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                                elem.append(constructor2);
                                                                elem.className = "helper";
                                                                constructor2.id = "i2"
                                                                document.getElementById("d14").style.fontWeight = "bold";
                                                                  } else {
                                                                    document.getElementById("i1").remove();
                                                                    document.getElementById("d1").style.fontWeight = "bold";
                                                                    document.getElementById("d2").style.fontWeight = "bold";
                                                                    document.getElementById("d3").style.fontWeight = "bold";
                                                                    document.getElementById("d4").style.fontWeight = "bold";
                                                                    document.getElementById("d5").style.fontWeight = "bold";
                                                                    document.getElementById("d6").style.fontWeight = "bold";
                                                                    document.getElementById("d7").style.fontWeight = "bold";
                                                                    document.getElementById("d8").style.fontWeight = "bold";
                                                                    document.getElementById("d9").style.fontWeight = "bold";
                                                                    document.getElementById("d10").style.fontWeight = "bold";
                                                                    document.getElementById("d11").style.fontWeight = "bold";
                                                                    document.getElementById("d12").style.fontWeight = "bold";
                                                                    document.getElementById("d13").style.fontWeight = "bold";
                                                                    document.getElementById("d14").style.fontWeight = "bold";
                                                                    document.getElementById("d15").style.fontWeight = "";
                                                                }
                                                              }

                                                              if( input == base.second.p15 ) { // Restaurant Luigi
                                                                if(!document.getElementById("d1")) {
                                                                    constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                                    elem.append(constructor2);
                                                                    elem.className = "helper";
                                                                    constructor2.id = "i2"
                                                                    document.getElementById("d15").style.fontWeight = "bold";
                                                                      } else {
                                                                        document.getElementById("i1").remove();
                                                                        document.getElementById("d1").style.fontWeight = "bold";
                                                                        document.getElementById("d2").style.fontWeight = "bold";
                                                                        document.getElementById("d3").style.fontWeight = "bold";
                                                                        document.getElementById("d4").style.fontWeight = "bold";
                                                                        document.getElementById("d5").style.fontWeight = "bold";
                                                                        document.getElementById("d6").style.fontWeight = "bold";
                                                                        document.getElementById("d7").style.fontWeight = "bold";
                                                                        document.getElementById("d8").style.fontWeight = "bold";
                                                                        document.getElementById("d9").style.fontWeight = "bold";
                                                                        document.getElementById("d10").style.fontWeight = "bold";
                                                                        document.getElementById("d11").style.fontWeight = "bold";
                                                                        document.getElementById("d12").style.fontWeight = "bold";
                                                                        document.getElementById("d13").style.fontWeight = "bold";
                                                                        document.getElementById("d14").style.fontWeight = "bold";
                                                                        document.getElementById("d15").style.fontWeight = "bold";
                                                                        document.getElementById("d16").style.fontWeight = "";
                                                                    }
                                                                  }

                                                                  if( input == base.second.p17 ) { // Restaurant Luigi's
                                                                    if(!document.getElementById("d1")) {
                                                                        constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                                        elem.append(constructor2);
                                                                        elem.className = "helper";
                                                                        constructor2.id = "i2"
                                                                        document.getElementById("d16").style.fontWeight = "bold";
                                                                          } else {
                                                                            document.getElementById("i1").remove();
                                                                            document.getElementById("d1").style.fontWeight = "bold";
                                                                            document.getElementById("d2").style.fontWeight = "bold";
                                                                            document.getElementById("d3").style.fontWeight = "bold";
                                                                            document.getElementById("d4").style.fontWeight = "bold";
                                                                            document.getElementById("d5").style.fontWeight = "bold";
                                                                            document.getElementById("d6").style.fontWeight = "bold";
                                                                            document.getElementById("d7").style.fontWeight = "bold";
                                                                            document.getElementById("d8").style.fontWeight = "bold";
                                                                            document.getElementById("d9").style.fontWeight = "bold";
                                                                            document.getElementById("d10").style.fontWeight = "bold";
                                                                            document.getElementById("d11").style.fontWeight = "bold";
                                                                            document.getElementById("d12").style.fontWeight = "bold";
                                                                            document.getElementById("d13").style.fontWeight = "bold";
                                                                            document.getElementById("d14").style.fontWeight = "bold";
                                                                            document.getElementById("d15").style.fontWeight = "bold";
                                                                            document.getElementById("d16").style.fontWeight = "bold";
                                                                        }
                                                                      }

                                                                      if( input == "RESTAURANT LUIGUI'S ROBLOX || SUBO NIVEL PARA TENER MUEBLES" ) { // Restaurant Luigi's
                                                                        if(!document.getElementById("d1")) {
                                                                            constructor2.innerHTML = `<span id="d1">R</span><span id="d2">e</span><span id="d3">s</span><span id="d4">t</span><span id="d5">a</span><span id="d6">u</span><span id="d7">r</span><span id="d8">a</span><span id="d9">n</span><span id="d10">t</span> <span id="d11">L</span><span id="d12">u</span><span id="d13">i</span><span id="d14">g</span><span id="d15">i</span><span id="d16">'</span><span id="s16">s</span>`;
                                                                            elem.append(constructor2);
                                                                            elem.className = "helper";
                                                                            constructor2.id = "i2"
                                                                            document.getElementById("d16").style.fontWeight = "bold";
                                                                              } else {
                                                                                document.getElementById("i1").remove();
                                                                                document.getElementById("d1").style.fontWeight = "bold";
                                                                                document.getElementById("d2").style.fontWeight = "bold";
                                                                                document.getElementById("d3").style.fontWeight = "bold";
                                                                                document.getElementById("d4").style.fontWeight = "bold";
                                                                                document.getElementById("d5").style.fontWeight = "bold";
                                                                                document.getElementById("d6").style.fontWeight = "bold";
                                                                                document.getElementById("d7").style.fontWeight = "bold";
                                                                                document.getElementById("d8").style.fontWeight = "bold";
                                                                                document.getElementById("d9").style.fontWeight = "bold";
                                                                                document.getElementById("d10").style.fontWeight = "bold";
                                                                                document.getElementById("d11").style.fontWeight = "bold";
                                                                                document.getElementById("d12").style.fontWeight = "bold";
                                                                                document.getElementById("d13").style.fontWeight = "bold";
                                                                                document.getElementById("d14").style.fontWeight = "bold";
                                                                                document.getElementById("d15").style.fontWeight = "bold";
                                                                                document.getElementById("d16").style.fontWeight = "bold";
                                                                            }
                                                                          }


    

                                                                          if(!document.getElementById("i2")) {} else {
                                                                            document.getElementById("i2").onclick = function() {
                                                                              window.location.search = "?info=Restaurant%20Luigi%27s";
                                                                            };
                                                                            }

                                                                            if(!document.getElementById("i1")) {} else {
                                                                              document.getElementById("i1").onclick = function() {
                                                                                window.location.search = "?info=Roblox%20restaurant%20Tycoon2";
                                                                              };
                                                                              }


}
document.getElementById("searching").onkeyup = checka;

let gety = document.getElementById("reta");
let urw =  document.getElementById("uri");
function reload() {

  document.getElementById("reta").innerHTML = "";

  let manke1 = document.createElement("div");
  manke1.id = "inf1";
  manke1.className = "name01";
  gety.append(manke1);

}
let urli = "";
let texta = "";
function video() {
  let o1 = document.getElementById("inf1");
  document.getElementById("inf1").innerHTML = `<h1 class="n1">${texta}<h1>`;

  let ifr = document.createElement("iframe");
  ifr.src = `${urli}`;
  ifr.className = "ifa1";

  o1.append(ifr);
  
  gety.style.height = "120vh";
  urw.style.height = "120vh";
  document.body.style.height = "120vh"
}
function erra() {
  let o1 = document.getElementById("inf1");
  document.getElementById("inf1").innerHTML = `<h1 class="n1">Error 404<h1>`;

  
  gety.style.height = "50vh";
  urw.style.height = "50vh";
  document.body.style.height = "50vh"
}


if(loca == "?info=Roblox%20restaurant%20Tycoon2") {
  texta = "ROBLOX RESTAURANT TYCOON2";
  urli = "https://www.youtube.com/embed/33jJkbDLpPc?si=Tr-qjcHTCaiKq-lU";
  reload();
  video();
}
if(loca == "?info=Restaurant%20Luigi%27s") {
  texta = "RESTAURANT LUIGUI'S ROBLOX";
  urli = "https://www.youtube.com/embed/sdDl8EJQHw4?si=blZEkwZdS0MQzZm1";
  reload();
  video();
}

if(loca != "?info=Roblox%20restaurant%20Tycoon2") {
  if(loca != "?info=Restaurant%20Luigi%27s") {
    if(loca != "?info=") {
      if(loca != "") {
     reload();
     erra();
    }
  }
  }
}
document.getElementById("ord").onclick = function() {
  reload();
  erra();
}