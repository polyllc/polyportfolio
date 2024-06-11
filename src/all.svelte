<script>
    import Header from "./header.svelte";
    import Box from "./lib/box.svelte";
    import { css } from '@emotion/css';

    let languages = [
        {name: "Javascript", color: "#f1e05a"},
        {name: "Svelte", color: "#ff3e00"},
        {name: "C++", color: "#f34b7d"},
        {name: "PHP", color: "#4f5d95"},
        {name: "HTML&CSS", color: "#ccc"},
        {name: "GMS2", color: "#3345ff"},
        {name: "Java", color: "#b07219"}
    ];
    
    //from itch's website
    let itchLogo = `<svg class="itchLogo" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 245.37069 220.73612"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="#fff" fill="#fff"/></svg>`;

    let githubLogo = `<img src="src/assets/GitHub-Mark-Light-120px-plus.png" width="50" height="50" class="githubLogo">`; //from githubs own website

    let download = `<img src="src/assets/download.png" width="50" height="50" class="githubLogo">`; 

    let bgGC = ["#1e00c1", "#412fa2", "#332fa2", "#0c06a5",  "#586be0", "#697be9", "#6495fb", "#8db6ff", "#73cde6", "#40d5ce", "#9dfddb", "#a1ffbf", "#fbc200"]; //background gradient colors

    $: bg = `
    background: ${bgGC[0]};
    `;  
    

    let a1 = css`filter:brightness(100%);`;
    let a2 = css`filter:brightness(100%);`;
    let a3 = css`filter:brightness(100%);`;
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    let bControl = 0;
    function changeArrowColor(params) {
        a1 = `filter:brightness(${clamp(bControl, 0, 200) > 100 ? 100-(clamp(bControl, 0, 200)-100) : clamp(bControl, 0, 100)}%);`;
        a2 = `filter:brightness(${clamp(bControl-100, 100, 200) > 100 ? 100-(clamp(bControl-100, 0, 200)-100) : clamp(bControl-100, 0, 100)}%);`;
        a3 = `filter:brightness(${bControl >= 200 ? bControl-200 : clamp(-bControl+100, 0, 100)}%);`;
        bControl++;
        if(bControl >= 301){
            bControl = 0;
        }
    }

    let bgControl= 0;
    function changeBgColor() {
        let tempbg = `background: linear-gradient(45deg, ${bgGC[0]} 0% ${clamp(bgControl-250, 0, 100)}%, ${bgGC[1]} ${bgControl}%);`;
        bg = tempbg;
        bgControl+=2;
        if(bgControl >= 350){
            bgGC.unshift(bgGC.pop());
            bgControl = 0;
        }
    }

    
    setInterval(() => {
        changeArrowColor();
        changeBgColor();
    },15);

    //function handleScroll(e){
    //      console.log(e.srcElement.scrollTop);
    //    bg2 =  `background: linear-gradient(${e.srcElement.scrollTop}deg, #101c7f,#212b6c,#262b6c,#24319d,#252f89,#252f89,#20288b,#20358b);`
    //    bgControl++;
    //}

    function arrowClick(e){
        window.scrollBy({
            top: window.innerHeight,
            behavior : "smooth"
        });
        console.log("click");
    }

    let reactiveFlex = css`
    margin-right: 5%;
    margin-left: 5%;

    @media screen and (max-width: 1500px) {
        min-width: 50% !important;
    }

    @media screen and (max-width: 1100px) {
        min-width: 80% !important;
        margin-left: 10% !important;
    }
    `;


</script>

<Header/>

