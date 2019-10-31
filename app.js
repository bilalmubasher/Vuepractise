new Vue({
    el:'#vue-app',
    data:{
        name:'Bilal',
        job:'web developer',
        website:'https://github.com/bilalmubasher/Vuepractise/',
        websiteTag:'<a href="https://github.com/bilalmubasher/Vuepractise/">The net Ninja</a>'
    },
    methods: {
        greet:function(time)
        {
            return 'Good ' + time + ' ' + this.name;
        }
    },
});