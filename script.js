/* Variables */
var factList = ["According to the National Coalition Against Domestic Violence (NCADV), nearly 10 million women and men become victims of domestic violence annually",
  "According to the CDC, more than one in three women (35.6 percent) and more than one in four men (28.5 percent) in the U.S. have experienced rape, physical violence, and/or stalking by an intimate partner in their lifetime",
  "Most domestic violence incidents are never reported",
  "According to the CDC, nearly half of all women and men have experienced psychological aggression by an intimate partner in their lives (48.4 and 48.8 percent resp.)",
  "More than 3 million children witness domestic violence in their homes annually",
  "Domestic violence is responsible for over 1500 deaths in the United States every year",
  "According to the U.S. Department of Housing and Urban Development, domestic violence is the third leading cause of homelessness among families",
  "Most perpetrators and victims do not seek help"];
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

/* Calls function to display fact when button is clicked */
myButton.addEventListener("click", displayFact);

/* Displays fact and also changes fact when called */
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  /* Restarts fact list */
  if (count == factList.length) {
    count = 0;
  }
}
