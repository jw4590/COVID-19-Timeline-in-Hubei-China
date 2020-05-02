'use strict'
const maxConfirmed = 68128;
const scale = 100;

var confirmedSelected = 0;
var healedSelected = 0;
var deathSelected = 0;

var curConfirmedSquare = 2;
var curDeathSquare = 0;
var curHealedSquare = 0;

var curConfirmed = 239;
var curDeath = 6;
var curHealed = 25;
var curDay = 20;
var color = "red";

var presentMode = false;

var list = [[239,25,6],[338,28,9],[399,28,17],[494,31,24],[658,32,39],[958,42,52],[1303,44,76],[2567,47,100],[3349,80,125],[4334,90,162],
[5486,116,204],[6738,166,249],[8565,215,294],[10532,295,350],[12712,396,414],[15679,520,479],[18473,633,549],[20677,817,618],[23139,1115,699],[24881,1439,780],
[26965,1795,871],[28532,2222,974],[29659,2639,1068],[43455,3441,1310],[46537,4131,1318],[48175,4774,1457],[49030,5623,1596],[49847,6639,1696],[50338,7862,1789],[50633,9128,1921],
[50091,10337,2029],[49156,11788,2144],[47647,13557,2250],[46439,15299,2346],[45054,16738,2495],[43369,18854,2563],[41660,20912,2615],[39755,23200,2641],[36829,26403,2682],[34715,28895,2727],
[32959,31187,2761],[30543,33757,2803],[28216,36167,2834],[25905,38556,2871],[24085,40479,2902],[22695,41966,2931],[21239,43468,2959],[19710,45011,2986],[18303,46433,3007],[17151,47585,3024],
[15671,49056,3046],[14427,50298,3056],[13171,51553,3062],[11772,52943,3075],[10431,54278,3085],[9605,55094,3099],[8701,55987,3111],[7795,56883,3122],[6992,57678,3130],[6287,58381,3132],
[5719,58942,3139],[5224,59432,3144],[4768,59879,3153],[4318,60323,3160],[3828,60810,3163],[3431,61201,3169],[2896,61731,3174],[2526,62098,3177],[2054,62565,3182],[1733,62882,3186],
[461,63153,3187],[1283,63326,3193],[1132,63471,3199],[987,63612,3203],[834,63762,3207],[648,63945,3210],[577,64014,3212],[518,64073,3212],[448,64142,3213],[401,64187,3215],
[351,64236,3216],[320,64264,3219],[303,64281,3219],[244,64338,3221],[219,64363,3221],[179,64402,3222],[146,64435,3222],[129,64452,3222],[122,63494,4512],[109,63507,4512],
[105,63511,4512],[102,63514,4512],[97,63519,4512],[69,63547,4512],[47,63569,4512],[23,63593,4512],[12,63604,4512],[0,63616,4512]];


//returns the number of squares representing the actual data
function numSquares(num){
    return(Math.floor(num/scale));
}

var squareContainer = document.getElementById("square-container");

//initialize the sqaures
for(var i=0;i<numSquares(maxConfirmed);i++){
    var squareDiv = document.createElement("div");
    squareDiv.setAttribute("class","square");
    squareDiv.setAttribute("onmouseover","selectSquare1(this)");
    squareDiv.setAttribute("onmouseout","selectSquare2(this)");
    squareContainer.appendChild(squareDiv);
    //console.log(numSquares(maxConfirmed));
}

//help
function help(){
    alert("Each square represent 100 people who were diagnosed with the corona virus in Hubei."+
        "\nTake a guess on the COVID-19 data for Hubei on the selected day."+
    "\nTo start or restart, pick a color and click the start button."+ 
    "\nHover your mouse on the sqaures to select."+
    "\nA red sqaure represents 100 confirmed cases;"+
    "\nA green sqaure represents 100 people who have recovered"+
    "\nA black sqaure represents 100 people who have passed away."+
    "\nWhen you are ready, click show answer to see the actual data."+
    "\nTo present, click the present button.");
}

//present
function present(){
    var p = document.getElementById("present");
    if(presentMode==true){
        presentMode=false;
        //console.log(presentMode);
        p.innerText="Present"
    }
    else{
        presentMode=true;
        //console.log(presentMode);
        p.innerText="Stop Present"
    }
}
//erasing all colors
function erase(){
    var squares = document.getElementsByClassName("square");
    //console.log(squares[length-1]);
    var i;
    for(i=0; i<squares.length;i++){
        (squares[i]).style.background = "lightcyan";}
    
        confirmedSelected = 0;
        healedSelected = 0;
        deathSelected = 0;

    var datas = document.getElementsByClassName("data");
    var j;
    for(j=0; j<datas.length;j++){
        (datas[j]).innerText = 0;}
}

