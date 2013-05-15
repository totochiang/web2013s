

var scity = {
        "�n��": ["�n�륫"],
        "�x��": ["���", "�۩�", "�M��", "�s��", "�j��"],
        "�x�_": ["����", "�s��"],
        "�x�n": ["�w��", "�Ψ�", "�¨�", "�s��","�ɤ�"],
        "�x�F": ["�x�F��", "���s"],
        "�Ÿq": ["���U"],
        "��": ["�C��"],
        "�y��": ["�y����", "Ĭ�D", "�n�D"],
        "�̪F": ["�̪F��", "�F��", "�D�s"],
        "����": ["���ƥ�", "�G�L", "����"],
        "�s�_��": ["�H��", "�a�q", "���s", "�T��", "�U��","����"],
        "�s��": ["�F��"],
        "���": ["�j��","���c", "�[��", "�s��", "������"],
        "�Ὤ": ["�Ὤ��"],
        "�]��": ["�T�W"],
        "���L": ["��n", "���"],
        "����": ["����", "���s", "��������"]
    }, cityToWoeid = {
        "�C��": 2306188,
        "�T�W": 2306229,
        "�T��": 2306228,
        "���c": 2306184,
        "�G�L": 2306195,
        "�Ψ�": 2306193,
        "����": 2306179,
        "�n�륫": 2306204,
        "�n�D": 2306243,
        "�x�F��": 2306190,
        "�j��": 2306209,
        "�j��": 2306210,
        "�w��": 2306182,
        "�y����": 2306198,
        "�̪F��": 2306189,
        "���s": 2306199,
        "����": 2306180,
        "���U": 2306206,
        "���ƥ�": 2306183,
        "��n": 2306212,
        "�s��": 2306217,
        "�s��": 2306186,
        "�s��": 2306218,
        "�F��": 2306185,
        "�F��": 2306213,
        "�D�s": 2306224,
        "������": 2306254,
        "�H��": 2306211,
        "�M��": 2306194,
        "�ɤ�": 2306232,
        "�۩�": 2306207,
        "�Ὤ��": 2306187,
        "�U��": 2306231,
        "Ĭ�D": 2306208,
        "���": 2306250,
        "���": 2306181,
        "�[��": 2306200,
        "���s": 2306223,
        "���s": 2306227,
        "����": 2306251,
        "��������": 2306255,
        "�a�q": 2306214,
        "����": 2306201,
        "�¨�": 2306203,
        "�s��": 2306202
    }, cityInit = function () {
        var a = [],
            c;
        for (c in cityToWoeid) {a.push('<div class="btn btn-link" id="' + cityToWoeid[c] + '">' + c + "</div>");}
        $("#method1").append(a);
         a = [];
           var d;
//        for (d in city) a.push("<option>" + city[d] + "</option>");
        $("#citybox1").append(a);
        $("#citybox1").trigger("change");
      //  $(".selectpicker").selectpicker()
    }, updateWeather = function (a) {
        $.getJSON("http://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid=" + a, {}, function (a, d) {
            console.log("data", a);
            console.log("status", d);
            var b = a.query.results.channel.item,
                e = b.title,
                f = b.lat + "," + b.long,
                g = b.pubDate,
                h = b.condition.temp,
                u = b.condition.text;
$("#result #title").text(e);
$("#result #location").text(f);
$("#result #temp").text(h +"��");
$("#result #text").text(u);
$("#result #date").text(g);

  });
    };
$("#method1").on("click", "div.btn.btn-link", function (a) {
    console.log(a.target.id);
    updateWeather(a.target.id);
});
$("#citybox1").change(function () {
    var a = $(this).find(":selected").text(),
        c = [],
        d = cityToWoeid[scity[a][0]],
        b;
    for (b in scity[a]) c.push("<option>" + scity[a][b] + "</option>");
    $("#citybox2").children().remove();
    $("#citybox2").append(c);
    updateWeather(d);
});
$("#citybox2").change(function () {
    var a = $(this).find(":selected").text();
    updateWeather(cityToWoeid[a]);
});

