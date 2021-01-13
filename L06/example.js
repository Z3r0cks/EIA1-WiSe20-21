var example;
(function (example) {
    var europe08 = 4965.7;
    var europe18 = 4209.3;
    var africa08 = 1028;
    var africa18 = 1235.5;
    var southa08 = 1132.6;
    var southa18 = 1261.5;
    var northa08 = 6600.4;
    var northa18 = 6035.6;
    var asia08 = 12954.7;
    var asia18 = 16274.1;
    var australia08 = 1993;
    var australia18 = 2100.5;
    var total = europe18 + africa18 + southa18 + northa18 + asia18 + australia18;
    function changeCountryValue(continent, newValue, oldValue) {
        document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + continent;
        document.querySelector("h2").innerHTML = newValue.toString();
        document.querySelector("p").innerHTML = "Emission absolute of " + continent + "in 2018";
        document.querySelector("#h2a").innerHTML = (Math.round((newValue / total) * 100)) + "%";
        document.querySelector("#h2b").innerHTML = (Math.round(((newValue / oldValue) - 1) * 100)) + "%";
        document.querySelector("#h2c").innerHTML = (Math.round(newValue - oldValue)) + "kg CO2";
        ;
        document.querySelector(".chart").setAttribute('style', 'height:' + ((newValue / total) * 100) + '%');
    }
    const myH2 = document.querySelector("#firstValue");
    console.log(myH2);
    changeCountryValue("Europa", europe18, europe08);
    changeCountryValue("Africa", africa18, africa08);
    changeCountryValue("Africa", africa18, africa08);
    changeCountryValue("Africa", africa18, africa08);
    changeCountryValue("Africa", africa18, africa08);
    changeCountryValue("Africa", africa18, africa08);
})(example || (example = {}));
//# sourceMappingURL=example.js.map