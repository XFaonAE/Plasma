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
            },
            {
                text: 'Terminal'
            }
        ]" title="Plasma | Main.cs" />
        <div class="APP_main">
            <SideRail />
            <SideBar />
        </div>
        <AppGutter />
    </div>
</template>

<script>
    import AppBar from "./components/AppBar.vue";
    import SideRail from "./components/SideRail.vue";
    import SideBar from "./components/SideBar.vue";
    import { webFrame } from "electron";
    import AppGutter from "./components/AppGutter.vue";

    export default {
        components: {
            AppBar,
            SideRail,
            SideBar,
            AppGutter
        },
        mounted() {
            webFrame.setZoomFactor(1);
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
    .App {
        display: flex;
        flex-direction: column;
        .APP_main {
            display: flex;
            flex-direction: row;
            height: calc(100vh - 60px);
            width: 100vw;
        }
    }
</style>