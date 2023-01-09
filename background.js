chrome.tabs.onCreated.addListener(function(tab)
{
    console.log(tab.pendingUrl);
    if (tab.pendingUrl == "chrome://newtab/")
    {
        chrome.tabs.update(tab.id, {url: "https://www.duckduckgo.com"})
    }


});

chrome.windows.onCreated.addListener(
    function(window)
{
    console.log(window.id);

}
);

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }