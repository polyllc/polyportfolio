<script>
    import DisplayImage from "../lib/displayImage.svelte";
    import { css } from "@emotion/css";

    let imgCss = css`display: flex; margin-right: 1%;`;
    let imgStyle = css` height: 300px; object-fit: contain;`;
</script>

<link rel="stylesheet" type="text/css" href="./src/boxPopups/boxPopups.css" />

<p class="descriptionOfBox" style="">
    alexa is now your own music bot, usually playing despacito. 
    But in reality, alexa is a fully featured music bot with lots of features that other music bots just don't have or are paid. 
    Plus of course with the charm of alexa in discord.
    <br/>
    <br/>
    Unknown if it works with any modern version of Discord.JS, but you're more than welcome to try to port it
    <br/>
    <br/>
    Usage: make sure you have Discord.JS v12 installed. All other instructions are on the GitHub.
    <br/>
    <br/>
    It can do quite a lot actually, it can save playlists to play later, it has voice controls, it can connect to your
    twitch chat, play from your spotify playlists, and of course, all of the standard music bot functionality. 

</p>
<div style="display: flex; overflow-x: scroll;">
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/alexa/alexa1.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/alexa/alexa2.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/alexa/alexa3.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/alexa/alexa4.png"/>
</div> 