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


<div class="full" style="background: url('src/assets/fdphysics/bg.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh" >
        <div style="background: rgba(0,0,0,0); text-align: center;" class="full">
                <img src="src/assets/fdphysics logo.png" alt="PolyPortfolio" id="planetitle"><br>
                <div id="arrows" on:click={arrowClick}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a1" style={a1}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a2" style={a2}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a3" style={a3}>
                </div>
        </div>
        <iframe src="https://itch.io/embed/350142?border_width=0&amp;bg_color=0076b8&amp;fg_color=ffffff" title="fdphysics" width="550" height="165" frameborder="0"><a href="https://polyllc.itch.io/fdphysics">fdphysics by Poly LLC</a></iframe>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/desertmap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
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

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/castle.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
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

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/dicidoussylvan.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
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

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/galaxymap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How the gameplay works</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s2.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;"></p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            The gameplay of fdphysics is actually really simple. You play against your opponent with weapons or guns (whatever you want to call them) and you try and get the most points, kills or whatever the objective is. As mentioned,
            you can use the special attacks to gain an advantage against your opponent. You can also customize many different settings for the match: time limit, movement speed, bullet speed, gun reload time, jump height, suicide points,
            gun damage, health, gravity, random guns and number of guns on map. The original idea for the customization was to have way more than this, but even these are janky at best, especially those which change the physics.
            That's pretty much it. If you're coming from planeagement, you now realize how complicated it was in comparison. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/iceymountainsmap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">The modes</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.5vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
           There are six modes in the game, grouped up into main modes and minimodes. In the main modes, there is deathmatch, damagematch and physimatch. Deathmatch is a simple "most kills wins". Damage is also pretty simple, the most
           damage inflicted wins. Physimatch is different. Everything is counted: how much ammo you use, the number of jumps you make, the damage you give, the amount of times you use your special attack, the amount you move, etc. 
           Most of the time, the AI wins these because they are programmed to always charge their special attack and use it when you are in their sight. The minimodes were capture the flag, lights out and destroy the base. Capture the flag
           is a simple "whoever holds the flag the longest wins". Lights out is actually pretty cool, you only have light around your player. And destroy the base is also simple destroy the opponents base to win. Minimodes are two player
           only because the ai is way too bad to be able to play these, plus they would have an advantage in lights out. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s4.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">The lights out minimode</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/lavakingdommap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">The maps</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s2.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;"></p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            There are 11 maps and 15 generic maps in fdphysics. All of the main maps are custom made, and they all have the theme. You can see all of the backgrounds in the background. There are as follow: Deciduous Sylvan, Tropical Island,
            Just. Space., Some Desert, Icy Mountains, Light Show, Lavaness, Might be a Castle, Not Sure if this is a Boat, The Original and The Final Fight. The generic maps are all based on The Original and there are 15 of them. 
            They are only available in two player becaus
        </p>
    </div>
</div>

<!--
    what is planeagement
    how did it begin
    starting development
    how the gameplay works
    the modes
    maps
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