<div id="scrollContainer" style=" overflow-x:hidden; transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);">
    <div class="full" style="{bg} height: 100%; margin: 0;">
        <div style="background-size: 10%; background-image:url('src/assets/polytiles2.png'); background-repeat:repeat; text-align: center;" class="full">
            <div style="background: rgba(0,0,0,0); text-align: center;" class="full">
                    <p><span id="alltitle">all projects</span></p>
                    <div id="arrows" on:click={arrowClick}>
                        <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a1" style={a1}>
                        <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a2" style={a2}>
                        <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a3" style={a3}>
                    </div>
                    
            </div>
        </div>
    </div>

    <div id="opensource">
        <div align="center">
            <p style="font-size: 10vh; color: white; text-decoration: underline; text-decoration-color: blue; margin: 0%; padding-top: 2%; font-weight: 800;">Open Source</p><br><br>
        </div>

        <div class="reactiveFlex" id="scrypty">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">scrypty</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Universal repository compiler and installer. Take in any github, git or zip link to source code, and Scrypty will automagically find a way to compile it. Still in development.<br>
                    <b>Usage:</b> make sure you have all of these installed, or else some things may not compile: Visual Studio 2017+, CMake, g++, gcc, Java, go, gradle. All other instructions are on GitHub.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"scrypty"} date={"2021-\n2022"}  description={"clone, detect, compile, install from any repository, automatically"} icon={githubLogo} iconLink="https://github.com/polyllc/scrypty" link="" language={languages[0]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="polyportfolio">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #ff3e00; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">polyportfolio</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    A portfolio of my works. Initially started as a way to show off my works to colleges, it is now a way for me to look back and organize all of the projects I have made.<br>
                    <b>Usage:</b> node.js >v16 -> npm install -> npm run dev
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"poly portfolio"} date={"2022"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="" language={languages[1]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="disconnall">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f34b7d; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">disconnall</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Disconnects everyone from the wifi around you! Made in class, thankfully did not run it accidentally or the entire school wifi would be down, and many people I would imagine would not be very happy.<br>
                    <b>Usage:</b> install aircrack-ng -> compile with c++11 or higher. Rest of the instructions on GitHub.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"disconnall"} date={"2021"}  description={"disconnects everyone from wifi around you!"} icon={githubLogo} iconLink="https://github.com/polyllc/disconnall" link="" language={languages[2]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="progflow">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f34b7d; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">progflow</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Scripting for efficiency, a simple scripting language that uses pretty simple language. Its primary usage is to make very simple scripts, a replacement for node.js and c++ (what I use to use to make simple
                    ffmpeg scripts, some are linked down below!). It is not finished at all, but the code looks neat and it uses c++ templates (correctly?) which 99/100 times that alone will get you a job.<br>
                    <b>Usage:</b> Compile progflow.cpp with c++17 or higher, or compile with Visual Studio.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"progflow"} date={"2021"}  description={"scripting for efficiency"} icon={githubLogo} iconLink="https://github.com/polyllc/progflow" link="" language={languages[2]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="jumpcutter">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f34b7d; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">jump-cutter-revamped</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    It's like carykh's jumpcutter but faster and in C++ as a different method of extracting the data was used. Instead of having frame by frame stitching (slow), it just finds out the times stamps that 
                    are quiet and not quiet (fast, but wow is it complicated). It is 4.6x faster, although lossy.<br>
                    <b>Usage:</b> Compile jumpCutter.cpp c++11 or higher.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"jump cutter revamped"} date={"2020"}  description={"cuts out silent audio from videos to shorten the length"} icon={githubLogo} iconLink="https://github.com/polyllc/jump-cutter-revamped" link="" language={languages[2]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="bc2021">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #b07219; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">battlecode 2021</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Battlecode is a programming competition that is hosted by MIT, and every year, they make an entirely different game based on some sort of premise. This time, politics have hit Mars, and you must
                    take over your opponent's party by getting more votes than them or "influencing" (attacking) the enemy base, or enlightenment center.<br>
                    <b>Usage:</b> Make sure to have Java 8 installed as the default, then follow the <a href="https://github.com/battlecode/battlecode21-scaffold" style="color: #afffaf;">battlecode21-scaffold</a>
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"bc2021"} date={"2021"}  description={"my final submission "} icon={githubLogo} iconLink="https://github.com/polyllc/bc2021" link="" language={languages[6]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

    </div>


    <br><br>


    <div id="discordbots">
        <div align="center">
            <p style="font-size: 10vh; color: white; text-decoration: underline; text-decoration-color: #0458af; margin: 0%; padding-top: 2%; font-weight: 800;">Discord Bots</p><br><br>
        </div>

        <div class="reactiveFlex" id="discordgameboy">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">discord-gameboy</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    An emulator that uses discord as its method of input and output. It spits out frames to discord, and receives input from discord.
                    <b>Usage:</b> make sure you have Discord.JS v12 installed. All other instructions are on the GitHub.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="" language={languages[0]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="alexa">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">alexa</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    alexa is now your own music bot, usually playing despacito. But in reality, alexa is a fully featured music bot with lots of features that other music bots just don't have or are paid.
                    Plus of course with the charm of alexa in discord.<br>
                    <b>Usage:</b> make sure you have Discord.JS v12 installed. All other instructions are on the GitHub.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="" language={languages[0]} 
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="voting">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">voting bot</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    A simple voting bot<br>
                    <b>Usage:</b> not sure if this works anymore, most likely discord.js v11 or v12. %create [message] to create a poll.
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"voting bot"} date={"2020"}  description={"a simple voting bot"} icon={download} iconLink="/src/repository/poll.js" link="/src/repository/poll.js" language={languages[0]} 
                extraCss="{reactiveFlex}"/>
            </div>
        </div>
       
        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="log">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">log bot</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Logs an entire server to another, initially used for a backup like bot, but then used for more, uh, fun purposes.<br>
                    <b>Usage:</b> The process of setting up is too complicated, but here we go: type "log bot, s", then "log bot, r [server id]". After 30 seconds or so, restart the bot.
                    Then "log bot, do it [server id]", restart bot. "log bot, c [server id]", restart bot. "log bot, q [server id]", restart bot. Then finally, "log bot, invite me [server id]".
                    To make it start logging, type "log bot, start now [server id]".
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"log bot"} date={"2020"}  description={"logs a server to another created just for logging"} icon={download} iconLink="/src/repository/logbot.js" link="/src/repository/logbot.js" language={languages[0]} 
                extraCss="{reactiveFlex}"/>
            </div>
        </div>
        
        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="auto">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">auto counter</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Counts numbers in a counting channel, uses space dust to function.<br>
                    <b>Usage:</b> not sure if this works anymore, most likely discord.js v11 or v12. ;startat [channel id] to start the counting
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"auto counter"} date={"2020"}  description={"auto counts in a channel and makes sure everyone is counting correctly"} icon={download} iconLink="/src/repository/counter.js" link="/src/repository/counter.js" language={languages[0]} 
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

    </div>

