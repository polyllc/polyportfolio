<script>
export let style = "";
export let imgstyle = "";
export let src;
export let alt = "";
import { css } from '@emotion/css';
let sizeState = false; // false for small, true for large

let bigCss = css`
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 60%;
`;

$: opacityLevel = 0;
$: display = "none"

let enlarge = () => {
    console.log('sss');
    if (sizeState) {
        display = "block";
        sizeState = false;
        opacityLevel = 1;
    }
    else {
        sizeState = true;
        opacityLevel = 0;
        setTimeout(() => { display = "none"; }, 100);
    }
}

let close = () => {
    sizeState = true;
    opacityLevel = 0;
    setTimeout(() => { display = "none"; }, 100);
}


</script>

<div class={style} >
    <div>
        <img on:click={enlarge} src={src} alt={alt} class="img {imgstyle}" />
    </div>  
    <div>
        <img on:click={enlarge} src={src} alt={alt} class="img imageDisplay {bigCss}" style="opacity: {opacityLevel}; display: {display};" on:blur={close}/> 
    </div>
</div>


<style> 

.img {
    transition: opacity 0.35s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.imageDisplay {
    z-index: 1000;
}

</style>