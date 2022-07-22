// bài 1
document.getElementById("btnSapXep").onclick = function(){
    // input
    var a = document.getElementById("soTuNhien1").value * 1;
    var b = document.getElementById("soTuNhien2").value * 1;
    var c = document.getElementById("soTuNhien3").value * 1;
    var ketQua;
    // process
    if(a > b && b > c){
        ketQua = "c < b < a" ;
    }else if(a > c && c > b ){
        ketQua = "b < c < a";
    }else if(b > a && a > c){
        ketQua = "c < a < b";
    }else if(b > c && c > a){
        ketQua = "a < c < b";
    }else if(c > a && a > b){
        ketQua = "b < a < c";
    }else {
        ketQua = "a < b < c";
    }
    output 
    var result = "Số tăng dần là: " + ketQua;
    document.getElementById("thongBao").innerHTML = result;

    
}