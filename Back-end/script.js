
document.addEventListener('DOMContentLoaded', carregarTarefas);

function adicionarTarefa() {
    const input = document.getElementById('inputTarefa');
    const texto = input.value.trim();

    if (texto !== "") {
        criarElementoTarefa(texto);
        salvarNoLocalStorage();
        
        input.value = "";
        input.focus();
    }
}

function criarElementoTarefa(texto) {
    const lista = document.getElementById('listaContainer');
    const li = document.createElement('li');
    li.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500 shadow-sm";

    li.innerHTML = `
        <span class="text-gray-700 font-medium">${texto}</span>
        <button onclick="removerTarefa(this)" class="bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white transition font-bold text-sm">
            Remover
        </button>
    `;
    lista.appendChild(li);
}

function removerTarefa(botao) {
    botao.parentElement.remove();
    salvarNoLocalStorage();
}



function salvarNoLocalStorage() {
    const tarefas = [];
    document.querySelectorAll('#listaContainer li span').forEach(span => {
        tarefas.push(span.innerText);
    });

    localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('minhasTarefas');
    if (tarefasSalvas) {
        const listaTarefas = JSON.parse(tarefasSalvas);
        listaTarefas.forEach(tarefa => criarElementoTarefa(tarefa));
    }
}

document.getElementById('inputTarefa').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
});
