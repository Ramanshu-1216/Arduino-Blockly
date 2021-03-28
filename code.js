var setup = "";
Blockly.Blocks['ir_array'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS4")
        .appendField(new Blockly.FieldLabelSerializable("LS 4"), "LS4")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_LS4")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_LS4");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS3")
        .appendField(new Blockly.FieldLabelSerializable("LS 3"), "LS3")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_LS3")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_LS3");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS2")
        .appendField(new Blockly.FieldLabelSerializable("LS 2"), "LS2")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_LS2")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_LS2");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS1")
        .appendField(new Blockly.FieldLabelSerializable("LS 1"), "LS1")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_LS1")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_LS1");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS1")
        .appendField(new Blockly.FieldLabelSerializable("RS 1"), "RS1")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_RS1")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_RS1");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS2")
        .appendField(new Blockly.FieldLabelSerializable("RS 2"), "RS2")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_RS2")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_RS2");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS3")
        .appendField(new Blockly.FieldLabelSerializable("RS 3"), "RS3")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_RS3")
        .appendField(new Blockly.FieldDropdown([["AND","and"], ["OR","or"]]), "Logic_RS3");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS4")
        .appendField(new Blockly.FieldLabelSerializable("RS 4"), "RS4")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "Value_RS4")
        .appendField("then");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
        Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Right","right"], ["Forward","forward"], ["Backward","backward"]]), "move_dropdown")
        .appendField("at speed")
        .appendField(new Blockly.FieldTextInput("100"), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
  Blockly.JavaScript['ir_array'] = function(block) {
  var dropdown_value_ls4 = block.getFieldValue('Value_LS4');
  var dropdown_logic_ls4 = block.getFieldValue('Logic_LS4');
  var dropdown_value_ls3 = block.getFieldValue('Value_LS3');
  var dropdown_logic_ls3 = block.getFieldValue('Logic_LS3');
  var dropdown_value_ls2 = block.getFieldValue('Value_LS2');
  var dropdown_logic_ls2 = block.getFieldValue('Logic_LS2');
  var dropdown_value_ls1 = block.getFieldValue('Value_LS1');
  var dropdown_logic_ls1 = block.getFieldValue('Logic_LS1');
  var dropdown_value_rs1 = block.getFieldValue('Value_RS1');
  var dropdown_logic_rs1 = block.getFieldValue('Logic_RS1');
  var dropdown_value_rs2 = block.getFieldValue('Value_RS2');
  var dropdown_logic_rs2 = block.getFieldValue('Logic_RS2');
  var dropdown_value_rs3 = block.getFieldValue('Value_RS3');
  var dropdown_logic_rs3 = block.getFieldValue('Logic_RS3');
  var dropdown_value_rs4 = block.getFieldValue('Value_RS4');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
//      setup = "#define LS4 1<br>#define LS3 2<br>#define LS2 3<br>#define LS1 4<br>#define RS1 5<br>#define RS2 6<br>#define RS3 7<br>#define RS4 8<br>#define LM1 9<br>#define LM2 10<br>#define RM1 11<br>#define RM2 12<br>#define enA 13<br>#define enB 14<br><br>pinMode(enA, OUTPUT);<br>pinMode(enB,OUTPUT);<br>pinMode(LS4,INPUT);<br>pinMode(LS3,INPUT);<br>pinMode(LS2,INPUT);<br>pinMode(LS1,INPUT);<br>pinMode(RS1,INPUT);<br>pinMode(RS2,INPUT);<br>pinMode(RS3,INPUT);<br>pinMode(RS4,INPUT);<br>pinMode(LM1,OUTPUT);<br>pinMode(LM2,OUTPUT);<br>pinMode(RM1,OUTPUT);<br>pinMode(RM2,OUTPUT);<br><br>"
    // TODO: Assemble JavaScript into code variable.
    var code = 'if(digitalRead(LS4) == ' + dropdown_value_ls4 + " && digitalRead(LS3) == " + dropdown_value_ls3 + " && digitalRead(LS2) == " +  dropdown_value_ls2 + " && digitalRead(LS2) == " + dropdown_value_ls1 + " && digitalRead(RS1) == " + dropdown_value_rs1 + " && digitalRead(RS2) == " + dropdown_value_rs2 + " && digitalRead(RS3) == " +  dropdown_value_rs3 + " && digitalRead(RS4) == " + dropdown_value_rs4 + ")<br>{<br>" + statements_name + "<br>}<br>";
    return code;
  };
        Blockly.JavaScript['move'] = function(block) {
  var dropdown_move_dropdown = block.getFieldValue('move_dropdown');
  var text_speed = block.getFieldValue('speed');
  // TODO: Assemble JavaScript into code variable.
            var code = "";
            if(dropdown_move_dropdown == "left"){
                code = "digitalWrite(LM1, HIGH);<br>digitalWrite(LM2, LOW);<br>digitalWrite(RM1, LOW);<br>digitalWrite(RM2, LOW);<br>analogWrite (enA, 200);<br>analogWrite (enB, " + text_speed + ");";
            }
            if(dropdown_move_dropdown == "right"){
                code = "digitalWrite(LM1, LOW);<br>digitalWrite(LM2, LOW);<br>digitalWrite(RM1, HIGH);n\digitalWrite(RM2, LOW);<br>analogWrite (enA, " + text_speed + ");<br>analogWrite (enB, 200);";
            }
            if(dropdown_move_dropdown == "forward"){
                code = "digitalWrite(LM1, HIGH);<br>digitalWrite(LM2, LOW);<br>digitalWrite(RM1, HIGH);n\digitalWrite(RM2, LOW);<br>analogWrite (enA, " + text_speed + ");<br>analogWrite (enB, 200);";
            }
            if(dropdown_move_dropdown == "backward"){
                code = "digitalWrite(LM1, LOW);<br>digitalWrite(LM2, LOW);<br>digitalWrite(RM1, LOW);n\digitalWrite(RM2, LOW);<br>nanalogWrite (enA, " + text_speed + ");<br>analogWrite (enB, " + text_speed + ");";
            }
  return code;
};
Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delay")
        .appendField(new Blockly.FieldTextInput("0"), "delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['delay'] = function(block) {
  var text_delay = block.getFieldValue('delay');
  // TODO: Assemble JavaScript into code variable.
  var code = "delay(" + text_delay + ");<br>";
  return code;
};
function showcode(){
//    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").innerHTML = code;
        }
Blockly.Blocks['arduino'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void setup                                   .");
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("void loop                                    .");
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Follower");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['arduino'] = function(block) {
  var statements_setup = Blockly.JavaScript.statementToCode(block, 'setup');
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'loop');
  // TODO: Assemble JavaScript into code variable.
  var code = "void setup()<br>{<br> " + statements_setup + "}<br>void loop()<br>{<br>" + statements_loop + "}<br>";
  return code;
};

Blockly.JavaScript['line'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "#define LS4 1<br>#define LS3 2<br>#define LS2 3<br>#define LS1 4<br>#define RS1 5<br>#define RS2 6<br>#define RS3 7<br>#define RS4 8<br>#define LM1 9<br>#define LM2 10<br>#define RM1 11<br>#define RM2 12<br>#define enA 13<br>#define enB 14<br><br><br>pinMode(enA, OUTPUT);<br>pinMode(enB,OUTPUT);<br>pinMode(LS4,INPUT);<br>pinMode(LS3,INPUT);<br>pinMode(LS2,INPUT);<br>pinMode(LS1,INPUT);<br>pinMode(RS1,INPUT);<br>pinMode(RS2,INPUT);<br>pinMode(RS3,INPUT);<br>pinMode(RS4,INPUT);<br>pinMode(LM1,OUTPUT);<br>pinMode(LM2,OUTPUT);<br>pinMode(RM1,OUTPUT);<br>pinMode(RM2,OUTPUT);<br><br>";
  return code;
};
Blockly.Blocks['wall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wall Follower");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['wall'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};