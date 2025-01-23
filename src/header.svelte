<script>
import Box from "./lib/box.svelte";



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


    let githubLogo = `<img src="src/assets/GitHub-Mark-Light-120px-plus.png" width="50" height="50" class="githubLogo">`; //from githubs own website
</script>

<div id="header" class="centered">

    <a href="index.html" id="polylogoheader">
        <img src="src/assets/polylogo.png" id="polylogoheader" alt="poly logo">
    </a>

        <div id="headerDropDownGames" class="headerDropDown tooSmallForMobile">
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
                    <a href="https://po-ly.itch.io/yamanote" style="text-decoration: none !important">
                        <div id="yamanoteTraveler">
                            <img src="src/assets/yamanoteLogo.png" type="image/png" alt="yamanote traveler screenshot" id="yamanoteLogo">
                            <div style="display: block"> 
                                <p style="color:white; font-size:30pt; font-weight: 900; text-shadow: 1pt 1pt 2pt rgba(0, 0, 0, 1);">Released 2024</p>
                                <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22pt; font-weight:200;">Ride around the yamanote line and explore the wonders (of sorts) around tokyo</p>
                            </div>
                        </div>
                    </a>
            </div>
        </div>
        <div id="headerDropDownOpenSource" class="headerDropDown tooSmallForMobile">
            <a class="headerLink" id="headerLinkOpenSource" href="./index.html#opensource">Open Source Apps</a>
            <div id="headerDropDownOpenSourceContent">
                <div class="boxDivider">
                    <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="./all.html#discordgameboy" language={languages[0]}/>
                    <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="./all.html#alexa" language={languages[0]}/>
                    <Box title={"poly portfolio"} date={"2022-\n2024"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="./all.html#polyportfolio" language={languages[1]}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"scrypty"} date={"2021-\n2022"}  description={"clone, detect, compile, install from any repository, automatically"} icon={githubLogo} iconLink="https://github.com/polyllc/scrypty" link="./all.html#scrypty" language={languages[0]}/>
                    <Box title={"C++ Tester"} date={"2024"}  description={"simple C++ tester library"} icon={githubLogo} iconLink="https://github.com/polyllc/cpptester" link="./all.html#cpptester" language={languages[2]}/>
                    <Box title={"progflow"} date={"2021"}  description={"scripting for efficiency"} icon={githubLogo} iconLink="https://github.com/polyllc/progflow" link="./all.html#progflow" language={languages[2]}/>
                </div>
                <div class="boxDivider">
                    <Box title={"jump cutter revamped"} date={"2020"}  description={"cuts out silent audio from videos to shorten the length"} icon={githubLogo} iconLink="https://github.com/polyllc/jump-cutter-revamped" link="./all.html#jumpcutter" language={languages[2]}/>
                    <Box title={"disconnall"} date={"2021"}  description={"disconnects everyone from wifi around you!"} icon={githubLogo} iconLink="https://github.com/polyllc/disconnall" link="./all.html#disconnall" language={languages[2]}/>
                </div>
            </div>
        </div>
        
        <div id="headerDropDownDiscord" class="headerDropDown tooSmallForMobile">
            <a class="headerLink" id="headerLinkDiscord" href="./index.html#discordbots">Discord Bots</a>
            <div id="headerDropDownDiscordContent">
                <div class="boxDivider">
                    <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="./all.html#discordgameboy" language={languages[0]}/>
                    <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="./all.html#alexa" language={languages[0]}/>
                    <Box title={"voting bot"} date={"2020"}  description={"a simple voting bot"} icon="" iconLink="" link="./all.html#voting" language={languages[0]}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"log bot"} date={"2020"}  description={"logs a server to another created just for logging"} icon="" iconLink="" link="./all.html#log" language={languages[0]}/>
                    <Box title={"auto counter"} date={"2020"}  description={"auto counts in a channel and makes sure everyone is counting correctly"} icon="" iconLink="" link="./all.html#auto" language={languages[0]}/>
                </div>
            </div>
        </div>

        <div id="headerDropDownWebsites" class="headerDropDown tooSmallForMobile">
            <a class="headerLink" id="headerLinkWebsites" href="./index.html#websites">Websites</a>
            <div id="headerDropDownWebsitesContent">
                <div class="boxDivider">
                    <Box title={"polyllc.org"} date={"2017-\n2020"}  description={"the main website for poly"} icon="" iconLink="" link="./polyllc.html" language={languages[4]}/>
                    <Box title={"poly website"} date={"2017-\n2019"}  description={"a feature rich website, with videos, profiles, email and more"} icon="" iconLink="" link="./polywebsite.html" language={languages[3]}/>
                    <Box title={"PolyForums"} date={"2019"}  description={"a social media site with tags as the way to find new content"} icon="" iconLink="" link="./polyforums.html" language={languages[3]}/>
                </div>  
                <div class="boxDivider">
                    <Box title={"poly birthday games"} date={"2018"}  description={"simple games for poly's birthday"} icon="" iconLink="" link="./birthday.html" language={languages[0]}/>
                    <Box title={"poly portfolio"} date={"2022-\n2024"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="./index.html" language={languages[1]}/>
                </div>
            </div>
        </div>


        
</div>


<!-- todo
    make sure all fonts scale to the viewport
-->
<style>  


    #polylogoheader {
        height: 50px;
        padding: 4px;
        position: relative;
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

    #headerDropDownGamesContent  {
        overflow-y: scroll !important;
        max-width: 100vh;
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
        max-height: 20vh !important;
       
      
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

    #yamanoteTraveler{
        background-image: url("src/assets/yamanoteBg.png");
        background-size:cover;
        padding: 5.5%;
        display: flex;
        align-content: flex-start;
        box-shadow: 0 0 0pt black;
        border-radius: 15px;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        max-height: 20vh !important;
       
      
    }

    #yamanoteTraveler:hover {
        box-shadow: 0 0 15pt black;
        z-index: 4;
        padding: 6.5%;
        border-radius: 50px;
    }

    #yamanoteLogo {
        width: 330px; 
        height: 200px;
        object-fit: fit;
        margin:auto;
        filter:drop-shadow(0px 0px 2px black);
        padding-right: 20px;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    #yamanoteLogo:hover {
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
        max-height: 20vh !important;
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