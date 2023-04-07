$(document).ready(function () {
    // This field for header and information
    $("#header").html(` 
    <h4> 
        Welcome to Clipboard App 
        <span> 
            <i class="fa-solid fa-circle-info ms-5 userNone" id="informationToggle"></i>
        </span>
        <span> 
            <i class="fa-solid fa-circle-half-stroke userNone" id="themeToggle"></i>
        </span>
    </h4>  
    <br/>
    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <p class="mt-3 text-primary text-start"> You can add notes to clipboard </p>
        <p class="text-primary text-start"> If you can double click to line through notes or click for normal view </p>
        <p class="text-primary text-start"> Also you can delete notes with
            <i class="fa-solid fa-xmark"></i> icon
        </p>
        <p class="text-primary text-start"> Please click to 
            <i class="fa-solid fa-circle-info" ></i>
            icon for hide these sentences and for change the site theme click to  
            <i class="fa-solid fa-circle-half-stroke"></i> icon
        </p>
    </div>
    `);
    $("#informationToggle").click( () => {
        $(".shadow-lg").toggle();
    } );
    // header and information field ends here
    
    // this field for change theme
    $("#themeToggle").click( () => {
        $("body").toggleClass("bg-dark text-white minHeight");
    } );
    // change theme field ends here

    // this field for section
    $("#section").html(`
        <textarea class="form-control" placeholder="Write your note here!" id="writeNote" rows="1"></textarea> 
        <br/>
        <button id="addNoteButton" class="btn btn-primary mt-3"> Add </button>
    `);
    // ends of section field
    
    // this field for submit and add notes to clipboard
    $("#addNoteButton").click( () => {
        let note = $("#writeNote").val();
        note = $.trim(note);
        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            <span class="text-capitalize userNone spanNote"> ${note} </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        // end of submit and clipboard field

        // this field for empty notes
        if (!note) {
            alert("You can't add empty note please try again!");
            $("#writeNote").val("");
            return false;
        } else {
                $("#listNotes").append(createDiv);
                // console.log(note);
                $("#writeNote").val("");
            };
        // empty notes field ends here

        // this field about text decoration of notes
        $(createDiv).dblclick( () => {
            $(createDiv).css({
                textDecoration: "line-through"
            });
        } );
        $(createDiv).click( () => {
            $(createDiv).css({
                textDecoration: "none"
            });
        } );
        // text decoration field ends here
    } );
});
