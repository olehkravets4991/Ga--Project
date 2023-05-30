const $searchForm = $("form");




$searchForm.on("submit", event => {
    event.preventDefault();

    //generate data from the target object
    const formData = new FormData(event.target);

    //get the value from the generated data where the name value is "character" (on the form)
    const character = formData.get("character").toLowerCase();

    const url = `https://anapioficeandfire.com/api/characters/583${character}`

    
    
    const $screen = $(".screen");
    const $result = $(".result");

    //empty out the input field
    $('[name="character"]')[0].value = "";

    //empty out the input field
    $('[name="character"]')[0].value = "";
    const $characterImg = $(".character-image")
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        $characterImg.html(
            `<img src=${data} alt=${data.name}>`
        );
        $result.html(`
            <div>
                <b>name:&nbsp;</b> ${data.name}
            </div>
            <div>
                    <b>gender:&nbsp;</b> ${data.gender}
                </div>

                <div>
                    <b>culture:&nbsp;</b> ${data.culture}
                </div>
                <div>
                    <b>born:&nbsp;</b> ${data.born}
                </div>

                <div>
                    <b>titles:&nbsp;</b> ${data.titles}
                </div>
                <div>
                    <b>aliases:&nbsp;</b> ${data.aliases}
                </div>

        `)
    })
    .catch(() => {
        $result.html(`<div> there was an error...</div>`)
    });
});


