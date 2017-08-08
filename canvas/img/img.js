var canvas1 = document.getElementById("canvas1"),
    ctx1 = canvas1.getContext("2d"),
    canvas2 = document.getElementById("canvas2"),
    ctx2 = canvas2.getContext("2d");
var im = new Image();
im.src = "1.png";
im.onload = function(){
    ctx1.drawImage(im,0,0,canvas1.width,canvas1.height);
}
function greyEffect(){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data;
    for(var i=0;i<canvas1.width*canvas1.height;i++){
        var r = pixelData[i*4+0],
            g = pixelData[i*4+1],
            b = pixelData[i*4+2];
        var grey = 0.3 * r + 0.59 * g + 0.11 * b;
        pixelData[i*4+0] = grey;
        pixelData[i*4+1] = grey;
        pixelData[i*4+2] = grey;
    }
    ctx2.putImageData(imageData,0,0);
}
function blackEffect(){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data;
    for(var i=0;i<canvas1.width*canvas1.height;i++){
        var r = pixelData[i*4+0],
            g = pixelData[i*4+1],
            b = pixelData[i*4+2];
        var grey = (r+g+b)/3;
        if(grey>=100){
            v = 255;
        }else{
            v = 0;
        }
        pixelData[i*4+0] = v;
        pixelData[i*4+1] = v;
        pixelData[i*4+2] = v;
    }
    ctx2.putImageData(imageData,0,0);
}
function reverseEffect(){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data;
    for(var i=0;i<canvas1.width*canvas1.height;i++){
        pixelData[i*4+0] = 255-pixelData[i*4+0];
        pixelData[i*4+1] = 255-pixelData[i*4+1];
        pixelData[i*4+2] = 255-pixelData[i*4+2];
    }
    ctx2.putImageData(imageData,0,0);
}
function blurEffect(size){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data,
        tmpimageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),
        tmppixelData = imageData.data;
    size = size ? size : 1;
    var count = Math.pow((size*2+1),2);
    for(var i=size;i<canvas2.height-size;i++){
        for(var j=size;j<canvas2.width-size;j++){
            var totalr = 0,totalg = 0,totalb = 0;
            for(var dx=-size;dx<=size;dx++){
                for(var dy=-size;dy<=size;dy++){
                    var x = i + dx;
                    var y = j + dy;
                    var p = x * canvas2.width + y;
                    totalr += tmppixelData[p*4+0];
                    totalg += tmppixelData[p*4+1];
                    totalb += tmppixelData[p*4+2];
                }
            }
            var p = i * canvas1.width + j;
            pixelData[p*4+0] = totalr/count;
            pixelData[p*4+1] = totalg/count;
            pixelData[p*4+2] = totalb/count;
        }
    }
    ctx2.putImageData(imageData,0,0);
}
function gosike(){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data,
        tmpimageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),
        tmppixelData = imageData.data;
    var size = 16;
    var totalNum = Math.pow(size,2);
    var count = Math.pow((size*2+1),2);
    for(var i=0;i<canvas2.height;i+=size){
        for(var j=0;j<canvas2.width;j+=size){
            var totalr = 0,totalg = 0,totalb = 0;
            for(var dx=0;dx<=size;dx++){
                for(var dy=0;dy<=size;dy++){
                    var x = i + dx;
                    var y = j + dy;
                    var p = x * canvas2.width + y;
                    totalr += tmppixelData[p*4+0];
                    totalg += tmppixelData[p*4+1];
                    totalb += tmppixelData[p*4+2];
                }
            }
            var p = i * canvas1.width + j;
            var avgr = totalr/count;
            var avgg = totalg/count;
            var avgb = totalb/count;
            for(var dx=0;dx<=size;dx++){
                for(var dy=0;dy<=size;dy++){
                    var x = i + dx;
                    var y = j + dy;
                    var p = x * canvas2.width + y;
                    pixelData[p*4+0] = avgr;
                    pixelData[p*4+1] = avgg;
                    pixelData[p*4+2] = avgb;
                }
            }
        }
    }
    ctx2.putImageData(imageData,0,0);
}
function outset(size){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data,
        precolor = {};
    for(var i=0;i<canvas1.width*canvas1.height;i++){
        if(i==0){
            precolor = {
                r : pixelData[i*4+0],
                g : pixelData[i*4+1],
                b : pixelData[i*4+2]
            }
        }else{
            var r = pixelData[i*4+0] - precolor.r + 128;
            var g = pixelData[i*4+1] - precolor.g + 128;
            var b = pixelData[i*4+2] - precolor.b + 128;
            precolor = {
                r : pixelData[i*4+0],
                g : pixelData[i*4+1],
                b : pixelData[i*4+2]
            }
            pixelData[i*4+0] = r;
            pixelData[i*4+1] = g;
            pixelData[i*4+2] = b;
        }
        var r = pixelData[i*4+0],
            g = pixelData[i*4+1],
            b = pixelData[i*4+2];
        var grey = 0.3 * r + 0.59 * g + 0.11 * b;
        pixelData[i*4+0] = grey;
        pixelData[i*4+1] = grey;
        pixelData[i*4+2] = grey;
    }
    ctx2.putImageData(imageData,0,0);
}
function removeColor(){
    var imageData = ctx1.getImageData(0,0,canvas1.width,canvas1.height),pixelData = imageData.data;
    for(var i=0;i<canvas1.width*canvas1.height;i++){
        var r = pixelData[i*4+0],
            g = pixelData[i*4+1],
            b = pixelData[i*4+2];
        var c = Math.floor((Math.min(r,g,b) + Math.max(r,g,b))/2);
        pixelData[i*4+0] = c;
        pixelData[i*4+1] = c;
        pixelData[i*4+2] = c;
    }
    ctx2.putImageData(imageData,0,0);
}
