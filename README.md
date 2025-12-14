# Patogram 🦆

O Patogram é uma rede social para fotos de patos. Simples e intuitiva, o objetivo é compartilhar fotos de patinhos.

## Tecnologias

O projeto foi construído utilizando tecnologias nativas da web:
* HTML
* CSS
* JavaScript

## Arquitetura e Dados

### Estrutura de Dados
Os dados dos posts são armazenados em uma lista de objetos com o seguinte formato:

| Propriedade | Tipo   | Descrição                                      |
| :---        | :---   | :---                                           |
| `titulo`    | String | O nome ou título dado ao pato.                 |
| `descricao` | String | Detalhes sobre a foto ou o momento.            |
| `imagem`    | String | Url da imagem          |

### Persistência de Dados
Para garantir que as fotos não sumam ao fechar a janela é utilizado o **LocalStorage** do navegador.

Como este armazenamento aceita apenas strings de texto, aplicamos a função `JSON.stringify` para converter nossa lista de objetos em texto antes de salvar. Ao carregar a página, fazemos o inverso com `JSON.parse`.

### Renderização Dinâmica (DOM)

Toda a visualização é construída dinamicamente via JavaScript:

1.  **Limpeza**: A função de renderização primeiro limpa o container HTML (`innerHTML = ''`).

2.  **Iteração**: Um loop percorre a lista de objetos `fotosPatos`.

3.  **Template**: Para cada item, é usado as variáveis misturar com o HTML (`${foto.titulo}`, `${foto.imagem}`).

4.  **Injeção**: O bloco de HTML montado é inserido na página usando a propriedade `innerHTML`.

## Como usar

Este é um projeto estático, então não requer instalação.

1. Baixe os arquivos do projeto.
2. Dê dois cliques no arquivo `index.html`.
3. Comece a postar seus patos!