var arr_img = [
                "img/1.jpg",
                "img/2.jpg", 
                "img/3.jpg"
            ];

var new_img;

class Custom {

    constructor(){

    }
  
    render(){

        for (var key in arr_img)
        {
            var img = document.createElement('img');
            img.className = "single-picture";
            img.src = arr_img[key];
            document.body.appendChild(img);

            console.log(img);
        }
    }

    addPicture(new_img){        
        arr_img.push(new_img);
        console.log(arr_img);
    }

    removePicture(position){
        arr_img.splice(position, 1);
        console.log(arr_img);
    }
}

var c = new Custom();
c.render();