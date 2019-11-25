function table(form){
    var a = form.num.value;
    var color = form.col.value;
    document.getElementById(a).style.background=color;
    
}
function table1(form){
    var pict = "url('q"+form.lan.value + ".png')";

    document.getElementById("lang").style.backgroundImage=pict;
    console.log(pict);
}