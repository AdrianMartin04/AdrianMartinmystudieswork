// Identificadores
visortop = document.getElementById("visortop");
visorbottom = document.getElementById("visorbottom");
buttons = document.getElementById("buttons");
colors = document.getElementById("colors");
bgcolors = document.getElementById("bgcolors");


let c=0;
let n1=0;
let n2=0;
let cont=0;
let resultado=0;
buttons.addEventListener("click",(event)=>{
    if((event.target.value=="/" || event.target.value=="*" || 
        event.target.value=="-" || event.target.value=="+" ||
        event.target.value=="%") && cont==0){
                visortop.textContent= visortop.textContent+visorbottom.textContent+event.target.value;
                visorbottom.textContent="";
                cont++;
                if(event.target.value=="/"){
                    c=1
                }
                if(event.target.value=="*"){
                    c=2
                }
                if(event.target.value=="-"){
                    c=3
                }
                if(event.target.value=="+"){
                    c=4
                }
                if(event.target.value=="%"){
                    c=5
                }
                
    }else{
        if ( event.target.nodeName=="INPUT" && cont==0 && event.target.value!="=" && event.target.value!="AC" && event.target.value!="+/-"){
            visorbottom.textContent=visorbottom.textContent+event.target.value;
        }
        if(cont==1){
            if(event.target.value=="0" || event.target.value=="1" || 
            event.target.value=="2" || event.target.value=="3" ||
            event.target.value=="4" || event.target.value=="5" || 
            event.target.value=="6" || event.target.value=="7" || 
            event.target.value=="8" || event.target.value=="9" ||
            event.target.value=="."){
                visorbottom.textContent=visorbottom.textContent+event.target.value;
            }
            
            if(event.target.value=="="){
                let r;
                visortop.textContent= visortop.textContent+visorbottom.textContent;
                visorbottom.textContent="";
                let cuenta=visortop.textContent;
                switch(c){
                        case 1:
                            r=cuenta.split("/");
                            n1=r[0];
                            n2=r[1];
                            resultado=n1/n2;
                            cont++;
                            break;
                        case 2:
                            r=cuenta.split("*");
                            n1=r[0];
                            n2=r[1];
                            resultado=n1*n2;
                            cont++;
                            break;
                        case 3:
                            r=cuenta.split("-");
                            n1=r[0];
                            n2=r[1];
                            resultado=n1-n2;
                            cont++;
                            break;
                        case 4:
                            r=cuenta.split("+");
                            n1=r[0];
                            n2=r[1];
                            resultado=n1+n2;
                            cont++;
                            break;
                        case 5:
                            r=cuenta.split("%");
                            n1=r[0];
                            n2=r[1];
                            resultado=(n1*n2)/100;
                            cont++;
                            break;
                        
                }
            }
        }
    }

    if(event.target.value=="+/-"){
        visorbottom.textContent="-"+visorbottom.textContent;
    }

    if(event.target.value=="AC"){
        visorbottom.textContent="";
        visortop.textContent="";
        cont=0;
    }

    if(cont==2){
        visortop.textContent="";
        if(resultado.toString().length>15){ 
            let exp=resultado.toString().length;
            resultado=resultado/Math.pow(10, exp);
            resultado=resultado.toFixed(5)+" * 10^"+exp;
            visorbottom.textContent=resultado;
        }else{
            visorbottom.textContent=resultado;
        }
    }

});


colors.addEventListener("click",(event)=>{
    let c=getComputedStyle(event.target).backgroundColor;
    visorbottom.style.color= c;
    visortop.style.color= c;
});

bgcolors.addEventListener("click",(event)=>{
    let c=getComputedStyle(event.target).backgroundColor;
    visorbottom.style.backgroundColor= c;
    visortop.style.backgroundColor= c;
});