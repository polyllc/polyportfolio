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
        {name: "GMS2", color: "#3345ff"}
    ];
    
    //from itch's website
    let itchLogo = `<svg class="itchLogo" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 245.37069 220.73612"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="#fff" fill="#fff"/></svg>`;

    let githubLogo = `<svg height="50" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="50" data-view-component="true" class="githubLogo">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>`; //from githubs own website

    let bgGC = ["#1e00c1", "#412fa2", "#332fa2", "#0c06a5",  "#586be0", "#697be9", "#6495fb", "#8db6ff", "#73cde6", "#40d5ce", "#9dfddb", "#a1ffbf", "#fbc200"]; //background gradient colors

    $: bg = `
    background: ${bgGC[0]};
    `;  
    
    $: bg2 = css`
    background: linear-gradient(135deg, #252f89,#252f89,#101c7f,#212b6c,#262b6c,#24319d);
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
        let colorsAtOnce = 4;
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

    function handleScroll(e){
          console.log(e.srcElement.scrollTop);
        bg2 =  `background: linear-gradient(${e.srcElement.scrollTop/3}deg, #101c7f,#212b6c,#262b6c,#24319d,#252f89,#252f89,#20288b,#20358b);`
        bgControl++;
    }

    function arrowClick(e){
        window.scrollBy({
            top: window.innerHeight,
            behavior : "smooth"
        });
        console.log("click");
    }





</script>
<Header/>
<!--bro just use gradients in css-->
<div id="scrollContainer" on:scroll={handleScroll} style=" overflow-x:hidden; transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);">
    <div class="full" style="{bg} height: 100vh" >
        <div style="background-size: 10%; background-image:url('src/assets/polytiles2.png'); background-repeat:repeat; text-align: center;" class="full">
            <div style="background: rgba(0,0,0,0); text-align: center;" class="full">
                    <img src="src/assets/plogo.png" alt="PolyPortfolio" id="polytitle"><br>
                    <div id="arrows" on:click={arrowClick}>
                        <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a1" style={a1}>
                        <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a2" style={a2}>
                        <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a3" style={a3}>
                    </div>
                    
                    
            </div>
        </div>
    </div>
    <!--todo 
    make all of the sections have a description along with the title, and just a scrollable flex box with <Box/>s of the projects, like in the header to make it look nice
    -->
    <div class="{bg2}" style="min-height: 100vh;">
            <div style="background: rgba(0,0,0,0.5); padding-left: 10%;" class="full">
                <div id="gamesDiv">
                    <p style="font-size: 150px; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800;">Games</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black;">
                        Starting in 2018, two games were published under the company Poly LLC. The first one, released on December 30th, 2018, was fdphysics. An ambitious game, a two player, 2D, shooting showdown in a variety of maps and modes. The game later received a couple of updates.
                        The second game, released on June 6th, 2020, was planeagement. A more casual plane management game, where you manage your planes going from your airport to others. An update was also later released. To learn more about both games, click on their titles below.
                    </p>
                    <div style="display: flex; z-index: -100 !important;">
                        <Box title={"fdphysics"} date={"2018-2019"} description={"a two player, 2D, shooting showdown in a variety of maps and modes"} icon={itchLogo} iconLink="https://polyllc.itch.io/fdphysics" link="./fdphysics.html" language={languages[5]}/>
                        <Box title={"planeagement"} date={"2019-2020"} description={"a casual plane management game, where you manage your planes going from your airport to others"} icon={itchLogo} iconLink="https://polyllc.itch.io/planeagement" link="./planeagement.html" language={languages[5]}/>
                    </div>
                </div><hr style="margin-right:10%; margin-top: 4%;">
                <div id="openSourceDiv">
                    <p style="font-size: 150px; color: white; text-decoration: underline; text-decoration-color: blue; margin: 0%; padding-top: 2%; font-weight: 800;">Open Source</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black;">
                        Starting in 2020, I started to publish some of my code to GitHub. I initially made a file splitter that would split up files into smaller files, and stitch them back up. It ultimately did not work too well, but it was my first open source
                        project none the less. After that, I published my second, and much more polished, repository. It was jump-cutter-revamped, a clone of carykh's jump cutter in which he described it as a tool to get speed up video lectures. I wanted to 
                        challenge myself and see if I could make it in C++, rather than in Python like he did. It eventually turned out better than his, although there is a hit to accuracy. <br><br>I then started to publish some little programs such as disconnall, 
                        a WiFi disonnecting program, that send deauthentication packets to the router of everyone in the area, disconnecting them from the WiFi, and discord-gameboy, which is a gameboy emulator in Discord, which actually works pretty well. It uses
                        gifs as a way to show a sense of frame progression, and either chat messages or reactions as controls. <br><br>Soon after the success of discord-gameboy, I published alexa, which started out as a joke Discord bot, which would play despacito when
                        you asked "alexa, play despacito". But after finding a tutorial on making a music bot in Discord, I eventually started to evolve it into something much more. I added a ton of features, such as voice recognition, Twitch chat integration, 
                        Spotify integration, playlist support (where you create a playlist based on the songs in the queue) and much more.   
                    </p>
                    <div style="display: flex; z-index: -100 !important;">
                        <Box title={"fdphysics"} date={"2018-2019"} description={"a two player, 2D, shooting showdown in a variety of maps and modes"} icon={itchLogo} iconLink="https://polyllc.itch.io/fdphysics" link="./fdphysics.html" language={languages[5]}/>
                        <Box title={"planeagement"} date={"2019-2020"} description={"a casual plane management game, where you manage your planes going from your airport to others"} icon={itchLogo} iconLink="https://polyllc.itch.io/planeagement" link="./planeagement.html" language={languages[5]}/>
                    </div>
                </div>
            </div>
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
    }

    #polytitle {
        font-size: 6vh;
        color: black;
        width: 35vw;
        margin:auto;
        position:relative;
        margin-top: 12%;
        text-shadow: 0 0 5pt rgb(134, 41, 41);
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        min-width: 380px;
    }
    #polytitle:hover{
        width: 45vw;
        margin-top: 10%;
    }

    .full {
        min-height: 100vh; 
        max-width: 100vw;
        position: relative;

    }


    

</style>