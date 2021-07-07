<template>
    <div class="AppBar">
        <span class="title">
            {{ title }}
        </span>
        
        <div class="buttons">
            <button @click="minimize">
                <i class="ms-Icon ms-Icon--ChromeMinimize"></i>
            </button>
    
            <button @click="size">
                <i class="ms-Icon ms-Icon--Checkbox"></i>
            </button>
            
            <button @click="close">
                <i class="ms-Icon ms-Icon--ChromeClose"></i>
            </button>
        </div>
    </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");

export default {
    name: "AppBar",
    props: [
        "title"
    ],
    methods: {
        close() {
            window.close();
        },
        size() {
            ipcRenderer.send("windowSize");
        },
        minimize() {
            ipcRenderer.send("windowMinimize");
        }
    }
}
</script>

<style lang="less">
@import "./Config";
.AppBar {
    width: 100vw;
    height: 30px;
    -webkit-app-region: drag;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .title {
        color: @text;
        font-family: @fontMain;
        margin-left: 20px;
        font-size: 11px;
    }
    
    .buttons button {
        border: none;
        height: 30px;
        padding: 0 20px;
        background: transparent;
        color: @text;
        cursor: pointer;
        transition-duration: @speed;
        -webkit-app-region: no-drag;
        opacity: 0.6;
        
        &:hover {
            opacity: 1;
            background: @layer0;
        }
    }
}
</style>