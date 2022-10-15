<template>
    <div>
    <h1 >Home component</h1>
    <button v-on:click="getData('button1')" >Button1</button>
    <button v-on:click="getData('button2')">Button2</button>
    <button v-on:click="increment()">Button3</button>
    <h1 >count :{{count < 30 ? count : 30}}</h1>
    </div>
    
</template>
<script>
// import { count } from 'console';

export default {
    name: 'Home',
    data () {
        return {
            count:0,
        }
    },
    methods : {
        increment()
        {
            return this.count = this.count  + 1 ;
            
        }

    }
}
</script>
<style scoped>
h1 {
    color: #fe4312;
}
</style>