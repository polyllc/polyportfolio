<script>
    import Header from "./header.svelte";
    import Sticky from "./lib/sticky.svelte";
    import { onMount } from 'svelte';

    let link = "src/assets/2.jpg";
    onMount(() => {
    //let c = document.getElementById("maincanvas"); //yay interacting with the dom!!!   
    // @ts-ignore
   // let ctx = c.getContext("2d");
        

    });
    import { css } from '@emotion/css';


    let bgGC = ["#1e00c1", "#412fa2", "#332fa2", "#0c06a5",  "#586be0", "#697be9", "#6495fb", "#8db6ff", "#73cde6", "#40d5ce", "#9dfddb", "#a1ffbf", "#fbc200"]; //background gradient colors

    $: bg = `
    background: ${bgGC[0]};
    `;  
    
    $: bg2 = css`
    background: linear-gradient(135deg, #101c7f,#212b6c,#262b6c,#24319d,#252f89,#252f89,#20288b,#20358b);
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
    
    <div class="{bg2}" style="min-height: 100vh;" id="games">
        <div style="background: rgba(0,0,0,0.4);" class="full">
            <p style="font-size: 150px; color: white; text-decoration: underline; text-decoration-color: green; margin: 0%; margin-left: 15%; top: 10%; padding-top: 8%; font-weight: 800;">Games</p>
            <p style="font-size: 45px; color: white; margin-left: 20%; margin-top: 5%; margin-right: 20%; font-weight: 0; text-shadow: 0 0 15pt black;">
                Starting in 2018, two games were published under the company Poly LLC. The first one, released on December 30th, 2018, was fdphysics. An ambitious game, a two player, 2D, shooting showdown in a variety of maps and modes. The game later received a couple of updates.
                The second game, released on June 6th, 2020, was planeagement. A more casual plane management game, where you manage your planes going from your airport to others. 
            </p>
            <div style="display: flex;">
                <a href="./fdphysics.html" id="fdphysicslink"><img src="src/assets/fdphysics logo.png" type="image/png" alt="fdphysics logo" style="width: 30vh; margin: auto;  object-fit: cover;"></a>
                <a href="./planeagement.html" id="planeagementlink"><img src="src/assets/planeagementlogo.png" type="image/png" alt="planeagement logo" style="width: 30vh; margin: auto;  object-fit: cover;"></a>
                <div id="arrows" on:click={arrowClick} style="right: 15%; position: absolute; margin-top: 4.5%;">
                    <img src="src/assets/arrows.png" alt="\/" class="relarrow" style={a1}><br>
                    <img src="src/assets/arrows.png" alt="\/" class="relarrow" style={a2}><br>
                    <img src="src/assets/arrows.png" alt="\/" class="relarrow" style={a3}>
                </div>
            </div>
        </div>
    </div>

    <img src="src/assets/bg1.png" alt=" asdfasdf" style="width: 100vw;">
    <img src="src/assets/2.jpg" alt="asd asdf" style="width: 100vw;">
    <img src="src/assets/3.png" alt="asdf asdf" style="width: 100vw;">
    <img src="src/assets/1.png" alt="asdf asdf" style="width: 100vw;">
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
        min-width: 100vw;
        position: relative;

    }

    #planeagementlink {
        display: flex;
        border-left: black 3px solid;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        margin-left: 5%;
        padding: 1.5%;
        inline-size: min-content;
        filter:drop-shadow(0px 0px 2px black);
    }

    #planeagementlink:hover{
        border-left: solid green 3px;
        filter:drop-shadow(0px 0px 8px black);
    }

    #fdphysicslink {
        display: flex;
        border-left: black 3px solid;
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        margin-left: 25%;
        padding: 1.5%;
        inline-size: min-content;
        filter:drop-shadow(0px 0px 2px black);
    }

    #fdphysicslink:hover{
        border-left: solid green 3px;
        filter:drop-shadow(0px 0px 8px black);
    }
    

</style>