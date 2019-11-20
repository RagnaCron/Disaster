let work_place = document.getElementById("workPlace");

let spalte1_template;
let spalte2_template;
let spalte3_template;
let trennlinie_template;
let header_template;
let footer_template;
let font;
let template_id;
let color;
let background;

function initializeHeader() {
    header_template = `
    <div style="">
    <div style="background-color:${background};margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${background};width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div class="mj-column-px-1200 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <textarea rows="4" cols="4" style="font-family:${font};font-size:20px;line-height:1;text-align:right;color:${color};background-color:${background};width:50%;border-color: black;"></textarea>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="background:white;background-color:${background};margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${background};width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div class="mj-column-px-1200 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <p style="border-top:solid 1px #000000;font-size:1;margin:0px auto;width:100%;"> </p>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;
}

function initializeFooter(){
    footer_template = `
    <div style="">
    <div style="background-color:${background};margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${background};width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div class="mj-column-px-1200 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <p style="border-top:solid 1px #000000;font-size:1;margin:0px auto;width:100%;"> </p>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="background-color:${background};margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${background};width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div class="mj-column-px-1200 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <textarea rows="4" cols="4" style="font-family:${font};font-size:20px;line-height:1;text-align:right;color:${color};background-color:${background};width:50%;border-color: black;"></textarea>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;
}

function initializeTemplate1() {
    spalte1_template = `
  <div style="">
    <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:${font};font-size:20px;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;
}

function initializeTemplate2() {
    spalte2_template = `
<div style="">
    <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:${font};font-size:20px;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:${font};font-size:20px;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;
}

function initializeTemplate3() {
    spalte3_template = `
<div style="">
    <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:${font};font-size:20px;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:${font};font-size:20px;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;
}

function initializeTrennlinie() {
    trennlinie_template = `
  <div style="">
    <div style="background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <p style="border-top:solid 1px #000000;margin:0px auto;width:100%;"> </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;
}

function loadHeaderAndFooter(){
    work_place.innerHTML = "";
    initializeHeader();
    let header = document.createElement("div");
    header.id = "header";
    header.innerHTML += header_template;
    header.style.marginTop = "30px";
    work_place.appendChild(header);
    initializeFooter();
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML += footer_template;
    work_place.appendChild(footer);
}

function loadTemplate(template){
    template_id = template;
    const loader = document.getElementById("loader");
    loader.remove();
    if (template === 0){
        font = "Arial";
        color ="black";
        background = "white";
    }
    else if(template === 1){
        font = "Roboto";
        color = "purple";
        background = "lightsalmon";
        loadHeaderAndFooter();
    }
    else if(template === 2){
        font = "Arial";
        color = "white";
        background = "lightblue";
        loadHeaderAndFooter();
    }
}

function reset() {
    let loader = document.createElement("img");
    loader.id = "loader";
    work_place.appendChild(loader);
    loadTemplate(template_id);
}

function save(){

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
        dragged = spalte1_template;
    } else if (id === "spalte2") {
        initializeTemplate2();
        dragged = spalte2_template;
    } else if (id === "spalte3") {
        initializeTemplate3();
        dragged = spalte3_template;
    } else if (id === "trennlinie") {
        initializeTrennlinie();
        dragged = trennlinie_template;
    }
    if (work_place.childElementCount > 0) {
        for (let i = 0; i < work_place.childElementCount; i++) {
            let contains = work_place.children[i].contains(event.target);
            if (contains) {
                let newSection = document.createElement("div");
                newSection.className = id;
                newSection.innerHTML += dragged;
                work_place.insertBefore(newSection, work_place.children[i].nextSibling);
                var editor = new FroalaEditor('#editor');
                let footer = document.getElementById("footer");
                work_place.insertBefore(footer, work_place.lastChild.nextSibling);
                break;
            }
        }
    } else {
        initializeHeader();
        let header = document.createElement("div");
        header.id = "header";
        header.innerHTML += header_template;
        header.style.marginTop = "30px";
        work_place.appendChild(header);
        let newSection = document.createElement("div");
        newSection.className = id;
        newSection.innerHTML += dragged;
        work_place.appendChild(newSection);
        var editor = new FroalaEditor('#editor');
        initializeFooter();
        let footer = document.createElement("div");
        footer.id = "footer";
        footer.innerHTML += footer_template;
        work_place.appendChild(footer);
    }
    work_place.style.overflowY = "scroll";
}