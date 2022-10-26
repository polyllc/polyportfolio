<script>
    import Header from "./header.svelte";
</script>

<Header/>

<div class="full" style="height: 100vh; background: linear-gradient(45deg, orange, #ff6020, red)">
    <div style="background-size: 10%; background-image:url('src/assets/polytiles2.png'); background-repeat:repeat; text-align: center;" class="full">
        <div style="background: rgba(0,0,0,0); text-align: center; text-align: center;" class="full">
            <p id="title">PolyForums</p>
            <p style="position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); color: white; text-shadow: 0 0 5pt #000; font-size: 2vw;">A short gallery of PolyForums, an unfinished social media app</p>
        </div>
    </div>
</div>

<br><br>
<div style="width: 100vw; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
    <img src="src/assets/polyforums/s1.png" alt="polyforums" style="width: 100vw">
    <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 1.5vw; color: white; font-weight: 0; line-height: 160%; margin-left: 5%; margin-top: 10%; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 2%;">Using the search feature, there were many ways to search something, by user, by tag or by keyword.</p>
    </div>
</div>

<div style="width: 100vw; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
    <img src="src/assets/polyforums/s2.png" alt="polyforums" style="width: 100vw">
    <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 2vw; color: white; font-weight: 0; line-height: 160%; margin-left: 5%; margin-top: 10%; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 2%;">User profile</p>
    </div>
</div>

<div style="width: 100vw; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
    <img src="src/assets/polyforums/s3.png" alt="polyforums" style="width: 100vw">
    <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 2vw; color: white; font-weight: 0; line-height: 160%; margin-left: 5%; margin-top: 10%; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 2%;">Create a post</p>
    </div>
</div>

<div style="width: 100vw; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
    <img src="src/assets/polyforums/s5.png" alt="polyforums" style="width: 100vw">
    <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 2vw; color: white; font-weight: 0; line-height: 160%; margin-left: 5%; margin-top: 10%; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 2%;">Sample post</p>
    </div>
</div>

<div style="width: 100vw; display: flex; overflow-x: scroll; box-shadow: 0px 0px 15px 15px rgba(0,0,0,0.5);">
    <img src="src/assets/polyforums/s6.png" alt="polyforums" style="width: 100vw">
    <div style="display: block; margin-top: auto; margin-bottom: auto; position: absolute;">
        <p style="word-break: keep-all; font-size: 2vw; color: white; font-weight: 0; line-height: 160%; margin-left: 5%; margin-top: 10%; background: rgba(20,20,20,0.8); border-left: 5px #45ff40 solid; border-radius: 15px; padding: 2%;">Sample comments</p>
    </div>
</div>

<style>
    .full {
        min-height: 100vh; 
        max-width: 100vw;
        position: relative;
    }

    #title{
        font-size: 12vh;
        color: black;
        margin:auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-shadow: 0 0 5pt rgb(134, 41, 41);
        transition: all 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        z-index: 2;
        color: white;
    }

</style>