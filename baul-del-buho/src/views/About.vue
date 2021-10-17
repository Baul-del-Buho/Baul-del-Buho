<template>
  <div class="about">
   <h2>Conozca al equipo</h2>
        <br>
        <div class="container-main">
        <div class="row">
            <div class="column">
                <div class="card">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHdX7afVijMzw/profile-displayphoto-shrink_100_100/0/1517821267994?e=1640217600&v=beta&t=QUeGNTfPDrX_CXTIwAEg7Gakl9ug4gXk5jdsxgo2dks" alt="jonsteph">
                    <div class="container">
                        <h2>Jonathan Stephan Meza Vanegas</h2>
                        <p class="title">Developer</p>
                        <p>Tecnólogo de Redes de Datos.</p>
                        <p>jstephanmv@gmail.com</p>
                        <p><button class="button"><a href="https://www.linkedin.com/in/jonathan-stephan-meza-vanegas-81318a144/">Contacto</a></button></p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGf-6HaWu-OKQ/profile-displayphoto-shrink_200_200/0/1631052182860?e=1640217600&v=beta&t=5weNmy_FZ2f9Et2-Z4bA2h88QsmX7Dp4LpT8r39t6oA" alt="lucia">
                    <div class="container">
                        <h2>Lucía Alejandra Zabransky Rodriguez</h2>
                        <p class="title">Developer</p>
                        <p>Profesional en Comercio Internacional y Finanzas.</p>
                        <p>zrluchis98@gmail.com</p>
                        <p><button class="button"><a href="https://www.linkedin.com/in/lualzaro/">Contacto</a></button></p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
  </div>
</template>
<style scoped>
h2{
    text-align:center;
    font-size: 30px;
}

.container-main{
    margin:0 auto;
    border: 2px solid rgb(240,240,240);
    padding: 1em;
    width:100%;
}

.row{
    display:flex;
}

.column{
    width:50%;
}

.card{
    border:1px solid gray;
    box-shadow: 3px 3px 5px  0 darkgray;
    margin:1em;
    padding: 10px;

}

.container{
    height:auto;
    min-height: 190px;
}

.title{
    color: darkgray;
    font-weight: 900;
    text-align: center;
}

img{
   display:block;
   margin:auto;
   width: 100%;
   height: auto;
   max-height: 200px;
   max-width:200px;
}
p{
    text-align:left;
}

button{
    display:block;
    margin:auto;
    width: 100%;
    height: 2em;
    background-color:black;
    color:white;
    border: 0;
    cursor:pointer;
}

a{
    color:white;
    text-decoration: none;
}

</style>