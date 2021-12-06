<template>
 <router-view>
        <header class="container-lg header-section"/>
            <div id="nav-cont" class="row align-items-center header-container">
    <div id="nav">
    
    <div class="row align-items-center header-container">
                <div class="nav-bar">
                <div class="row">
                    <h1 id="title"><img src="/img/logo.png"><strong>Baúl del Búho</strong></h1>
                    <router-link class="nav-item" :to="{name:'Home'}">Inicio</router-link>
                    <router-link class="nav-item" :to="{name: 'Proyectos'}">Proyectos</router-link>
                    <router-link class="nav-item" :to="{name: 'InicioSesion'}">Inicio de Sesión</router-link>
                    <router-link class="nav-item" :to="{name: 'About'}">¿Quienes Somos?</router-link> 
                </div>
        
            </div>
        </div>
  </div>
</div>
  
  </router-view>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style>
.nav-bar{
    align-content: center;
    
}
.row{
    display:flex;
    justify-content:space-between;
    align-content: center;
    flex-flow:row wrap;
    background-color: blueviolet;
    padding: 20px;
    
}
#nav-cont{
  max-height: 120px;
}
#title{
    width:500px;
    height:50px;
    color:gold;
}
.nav-item{
    width:100px;
    max-height: 100px;
    align-content: center;
    color:gold;
    text-decoration: none;
    padding:12px 12px;
}
.nav-item:hover{
    color:yellow;
    background-color: rgb(88, 10, 161);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: gold;
}

#nav a.router-link-exact-active {
  color: yellow;
}
</style>