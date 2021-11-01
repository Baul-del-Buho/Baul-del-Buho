<template>
     <div class="container">

    <header>
        <h1>{{titulo}}</h1>
    </header>
    <main>

        <div class="container mt-5">
            <div class="row text-center">
                <h3>
                    Check this API
                </h3>
                <h5 class="mt-3">Get a random meal by clicking below</h5>
                <button class="btn btn-warning" id="get_meal">Get Meal 🍔</button>
                
            </div>
            <div id="meal" class="row meal"></div>
        </div>
    </main>
    
    
</div>
</template>
<script>
export default{
	name : 'Proyectos',
	data(){
		return{
			proyecto:'Proyectos disponibles',
			categoria : 'Arduino'
		}
	},
	methods:{
		
	},
	computed:{
		titulo(){
			return this.proyecto + ' ' + 'Categoría:' + ' ' + this.categoria;
		}
	},
	created(){
		
	}
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
	box-sizing: border-box;
}

body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 0;
	min-height: 100vh;
}

img {
	max-width: 100%;
}

p {
	margin-bottom: 5px;
}

h3 {
	margin: 0;
}

h5 {
	margin: 10px 0;
}

li {
	margin-bottom: 0;
}

.meal {
	margin: 20px 0;
}

.text-center {
	text-align: center;
}

.videoWrapper {
	position: relative;
	padding-top: 25px;
	height: 0;
}

 iframe {
	top: 0;
	left: 0;
    width: 560px;
    height: 315px;
}
</style>