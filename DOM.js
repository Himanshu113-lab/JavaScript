 

 //DOM (Document Object Model)
 //The DOM represent a document with a logical tree.
 //It allwos us to manipulate/change webpage content (HTML elements)


 //Selecting Elements
 //getElementById
 //Returns the Element as an object or null (if not found)

 document.getElementById("mainImg");


 //Selecting Elements
 //getElementByClassName
 //Returns the Elements as an HTML collection or empty collection (if not found)

 let smallImages = document.getElementsByClassName("oldImg");

 for(let i=0; i<smallImages.length; i++){
    console.dir(smallImages[i]);
 }
