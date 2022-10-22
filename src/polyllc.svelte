<script>
    import Header from "./header.svelte";
    import Box from "./lib/box.svelte";
    import { css } from '@emotion/css';

    $: title = "polyllc.org";

    function rangeUpdate(e){
        console.log(e.target.value);
    }

</script>


<Header/>
<br><br>
<br><br>

<div id="sliderDiv">
    <p id="title">{title}</p>
</div>

<div id="sliderDiv">
    <input type="range" id="years" on:input={rangeUpdate} min="1" max="7">
</div>

<style>
    #sliderDiv {
        background: rgba(30,30,30,0.5); 
        box-shadow: 0px 3pt 10pt #000;
        width: 100vw;
        text-align: center;
    }

    #years {
        width: 90vw;

    }

</style>
