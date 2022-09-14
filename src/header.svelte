<script>
import { each } from "svelte/internal";
import Box from "./lib/box.svelte";
import GithubLogo from "./lib/githubLogo.svelte";



    let languages = [
        {name: "Javascript", color: "#f1e05a"},
        {name: "Svelte", color: "#ff3e00"},
        {name: "C++", color: "#f34b7d"},
        {name: "PHP", color: "#4f5d95"},
        {name: "HTML&CSS", color: "#ccc"},
        {name: "GMS2", color: "#3345ff"}
    ]

    let tempapps = [];

    let counter = 0;


    let githubLogo = `<svg height="50" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="50" data-view-component="true" class="githubLogo">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>`; //from githubs own website
</script>


<div id="header" class="centered">
        <div id="headerDropDownGames" class="headerDropDown">
            <a class="headerLink" id="headerLinkGames" href="./index.html#games">Games</a>
            <div id="headerDropDownGamesContent">
                    <a href="./planeagement.html" style="text-decoration: none !important;">
                        <div id="planeagement">
                            <img src="src/assets/planeagementlogo.png" type="image/png" alt="planeagement logo" id="planeagementLogo">
                            <div style="display: block">
                                <p style="color:white; font-size:30pt; font-weight: 900;">Released 2020</p>
                                <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22pt; font-weight:200;">Manage your planes as they travel back and forth from your airport to another, and make as much money as possible.</p>
                            </div>
                        </div>
                    </a>
                    <a href="./fdphysics.html" style="text-decoration: none !important;">
                        <div id="fdphysics">
                            <img src="src/assets/fdphysics logo.png" type="image/png" alt="fdphysics logo" id="fdphysicsLogo">
                            <div style="display: block;">
                                <p style="color:white; font-size:30pt; font-weight: 900;">Released 2018</p>
                                <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22pt; font-weight:200;">A 2d shooting showdown. With lots of physics.</p>
                            </div>
                        </div>
                    </a>
            </div>
        </div>
        <div id="headerDropDownOpenSource" class="headerDropDown">
            <a class="headerLink" id="headerLinkOpenSource" href="./index.html#opensource">Open Source Apps</a>
            <div id="headerDropDownOpenSourceContent">
                <div class="boxDivider">
                    <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="" language={languages[0]}/>
                    <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="" language={languages[0]}/>
                    <Box title={"poly portfolio"} date={"2022"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="" language={languages[1]}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"scrypty"} date={"2021-\n2022"}  description={"clone, detect, compile, install from any repository, automatically"} icon={githubLogo} iconLink="https://github.com/polyllc/scrypty" link="" language={languages[0]}/>
                    <Box title={"disconnall"} date={"2021"}  description={"disconnects everyone from wifi around you!"} icon={githubLogo} iconLink="https://github.com/polyllc/disonnall" link="" language={languages[2]}/>
                    <Box title={"progflow"} date={"2021"}  description={"scripting for efficiency"} icon={githubLogo} iconLink="https://github.com/polyllc/progflow" link="" language={languages[2]}/>
                </div>
                <div class="boxDivider">
                    <Box title={"jump cutter revamped"} date={"2020"}  description={"cuts out silent audio from videos to shorten the length"} icon={githubLogo} iconLink="https://github.com/polyllc/jump-cutter-revamped" link="" language={languages[2]}/>
                </div>
            </div>
        </div>
        
        <div id="headerDropDownDiscord" class="headerDropDown">
            <a class="headerLink" id="headerLinkDiscord" href="./games.html">Discord Bots</a>
            <div id="headerDropDownDiscordContent">
                <div class="boxDivider">
                    <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="" language={languages[0]}/>
                    <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="" language={languages[0]}/>
                    <Box title={"voting bot"} date={"2020"}  description={"a simple voting bot"} icon="" iconLink="" link="" language={languages[0]}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"log bot"} date={"2020"}  description={"logs a server to another created just for logging"} icon="" iconLink="" link="" language={languages[0]}/>
                    <Box title={"auto counter"} date={"2020"}  description={"auto counts in a channel and makes sure everyone is counting correctly"} icon="" iconLink="" link="" language={languages[0]}/>
                </div>
            </div>
        </div>

        <div id="headerDropDownWebsites" class="headerDropDown">
            <a class="headerLink" id="headerLinkWebsites" href="./games.html">Websites</a>
            <div id="headerDropDownWebsitesContent">
                <div class="boxDivider">
                    <Box title={"polyllc.org"} date={"2017-\n2020"}  description={"the main website for poly"} icon="" iconLink="" link="" language={languages[4]}/>
                    <Box title={"poly website"} date={"2017-\n2019"}  description={"a feature rich website, with videos, profiles, email and more"} icon="" iconLink="" link="" language={languages[3]}/>
                    <Box title={"PolyForums"} date={"2019"}  description={"a social media site with tags as the way to find new content"} icon="" iconLink="" link="" language={languages[3]}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"poly birthday games"} date={"2018"}  description={"simple games for poly's birthday"} icon="" iconLink="" link="" language={languages[0]}/>
                    <Box title={"poly portfolio"} date={"2022"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="" language={languages[1]}/>
                </div>
            </div>
        </div>


        <a href="index.html" id="polylogoheader">
            <img src="src/assets/polylogo.png" id="polylogoheader" alt="poly logo">
        </a>
</div>


<!-- todo
    make sure all fonts scale to the viewport
-->
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
        background-color: rgba(30,30,30,0.5); 
        box-shadow: 0px 3pt 10pt #000;
        overflow-x: visible;
        padding: 0.2%;
        z-index: 4;
        position: fixed;
        width: 100vw;
    }
  

    .headerDropDown {
        margin-left: 2%;
        margin-top: auto;
        margin-bottom: auto;
        inline-size: min-content;
        z-index: 1;
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

    #headerDropDownGames {
        z-index: 4;
    }

    #headerDropDownGamesContent {
        max-width: 80vh;
        min-width: 50vw;
        display: inline-block;
        position: absolute;
        left: 25%;
        position: absolute;
        z-index: 3;
        visibility: hidden;
        border-radius: 25px;
        margin-left: auto;
        margin-right: auto;
        opacity: 0;
        margin-top: .2%;
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
        height: 162px;
        margin:auto;
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
        overflow-y: scroll;
        max-width: 100vh;
        display: block;
        position: absolute;
        left: 25%;
        z-index: 3;
        visibility: hidden;
        border-radius: 25px;
        color: white;
        opacity: 0;
        padding: .5%;
        margin-top: .2%;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        background-color: rgba(25, 25, 25, 0.8);
        min-width: min-content;
    }



    #headerDropDownDiscord:hover #headerDropDownDiscordContent {
         opacity: 1;
         visibility: visible;
    }

    #headerDropDownDiscordContent {
        overflow-y: scroll;
        max-width: 100vh;
        display: block;
        position: absolute;
        left: 25%;
        z-index: 3;
        visibility: hidden;
        border-radius: 25px;
        color: white;
        opacity: 0;
        padding: .5%;
        margin-top: .2%;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        background-color: rgba(25, 25, 25, 0.8);
        min-width: min-content;
    }
    

    #headerDropDownWebsites:hover #headerDropDownWebsitesContent {
         opacity: 1;
         visibility: visible;
    }

    #headerDropDownWebsitesContent {
        overflow-y: scroll;
        max-width: 100vh;
        display: block;
        position: absolute;
        left: 25%;
        z-index: 3;
        visibility: hidden;
        border-radius: 25px;
        color: white;
        opacity: 0;
        padding: .5%;
        margin-top: .2%;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        background-color: rgba(25, 25, 25, 0.8);
        min-width: min-content;
    }


    .boxDivider {
        display: flex;
        max-width: 100vw;
        min-width: 50vw;
        align-self: center;
        position: relative;
    }




</style>