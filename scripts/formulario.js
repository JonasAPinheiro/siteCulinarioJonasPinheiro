function dadosReceita(formulario){

    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let nomeReceita = formulario.nomeReceita.value;
    let tempoPreparo = formulario.tempoPreparo.value;
    let categoria = formulario.categoria.value;
    let dataSug = formulario.dataSug.value;
    let ingredientes = formulario.ingredientes.value;
    let modoPreparo = formulario.modoPreparo.value;

    document.getElementById("formulario").innerHTML = `
        <p class="dados">Seu nome: ${nome}<br>
        Seu email: ${email}<br>
        Nome da receita: ${nomeReceita}<br>
        Tempo de Preparo: ${tempoPreparo} minutos<br>
        Categoria: ${categoria}<br>
        Data da Sugestão: ${dataSug}<br>
        Ingredientes: ${ingredientes}<br>
        Modo de Preparo: ${modoPreparo}<br><br>
        Muito Obrigado pela sugestão, revisaremos e se tudo estiver certo em breve vai estar em nosso site, boas aventuras gastronômicas!!!!</p><br>
        <p class="contador">Redirecionando em 10 segundos...</p>
    `;

    let contador = 10;
    setInterval(() => {
        contador--;
        document.querySelector(".contador").innerText = `Redirecionando em ${contador} segundos...`;

        if (contador === 0) {
            window.location.href = "../index.html";
        }
    }, 1000);
}