//export const dateRegexPattern = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;


export const formatDateToString = (date, timeToo = false) =>{
    let string = `${date.getDate() > 9 ? date.getDate() : "0"+date.getDate()}/${date.getMonth()+1 > 9 ? date.getMonth() +1 : "0"+(date.getMonth()+1)}/${date.getFullYear()}`;
    if(timeToo){
        string += ` ${date.getHours() > 9 ? date.getHours() : "0"+date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : "0"+date.getMinutes()}:${date.getSeconds() > 9 ? date.getSeconds() : "0"+date.getSeconds()}`
    }
    return string;
}

export const validaAdulto = (dtNasc) => {
    var q = dtNasc.split("/");
    var dtNs = new Date(q[2] + "-" + q[1] + "-" + q[0]);

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year - 18, month, day);

    if (dtNs > c) {
        return false;
    } else {
        return true;
    }
}

export const dateFromTimestampFirebase = (firebaseDate)=>{
    if(!firebaseDate){
        return new Date(2023,6,1);
    }
    const fireBaseTime = new Date(
        firebaseDate.seconds * 1000 + firebaseDate.nanoseconds / 1000000,
    );
    return fireBaseTime;
}

export const stringToDate = (dateString)=>{
    const [data, hora] = dateString.split(' ');
    const [day, month, year] =  data.trim().split('/');
    const [hour, minute, second] = hora ? hora.trim().split(':') : [0,0,0];
    return new Date(parseInt(year),parseInt(month)-1,parseInt(day), parseInt(hour), parseInt(minute) || 0, parseInt(second) || 0, 0 );
}

export const stringToDatePatern = (str, pattern) =>{
    let value = typeof str == 'string' ? str : '';
    const maxLength = pattern.length;
    const numbersOnly = value.replace(/\D/g, '');
    let formattedValue = '';
    let j = 0;
    for (let i = 0; i < pattern.length && j < numbersOnly.length; i++) {
      if (pattern[i] === '#') {
        formattedValue += numbersOnly[j++];
      } else {
        formattedValue += pattern[i];
      }
    }
    return formattedValue.length >= maxLength ? formattedValue.substring(0,maxLength) : formattedValue;
}