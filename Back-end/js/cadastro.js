document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    
    let users = getAllUsers();
    if(users.find(u => u.email === email)) {
        alert("E-mail já cadastrado!");
        return;
    }
    
    
    saveUser({email, senha});
    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
});