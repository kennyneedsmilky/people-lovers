app.component("pic-modal", {
    /*html*/
    template: `
    <div class="pic-modal" :class="modal.open ? '' : 'hidden' " @click="closeModal()">
        <div class="pic-modal__content">
            <img class="pic-modal__pic" :src="'./assets/img/profile_pics/profile_' + modal.pic + '.svg'" alt="pic" />
        </div>
    </div>
    `,
    props:{
        modal: Object
    },
    methods: {
        closeModal() {
            this.modal.open = false;
        }
    },
})