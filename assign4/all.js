

var scity = {
        "南投": ["南投市"],
        "台中": ["西屯", "石岡", "清水", "新社", "大甲"],
        "台北": ["內湖", "新店"],
        "台南": ["安平", "佳里", "麻豆", "新化","玉井"],
        "台東": ["台東市", "關山"],
        "嘉義": ["布袋"],
        "基隆": ["七堵"],
        "宜蘭": ["宜蘭市", "蘇澳", "南澳"],
        "屏東": ["屏東市", "東港", "枋山"],
        "彰化": ["彰化市", "二林", "鹿港"],
        "新北市": ["淡水", "鶯歌", "金山", "三芝", "萬里","雙溪"],
        "新竹": ["東區"],
        "桃園": ["大園","中壢", "觀音", "龍潭", "桃園機場"],
        "花蓮": ["花蓮市"],
        "苗栗": ["三灣"],
        "雲林": ["斗南", "虎尾"],
        "高雄": ["左營", "岡山", "高雄機場"]
    }, cityToWoeid = {
        "七堵": 2306188,
        "三灣": 2306229,
        "三芝": 2306228,
        "中壢": 2306184,
        "二林": 2306195,
        "佳里": 2306193,
        "內湖": 2306179,
        "南投市": 2306204,
        "南澳": 2306243,
        "台東市": 2306190,
        "大園": 2306209,
        "大甲": 2306210,
        "安平": 2306182,
        "宜蘭市": 2306198,
        "屏東市": 2306189,
        "岡山": 2306199,
        "左營": 2306180,
        "布袋": 2306206,
        "彰化市": 2306183,
        "斗南": 2306212,
        "新化": 2306217,
        "新店": 2306186,
        "新社": 2306218,
        "東區": 2306185,
        "東港": 2306213,
        "枋山": 2306224,
        "桃園機場": 2306254,
        "淡水": 2306211,
        "清水": 2306194,
        "玉井": 2306232,
        "石岡": 2306207,
        "花蓮市": 2306187,
        "萬里": 2306231,
        "蘇澳": 2306208,
        "虎尾": 2306250,
        "西屯": 2306181,
        "觀音": 2306200,
        "金山": 2306223,
        "關山": 2306227,
        "雙溪": 2306251,
        "高雄機場": 2306255,
        "鶯歌": 2306214,
        "鹿港": 2306201,
        "麻豆": 2306203,
        "龍潭": 2306202
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
$("#result #temp").text(h +"度");
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

