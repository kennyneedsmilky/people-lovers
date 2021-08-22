const app = Vue.createApp({
    /*html*/
    template: `
    <div class="router-view">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
    `
});