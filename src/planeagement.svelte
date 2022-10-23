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


<div class="full" style="background-image: url('src/assets/planeagement/smallerworld.png');  background-size:100vw; height: 100vh" >    
    <div style="background-size: 4vw; background-image:url('src/assets/planeagement/plane.png'); text-align: center;" class="full">
        <div style="background: rgba(0,0,0,0); text-align: center;" class="full">
                <img src="src/assets/planeagementlogo.png" alt="PolyPortfolio" id="planetitle"><br>
                <div id="arrows" on:click={arrowClick}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a1" style={a1}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a2" style={a2}>
                    <img src="src/assets/arrows.png" alt="\/" class="arrow" id="a3" style={a3}>
                </div>
                <iframe style="position: absolute; display: block; left: 1%; bottom: 1%;"
                title="planeagement itch" src="https://itch.io/embed/660510?border_width=0&amp;bg_color=292929&amp;fg_color=ffffff&amp;border_color=000000" width="550" height="165" frameborder="0"><a href="https://polyllc.itch.io/planeagement">planeagement by Poly LLC</a></iframe>
                
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworld.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">What is planeagement?</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.5vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Manage your planes going to and from your airport to other airports. Manage routes, upgrade your airport, buy planes, make money. Pretty simple concept. Each airport has different values, mainly a value called popularity, that directly affects
            how much money you make per trip, and more popularity means more people want to go to your airport (and from), which can lead to overcrowding. Overcrowding leads to your reputation taking a hit, and once it hits 0, you lose that airport. 
            There are 90 challenges premade, with a challenge editor to make any challenge one would want. The challenges can range from unlocking all the airports, to earning x amount of money, to even losing all the airports. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gameplay.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How did planeagement begin?</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/ideas1.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">a control tower, made for an old idea</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            After creating fdphysics, I thought of making another game that was completely different from planeagement. The game never released, nor was even started, but in the meantime I thought between these two games (I for some reason thought I needed
            a bridge between games to fill a gap?) I would make another, simple game. So simple that it would only take 2 months! I soon realised that I was awful at predicting how long projects took. Planeagement's idea initially came from a Wii game that 
            had the player drag the route the plane would take with lines and it would land on a landing strip without hitting other planes (I forgot the name), so I sought to recreate that by with my own twist. That twist ended up being completely different,
            other than the planes of course. It did go through a couple of ideas, one where you would manage an airport and move the planes somehow and upgrade the parts of the airport. Most ideas were not developed well, as most ended up to be boring gameplay
            wise in practice. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size: 100vw; ">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Starting development</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Development started in around October of 2019. I started by tracing a map of the world, which you can see in the background. Since the world map would have to be very detailed, as the user could zoom about 20x, the map size had to be 16384x9216.
            This specific number was actually the max resolution of a texture page (all sprites live here, so that it won't have to load potentially thousands of images (think fonts), but just cut up portions of one image)
             in the game engine I was using, GameMaker Studio 2. After playing around with the image of the world, I soon realised there was a reason why 16384x9216 was the max texture page:
             it was slow. Really slow. So the solution was to create 8 4095x4609 images of the world that effectively made a resolution of 16380x9218, almost the same as 16384x9216.
             This made the game actually playable, but it did have one trade off. During gameplay, you can change the theme (daytime, afternoon, night) and the map's color changes accordingly. Loading these texture pages takes such a long time that it freezes
             the game for about 10 seconds the first time it's loaded in vram. Sadly, there was no way out of this as the game <i>required</i> a high resolution map. After creating the world map, it was time to make the basic gameplay routines: planes.
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/texturepage.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">
            texture page settings
           </p> 
        </div>
    </div>
</div>


<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworld.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How does the gameplay work?</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/allairports.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            In planeagement, there usually is one simple goal: try to make and send as many planes to as many airports. Each time you play, you always have a challenge to complete. There are seven different objectives: total passengers, 
            total money earned, airports unlocked, number of planes owned, total debt, airports lost and terminal level. In order to finish the challenge, you must always have a plane. Usually, you have a starting plane to use
            and in order to start transporting passengers and making money, you have to assign the plane to another airport. There are 30 airports in total around the world, including yours. You unlock an airport when you assign 
            a plane to it for the first time. Once unlocked, an airport cannot be locked. Then once assigned, the plane will make the trip to the airport, and once it is filled to the passenger capacity, it will return and you make 
            your money then. There are three different types of planes: a small plane (it has a small range and small capacity, but it is very cheap), normal plane (essentially a regular passenger plane, can travel most of the world
             and has a lot more space than a small plane) and big plane (it's a big plane that can travel everywhere and has more capacity than a normal plane).
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How does the gameplay work? cont.</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Each airport has a couple of different stats that influence how much money you will make and how many passengers will come. The first is popularity. Each time you complete a trip, the popularity will go up. This will increase
            the profit per trip and the amount of passengers that want to fly to your airport. The next one is reputation. Once the airport becomes overcrowded, your reputation will go down. If you solve this overcrowding by sending more 
            planes to that destination, your reputation will go back up to 100. But if the reputation hits 0, you lose that airport permanently. If the airport becomes too popular, a sudden disinterest will occur, and no one will want to
            travel to your airport from that destination, and your popularity will go down to about 100% before people start to get interested again (this was implemented due to the first version of the game not having a popularity cap 
            and making it so only one airport would be the most profitable, it wouldn't be fun just managing and sending as many planes to one destination because that made the most money). Another part of the gameplay is upgrading your 
            terminal. Each upgrade gets you one upgrade point, and that can be used on various upgrades from seat capacity to money multiplier. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gothenburg.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How does the gameplay work? masterai</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/masterai.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">the manual page for masterai</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Lastly in the gameplay, there is one entity that is called masterai. Its purpose is to try and make you lose your airports, often by making it took popular too quickly and making that airport overcrowd, or by making an
            airport so uninteresting that no one would ever want to travel from there to your airport. Other than that, masterai doesn't do too much else. The first trigger is 1000% popularity, and sometimes there is another trigger
            at a high percentage. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworld.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">What was the gameplay missing?</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            The gameplay from the get go is flawed. It does not allow for much dispersion of airports, and even with the second update, it is much better to just focus on one airport at a time. In the initial release, you almost never would
            send planes to multiple airports, you would just send all of your planes to that one airport. After the second update, during the first half of the game, it was better to spread out your planes, as the sudden disinterest pretty much
            killed the majority of focusing on one airport at a time. But during the second half, you'd probably have like 5 airports that you would send your planes to, and the sudden disinterest would only occur in two of the airports at max.
            The game is also somewhat boring at times. It is a strategy game, but it does not have too too much strategy, as it compensates for the somewhat boring gameplay with rng, which in strategy games is almost never a good idea. Still,
            in the more challenging challenges, it actually can be pretty fun and each action has to be calculated or else what often happens is that you lose all of the airports and you're about 50% of the way to the challenge. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gothenburg2.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div style=" background: linear-gradient(135deg, #252f89,#252f89,#101c7f,#212b6c,#262b6c,#24319d); padding: 5%">
    <div style="height: 45vh; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
        <img src="src/assets/planeagement/s1.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s2.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s3.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s4.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s5.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s6.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s7.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s8.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s9.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s10.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s11.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/s12.png" style="height: 100%;" alt="placeholder">
        <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;font-weight: 100; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 5%; left: 4vw;">gameplay screenshots</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Gui design</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/page7ui.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">the gui</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            The entire gui is implemented through drawing calls hard coded. It is much easier to have guis being drawn to the screen as you can easily turn on and off what gui you want to show. Everything except the map, planes, airports and
            the terminal is drawn to the screen real time. The gui emphasizes rounded corners, and has a distinct font that is often found on segmented displays like on microwaves. Most digits and stats are displayed with this font, while most
            information and text is written in a different font for readability purposes. The gui was designed to show only the most important information at all times. That would be: the planes used, the amount of money you have, your gate usage,
            the objective progress, total passengers and the fuel cost. The gui was also designed all around the mouse. There is only one thing that cannot be done with the mouse: bulk buying. Everything else is either mouse based or can be done with
            just the mouse. The menu is completely mouse based and almost nothing can be controlled by the keyboard. The menu does have a more colorful design in comparison to the in game gui, and does look a bit better. There are a couple flaws
            with the gui, but the main one is the border around most text that looks pretty bad, it doesn't do the full border, but draws the text 4 times in each cardinal direction before drawing the text on top, thus making it look like it is more
            pixelated. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">The problem with the gui</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            There aren't many problems with the gui, but the biggest is that it's drawn. Sure that was the easiest way to do it, but the main problem with drawing the gui frame by frame (as opposed to making sprites and objects that represent
            the same thing) is that there are no options for display scaling or any other support for aspect ratios. This is partially due to the game engine and partially due to the drawn gui. The other problem is that it is a bit cluttered in 
            some spots. I have never taken a ui class, so I just made what I felt made sense and looked good. Of course what I think is not what the person next door might think, so the ui is subjective. The last problem with the gui is that 
            some things actually overlap each other, leading to pressing a button when you're trying to leave or something like that. The biggest offender is the settings button in the menu, where in multiple different pages does it overlap the
            gui in front of it. Why was it never fixed? Well it was quite hard to do for such a seemly simple fix. Plus I was burned out from developing the game the past 6 months (yes it took that long! I didn't spend too much time on it per day though).
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/settingsbutton.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">the settings button that would always post a problem</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworld.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">The problem with GameMaker Studio 2</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gms2.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            The game was made in a game engine called GameMaker Studio 2. It is primarily a 2D game engine that is pretty simple to use. It uses its own programming language called GML or GameMaker Language. Of course with this simplicity
            comes restrictions. Since almost everything is supposed to be compatible with the drag and drop language that they also have, many limitations must be made in order to make sure that the drag and drop language can be viable.
            Once you try and get into more complicated things, such as shaders, real menus, display scaling, real good antialiasing (this can be fixed with the sprites that are made, mine all have hard edges, not really helping the problem)
            and more, everything must be implemented by yourself. This engine is really good at making 2D platformers, rpgs, 2d fighters and such, but falls short when something requires a lot of text, real 3d, anything really not pixelated
            and such. All of these problems could have been just my experience, and could have already been fixed in a new update. For me, the lack of a text object built in was a big deal. Other game engines, like Unity, make it easy to
            implement text into the game, but with gms2, you need to draw it. I could've implemented a really good text engine myself, but at the time, I did what was implemented as this game was not actually planned to take such a long time 
            to develop. 
        </p>
    </div>
</div>
<div style=" background: linear-gradient(135deg, #252f89,#252f89,#101c7f,#212b6c,#262b6c,#24319d); padding: 5%">
    <div style="height: 45vh; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
        <img src="src/assets/planeagement/d1.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d2.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d3.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d4.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d5.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d6.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d7.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d8.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d9.png" style="height: 100%;" alt="placeholder">
        <img src="src/assets/planeagement/d10.png" style="height: 100%;" alt="placeholder">
        <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;font-weight: 100; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 5%; left: 4vw;">development screenshots</p>
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Problems encountered while developing</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Thankfully, there were not many problems while developing. Any problem that I did encounter was too minor to affect the gameplay. But there were a couple of major problems that occurred while developing. The first was the 
            problem of the planes. The planes aren't implemented that well. They will fly directly to the airport that they need to get to, and then once it is touching the other airport, it would stop and do its thing that it had to do.
            The problem with this is that the game runs in 60fps, and everything is updated 60 times per second. It's not like I can use delta time to see how long it took from the previous in game frame (in contrast to the rendered frame)
            and then calculate how much the plane should fly. So sometimes what would happen was zooming out too far would let the plane essentially skip over the entire airport and just fly into the abyss. The only fix I had was making the
            plane know 1 frame ahead of time where it will be, and almost always would it work. But who knows? There is an upgrade in the store that allows to increase the plane speed (there is a cap), and the problem <i>might</i> arise again,
            although I am doubtful. The second biggest problem was the fact that the map's resolution was so high. I already covered my method of fixing that earlier, but to reiterate, the file was too big, so I split it up into 8 equal 
            images, and when zoomed out enough, it would be a lower resolution image of it. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/flyover.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Features I wanted to implement</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/tornado.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">tornado concept art, doesn't look that good</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            There were multiple things I wanted to implement. First of all, I wanted to implement even more stats, where even more stats can be manipulated and seen and influence the gameplay. I always liked graphs and making graphs for profits
            and such was something I wanted to implement. The problem was how to make those graphs, I didn't know how to even go about making graphs back then (now it seems pretty simple, but a lot of work). I also wanted to add natural disasters, 
            events and seasons and have the airplane economy revolve around that. The problem was that I was really bad at drawing anything or really designing anything but the most simple guis. I really didn't want a repeat from fdphysics, where 
            that game looked completely offputting from the amount of different art styles, pixel scales and more. The last big feature I wanted to implement was the ability to somehow save your games. Each game or challenge can take upwards of a
            couple of hours to complete, and there was no way to save. The only way I thought of implementing saves was through saving the memory directly at that state, and somehow write all of the settings, challenge progress and other permanent
            stats to a file and read every time, but that approach came out to be very clunky. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworld.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Music</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            While designing the music, I tried to capture the calmness of the game plus a simple instrumental and baseline in order to make it background music, not really foreground music. I made all of the music with LMMS (linux multimedia studio)
            and many plugins that I found for free on the internet. Most of the instruments are either a piano (a digitized piano that is) or real recorded guitar notes (that really didn't sound like a guitar). There are seven songs in the 
            game, one for each continent and one for the menu. As for the music itself? Well it's a step up from fdphysics. I composed all of music in about a month, making a song every 4 days (now, I don't know how long songs usually take
            to make, but I don't think people are out there composing phenomenal songs every 4 days). I personally have an attachment to all of the songs, and I feel like the menu song is the best. After making music for two games, I have a 
            completely new respect to all video game composers, it is really hard to make good music and make it match the game. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/music.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Publishing</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/itch.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
        </div>
        
        <p style="margin-left: 5%; font-size: 1.8vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Finally, in the days leading up to the release date of June 2nd, 2020, the promotional artwork and videos were made. I actually finished making the game around 2 weeks before, but I didn't really start publishing until a couple
            days later as I was burned out from all the work of making the game (I had been working a lot trying to finish the game, not a really good idea). The game was eventually published on itch.io for $1.99. Of course, with it being
            itch.io, where only like 1% of games actually get at least 1 purchase, I didn't expect anyone to buy the game. But one night, it was about a couple minutes before midnight, I got an email from itch saying that someone bought my 
            game. The feelings during that moment could only be described as absolute euphoria, and even that word does not cut it. For the past 3 years, I had been working hard on my websites and my games, and to be finally compensated for 
            that work by someone actually looking at my game and deciding "looks good enough, time to type in my credit card", was just insane to me. Of course I wanted to figure out who bought my game, and so I did some digging in the logs. 
            I eventually found out that my friend had bought the game, and actually said they enjoyed the game. What a phenomenal friend. The second purchase was when I had the first sale, 50% off. Some great citizen of some country did the 
            great action of pressing purchase on my game. Whoever that person was, thank you. The third and final purchase came from a person that liked the game so much that they actually tipped me, they got the game for free from a 100% off
            sale, and then proceeded to tip me some money. Eventually, I actually updated the game just for this person as they did have some suggestions, thank you random citizen!
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">The first and last update</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            As mentioned a couple of times, I updated the game once. I updated it actually around half a year after release even though I thought "yeah this game is done, no one will play it anymore". Still someone in around September of
            2020 bought the game at the 100% off sale, enjoyed it, and posted a community post saying "Fun!" describing their experience with the game. When I read this, wow was I even happier than when someone first bought the game. 
            Even now, I still am happy reading the post back, it was the first time someone had said anything good about my games or anything that I didn't know. They later followed up with another post "Gameplay Issues", stating their
            findings of gameplay issues. They realised the flaw of making each airport not randomized (as they weren't! they were all tuned to be their real life equivalent, not fun in fictional game), and stated their update wishlist.
            There were the following: randomize the airports, don't make them too different, cap the max passengers at a point, make running airports a lot more expensive, financial stats of an airport. I implemented the following: 
            randomizing the airports, making sure they weren't too too different, added stats directly to the planes of how much fuel costs and profit per trip (as well as when adding it to the airport) and that's it. I kind of forgot
            to make the airplanes more expensive, and the new feature called sudden disinterest, fixed the max cap of passengers. I did not implement the financial stats of an airport as again, the gui would've been extremely cluttered,
            and implementation would have been extremely tedious. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/popplus.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworld.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">Conclusion</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/poly.png" alt="gui" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #0530ff solid; border-radius: 15px;" class="reactiveWidth" />
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            No matter the flaws, I still love this game. It was the first true game that I made that didn't look awful (design wise), and I put in at least 300-400 hours making it (yes I really did have no life when making this game). I still
            have fond memories making this game, and every little detail of the game, from the one easter egg (that is so hidden I even forgot where I put it!) to the design of the planes to the names of the challenges, making this game is 
            something that I had so much fun with. Looking back, I did kind of rush the game, straining myself with useless deadlines. I think at a certain point, so much work was required in order to improve the littlest things. My beautiful
            spaghetti code had its limits, and working with it (when I never refactored for a reason) was not pleasant to say the least. But this game is something that I find insane that some 14 year old kid can made. All four things: art,
            music, programming and publishing all made by me when I was 14, when I only really had skill in programming. To me, that is mind blowing, and for that reason I can overlook the flaws, and just enjoy my game. I hope you enjoyed it too.
        </p>
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
        margin-top: 12%;
        text-shadow: 0 0 5pt rgb(134, 41, 41);
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        min-width: 380px;
    }
    #planetitle:hover{
        width: 65vw;
        margin-top: 10%;
    }

    .full {
        min-height: 100vh; 
        max-width: 100vw;
        position: relative;

    }

    
    @media screen and (max-width: 1100px) {
        .reactiveWidth {
            width: 100% !important;
            margin-left: 0% !important;
        }
    }
    

</style>