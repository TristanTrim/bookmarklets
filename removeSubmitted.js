
// hide all but the unsubmitted assignments

// for main page
list = document.getElementsByClassName("d_gt");
for (let i=list.length; i>=0; i=i-1){
  let td = list[i];
  console.log(td);  
  if( td && td.className == "d_gt"
        && ! td.firstChild.innerText.startsWith("Not Sub")
      ){
         td.parentElement.hidden=true;
  }
}

// for iframe pages
for (const ifr of document.getElementsByTagName("iframe")){
  
  list = ifr.contentWindow.document.getElementsByClassName("d_gt");
  for (let i=list.length; i>=0; i=i-1){
    let td = list[i];
    console.log(td);  
    if( td && td.className == "d_gt"
          && ! td.firstChild.innerText.startsWith("Not Sub")
        ){
           td.parentElement.hidden=true;
    }
  }
	ifr.height = ifr.contentWindow.document.body.scrollHeight;
}
