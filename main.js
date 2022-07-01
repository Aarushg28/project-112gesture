Webcam.set({
    height:300,
    width:350,
    image_format: 'png',
    png_quality:90
}) ;

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src ="'+data_uri+'" />';
    });
}

console.log('ml5 version :' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F0T4vGrAy/model.json' ,modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");

}

function check(){
    
    img = document.getElementById('captured_img');
    classifier.classify(img, gotResult);

}
function gotResult(error, results){

    if(error){
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;


        if(results[0].label == "best"){
            document.getElementById("update_emoji").innerHTML = "&#128077;";

        }
        if(results[0].label == "victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996;";

        }
        if(results[0].label == "amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";

        }
        if(results[0].label == "wave"){
            document.getElementById("update_emoji").innerHTML = "&#128075;";

        }
        if(results[0].label == "up"){
            document.getElementById("update_emoji").innerHTML = "&#128070;";

        }
        if(results[0].label == "fist"){
            document.getElementById("update_emoji").innerHTML = "&#9994;";

        }
        
    }

}



function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is : "+ prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    
}