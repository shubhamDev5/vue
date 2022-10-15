<template>
<div>
    <nav>
        <router-link to="/"><img alt="Vue logo" class="logo" src="../assets/logo.png" width="45" height="45" /></router-link>

        <router-link to="/"><button>Home</button></router-link>
        <router-link to="/profile"><button>Profile</button></router-link>
        <router-link to="/profile/fbi"><button>FBI's Profile</button></router-link>
        <router-link to="/profile/cid"><button>CID's Profile</button></router-link>
        <router-link to="/profile/cbi"><button>CBI's Profile</button></router-link>
        <router-link to="/form"><button>Login</button></router-link>
        <router-link to="/ifelse"><button>If Else</button></router-link>
    </nav>

    <router-view />
</div>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

router-link {
    color: #0000;
    text-decoration: none !important;

}
router-link:hover, button:hover {
    cursor: pointer;
}


nav {
    display: flex;
    justify-content: start;
    column-gap: 15px;
    background: #23dfe3;
    height: 40px;
    align-items: center;
    padding: 10px;
    margin: 0;
    width: 100%;
}

button {
    border: none;
    outline: none;
    background: transparent;
}
</style>
