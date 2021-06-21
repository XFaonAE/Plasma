<template>
    <div class="MainFrame">
        <div class="Rail">
            <button>
                <i class="fab fa-js"></i>
                <span>Main.js</span>
            </button>
            <button class="Active">
                <i class="fab fa-js"></i>
                <span>Renderer.js</span>
            </button>
            <button>
                <i class="fab fa-js"></i>
                <span>ipc.js</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const rail = this.$el;
        }
    }
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
            background: var(--layer2);
            display: flex;
            button {
                border: none;
                height: 30px;
                padding: 0px 20px;
                background: transparent;
                color: var(--contrastColor);
                font-size: 11px;
                cursor: pointer;
                opacity: 0.6;
                transition-duration: 200ms;
                border-bottom: 1px solid transparent;
                padding-top: 1px;
                &:hover {
                    opacity: 1;
                    background: var(--layer3);
                }
                &.Active {
                    border-color: var(--accentColor);
                    opacity: 1;
                }
            }
        }
    }
</style>