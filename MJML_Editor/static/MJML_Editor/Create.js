let workPlace = document.getElementById("workPlace");

let spalte1Template;
let spalte2Template;
let spalte3Template;
let trennlinieTemplate;

function initializeTemplate1() {
    spalte1Template = `
<!-- Side image -->
<mj-section background-color="white">
    <!-- Left image -->
    <mj-column>
        <mj-image width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
    </mj-column>
    <!-- right paragraph -->
    <mj-column>
        <mj-text font-style="italic"
            font-size="20px"
            font-family="Helvetica Neue"
            color="#626262">
            <mj-raw>
            <div id="editor"></div>
                </mj-raw>
        </mj-text>
        <mj-text color="#525252">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>
    </mj-column>
</mj-section>
`;
}

function initializeTemplate2() {
    spalte2Template = `
<!-- Side image -->
<mj-section background-color="white">
    <!-- Left image -->
    <mj-column>
        <mj-image width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
    </mj-column>
    <!-- right paragraph -->
    <mj-column>
        <mj-text font-style="italic"
            font-size="20px"
            font-family="Helvetica Neue"
            color="#626262">
            <mj-raw>
            <div id="editor"></div>
                </mj-raw>
        </mj-text>
        <mj-text color="#525252">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>
    </mj-column>
</mj-section>
`;
}

function initializeTemplate3() {
    spalte3Template = `
<!-- Side image -->
<mj-section background-color="white">
    <!-- Left image -->
    <mj-column>
        <mj-image width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
    </mj-column>
    <!-- right paragraph -->
    <mj-column>
        <mj-text font-style="italic"
            font-size="20px"
            font-family="Helvetica Neue"
            color="#626262">
            <mj-raw>
            <div id="editor"></div>
                </mj-raw>
        </mj-text>
        <mj-text color="#525252">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>
    </mj-column>
</mj-section>
`;
}

function initializeTrennlinie() {
    trennlinieTemplate = `
<!-- Side image -->
<mj-section background-color="white">
    <!-- Left image -->
    <mj-column>
        <mj-image width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
    </mj-column>
    <!-- right paragraph -->
    <mj-column>
        <mj-text font-style="italic"
            font-size="20px"
            font-family="Helvetica Neue"
            color="#626262">
            <mj-raw>
            <div id="editor"></div>
                </mj-raw>
        </mj-text>
        <mj-text color="#525252">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>
    </mj-column>
</mj-section>
`;
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    let dragged;
    if (id === "spalte1") {
        initializeTemplate1();
        dragged = spalte1Template;
    }
    else if (id === "spalte2") {
        initializeTemplate2();
        dragged = spalte2Template;
    }
    else if (id === "spalte3") {
        initializeTemplate3();
        dragged = spalte3Template;
    }
    else if (id === "trennlinie") {
        initializeTrennlinie();
        dragged = trennlinieTemplate;
    }
    if (workPlace.childElementCount > 0) {
        for (let i = 0; i < workPlace.childElementCount; i++) {
            let contains = workPlace.children[i].contains(event.target)
            if (contains){
                let newSection = document.createElement("div");
                workPlace.insertBefore(newSection, workPlace.children[i].nextSibling);
                newSection.innerHTML += dragged;
                var editor = new FroalaEditor('#editor')
                break;
            }
        }
    } else {
        let newSection = document.createElement("div");
        workPlace.appendChild(newSection);
        newSection.innerHTML += dragged;
        let editor = new FroalaEditor('#editor')
    }
}