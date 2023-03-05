const xhr = new XMLHttpRequest();  // create a new XMLHttpRequest object
xhr.open("GET", "http://127.0.0.1:1900/flag");  // specify the URL to send the request to
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {  // when the request is complete
    console.log(xhr.responseText);  // print the response to the console
  }
}
xhr.send();  // send the request
