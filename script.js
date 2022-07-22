var misconceptionList =
[
  "Abuse is often a one-time occurrence.", /*0*/
  "It's impossible to love someone who abuses you.",/*1*/
  "Domestic violence happens when someone flies out of control.", /*2*/
  "Abuse against women occurs more often in certain groups of people.", /*3*/
  "Alcohol and drugs cause perpetrators to abuse their partners.", /*4*/
  "Women often provoke abuse and deserve what they get." /*5*/
];

var proofList = 
[
  "Incidents of abuse increase in frequency and severity over time. A perpetrator who will abuse a woman once will abuse her again.", /*0*/
  "Women feel so much shame and embarrassment over the fact that they love someone who is abusive to them. They still see a glimpse of the person they fell in love with. It's very complex and it's very hard", /*1*/
  "Domestic violence is a pattern of behavior in which one exerts power and control over another individual. Everything about this person is about control.", /*2*/
  "Abuse against women transcends all age, socio-economic, religious, racial, educational and geographic barriers.", /*3*/
  "Alcohol and drugs are often used as excuses for abuse. Eliminating the use of alcohol and drugs does not eliminate the problem of abuse. The real cause of abuse is the perpetrator’s desire for power and control.", /*4*/
  "No woman ever deserves to be abused. Abusers often blame the victim so that they do not have to assume responsibility for their own actions." /*5*/
];

var misInfo = document.getElementById("misInfo");
var proofInfo = document.getElementById("proofInfo");
var misButton = document.getElementById("misButton");
var count = 0;

misButton.addEventListener("click", displayMisInfo);

function displayMisInfo(){
  misInfo.innerHTML = misconceptionList[count];
  proofInfo.innerHTML = proofList[count];
  count++;
  if (count == misconceptionList.length){
    count=0;
  }
}

var factList =
[
  "Women's shelters can receive over 2000 hotline calls every month", /*0*/
  "75 beds are full almost every night at a shelter.", /*1*/
  "Women and children can stay at a shelther for 30 days.", /*2*/
  "Shelters can provide 3 meals and 2 snacks a day which equals 93,750 meals and 62,500 snacks per year." /*3*/
];
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

factButton.addEventListener("click", displayFacts);

function displayFacts (){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count=0;
  }
}
