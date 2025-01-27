<script>
    import DisplayImage from "../lib/displayImage.svelte";
    import { css } from "@emotion/css";

    let imgCss = css`display: flex; margin-right: 1%;`;
    let imgStyle = css` height: 300px; object-fit: contain;`;
</script>

<link rel="stylesheet" type="text/css" href="./src/boxPopups/boxPopups.css" />

<p class="descriptionOfBox" style="">
    Universal repository compiler and installer. Take in any github, git or zip link to source code, and Scrypty will automagically find a way to compile it. 
    <br><br>
    Well automagically has a massive asterisk,
    as sadly overtime, apps update, and scrypty has not been updated. It's a massive undertaking to try and understand all of the build tools that people use for their programs, and coupled with the fact
    that many of these build tools also have updates that break certain things, it is far too much than what was the scope of the project.
    <br><br>
    You can try to use it if you'd like, it works decently well for cmake, visual studio, g++ and gradle. It can also detect many build tools and recommend that you take them in a certain order.
    For a small subset of the required features, it still has a lot! Check out some of the screenshots to see them. 
    <br><br>
    You can download it from the github, the rest of the instructions on how to install it are there.
</p>
<div style="display: flex; overflow-x: scroll;">
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/scrypty/scrypty1.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/scrypty/scrypty2.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/scrypty/scrypty3.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/scrypty/scrypty4.png"/>
</div> 