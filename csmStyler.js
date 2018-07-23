function dbBtnGen() {
    base = document.getElementById("dbBase").value;
    hover = document.getElementById("dbHover").value;
    font = document.getElementById("dbFont").value;
    border = document.getElementById("border").value;
    document.getElementById("dbOutput").innerHTML = 
        ("This_is_a_element_placeholder {" + '<br>' +
            '&emsp;' + "background-color: #" + base + ";" + '<br>' + 
            '&emsp;' + "color: #" + font + ";" + '<br>' + 
            '&emsp;' + "border-radius: " + border + ";" + '<br>' + 
         "}" + '<br>' +
         "This is a _hover_pseudo_element: hover {" + '<br>' + 
            '&emsp;' + "background-color: #" + hover + ";" + '<br>' + 
        "}" 
          );
}

function widBtnGen() {
    base = document.getElementById("widActive").value;
    hover = document.getElementById("widHover").value;
    inactive = document.getElementById("widInact").value;
    
    if (base != '' && base != null) {
        document.getElementById("widActOutp").innerHTML = 
        ("Active_element_placeholder {background-color: #" + base + ";}");
    }
    if (hover != '' && hover != null) {
        document.getElementById("widHovOutp").innerHTML = 
        ("Hover_element_placeholder {background-color: #" + hover + ";}");
    }
    if (inactive != '' && inactive != null) {
        document.getElementById("widInactOutp").innerHTML = 
        ("Inactive_element_placeholder {background-color: #" + inactive + ";}");
    }
    
}