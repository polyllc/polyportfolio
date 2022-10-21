<script>
    import Header from "./header.svelte";
    import Box from "./lib/box.svelte";
    import { css } from '@emotion/css';

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

    function arrowClick(e){
        window.scrollBy({
            top: window.innerHeight,
            behavior : "smooth"
        });
        console.log("click");
    }

    setInterval(() => {
        changeArrowColor();
    },15);

</script>


<Header/>


<div class="full" style="background-image: url('src/assets/fdphysics/bg.png');  background-size:100vw 100vh; height: 100vh" >
    <div style="background-size: 4vw; text-align: center;" class="full">
        <div style="background: rgba(0,0,0,0); text-align: center;" class="full">
                <img src="src/assets/fdphysics logo.png" alt="PolyPortfolio" id="planetitle"><br>
                <div id="arrows" on:click={arrowClick}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a1" style={a1}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a2" style={a2}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a3" style={a3}>
                </div>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/fdphysics/desertmap.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">What is fdphysics?</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.5vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
           Fdphysics is a 2d, shooting showdown, with lots of physics. You battle your opponent on various maps by using 20 different guns, ranging from the classic machine gun to a gun that shoots music notes to one that shoots out
           bouncy balls. There are 11 main maps, with 20 generic maps. You can either battle your friends or play singleplayer with an AI. The AI is pretty ok for someone that has never made any sort of pathfinding algorithm. There are
           a variety of modes, from a regular deathmatch to lights out to a physimatch, where everything is counted, yes, even your jumps. The game was developed from 2018-2019, although was updated in 2020-2021 with online play support.
           Currently, that version is not published as no one plays the game.  
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s1.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/fdphysics/castle.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How did it being?</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s2.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">form. was a game that I developed before, but never finished. The guns in this game inspired fdphysics. (yes it is spelled with a period)</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Before even making fdphysics, I was making another game called form. It was a 2d platformer but with many vehicles and guns and blocks to place and go around the map (you can see a block that was placed below the player). It was
            too ambitious, one of the ideas was to make an entire programming language to make a simple game engine inside the game, and people could upload those levels online for people to play (like Mario Maker). I never finished it, but 
            while making the guns in the game, I thought "huh, this would be cool as like a simple 2d fighting game". And so, I started to make fdphysics. The name fdphysics came from the fact that physics were supposed to be a big part of the
            game, where you can customize all parts of the physics and the fd part is a secret. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/fdphysics/dicidoussylvan.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Starting development</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.5vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
           The game was made in GameMaker Studio 2. I started development at around September of 2018, and started making the basic physics for the game. I pretty much copied most of the code from form. as this game was entirely based on form.
           (please don't ask why form. has a period). I then started to build off of the array of guns, trying to make as many as possible, with a lot of variety put in. At this point, I had no real direction in this game, so I started to
           add random features that I seemed would be fun. The first thing would be the special attack. You simply hold to charge up your special attack, and use it when it hits 100 to activate one of three different special attacks that 
           were mostly unique to each gun for ten seconds. The no direction of the game also led to some of the weirdest(?) guns. There are many different "guns", most don't even qualify as being one. Some notable examples would be the sword,
           which just shoots swords, the seagull, which shoots seagulls and of course the fan favorite: the stapler.
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s3.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;"></p>
        </div>
    </div>
</div>

<!--
    what is planeagement
    how did it begin
    starting development
    how the gameplay works - include the other countries airports and such
    how the gameplay works cont.
    gameplay - masterai
    what the gameplay is missing
    development screenshots - image slideshow
    gui design
    the problem with the gui
    the problem with gms2
    gui in action (gameplay) - image slideshow
    encountered problems while developing
    features that I wanted to implement
    music
    publishing 
    first and last update
    conclusion

-->


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


    #planetitle {
        font-size: 6vh;
        color: black;
        width: 55vw;
        margin:auto;
        position:relative;
        margin-top: 10%;
        text-shadow: 0 0 5pt rgb(134, 41, 41);
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        min-width: 380px;
    }
    #planetitle:hover{
        width: 65vw;
        margin-top: 8%;
    }

    .full {
        min-height: 100vh; 
        max-width: 100vw;
        position: relative;

    }

    
    
    

</style>