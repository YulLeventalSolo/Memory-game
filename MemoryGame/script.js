var imgId= ["x","y","mm","b","m","n","l","ll","a","o","p","nn"];
var imgsss = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img.jpg","img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img.jpg"]

let imgId_SHOWN = [0,0,0,0,0,0,0,0,0,0,0,0];
let IMAGE_WAS_HIDDEN_AD_SHOWN_AGAIN = [0,0,0,0,0,0,0,0,0,0,0,0];

//var img_hidden = ["img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg","img3.jpg"]

var img_hidden = ["imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg","imgHidden.jpg"]

const handler = () => {
    show(imgId, imgsss)
}
const h = () => {
    showdimg(imgId,img_hidden,imgsss)
}

function showdimg(imgId,img_hidden,imgsss){
    console.log('hideshowme', document.getElementById('x'))
        console.log(document.getElementById('x'));
        let xx = document.getElementById(img_hidden[1].src=imgId[2]);
}


const hide = () => {
    showDicapear(imgId,img_hidden);
}

function showDicapear(imgId,img_hidden){
    console.log('hide', document.getElementById('x'))

    for (let i=0; i<12; i++){
        //# console.log(document.getElementById('x'));
        if (1==1)
        //(imgId_SHOWN[i] == 0)
        {
            let xx = document.getElementById(imgId[i]).src = img_hidden[i];
        }
        else 
        {
            let yy = document.getElementById(imgId[i]).src = imgsss[i];
        }

        /*
        else // SHOWN: check that another shown is with same image
        {
            let Source__I = document.getElementById(imgId[i]).src;
            let Source__JJ;
            for (let jj=0; jj<12; jj++){
                    Source__JJ = document.getElementById(imgId[jj]).src;
                    if (i != jj)
                    {
                        if (Source__I == Source__JJ) 
                        {
                            let xx = document.getElementById(imgId[i]).src = imgsss[i];
                        }                    
                        else {
                            let rr = document.getElementById(imgId[i]).src = img_hidden[i];
                        }
                    }
            }                  
        }
        */
    }
}

const Show_X = () => {
    Id_of_elem = 'x'
    Show_oldImage(Id_of_elem);
}

const Show_Y = () => {
    Id_of_elem = 'y'
    Show_oldImage(Id_of_elem);
}

const Show_B = () => {
    Id_of_elem = 'b'
    Show_oldImage(Id_of_elem);
}

const Show_MM = () => {
    Id_of_elem = 'mm'
    Show_oldImage(Id_of_elem);
}

const Show_N = () => {
    Id_of_elem = 'n'
    Show_oldImage(Id_of_elem);
}

const Show_M = () => {
    Id_of_elem = 'm'
    Show_oldImage(Id_of_elem);
}

const Show_l = () => {
    Id_of_elem = 'l'
    Show_oldImage(Id_of_elem);
}

const Show_ll = () => {
    Id_of_elem = 'll'
    Show_oldImage(Id_of_elem);
}

const Show_A = () => {
    Id_of_elem = 'a'
    Show_oldImage(Id_of_elem);
}

const Show_O = () => {
    Id_of_elem = 'o'
    Show_oldImage(Id_of_elem);
}

const Show_P = () => {
    Id_of_elem = 'p'
    Show_oldImage(Id_of_elem);
}

const Show_NN = () => {
    Id_of_elem = 'nn'
    Show_oldImage(Id_of_elem);
}

function Show_oldImage (Id_of_elem) {    
    if (1==1) //(IMAGE_WAS_HIDDEN_AD_SHOWN_AGAIN[i] == 0)
    {
        for (let i=0; i<12; i++){
            if (imgId[i] == Id_of_elem) {
                let tt = document.getElementById(imgId[i]).src = imgsss[i];
                imgId_SHOWN[i] = 1; // set as shown -- "1"
                IMAGE_WAS_HIDDEN_AD_SHOWN_AGAIN[i] = 0;
            }
        }
    }
    else
    {
        for (let i=0; i<12; i++){
            if (imgId[i] == Id_of_elem) {
                let tt = document.getElementById(imgId[i]).src = img_hidden[i];
                imgId_SHOWN[i] = 0; // set as shown -- "1"
                IMAGE_WAS_HIDDEN_AD_SHOWN_AGAIN[i] = 0;
            }
        }
    }

    // // set as shown -- "1"
    // for (let i=0; i<12; i++){
    //     if (imgId[i] == Id_of_elem) {
    //         imgId_SHOWN[i] = 1;
    //     }
    // }
}

function show(imgId,imgsss){
    console.log('in show', document.getElementById('x'))
    shuffle(imgId);
    for (let i=0; i<12; i++){
        //console.log(document.getElementById('x'));
        let xx = document.getElementById(imgId[i]).src = imgsss[i];
        imgId_SHOWN[i] = 0;
        IMAGE_WAS_HIDDEN_AD_SHOWN_AGAIN[i] = 0;
    }


    
}

function shuffle(array) {
    console.log(array, "shuffle")
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  FILPPED.addEvenetLIstner('click', (e) => {
    box.style.backgroundcolor = 'black'
  })
  
// Used like so


//show(imgId,imgsss)
//console.log(imgId);
//console.log(show)  