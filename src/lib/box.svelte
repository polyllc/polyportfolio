<script>
export let title;
export let description;
export let date;
</script>

<div class="box">
    <div class="headerOfBox">
        <p class="titleOfBox">{title}</p>
        <p class="dateOfBox">{date}</p>
    </div>
    <p class="descriptionOfBox">{description}</p>
</div>

<style>

    .box {
        border-radius: 30px;
        box-shadow: 0px 3pt 5pt #000;
        overflow-x: visible;
        padding: 2%;
        z-index: 3;
        margin: 0.5%;
        background-color: rgba(51, 51, 51, 0.66);
        border: #333 2px solid;
        display: block;
        min-width: min-content;
        inline-size: min-content;
        line-height: 1;
        position: relative;
    }

    .titleOfBox {
        font-size: 40px;
        color: white;
        font-weight: 900;
        margin-left: 2%;
        margin-top: 0;
        margin-bottom: 0;
        overflow-wrap: normal;
        white-space: nowrap;
        z-index: 5;
    }

    .dateOfBox {
        font-size: 150px;
        color: rgba(100, 100, 100, 0.66);
        font-weight: 1;
        margin: 0;
        top: 0;
        left: 0;
        text-align: center;
        position: absolute;
        z-index: -500;
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
        font-size: 32px;
        margin-left: 4%;
    }


</style>