const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        };
    },
    mounted() {
        
        for (let i = 0; i < 10; i++) {

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((Capibara) => {
                    console.log(Capibara.data.response);
                    this.emails.push(Capibara.data.response);
                })
            };
    }
}).mount('#app');