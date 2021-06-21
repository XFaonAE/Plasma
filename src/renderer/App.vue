<template>
    <div class="App">
        <AppBar :menuButtons="[
            {
                text: 'File'
            },
            {
                text: 'Edit'
            },
            {
                text: 'Debug'
            }
        ]" title="Plasma"/>
    </div>
</template>

<script>
    import AppBar from "./components/AppBar.vue";

    export default {
        components: {
            AppBar
        }
    }
</script>

<style lang="less">
    @import "./assets/fonts/FontAwesome/css/all.css";
    body {
        margin: 0px;
        padding: 0px;
        background: var(--layer1);
    }
    * {
        outline: none;
        box-sizing: border-box;
    }
</style>