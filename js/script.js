console.log('hello');

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            msgTitle: 'Hello World !!!',
            whatImage: '',
            image: "https://picsum.photos/300/200?random=1%22%3E",
        }
    },
    methods: {
        restart(){
            this.data(window.location.reload());
        },
    }
});
app.mount('#my-title');