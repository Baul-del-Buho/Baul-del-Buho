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

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__login");
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form__create")
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.remove("form__create");
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
        loginForm.classList.add("form__login")
    });
});

{
    const collapsedClass = "nav--collapsed";
    const lsKey = "navCollapsed";

    const nav = document.querySelector(".nav");
    const navBorder = nav.querySelector(".nav__border");

    if(localStorage.getItem(lsKey) === "true"){
        nav.classList.add(collapsedClass);
    }

    navBorder.addEventListener("click",() =>{
        nav.classList.toggle(collapsedClass);
        localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
    });
}