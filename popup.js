function g() {
    while(true){
        let N = prompt("Guess a num 60 to 70:");
        if (N == 67 ) {alert("yeah 67"); break;}
        if (N < 60 || N > 70) {alert("???");}
        if (N < 67) {alert("too low");}
        if (N > 67) {alert("too high");}
    }
    if (confirm("again?")) {g();}
} g();