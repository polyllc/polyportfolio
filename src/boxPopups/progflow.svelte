<script>
    import DisplayImage from "../lib/displayImage.svelte";
    import { css } from "@emotion/css";

    let imgCss = css`display: flex; margin-right: 1%;`;
    let imgStyle = css` height: 300px; object-fit: contain;`;
</script>

<link rel="stylesheet" type="text/css" href="./src/boxPopups/boxPopups.css" />

<p class="descriptionOfBox" style="">
    Scripting for efficiency, a simple scripting language that uses pretty simple language. Its primary usage is to make very simple scripts, 
    a replacement for node.js and c++. It is not finished at all, but the code looks neat and it uses c++ templates (correctly?) which 99/100 times that alone will get you a job.
    <br><br>
    It is also far from completion, and it won't be. It has classes for comparing expressions, evaluating operations, variables and more. 
    <br><br>
    You can download it from the github, the rest of the instructions on how to install it are there.

</p>
<div style="display: flex; overflow-x: scroll;">
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/progflow/progflow1.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/progflow/progflow2.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/progflow/progflow3.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/progflow/progflow4.png"/>

</div> 