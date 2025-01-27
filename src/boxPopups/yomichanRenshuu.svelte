<script>
    import DisplayImage from "../lib/displayImage.svelte";
    import { css } from "@emotion/css";

    let imgCss = css`display: flex; margin-right: 1%;`;
    let imgStyle = css` height: 300px; object-fit: contain;`;
</script>

<link rel="stylesheet" type="text/css" href="./src/boxPopups/boxPopups.css" />

<p class="descriptionOfBox" style="">
    I've always wanted to combine both my app for learning Japanese vocabulary (renshuu) with the extension yomichan, which is an extension that allows for easy lookup of Japanese words.
    Usually, when you're learning Japanese, you have to go to a dictionary, look up the word, and then go back to your learning app, in this case, the dictionary is yomichan. 
    So I thought that one day I'd just combine the two once renshuu has an api that I could use. Lo and behold, the api came out, and I created the combination of the two.
    <br>
    <br>
    Essentially, it's just regular yomichan, but when you hover over a word, it also shows a little button that you can press to add it to one of your vocab or kanji schedules. 
    <br>
    <br>
    Sadly, yomichan has been archive and is no longer maintained, and is now superseeded by yomitan, which I did not know existed when I was making this. But yomichan even when it was being developed
    was a massive extension, so it took a lot of time to get used to the codebase, and then to add the functionality that I wanted. But in the end, I updated the extension to use the same
    code style as the rest of the extension, like it was there all along. 
    <br>
    <br>
    You can download it from the github, the rest of the instructions on how to install it are there, and of course, on the yomichan website.

</p>
<div style="display: flex; overflow-x: scroll;">
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yomichanRenshuu/yomichan1.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yomichanRenshuu/yomichan2.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yomichanRenshuu/yomichan3.png"/>
    <DisplayImage style={imgCss} imgstyle={imgStyle} src="./src/assets/yomichanRenshuu/yomichan4.png"/>
</div> 