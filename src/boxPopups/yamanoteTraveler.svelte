<script>
    import DisplayImage from "../lib/displayImage.svelte";
    import { css } from "@emotion/css";

    let imgCss = css`display: flex; margin-right: 1%;`;
    let imgStyle = css` height: 300px; object-fit: contain;`;
</script>

<link rel="stylesheet" type="text/css" href="./src/boxPopups/boxPopups.css" />

<p class="descriptionOfBox" style="">
    Created in summer of 2024 for a class, yamanote traveler depicts life in Tokyo while riding around the yamanote line. 
    The theme for the class was to make a game about our time studying abroad in Japan, as we were there for just over a month 
    to learn about game design and how Japanese culture influences game design, including their environment around.  
    <br/>
    <br/>
    In just about three weeks, I created a fully-fledged visual novel, complete with seven complete stations to explore around, 
    filled with minigames, stories, collectables and more. It (should have) has won thousands of awards, where critics responses range
    from "Changed my life" to "The bird made me question many questions."
    <br />
    <br />
    Either way, it was a fitting memoir of my time studying abroad, and I hope it serves as a good indicator of over-exaggerated culture
    in Japan. 
</p>
<div style="display: flex; overflow-x: scroll;">
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yamanoteLogo.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yamanote/nippori.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yamanote/shinjuku.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yamanote/tokyo.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yamanote/ueno.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yamanote/train.png"/>
</div> 