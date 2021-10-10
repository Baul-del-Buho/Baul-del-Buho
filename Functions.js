class Template extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
        //this.collapse();

    }

    render(){
        this.shadow.innerHTML=`
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
        `;
    }
    
}

customElements.define('coll-navbar', Template);