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
        {name: "GMS2", color: "#3345ff"}
    ];
    
    //from itch's website
    let itchLogo = `<svg class="itchLogo" xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 245.37069 220.73612"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" color="#fff" fill="#fff"/></svg>`;

    let githubLogo = `<img src="src/assets/GitHub-Mark-Light-120px-plus.png" width="50" height="50" class="githubLogo">`; //from githubs own website

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





</script>
<Header/>
<!--bro just use gradients in css-->
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
    <div class="{bg2}" style="min-height: 100vh;">
        <div style="background: rgba(0,0,0,0.5); padding-left: 10%;" class="full">
                <div>
                    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800;">About</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black; line-height: 160%;">
                        &emsp;Hey! My name is Poly, and welcome to my portfolio! This portfolio is a collection of projects that I have finished (or worked on) over the years since 2017. I started to program when I was eight in Scratch. My dad was watching a TED talk
                        about this new programming language made by MIT just for kids. He installed it on our family computer, and I just started to click the blocks together. I had no idea what I was doing, but something was happening on the screen, so I didn't care.
                        I gave up like a month after being introduced, but later when I was ten, people of course wanted to find any way to get games on their school computers, and I introduced them to Scratch. They instantly fell in love with it (not the programming, 
                        the games of course), and would sit on it 24/7 (well at least in school). This prompted my return to Scratch. I then made upwards of ten or twenty games when I was ten and eleven. Most of them did really badly, but one game in particular, was my
                        favorite. It was called The Adventures of Stick Man, and was I proud of it. It was a simple platformer, but it was complete. Complete with levels, gameplay(!!!), leaderboards and more. I was so proud, I even told the people at a hair salon 
                        when my hair was being cut. I eventually moved on from block coding, to text coding. And to help publish my new games that weren't going to be on Scratch, I made a company.
                        <br><br>&emsp;I initially started up as Poly under the company Poly LLC, and my first project at Poly LLC
                        was to make a game. I started with a Geometry Dash style game, which I extensively developed over a year, with multiple notebooks filled with ideas. I bought a game engine called GameMaker Studio 2, and started to tinker around in it.
                        I eventually made my first prototype of my game, which was unbelievably horrible. But by my standards when I was eleven, it was magical. I had just made crudely drawn pictures and programmed a bit with the worst spaghetti code possible,
                        but it was my drawings and my code, all working. I worked on that for a long time, but nothing came out of it. <br><br>&emsp;In the meantime, I made my first website. Mind you, this was HTML 101 basic website, with awful color pairings and misaligned
                        text, but yet again, it was my website, available through the very same link you're using to see this website. <br><br>&emsp;While on vacation, I bought this book on PHP and MySQL, and after reading it, my multifunction website (that has no name other
                        than poly, it's called poly website under the website section) was dreamed up and created. I had put at least 500 hours into making that website, and it took up my most of my free time when I was twelve. But the hours I would spend with my friends
                        playing around on that website were of course the best. I partly made that website for them, so we could have fun on it. After a while, I got busy with other things, and I stopped maintaining the website, until I had to shut it down because of 
                        certain concerns.<br><br>&emsp;Anyways, most everything below this is well documented, so if you want to learn more about this website or the games that I made for Poly LLC, scroll on down and click the button. 
                    </p>
                </div>
                
                <hr style="margin-right:10%; margin-top: 4%;">

                <div id="games">
                    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #9043e2; margin: 0%; padding-top: 2%; font-weight: 800;">Games</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black; line-height: 160%;">
                        &emsp;Starting in 2018, two games were published under the company Poly LLC. The first one, released on December 30th, 2018, was fdphysics. An ambitious game, a two player, 2D, shooting showdown in a variety of maps and modes. The game later received a couple of updates.
                        The second game, released on June 6th, 2020, was planeagement. A more casual plane management game, where you manage your planes going from your airport to others. An update was also later released. This description is very short because of the very extensive documentation
                        that is in the website. To learn more about both games, click on their titles below.
                    </p>
                    <div style="display: flex; z-index: -100 !important;" id="gamesDiv">
                        <Box title={"fdphysics"} date={"2018-2019"} description={"a two player, 2D, shooting showdown in a variety of maps and modes"} icon={itchLogo} iconLink="https://polyllc.itch.io/fdphysics" link="./fdphysics.html" language={languages[5]}/>
                        <Box title={"planeagement"} date={"2019-2020"} description={"a casual plane management game, where you manage your planes going from your airport to others"} icon={itchLogo} iconLink="https://polyllc.itch.io/planeagement" link="./planeagement.html" language={languages[5]}/>
                    </div>
                </div>
                
                <hr style="margin-right:10%; margin-top: 4%;">

                <div id="opensource">
                    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: blue; margin: 0%; padding-top: 2%; font-weight: 800;">Open Source</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black; line-height: 160%;">
                        &emsp;Starting in 2020, I started to publish some of my code to GitHub. I initially made a file splitter that would split up files into smaller files, and stitch them back up. It ultimately did not work too well, but it was my first open source
                        project none the less. After that, I published my second, and much more polished, repository. It was jump-cutter-revamped, a clone of carykh's jump cutter in which he described it as a tool to get speed up video lectures. I wanted to 
                        challenge myself and see if I could make it in C++, rather than in Python like he did. It eventually turned out better than his, although there is a hit to accuracy. <br><br>&emsp;I started to publish some little programs such as disconnall, 
                        a WiFi disonnecting program, that sends deauthentication packets to the router of everyone in the area, disconnecting them from the WiFi, and discord-gameboy, which is a gameboy emulator in Discord, which actually works pretty well. It uses
                        gifs as a way to show a sense of frame progression, and either chat messages or reactions as controls. <br><br>&emsp;Soon after the success of discord-gameboy, I published alexa, which started out as a joke Discord bot, which would play despacito when
                        you asked "alexa, play despacito". But after finding a tutorial on making a music bot in Discord, I eventually started to evolve it into something much more. I added a ton of features, such as voice recognition, Twitch chat integration, 
                        Spotify integration, playlist support (where you create a playlist based on the songs in the queue) and much more.<br><br>&emsp;
                        I had always wanted to make a scripting language (rather than programming, scripting would be best defined as a shortcut programming language, rather than one to create apps/programs), and I attempted to do so with ProgFlow. It is my best C++ code
                        yet, and it had extreme ambition, which has yet to be achieved. But it is probably the code I am most proud of because it looks extremely complicated, but actually is easy to read. <br><br>&emsp;
                        My most recent project is Scrypty. Scrypty is designed to be an automatic repository compiler and installer, by looking at the files and make an estimated guess on how to compile it. Its vision is now much more broad. With the introduction
                        of ScryptyFiles, everything can be defined in the file of how it's compiled, and for what system too. With automatic compile tool installation (so the end user doesn't have to) and a web interface (by electron) in the works, it will hopefully
                        bring open source out of the developer community, and into the hands of everyone, no matter how little or much they know about compiling something. <br><br>&emsp;
                        Open source to me is extremely important. It's a massive community of developers that contribute their time and knowledge just for the betterment of programs. They might be interested in the program, or they might want to see it be 
                        developed in the best way it can be, but it's clear to me that it is a loving community, in which all they want to do, is to spread their code to everyone, without thinking about money or fame or recognition (even though pull requests
                        have the developer name in them, most end users only know the master branch owner's name). 
                        <br><br>&emsp;Of course, there are way more programs that I've made over the years than just these 7, but these are the ones that I wanted to share on Github, and most of the other ones are not even close to be finished, at all, no
                        matter how good the code looks. 
                    </p>
                    <div id="openSourceDiv">
                        <div class="reactiveFlex">
                            <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="./all.html#discordgameboy" language={languages[0]}/>
                            <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="./all.html#alexa" language={languages[0]}/>
                            <Box title={"poly portfolio"} date={"2022"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="./all.html#polyportfolio" language={languages[1]}/>
                        </div>
                        <div class="reactiveFlex">
                            <Box title={"scrypty"} date={"2021-\n2022"}  description={"clone, detect, compile, install from any repository, automatically"} icon={githubLogo} iconLink="https://github.com/polyllc/scrypty" link="./all.html#scrypty" language={languages[0]}/>
                            <Box title={"disconnall"} date={"2021"}  description={"disconnects everyone from wifi around you!"} icon={githubLogo} iconLink="https://github.com/polyllc/disconnall" link="./all.html#disconnall" language={languages[2]}/>
                            <Box title={"progflow"} date={"2021"}  description={"scripting for efficiency"} icon={githubLogo} iconLink="https://github.com/polyllc/progflow" link="./all.html#progflow" language={languages[2]}/>
                        </div>
                        <Box title={"jump cutter revamped"} date={"2020"}  description={"cuts out silent audio from videos to shorten the length"} icon={githubLogo} iconLink="https://github.com/polyllc/jump-cutter-revamped" link="./all.html#jumpcutter" language={languages[2]}/> 
                    </div>
                </div>


                <hr style="margin-right:10%; margin-top: 4%;">

                <div id="discordbots">
                    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #687be8; margin: 0%; padding-top: 2%; font-weight: 800;">Discord Bots</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black; line-height: 160%;">
                        &emsp;I started to make Discord bots during the start of the pandemic (I had made some before, but they were very basic and not worth mentioning) when I had a lot of spare time and I would mostly spend my time on Discord talking to my friends.
                        Since I spent so much time on Discord, I thought "why not? I'll make some discord bots".<br><br>
                        &emsp;The first bot I made during this time was @everyone bot. It essentially sent a message every x seconds, not very useful, but I thought it was funny because people didn't like when you pinged them.<br><br>
                        &emsp;The second bot was far more advanced. Alexa started as a alexa, play despacito bot, where if you'd type in alexa, play despacito in chat and you were in a voice channel, well you can guess what happened after. Eventually, I found this
                        article online on how to make a music bot in Discord, so I started to replace alexa, play despacito with the music bot, and eventually renamed it to alexa. Over the two years, I gradually added functionality such as playlist support, where 
                        you could save the queue of music on Discord to a playlist stored on a local database, Spotify support, where it'd import songs from a Spotify playlist or just a Spotify link, Twitch chat support, where Twitch chat would request songs to
                        be added to the queue, and many, many more. Sadly, it does not work today as Discord, of course, had to change yet again how bots work, so it won't work with the latest Discord.JS version (v12 works!).<br><br>
                        &emsp;During 2020 as well, I was, well, bored. To fill that boredom, I used to play games. I would try and emulate as many different systems as possible to a point where that got boring. So I thought "hey, what if I play this on Discord?".
                        That's how discord-gameboy came alive. It's a pretty simple concept, use Javascript canvas as a "screen" for a gameboy emulator, and post that to a Discord chat. And use chat messages or react emojis to control the game. Of course, all concepts
                        are easy (except rocket science), but in practice, gameboy emulation in Javascript is hard. Thankfully, I didn't have to do that because someone already did it for me. So it was up to me to attach it to discord and make it run properly. And it 
                        does! You can even have gifs for the game and play with your friends where you all control the game. I thought of expanding it to all Javascript based emulators and have a system where you could upload roms (that you own) to the server, and then
                        anyone in the server could browse what games are on them and this huge online thing for multiplayer, but then I realised "wow, that is the easiest way to get sued", so that idea had to get scratched. Currently (probably), it only works on Discord.JS v12.
                        <br><br>&emsp;The rest of the bots are not that impressive. They were all simple bots to serve a simple purpose. Voting bot is just that, it set up a poll, and people would vote on it. That's it. Log bot on the other hand is a bit more complicated. So, I 
                        was in this Discord server that I was co-owner of, and I thought "what if I just made a copy of this server, and whatever is sent in the main server will be said in the other server?". Of course no one would have the resolve of doing such an evil deed?
                        So I made a bot that copied the server and started to paste everything in another server. I perfectly* copies a server, sets up the channel order correctly, all the roles, etc. and then starts to listen in the primary server. It will then send logs of 
                        all chat and files to the clone server for "logging purposes". After realizing the power of this bot, I proceeded to not care and post the source code on my website. I wonder who tricked someone into adding the bot as an admin and then got their entire
                        server logged for a long time... oh well. Auto counter is the last, with it just automatically counting, from 0 to infinity or 2^31 or something.
                          
                    </p>
                    <div>
                        <div class="reactiveFlex">
                            <Box title={"discord-gameboy"} date={"2020"}  description={"a gameboy emulator that's a discord bot"} icon={githubLogo} iconLink="https://github.com/polyllc/discord-gameboy" link="./all.html#discordgameboy" language={languages[0]}/>
                            <Box title={"alexa"} date={"2020-\n2022"}  description={"alexa is a feature rich music discord bot, from voice commands, to playlists"} icon={githubLogo} iconLink="https://github.com/polyllc/alexa" link="./all.html#alexa" language={languages[0]}/>
                            <Box title={"voting bot"} date={"2020"}  description={"a simple voting bot"} icon="" iconLink="" link="./all#voting" language={languages[0]}/>
                        </div>
                        <div class="reactiveFlex">
                            <Box title={"log bot"} date={"2020"}  description={"logs a server to another created just for logging"} icon="" iconLink="" link="./all.html#log" language={languages[0]}/>
                            <Box title={"auto counter"} date={"2020"}  description={"auto counts in a channel and makes sure everyone is counting correctly"} icon="" iconLink="" link="./all.html#auto" language={languages[0]}/>
                        </div>
                    </div>
                </div> 

               

                <hr style="margin-right:10%; margin-top: 4%;">

                <div id="websites"> 
                    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #22ff56; margin: 0%; padding-top: 2%; font-weight: 800;">Websites</p>
                    <p style="font-size: 25px; color: white; margin-left: 5%; margin-top: 2%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black; line-height: 160%;">
                        &emsp;Back in 2017, I started to make websites for Poly LLC. The websites would all be hosted on polyllc.org (the same page you're viewing this on!). Initially, they were all static websites, with information about Poly LLC. But after picking
                         up a book on PHP and MySQL, I started to make actual dynamic websites (well at least it wouldn't be static). There is so much history with both of these websites, which I like to call polyllc.org and Poly Website (it was called phpfiles 
                         internally, but wow is that a dumb name for a website. I think at one point it was called Poly User? Whatever, there is no name sadly, so it will be referred to as poly website, not to be confused with the main page polyllc.org that was
                        <i>technically</i> part of poly website as I had no real direction, but this sidenote is getting too wordy.), that there are actual dedicated websites for them. Just click below to see an entire history of the websites (spoilers, there is a lot).
                        <br><br>
                        &emsp;Soon after the fall of poly website, I tried to replace it with PolyForums, a social media site (with no forums at all actually) that you would follow tags, rather than following users or following groups as a main way find content. After
                        realizing that making an entire social media site is really hard, mainly the home page algorithm and the moderation, I stopped developing. It was probably my best work of a website at the time, and it was the last time I would work on websites
                        before starting to make this portfolio. 
                        <br><br>
                        &emsp;In 2018, Poly LLC celebrated its first birthday, and with that, some mini Javascript based games were made for the event. These games are really simple games that really need no introduction, so click on the link, and it'll bring you to the 
                        original spinner that was put on the polyllc.org website. That site will also give some extra detail to each game. 
                        <br><br>
                        &emsp;Lastly is this website. This website is the one stop for most of the things I have made since 2017, so around 5 years of work. It was intended to show off my work for college, but it's also made so I can see all of my works compiled into one 
                        neat source, and look at it. 
                        <br><br>
                        &emsp;So click around, you'll probably find at least <i>something</i> interesting (I hope). Enjoy!
                    </p>
                    <div>
                        <div class="reactiveFlex">
                            <Box title={"polyllc.org"} date={"2017-\n2020"}  description={"the main website for poly"} icon="" iconLink="" link="./all.html#polyllc" language={languages[4]}/>
                            <Box title={"poly website"} date={"2017-\n2019"}  description={"a feature rich website, with videos, profiles, email and more"} icon="" iconLink="" link="./all.html#phpfiles" language={languages[3]}/>
                            <Box title={"PolyForums"} date={"2019"}  description={"a social media site with tags as the way to find new content"} icon="" iconLink="" link="./all.html#polyforums" language={languages[3]}/>
                        </div>
                        <div class="reactiveFlex">
                            <Box title={"poly birthday games"} date={"2018"}  description={"simple games for poly's birthday"} icon="" iconLink="" link="./all.html#birthday" language={languages[0]}/>
                            <Box title={"poly portfolio"} date={"2022"}  description={"a portfolio of my works"} icon={githubLogo} iconLink="https://github.com/polyllc/polyportfolio" link="index.html" language={languages[1]}/>
                        </div>
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

    
    
    

</style>