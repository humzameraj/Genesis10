function rollDice()
{
	return Math.floor(Math.random() * 6) + 1; // creating a random number from 1-7
}

function playGame()
	{
	var setBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = setBet;var firstDice;var secondDice;var sumOfDice;var rollsAtMax = 0;var maxWin = 0;  //declare variables
	if(money<=0)
	{
		alert("The starting bet needs to be greater than $0");  //creating a prompt that will tell the user to enter a number > 0 if their number is less than 0 or 0
	}
	else{


	for(var rolls = 0; money > 0; rolls++)
		{
			firstDice = rollDice();
			secondDice = rollDice();
			sumOfDice = firstDice + secondDice;
			if(sumOfDice == 7)
			{
				money = money + 4;
				if(money > maxWin)
				{
					maxWin = maxWin + (money-maxWin);
					rollsAtMax = rolls;
				}
			}
			else if(sumOfDice !=7)
			{
				money= money - 1;



			}
		}
	}

	document.getElementById("results").style.display = "block";

	document.getElementById("submitButton").innerText = "Play Again";

	document.getElementById("startingBet").innerText = setBet;

	document.getElementById("totalRolls").innerText = rolls;

	document.getElementById("highestWon").innerText = maxWin;

	document.getElementById("rollsMax").innerText = rollsAtMax;

	return false;


}
