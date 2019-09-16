var startYear, endYear, amountRecords, topic;
$("#b_submit").on("click", function (event) {
    event.preventDefault();
    startYear = $("#start-year").val().trim();
    endYear = $("#end-year").val().trim();
    amountRecords = $("#exampleFormControlSelect1").val();
    topic = $("#topic").val().trim();
    console.log(topic);
    console.log(amountRecords);
    console.log(startYear);
    console.log(endYear);
});
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin_date${startYear}0101&end_date${endYear}0101&api-key=rsOAxS0hwzlpLwlgmtee20GXdjxKboZy`;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (resp) {
    console.log(resp.response);
    var results = resp.response.docs;
    for (var i = 0; i < results.length; i++) {
        var topArt = ("<div>");
        var p = $("<p>").text("year")
    // _____.append(p);
    // _____.append(amountRecords)
    // _____.prepend(topic)
    }
});


//example url to call: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=thekey
// text, fname, lname, email
// log years