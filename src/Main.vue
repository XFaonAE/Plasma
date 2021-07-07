<template>
    <div class="root">
        <SideBar />
        
        <AppBar title="Plasma" />
    </div>
</template>

<script>
import SideBar from "./components/SideBar";
import AppBar from "./components/AppBar";

export default {
    components: {
        SideBar,
        AppBar
    }
}
</script>

<style lang="less">
@import "./components/Config";

body, .root {
    margin: 0;
    display: flex;
    flex-direction: row;
    background: @layer1;
}
</style>