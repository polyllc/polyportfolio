<script>
    import DisplayImage from "../lib/displayImage.svelte";
    import { css } from "@emotion/css";

    let imgCss = css`display: flex; margin-right: 1%;`;
    let imgStyle = css` height: 300px; object-fit: contain;`;
</script>

<link rel="stylesheet" type="text/css" href="./src/boxPopups/boxPopups.css" />

<p class="descriptionOfBox" style="">
    Creating a C++ tester that is in the style of JUnit, with additional functions and whatnot that I've found useful either in other testing libraries,
    or that I thought would be neat.
    <br/>
    <br/>
    Currently, the dev branch has the newest stuff, while the main branch has the old version (but stable). The new version has a new style of testing,
    by passing in the method that will call all the tests, rather than doing it through macros or in main. You can see some of the output in the images below.
    <br/>
    <br/>
    It uses modern C++23 as to encourage adoption of the new standards. I myself am not a C++ expert, but I learn throughout creating projects in C++, which includes this.
    Thus, modern C++ features may of course be missing, but it uses the hot new stuff, like concepts. 
    <br/>
    <br/>
    It does pretty much everything you'd want from a C++ tester, from asserts (testOne) to bulk testing (testVector, testRange) to more. 
    <br/>
    <br/>
    It also has some cool features, like detection of what types you are comparing to accurately compare them, the ability to use your own
    toString function or insertion operator, plus details of where your code failed or passed.  
</p>
<div style="display: flex; overflow-x: scroll;">
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/cpptester/cpptester1.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/cpptester/cpptester2.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/cpptester/cpptester3.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/cpptester/cpptester4.png"/>
</div> 