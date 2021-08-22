app.component("generic-card", {
    /*html*/
    template: `
    <div class="generic-card">
        <h1>{{ this.title }}</h1>
        <p>{{ this.msg }}</p>
    </div>
    `,
    props: ["title", "msg"]
})