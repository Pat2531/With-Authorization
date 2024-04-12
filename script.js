document.getElementById("authorizationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var correctUsername = "username"; 
    var correctPassword = "password"; 
    
    if (username === correctUsername && password === correctPassword) 
    {
        document.getElementById("downloadLink").style.display = "block";
    } else 
    {
        alert("Incorrect username or password. Please try again.");
    }
});