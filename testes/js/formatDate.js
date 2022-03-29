/**
 * Escreva uma função que converta a data de entrada do usuário formatada como MM/DD/YYYY em um 
 * formato exigido por uma API (YYYYMMDD). O parâmetro "userDate" e o valor de retorno são strings.
 * 
 * Por exemplo, ele deve converter a data de entrada do usuário "31/12/2014" em "20141231" adequada para a API.
 * 
 */

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const userDateFormatAPI = userDate.split('/');
  const mes = userDateFormatAPI[0];
  const dia = userDateFormatAPI[1];
  const ano = userDateFormatAPI[2];

  return `${ano}${mes}${dia}`;
}

console.log(formatDate("12/31/2014"));