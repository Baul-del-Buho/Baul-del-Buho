<template>
   <div class="page-container">
        <nav class="nav">
            
            
        
         <!--Menú desplegable para la navegación-->
         

                    <router-link class="nav__link" :to="{name:'Home'}"><div class="nav__icon-container">
                     <i class="material-icons">dashboard</i>
                 </div>
                 <span class="nav__label">Inicio</span></router-link>
                    <router-link class="nav__link" :to="{name: 'Proyectos'}"><div class="nav__icon-container">
                     <i class="material-icons">construction</i>
                 </div>
                 <span class="nav__label">Proyectos</span></router-link>
                    <router-link class="nav__link" :to="{name: 'InicioSesion'}"><div class="nav__icon-container">
                     <i class="material-icons">account_circle</i>
                 </div>
                 <span class="nav__label">Inicio de Sesión</span></router-link>
                    <router-link class="nav__link" :to="{name: 'About'}"><div class="nav__icon-container">
                     <i class="material-icons">groups</i>
                 </div>
                 <span class="nav__label">¿Quiénes somos?</span></router-link>         
             
             
             
        </nav>
          </div>       
</template>
<script>
export default {
    name: "CollapsibleNav.vue",
};

</script>



<style scoped>
.nav{
    display:inline-block;
    width: 200px;
    height:inherit;
    position: relative;
    background-color: rgb(240,240,250);
    transition:width 0.2s;
    flex-shrink: 0;
}
.nav__link{
    display:flex;
    align-items:center;
    color:rgba(0,0,100,0.75);
    text-decoration: none;
}
.nav__link:hover{
    background-color: lightgray;
}

.nav__icon-container{
    width:var(--nav-icon-width);
    height:var(--nav-icon-width);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.nav__label{
    white-space: nowrap;
}

.nav__border{
    position:absolute;
    left:100%;
    top:0;
    width: var(--nav-border-width);
    height:100%;
    background-color: rgb(150,150,150);
    transition: background-color 0.2s;
    cursor:ew-resize;
}
.nav__border:hover{
    background-color: rgb(100,100,100);
}
.nav--collapsed{
    width: var(--nav-icon-width);

}
.nav--collapsed .nav__label{
    display:none;
}
</style>
