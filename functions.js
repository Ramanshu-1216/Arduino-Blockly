function auto_save_and_restore_blocks()
{
  window.setTimeout(restore_blocks, 0);
  bindEvent(window, 'unload', backup_blocks);
//  tabClick(selected);

  // Init load event.
  var loadInput = document.getElementById('load');
  loadInput.addEventListener('change', load, false);
  document.getElementById('fakeload').onclick = function() {
    loadInput.click();
  };
}

function restore_blocks() 
{
  if ('localStorage' in window && window.localStorage.arduino) {
    var xml = Blockly.Xml.textToDom(window.localStorage.arduino);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  }
}

function bindEvent(element, name, func) 
{
  if (element.addEventListener) {  // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {  // IE
    element.attachEvent('on' + name, func);
  }
}

function backup_blocks() 
{
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    window.localStorage.setItem('arduino', Blockly.Xml.domToText(xml));
  }
}

function discard()
{
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
    Blockly.mainWorkspace.clear();
//    renderContent();
  }
}

function save() 
{
  var fileName = window.prompt('What would you like to name your file?', 'Robo_Monkee');
  // Store data in blob.
  // var builder = new BlobBuilder();
  // builder.append(data);
  // saveAs(builder.getBlob('text/plain;charset=utf-8'), 'blockduino.xml');
  if(fileName){
      var code = createCode();
    var blob = new Blob([code], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName + ".ino");
      document.getElementById("sideBar").classList.toggle("active");
  } 
}
        
function uploadClick() 
{
    var code = createCode();
    swal("Ready to upload to Arduino.", code, "warning").then((value) => {
      if (value) {
      swal("Upload Code", "1. By clicling \"Go to Arduino Create\" your code will be copied to clipboard and you will be redirected to Arduino Create.\n\n2. You have to paste the copied code to Arduino Craete's Editor and choose the borad and click \"Upload\".", "success", {button: "Go To Arduino Create"}).then((value) => {
        if(value){
          var dummy = document.createElement("textarea");
          document.body.appendChild(dummy);
          dummy.value = code;
          dummy.select();
          document.execCommand("copy");
          document.body.removeChild(dummy);
          window.open("https://create.arduino.cc/editor/", "_blank");
        }
      });
    }
    });
}
function show(){
    document.getElementById("sideBar").classList.toggle("active");
}
function undo(){
    Blockly.mainWorkspace.undo(false);
}
function redo(){
    Blockly.mainWorkspace.undo(true);
}
function showcode(){
//    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    document.getElementById('id01').style.display='block';
    document.getElementById("sideBar").classList.toggle("active");
    var code = createCode();
    document.getElementById("content").innerHTML = code;
    document.getElementById("modal_header").innerHTML = "Click on the button to copy code!";
    return code;
}
function copycode(){
//    document.getElementById('id01').style.display='block';
    document.getElementById("sideBar").classList.toggle("active");
    var code = createCode();
    document.getElementById("content").innerHTML = "";
    var dummy = document.createElement("textarea");
          document.body.appendChild(dummy);
          dummy.value = code;
          dummy.select();
          document.execCommand("copy");
          document.body.removeChild(dummy);
    alert("Code has been copied to your clipboard!");
//    var dummy = document.createElement("textarea1");
//    document.body.appendChild(dummy);
////    String code = global + code;
//    dummy.value = global.split('<br>').join('\n') + code.split('<br>').join('\n');
//    dummy.select();
//    document.execCommand("copy");
//    document.body.removeChild(dummy);
    
}

function close(){
    document.getElementById("sideBar").classList.toggle("active");
    alert("a");
}

