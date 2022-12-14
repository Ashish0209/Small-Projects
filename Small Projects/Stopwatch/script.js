var hr = 0;
var min = 0;
var sec = 0;
var cnt = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    hr =0;
    min = 0;
    sec = 0;
    cnt =0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("cnt").innerHTML = "00";

}

function stopwatch(){
    if(timer==true){
        cnt = cnt + 1;

        if(cnt == 100){
            sec = sec + 1;
            cnt = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

       var hrstring = hr;
       var minstring = min;
       var secstring = sec;
       var cntstring = cnt;

       if(hr<10){
            hrstring = "0" + hrstring;
       }
       if(min<10){
           minstring = "0" + minstring;
        }
        if(sec<10){
             secstring = "0" + secstring;
        }
       if(cnt<10){
            cntstring = "0" + cntstring;
       }
        
        document.getElementById("hr").innerHTML = hrstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("cnt").innerHTML = cntstring;
        
        setTimeout("stopwatch()" , 10);

    }

}