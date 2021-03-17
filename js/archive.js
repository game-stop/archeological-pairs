/**
 * This class dynamically constructs a DOM section containing hyperlinks to the original index cards.
 * The DOM section is injected into the container for the index cards and feed to lightgallery for display
 * When the gallery is closed, the DOM section is destroyed.
 * 
 */
class IndexCard {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }

    source() {
        return this.name;
    }

    elements() {
        return this.array;
    }
}

let indexCards = new Map();

/* Map the cards to their collections in archive/ folder */

/* card -> { directory } -> { files: format = directory name + sequencenumber, separator dash } */
indexCards.set( 'assets/card1.jpg', new IndexCard( "1354909", ["-1" ]) );
indexCards.set( 'assets/card2.jpg', new IndexCard( "1356369", [ "-1"]) );
indexCards.set( 'assets/card3.jpg', new IndexCard( "1364046", [ "-1"]) );
indexCards.set( 'assets/card4.jpg', new IndexCard( "1369749", [ "-1"]) );
indexCards.set( 'assets/card5.jpg', new IndexCard( "1369773", [ "-1"]) );
indexCards.set( 'assets/card6.jpg', new IndexCard( "1369773", [ "-1"]) );
indexCards.set( 'assets/card7.jpg', new IndexCard( "1372568", [ "-1"]) );
indexCards.set( 'assets/card8.jpg', new IndexCard( "1373023", [ "-1"]) );
indexCards.set( 'assets/card9.jpg', new IndexCard( "1373027", [ "-1"]) );
indexCards.set( 'assets/card10.jpg', new IndexCard( "1373032", [ "-1"]) );
indexCards.set( 'assets/card11.jpg', new IndexCard( "1373036", [ "-1"]) );
indexCards.set( 'assets/card12.jpg', new IndexCard( "1354909", [ "-1"]) );
indexCards.set( 'assets/card13.jpg', new IndexCard( "1373038", [ "-1"]) );
indexCards.set( 'assets/card14.jpg', new IndexCard( "1373169", [ "-1"]) );
indexCards.set( 'assets/card15.jpg', new IndexCard( "1373171", [ "-1"]) );
indexCards.set( 'assets/card16.jpg', new IndexCard( "1373172", [ "-1"]) );
indexCards.set( 'assets/card17.jpg', new IndexCard( "1373172", [ "-1"]) );
indexCards.set( 'assets/card18.jpg', new IndexCard( "1373173", [ "-1"]) );
indexCards.set( 'assets/card19.jpg', new IndexCard( "1373173", [ "-1"]) );
indexCards.set( 'assets/card20.jpg', new IndexCard( "1373174", [ "-1"]) );
indexCards.set( 'assets/card21.jpg', new IndexCard( "1373174", [ "-1"]) );
indexCards.set( 'assets/card22.jpg', new IndexCard( "1373177", [ "-1"]) );
indexCards.set( 'assets/card23.jpg', new IndexCard("1354910", [ "-1"]) );
indexCards.set( 'assets/card24.jpg', new IndexCard( "1373177", [ "-1"]) );
indexCards.set( 'assets/card25.jpg', new IndexCard( "1373178", [ "-1"]) );
indexCards.set( 'assets/card26.jpg', new IndexCard( "1373178", [ "-1"]) );
indexCards.set( 'assets/card27.jpg', new IndexCard( "1373182", [ "-1"]) );
indexCards.set( 'assets/card28.jpg', new IndexCard( "1373184", [ "-1"]) );
indexCards.set( 'assets/card29.jpg', new IndexCard( "1373184", [ "-1"]) );
indexCards.set( 'assets/card30.jpg', new IndexCard( "1373198", [ "-1"]) );
indexCards.set( 'assets/card31.jpg', new IndexCard( "1373200", [ "-1"]) );
indexCards.set( 'assets/card32.jpg', new IndexCard( "1373200", [ "-1"]) );
indexCards.set( 'assets/card33.jpg', new IndexCard( "1373201", [ "-1"]) );
indexCards.set( 'assets/card34.jpg', new IndexCard( "1373201", [ "-1"]) );
indexCards.set( 'assets/card35.jpg', new IndexCard( "1373201", [ "-1"]) );
indexCards.set( 'assets/card36.jpg', new IndexCard( "1373201", [ "-1"]) );
indexCards.set( 'assets/card37.jpg', new IndexCard( "1373202", [ "-1"]) );
indexCards.set( 'assets/card38.jpg', new IndexCard( "1373438", [ "-1"]) );
indexCards.set( 'assets/card39.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card40.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card41.jpg', new IndexCard( "1373684", [ "-1"]) );
indexCards.set( 'assets/card42.jpg', new IndexCard( "1373684", [ "-3"]) );
indexCards.set( 'assets/card43.jpg', new IndexCard( "1376486", [ "-3"]) );
indexCards.set( 'assets/card44.jpg', new IndexCard( "1356367", [ "-1"]) );
indexCards.set( 'assets/card45.jpg', new IndexCard( "1375808", [ "-1"]) );
indexCards.set( 'assets/card46.jpg', new IndexCard( "1375808", [ "-1"]) );
indexCards.set( 'assets/card47.jpg', new IndexCard( "1375809", [ "-1"]) );
indexCards.set( 'assets/card48.jpg', new IndexCard( "1375809", [ "-1"]) );
indexCards.set( 'assets/card49.jpg', new IndexCard( "1375811", [ "-1"]) );
indexCards.set( 'assets/card50.jpg', new IndexCard( "1375812", [ "-1"]) );
indexCards.set( 'assets/card51.jpg', new IndexCard( "1375827", [ "-1"]) );
indexCards.set( 'assets/card52.jpg', new IndexCard( "1375830", [ "-1"]) );
indexCards.set( 'assets/card53.jpg', new IndexCard( "1375835", [ "-1"]) );
indexCards.set( 'assets/card54.jpg', new IndexCard( "1375837", [ "-1"]) );
indexCards.set( 'assets/card56.jpg', new IndexCard( "1375837", [ "-1"]) );
indexCards.set( 'assets/card57.jpg', new IndexCard( "1375839", [ "-1"]) );
indexCards.set( 'assets/card58.jpg', new IndexCard( "1375845", [ "-1"]) );
indexCards.set( 'assets/card59.jpg', new IndexCard( "1375846", [ "-1"]) );
indexCards.set( 'assets/card60.jpg', new IndexCard( "1376435", [ "-1"]) );
indexCards.set( 'assets/card61.jpg', new IndexCard( "1376450", [ "-1"]) );
indexCards.set( 'assets/card62.jpg', new IndexCard( "1376486", [ "-1"]) );
indexCards.set( 'assets/card63.jpg', new IndexCard( "1376491", [ "-1"]) );
indexCards.set( 'assets/card64.jpg', new IndexCard( "1376605", [ "-1"]) );
indexCards.set( 'assets/card65.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card66.jpg', new IndexCard( "1356369", [ "-1"]) );
indexCards.set( 'assets/card67.jpg', new IndexCard( "1356369", [ "-1"]) );
indexCards.set( 'assets/card68.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card69.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card70.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card71.jpg', new IndexCard( "1377535", [ "-1"]) );
indexCards.set( 'assets/card72.jpg', new IndexCard( "1373178", [ "-1"]) );
indexCards.set( 'assets/card73.jpg', new IndexCard( "1373178", [ "-1"]) );
indexCards.set( 'assets/card74.jpg', new IndexCard( "1373178", [ "-1"]) );
indexCards.set( 'assets/card75.jpg', new IndexCard( "1373178", [ "-1"]) );
indexCards.set( 'assets/card76.jpg', new IndexCard( "1373184", [ "-1"]) );
indexCards.set( 'assets/card77.jpg', new IndexCard( "1373184", [ "-1"]) );
indexCards.set( 'assets/card78.jpg', new IndexCard( "1373439", [ "-1"]) );
indexCards.set( 'assets/card79.jpg', new IndexCard( "1373684", [ "-2" ]) );

