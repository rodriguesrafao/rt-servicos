export const primeiroNome = (str)=>{
    return preventNULL(str).split(' ')[0];
}

export const preventNULL = (str) => {
    if(str == null || str == undefined){
        return new String('');
    }
    return new String(str);
}

export const verificarTipoEntrada = (entrada) =>{
    if (!isNaN(entrada)) {
        return "numero";
    }
    if (/^[a-zA-Z]+$/.test(entrada)) {
        return "texto";
    }
    return "misto";
}

export const primeiraMaiuscula = (entrada, all = false)=>{
    let string  = preventNULL(entrada);
    if(string.length > 0){
        if(all){
            const palavras = string.split(' ');
            string = '';
            for(const palavra of palavras){
                string += palavra.charAt(0).toUpperCase()+palavra.substring(1).toLowerCase()+' ';
            }
            string = string.trim();
        }else{
            string = string.charAt(0).toUpperCase()+string.substring(1).toLowerCase();
        }
    }
    return string;
}
