<template>
    <div class="MainFrame">
        <div class="Rail">
            <RouterLink to="/file/src/main.js">
                main.js
            </RouterLink>
            <RouterLink to="/file/src/render.js">
                renderer.js
            </RouterLink>
            <RouterLink to="/file/src/test.js">
                test.js
            </RouterLink>
        </div>
        <div class="BreadCrumbs">
            <RouterLink to="/">AppName</RouterLink>
            <i class="fal fa-angle-right"></i>
            <RouterLink to="/">src</RouterLink>
            <i class="fal fa-angle-right"></i>
            <RouterLink to="/">renderer</RouterLink>
            <i class="fal fa-angle-right"></i>
            <RouterLink to="/">index.js</RouterLink>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="less">
    .MainFrame {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .Rail {
            width: 100%;
            height: 30px;
            background: var(--layer0);
            display: flex;
            a {
                border: none;
                height: 30px;
                padding: 0px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                font-family: var(--mainFont);
                text-decoration: none;
                color: var(--contrastColor);
                font-size: 11px;
                cursor: pointer;
                opacity: var(--contrastInactiveOpacity);
                transition-duration: var(--animationSpeed);
                border-bottom: 1px solid transparent;
                padding-top: 1px;
                &:hover {
                    opacity: 1;
                    transition-duration: 100ms;
                    background: var(--layer1);
                }
                &.router-link-active {
                    border-color: var(--accentColor);
                    opacity: 1;
                }
            }
        }
        .BreadCrumbs {
            width: 100%;
            height: 25px;
            flex-direction: row;
            display: flex;
            background: var(--layer2);
            padding: 0px 10px;
            align-items: center;
            i {
                color: var(--contrastColor);
                font-size: 10px;
                padding: 0px 5px;
            }
            a {
                font-size: 10px;
                color: var(--contrastColor);
                align-items: center;
                justify-content: center;
                text-decoration: none;
                padding: 0px 10px;
                display: flex;
                font-family: var(--mainFont);
                opacity: var(--contrastInactiveOpacity);
                height: 25px;
                transition-duration: var(--animationSpeed);
                &:hover {
                    opacity: 1;
                    background: var(--layer1);
                }
            }
        }
    }
</style>