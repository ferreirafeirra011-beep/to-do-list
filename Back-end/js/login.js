document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    
    let users = getAllUsers();
    const user = users.find(u => u.email === email && u.senha === senha);
    
    if(user) {
        alert("Login bem-sucedido!");
        // Redirecionar para área logada
        window.location.href = "home.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});