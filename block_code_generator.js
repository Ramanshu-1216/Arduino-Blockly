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
  var statements_move = Blockly.JavaScript.statementToCode(block, 'move');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n\tif(digitalRead(LS4) == ' + dropdown_value_ls4 + " && digitalRead(LS3) == " + dropdown_value_ls3 + " && digitalRead(LS2) == " +  dropdown_value_ls2 + " && digitalRead(LS2) == " + dropdown_value_ls1 + " && digitalRead(RS1) == " + dropdown_value_rs1 + " && digitalRead(RS2) == " + dropdown_value_rs2 + " && digitalRead(RS3) == " +  dropdown_value_rs3 + " && digitalRead(RS4) == " + dropdown_value_rs4 + ")\n\t{\n\t" + statements_move + "\n\t}\n";
  return code;
};

Blockly.JavaScript['move'] = function(block) {
  var dropdown_move_dropdown = block.getFieldValue('move_dropdown');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "";
    if(dropdown_move_dropdown == "left"){
        code = "\tleft"+ value_speed + ";\n";
    }
    if(dropdown_move_dropdown == "right"){
        code = "\tright"+ value_speed + ";\n";
    }
    if(dropdown_move_dropdown == "forward"){
        code = "\tforward"+ value_speed + ";\n";
    }
    if(dropdown_move_dropdown == "backward"){
        code = "t\backward"+ value_speed + ";\n";
    }
    if(dropdown_move_dropdown == "deg360"){
        code = "\tdeg360"+ value_speed + ";\n";
    }
    if(dropdown_move_dropdown == "stop"){
        code = "t\stop"+ value_speed + ";\n";
    }
  return code;
};

Blockly.JavaScript['delay'] = function(block) {
  var text_delay = block.getFieldValue('delay');
  // TODO: Assemble JavaScript into code variable.
  var code = "\tdelay(" + text_delay + ");\n";
  return code;
};

Blockly.JavaScript['arduino'] = function(block) {
  var statements_setup = Blockly.JavaScript.statementToCode(block, 'setup');
  var statements_loop = Blockly.JavaScript.statementToCode(block, 'loop');
  // TODO: Assemble JavaScript into code variable.
  var code = "void setup()\n{\n\tSerial.begin(9600);\n" + statements_setup + "\n}\nvoid loop()\n{\n" + statements_loop + "\n}\n";
  return code;
};

Blockly.JavaScript['line'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\t//Line Follower\n\t// IR SENSOR ARRAY \n\tpinMode (LS1, INPUT);\n\tpinMode (LS2, INPUT);\n\tpinMode (LS3, INPUT);\n\tpinMode (LS4, INPUT);\n\tpinMode (RS1, INPUT);\n\tpinMode (RS2, INPUT);\n\tpinMode (RS3, INPUT);\n\tpinMode (RS4, INPUT);\n\t\n\t// MOTOR AND ENABLES\n\tpinMode (RM1, OUTPUT);\n\tpinMode (RM2, OUTPUT);\n\tpinMode (LM1, OUTPUT);\n\tpinMode (LM2, OUTPUT);\n\tpinMode (EN1, OUTPUT);\n\tpinMode (EN2, OUTPUT);\n\n\t";
  return code;
};

Blockly.JavaScript['wall'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\t//Wall Follower\n\t// MOTOR AND ENABLES\n\tpinMode (RM1, OUTPUT);\n\tpinMode (RM2, OUTPUT);\n\tpinMode (LM1, OUTPUT);\n\tpinMode (LM2, OUTPUT);\n\tpinMode (EN1, OUTPUT);\n\tpinMode (EN2, OUTPUT);\n\n\t// ULTRASONIC SENSOR\n\tpinMode(ECHO_PIN,INPUT);\n\tpinMode(TRIGGER_PIN,OUTPUT);\n\t";
  return code;
};

