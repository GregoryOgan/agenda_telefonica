const form = document.getElementById('form-agenda');

 let todasLinhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const nomePessoa = document.getElementById('nome-pessoa');
    const numeroPessoa = document.getElementById('numero-pessoa');

    //alert(`Teste: ${nomePessoa.value} Teste 2: ${numeroPessoa.value}`);

    let linhaAgenda = '<tr>';
    linhaAgenda += `<td>${nomePessoa.value}</td>`;
    linhaAgenda += `<td>${numeroPessoa.value}</td>`;
    linhaAgenda += '</tr>';

    todasLinhas += linhaAgenda;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = todasLinhas;
});