/*

// Metadata filter by dataset above

printIndexCards();


function printIndexCard(value,key,map) {
    let id = `${value.name}`;
    console.log(JSON.stringify(findMetadata(id),null, 4));
}

function printIndexCards() {
    indexCards.forEach(printIndexCard);
}
*/

function createLink(id, array) {
    var item = "";
    for(  var i = 0; i < array.length; i ++ ) {

        var seq = array[i];

        name = "archive/" + id + "/" + id + seq + ".jpg";

        item += "<a " + (i == 0 ? "id=\"first-index-card\"" : "" )  +  " href=\"" + name + "\"><img src=\""+ name + "\"></a>\n";
    }

    return item;
}

function createGallery(name,array)
{
    document.getElementById("lightgallery").innerHTML = createLink(name,array );
    lightGallery(document.getElementById('lightgallery'));      
}

function displayIndexCards(key) {
    let ic = indexCards.get(key);
    if( ic === undefined)
        return false;
    createGallery(ic.source(), ic.elements());
    document.getElementById("first-index-card").click();
    return true;
}

function createPlainTextNode(text,parent)
{
    let elem = document.createElement("p");
    elem.setAttribute("class", "metadata");
    elem.setAttribute("translate", "yes");
    elem.innerText = text;
    parent.append(elem);
}

function createPlainText(metadataObject, parent)
{
    let text = "";
   
    if( metadataObject.LONGDESCRIPTION !== undefined ) {
        text = metadataObject.LONGDESCRIPTION;

        createPlainTextNode(text,parent);
    }
    
}

function findMetadata(key)
{
    /*
     If you decide to load the arts.js ,photography.js and texts.js metadata files, uncomment the following loops:
     */
    /* for( let x = 0; x < metadataArt.length; x++ ) {
        if( metadataArt[x].INVENTORY.includes(key) ) {
            return metadataArt[x];
        }
        
    }

    for( let x = 0; x < metadataPhotography.length; x++ ) {
        if( metadataPhotography[x].INVENTORY.includes(key)) {
            return metadataPhotography[x];
        }
        
    }

    for( let x = 0; x < metadataTexts.length; x++ ) {
        if( metadataTexts[x].INVENTORY.includes(key)) {
            return metadataTexts[x];
        }
    } */

    if(key === undefined )
        return null;

    for( let x = 0; x < metadataInformation.length; x ++ ) {
        if( metadataInformation[x].INVENTORY.includes(key)) {
            return metadataInformation[x];
        }
    }

    return null;
}

function clearMetadata() {
    console.log("Clear metadata");
    let elem = document.getElementById("metadata-container");
    while(elem.hasChildNodes()) {
        elem.removeChild(elem.firstChild);
    }
}

function createMetadataElement(key)
{
    let ic = indexCards.get(key);
    if( ic === undefined ) {
        console.log("No metadata entered for " + key);
        return;
    }

    clearMetadata();
    let metadata = findMetadata(ic.source());
    let parent = document.getElementById("metadata-container");
    if(metadata != null) {
        createPlainText(metadata,parent);
        console.log(metadata);
    }
    else {
        console.log("There is no metadata about object " + key);
    }

    createPlainTextNode("Double-click the card to see the original",parent);
}
