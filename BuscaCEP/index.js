const cep = document.querySelector('#cep')
const adress = document.querySelector('#adress')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const message = document.querySelector('#message')


cep.addEventListener  ('focusout', async ()=>{

    try {
    
    const onlyNumbers = /^[0-9]+$/;
    const cepValid = /^[0-9]{8}$/; 

    if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)){
        alert("O CEP inserido é invalido!")
        throw{cep_error: 'cep invalid'};
       
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    if(!response.ok){
        throw await response.json();
    }

    const responseCep = await response.json();
    
    adress.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    cidade.value = responseCep.localidade;


    }catch (error) {
        if(error?.error_cep){
            message.textContent = error.cep_error;
            setTimeout(()=>{
                message.textContent = '';
            },5000);
        }
        console.log(error)
    }

})