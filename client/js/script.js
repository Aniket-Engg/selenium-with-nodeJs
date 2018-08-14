function TabOne(elementId) {
    var data = {};
    data.eid = elementId;
    data.event = "click";
    data.isForm = false;
    send(data);
}

function TabTwo(elementId) {
    var data = {};
    data.eid = elementId;
    data.event = "click";
    data.isForm = false;
    send(data);
    
}

function TabThree(elementId) {
    var data = {};
    data.eid = elementId;
    data.event = "click";
    data.isForm = false;
    send(data);
}

function formSubmit(elementId) {
    console.log('Tab 3');
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    
    var data = {};
    data.eid = elementId;
    data.event = "click";
    data.isForm = true;
    data.formData = [];
    data.formData.push({"eid": "name", "value": name});
    data.formData.push({"eid": "city", "value": city});
    send(data);
}

function tab2(elementId) {
    var data = {};
    data.eid = elementId;
    data.event = "click";
    data.isForm = false;
    send(data); 
}

function send(obj){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             console.log(this.responseText);
         }
    };
    xhttp.open("POST", "http://localhost:3000/record", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(obj));
}