Blockly.JavaScript['distance'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "dist()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['en'] = function(block) {
  var value_right_moto_speed = Blockly.JavaScript.valueToCode(block, 'right_moto_speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_motor_speed = Blockly.JavaScript.valueToCode(block, 'left_motor_speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_left_motor_speed + ", " + value_right_moto_speed;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['comment'] = function(block) {
  var text_comment = block.getFieldValue('comment');
  // TODO: Assemble JavaScript into code variable.
  var code = "\t// " + text_comment + "\n";
  return code;
};

Blockly.JavaScript['print'] = function(block) {
  var text_print = block.getFieldValue('print');
  // TODO: Assemble JavaScript into code variable.
  var code = '\tSerial.println("' + text_print + '");\n';
  return code;
};

Blockly.JavaScript['s1'] = function(block) {
  var dropdown_value_ls4 = block.getFieldValue('Value_LS4');
  // TODO: Assemble JavaScript into code variable.
  var code = "digitalRead(S1) =="  + dropdown_value_ls4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s2'] = function(block) {
  var dropdown_value_ls4 = block.getFieldValue('Value_LS4');
  // TODO: Assemble JavaScript into code variable.
  var code = "digitalRead(S2) =="  + dropdown_value_ls4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s3'] = function(block) {
  var dropdown_value_ls4 = block.getFieldValue('Value_LS4');
  // TODO: Assemble JavaScript into code variable.
  var code = "digitalRead(S3) =="  + dropdown_value_ls4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s4'] = function(block) {
  var dropdown_value_ls4 = block.getFieldValue('Value_LS4');
  // TODO: Assemble JavaScript into code variable.
  var code = "digitalRead(S4) =="  + dropdown_value_ls4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['s5'] = function(block) {
  var dropdown_value_ls4 = block.getFieldValue('Value_LS4');
  // TODO: Assemble JavaScript into code variable.
  var code = "digitalRead(S5) =="  + dropdown_value_ls4;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ir1'] = function(block) {
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s5 = Blockly.JavaScript.valueToCode(block, 'S5', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "";
    if(value_s1 != ""){
        code += value_s1 + " && ";
    }
    if(value_s2 != ""){
        code += value_s2 + " && ";
    }
    if(value_s3 != ""){
        code += value_s3 + " && ";
    }
    if(value_s4 != ""){
        code += value_s4 + " && ";
    }
    if(value_s5 != ""){
        code += value_s5;
    }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ir2'] = function(block) {
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "";
    if(value_s2 != ""){
        code += value_s2 + " && ";
    }
    if(value_s3 != ""){
        code += value_s3 + " && ";
    }
    if(value_s4 != ""){
        code += value_s4;
    }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['remote'] = function(block) {
  var value_button_set_1 = Blockly.JavaScript.valueToCode(block, 'button_set_1', Blockly.JavaScript.ORDER_NONE);
  var value_button_set_2 = Blockly.JavaScript.valueToCode(block, 'button_set_2', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = "\nvoid loop()\n{\n\tString message;\n\tif(Serial.available() > 0)\n\t{\n\t// Checks whether data is comming from the serial port\n\t\tmessage = Serial.read(); // Reads the data from the serial port\n\t}\n\t//REMOTE CODE" + value_button_set_1 + value_button_set_2 + "\n \n\tif(message != 'button_1' && message != 'button_2' && message != 'button_3' && message != 'button_4' && message != 'button_5' && message != 'button_6' && message != 'button_7' && message != 'button_8')\n\t{\n\t\tstop_all();\n\t}\n\n}\n";
  return code;
};

Blockly.JavaScript['_1'] = function(block) {
  var value_set1 = Blockly.JavaScript.valueToCode(block, 'set1', Blockly.JavaScript.ORDER_NONE);
  var value_set2 = Blockly.JavaScript.valueToCode(block, 'set2', Blockly.JavaScript.ORDER_NONE);
  var value_set3 = Blockly.JavaScript.valueToCode(block, 'set3', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_set1 + value_set2 + value_set3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['button_vertical_slot'] = function(block) {
  var value_button_set_1 = Blockly.JavaScript.valueToCode(block, 'button_set_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_button_set_2 = Blockly.JavaScript.valueToCode(block, 'button_set_2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_button_set_3 = Blockly.JavaScript.valueToCode(block, 'button_set_3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_button_set_1 + value_button_set_2 + value_button_set_3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['button_horizontal_slot_1'] = function(block) {
  var value_button_set_1 = Blockly.JavaScript.valueToCode(block, 'button_set_1', Blockly.JavaScript.ORDER_NONE);
  var value_button_set_2 = Blockly.JavaScript.valueToCode(block, 'button_set_2', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_button_set_1 + value_button_set_2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['button_horizontal_slot_2'] = function(block) {
  var value_button_set_3 = Blockly.JavaScript.valueToCode(block, 'button_set_3', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_button_set_3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_1'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_1')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_2'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_2')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_3'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_3')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_4'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_4')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_5'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_5')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_6'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_6')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_7'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_7')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};

Blockly.JavaScript['remote_option_8'] = function(block) {
  var dropdown_options_dropdown = block.getFieldValue('options_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n\tif(message == 'button_8')\n\t{\n\t\t" + dropdown_options_dropdown + ";\n\t}\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_COMMA];
};