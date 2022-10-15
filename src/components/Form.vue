<template>
    <div>
        <h1>Form</h1>
        <label for="name">Name</label>
        <input type="text" v-model="name" placeholder="enter name" id="name"/><br />
        <label for="mobile">Mobile</label>
        <input type="text" v-model="mobile" placeholder="enter mobile number" id="mobile"/><br />
        <label for="email">Email</label>
        <input type="text" v-model="email" placeholder="enter email" id="email"/><br />
        <h2>Fav Color</h2>
        <label for="red">Red</label>
        <input type="checkbox" v-model="color" value="red" id="red"/>
        <label for="violet">Violet</label>
        <input type="checkbox" v-model="color" value="violet" id="violet"/>
        <label for="maroon">Maroon</label>
        <input type="checkbox" v-model="color" value="maroon" id="maroon"/>
        <h4>color : {{color}}</h4>
        <label for="student">Student</label>
        <input type="radio" v-model="profession" value="student" name="student " id="student">
        <label for="teacher">Teacher</label>
        <input type="radio" v-model="profession" value="teacher" name="profession"  id="teacher">
        <h2>My Profession: {{profession}}</h2>

        <button type="submit" v-on:click="getData()">Submit</button>
    
    </div>
</template>

<script>
export default {
    name:"Form",
    data () {
        return {
            name:null,
            mobile:null,
            email:null,
            color:[  ],
            profession:null,

        }
    },
    methods : {
        getData() {
            console.log(`Data: 
            ${this.name},
            ${this.mobile},
            ${this.email},
            ${this.color},
            ${this.profession}
            `);
        }
    }
}
</script>
<style scoped>
div {
    padding: 5%;
    overflow-x: hidden;
}
input {
    margin-top: 10px;
}
</style>