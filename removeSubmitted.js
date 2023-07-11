
/// not yet working.

for( const td of document.getElementsByClassName("d_gt") ){
  if( 
          td.has
        && td.firstChild.title.startsWith("Submission") 
        && ! td.firstChild.innerText.startsWith("Not Sub")
){
   td.parentElement.remove();
}
}

