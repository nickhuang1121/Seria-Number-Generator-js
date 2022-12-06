# Seria-Number-Generator-js
能夠自動產生序號的javascript，可以設定大小寫、數字、分組...等。

# Installation
<script src="serial-number-generator.js"></script>

# JavaScript
let SN = serialNumberGenerator();

let SN = serialNumberGenerator(
    {
        SNLength: 20, //serial Length
        useUpperCase: true, // UpperCase
        useLowerCase: true, // LowerCas
        useNumber: true, // Number
        group: 4, // Text grouping
        quantity: "10" // How many serial numbers to generate
    }
);
