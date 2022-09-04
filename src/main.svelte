<script>
    import Header from "./header.svelte";
    import Sticky from "./lib/sticky.svelte";

    let link = "src/assets/2.jpg";
</script>

<Header/>
<div style="position: sticky;">
<Sticky {link}/>
</div>
<img src="src/assets/1.png" alt=" asdfasdf" style="width: 100vw;">
<img src="src/assets/2.jpg" alt="asd asdf" style="width: 100vw;">
<img src="src/assets/3.png" alt="asdf asdf" style="width: 100vw;">
<img src="src/assets/1.png" alt="asdf asdf" style="width: 100vw;">
