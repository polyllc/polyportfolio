<script>
    import Header from "./header.svelte";

    var num = 0;
    var realnum = 0;
    var spining = 0;
    var option = "";
    var optionlink = "";
    var randomnum = Math.floor(Math.random() * 2000) + 1000;
function spin(){
    if(!spining){
    spining = 1;
    realnum = 0;
    randomnum = Math.floor(Math.random() * 5000) + 2000;
    var inter = setInterval(function(){
    document.getElementById("wheel").style.transform = "rotate(" + num + "deg)";
    num += 10;
    realnum += 10;
    if(num > 359){
        num = 0;
    }
    if(realnum > randomnum){
        spining = 0;
        clearInterval(inter);
        if(num > 0 && num <= 90){
            option = "Memorization";
            optionlink = "memorizationgame.html";
        }
        if(num > 90 && num <= 180){
            option = "Color Game";
            optionlink = "colorgame.html";
        }
        if(num > 180 && num <= 270){
            option = "Shop RPG: GUI Edition";
            optionlink = "shoprpggui.html";
        }
        if(num > 270 && num <= 359){
            option = 'Number Race';
            optionlink = "numberrace.html"
        }
        document.getElementById("prize").innerHTML = "You got " + option + "!<br><a href='/src/birthday/" + optionlink + "'>Click Here to Play</a>";
    }
        console.log(num);
    }, 0.1);
    }
}
</script>

<Header/>

<br><br><br>
<h1>This was once posted on the polyllc.org website from around July 2018 to August 2018</h1>
<br><br>
<h1>Spin the wheel</h1>
        <div id="wheeldiv">
        <div id='wheel'>
        <div id="o1" class="block">
            <p class="op">Shop RPG</p>
            </div>
            <div id="o2" class="block">
            <p class="op">Color Game</p>
            </div>
            <br>
            <div id="o3" class="block">
            <p class="op">Number Race</p>
            </div>
            <div id="o4" class="block">
            <p class="op">Memorization</p>
            </div>
            <br><br>
            <div class="clearfix"></div>
        </div><br>

            <div id="prizediv">
         <button on:click={spin}>Spin!</button>
       
        <h1 id="prize">
        
                </h1></div>    <div class="clearfix"></div>
        </div>
        <style>
            #wheel{
                width:300px;
                height:300px;
                margin-left: 10%;
                text-align: center;
                display: inline;
                float:left;
                border-radius: 50%;
                text-shadow: 0 0 5px #fff;
            }
            #o1{
                float: left;
                background-color: #00ff00;
                border-top-left-radius: 100%;
                width: 150px;
                height: 150px;
            }
            #o2{
                float: left;
                background-color: #ffff00;
                border-top-right-radius: 100%;
                width: 150px;
                height: 150px;
            }
            #o3{
                float: left;
                background-color: #ff0000;
                border-bottom-left-radius: 100%;
                width: 150px;
                height: 150px;
            }
            #o4{
                float: left;
                background-color: #0000ff;
                border-bottom-right-radius: 100%;
                width: 150px;
                height: 150px;
            }
            .clearfix{
                clear: both; 
            }
            .op{
                margin-top: 50%;
            }
            #triangle{
                width: 20px;
                height: 20px;
                margin-left: 51%;
                margin-top: 27%;
                border-right: solid 4px #000000;
                border-top: solid 4px #000000;
                transform: rotate(-45deg);
            }
            #wheeldiv{
                background-color: #444444;
                padding: 25px;
              
            }
            #prizediv{
                float:left;
                margin-left:25%;
                margin-top: 132px;
                color: white;
            } 
            body {
                background: black;
            }
            h1{
                color: white;
            }
        </style>