// coloring squares
function selectSquare1(obj){
    if(obj.style.background != color){
    if(obj.style.background == "lightcyan" && color=="green"){
        obj.style.background = color;
        healedSelected +=1;}

    if(obj.style.background == "lightcyan" && color=="red"){
        console.log("red1")
        obj.style.background = color;
        confirmedSelected +=1;}
        

    if(obj.style.background == "lightcyan" && color=="black"){
        obj.style.background = color;
        deathSelected +=1;}

    if(obj.style.background == "red" && color=="green"){
    obj.style.background = color;
        healedSelected +=1;
        confirmedSelected -=1;}

    if(obj.style.background == "red" && color=="black"){
        obj.style.background = color;
        deathSelected +=1;
        confirmedSelected -=1;}
    
    if(obj.style.background == "green" && color=="black"){
        obj.style.background = color;
        deathSelected +=1;
        healedSelected -=1;}
    
    if(obj.style.background == "green" && color=="red"){
        obj.style.background = color;
        confirmedSelected +=1;
        healedSelected -=1;}

    if(obj.style.background == "black" && color=="red"){
        obj.style.background = color;
        confirmedSelected +=1;
        deathSelected -=1;}

    if(obj.style.background == "black" && color=="green"){
        obj.style.background = color;
        healedSelected +=1;
        deathSelected -=1;}
    
    if(obj.style.background == "red" && color=="lightcyan"){
        obj.style.background = color;
        confirmedSelected -=1;}
    
    if(obj.style.background == "green" && color=="lightcyan"){
        obj.style.background = color;
        healedSelected -=1;}

    if(obj.style.background == "black" && color=="lightcyan"){
        obj.style.background = color;
        deathSelected -=1;}}


	var conf = document.getElementById("confirmed");
    conf.innerText = confirmedSelected;
	var heal = document.getElementById("healed");
    heal.innerText = healedSelected;
	var dea = document.getElementById("death");
    dea.innerText = deathSelected;
    
    var conf1 = document.getElementById("confirmedData");
    conf1.innerText = confirmedSelected*scale;
    var heal1 = document.getElementById("healedData");
    heal1.innerText = healedSelected*scale;
    var dea1 = document.getElementById("deathData");
    dea1.innerText = deathSelected*scale;
}
function selectSquare2(obj){
    obj.style.backgroundColor = color;
}
 
