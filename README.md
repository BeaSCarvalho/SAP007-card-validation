# Cartão de Crédito Válido

A aplicação servirá para o usuário verificar se o cartão de crédito dele serve para realizar compras pela internet pois há cartões de crédito que é possível fazer compras "fisicamente", porém, não são aptos para realizar compras pela internet. Dessa forma, ao fazer uma consulta antes, o usuário poderá fazer compras em sites sem passar por possíveis constrangimentos, por exemplo. Essa verificação é feita pelo algoritmo de Luhn.

O layout é de fácil entendimento: no início há uma breve introdução para o usuário e um local para inserir o número do cartão. Os cartões de crédito geralmente têm de 13 a 16 dígitos, portanto se o usuário colocar uma quantidade fora desse intervalo aparece um alerta para ele digitar corretamente;
Ao lado do input dos números tem um botão que aciona a verificação e logo abaixo aparece a resposta, se o cartão é válido ou não, encobrindo os primeiros números e ficando visível apenas os quatro últimos. Assim que o botão é acionado, ao lado dele surge um outro botão ("Tente outro cartão") que apaga os dados e possibilita o usuário a digitar outro número.

Protótipo de como seria o layout
![Protótipo-card-validation](https://github.com/BeaSCarvalho/SAP007-card-validation/blob/96b38109754f2017f909308d04c665cb17f50d8c/Prot%C3%B3tipo-card-validation.png)
