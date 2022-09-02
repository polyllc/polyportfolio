<div id="header" class="centered">
        <div id="headerDropDownGames">
            <a class="headerLink" id="headerLinkGames" href="./games.html">Games</a>
            <div id="headerDropDownGamesContent">
                <div id="planeagement">
                    <img src="src/assets/planeagementlogo.png" type="image/png" alt="planeagement logo" style="width: 350px; filter:drop-shadow(0px 0px 10px black);">
                    <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22px; margin: auto; ">planeagement wow what a game now this is epic </p>
                </div>
                <div id="fdphysics">
                    <img src="src/assets/planeagementlogo.png" type="image/png" alt="planeagement logo" style="width: 350px; filter:drop-shadow(0px 0px 10px black);">
                    <p style="color:white; text-shadow: 0px 0px 10px black; font-size: 22px; margin: auto; ">planeagement wow what a game now this is epic </p>
                </div>
            </div>
        </div>
        <a class="headerLink" id="headerLinkOpenSource" href="./games.html">Open Source Apps</a>
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
        
        
    }
    .headerLink:hover{
        color:#fbc200 !important;
        
    }
    #header {
        background-color: #333; 
        box-shadow: 0px 3pt 10pt #000;
        overflow-x: hidden;
    }

    #headerDropDownGames:hover #headerDropDownGamesContent {
         opacity: 1;
         visibility: visible;
    }

    #headerDropDownGamesContent {
        display: block;
        position: absolute;
        z-index: 2;
        visibility: hidden;
        border-radius: 0% 0% 25px 25px;
        box-shadow: 0 5pt 10pt black;
        opacity: 0;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
    }



    .centered {
        align-content: center;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    #planeagement{
        background-image: url("src/assets/background.png");
        background-size:cover;
        padding: 5.5%;
        display: flex;
        align-content: flex-start;
    
    }

    #fdphysics{
        background-image: url("src/assets/fdphysicsbackground.png");
        background-size:cover;
        padding: 5.5%;
        display: flex;
        align-content: flex-start;
    
    }





</style>