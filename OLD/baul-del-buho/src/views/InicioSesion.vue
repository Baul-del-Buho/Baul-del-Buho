<template>
    <main>
    <div class="login-container"></div>
    <form class="form__login" id="login">
        <h2 class="form__title">Iniciar Sesión</h2>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Email o nombre de usuario">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Contraseña">
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit">Ingresar</button>
        <p class="form__text">
            <a href="#" class="form__link">¿Olvido su contraseña?</a>
        </p>
        <p class="form__text">
            <a href="./" id="linkCreateAccount" class="form__link">¿No posee una cuenta? Crear una</a>
        </p>
    </form>

    <form class="form--hidden" id="createAccount">
        <h2 class="form__title">Crear Cuenta</h2>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Nombre de usuario">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Dirección de correo">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Contraseña">
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Confirmar contraseña">
            <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit">Continuar</button>
        
        <p class="form__text">
            <a href="./" id="linkLogin" class="form__link">¿Ya está registrado? Iniciar sesión</a>
        </p>
    </form>
</main>
</template>
<script>
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
</script>
<style scoped>

</style>