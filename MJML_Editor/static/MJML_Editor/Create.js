let workPlace = document.getElementById("workPlace");

let spalte1Template;
let spalte2Template;
let spalte3Template;
let trennlinieTemplate;

function initializeTemplate1() {
    spalte1Template = `
  <div style="">
    <!--[if mso | IE]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
        <tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr><td class="" style="vertical-align:top;width:300px;">
          <![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:200px;"> <img height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="200" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td><td class="" style="">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
        <tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
              <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr><td class="" style="vertical-align:top;width:600px;">
          <![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td></tr></table>
                <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      </td></tr></table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
`;
}

function initializeTemplate2() {
    spalte2Template = `
<div style="">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
              <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:150px;"> <img height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
              <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:150px;"> <img height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style=""
            >
          
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
              <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
`;
}

function initializeTemplate3() {
    spalte3Template = `
<div style="">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:100px;"> <img height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:100px;"> <img height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
              <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:100px;"> <img height="auto" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
            <td
               class="" style=""
            >
          
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
              <div style="background:white;background-color:white;margin:0px auto;max-width:1200px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                        <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                        <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                        <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                        <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33.3%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Helvetica Neue;font-size:20px;font-style:italic;line-height:1;text-align:left;color:#626262;">
                                  <mj-raw>
                                    <div id="editor"></div></mj-raw>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
`;
}

function initializeTrennlinie() {
    trennlinieTemplate = `<div style="">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background-color:white;margin:0px auto;max-width:1200px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style=""
            >
          <![endif]-->
              <p style="border-top:solid 1px #000000;margin:0px auto;width:100%;"> </p>
              <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #000000;font-size:1;margin:0px auto;width:400px;" role="presentation" width="400px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>`;
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
    } else if (id === "spalte2") {
        initializeTemplate2();
        dragged = spalte2Template;
    } else if (id === "spalte3") {
        initializeTemplate3();
        dragged = spalte3Template;
    } else if (id === "trennlinie") {
        initializeTrennlinie();
        dragged = trennlinieTemplate;
    }
    if (workPlace.childElementCount > 0) {
        for (let i = 0; i < workPlace.childElementCount; i++) {
            let contains = workPlace.children[i].contains(event.target);
            if (contains) {
                let newSection = document.createElement("div");
                workPlace.insertBefore(newSection, workPlace.children[i].nextSibling);
                newSection.innerHTML += dragged;
                var editor = new FroalaEditor('#editor');
                break;
            }
        }
    } else {
        let newSection = document.createElement("div");
        workPlace.appendChild(newSection);
        newSection.style.marginTop = "30px";
        newSection.innerHTML += dragged;
        let editor = new FroalaEditor('#editor')
    }
    workPlace.style.overflowY = "scroll";
}