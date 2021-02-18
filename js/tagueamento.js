// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//função que configura o evento para enviar ao google analitycs (contato)  falta enviar o evento ao google
function addContato(){
	ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo', {
	    hitCallback: function() {
	      console.log("entre_em_contato callback")
	    }
  	});	
}

//função que configura o evento para enviar ao google analitycs (PDF)  falta enviar o evento ao google
function addPDF(){
	ga('send', 'event', 'menu', 'download_pdf', 'download_pdf', {
	    hitCallback: function() {
	      console.log("pdf callback")
	    }
  	});	
}
//função para mostrar o popup de envio
function enviar(){
	ga('send', 'event', 'contato', 'enviadao', 'enviado', {
	    hitCallback: function() {
	      console.log("enviado callback")
	    }
  	});	
}

//criação de evento ao preenchimento dos campos da pg contato -- falta enviar o evt ao google
function preenchimento(nome){
	//se o checkbox estiver marcado mostra o botão de enviar, se não 'esconde' ele
	if(nome === "aceito" && document.getElementById("Check").checked){
		$("#EnviarDados").show()
	}
	if(nome === "aceito" && !document.getElementById("Check").checked){
		$("#EnviarDados").hide()
	}
	ga('send', 'event', 'contato', nome, 'preencheu', {
	    hitCallback: function() {
	      console.log("enviou "+ nome +" callback")
	    }
  	});	

}

//criação de evento ao clicar no "ver mais" da pagina analise (3 imagens)
function analise(nome){
	ga('send', 'event', 'analise', 'ver_mais', nome, {
	    hitCallback: function() {
	      console.log("ver_mais "+ nome +" callback")
	    }
  	});	

}

$(document).ready(function(){
	ga('send', {
  		hitType: 'pageview',
  		page: location.pathname,
  		hitCallback: function(){
  			console.log("pageview enviado!" + location.pathname)
  		}
	});
})