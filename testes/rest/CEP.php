<?php

/* ----------------- DESCRIÇÃO DO TESTE -----------------------*/

/*

Postmon é uma API para consultar CEP e encomendas de maneira fácil.

Implemente uma função que recebe CEP e retorna todos os dados relativos ao endereço correspondente.

Exemplo:

getAddressByCep('13566400') retorna:
{
	"bairro": "Vila Marina",
	"cidade": "São Carlos",
	"logradouro": "Rua Francisco Maricondi",
	"estado_info": {
	  "area_km2": "248.221,996",
	  "codigo_ibge": "35",
	  "nome": "São Paulo"
	},
	"cep": "13566400",
	"cidade_info": {
		"area_km2": "1136,907",
		"codigo_ibge": "3548906"
	},
	"estado": "SP"
}



Documentação:
https://postmon.com.br/


*/

class CEP
{
  public static function getAddressByCep($cep)
  {
    $url = "https://api.postmon.com.br/v1/cep/{$cep}";
    $ch = curl_init($url);
    curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false);
    // $dados = json_encode(curl_exec($ch), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
		$dados = curl_exec($ch);
    curl_close($ch);
    return $dados;
  }
}

var_dump(CEP::getAddressByCep($cep));