//slider selecting days
var slider = document.getElementById("dayRange");
var outputDays = document.getElementById("days");
outputDays.innerHTML = slider.value;
slider.oninput = function() {
    outputDays.innerHTML = this.value;
    curDay = this.value;
    curConfirmed = (list[curDay-20][0]);
    curDeath = (list[curDay-20][2]);
    curHealed = (list[curDay-20][1]);
    curConfirmedSquare = Math.floor((curConfirmed)/scale);
    curHealedSquare =  Math.floor((curHealed)/scale);
    curDeathSquare =  Math.floor((curDeath)/scale);

    //text input
    var days = [[23,"On 23 January 2020, Wuhan and other cities in Hubei were placed under quarantine. Huoshenshan Hospital ('Mount Fire God Hospital'), is announced to be built in 10 days in response to the pandemic."],
    [26,"On 26 January 2020, hundreds of medical staff, equipment and food sent to Wuhan."],
    [27,"On 27 January 2020, the end of the Lunar New Year holiday, was pushed back to Feb 2nd. China indefinitely shuts schools in effort to control outbreak."],
    [28,"On 28 January 2020, thousands more medical workers sent to Wuhan."],
    [30,"On 30 January 2020, WHO declared the novel coronavirus outbreak (2019-nCoV) a PHEIC(Public Health Emergency of International Concern)."],
    [32,"On 1 Feburary 2020, member of Chinese Academy of Science leads team to support Wuhan."],
    [33,"On 2 Feburary 2020, China Central Bank carried out a reverse repurchase of 1.2 trillion RMB ($170B)"],
    [34,"On 3 Feburary 2020, Huoshenshan hospital began accepting patients. More hospitals built overnight."],
    [36,"On 5 Feburary 2020, diagnostic criteria expanded."],
    [37,"On 6 Feburary 2020, the construction of the Leishenshan hospital, another new hospital after Huoshenshan hospital ('Mount Thunder God Hospital') was completed."],
    [38,"On 7 Feburary 2020, Dr. Li Wenliang passed away. He was a whistleblower when his warnings were later shared publicly. Wuhan citizens placed flowers and blew whistles at Wuhan Central Hospital, where Dr. Li worked and passed, as a tribute to him."],
    [40,"On 9 Feburary 2020, another 3,187 medical workers sent to Hubei Province."],
    [41,"On 10 Feburary 2020, 19 provinces partner with 16 cities in Hubei for assistance."],
    [43,"On 12 Feburary 2020, Hubei Province incorporates diagnostic change."],
    [45,"On 14 Feburary 2020, Wuhan asks recovered patients to donate plasma."],
    [49,"On 18 Feburary 2020, the number of confirmed cases in Hubei Province reached the peak."],
    [50,"On 19 Feburary 2020, another 1,299 medical workers sent to Wuhan as city disinfects sewage."],
    [55,"On 24 Feburary 2020, China bans trade, consumption of wild animals, and postpones annual parliamentary meeting."],
    [57,"On 26 Feburary 2020, daily new cases outside China surpass those inside the country."],
    [60,"On 29 Feburary 2020, China-WHO joint investigation report on COVID-19 published."],
    [106,"On 15 April 2020, China issued revised death and case count."]]
    for(var i=0;i<days.length;i++){
    if(curDay==days[i][0]){
        var textbox = document.getElementById("dayInfo");
        textbox.innerText = days[i][1];
    }}
    if(presentMode==true){answer();}
}
//slider for sqaure size
var slider1 = document.getElementById("sizeRange");
slider1.oninput = function() {
    var sqaureSize = slider1.value;
    var squares = document.getElementsByClassName("square");
    for(var i=0; i<squares.length;i++){
        (squares[i]).style.width = String(sqaureSize)+"px";
        (squares[i]).style.height = String(sqaureSize)+"px";
        (squares[i]).style.margin = String(sqaureSize/3)+"px";
    }
}
//show answer button function
function answer(){
    console.log(curDay);
    console.log(curConfirmedSquare);
    console.log(curHealedSquare);
    console.log(curDeathSquare);
var saveconfirm = confirmedSelected;
var saveheal = healedSelected;
var savedeath = deathSelected;
    erase();
    var squares = document.getElementsByClassName("square");
    //console.log(squares[length-1]);
    var i;
    //color confirmed
    if(curConfirmedSquare>0){
    for(i=0; i<curConfirmedSquare;i++){
        (squares[i]).style.background = "red";}}
    //color healed
    if(curHealedSquare>0){
    for(i=curConfirmedSquare; i<curConfirmedSquare+curHealedSquare;i++){
        (squares[i]).style.background = "green";}}
    //color death
    if(curDeathSquare>0){
    for(i=curConfirmedSquare+curHealedSquare; i<curConfirmedSquare+curHealedSquare+curDeathSquare;i++){
        (squares[i]).style.background = "black";}}
    
    var conf = document.getElementById("confirmed1");
    conf.innerText = curConfirmedSquare;
    var heal = document.getElementById("healed1");
    heal.innerText = curHealedSquare;
    var dea = document.getElementById("death1");
    dea.innerText = curDeathSquare;

    var conf1 = document.getElementById("confirmedData1");
    conf1.innerText = curConfirmed;
    var heal1 = document.getElementById("healedData1");
    heal1.innerText = curHealed;
    var dea1 = document.getElementById("deathData1");
    dea1.innerText = curDeath;

    var conf3 = document.getElementById("confirmed");
    conf3.innerText = saveconfirm;
    var heal3 = document.getElementById("healed");
    heal3.innerText = saveheal;
    var dea3 = document.getElementById("death");
    dea3.innerText = savedeath;

    var conf4 = document.getElementById("confirmedData");
    conf4.innerText = saveconfirm*scale;
    var heal4 = document.getElementById("healedData");
    heal4.innerText = saveheal*scale;
    var dea14 = document.getElementById("deathData");
    dea14.innerText = savedeath*scale;
    
}

function colorOption(){
    var opt = document.getElementById("colorChosen").selectedIndex;
    console.log(opt);
    if(opt == 0){color = "red";}
    if(opt == 1){color = "green";}
    if(opt == 2){color = "black";}
    console.log(color);
  }

// Codes for the slideshow inspired and learned from w3schools How To SlideShow： https://www.w3schools.com/howto/howto_js_slideshow.asp 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}