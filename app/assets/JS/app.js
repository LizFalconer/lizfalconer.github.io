
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA841CUwgTbF0jyFUgvgQyELWR9ITWN2Ss",
    authDomain: "wiretapped-7e797.firebaseapp.com",
    databaseURL: "https://wiretapped-7e797.firebaseio.com",
    projectId: "wiretapped-7e797",
    storageBucket: "wiretapped-7e797.appspot.com",
    messagingSenderId: "654371765851"
  };
  firebase.initializeApp(config);

var dbRef = firebase.database();
var dataRef = dbRef.ref('candidates');
var data = [];
dataRef.once('value').then(function(snapshot) {
    data = snapshot.val();
    console.log(data);
});

function search(nameKey, dataArray){
    var filteredData = [];
    for (var i=0; i < dataArray.length; i++) {
        if (dataArray[i].category === nameKey) {
            filteredData.push(dataArray[i])
        }
    }
    showData(filteredData);
}


function getIndividualDataItem(id, dataArray){
    var dataItem = [];
    for (var i=0; i < dataArray.length; i++) {
        if (dataArray[i].id === id) {
            dataItem.push(dataArray[i])
        }
    }
    $("#full-item-view .image img").attr("src", dataItem[0].thumbnail)
    $("#full-item-view .image img").attr("alt", dataItem[0].name + " bio")
    $("#full-item-view .info h3").text(dataItem[0].name)
    $("#full-item-view .info .long-description").text(dataItem[0].long_description)
}

function buildHtml(item) {
    var html = "<div class='item'>"
                + "<div class='image'>"
                    + "<img src='" + item.thumbnail + "' alt='" + item.name + " bio' />"
                + "</div>"
                + "<div class='info'>"
                    + "<h3>" + item.name + "</h3>"
                    + "<p>" + item.short_description + "</p>"
                    + "<button class='go-to-item' data-target='" + item.id + "' type='button'>Read more</button>"
                + "</div>"
            + "</div>"
    return html;
}

function showData(filteredData) {
    var finishedData = "";
    for (var n=0; n < filteredData.length; n++) {
        finishedData += buildHtml(filteredData[n]);
    }
    $("#filtered-data").html(finishedData);
}

$("#filter-data").on("click", function() {
    var category = $("#filter select").val();
    var categoryText = $("#filter select option[value=" + category + "]").text();
    console.log(category)
    search(category, data);
    $("h2").fadeIn();
    $("#result-type").text(categoryText)
});

$("#filtered-data").on("click", ".go-to-item", function() {
    var target = $(this).data("target");
    console.log(target);
    $("#results-list").hide();
    $("#full-item-view").show();
    getIndividualDataItem(target, data)
});

$("#back-to-start").on("click", function() {
    $("#results-list").show();
    $("#full-item-view").hide();
})
