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
    <p style="font-size: 75px; color: white; text-decoration: underline; text-decoration-color: #fbc200; margin: 0%; top: 10%; padding-top: 8%; font-weight: 800;">What is planeagement?</p>
    <div class="reactiveFlex">
        <p style="font-size: 35px; color: white; margin-top: 2%; font-weight: 0; text-shadow: 0 0 15pt black; line-height: 160%; width: 50%;" class="reactiveWidth">
            Manage your planes going to and from your airport to other airports. Manage routes, upgrade your airport, buy planes, make money. Pretty simple concept. Each airport has different values, mainly a value called popularity, that directly affects
            how much money you make per trip, and more popularity means more people want to go to your airport (and from), which can lead to overcrowding. Overcrowding leads to your reputation taking a hit, and once it hits 0, you lose that airport. 
            There are 90 challenges pre made, with a challenge editor to make any challenge one would want. The challenges can range from unlocking all the airports, to earning x amount of money, to even losing all the airports. 
        </p>
        <div style="display: block; margin-top: auto; margin-bottom: auto;">
            <img src="/src/assets/planeagement/gameplay.png" alt="gameplay" style="width: 40vw; height: auto; margin-left: 5%; display: block; border-radius: 15px;" class="reactiveWidth"/>
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