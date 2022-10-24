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
        <iframe style="position: absolute; display: block; left: 1%; bottom: 1%;" src="https://itch.io/embed/350142?border_width=0&amp;bg_color=0076b8&amp;fg_color=ffffff" title="fdphysics" width="550" height="165" frameborder="0"><a href="https://polyllc.itch.io/fdphysics">fdphysics by Poly LLC</a></iframe>
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
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How did it begin?</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s2.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">form. was a game that I developed before, but never finished. The guns in this game inspired fdphysics. (yes it is spelled with a period)</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Before even making fdphysics, I was making another game called form.. It was a 2d platformer but with many vehicles and guns and blocks to place and go around the map (you can see a block that was placed below the player). It was
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
           
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/galaxymap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How the gameplay works</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s6.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
           
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
            <img src="/src/assets/fdphysics/s7.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            There are 11 maps and 15 generic maps in fdphysics. All of the main maps are custom made, and they all have the theme. You can see all of the backgrounds in the background. There are as follow: Deciduous Sylvan, Tropical Island,
            Just. Space., Some Desert, Icy Mountains, Light Show, Lavaness, Might be a Castle, Not Sure if this is a Boat, The Original and The Final Fight. The generic maps are all based on The Original and there are 15 of them. 
            They are only available in two player because the AI was not good enough to be on those maps because they would always get stuck on the blocks and somehow clip through them? They were mad men. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/map of the coolness of the boat.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">What the gameplay is missing</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.5vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
           This game is missing only a bit of gameplay. I feel like the game itself right now has plenty of good gameplay, and does not feel boring to play (sometimes like planeagement). The only thing that is missing is some extra variety (such as items)
           and the speed. The game is pretty slow. The gravity is too floaty and the movement speed is just too slow, leading to the game feeling like it is very slow, rather than the fast paced action that I intended to have. The reason why I didn't do that 
           was because I was afraid that the speed of the movement and the heavier gravity would pose a problem with the collision, but I just thought that because I never tested it out. Alas, it can be customized in the physics settings.
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s8.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">The physics control</p>
        </div>
    </div>
</div>


