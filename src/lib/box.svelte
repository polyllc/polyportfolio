<script>
export let title;
export let description;
export let date;
export let icon = ""; 
export let iconLink = "";
export let link;
export let language;
export let extraCss = "";
export let type = "";

import { css } from '@emotion/css';

let a = Math.floor(Math.random() * 125) + 100;
let b = Math.floor(Math.random() * 125) + 100;
let c = Math.floor(Math.random() * 125) + 100;

let randomBorder = css`
    &:hover {
        border: rgb(${a}, ${b}, ${c}, 1) 2px solid;
        background-color: rgb(${a-100}, ${b-100}, ${c-100}, 0.66);
    }
`
</script>

<div class="box {randomBorder} {extraCss}">
    <a href={link}>
    <div class="headerOfBox">
        <p class="titleOfBox">{title}</p>
        <p class="dateOfBox">{date}</p>
    </div>
    <p class="descriptionOfBox">{description}</p>
    <div class="iconBox">
        <a href={iconLink}>
            {@html icon}
        </a>
    </div>
    <div class="languageBox">
        <dot class="languagedot" style="background-color: {language.color}"></dot><p class="language">{language.name}</p>
        <em><p class="extraText">{type}</p></em>
    </div>
    </a>
</div>
<!--inline-size: min-content;-->
<style>

    .box {
        border-radius: 30px;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 2%;
        z-index: 3;
        margin: 0.5%;
        box-shadow: 0 0 5pt black;
        background-color: rgba(51, 51, 51, 0.66);
        border: #333 2px solid;
        display: block;
        min-width: 28%;
        max-width: 120%;
        line-height: 1;
        position: relative;
        transition: all 0.35s cubic-bezier(0.215, 0.610, 0.355, 1);
        inline-size: min-content;
    }

    a {
        text-decoration: none;
    }

    .titleOfBox {
        font-size: 4.5vh;
        color: white;
        font-weight: 900;
        margin-left: 2%;
        margin-top: 0;
        margin-bottom: 0;
        overflow-wrap: break-all;
        z-index: 5;
        text-shadow: 0 0 5px black;
    }

    .dateOfBox {
        font-size: 10.662vh;
        color: rgba(0, 0, 0, 0.46);
        font-weight: 1;
        margin: 0;
        top: 0;
        left: 0;
        text-align: center;
        position: absolute;
        z-index: -1;
        hyphens: manual;
        word-break: normal;
        line-height: 80%;
    }

    .headerOfBox {
        align-content: center;
        justify-content: left;
        display: flex;
        align-items: left;
    }

    .descriptionOfBox {
        z-index: 5;
        color: white;
        font-size: 2.1324vh;
        margin-left: 4%;
        text-shadow: 0 0 10px black;
    }

    .iconBox {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    .languageBox {
        position: absolute;
        left: 10px;
        bottom: -0.177vh;
    }

    .language {
        font-size: 1.6vh;
        color: white;
        display: inline-block;
        left: 1.25vh;
        bottom: 0.177vh;
        position: absolute;
        text-shadow: 0 0 5px black;
        white-space: nowrap;
    }

    .extraText {
        font-size: 1.6vh;
        color: #fbc200;
        display: inline-block;
        left: 0vh;
        bottom: 1.877vh;
        position: absolute;
        text-shadow: 0 0 5px black;
        white-space: nowrap;
    }

    .languagedot {
        width: 0.885vh;
        height: 0.885vh;
        border-radius: 50%;
        display: inline-block;
        left: 0;
        bottom: 2.091529vh;
        position: absolute;
    }


</style>