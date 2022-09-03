<script>
    import Header from "./header.svelte";
    import Sticky from "./sticky.svelte";

    let link = "src/assets/3.png";
</script>

<Header/>
<div style="position: sticky;">
<Sticky {link}/>
</div>
<img src="src/assets/1.png" alt="fuck you" style="width: 100vw;">
<img src="src/assets/2.jpg" alt="fuck you" style="width: 100vw;">
<img src="src/assets/3.png" alt="fuck you" style="width: 100vw;">
<img src="src/assets/1.png" alt="fuck you" style="width: 100vw;">