<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/map of tropical island.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Gui design & problems</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s9.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">Keyboard + Mouse gui</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            The gui was designed to be only controllable with the keyboard due to me not caring about giving mouse support. Plus I really didn't feel like adding support for the mouse as there were so many gui elements, especially when it came to customizing
            the game. The gui's design has no real direction, you can see that many elements don't mix well, and don't match at all. It does have pixel density differences that are very apparent, like you can see the difference from the heart representing the
            health and the text. The main problem with the gui is actually not the gui, but the ux. It is mainly again keyboard based, but it does have mouse buttons. It creates kinda of an annoying experience where you have to move from your keyboard to your
            mouse pretty often, even if most of the elements are keyboard controlled. Also when going through the menus, sometimes going back goes to a different menu, as I did not create the menu system to actually remember where you were before (like now
            I know to just use an array and pop the last element to see where the user was before).
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/castle.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Encountered problems while developing</p>
    <div class="reactiveFlex">
        <p style="font-size: 2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
           This game was my first published game, so it was a first for me in many different ways. With learning new things, one is bound to make many mistakes, and mistake did I make. The first biggest problem was how should I even go about making the AI?
           Rather than making a flow chart or relational graph, I just used a lot of if statements to try and get the AI to do certain things when certain flags hit. Of course this lead to so many problems, like the ai just not responding because non of the
           flags were being hit, and when it had nothing better to do, it woulnd't even try to go after the player, but just focus on getting one gun that was underneath it, and it would get stuck on the platform above (mind you there was not a pathfinding
           algorithm, I did not know how to make those). That was probably the biggest problem while developing, but there were many more, so I'll just list them here: the special attack text would not flash for player 2, even though it had the same code,
           slopes would almost never work because of the fact that it was one pixel higher, therefore a wall in the player object's eyes, you could easily get stuck in a wall by using knockback into it at a corner, sometimes sounds would indefinitely play
           over each other when stuck in a wall or just pressing against one, causing 100 wall hit sounds to play at once indefinitely, and many more (that I forgot about, this was 4 years ago!).
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s10.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">the ai is set on getting that gun below it</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/desertmap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Features I wanted to implement</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s11.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">Simply more modes needed</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            I wanted to add many features while developing this game, most of which I couldn't find an easy way to implement (I wasn't the best at programming back then). First off, I wanted to add online play. I actually did develop it, but the server I developed
            was in no way ready to be in production, I simply could not make it work in scale (even if no one would play it). I wanted to add some items too, to make the gameplay more varied, as only 20 guns, some of which are very similar, is not that much variety.
            It would be also really cool to add so many of the ideas I had that were too small to be separate features into items. I also wanted to implement way more minimodes and modes, as well as customization for said modes. I feel like this game has so much
            potential in terms of adding modes, and I just didn't implement them. I feel like many features were omitted because as I made the game, I would get much better at programming, and some of my earlier code, that was the most important code, was really
            bad, and implementing new ideas would take more and more time as the game was never developed to accommodate new features. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/dicidoussylvan.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Music</p>
    <div class="reactiveFlex">
        <p style="font-size: 2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
           Wow, this game does not have great music. I had only had about 3 years of experience of playing piano (not very well mind you), so that was my only method of actually doing something related to music (well except for listening to it). And the result?
           Mistimed music with mismatched instruments. In the end, it really doesn't matter how the music sounds, as you can easily turn it off, and I found most of the time that music was not really needed at all. But I needed to have music, what kind of game
           doesn't have music? It was my first time making music, and somehow I made 10 songs in about 3 weeks, that's even faster than planeagement! I used this online music creation tool and a free trial to their premium tier so I could have more instruments.
           I remember even driving home after a road trip, I would open up my school laptop and connect to my phone's mobile hotspot and continue to make music. Unlike planeagement's music, I don't have any real connection with this soundtrack, except for the
           original map's song. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s12.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">The volume where it should be</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/galaxymap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Publishing</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s13.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">This is the updated itch page, still is very similar to the first one</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            In the week leading up to the day of publishing, I started my first ever game page on itch.io. I created all of the beautiful artwork that can be seen on the page today, and wrote all of the captivating descriptions of the game. If you didn't
            pick up on the sarcasm, the page did not look very good. But whatever, it was my first game ever being published! I finished the entire page and the trailer in just 2 days because I was so excited to publish my first game ever. I was of course
            expecting for the game to sell thousands on the first day, and sell so many more later. Of course reality hit, and to this day, no one has paid for the game. I was disappointed, but that did not stop me from developing the game to update it.
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/iceymountainsmap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Updates</p>
    <div class="reactiveFlex">
        <p style="font-size: 2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            This game was updated fairly regularly. The first couple of updates were nothing too notable, as simple feature here, some bug fixes there. But v2.0 was a big update. It introduced so many new features, such as minimodes, a new menu, generic maps
            and more. This update was the one I thought to myself "yeah, this is what fdphysics was supposed to be in the first place". This update started to veer off from actually playing around with the physics part of fdphysics, as I realized that was
            just too broken, and I wanted to add more features than fixing the physics in the game that was the old code I had made over 2 years before (remember, fdphysics took its physics from form.). There was one more update after this that added discord
            rich presence. After that, I really wanted to add online play, and I actually did make the entire update, but the server was in no way ready for production. I wanted to convert it over to C++ from GameMaker Studio 2 (not an engine for making servers),
            but after I realized how hard sockets are and networking, especially with secure networking, I put down the towel and walked away. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/s14.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">Update v2.0 on itch</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background:url('src/assets/fdphysics/lavakingdommap.png') no-repeat 50% 50%; background-size: cover; min-height: 100vh; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Conclusion</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/fdphysics/polylogo2.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
          
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            I love this game. I love playing it, I loved playing with friends for hours on end, I loved developing it, I loved playtesting it, I loved removing bugs, I loved making music, I loved drawing for this game. There were so many good memories that I
            made with this game, most of them that I look back on fondly. I want to go back and keep developing the game, I actually plan to remake the game one day because I love it so much, but actually make it well this time. Even if the visuals do look
            pretty bad (ok not as bad as like a scratch game drawn with the built in drawing program), the game is just so fun. Out of the two games I made, this one is my favorite, and I will keep going back to it. Thank you for reading.
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
    gui design & the problem with the gui
    gui in action (gameplay) - image slideshow
    encountered problems while developing
    features that I wanted to implement
    music
    publishing 
    updates
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