app.component("app-header", {
    /*html*/
    template: `
    <div class="header">
        <h1><i class="ppl-logo"></i></h1>
        <div class="header__links">
            <router-link to="/">ホーム</router-link>
            <router-link to="/about">このアプリについて</router-link>
        </div>
    </div>
    `
})