<br><br>

    <div id="websites">
        <div align="center">
            <p style="font-size: 10vh; color: white; text-decoration: underline; text-decoration-color: #42f890; margin: 0%; padding-top: 2%; font-weight: 800;">Websites</p><br><br>
        </div>

        <div class="reactiveFlex" id="polyllc">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #ccc; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">polyllc.org</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    The main website for poly.<br>
                    <b>Usage:</b> it's a website, so just click the link!
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"polyllc.org"} date={"2017-\n2020"}  description={"the main website for poly"} icon="" iconLink="" link="/polyllc.html" language={languages[4]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="phpfiles">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #4f5d95; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">poly website</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    The main features of poly, called poly website. It's a collection of a bunch of features, so many that I can't fit them all here, so just check out the website for it!<br>
                    <b>Usage:</b> it's a website, so just click the link!
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"poly website"} date={"2017-\n2019"}  description={"a feature rich website, with videos, profiles, email and more"} icon="" iconLink="" link="/polywebsite.html" language={languages[3]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="polyforums">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #4f5d95; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">PolyForums</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    A never finished forum site, or actually social media site. It was designed to be able to follow tags and people, best of both worlds. There is a very simple gallery of images of PolyForums.<br>
                    <b>Usage:</b> it's a website, so just click the link!
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"PolyForums"} date={"2019"}  description={"a social media site with tags as the way to find new content"} icon="" iconLink="" link="/polyforums.html" language={languages[3]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="birthday">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #4f5d95; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">poly birthday games</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Games I made for Poly's birthday in 2018. They are all pretty simple js games that I made in about 3 days. Complete with a spinner wow!<br>
                    <b>Usage:</b> it's a website, so just click the link!
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"poly birthday games"} date={"2018"}  description={"simple games for poly's birthday"} icon="" iconLink="" link="/birthday.html" language={languages[0]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

    </div>


    <br><br>

    <div id="applets">
        <div align="center">
            <p style="font-size: 10vh; color: white; text-decoration: underline; text-decoration-color: #f96712; margin: 0%; padding-top: 2%; font-weight: 800;">Applets</p><br><br>
        </div>

        <div class="reactiveFlex" id="ytdlsound">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f34b7d; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">ytdl soundtrack</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    A soundtrack splitter that splits the soundtracks from youtube by silence and into separate files<br>
                    <b>Usage:</b> Compile with c++11 or higher, uses ytdl & ffmpeg, download with npm i -g ytdl (or any ytdl executable).
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"ytdl soundtrack"} date={"2020"}  description={"yt video soundtrack into separate files"} icon={download} iconLink="/src/repository/ytdl-soundtrack.cpp" link="/src/repository/ytdl-soundtrack.cpp" language={languages[2]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="ffmpegr">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f34b7d; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">ffmpeg repeater</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Repeats a file x amount of times with ffmpeg. This is game breaking code, absolutely the limits of our brains being used.<br>
                    <b>Usage:</b> Compile with c++11 or higher, make sure your ffmpeg binaries are installed
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"ffmpeg repeater"} date={"2020"}  description={"repeats video/audio x times"} icon={download} iconLink="/src/repository/ffmpeg-repeater.cpp" link="/src/repository/ffmpeg-repeater.cpp" language={languages[2]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

        <div class="reactiveFlex" id="ytsdl">
            <div class="reactiveWidth box" style="display: block !important; max-width: 80vw;
            min-width: 50vw;
            align-self: center;
            position: relative;
            align-content: center;">
                <p style="font-size: 6vh; color: white; text-decoration: underline; text-decoration-color: #f1e05a; margin: 0%; padding-top: 2%; font-weight: 800; margin-left: 2%">ytdl search downloader</p>
                <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; text-shadow: 0 0 15pt black; line-height: 160%;">
                    Searches youtube, downloads the first video, converts to mp3. Insane<br>
                    <b>Usage:</b> Uses ytdl-core, simpleyt, sanitize-filename, use npm to download. Not sure if it works anymore (many updates have come out after I make these things!)
                </p>
            </div>
            <div class="reactiveWidth" style="position: relative; margin: auto; margin-left: 1%; min-width: 80% !important;">
                <Box title={"ytsdl"} date={"2020"}  description={"search, download, convert youtube"} icon={download} iconLink="/src/repository/ytsdl.js" link="/src/repository/ytsdl.js" language={languages[0]}
                extraCss="{reactiveFlex}"/>
            </div>
        </div>

        <hr style="margin-right: 5%; margin-top: 2%; margin-bottom: 2%; margin-left: 5%;">

    </div>
</div>


<style>
    .arrow {
        width: 10vh;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        position: absolute;
    }

    #a1 {
        top: 72vh;
    }
    #a2 {
        top: 74.75vh;
    }
    #a3 {
        top: 77.5vh;
    }


    .relarrow {
        width: 10vh;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        position: relative;
        display:block;
    }

    #alltitle {
        font-size: 20vh;
        color: white;
        margin:auto;
        left: 0;
        right: 0;
        top: 0;
        position:absolute;
        margin-top: 17%;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        min-width: 380px;
        background: linear-gradient(45deg, rgb(251, 194, 0) 33%, #0f0 66%, #00f 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    #alltitle:hover{
        font-size: 25vh;
        margin-top: 15%;
    }

    .full {
        min-height: 102.5vh; 
        max-width: 100vw;
        position: relative;
        margin-top: -2% !important;
    }

    #scrollContainer {
        background: linear-gradient(135deg, #252f89,#252f89,#101c7f,#212b6c,#262b6c,#24319d);
        padding: 0;
        margin: 0;
    }

    .box {
        border-radius: 30px;
        margin: 0.5%;
        padding: 2%;
        box-shadow: 0 0 5pt black;
        background-color: rgba(51, 51, 51, 0.4);
        border: #333 2px solid;
        inline-size: min-content;
        line-height: 1;
        position: relative;
        transition: all 0.35s cubic-bezier(0.215, 0.610, 0.355, 1);
        margin-left:5%;
    }

    a:visited {
        color: #afffaf;
    }
    
    

</style>