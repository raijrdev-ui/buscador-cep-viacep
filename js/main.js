    // parte de Busca
    async function buscarEndereco() {
        // 1. pega o imput-(Saída de dados/DOM)
        const cep = document.getElementById('cep').value;

        // Limpeza de valores anteriores
        if (cep.length !== 8) {
            alert("Por favor, digite um CEP válido com 8 dígitos.");
            return;
        }

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            // faz requisição (Assincronismo)
            const resposta = await fetch(url);
            
            // conversrsão da resposta
            const dados = await resposta.json();

            // 4. Verificaçaõ do CEP  (Regra da ViaCEP)
            if (dados.erro) {
                alert("CEP não encontrado!");
                limparCampos();
            } else {
                // 5. saida
                document.getElementById('rua').innerText = dados.logradouro;
                document.getElementById('cidade').innerText = dados.localidade;
                document.getElementById('estado').innerText = dados.uf;
                
                console.log("Dados recebidos com sucesso:", dados);
            }

        } catch (erro) {
            console.error("Erro na busca:", erro);
            alert("Erro ao conectar com o serviço de busca.");
        }
    }
                // limpeza dos campos
    function limparCampos() {
        document.getElementById('rua').innerText = "...";
        document.getElementById('cidade').innerText = "...";
        document.getElementById('estado').innerText = "...";
    }