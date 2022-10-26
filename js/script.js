console.log('hello');

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            msgTitle: 'Hello World !!!',
        }
    }
});
app.mount('#my-title')