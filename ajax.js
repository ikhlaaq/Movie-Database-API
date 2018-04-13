$(function () {

    // Länka form
    $('#search-form').submit(function (e) {
        e.preventDefault();
        var searchTerm = $('#search-input').val();
        getRequest(searchTerm);

    });

    //Hämta data

    function getRequest(input) {
        var url = 'http://www.omdbapi.com/?';
        var rules = {
            apiKey: '30ddc182',
            s: input,
            r: `json`
        };

        $.ajax({

            url: url,
            type: 'GET',
            data: rules,
            dataType: 'json'

        })
            .done(function (done) {
                console.log(done);
                showResults(done.Search);

            })

            .fail(function (fail) {
                console.log(fail);

            });

    }

    //Visa data
    function showResults(data) {
        $.each(data, function (i, value) {
            $('#search-results').append(`<img src="${value.Poster}"><br><a href="http://www.imdb.com/title/${value.imdbID}" class="link" target="_blank">Click for more info</a>`);
        })
    }
});
