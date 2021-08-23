app.component("user-card", {
    /*html*/
    template: `
    <div class="user-card">
        <div class="user-card__status-cont">
            <img class="user-card__pic" :src="'./assets/img/profile_pics/profile_' + member.pic + '.svg'" alt="user-card__pic">
            <button class="user-card__like-btn" @click="like(member.id)"><i class="ppl-love"></i></button>
        </div>
        <div class="user-card__info-cont">
            <div class="user-card__profile-cont">
                <h3>{{ member.name }}</h3>
                <p>
                    <i v-if="member.gender === 'female'" class="fas fa-female"></i>
                    <i v-else class="fas fa-male"></i> {{ member.msg }}
                </p>
            </div>
            <div class="user-card__likes-cont">いいね = {{ member.likes }}</div>
        </div>
    </div>
    `,
    props: {
        member: Object, 
        members: Object
    },
    methods: {
        like(memberId) {
            const member = this.members.find(member => member.id === memberId);
            member.likes++;
        }
    }
})