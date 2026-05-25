let pass= document.getElementById("pass");

let low= "abcdefjhijklmnopqrstuvwxyz";
let up= "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
let num = "1234657890";
let symbols="!@#$%^&*()_+{}|:";

let group = low + up + num + symbols;

let length = 12;

function getPass(){
    let pass1 = "";
    pass1 += low[Math.floor(Math.random() * low.length)];
    pass1 += up[Math.floor(Math.random() * up.length)];
    pass1 += num[Math.floor(Math.random() * num.length)];
    pass1 += symbols[Math.floor(Math.random() * symbols.length)];

    while(pass1.length < length){
        pass1 += group[Math.floor(Math.random() * group.length)];
    }
    pass.value =pass1;
}

function copy(){
    pass.select();
    document.execCommand("copy");
} 