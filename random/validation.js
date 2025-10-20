// byk2 pakai id krn: getElementById
// addEventListener: saat button diclick kita ambil semua datanya
function onButtonClicked(e){
    e.preventDefault()
    const username=document.getElementById("username").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    
    // || itu kyk or di js
    if (username === "" || email === "" || password===""){
        showError("username, email, & password must be filled");
        return;
    }
    if(username.length < 5){
        showError("username length must be longer than 5");
        return;
    }
    if (email.startsWith("@" || ".")){
        showError ("email musn't start with @ or .");
        return;
    }
    if (email.endsWith("@")||(email.endsWith ("."))){
        showError("email musn't end with @ or .");
        return;
    }
    // !=no/doesn't
    if (!email.endsWith(".com")||!email.includes("@")){
        showError("email must end with .com & have @");
        return;
    }
    if (password.length < 8){
        showError ("password must have at least 8 characters");
        return;
    }
    if (isAlphaNumeric(password)){
        showError("password must have alphabet & number");
        return;
    }
    const maleChecked=document.getElementById("male-radio").checked;
    const femaleChecked=document.getElementById("female-radio").checked;
    if(!maleChecked && !femaleChecked){
        showError("select one gender");
        return;
    }
    const agree=document.getElementById("terms").checked;
    if(!agree){
        showError("please agree to terms & conditions");
        return;
    }

    showError("");
}
function isAlphaNumeric(str){
    let adaAngka=false;
    let adaHuruf=false;
    for (let i=0; i<str.length; i++){
        if ((str[i]>='a'&&str[i]<='z')||(str[i]>='A'&&str[i]<='Z')){
            adaHuruf=true;
        }
        if(str[i]>='0' && str[i]<='9'){
            adaAngka=true;
        }
    }
    return adaAngka && adaHuruf 
}

document.getElementById("submit").addEventListener("click", onButtonClicked);
