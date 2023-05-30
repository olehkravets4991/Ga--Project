# Project 1
by Oleh Kravets

### Project Description

Describes characters for Game of Thrones


### API Description

https://anapioficeandfire.com/api/characters/583

example code
///css

h1 {
    text-align: center; 
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 50px;
    height: 70px;
    margin-bottom: 30px;
    margin-top: 30px;
}
h2 {
    text-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;

}

#container {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    
}

#result {
    background-color: aquamarine;
    height: 500px;
    width: 400px;
}


///js
const $searchForm = $("form");




$searchForm.on("submit", event => {
    event.preventDefault();

    //generate data from the target object
    const formData = new FormData(event.target);

    //get the value from the generated data where the name value is "character" (on the form)
    const pokemon = formData.get("character").toLowerCase();

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




### Mockup

![GoT](https://i.imgur.com/cIZl5Zl.png)

### Details difficulties



### Daily schendule
|day|task|
|---|----|
|1| 5/24 Set up the page
|2| 5/25 Start css
|3| 5/26 HTML and CSS complete
|4| 5/27 Work on JS code
|5| 5/28 Updates
|6| 5/29 Updates
