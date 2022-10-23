<script>
    import Header from "./header.svelte";
    import Box from "./lib/box.svelte";
    import { css } from '@emotion/css';

    $: title = "Original polyllc.org, Unreleased";
    $: url = "/src/websites/ogUnreleased/index.html";


    let titles = ["Original polyllc.org, Unreleased", "Original polyllc.org, First Release", "Original polyllc.org, Winter theme", "Original polyllc.org, DDOS", "Original polyllc.org, Birthday", "Fdphysics Update polyllc.org", "New polyllc.org", "Updated New polyllc.org"];

    let folders = ["ogUnreleased", "ogReleased", "ogWinter", "ogDDos", "ogBday", "ogFdphysics", "new", "newUpdated"];
    let products = ["Products.html", "Products.html", "Products.html", "../ogWinter/Products.html", "../ogReleased/Products.html", "../ogReleased/Products.html", "games.html", "games.html"];
    
    let contact = ["Contact.html", "Contact.html", "Contact.html", "../ogWinter/Contact.html", "../ogReleased/Contact.html", "../ogReleased/Contact.html", "contact.html", "contact.html"];
    let about = ["About.html", "About.html", "About.html", "../ogWinter/About.html", "../ogReleased/About.html", "../ogReleased/About.html", "about.html", "about.html"];

    let future = ["TheFuture.html", "TheFuture.html", "TheFuture.html", "../ogWinter/TheFuture.html", "../ogReleased/TheFuture.html", "../ogReleased/TheFuture.html", "index.html", "index.html"];
    let news = ["index.html", "news.html", "news.html", "../ogWinter/news.html", "../ogReleased/news.html", "../ogReleased/news.html", "updates.html", "updates.html"];

    let old = ["old.html", "old.html", "old.html", "../ogWinter/old.html", "../ogReleased/old.html", "../ogReleased/old.html", "applets.html", "applets.html"];

    let dates = ["July 2017", "September 2017", "December 2018", "December 23rd, 2018", "July 7th, 2018", "January 2019", "June 2020", "June 2021"];

    let descriptions = [
        `This is the first Poly website ever made. I made this during summer vacation after I registered Poly LLC. There is a version just before this, the only thing that was changed were the links, they were all text based, not image based. It was never
        released to the public. Just a note, all websites presented here were not modified at all, you can even look at the awful code! The only things that were modified were the links, so that they'd actually work on this website.`,

        `This is the first Poly website that was published on polyllc.org. It is very similar to the original website, except it is not orange at all. This design stayed for the next 2 years. It was a decent website, the biggest complaint was the 
        images being used as links; many people could not read the links. To me, this is my favorite website as I spent so much time on it and looking at it (you'll see why I spent so long on it once you go over to poly website).`,

        `During the winter of 2018, I thought to be festive on the polyllc.org website. This is the result of that. Yeah, it does not look too good. And yes, the website would autoplay those jingle bells. What a great idea! It used to not have the 
        play and pause buttons (that are underneath the text User Main Menu) and would never stop playing! Wow was it kinda annoying, but to me, I love it.`,

        `Around December 23rd-24th, someone somehow (probably) logged into or hacked into my extremely secure mysql server. They deleted many users, including my own profile. To this day, I am not sure who did it, nor how they did it. I suspect that
        the way they did it was through exploiting some PHP code. You see, I wasn't using the best practices when it came to sql (s-q-l not sequel) querying, so I suspect that was how they got access to the database. Other than the homepage, nothing else is
        changed`,
        
        `July 7th, 2018 marked Poly's 1st birthday. To celebrate, I made a bunch of games (4) and turned it into a spinner on the main page. I also made some other things, but none of them were published. Nothing else was changed other than the main page.`,

        `This is the same site as the 2nd site. Nothing changed other than adding fdphysics to the main page. I couldn't find any other page in this version, so only the main menu has the updated fdphysics button.`,

        `A new website was made, with the goal of being actually readable and work well, as well as clear up some unneeded texts. Many of the promises were never made (as usual), so many of the information is out of date. The code is actually pretty good
        in comparison to the first site.`,

        `This is the latest update (even though at this point is was over a year ago), and it added applets, a collection of programs I made during the years. I had stopped making progress on websites as I transitioned over to making Discord bots, open source
        projects and other programs. I didn't even bother updated the rest of the site, at this point I was really done with making the website for polyllc.org. The reason why I made them in the first place was because my friends and I would screw around on it,
        but then that ended, and so did my motivation to update it.`

    ]

    $: date = dates[0];
    $: description = descriptions[0];


    function rangeUpdate(e){
        let val = e.target.value;
        console.log(val);
        title = titles[val-1];
        
        let site = document.getElementById("websites");
        console.log(site.contentWindow.location.href);

        let link = site.contentWindow.location.href.substring(site.contentWindow.location.href.lastIndexOf("/")+1);
        
        switch(link){
            default:
            case "index.html": url = "/src/websites/" + folders[val-1] + "/" + "index.html"; break;

            case "Products.html":
            case "games.html": url = "/src/websites/" + folders[val-1] + "/" + products[val-1]; break;

            case "Contact.html":
            case "contact.html": url = "/src/websites/" + folders[val-1] + "/" + contact[val-1]; break;

            case "about.html":
            case "About.html": url = "/src/websites/" + folders[val-1] + "/" + about[val-1]; break;

            case "TheFuture.html": url = "/src/websites/" + folders[val-1] + "/" + future[val-1]; break;
            
            case "updates.html":
            case "news.html": url = "/src/websites/" + folders[val-1] + "/" + news[val-1]; break;
            
            case "old.html":
            case "applets.html": url = "/src/websites/" + folders[val-1] + "/" + old[val-1]; break;

        }

        date = dates[val-1];
        description = descriptions[val-1];
    }



