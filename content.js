

try {

    // storage sync code is commented out, 
    // this is for possibly implementing
    // 
    //chrome.storage.sync.get(['logo'], function (result) {



        // find the old logo and remove it
        //old_logo = document.evaluate('/html/body/div/main/div[2]/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        old_logo = document.getElementsByClassName('logo_homepage')[0];
        if (old_logo == undefined) {
            old_logo = old_logo = document.evaluate('/html/body/div/main/div[2]/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        // console.log(old_logo)
        old_logo.remove();


        // create the iframe containing the image
        frame = document.createElement('IFRAME');
        // insert frame.html 
        //var currentLogo = result.logo;

        // console.log(currentLogo);

        // if (currentLogo == "color") {
        frame.setAttribute('src', chrome.runtime.getURL('frame.html'));
        // } else if (currentLogo == "dark") {
        //     frame.setAttribute('src', chrome.runtime.getURL('frame2.html'));
        // } else {
        //     frame.setAttribute('src', chrome.runtime.getURL('frame.html'));
        // }

        frame.setAttribute('width', "600");
        frame.setAttribute('height', "300");
        frame.setAttribute('style', 'display: block; margin: auto; border-style: none;');
        
        
        wrapper_elem = undefined
        
        if (wrapper_elem == undefined) {
            wrapper_elem = document.getElementsByClassName('home_minimalContentWrap__UyUxB')[0];
            if (wrapper_elem != undefined) {
                //console.log("loaded version 1")
            }
            wrapper_elem.insertBefore(frame, wrapper_elem.firstChild);
            if (document.getElementsByClassName('home_minimalHeroLogo__cNt1d')[0] != undefined) {
                document.getElementsByClassName('home_minimalHeroLogo__cNt1d')[0].remove()
            }
            
        }

        else if (wrapper_elem == undefined) {
            wrapper_elem = document.getElementsByClassName('home_minimalHeroLogo__cNt1d')[0];
            if (wrapper_elem != undefined) {
                //console.log("loaded version 2")
            }
            wrapper_elem.parentElement.insertBefore(frame, wrapper_elem);
            wrapper_elem.remove();
            
        }
        else {
            wrapper_elem = document.getElementsByClassName('content-wrap--home')[0];
            if (wrapper_elem != undefined) {
                //console.log("loaded version 3")
            }
            wrapper_elem.insertBefore(frame, wrapper_elem.firstChild);
            if (document.getElementsByClassName('home_minimalHeroLogo__cNt1d')[0] != undefined) {
                document.getElementsByClassName('home_minimalHeroLogo__cNt1d')[0].remove()
            }
        }

        
        

        // remove all of the excess duckduckgo page information
        
        if (document.getElementsByClassName('onboarding-ed js-onboarding-ed ')[0] != undefined) {
            document.getElementsByClassName('onboarding-ed js-onboarding-ed ')[0].remove()
        }

    //});



} catch (error) {

}


