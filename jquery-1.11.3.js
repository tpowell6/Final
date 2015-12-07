<html>
<head>
<style>
body
{
    margin: 0px;
}
.dialog
{
  margin: auto;
  background-color: white;
  max-width: 300px;
  margin-top: -100px;
  padding: 5%;
  width: 90%;
  box-shadow: 0px 0px 10px blue;
  border-radius: 10px;
  text-align: center;
  opacity: 0;
  transition: .5s ease-in; 
  -webkit-transition: .5s ease-in; 
  -moz-transition: .5s ease-in; 
  -o-transition: .5s ease-in; 
  -ms-transition: .5s ease-in; 
}

.bWrapper
{
  margin-top: 25px;
}
.button
{
  text-decoration: none;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
}

.overlay
{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  top: 0px;
}

.alert .cancel, .alert input, .confirm input
{
  display: none;
}

</style>

<script src='jquery-1.11.3.js'> </script>
<script>
var dialog = {
  show: function(type, message, success, fail){
    dialog.__success = success;
    dialog.__fail= fail;

    document.body.innerHTML += 
        "<div class='overlay " + type + "'>" +
          "<div class='dialog'>" +
            "<div class='message'>" + message + "</div>" +
            "<input type='text'>" +
            "<div class='bWrapper'>" +
              "<a href='javascript:dialog.cancel()' class='button cancel'>Cancel</a>" +
              "<a href='javascript:dialog.done()' class='button done'>OK</a>" +
            "</div>"+
          "</div>"+
        "</div>";
    $(".overlay input").focus()
    $(".overlay .dialog").css({'opacity':1, 'margin-top': "200px",'color':'white', "background": "black"});
  },
  __success: null,
  __fail: null,
  value: "",
  done: function(){
    dialog.value = $(".overlay input").val()
    $(".overlay").remove();
    if(dialog.__success){
      dialog.__success();
    }
  },
  cancel: function(){
    $(".overlay").remove();
    if(dialog.__fail){
      dialog.__fail();
    }
  }
}


function showAlert()
{
  dialog.show("alert", "This is an alert");
}

function showConfirm()
{
  var successCallback = function(){ alert("OK clicked") }
  var failureCallback = function(){ alert("Cancel clicked") }
  dialog.show("confirm", "This is an confirmation", successCallback, failureCallback);
}

function showPrompt()
{
  var successCallback = function(){ alert(dialog.value) }
  var failureCallback = function(){}
  dialog.show("prompt", "This is an prompt", successCallback, failureCallback);
}


</script>

</head>


<body>
<h1> Dialogs </h1>

<a href='javascript:showAlert()'> Alert </a>
<a href='javascript:showConfirm()'> Confirm </a>
<a href='javascript:showPrompt()'> Prompt </a>

</body>

</html>