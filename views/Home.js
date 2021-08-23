const Home = {
    /*html*/
    template: `
    <div>
        <generic-card title="こんにちは！" msg="面白いだと思う人を選んで「いいね」してください！ "></generic-card>
        <p>「いいね」ボタンは「<i class="ppl-love"></i>」です。</p>
        <div v-for="member in sortedMembers" :key="id" class="users-list">
            <user-card :member="member" :members="members" :modal="modal"></user-card>
        </div>
        <pic-modal :modal="modal"></pic-modal>
    </div>   
    `,
    data() {
        return {
            members: null,
            modal: {
                open: false,
                pic: "idano"
            }
        }
    },
    computed: {
        sortedMembers() {
            if (this.members) {
                return this.members.sort((a, b) => {
                    return b.likes - a.likes;
                })
            }
        }
    },
    created() {
        axios.get("./assets/json/members.json")
            .then(response => {
              this.members = response.data;
              this.members.forEach(memeber => memeber.likes = Math.floor(Math.random() * 10));
            })
            .catch(error => {
              console.log(error);
            })
    }
}