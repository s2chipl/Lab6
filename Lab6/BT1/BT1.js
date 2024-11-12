function dangky(){
    var ten=document.getElementById("username").value;
    var p1=document.getElementById("pass1").value;
    var p2=document.getElementById("pass2").value;
    if(ten==""){
        alert("vui long nhap ten");
        return false;
    }  
        if((p1=="")||(p2=="")){
            alert("vui long nhap mat khau");
            return false;
        }
        if(p1!=p2){
            alert("mat khau chua trung khop");
            return false;
        }
    else{
        alert("chuc mung dang ki thanh cong");
            return true;
    }
}