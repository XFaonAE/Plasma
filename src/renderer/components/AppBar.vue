<template>
    <div class="AppBar">
        <div class="section menuButtons">
            <button v-for="menuButton in menuButtons">
                {{ menuButton.text }}
            </button>
        </div>
        <div class="section title">
            <span>{{ title }}</span>
        </div>
        <div class="section windowButtons">
            <button @click="windowMinimize()">
                <i class="fal fa-minus"></i>
            </button>
            <button @click="windowResize()">
                <i class="fal fa-square"></i>
            </button>
            <button @click="windowClose()">
                <i class="fal fa-times"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["menuButtons", "title"],
        methods: {
            windowClose() {
                this.$electron.ipcRenderer.send("_ELECTRON_windowClose");
            },
            windowMinimize() {
                this.$electron.ipcRenderer.send("_ELECTRON_windowMinimize");
            },
            windowResize() {
                this.$electron.ipcRenderer.send("_ELECTRON_windowResize");
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/_Config.less";

    .AppBar {
        display: flex;
        width: 100vw;
        height: 30px;
        -webkit-app-region: drag;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--layer1);
        .section {
            -webkit-app-region: no-drag;
        }
        .menuButtons {
            margin-left: 10px;
            button {
                padding: 0px 10px;
                border: none;
                font-size: 11px;
                opacity: 0.6;
                transition-duration: 200ms;
                cursor: pointer;
                height: 30px;
                color: var(--contrastColor);
                background: transparent;
                &:hover {
                    opacity: 1;
                    background: var(--layer2);
                }
            }
        }
        .windowButtons {
            display: flex;
            -webkit-app-region: no-drag;
            button {
                padding: 0px 20px;
                height: 30px;
                border: none;
                transition-duration: 200ms;
                background: transparent;
                color: var(--contrastColor);
                opacity: 0.6;
                font-size: 11px;
                cursor: pointer;
                display: flex;
                &:hover {
                    opacity: 1;
                    background: var(--layer2);
                }
            }
        }
        .title {
            -webkit-app-region: drag;
            span {
                color: var(--contrastColor);
                font-size: 11px;
                font-family: sans-serif;
            }
        }
    }
</style>