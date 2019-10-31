new Vue({
    el:'#vue-app',
    data:{
        name:'Bilal',
        job:'web developer'
    },
    methods: {
        greet:function(time)
        {
            return 'Good ' + time + ' ' + this.name;
        }
    },
});