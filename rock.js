let options = document.querySelectorAll(".option");
let yourScore = document.querySelector("#yourScore");
let you = 0;
let compScore = document.querySelector("#compScore");
let comp = 0;
let info = document.querySelector(".info")
let winner = document.querySelector(".winner");


options.forEach((option) =>{
    option.addEventListener("click" , () =>{
        let random = Math.floor(Math.random()*3);
        let compOption = "";
        let nameo = "";

        if(random == 0){
            compOption = "✊";
            nameo = "Rock";

        }else if(random === 1){
            compOption = "🤚";
            nameo = "Paper";
        }else{
            compOption = "✌";
            nameo = "Scissor";
        }


        let yourOption = option.innerText;
        console.log(yourOption);
        if(yourOption === compOption){
            console.log(`Computor chose ${nameo} ${compOption}`);
            info.innerText = `Computor chose ${nameo} ${compOption}`;
            console.log("its a tie!");
            winner.innerText = "its a tie!";
        }else if(
            yourOption ==="✊" && compOption === "✌" ||
            yourOption ==="🤚" && compOption ==="✊"||
            yourOption ==="✌" && compOption === "🤚"
        ){
            //you wining choices
            console.log(`Computer chose ${nameo} ${compOption}`);
            info.innerText = `Computer chose ${nameo} ${compOption}`;
            console.log("You Win!!!");
            winner.innerText = "You Win!!!";
            you++;
            yourScore.innerText = you;
        }else{
            console.log(`Computer chose ${nameo} ${compOption}`);
            info.innerText = `Computer chose ${nameo} ${compOption}`;
            console.log("Computer Win !");
            winner.innerText = "Computer Win !";
            comp++;
            compScore.innerText = comp;
        }
    })
})

