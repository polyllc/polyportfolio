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
<!--
    what is planeagement
    how did it begin
    starting development
    plane mechanics
    how the gameplay works - include the other countries airports and such
    how the gameplay was implemented
    gameplay - masterai
    what the gameplay is missing
    development screenshots - image slideshow
    gui design
    how was the gui implemented
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