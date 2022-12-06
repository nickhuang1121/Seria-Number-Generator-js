function serialNumberGenerator(option) {


    let reData = [];
    let newSN = '';
    let _ = {
        SNLength: 20,
        useUpperCase: true,
        useLowerCase: false,
        useNumber: true,
        useEng: true,
        group: 0,
        quantity: 1,
    };


    if (option !== undefined) {
        _ = {
            SNLength: option.SNLength !== undefined ? parseInt(option.SNLength) : _.SNLength,
            useUpperCase: option.useUpperCase === false ? false : _.useUpperCase,
            useLowerCase: option.useLowerCase === true ? true : _.useUpperCase,
            useNumber: option.useNumber === false ? false : _.useUpperCase,
            useEng: option.useUpperCase === true || option.useLowerCase === true ? true : false,
            group: option.group === undefined ? 0 : option.group,// underfined NaN 0
            quantity: option.quantity !== undefined ? parseInt(option.quantity) : _.useUpperCase,// underfined NaN 
        };
    };



    const textEng = "abcdefghijklmnopqrstuvwxyz";

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function makeSN() {
        newSN = '';

        function getEng() {
            let text = textEng.charAt(Math.floor(Math.random() * textEng.length));

            if (_.useUpperCase === true && _.useLowerCase === true && getRandom(0, 1) === 0) {
                text = text.toUpperCase();
            };
            if (_.useUpperCase === true && _.useLowerCase === false) {
                text = text.toUpperCase();
            };
            return text;
        };

        function getNum() {
            let text = getRandom(0, 9);
            return text;
        };






        let temp = '';
        for (i = 1; i < _.SNLength + 1; i++) {


            if (_.useEng === true && _.useNumber === true) {
                if (getRandom(0, 1) === 0) {
                    temp = getNum();
                } else {
                    temp = getEng();
                };

            };
            if (_.useEng === true && _.useNumber === false) {
                temp = getEng();
            };
            if (_.useEng === false && _.useNumber === true) {
                temp = getNum();
            };
            newSN += temp;



            if (i !== _.SNLength && _.group !== undefined && _.group !== NaN && _.group !== 0 && i % _.group === 0) { //是否要分組的判斷
                newSN += "-"
            };
        };


        if (reData.indexOf(newSN) === -1) {
            reData.push(newSN);
        } else {
            makeSN();
        };




    };


    if (isNaN(_.quantity)) {
        alert("序號數量 設定有誤，請輸入數字!")
        return null
    } else {
        for (let i = 0; i < _.quantity; i++) {
            makeSN();
        };
    };






    return reData;

}