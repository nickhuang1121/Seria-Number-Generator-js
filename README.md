### [LIVE DEMO ➫](https://codepen.io/BlackDog1121/pen/qBKvaKB)

# Serial-Number-Generator-js
Automatically generate javascript serial numbers, you can set capitalization, numbers, grouping...
自動產生序號的js，可以設定英文字大小寫、數字，幾個字與序號數量，以及是否分組。

# Installation
<script src="serial-number-generator.js"></script>

## JavaScript
### Fast Use
```javascript
let SN = serialNumberGenerator();
```
### Detailed settings
```javascript
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
```


## Sample Demo
### Html
```html
<ul id="list"></ul>
<script src="serial-number-generator.js"></script>
```

### JavaScript
```javascript
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

let list = document.querySelector("#list");
let li = "";

SN.forEach(function (i) {
    li += `<li>${i}</li>`
});
list.innerHTML = li;
```

