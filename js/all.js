let SN = serialNumberGenerator(
    {
        SNLength: 20,
        useUpperCase: false,
        useLowerCase: false,
        useNumber: true,
        group: 4,
        quantity: "10"
    }
);



let list = document.querySelector("#list");
let li = "";

SN.forEach(function (i) {
    li += `<li>${i}</li>`
});
list.innerHTML = li;


