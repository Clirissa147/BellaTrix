var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");

yesBtn.addEventListener("click", function yesBtn() {
   alert("Hell Yeah!! Lets Play");
});

const confirmAction = () => {
                const response = confirm("I ASKED DO YOU WANT TO PLAY A GAME?? PRESS OK TO PLAY!!!!     IF YOU PRESS CANCEL THEN FUCK YOU");

                if (response) {
                    alert("Yayyy you picked the correct answer. Lets Play")
                } else {
                    alert("You Mother Fucker")
                }
            }


