var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elText = document.querySelector(".text");
var elBtn = document.querySelector(".reset");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var inputValue = elInput.value.trim();
    
    function wordsBig(text){
        var newArray = text.split(" ");
        
        var largeWords = "";
        
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].length > largeWords.length){
                largeWords = newArray[i];
            }
        }
        return largeWords;
    }
    var arrayWords = wordsBig(inputValue);
    
    elText.textContent = arrayWords;

    elBtn.addEventListener("click", function() {
        elText.textContent = ""
    })
});