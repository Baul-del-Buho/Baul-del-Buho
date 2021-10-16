<template>
    <div id="nav">
    <div class="page-container">
        <nav class="nav">
            <div class="nav__border"></div>
        
         <!--Menú desplegable para la navegación-->
         
                     
             <a href="index.html" class="nav__link">
                 <div class="nav__icon-container">
                     <i class="material-icons">dashboard</i>
                 </div>
                 <span class="nav__label">Página Principal</span>
             </a>
             <a href="proyectos.html" class="nav__link">
                 <div class="nav__icon-container">
                     <i class="material-icons">construction</i>
                 </div>
                 <span class="nav__label">Proyectos</span></a>
             <a href="team.html" class="nav__link">
                 <div class="nav__icon-container">
                     <i class="material-icons">groups</i>
                 </div>
                 <span class="nav__label">¿Quiénes somos?</span>
             </a>
             <a href="login.html" class="nav__link">
                 <div class="nav__icon-container">
                     <i class="material-icons">account_circle</i>
                 </div>
                 <span class="nav__label">Inicio de Sesión</span>
             </a>
             <a href="contactUs.html" class="nav__link">
                 <div class="nav__icon-container">
                     <i class="material-icons">contact_page</i>
                 </div>
                 <span class="nav__label">Contacto</span>
                 </a>
         <!--Barra de navegación-->    
         </nav>
         <main class="main"> 
        <header class="container-lg header-section">
            <div class="row align-items-center header-container">
                <div class="nav-bar">
                <div class="row">
                    <h1 id="title"><img src="/img/logo.png"><strong>Baúl del Búho</strong></h1>
                    <a href="index.html" class="nav-item"><strong>Inicio</strong></a>
                    <a href="proyectos.html" class="nav-item"><strong>Proyectos</strong></a>
                    <a href="login.html" class="nav-item"><strong>Inicio de Sesión</strong></a>
                </div>
        
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped>
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
    height:inherit;
    background-color: rgb(150,150,150);
    transition: background-color 0.2s;
    cursor:ew-resize;
}
.nav__border:hover{
    background-color: rgb(100,100,100);
}
</style>