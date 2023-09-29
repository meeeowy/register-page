let button = document.getElementById("button");
let check_user = document.getElementById("check_user");
let check_pass = document.getElementById("check_pass");
let user = document.getElementById("username");
let pass = document.getElementById("password");
let email = document.getElementById("email");

function css_animation(){
    let link = document.createElement("link");
    let input_animation = document.getElementById("username", "password");

    link.rel = "stylesheet";
    link.href = "style/animation.css";
    input_animation.appendChild(link);
}

function if_else(inp, show, user_pass){
    if (5 < inp || inp > 32){
        show.innerHTML = user_pass + " ok (5 < username > 32)";
        show.style.color = "yellow";
    }
    else{
        show.innerHTML = user_pass + " error !(5 < username > 32)";
        show.style.color = "red";
        css_animation();
    }
}

button.onclick = function(){
    let username = user.value.length;
    let password = pass.value.length;

    if_else(username, check_user, "username");
    if_else(password, check_pass, "password");
}

function opacity(x){
    x.onclick = function(){
        x.style.opacity = "1";
        x.style.boxShadow = "white 0px 0px 20px 5px"
    }
    x.onmouseout = function(){
        setTimeout(() => {
            x.style.opacity = "0.5";
            x.style.boxShadow = "none"
        }, 3000)
    }
}

opacity(user);
opacity(pass);
opacity(email);