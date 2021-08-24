console.log("start");
//TODO
//?omnibox rightclick context box?
	//?manifest v3 chrome on right click event
	//?chrome.runtime when highlighting

//When installed, add context menu item "-Open page in new tab"
chrome.runtime.onInstalled.addListener(newMenuItem);

//Clicked "-Open page in new tab"
chrome.contextMenus.onClicked.addListener(newTab);


function newMenuItem() {
	chrome.contextMenus.create({
		id: "MY_CONTEXT_MENU",
		title: "-Open page in new tab", 
		type: "normal", 
		contexts:["all"]
	});
}

function newTab(info, tab) {
  	chrome.tabs.create({
		index: tab.index + 1,
		url: tab.url //requires "tabs"
	});
}

if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
}
console.log("fin");