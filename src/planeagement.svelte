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

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">What is planeagement?</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.5vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Manage your planes going to and from your airport to other airports. Manage routes, upgrade your airport, buy planes, make money. Pretty simple concept. Each airport has different values, mainly a value called popularity, that directly affects
            how much money you make per trip, and more popularity means more people want to go to your airport (and from), which can lead to overcrowding. Overcrowding leads to your reputation taking a hit, and once it hits 0, you lose that airport. 
            There are 90 challenges pre made, with a challenge editor to make any challenge one would want. The challenges can range from unlocking all the airports, to earning x amount of money, to even losing all the airports. 
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

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
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
            <img src="/src/assets/planeagement/gameplay.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>


<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How does the gameplay work?</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/ideas1.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">a control tower, made for an old idea</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            In planeagement, there usually is one simple goal: try to make and send as many planes to as many airports. Each time you play, you always have a challenge to complete. There are seven different objectives: total passengers, 
            total money earned, airports unlocked, number of planes owned, total debt, airports lost and terminal level. In order to finish the challenge, you must always have a plane. Usually, you have a starting plane to use
            and in order to start transporting passengers and making money, you have to assign the plane to another airport. There are 30 aiports in total around the world, including yours. You unlock an airport when you assign 
            a plane to it for the first time. Once unlocked, an airport cannot be locked. Then once assigned, the plane will make the trip to the airport, and once it is filled to the passenger capacity, it will return and you make 
            your money then. There are three different types of planes: a small plane (it has a small range and small capacity, but it is very cheap), normal plane (essentially a regular passenger plane, can travel most of the world
             and has a lot more space than a small plane) and big plane (it's a big plane that can travel everywhere and has more capacity than a normal plane).
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
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
            <img src="/src/assets/planeagement/gameplay.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">How does the gameplay work? masterai</p>
    <div class="reactiveFlex">
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/ideas1.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
            <p style="float: left; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-left: 5%;  margin-right: 0%; font-weight: 400; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">a control tower, made for an old idea</p>
        </div>
        
        <p style="margin-left: 5%; font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            Lastly in the gameplay, there is one entity that is called masterai. Its purpose is to try and make you lose your airports, often by making it took popular too quickly and making that airport overcrowd, or by making an  
            airport so uninteresting that no one would ever want to travel from there to your airport. Other than that, masterai doesn't do too much else. The first trigger is 1000% popularity, and sometimes there is another trigger 
            at a high percentage. 
        </p>
    </div>
</div>

<div class="full" style="padding-left: 10%; background-image:url('src/assets/planeagement/smallerworldd2.png'); background-size:100vw;">
    <p style="font-size: 7vh; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800; word-break: break-all;">What was the gameplay missing?</p>
    <div class="reactiveFlex">
        <p style="font-size: 2.2vh; color: white; margin-top: 2%; font-weight: 0; line-height: 160%; width: 50%; background: rgba(20,20,20,0.6); border-left: 5px #fbc200 solid; border-radius: 15px; padding: 2%;" class="reactiveWidth">
            The gameplay from the get go is flawed. It does not allow for much dispersion of airports, and even with the second update, it is much better to just focus on one airport at a time. In the initial release, you almost never would
            send planes to multiple airports, you would just send all of your planes to that one airport. After the second update, during the first half of the game, it was better to spread out your planes, as the sudden disinterest pretty much
            killed the majority of focusing on one airport at a time. But during the second half, you'd probably have like 5 airports that you would send your planes to, and the sudden disinterest would only occur in two of the aiports at max.
            The game is also somewhat boring at times. It is a strategy game, but it does not have too too much strategy, as it compensates for the somewhat boring gameplay with rng, which in strategy games is almost never a good idea. Still,
            in the more challenging challenges, it actually can be pretty fun and each action has to be calculated or else what often happens is that you lose all of the airports and you're about 50% of the way to the challenge. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gameplay.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
        </div>
    </div>
</div>

<div style="height: 30vh; display: flex; overflow-x: scroll;">
    <img src="src/assets/planeagement/smallerworldd2.png" style="height: 100%;" alt="placeholder">
    <img src="src/assets/planeagement/smallerworldd.png" style="height: 100%;" alt="placeholder">
    <img src="src/assets/planeagement/smallerworldd.png" style="height: 100%;" alt="placeholder">
    <img src="src/assets/planeagement/smallerworldd.png" style="height: 100%;" alt="placeholder">
    <img src="src/assets/planeagement/smallerworld.png" style="height: 100%;" alt="placeholder">
    <img src="src/assets/planeagement/smallerworldd2.png" style="height: 100%;" alt="placeholder">
    <img src="src/assets/planeagement/smallerworldd.png" style="height: 100%;" alt="placeholder">
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
            information and text is written in a different font for readability purposes. The gui was designed to show only the most important information at all times. That woud be the the planes used, the amount of money you have, your gate usage,
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
            gui in front of it. Why was it never fixed? Well it was quite hard to do for such a seemly simple fix. Plus I was burned out from developing the game the past 6 months (yes it took that long! I didn't spend too much time on it a day though).
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gameplay.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-left: 5px #4590ff solid; border-radius: 15px;" class="reactiveWidth" />
           <!-- <p style="float: right; font-size: 2vh; color: white; font-weight: 0; line-height: 160%; margin-right: 0%; font-weight: 100; background: rgba(20,20,20,0.6); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 1%;">average gameplay</p> we'll save that for later -->
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