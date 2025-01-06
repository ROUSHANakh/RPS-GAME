let user = prompt("Enter Anyone [upper case only: ROCK] , PAPER , SCISSOR")
    let dusra = Math.floor(Math.random()*3) ;
    let CPU = ["ROCK","PAPER","SCISSOR"][dusra]
    const match= (dusra,user)=>{
        if(CPU === user){
            return "NOBODY .MATCH TIE  HO GAYA NIKLO YAHA SE"
        }else if (CPU === "ROCK" && user ==="PAPER"){
         return"user"
        }else if(CPU === "ROCK" && user ==="SCISSOR"){
            return "CPU"
        }else if(CPU ==="PAPER" && user ==="SCISSOR"){
            return "user"
        }else if(CPU ==="PAPER" && user === "ROCK"){
            return "CPU"
        }else if (CPU ==="SCISSOR" && user === "ROCK"){
            return "user"
        }else if(CPU === "SCISSOR" && user === "PAPER"){
            return "CPU"
        }
    }
    let result = match(CPU , user)
    document.write(`CPU:${CPU} <br> YOU:${user} <br> The Winner is : ${result}`)

    
