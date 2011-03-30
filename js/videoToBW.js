function makeVideoOldTimey (){
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvasOverlay');
    var context = canvas.getContext('2d');
	
    video.addEventListener('play', function(){
        var ch = video.clientHeight;
        canvas.height = ch ;

        draw(video,context,canvas);
    },false);

}

function draw(video, context, canvas) {
    if (video.paused || video.ended) 
	{
		return false;
	}
    
	drawOneFrame(video, context, canvas);
	
    // Start over!
    setTimeout(function(){ draw(video, context, canvas); }, 0);
}

function drawOneFrame(video, context, canvas)
{
	// draw the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    // Grab the pixel data from the canvas
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixelData = imageData.data;
    // Loop through the red, green and blue pixels, turning them grayscale
    for (var i = 0; i < pixelData.length; i += 4) {
        var red = pixelData[i];
        var green = pixelData[i + 1];
        var blue = pixelData[i + 2];
        //we'll ignore the alpha value, which is in position i+3
        
        var greyscale = red * 0.2989 + green * 0.587 + blue * 0.114;
        
        pixelData[i] = greyscale;
        pixelData[i + 1] = greyscale;
        pixelData[i + 2] = greyscale;
    }
    
    imageData.data = pixelData;
    
    context.putImageData(imageData, 0, 0);
}
