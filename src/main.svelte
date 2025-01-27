<script>
    import Header from "./header.svelte";
    import Box from "./lib/box.svelte";
    import { css } from '@emotion/css';
    import GithubLogo from "./lib/githubLogo.svelte";

    let languages = [
        {name: "Javascript", color: "#f1e05a"},
        {name: "Svelte", color: "#ff3e00"},
        {name: "C++", color: "#f34b7d"},
        {name: "PHP", color: "#4f5d95"},
        {name: "HTML&CSS", color: "#ccc"},
        {name: "GMS2", color: "#3345ff"},
        {name: "Java", color: "#b07219"},
        {name: "me", color: "#fbc200"},
        {name: "Unity", color: "#ff9824"}
    ];
    
    //from itch's website
    let itchLogo = `<svg class="itchLogo" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 245.37069 220.73612"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="#fff" fill="#fff"/></svg>`;

    let githubLogo = `<img src="src/assets/GitHub-Mark-Light-120px-plus.png" width="50" height="50" class="githubLogo">`; //from githubs own website

    let polylogo = `<img src="src/assets/polyangle.png" width="50" height="50" class="githubLogo">`;

    let bgGC = ["#1e00c1", "#412fa2", "#332fa2", "#0c06a5",  "#586be0", "#697be9", "#6495fb", "#8db6ff", "#73cde6", "#40d5ce", "#9dfddb", "#a1ffbf", "#fbc200"]; //background gradient colors
    let bgGC2 = ["#24513d", "rgba(38,38,140,0.8)",  "#2f2f88", "rgba(38,78,49,0.8)"];

    $: bg = `
    background: ${bgGC[0]};
    `;  
    $: bg2 = `
    background: ${bgGC2[0]};
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
    let bgControl2= 0;
    function changeBgColor() {
        let tempbg = `background: linear-gradient(45deg, ${bgGC[0]} 0% ${clamp(bgControl-250, 0, 100)}%, ${bgGC[1]} ${bgControl}%);`;
        bg = tempbg;
        bgControl+=2;
        if(bgControl >= 350){
            bgGC.unshift(bgGC.pop());
            bgControl = 0;
        }

        tempbg = `background: linear-gradient(45deg, ${bgGC2[0]} 0% ${clamp(bgControl2-250, 0, 100)/10}%, ${bgGC2[1]} ${bgControl2}%);`;
        bg2 = tempbg;
        bgControl2 += .2;
        if(bgControl2 >= 350){
            bgGC2.unshift(bgGC2.pop());
            bgControl2 = 0;
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


    let a = Math.floor(Math.random() * 125) + 20;
    let b = Math.floor(Math.random() * 125) + 20;
    let c = Math.floor(Math.random() * 125) + 20;

    let randomBorder = css`
        &:hover {
            border: rgb(${a}, ${b}, ${c}, 1) 2px solid;
            background-color: rgb(${a-100}, ${b-100}, ${c-100}, 0.2);
        }
    `

    let reactiveFlex = css`
    margin-right: 5%;
    margin-left: 5%;

    @media screen and (max-width: 1100px) {
        min-width: 80% !important;
        margin-left: 10% !important;
        width: 300% !important; max-width: 999% !important; inline-size: fit-content !important;
    }
    `;

    let reactiveFlexWhite = css`background-color: rgba(111, 111, 111, 0.66) !important; border: #ccc 2px solid !important; margin-right: 5%;
    margin-left: 5%;
    
    @media screen and (max-width: 1100px) {
        min-width: 80% !important;
        margin-left: 10% !important;
        width: 300% !important; max-width: 999% !important; inline-size: fit-content !important;
    }`


    let reactiveContainer = css`
    @media screen and (max-width: 1100px) {
        display: block !important;
    }
    `


    

    $: currentDataNum = 1;

    let openPopup = (dataNum) => {
        currentDataNum = dataNum;
        popupBox();
    }

    import yamanoteTraveler from "./boxPopups/yamanoteTraveler.svelte";
    import Cpptester from "./boxPopups/cpptester.svelte";
    import Alexa from "./boxPopups/alexa.svelte";
    import YomichanRenshuu from "./boxPopups/yomichanRenshuu.svelte";
    import Scrypty from "./boxPopups/scrypty.svelte";
    import Progflow from "./boxPopups/progflow.svelte";
    import Polyportfolio from "./boxPopups/polyportfolio.svelte";

    $: popupElements = [
        {   component: yamanoteTraveler, 
            date: "2024",
            title: "yamanote traveler",
            icon: itchLogo,
            link: "https://po-ly.itch.io/yamanote",
            language: languages[8]
        },
        {   component: Cpptester, 
            date: "2024-2025-",
            title: "c++ tester",
            icon: githubLogo,
            link: "https://github.com/polyllc/cpptester",
            language: languages[2]
        },
        {
            component: Alexa, 
            date: "2020-2022",
            title: "alexa",
            icon: githubLogo,
            link: "https://github.com/polyllc/alexa",
            language: languages[0]
        },
        {
            component: YomichanRenshuu,
            date: "2024",
            title: "yomichan renshuu",
            icon: githubLogo,
            link: "https://github.com/polyllc/yomichan-renshuu",
            language: languages[0]
        },
        {
            component: Scrypty,
            date: "2021-2022",
            title: "scrypty",
            icon: githubLogo,
            link: "https://github.com/polyllc/scrypty",
            language: languages[0]
        },
        {
            component: Progflow,
            date: "2021",
            title: "progflow",
            icon: githubLogo,
            link: "https://github.com/polyllc/progflow",
            language: languages[2]
        },
        {
            component: Polyportfolio,
            date: "2022-2025-",
            title: "poly portfolio",
            icon: githubLogo,
            link: "https://github.com/polyllc/polyportfolio",
            language: languages[1]
        }
    ];

    $: getComponent = () => {
        return popupElements[currentDataNum].component;
    }

    $: getDate = () => {
        return popupElements[currentDataNum].date;
    }

    $: getTitle = () => {
        return popupElements[currentDataNum].title;
    }

    $: getIcon = () => {
        return popupElements[currentDataNum].icon;
    }


    $: getLink = () => {
        return popupElements[currentDataNum].link;
    }

    $: getLanguage = () => {
        return popupElements[currentDataNum].language;
    }


    let popupBoxDisplay = "display: none";
    let popupBox = () => {
        if (popupBoxDisplay === "display: none") {
            popupBoxDisplay = "display: block";
        }
        else {
            popupBoxDisplay = "display: none";
        }
    }
</script>
<Header/>

<div id="scrollContainer" style=" overflow-x:hidden; transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);">
    <div class="full" style="{bg} height: 100vh" >
        <div style="background-size: 10%; background-image:url('src/assets/polytiles2.png'); background-repeat:repeat; text-align: center;" class="full">
            <div style="background: rgba(0,0,0,0); text-align: center;" class="full">
                    <img src="src/assets/plogo.png" on:click={arrowClick} alt="PolyPortfolio" id="polytitle"><br>
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
    
</div>

<div id="popup" class="animate" style="{popupBoxDisplay}">
    <Box title={getTitle()} date={getDate()} description="" icon={getIcon()} language={getLanguage()} iconLink={getLink()}
    extraCss={css`inline-size: unset !important; background: rgba(51, 51, 51, 0.95) !important; position: fixed !important; max-height: 75% !important; z-index: 999 !important; left: -25%; top: -25%; min-width: 50% !important; width: 70% !important; transform: translate(50%, 50%); overflow-y: scroll !important;`}>
        <button on:click={popupBox} style="float: right; background: none; border: none; color: white; font-size: 24pt; margin-top: -4%;">X</button>
        <svelte:component this={getComponent()}/>
    </Box>  
</div>

<div style="" id="imgbackground">
    <div id="overground" style="{bg2}">

    <div class="boxHolder {randomBorder}" id="entireBoxHolder">
        <div class="boxDivider {reactiveContainer}" id="about">
            <Box id="about" title={"about"} date={"2017-\n2024"} description="Welcome to my portfolio! This is a collection of works from years 2017 to 2024. They vary in quality as well as in scale, but I do hope you look around." 
            icon={polylogo} language={languages[7]} extraCss={reactiveFlexWhite} />

            <Box id="games" title={"games"} date={"2017-\n2024"} description="I've made a couple of games back in my time, and even published them. The first one in 2018, fdphysics, a 2d platform shooter/fighting game, and the second in 2020, planeagement, a 
            strategy based plane management game." 
            icon={polylogo} language={languages[7]} extraCss={reactiveFlexWhite} />

            <Box id="fdphysics" title={"fdphysics"} date={"2018-2019"} description={"a two player, 2D, shooting showdown in a variety of maps and modes"} 
            icon={itchLogo} iconLink="https://polyllc.itch.io/fdphysics" link="./fdphysics.html" type="Game" language={languages[5]} extraCss="{reactiveFlex}"/>

        </div>  

        <div class="boxDivider {reactiveContainer}">
            <Box id="planeagement" title={"planeagement"} date={"2019-2020"} description={"a casual plane management game, where you manage your planes going from your airport to others"} 
            icon={itchLogo} iconLink="https://polyllc.itch.io/planeagement" link="./planeagement.html" language={languages[5]} type="Game" extraCss="{reactiveFlex}"/>

            <Box id="yamanote" title={"yamanote traveler"} date={"2024"} description={"a two player, 2D, shooting showdown in a variety of maps and modes"} 
            icon={itchLogo} iconLink="https://po-ly.itch.io/yamanote"  language={languages[8]} extraCss="{reactiveFlex}" type="Game" onClick={() => {openPopup(0);}}/>

            <Box id="openSource" title={"open source"} date={"2019-\n2024"} description="Here is a small list of the various open source programs I've made over the years. All of them are available on GitHub." 
            icon={polylogo} language={languages[7]} link={"/"} extraCss={reactiveFlexWhite}/>
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="cpptester" title={"C++ Tester"} date={"2024"}  description={"simple C++ tester library"} icon={githubLogo} iconLink="https://github.com/polyllc/cpptester"
             language={languages[2]} type="Open Source Project" extraCss="{reactiveFlex}" onClick={() => {openPopup(1);}}/>

            <Box id="alexa" title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} 
            iconLink="https://github.com/polyllc/alexa" onClick={() => {openPopup(2);}} language={languages[0]} type="Open Source Project, Discord Bot" extraCss="{reactiveFlex}"/>

            <Box id="yomichanRenshuu" title={"yomichan-renshuu"} date={"2024"}  description={"add words to your renshuu schedules from the popular yomichan extension"} icon={githubLogo}
             iconLink="https://github.com/polyllc/yomichan-renshuu" onClick={() => {openPopup(3);}} language={languages[0]} type="Open Source Project" extraCss="{reactiveFlex}"/>
            
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="scrypty" title={"scrypty"} date={"2021-\n2022"}  description={"clone, detect, compile, install from any repository, automatically"} icon={githubLogo} 
            iconLink="https://github.com/polyllc/scrypty" onClick={() => {openPopup(4);}} language={languages[0]} type="Open Source Project" extraCss="{reactiveFlex}"/>
         
            <Box id="progflow" title={"progflow"} date={"2021"}  description={"scripting for efficiency"} icon={githubLogo} iconLink="https://github.com/polyllc/progflow" 
            onClick={() => {openPopup(5);}} language={languages[2]} type="Open Source Project" extraCss="{reactiveFlex}"/>

            <Box id="polyPortfolio" title={"poly portfolio"} date={"2022-\n2024"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" 
            onClick={() => {openPopup(6);}} language={languages[1]} type="Open Source Project, Website" extraCss="{reactiveFlex}"/>
            
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="jumpCutter" title={"jump cutter revamped"} date={"2020"}  description={"cuts out silent audio from videos to shorten the length"} icon={githubLogo} 
            iconLink="https://github.com/polyllc/jump-cutter-revamped" link="./all.html#jumpcutter" language={languages[2]} type="Open Source Project" extraCss="{reactiveFlex}"/>
          
            <Box id="disconnall" title={"disconnall"} date={"2021"}  description={"disconnects everyone from wifi around you!"} icon={githubLogo} iconLink="https://github.com/polyllc/disconnall" 
            link="./all.html#disconnall" language={languages[2]} type="Open Source Project" extraCss="{reactiveFlex}"/>

            <Box id="competitiveProgramming" title={"competitive programming"} date={"2020-\n2024"} description="All of my competitive programming entries, pretty much all MIT Battlecode." 
            icon={polylogo} language={languages[7]} link={"/"} extraCss={reactiveFlexWhite} />
            
            
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="bc2025" title={"battlecode 2025"} date={"2025"}  description={"my team's final submission "} icon={githubLogo} 
            iconLink="https://github.com/polyllc/bc2025" link="" language={languages[6]} type="Competitive Programming" extraCss="{reactiveFlex}"/>

            <Box id="bc2024" title={"battlecode 2024"} date={"2024"}  description={"my team's final submission "} icon={githubLogo} 
            iconLink="https://github.com/polyllc/bc2024" link="" language={languages[6]} type="Competitive Programming" extraCss="{reactiveFlex}"/>

            <Box id="bc2023" title={"battlecode 2023"} date={"2023"}  description={"my final submission "} icon={githubLogo} iconLink="https://github.com/polyllc/bc2023" 
            link="" language={languages[6]} type="Competitive Programming" extraCss="{reactiveFlex}"/>
            
            
            
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="bc2022" title={"battlecode 2022"} date={"2022"}  description={"my final submission "} icon={githubLogo} iconLink="https://github.com/polyllc/bc2022" 
            link="" language={languages[6]} type="Competitive Programming" extraCss="{reactiveFlex}"/>

            <Box id="bc2021" title={"battlecode 2021"} date={"2021"}  description={"my final submission "} icon={githubLogo} iconLink="https://github.com/polyllc/bc2021" 
            link="" language={languages[6]} type="Competitive Programming" extraCss="{reactiveFlex}"/>

            <Box id="websites" title={"websites"} date={"2017-\n2024"} description="Websites made for various purposes, like this one (portfolio), or polyllc.org (my old website), or poly website (user driven content delivery site)." 
            icon={polylogo} language={languages[7]} link={"/"} extraCss={reactiveFlexWhite} />
            
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="polyllc" title={"polyllc.org"} date={"2017-\n2020"}  description={"the main website for poly, click for a history of the website in real time."} icon="" 
            iconLink="" link="./polyllc.html" language={languages[4]} type="Website" extraCss="{reactiveFlex}"/>

            <Box id="polyWebsite" title={"poly website"} date={"2017-\n2019"}  description={"a feature rich website, with videos, profiles, email and more"} icon="" 
            iconLink="" link="./polywebsite.html" language={languages[3]} type="Website" extraCss="{reactiveFlex}"/>
            
            <Box id="polyForums" title={"PolyForums"} date={"2019"}  description={"a social media site with tags as the way to find new content"} icon="" iconLink="" 
            link="./polyforums.html" language={languages[3]} type="Website" extraCss="{reactiveFlex}"/>
            

        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="polyBirthday" title={"poly birthday games"} date={"2018"}  description={"simple games for poly's birthday"} icon="" iconLink=""
            link="./birthday.html" language={languages[0]} type="Website, Game" extraCss="{reactiveFlex}"/>

            <Box id="discordBots" title={"discord bots"} date={"2020-\n2024"} description="Random discord bots. Some actually useful!" 
                icon={polylogo} language={languages[7]} link={"/"} extraCss={reactiveFlexWhite} />
            
            <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} 
                iconLink="https://github.com/polyllc/alexa" link="./all.html#alexa" language={languages[0]} type="Open Source Project, Discord Bot" extraCss="{reactiveFlex}"/>
            
        </div>

        <div class="boxDivider {reactiveContainer}">
            <Box id="discordGameboy" title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="./all.html#discordgameboy"
                 language={languages[0]} type="Open Source Project, Discord Bot" extraCss="{reactiveFlex}"/>

            <Box id="logBot" title={"log bot"} date={"2020"}  description={"logs a server to another created just for logging"} 
            icon="" iconLink="" link="./all.html#log" language={languages[0]} type="Discord Bot" extraCss="{reactiveFlex}"/>
            

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
        display:block;
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

    
    .boxDivider {
        display: flex;
        max-width: 100vw;
        min-width: 50vw;
        align-self: center;
        position: relative;
    }

    .boxHolder {
        border-radius: 30px;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 2%;
        z-index: 3;
        margin-left: 2%;
        margin-right: 2%;
        box-shadow: 0 0 5pt black;
        background-color: rgba(24, 24, 24, 0.55);
        border: #333 2px solid;
        display: block;
        min-width: 28%;
        max-width: 120%;
        line-height: 1;
        position: relative;
        transition: all 0.75s cubic-bezier(0.215, 0.610, 0.355, 1);

    }

    #imgbackground {
        background: linear-gradient(135deg, #24513d 0%, rgba(40,40,100,1) 120%);
        background-image: url("src/assets/polytiles2.png");
        border-radius: 30px;
        background-repeat: repeat;
        background-size: 10%;
        padding: 2%;
    }

    #overground {
        border-radius: 60px;
        padding: 2%;
    }
    
    #entireBoxHolder {
        background: rgba(180, 180, 180, 0.1);
    }

    /* #popupd {
        display: flex;
        border-radius: 30px;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 2%;
        z-index: 30;
        margin-left: 2%;
        margin-right: 2%;
        box-shadow: 0 0 5pt black;
        background-color: rgba(24, 24, 24, 0.95);
        border: #333 2px solid;
        min-width: 92%;
        align-self: center;
        max-width: 92%;
        line-height: 1;
        min-height: 50%;
        position: fixed;
        transform: translateX(50%) translateY(50%);
        top: 0%;
        left: -48%;
        transition: all 0.75s cubic-bezier(0.215, 0.610, 0.355, 1);

    } */

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

    .animate {
        transition: all 0.35s cubic-bezier(0.215, 0.610, 0.355, 1);
    }

    #popup {
        display: block;
        position: absolute;
        margin-top: -5%;
    }

</style>