<template>
  <div class="home">
    <main class="main">
    <!--Carrusel-->
        <div id="theCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/img/banner.jfif" class="d-block w-100">
                <div class="carou-container">
                <h1>Encabezado de Ejemplo 1</h1>
                <p>Inserte su texto aquí</p>
                <a href="#" class="btn btn-large btn-warning">
                    learn more
                </a>
            </div>
                </div>
                <div class="carousel-item">
                    <img src="/img/banner2.jpg" class="d-block w-100">
            <div class="carou-container">
                <h1>Encabezado de Ejemplo 2</h1>
                <p>Inserte su texto aquí</p>
                <a href="#" class="btn btn-large btn-warning">
                    learn more
                </a>
            </div>
                </div>
                <div class="carousel-item">
                    <img src="/img/banner3.jpg" class="d-block w-100">
            <div class="carou-container">
                <h1>Encabezado de Ejemplo 2</h1>
                <p>Inserte su texto aquí</p>
                <a href="#" class="btn btn-large btn-warning">
                    learn more
                </a>
            </div>
                </div>
                <div class="carousel-item">
                    <img src="/img/banner4.jpg" class="d-block w-100">
            <div class="carou-container">
                <h1>Encabezado de Ejemplo 2</h1>
                <p>Inserte su texto aquí</p>
                <a href="#" class="btn btn-large btn-warning">
                    learn more
                </a>
            </div>
                </div>
            </div>
        </div>
            <!--Características del sitio-->
            <section id="perks" class="perks-container">
                <article class="perk">
                    <h3>Hecho por la comunidad</h3>
                    <p>Cada miembro aporta su grano de arena para ampliar el conocimiento de todos</p>
                </article>
                <article class="perk">
                    <h3>Inclusivo</h3>
                    <p>Sin importar tu origen o limitaciones físicas puedes aportar y aprender de los demás</p>
                </article>
                <article class="perk">
                    <h3>Oportunidades de negocio</h3>
                    <p>Puedes vender el producto de tus ideas o recibir donaciones por tus aportes</p>
                </article>
            </section>
            <!--Publicaciones más polulares-->
            <div id="top-published">
                <h2>Más polulares</h2>
            </div>
            <section>
                <article>

                </article>
                <article>

                </article>
            </section>
        </main>
        <!--Pie de página-->
        <footer id="page-foot" class="footer">
            <h3></h3>
        </footer>
        </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}*/
</script>

<style scoped>
/*clases del carrusel*/
.carousel-item{
    height:32rem;
    background:#777 ;
    /*background-image: url(/img/banner.jfif);*/
    color:black;
    justify-content: center;
}
.carou-container{
    position:absolute;
    bottom:0;
    left:0;
     right: 0;
    padding-bottom:50px;
    padding-left: 100px;
    justify-content: center;
}
.page-container{
    height:inherit;
    display:flex;
}

/*Cuerpo de principal de la página*/
.main{
    width:100%;
    height:inherit;
    padding:0;
    padding-left: var(--nav-border-width);
    overflow-y: auto;
}
.perks-container{
    display:flex;
    flex-flow: row wrap;
}
.perk{
    max-width: 330px;
    min-width: 200px;
    text-align: center;
    border:5px black;
    margin:1em ;
    padding:10px;

}

#top-published{
    background-color:darkblue;
    color:white;
    padding: 20px 20px;
    
}
:root{
    --nav-icon-width: 50px;
    --nav-border-width: 8px;
}
html,
body{
    width:100%;
    height:100%;
    margin:0;
    font-family: sans-serif;
}
</style>