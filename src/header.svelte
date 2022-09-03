<script>
import { each } from "svelte/internal";
import Box from "./lib/box.svelte";


    let opensourceapps = [
        {name: "discord-gameboy", date: "2020", description: "a gameboy emulator that's a discord bot"},
        {name: "alexa", date: "2020-2022", description: "alexa is a feature rich music discord bot, from voice commands, to playlists"},
        {name: "poly portfolio", date: "2022", description: "a portfolio of my works"},
        {name: "scrypty", date: "2021-2022", description: "clone, detect, compile, install from any repository, without the complicated steps"},
        {name: "disconnall", date: "2021", description: "disconnects everyone from wifi around you!"},
        {name: "progflow", date: "2021", description: "scripting for efficiency"},
        {name: "jump cutter revamped", date: "2020", description: "cuts out silent audio from vidoes to shorten the length"}
    ];

    let tempapps = [];

    let counter = 0;
</script>


<div id="header" class="centered">
        <div id="headerDropDownGames" class="headerDropDown">
            <a class="headerLink" id="headerLinkGames" href="./games.html">Games</a>
            <div id="headerDropDownGamesContent">
                    <a href="./planeagement.html" style="text-decoration: none !important;">
                        <div id="planeagement">
                            <img src="src/assets/planeagementlogo.png" type="image/png" alt="planeagement logo" id="planeagementLogo">
                            <div style="display: block">
                                <p style="color:white; font-size:30px; font-weight: 900;">Released 2020</p>
                                <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22px; font-weight:200;">Manage your planes as they travel back and forth from your airport to another, and make as much money as possible.</p>
                            </div>
                        </div>
                    </a>
                    <a href="./fdphysics.html" style="text-decoration: none !important;">
                        <div id="fdphysics">
                            <img src="src/assets/fdphysics logo.png" type="image/png" alt="fdphysics logo" id="fdphysicsLogo">
                            <div style="display: block;">
                                <p style="color:white; font-size:30px; font-weight: 900;">Released 2018</p>
                                <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22px; font-weight:200;">A 2d shooting showdown. With lots of physics.</p>
                            </div>
                        </div>
                    </a>
            </div>
        </div>
        <div id="headerDropDownOpenSource" class="headerDropDown">
            <a class="headerLink" id="headerLinkOpenSource" href="./games.html">Open Source Apps</a>
            <div id="headerDropDownOpenSourceContent">
                <div class="boxDivider">
                    <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"}/>
                    <Box title={"alexa"} date={"2020-2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"}/>
                    <Box title={"poly portfolio"} date={"2022"}  description={"a portfolio of my works"}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"scrypty"} date={"2020"}  description={"clone, detect, compile, install from any repository, automatically"}/>
                    <Box title={"disconnall"} date={"2021"}  description={"disconnects everyone from wifi around you!"}/>
                    <Box title={"progflow"} date={"2021"}  description={"scripting for efficiency"}/>
                </div>
            </div>
        </div>
    <img src="src/assets/polylogo.png" id="polylogoheader" alt="poly logo">
        <a class="headerLink" id="headerLinkDiscord" href="./games.html">Discord Bots</a>
        <a class="headerLink" id="headerLinkWebsites" href="./games.html">Websites</a>
</div>

<style>
    #polylogoheader {
        height: 50px;
        padding: 4px;
        position: absolute;
        margin-left: 1%;
        left: 10px;
        margin-bottom: 0%;
        margin-top: 0;
    }

    .headerLink{
        color: white;
        font-size: 40px;
        font-weight: 900;
        text-decoration: none;
        margin-left: 2%;
        margin-top: auto;
        margin-bottom: auto;
        transition: color 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
        overflow-wrap: normal;
        white-space: nowrap;
    }
    .headerLink:hover{
        color:#fbc200 !important;
        
    }
    #header {
        background-color: #333; 
        box-shadow: 0px 3pt 10pt #000;
        overflow-x: visible;
        padding: 0.2%;
        z-index: 2;
        position: sticky;
    }
  

    .headerDropDown {
        margin-left: 2%;
        margin-top: auto;
        margin-bottom: auto;
        inline-size: min-content;
    }
    
    .centered {
        align-content: center;
        justify-content: center;
        display: flex;
        align-items: center;
    }



    #headerDropDownGames:hover #headerDropDownGamesContent {
         opacity: 1;
         visibility: visible;
    }

    #headerDropDownGamesContent {
        max-width: 80vw;
        display: inline-block;
        position: absolute;
        z-index: 3;
        visibility: hidden;
        border-radius: 25px;
        
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }


    #planeagement{
        background-image: url("src/assets/background.png");
        background-size:cover;
        padding: 5.5%;
        display: flex;
        align-content: flex-start;
        box-shadow: 0 0 0pt black;
        border-radius: 15px;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    #planeagement:hover {
        box-shadow: 0 0 15pt black;
        z-index: 4;
        padding: 6.5%;
        border-radius: 50px;
    }

    #planeagementLogo {
        width: 350px; 
        filter:drop-shadow(0px 0px 2px black);
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    #planeagementLogo:hover {
        filter: drop-shadow(0px 0px 10px black);
        
    }

    #fdphysics{
        background-image: url("src/assets/fdphysicsbackground.png");
        background-size:cover;
        padding: 5.5%;
        display: flex;
        align-content: flex-start;
        box-shadow: 0 0 0pt black;
        border-radius: 15px;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        text-decoration: none !important;
    }

    #fdphysics:hover {
        box-shadow: 0 0 15pt black;
        z-index: 4;
        padding: 6.5%;
        border-radius: 50px;
        
    }

    #fdphysicsLogo {
        width: 350px; 
        filter:drop-shadow(0px 0px 2px black);
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    #fdphysicsLogo:hover {
        filter: drop-shadow(0px 0px 10px black);
        
    }






    #headerDropDownOpenSource:hover #headerDropDownOpenSourceContent {
         opacity: 1;
         visibility: visible;
    }

    #headerDropDownOpenSourceContent {
        max-width: 80vw;
        display: block;
        position: absolute;
        z-index: 3;
        visibility: hidden;
        border-radius: 25px;
        color: white;
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    
    .boxDivider {
        display: flex;
    }





</style>