function createCode(){
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var global = "";
    var functions = "";
    if(code.search("Line Follower") != -1){
        functions = '\nvoid forward(int speedEN1, int speedEN2)\n{\n\n\tSerial.print(' + '"Forwards Triggered"' + ');\n\tdigitalWrite(RM1,HIGH);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,HIGH);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,speedEN1);\n}\n\nvoid right(int speedEN1, int speedEN2){\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,LOW);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,0);\n\tdigitalWrite(LM1,HIGH);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,speedEN1);\n}\n\n\nvoid left(int speedEN1, int speedEN2){\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,HIGH);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,0);\n}\n\n\nvoid deg360(int speedEN1, int speedEN2){\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,HIGH);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,HIGH);\n\tanalogWrite(EN1,speedEN1);\n}\n\n\nvoid backward(int speedEN1, int speedEN2)\n{\n\n\tSerial.print(' + '"Reverse Triggered"' + ');\n\tdigitalWrite(RM1,LOW);\n\tdigitalWrite(RM2,HIGH);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,HIGH);\n\tanalogWrite(EN1,speedEN1);\n}\n\n\nvoid stop(int speedEN1, int speedEN2)\n{\n\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,LOW);\n\tdigitalWrite(RM2,LOW);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,0);\n\tanalogWrite(EN2,0);\n}\n\n\n';
        
        global = "\n#define LS1 pinNotYetDecided  // Left Sensor 1\n#define LS2 pinNotYetDecided  // Left Sensor 2\n#define LS3 pinNotYetDecided  // Left Sensor 3\n#define LS4 pinNotYetDecided  // Left Sensor 4\n#define RS1 pinNotYetDecided  // Right Sensor 1\n#define RS2 pinNotYetDecided  // Right Sensor 2\n#define RS3 pinNotYetDecided  // Right Sensor 3\n#define RS4 pinNotYetDecided  // Right Sensor 4\n\n\n#define EN2 pinNotYetDecided // Enable 2\n#define RM1 pinNotYetDecided // Right Motor 1\n#define RM2 pinNotYetDecided // Right Motor 2\n#define EN1 pinNotYetDecided // Enable 1\n#define LM1 pinNotYetDecided // Left Motor 1\n#define LM2 pinNotYetDecided // Left Motor 2\n\n";
    }
    if(code.search("Wall Follower") != -1){
        functions = "\n\nfloat dist()\n{\n\n\tdigitalWrite(TRIGGER_PIN,LOW);\n\tdelayMicroseconds(2);\n\tdigitalWrite(TRIGGER_PIN,HIGH);\n\tdelayMicroseconds(10);\n\tdigitalWrite(TRIGGER_PIN,LOW);\n\tint dur=pulseIn(ECHO_PIN, HIGH);\n\tfloat c=dur*0.0294/2;\n\treturn c;\n}\n\n";
        
        global = "\n#define TRIGGER_PIN pinNotYetDecided  // Trigger Pin\n#define ECHO_PIN pinNotYetDecided   // Echo Pin\n\n";
    }
    if(code.search("Line Follower") != -1 && code.search("Wall Follower") != -1){
        functions = '\nvoid forward(int speedEN1, int speedEN2)\n{\n\n\tSerial.print(' + '"Forwards Triggered"' + ');\n\tdigitalWrite(RM1,HIGH);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,HIGH);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,speedEN1);\n}\n\nvoid right(int speedEN1, int speedEN2){\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,LOW);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,0);\n\tdigitalWrite(LM1,HIGH);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,speedEN1);\n}\n\n\nvoid left(int speedEN1, int speedEN2){\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,HIGH);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,0);\n}\n\n\nvoid deg360(int speedEN1, int speedEN2){\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,HIGH);\n\tdigitalWrite(RM2,LOW);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,HIGH);\n\tanalogWrite(EN1,speedEN1);\n}\n\n\nvoid backward(int speedEN1, int speedEN2)\n{\n\n\tSerial.print(' + '"Reverse Triggered"' + ');\n\tdigitalWrite(RM1,LOW);\n\tdigitalWrite(RM2,HIGH);\n\tanalogWrite(EN2,speedEN2);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,HIGH);\n\tanalogWrite(EN1,speedEN1);\n}\n\n\nvoid stop(int speedEN1, int speedEN2)\n{\n\n\tSerial.print(' + '"Right Triggered"' + ');\n\tdigitalWrite(RM1,LOW);\n\tdigitalWrite(RM2,LOW);\n\tdigitalWrite(LM1,LOW);\n\tdigitalWrite(LM2,LOW);\n\tanalogWrite(EN1,0);\n\tanalogWrite(EN2,0);\n}\n\n\n' + "\n\nfloat dist()\n{\n\n\tdigitalWrite(TRIGGER_PIN,LOW);\n\tdelayMicroseconds(2);\n\tdigitalWrite(TRIGGER_PIN,HIGH);\n\tdelayMicroseconds(10);\n\tdigitalWrite(TRIGGER_PIN,LOW);\n\tint dur=pulseIn(ECHO_PIN, HIGH);\n\tfloat c=dur*0.0294/2;\n\treturn c;\n}\n\n";
        
        global = "\n#define LS1 pinNotYetDecided  // Left Sensor 1\n#define LS2 pinNotYetDecided  // Left Sensor 2\n#define LS3 pinNotYetDecided  // Left Sensor 3\n#define LS4 pinNotYetDecided  // Left Sensor 4\n#define RS1 pinNotYetDecided  // Right Sensor 1\n#define RS2 pinNotYetDecided  // Right Sensor 2\n#define RS3 pinNotYetDecided  // Right Sensor 3\n#define RS4 pinNotYetDecided  // Right Sensor 4\n\n\n#define EN2 pinNotYetDecided // Enable 2\n#define RM1 pinNotYetDecided // Right Motor 1\n#define RM2 pinNotYetDecided // Right Motor 2\n#define EN1 pinNotYetDecided // Enable 1\n#define LM1 pinNotYetDecided // Left Motor 1\n#define LM2 pinNotYetDecided // Left Motor 2\n\n\n#define TRIGGER_PIN pinNotYetDecided  // Trigger Pin\n#define ECHO_PIN pinNotYetDecided   // Echo Pin\n\n";
    }
    return global + functions + code;
}
//function copyToClipboard(element) {
//  var $temp = $("<textarea>");
//  var brRegex = /<br\s*[\/]?>/gi;
//  $("body").append($temp);
//  $temp.val($(element).html().replace(brRegex, "\r\n")).select();
//  document.execCommand("copy");
//  $temp.remove();
//}