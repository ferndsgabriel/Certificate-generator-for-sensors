function hexToDecimal(hex:string | number, decimal:number, multiply:number) {
    if (typeof hex !== "string") return 0;
    const value = parseInt(hex, 16);

    return  (value * multiply).toFixed(decimal);
}


function indexToValue (index:string | number) {
    if (typeof index === 'string'){
        index = parseInt(index);
    }

    switch (index){
        case 3 :
        return `${index} - (Hno / Função de histerese, normalmente aberto)`;

        case 4 :
            return `${index} - (Hnc / Função de histerese, normalmente fechado)`;

        case 5 :
        return `${index} - (Fno / Função de janela, normalmente aberto)`;

        case 6 :
        return `${index} - (Fnc / Função de janela, normalmente fechado)`;
    } 

    return '';
    
}

function hexToAscii(hex:string | number) {

    const hexString = hex.toString();
    hex = hexString.replace(/\s+/g, '');

    let ascii = '';

    for (let i = 0; i < hexString.length; i += 2) {
        const byte = hexString.substr(i, 2);
        ascii += String.fromCharCode(parseInt(byte, 16));
    }

    return ascii;
}


function indexToValuePn (index:string | number) {
    if (typeof index === 'string'){
        index = parseInt(index);
    }

    switch (index){
        case 0 :
        return `${index} - (PnP)`;

        case 1 :
            return `${index} - (nPn)`;
    } 

    return '';
    
}

function indexToValueUni (index:string | number) {
    if (typeof index === 'string'){
        index = parseInt(index);
    }

    switch (index){
        case 0 :
        return `${index} - (MPa)`;

        case 1 :
        return `${index} - (bar)`;
        
        case 2 :
        return `${index} - (psi)`;
    } 

    return '';
    
}

function indexToValueColr (index:string | number) {
    if (typeof index === 'string'){
        index = parseInt(index);
    }

    switch (index){
        case 2 :
        return `${index} - (rEd)`;

        case 3 :
        return `${index} - (GrEn)`;
        
        case 4 :
        return `${index} - (r1ou)`;

        case 5 :
        return `${index} - (G1ou)`;

        case 6 :
        return `${index} - (r2ou)`;
        
        case 7 :
        return `${index} - (G2ou)`;

        case 8 :
        return `${index} - (r-12)`;

        case 9 :
        return `${index} - (G-12)`;

        case 10 :
        return `${index} - (r-cF)`;
        
        case 11 :
        return `${index} - (G-cF)`;
    } 

    return '';
    
}












export { hexToDecimal, indexToValue,  indexToValuePn, indexToValueUni, hexToAscii, indexToValueColr }