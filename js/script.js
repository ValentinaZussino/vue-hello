console.log('hello');

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            msgTitle: 'Hello World !!!',
            whatImage: '',
            image: "https://unsplash.it/300/300?image=29",
        }
    }
});
app.mount('#my-title')