<template>
    <div>
        <h1 v-if="show">If  condition</h1>
        <!-- <h1 v-else>else condition</h1> -->
        <button v-on:click="show=!show">{{show==true ? "Hide": "Show"}}</button>
        <h3>Colors</h3>
        <ul>
            <li v-for="item in color" :key="item" style="color:${item}">{{item}}</li>

        </ul>
        <br />
        <br />
        <ul>
            <li v-for="item in users" :key="item.name & item.id">{{item.name}} - {{item.id}}</li>
        </ul>

    </div>
</template>
<script>
    export default {
        name:"IfElse",
        data () {
           return {

               show:true,
               btnName:"Show",
               color: ["red", "black", "maroon"],
               users :[
                {
                    name:"abc",
                    id:14421,
                },
                {
                    name:"xyz",
                    id:145878,
                },
                {
                    name:"cid",
                    id:14589,
                },
               ]
           } 
        }
    }
</script>
<style>
ul {
    list-style: none;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: item;

}
</style>