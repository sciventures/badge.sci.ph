
(function ($) {
  $( document ).ready(function () {
  var cssCode = '\
      .scibadge_11112014 * {\
        -webkit-box-sizing: border-box;\
           -moz-box-sizing: border-box;\
                box-sizing: border-box;\
      }\
      .scibadge_11112014 *:before,\
      .scibadge_11112014 *:after {\
        -webkit-box-sizing: border-box;\
           -moz-box-sizing: border-box;\
                box-sizing: border-box;\
      }\
      .scibadge_11112014 div,\
      .scibadge_11112014 span,\
      .scibadge_11112014 iframe,\
      .scibadge_11112014 h1,\
      .scibadge_11112014 h2,\
      .scibadge_11112014 h3,\
      .scibadge_11112014 h4,\
      .scibadge_11112014 h5,\
      .scibadge_11112014 h6,\
      .scibadge_11112014 p,\
      .scibadge_11112014 a,\
      .scibadge_11112014 em,\
      .scibadge_11112014 img,\
      .scibadge_11112014 small,\
      .scibadge_11112014 strike,\
      .scibadge_11112014 strong,\
      .scibadge_11112014 dl,\
      .scibadge_11112014 dt,\
      .scibadge_11112014 dd,\
      .scibadge_11112014 ol,\
      .scibadge_11112014 ul,\
      .scibadge_11112014 li,\
      .scibadge_11112014 fieldset,\
      .scibadge_11112014 form,\
      .scibadge_11112014 label,\
      .scibadge_11112014 legend,\
      .scibadge_11112014 table,\
      .scibadge_11112014 caption,\
      .scibadge_11112014 tbody,\
      .scibadge_11112014 tfoot,\
      .scibadge_11112014 thead,\
      .scibadge_11112014 tr,\
      .scibadge_11112014 th,\
      .scibadge_11112014 td {\
        margin: 0;\
        padding: 0;\
        border: 0;\
        font-size: 100%;\
        font: inherit;\
        vertical-align: baseline;\
      }\
      .scibadge_11112014\
      .scibadge_11112014 ol,\
      .scibadge_11112014 ul {\
        list-style: none;\
      }\
      .scibadge_11112014 table {\
        border-collapse: collapse;\
        border-spacing: 0;\
      }\
      .scibadge_11112014 {\
        font: 12px/16px "helvetica neue", "verdana", "tahoma", sans-serif !important;\
        color: #656565;\
        border-radius: 3px 3px 0 0;\
        border: 1px solid rgba(0,0,0,0.08);\
        border-bottom: 0;\
        position: fixed;\
        left: 15px;\
        bottom: 0;\
        box-shadow: 3px 3px 8px rgba(0,0,0,0.12);\
      }\
      .scibadge_11112014 a {\
        color: #0088cc;\
        outline: 0 none;\
        cursor: pointer;\
      }\
      .scibadge_11112014 p {\
        margin-bottom: 12px;\
      }\
      .scibadge_11112014 .scibadge_11112014-panel {\
        border-radius: 3px 3px 0 0;\
        background: #fff;\
        width: 320px;\
      }\
      .scibadge_11112014 .scibadge_11112014-header {\
        padding: 15px;\
        overflow: hidden;\
        position: relative;\
      }\
      .scibadge_11112014 .scibadge_11112014-footer {\
        border-top: 1px solid rgba(0,0,0,0.12);\
        padding: 12px 15px;\
        height: 45px;\
        text-align: right;\
        position: relative;\
      }\
      .scibadge_11112014 .scibadge_11112014-logo {\
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABQCAMAAABrs8qCAAAAzFBMVEUAAAAGADMGADMGADMGADMGADMGADMGADMGADMGADMGADMGADP0uwAGADMGADMGADP0uwAGADMGADMGADP0uwAGADP0uwAGADP0uwD0uwD0uwD0uwD0uwAGADP0uwAGADP0uwD0uwAGADP0uwD0uwD0uwD0uwD0uwAGADP0uwAGADP0uwD0uwD0uwD0uwD0uwD0uwAGADP0uwAGADP0uwAGADP0uwD0uwAGADMGADP0uwAGADP0uwD0uwAGADP0uwAGADMGADP0uwAGADNEC7HuAAAAQnRSTlMAEMHxgC+w0WDhoD8EUHAe/PqQCPfqQakR6uEyCwOwJtlpDJd+JB7v2lFJSTnOxBiPeXMXh8qmoJmHYTcsu1lYarlN5ZStAAAJW0lEQVRo3uyYeXOaQBTAnyIGEA9EUQ7vEzXexhqtSX3f/zuVfe5aqGMaq52JM/39EbPAzuxP9h0r/Oex0OfOwW6V4eF5OTDqD28yPBxZwoMz5SLP8OC0uEgdHpw3LtKCB6bjW57+TB69rj7yXXhIylUm8Fp+yR0O451bZ/trBw/I9wMxhLLbhW6PBvYEHg5LpKtI8mrDwzHnS8+J10NU4XOk8qVkXonxkZJQgDFLCGpsuE1oSe19AUcG+VIpv2+yyYktEIkEBNSC2Tfwypfeo1GVj17gM1Q0JL4BsTBQakKAhII9gFlCwqBlmkkkNmz9mAECEQLSGIcbmBQOxDqi5cNn2KOaXmS3szQQGSwhrXaQTqdVzAR/s2y50ruc3X5DQ6Zn+oNFNpVI3VPEa6zXb/orb7K67ZfpCKrc6lOUkBQET9LCiJ8GKAPDlHAAjG+oAcAPTAFxR5GOQ0Fetqr152XZpzcz1RtjZ/wKfyMioxass/abSApVfpv+if8DkedwOHT5DnuDK8hgMV0BQR4HoODmNxEFk0CYiE2ADaqDO4u4Il15bNTmo+/weShy1bzMB8ViBWKGWomKZFCDIxJmAcw4orqpcZF+nLhNxD9wOjc0jfsVImomrYOSVxIHUZEEu0wUadtVFDblm0m3OLeJ7PjSC164nHyHK6ltJNTgFMZ7LH30Rgg5b2CeRGYx4sYYGYf73UlPdCpXIxuGCbBATAb8QCMWEdnjDyCaiCZwUijdJUZ21V7h+2hC0V71/HHBXnctZpKbQ4Tu2i6M/+j2hAuAGQreIyIyShVgDLAPJ1Q07yAyKlCQ+7q/XFp8UzndcmM670CEjk33GnCBLC/obKl93PI3sIqIQJ8tl6I8f5pSwyLcLiLyrq3Tl5673JRUeRRNLtWRp0R6kOmzFW6xD6IAykKEm2FJSWdWKC1YHVnNgikqJu4g0j1wLDZqiJiHM/TAkbhUIDcGMkomq9sbYYf5iAi8S8job6m+H6dolTuIdITIMNr9novQjY/2Viydmb0fO9xUTOy3lHy80Dw9NQie2lZ+TVFq/Mksj/0UbVGaeAW6zZdepoDhix1f2IOML3hg1EfDrmhxl1C2LI8HQs6CCLo77MAwx8PHs6yv9cvdm81aW6/RC2KirU9zwcfcawUfzhAiWA7LzBPfDhRb3rwQPLjU4cswFMc/3R15MBUBUB7tIIpboFvPevBgGeZf7kdIsedHVMtzIgtfyLuiF9Z7PKa+zu7KhbPQMNI0RnH4raloyggLzjAz8SIW4woAKOyvHD9hUoKOJ+FIky7++KaYNBzEOSmWk+M1uIpCuC5YB84EzqjzW+1IunbhdxZ9xGK/iEmqCgnWRJ2IsVxrGOIgFUOOKgPTRo7Ca85VvPDa1+VZ+GLeXYqlh3ekc74Hk/gkMx9ZiFSCXlZGNRZAtRATqAkRKbiYHaywb5KIBoLrRSYO31l+q/Wq+7TTem650ZpaIOi0W+2O98zD25q2Gt6oQPrWeQuPRhYILkJkUQXOymg+SU0hAoymivubRWAyrdvfhx418PWuW7Wddce1qVboQDSYXeHVW9bt8ZtOr9DZ7V4cu+rCGe+YhI9EZCwFl5WwCJ20bhURrMN7ynNEOITqfM6F0Pm3fqmC5HHzoUge01DDeFiEWqo7iXi5cOfh84HDHcOnLfvw8WlLw8xHIpWiZAKssBYRSeFTKNiVG0RO6dQXTSMhTo1ElYwjTeP1Imn61me4iYhsuUhfY6S+xBv52b7ZNjcJBHF84coRIAkeeKJVBkvSGGPV0pQ2Maa27vf/TpYNRK48SLSdaTL+X5RmSBh+Cbt7+3AeHjWDFIWICK2wDDLD9NnZyBCDFpC5wFyzMkiC9iN4rdFxg9e6bvNap1fHx3Vey0CmNYMM0eSZUgxKIKGJvUeMI+ejH/1PeRx5dzK6bI0jb5viCKTIY/ry60BMdPLXQtuCzG2UsQLyaJH98z9EdoMhCzx7elcDYmBRdNTxNgNB0zQtROYAgTCT5BGItDItnnatNWlea0HEBSLKDCFhSQ7CTFovsuU2ab8H1VgmaXouZLphueyMtPh/19XvxeOsfkl+ZLjQQU+fj3zYw3yEzLuaIaqavJo8+wzxQc5+STk7KDrNXPN6UuTs94cX5/0sZ3/xnHJ2qqJ8fVBFUfR6Yx3Hr8tVlOvnV0VR61o17mpcuKtuda1YIw+rxUAKNZ9eZoJCvuYrbwbfcIyY3r0VnaVj8ZmYDtvzJHe1chsqjYqUPnunSmPREURRVN69391pyR21waZT2IupaCr0EAzcag5gYSbL00r9OrucNs+mdNWb2tqvKrXPrtZ+20HQ9BUQXddNhpjUgHCUi6WdSoCIum4i+0sggW3fMUzDMoipkzSAlcC7pcfZbVM1XtVJ4Xcr1fh2EFwqIBoVWFAYFZAILY2eM1DTLbDoQ3OJThlkAIWCzWXCuKY/AoqoP9Jf5w247+Pzk9d5f+QC/gRiWugoIEVdvgIyKxbM9SDA8bYeJMWotmP1YX0GivKOVX/8/uX7cZ+M/s0ZdawIuB1En6EVV0AGmFZADJRRO0ivHoTjMoQOUnuIH/Ogr/jcNhBY4KICEqGssxFhOyFA46NllEESJ1NmgI5AczjvPiS0VjLek84g/hRnD0FcZFUQ3xOI1jBUQXJj5wztGq9FTteZIgoedR7OVBeNnUFgJaTWBQRgPkwReVgBYYyRdy2DeL1MMZAcm6FwoF3j2l/kojsIJBgoINRXrIKQZhIHNY9WaFJWrNiIIi1AE9qlzqJ8K/zuDiChjkcqyC3yvIpCMkt+J8GjKgi1sP02EAiZaOlWl6eDYDMdNCKOj7ADCLhMKCA+Zefku+i0EH4JJKmC0AWTVhBfNIN8e0G28fWU5rWu8mXiq9HVeAI7gUAPCxDDdaNBXq6OJS7mAEZKNxfRDM5KolELskLmlkFuNFI2XZBND/oL5N0m6H4oE3Q7gkBQgGw0NTYGIRAlQ7TcTdedTSXioiGOBBiUQEq9hymiNRUoo6eYaYQlp3vly8IWe3Qz/F6Btx3lijxTyjShGw0HwVRad8XSL+ZFoF9s6jEu5y6Aw+kJG/JcDoB7pFuU8e82ZbqGvZM693u5v3O/BzOJvZ2Nvy7Nxu/pmD/tVviyMfnT+90KZ7DHOoj9Iwe1o+dg9li9OpRdbwezDxH6F+9/fjiEnaH/9V9/q18jWYtPic543AAAAABJRU5ErkJggg==") no-repeat;\
        background-size: cover;\
        display: block;\
        float: left;\
        width: 150px;\
        height: 60px;\
        text-indent: -99999px;\
      }\
      .scibadge_11112014 .scibadge_11112014-tooltip {\
        position: absolute;\
        z-index: 1070;\
        display: block;\
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\
        font-size: 14px;\
        font-weight: normal;\
        line-height: 1.4;\
        top: 0;\
        left: 44px;\
        z-index: 100;\
        visibility: visible;\
        opacity: 0.8;\
        display: none;\
      }\
      .scibadge_11112014 .scibadge_11112014-tooltip.right {\
        padding: 0 5px;\
        margin-left: 3px;\
      }\
      .scibadge_11112014 .scibadge_11112014-tooltip-inner {\
        white-space: nowrap;\
        max-width: 200px;\
        padding: 8px 12px;\
        color: #ccc;\
        text-align: center;\
        text-decoration: none;\
        background-color: #000;\
        border-radius: 3px;\
      }\
      .scibadge_11112014 .scibadge_11112014-tooltip-arrow {\
        position: absolute;\
        width: 0;\
        height: 0;\
        border-color: transparent;\
        border-style: solid;\
      }\
      .scibadge_11112014 .scibadge_11112014-tooltip.right .scibadge_11112014-tooltip-arrow {\
        top: 50%;\
        left: 0;\
        margin-top: -5px;\
        border-width: 5px 5px 5px 0;\
        border-right-color: #000;\
      }\
      .scibadge_11112014 .scibadge_11112014-tabs {\
        border-bottom: 1px solid rgba(0,0,0,0.12);\
      }\
      .scibadge_11112014 .scibadge_11112014-tab-links {\
        margin: 0 0 -2px 0;\
        list-style: none;\
        width: 100%;\
        padding: 0 12px;\
        position: relative;\
      }\
      .scibadge_11112014 .scibadge_11112014-tab-links > li {\
        display: table-cell;\
        width: 1%;\
        font-size: 14px;\
      }\
      .scibadge_11112014 .scibadge_11112014-tab-links > li > a {\
        border-top: 1px solid rgba(0,0,0,0.12);\
        border-right: 1px solid rgba(0,0,0,0.12);\
        border-left: 1px solid rgba(0,0,0,0.12);\
        text-align: center;\
        text-decoration: none;\
        display: block;\
        padding: 10px 15px 12px;\
        margin: 0 3px;\
        border-radius: 3px;\
        color: #999;\
        font-weight: 500;\
      }\
      .scibadge_11112014 .scibadge_11112014-tab-links > li.active > a {\
        background-color: #f9f9f9;\
        color: #060033;\
      }\
      .scibadge_11112014 .scibadge_11112014-tab-content {\
        padding: 15px;\
        overflow-y: scroll;\
        height: 254px;\
        background-color: #f9f9f9;\
      }\
      .scibadge_11112014 .scibadge_11112014-header .scibadge_11112014-hide {\
        border: 0;\
        padding: 0;\
        line-height: 1;\
        font-size: 28px;\
        font-family: "helvetica neue", "helvetica", "verdana", "tahoma", sans-serif !important;\
        font-weight: 300;\
        color: #ccc;\
        float: right;\
        margin-top: -6px;\
        position: relative;\
        z-index: 10;\
        cursor: pointer;\
        text-decoration: none;\
      }\
      .scibadge_11112014 .scibadge_11112014-header .scibadge_11112014-hide:hover {\
        color: #060033;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals {\
        margin: 0;\
        padding: 0 0 7px;\
        list-style: none;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals li {\
        margin-bottom: 6px;\
        font-size: 11px;\
        line-height: 15px;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals a {\
        border: 1px solid rgba(0,0,0,0.06);\
        display: block;\
        padding: 10px;\
        color: #656565;\
        border-radius: 3px;\
        background-color: #fff;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals a:hover {\
        text-decoration: none;\
        color: #060033;\
        border-color: rgba(0,0,0,0.4);\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals span {\
        display: table-cell;\
        vertical-align: top;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals .scibadge_11112014-avatar {\
        width: 35%;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals .scibadge_11112014-desc {\
        padding-left: 10px;\
      }\
      .scibadge_11112014 .scibadge_11112014-verticals .scibadge_11112014-avatar img{\
        width: 100%;\
        border: 0;\
        margin: 0;\
        border-radius: 3px;\
        border: 1px solid rgba(0,0,0,0.06);\
      }\
      .scibadge_11112014 .scibadge_11112014-email {\
        color: #333;\
        text-decoration: none;\
      }\
      .scibadge_11112014 .scibadge_11112014-tab-pane {\
        display: none;\
      }\
      .scibadge_11112014 .active {\
        display: block;\
      }\
      .scibadge_11112014 .scibadge_11112014-toggle {\
        border-bottom: 0;\
        cursor: pointer;\
        position: relative;\
      }\
      .scibadge_11112014 .scibadge_11112014-toggle:hover .scibadge_11112014-name {\
        border-bottom: 0;\
        cursor: pointer;\
      }\
      .scibadge_11112014 .scibadge_11112014-toggle:hover .scibadge_11112014-name span {\
        position: relative;\
      }\
      .scibadge_11112014 .scibadge_11112014-toggle:hover .scibadge_11112014-tooltip {\
        display: block;\
      }\
      .scibadge_11112014 .scibadge_11112014-toggle .scibadge_11112014-name {\
        display: block;\
        height: 40px;\
        width: 40px;\
        border-radius: 3px 3px 0 0;\
        background-color: #fff;\
      }\
      .scibadge_11112014 .scibadge_11112014-graylogo {\
        background: url("data:image/png;base64,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") top center;\
        background-size: cover;\
        width: 40px;\
        height: 40px;\
        display: block;\
        text-indent: -99999px;\
      }\
      .scibadge_11112014 .scibadge_11112014-logofooter {\
        position: absolute;\
        top: 4px;\
        left: 0;\
        z-index: 2px;\
      }\
      .scibadge_11112014-panel,\
      .scibadge_11112014.open .scibadge_11112014-toggle {\
        display: none;\
      }\
      .scibadge_11112014.open .scibadge_11112014-panel {\
        display: block;\
      }\
      ',

      htmlstr = '\
      <div class="scibadge_11112014">\
        <div class="scibadge_11112014-panel">\
          <div class="scibadge_11112014-header">\
            <a class="scibadge_11112014-logo" data-href="http://sci.ph">Satoshi Citadel Industries</a>\
            <a class="scibadge_11112014-hide">&times;</a>\
          </div>\
          <div class="scibadge_11112014-body">\
            <div class="scibadge_11112014-tabs">\
              <ul class="scibadge_11112014-tab-links">\
                  <li class="active"><a class="scibadge_11112014-tab1">About</a></li>\
                  <li><a class="scibadge_11112014-tab2">Verticals</a></li>\
              </ul>\
            </div>\
            <div class="scibadge_11112014-tab-content">\
                <div id="scibadge_11112014-tab1" class="scibadge_11112014-tab-pane active">\
                  <p>Satoshi Citadel Industries Inc., is a ventures company that supports the emerging Bitcoin ecosystem in the Philippines. We create and invest in Bitcoin businesses that have the potential to transform lives and change the way people think about money and value. Our aim is to realize the full potential of Bitcoin in the country to empower what we call the People Power of Money.</p>\
                </div>\
                <div id="scibadge_11112014-tab2" class="scibadge_11112014-tab-pane">\
                  <ul class="scibadge_11112014-verticals">\
                    <li>\
                      <a data-href="http://bitmarket.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAgMAAADQNkYNAAAADFBMVEX///9Arpv2kTDP6+bFgGYgAAAAQElEQVRo3u3LMQ0AAAgDMBI0YhKVKNjP0f6tpCdRFEVRFEVRFEVRFEVRFOVj2aQSRVEURVEURVEURVEURVEelgP4prvwl+i5ZQAAAABJRU5ErkJggg=="/></span>\
                        <span class="scibadge_11112014-desc">Bitmarket.ph is the first Bitcoin payment processor in the country with nearly 100 merchants. It provides Filipino entrepreneurs with a fighting chance by accepting digital payments with minimal capital and zero risk.</span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://rebit.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEV4vJX///+r1b3e7+bM5teSyar1+ve/4MzV6t73uJ+4AAABcElEQVR42u3ZO07DUBSE4QECtDlxYiidAupEbMDegUHiUSYg+lTQIlZOLJCmsK4sRXdchPk2cPTfkVwkMDMzM7N/63kdxQ20XqKzg9L5NjpFC6Fl/NpA5zT+FCBNSKcCCULU78WQmIFUIXEFEoSIlmeI/shSeoQhdA3ShHB4RQgtQKqQWIFUIdGCFCGcRBxSg1Qhc3Qc4hCHOMQhDnHInkMc4hCHOMQhDtlziEMcMnJIFkU1EJJFWUlDhn92e4ps0inryGahey0qkHAWGbWJIycR+lHuI6PdGEdWYxz5OprnSg1/EfmUSLgM0n28tpHNRvalp7JFyiRyeUdaE3nMQYMpb3cH+W5BgykzCPRSKhzIKU5xilOc4hSnOMUpTnGKU5ziFKc4xSlHn1KCdCk1SJYyhUSjHqWfMgfJUgpoTLRHmKI/MtFu0k+ZgWQpU5AspQapUkoINfJJwJQKSrf8B0boIyJeofbw+QgzMzMzM7Efwb8EiyOMRp4AAAAASUVORK5CYII="/></span>\
                        <span class="scibadge_11112014-desc">Rebit.ph is the Philippines\' premier rebittance site, charging the lowest fees (only 1%) in comparison to well-known money transfer vehicles. There are no hidden fees, and the BTC-PHP exchange is real-time. </span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://coinage.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,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"/></span>\
                        <span class="scibadge_11112014-desc">Coinage.ph is the Philippines\' first enterprise grade order book platform for BTC-Philippine Peso(PHP) exchange. It is the only website to invest in dedicated infrastructure for Bitcoin exchange in the country. </span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://buybitcoin.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,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"/></span>\
                        <span class="scibadge_11112014-desc">BuyBitcoin.ph provides the fastest, easiest, and most convenient platform to convert your Philippine Pesos into Bitcoin. Thanks to our partnership with DragonPay, you can now pay through online banking using your BDO, BPI or Metrobank to buy bitcoins without ever leaving your home.</span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://bitstars.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,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"/></span>\
                        <span class="scibadge_11112014-desc">Bitstars.ph, a Bitcoin faucet, promotes Bitcoin adoption through the widely popular selfie trend.The Philippines being the selfie capital of the world (and also its texting capital) represents a different tech users\' environment wherein social media and selfies have great influencing power.</span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://bills.ninja">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAApVBMVEX/aEcfJzD275T///8AAABWWUf+fVP35I0sNDktKy/8nWWXSjzHWEFzPzlHTUFXNzbDvnrxZEbjYET5wHn+cExGNTDs7e3a1Ib4zYHVXEO5VECSlpv41ob9i1s7QUhlOzdTWWBrbVGBQzrV19jOyoGLi2KrrrH6tHLHycvp4o22snL7rG6mpG6rUD47LzNzeH6YmGe5vL6Bhot/gFsTEwx7eEpla3GgIPhhAAAFcklEQVR42uza3XKbMBAFYK006UgBSnADiXECFFpK2xiKL/z+j9aknkTm1yGABJ39Ln13Zs8K2YYghBBCCCGEEEIIIYQQQgghhJAuW/PZlqyVuTcs24YK244N3ySrYRphDj1cy1h+GjN24V1sY7ltc/ahgAFyyycL5FswnIgXNpdNLOCD3L1DlsIMYQxhbMgSmDaMZumPcoqx+igbG6YiDH274sQwpdwnevgCJmbr6JcTwvSEQS5Z/jhOQrWb4lgwF2ESdTYuzEhdvUwBs7IU1WsPc3OVJIlhfu6WzM4CFUQ9yUpzNJKsNkctyYpzVJKsOsecZ5cBarlkHj6oZpE5bAW8y9JvK04OGsyw8CHokL8s/KoX/VVIprURoIlPJmWDLsL5H4r1IibTcQQMs9STywKd7Ok2HfQy17/p047EBDWCQ5kwlpRFc0vW9EyPUvbKi6DqZj0bwlN2poSKK/q4liPr6LGK2kDoFzKeA/PbsaqkNhBKb1fxUE9Zza7SujtK6TUZzYWa+XN4QbVYzx7IWNuBJ2iaJczLsnQXDehV30Ce6D+fVP5AGmTsXFlwuCxidVlLDnqtsFmB1+hIGsAlCatJeEsOeq/wIZKyFimHXkVfDn5D39yqO7My1sY7QB+vJ8fnb1R6VHc9KVm7kvcMpGeAX3/SM7/JKALer2AdvAi6JJ3T479oxb3Ce1bWmeQI7QJ2LgvgzdUdrVH4KylPWJcCWh060vI/tOGTwvsJzwYmkcmzAlrHMXzbN0RyTCO0Bbh2DgMdPNYhagv+OoxdAGe+U2n4tueW75zec41d+LggHbDx0cvn5UGmkIdu048Rd5FJoyS8GeQYyQ/lodvuXv2/H/zQuvU7uIw/UToyCBEwoaAovWqzst0RusladXrQ9yJAFO1OoohDL1mrHiO+eXBQQtaq14gb+xUoI2s1PsheZxBZq/FBSK4jiKzVdEH2jSB/27nf3kSBIAzg0yewVHqle10MpIE2NBIimIuJ+v2/2tEzqVf/IO6iu5j5vfKdPs4OCDsYPdxGlOA80i+JXzzcRIk+SL8kftlzYfg7jwZd3ikz2EDw5bnPUJS1xL6ZXJZFZFaOQ6nBdEOEx9NVKJYzdJrV5fn6+Al6Sk0uQLA6UYk2RD/JYhV1VFSit8bk3juSoykSXGRer/yj1ZC4QGMyQipR7q+oVQItcln4Rl9HbnKRXgPRj3dfwMhcymXZkhIXEyaTGiUw9/eWgiWB0Z3eAq1F9K8YqxlsSo1umrxjazaDbY3ZCFACV+Rm254LuMJwMKCAI5ThpMYjHBGaTmrod3lSY0Cx6VbISjvH2vMxGGW8g/AOTbXneSsMJTTfvpXQM1+3SQoMI4jN96YKaJJea5pgCGqAB6cmATQt117Ll7si1bqxhPmu5/PvBrrk2vuyjjaberPxJ+1LvSSp8QzQ8yuRgLZ54e2poSM3Wlkvn9udH1LQl/hr7z/TuV5BdFbWn5ePp6e3X6/0TcBIvYmmE28ynW4WCa5dENr29Yl/XlGwSl14hfvxRifEAWwS1N9n9zPxDSxq6AIvT9TJYkmCmC7wSt1yWJPToCpYUpEe1/o9i2lgAlYIGlwIC0Iy5MhpUdE1xBluLKPrEAHOcbzR7SQJBOlz6Lx4mGOch669HKNNcpBjpEmO5xhfx2fHcowwyenj7rjOjIq6jObXShDSDYUBvo2xPXZEhquoYrq1BsMLcrJApHdQjmt0SirImrga6cHqkFB3EWMb5S5ifBFVAAOZIzG+xGGmWwwlyC1aZVFhTA5qs9xBii0Rql5h0ion54mwSjvSZCocQYhvcR42VZqmu65OU9WEuWutzRhjjDHGGGOMMcYYY4wxxhhjLvoLrhefWtAvPjQAAAAASUVORK5CYII="/></span>\
                        <span class="scibadge_11112014-desc">Bitoy (Pronounced Bee-toy) the Bills Ninja is the country’s first Bills payment system or bill concierge that utilizes Bitcoin to facilitate payment. Bitoy, a common Filipino nickname, is a fat Filipino ninja who has his own personality, making the bills payment more enjoyable as we wanted to put a face to the routine system.</span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://prepaidbitcoin.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,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"/></span>\
                        <span class="scibadge_11112014-desc">Prepaid Bitcoin Cards aim to increase Bitcoin adoption by making it easier to load up a Bitcoin wallet. Each card indicates the value of cash to be exchanged real-time into Bitcoin using the spot price at the time of redemption.</span>\
                      </a>\
                    </li>\
                    <li>\
                      <a data-href="http://xbt.ph">\
                        <span class="scibadge_11112014-avatar scibadge_11112014-avatar-bitmarket"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAHlBMVEX///9uvsOl1trj8/R4w8j2+/uJys7J6OmUz9O23+Hp98tTAAADfElEQVR42u3bQWsTQRjG8cVYYm+dNjT1liLeFSp4NEoP3iqEgDeLeE/ED9Cgh3gzKOjHtQTKH5zC+06ePCf3OYZZ3vlldneGGbbr06dPnz59+qRy8Hm9/n2Vbf1+vf6+aK9xXm7zNlnlZbnNqLnKl7LNm1Tjw7LN6bOO5C8rJdW780KXGrK8KzLu4jy4azxqogxKgZKGlPKhpcgjioxjCI0ftxR5XhooQMqoy4XroMQQepTPNHMhHSI/Gp7EUhIUIOSm9eaCEkHIq52LjCMIOWovAiWGtD8oJUcBwpjkM81RgHB35bPJUICQlpfXu1JRUpCzfAl6CCXX7KRpXpzGFCBk0rXkoqJkIKdXTUUGNSUB+dQRnRJDdEoM0SkxRKfEEJ0SQ3RKDNEpMUSnxBCdkofolBiiU2KITokhOiWG6JQcRKfEEJ0SQ3RKBqJTYohOOUtAdEoM0SkGCBQLBIoTAsUIgeKEQDFCoDghUIwQKE4IFCMEihMCxQiB4oRAMUKg+CHst5DLbu9hZme233vOS5WFEQLFCYFihEBxQqAYIVCcEChGCBQnBIoRAsUJgWKEQHFCoBghUJwQKEYIFAPk43TvlGE9s1/sfR5+WC1R6oXLsVpkWUHuWbioy5ZVBemg7GtQ7oHUlBtxtVVDoBiKAKkoR3sswn00txXhFObgugRHmNLAHwORx4Rc1xQgHPxp2VQUIMHDKBwGToBw8CfmsFSUCnKileD/J0/5hSERMyv/ZFTbiG17cOLcvQFipADxUYAYKUB8FCB2ChCd4oRAMUKgOCFQjBAoTggUIwSKEwLFCIHihbACC1ZbeuZOCXN9lYkRAsUJgWKEQHFCoBghUJwQKEYIFCcEihECxQmBYoRAcUKgGCFQnBAoRggUA+TJNKAIEPp9EVAECN0ehBQd0sUUHdLFFB2SoeiQmKJDYooOiSk6JEnRITFFh8QUHRJTdEhM0SExRYfEFB0SU3RITNEhzRQdolNWmU7WlIW4r02Idhg4CyBQhP9rk7pYPAxcBRAowrZ9CiIeBg5CCBSlSAxRDwMHMQSK+qkhkJjSfk6XhkBpL7KKIVB2fa8ssxAo7Q/jLAeBQuN8hhUkR7lsfdXTtzxl0ThpAclTxu0f+ue/4J4Dacpw2vLB+69tja9da4bfSnm9yML/lDL6udOeNoxEXnR9+vTp0+f/zV+0/aD6LcJfTQAAAABJRU5ErkJggg=="/></span>\
                        <span class="scibadge_11112014-desc">XBT.ph is a service of Rebit.ph, a Bitcoin money transfer platform operating out of Makati City, Philippines. We offer the best rates and service in the country. If you can find any official services with better rates than us, please let us know admin@xbt.ph and we\'ll match them immediately.</span>\
                      </a>\
                    </li>\
                  </ul>\
                </div>\
            </div>\
          </div>\
          <div class="scibadge_11112014-footer">\
            <a class="scibadge_11112014-logofooter scibadge_11112014-graylogo"></a>\
            <a class="scibadge_11112014-email" data-href="mailto:hell@sci.ph">hello@sci.ph</a>\
          </div>\
        </div>\
        <div class="scibadge_11112014-toggle">\
          <span class="scibadge_11112014-name">\
            <span class="scibadge_11112014-graylogo">SCI.ph</span>\
          </span>\
          <div class="scibadge_11112014-tooltip right">\
            <div class="scibadge_11112014-tooltip-arrow"></div>\
            <div class="scibadge_11112014-tooltip-inner">Satoshi Citadel Industries</div>\
          </div>\
        </div>\
      </div>\
    ';

    $( 'body' ).append( htmlstr );
    $( '<style>').prop( 'type', 'text/css').html( cssCode ).appendTo( 'head' );




    var wrapper = $('.scibadge_11112014'),
        outLinks = $('.scibadge_11112014 a'),
        tabLinks = $( '.scibadge_11112014-tab-links' ),
        tabLinksLi = tabLinks.find( 'li' ),
        tabLinksAnchor = tabLinksLi.find( 'a' ),
        tabContentPane = $( '.scibadge_11112014-tab-pane' ),
        openPanel = $( '.scibadge_11112014-toggle' ),
        hidePanel = $( '.scibadge_11112014-hide' );

    function hideOpenPanel () {
      if (wrapper.hasClass( 'open') ) {
        wrapper.removeClass( 'open' );
      } else {
        wrapper.addClass( 'open' );
      }
    }

    $( document ).on('click', function (e) {
      $('.scibadge_11112014').removeClass( 'open' );
    });

    $('.scibadge_11112014').on('click', function (e) {
      e.stopPropagation();
    });

    outLinks.on('click', function (e) {
      var self = $( this ),
          href = self.data( 'href' );
      if ( href != undefined ) {
        // window.location.href = href;
        window.open(href, '_blank');
        window.focus();
      }

    });
    tabLinksAnchor.on('click', function (e) {
      var self = $( this ),
          targetId = '#' + self.attr( 'class' );

      tabLinksLi.removeClass( 'active' );
      tabContentPane.removeClass( 'active' );

      self.parent( 'li' ).addClass( 'active' );
      $( targetId ).addClass( 'active' );

      e.preventDefault();
      e.stopPropagation();
    });

    openPanel.on('click', function (e) {
      hideOpenPanel();
      e.preventDefault();
      e.stopPropagation();
    });

    hidePanel.on('click', function (e) {
      hideOpenPanel();
      e.preventDefault();
      e.stopPropagation();
    });

  });
})(jQuery);