</script>


<Header/>
<br><br>
<br>

<div id="all">

    <div class="sliderDiv" style="margin: 0; padding: 0;">
        <input type="range" id="years" value="0" on:input={rangeUpdate} min="1" max="8">
    </div>

    <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" id="websites" frameborder="0" src="{url}" title="polyllc.org"></iframe>

    <div style="position: fixed; top: 12vh; right: 0;" id="des">
        <div class="headerOfBox">
            <p class="titleOfBox">{title}</p>
            <p class="dateOfBox">{date}</p>
        </div>
        <p class="descriptionOfBox">{description}</p>
        <hr style="color: white">
        <p class="descriptionOfBox" style="font-size: 2.7vh;">
            Drag the dot up there on the slider to see through all eight versions of polyllc.org.
        </p>

    </div>
</div>
<style>
    .sliderDiv {
        background: rgba(30,30,30,0.5); 
        box-shadow: 0px 3pt 10pt #000;
        width: 100vw;
        text-align: center;
        position: sticky;
    }

    #years {
        width: 90vw;

    }

    #title {
        font-size: 3vh;
        margin: 0; 
        padding: 0.5%;
        color: white;
    }

    #websites {
        width: 100vw;
        height: 100%;
    }

    #all {
        height: 100vh;
        overflow-y: hidden;
        width: 100vw;
    }

    #des {
        border-radius: 30px;
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 2%;
        z-index: 3;
        margin: 0.5%;
        box-shadow: 0 0 5pt black;
        background-color: rgba(51, 51, 51, 0.86);
        border: #333 2px solid;
        display: block;
        min-width: 28%;
        max-width: 120%;
        max-height: 80%;
        inline-size: min-content;
        line-height: 1;
        position: relative;
        transition: all 0.35s cubic-bezier(0.215, 0.610, 0.355, 1);
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
        color: rgba(0, 0, 0, 0.6);
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
        font-size: 2.5vh;
        margin-left: 4%;
        text-shadow: 0 0 10px black;
    }



    input[type=range] {
  height: 49px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background:rgba(0, 0, 0, 0);
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #FCB103;
  border-radius: 5px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 4px #000000;
  border: 3px solid #FFFFFF;
  height: 39px;
  width: 39px;
  border-radius: 25px;
  background: #000000;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -16px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #FCB103;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #FCB103;
  border-radius: 5px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 4px #000000;
  border: 3px solid #FFFFFF;
  height: 39px;
  width: 39px;
  border-radius: 25px;
  background: #000000;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #FCB103;
  border: 0px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #FCB103;
  border: 0px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 4px #000000;
  border: 3px solid #FFFFFF;
  height: 39px;
  width: 39px;
  border-radius: 25px;
  background: #000000;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #FCB103;
}
input[type=range]:focus::-ms-fill-upper {
  background: #FCB103;
}

</style>
