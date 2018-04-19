function updatePercents()
{
var count = SpreadsheetApp.getActiveSheet().getRange("A1").getValue() -1;

//Market Cap
var temp ="=TO_PERCENT((O";
temp = temp.concat(count);
temp = temp.concat("-O");
temp = temp.concat(count - 100);
temp = temp.concat(")/O");
temp = temp.concat(count - 100);
temp = temp.concat(")");

SpreadsheetApp.getActiveSheet().getRange("J3").setValue(temp);


//Profit
var temp0 ="=TO_PERCENT((M";
temp0 = temp0.concat(count);
temp0 = temp0.concat("-M");
temp0 = temp0.concat(count - 100);
temp0 = temp0.concat(")/M");
temp0 = temp0.concat(count - 100);
temp0 = temp0.concat(")");

SpreadsheetApp.getActiveSheet().getRange("B71").setValue(temp0);

//tok0
var temp1 ="=TO_PERCENT((X";
temp1 = temp1.concat(count);
temp1 = temp1.concat("-X");
temp1 = temp1.concat(count - 100);
temp1 = temp1.concat(")/X");
temp1 = temp1.concat(count - 100);
temp1 = temp1.concat(")");

SpreadsheetApp.getActiveSheet().getRange("C71").setValue(temp1);

//tok1
var temp2 ="=TO_PERCENT((Y";
temp2 = temp2.concat(count);
temp2 = temp2.concat("-Y");
temp2 = temp2.concat(count - 100);
temp2 = temp2.concat(")/Y");
temp2 = temp2.concat(count - 100);
temp2 = temp2.concat(")");

SpreadsheetApp.getActiveSheet().getRange("D71").setValue(temp2);

//tok2
var temp3 ="=TO_PERCENT((P";
temp3 = temp3.concat(count);
temp3 = temp3.concat("-P");
temp3 = temp3.concat(count - 100);
temp3 = temp3.concat(")/P");
temp3 = temp3.concat(count - 100);
temp3 = temp3.concat(")");

SpreadsheetApp.getActiveSheet().getRange("E71").setValue(temp3);

//tok3
var temp4 ="=TO_PERCENT((Q";
temp4 = temp4.concat(count);
temp4 = temp4.concat("-Q");
temp4 = temp4.concat(count - 100);
temp4 = temp4.concat(")/Q");
temp4 = temp4.concat(count - 100);
temp4 = temp4.concat(")");

SpreadsheetApp.getActiveSheet().getRange("F71").setValue(temp4);

//tok4
var temp5 ="=TO_PERCENT((R";
temp5 = temp5.concat(count);
temp5 = temp5.concat("-R");
temp5 = temp5.concat(count - 100);
temp5 = temp5.concat(")/R");
temp5 = temp5.concat(count - 100);
temp5 = temp5.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G71").setValue(temp5);

//tok5
var temp6 ="=TO_PERCENT((S";
temp6 = temp6.concat(count);
temp6 = temp6.concat("-S");
temp6 = temp6.concat(count - 100);
temp6 = temp6.concat(")/S");
temp6 = temp6.concat(count - 100);
temp6 = temp6.concat(")");

SpreadsheetApp.getActiveSheet().getRange("H71").setValue(temp6);

//tok6
var temp7 ="=TO_PERCENT((V";
temp7 = temp7.concat(count);
temp7 = temp7.concat("-V");
temp7 = temp7.concat(count - 100);
temp7 = temp7.concat(")/V");
temp7 = temp7.concat(count - 100);
temp7 = temp7.concat(")");

SpreadsheetApp.getActiveSheet().getRange("I71").setValue(temp7);

//tok7
var temp8 ="=TO_PERCENT((U";
temp8 = temp8.concat(count);
temp8 = temp8.concat("-U");
temp8 = temp8.concat(count - 100);
temp8 = temp8.concat(")/U");
temp8 = temp8.concat(count - 100);
temp8 = temp8.concat(")");

SpreadsheetApp.getActiveSheet().getRange("J71").setValue(temp8);

//tok7
var temp9 ="=TO_PERCENT((T";
temp9 = temp9.concat(count);
temp9 = temp9.concat("-T");
temp9 = temp9.concat(count - 100);
temp9 = temp9.concat(")/T");
temp9 = temp9.concat(count - 100);
temp9 = temp9.concat(")");

SpreadsheetApp.getActiveSheet().getRange("K71").setValue(temp9);

//tok7
var temp10 ="=TO_PERCENT((W";
temp10 = temp10.concat(count);
temp10 = temp10.concat("-W");
temp10 = temp10.concat(count - 100);
temp10 = temp10.concat(")/W");
temp10 = temp10.concat(count - 100);
temp10 = temp10.concat(")");

SpreadsheetApp.getActiveSheet().getRange("L71").setValue(temp10);
}

function modifyCell(cellName, increase, prof, tok0, tok1, tok2, tok3, tok4, tok5, tok6, tok7, tok8, tok9, dominance, bili, vol)
{
  var range = SpreadsheetApp.getActiveSheet().getRange(cellName);
  var toAdd = -1;
  
  if(increase)
{
  toAdd=1;
} 
  var profit = SpreadsheetApp.getActiveSheet().getRange(prof);
  var ratyo = SpreadsheetApp.getActiveSheet().getRange(bili);
  var btcdom = SpreadsheetApp.getActiveSheet().getRange(dominance);
  var volume = SpreadsheetApp.getActiveSheet().getRange(vol);
  
  
  var token0 = SpreadsheetApp.getActiveSheet().getRange(tok0);
  var token1 = SpreadsheetApp.getActiveSheet().getRange(tok1);
  var token2 = SpreadsheetApp.getActiveSheet().getRange(tok2);
  var token3 = SpreadsheetApp.getActiveSheet().getRange(tok3);
  var token4 = SpreadsheetApp.getActiveSheet().getRange(tok4);
  var token5 = SpreadsheetApp.getActiveSheet().getRange(tok5);
  var token6 = SpreadsheetApp.getActiveSheet().getRange(tok6);
  var token7 = SpreadsheetApp.getActiveSheet().getRange(tok7);
  var token8 = SpreadsheetApp.getActiveSheet().getRange(tok8);
  var token9 = SpreadsheetApp.getActiveSheet().getRange(tok9);

  
  
  
  var index = range.getValue();
  index = index.toString();
  
  
  var str1 = "A";
  var res1 = str1.concat(index);
  
  var str2 = "M";
  var res2 = str2.concat(index);
  
  var str3 = "N";
  var res3 = str3.concat(index);
  
  var str4 = "O";
  var res4 = str4.concat(index);
  
  var str5 = "P";
  var res5 = str5.concat(index);
  
  var str6 = "Q";
  var res6 = str6.concat(index);
  
  var str7 = "R";
  var res7 = str7.concat(index);
  
  var str8 = "S";
  var res8 = str8.concat(index);
  
  var str9 = "T";
  var res9 = str9.concat(index);
  
  var str10 = "U";
  var res10 = str10.concat(index);
  
  var str11 = "V";
  var res11 = str11.concat(index);
  
  var str12 = "W";
  var res12 = str12.concat(index);
  
  var str13 = "X";
  var res13 = str13.concat(index);
  
  var str14 = "Y";
  var res14 = str14.concat(index);
  
  var str15 = "Z";
  var res15 = str15.concat(index);
  
  var d = new Date();
  var n = d.getTime();
  

  SpreadsheetApp.getActiveSheet().getRange(res1).setValue(n);
  SpreadsheetApp.getActiveSheet().getRange(res2).setValue(profit.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res3).setValue(btcdom.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res4).setValue(ratyo.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res5).setValue(token0.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res6).setValue(token1.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res7).setValue(token2.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res8).setValue(token3.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res9).setValue(token4.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res10).setValue(token5.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res11).setValue(token6.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res12).setValue(token7.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res13).setValue(token8.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res14).setValue(token9.getValue());
  SpreadsheetApp.getActiveSheet().getRange(res15).setValue(volume.getValue());

 
  
  range.setValue(range.getValue()+toAdd);
}

function updateSpark()
{
var count = SpreadsheetApp.getActiveSheet().getRange("A1").getValue() - 1;
var temp = "=SPARKLINE(";

//Market Cap
var lower1 = "O".concat(count - 100);
var upper1 = "O".concat(count);

var temp1 = temp.concat(lower1);
temp1 = temp1.concat(":");
temp1 = temp1.concat(upper1);
temp1 = temp1.concat(")");

//Profit 100 before
var lower11 = "M".concat(count - 100);
var upper11 = "M".concat(count);

var temp11 = temp.concat(lower11);
temp11 = temp11.concat(":");
temp11 = temp11.concat(upper11);
temp11 = temp11.concat(")");



SpreadsheetApp.getActiveSheet().getRange("J1").setValue(temp1);
SpreadsheetApp.getActiveSheet().getRange("K1").setValue(temp11);

//Tok 0
var lower2 = "X".concat(count - 100);
var upper2 = "X".concat(count);

var temp2 = temp.concat(lower2);
temp2 = temp2.concat(":");
temp2 = temp2.concat(upper2);
temp2 = temp2.concat(")");


SpreadsheetApp.getActiveSheet().getRange("G5").setValue(temp2);

//Tok 1
var lower3 = "Y".concat(count - 100);
var upper3 = "Y".concat(count);

var temp3 = temp.concat(lower3);
temp3 = temp3.concat(":");
temp3 = temp3.concat(upper3);
temp3 = temp3.concat(")");


SpreadsheetApp.getActiveSheet().getRange("G6").setValue(temp3);

//Tok 2
var lower4 = "P".concat(count - 100);
var upper4 = "P".concat(count);

var temp4 = temp.concat(lower4);
temp4 = temp4.concat(":");
temp4 = temp4.concat(upper4);
temp4 = temp4.concat(")");


SpreadsheetApp.getActiveSheet().getRange("G7").setValue(temp4);

//Tok 3
var lower5 = "Q".concat(count - 100);
var upper5 = "Q".concat(count);

var temp5 = temp.concat(lower5);
temp5 = temp5.concat(":");
temp5 = temp5.concat(upper5);
temp5 = temp5.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G8").setValue(temp5);

//Tok 4
var lower6 = "R".concat(count - 100);
var upper6 = "R".concat(count);

var temp6 = temp.concat(lower6);
temp6 = temp6.concat(":");
temp6 = temp6.concat(upper6);
temp6 = temp6.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G9").setValue(temp6);

//Tok 5
var lower7 = "S".concat(count - 100);
var upper7 = "S".concat(count);

var temp7 = temp.concat(lower7);
temp7 = temp7.concat(":");
temp7 = temp7.concat(upper7);
temp7 = temp7.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G10").setValue(temp7);

//Tok 6
var lower8 = "V".concat(count - 100);
var upper8 = "V".concat(count);

var temp8 = temp.concat(lower8);
temp8 = temp8.concat(":");
temp8 = temp8.concat(upper8);
temp8 = temp8.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G11").setValue(temp8);

//Tok 7
var lower9 = "U".concat(count - 100);
var upper9 = "U".concat(count);

var temp9 = temp.concat(lower9);
temp9 = temp9.concat(":");
temp9 = temp9.concat(upper9);
temp9 = temp9.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G12").setValue(temp9);

//Tok 8
var lower10 = "T".concat(count - 100);
var upper10 = "T".concat(count);

var temp10 = temp.concat(lower10);
temp10 = temp10.concat(":");
temp10 = temp10.concat(upper10);
temp10 = temp10.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G13").setValue(temp10);

//Tok 8
var lower11 = "W".concat(count - 100);
var upper11 = "W".concat(count);

var temp11 = temp.concat(lower11);
temp11 = temp11.concat(":");
temp11 = temp11.concat(upper11);
temp11 = temp11.concat(")");

SpreadsheetApp.getActiveSheet().getRange("G14").setValue(temp11);

}

function templateIt()
{

var tok0 = SpreadsheetApp.getActiveSheet().getRange("B7").getDisplayValue();
if(tok0=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H7").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I7").setValue("=H7*D15");
SpreadsheetApp.getActiveSheet().getRange("J7").setValue("=I7-F15");
SpreadsheetApp.getActiveSheet().getRange("K7").setValue("=J7/F7");
SpreadsheetApp.getActiveSheet().getRange("L7").setValue("=I7/SUM(I7:I16)");
}
else
{
var temp0 = "=CRYPTOFINANCE(\"";
var res0 = temp0.concat(tok0.trim());
res0 = res0.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H7").setValue(res0);
}


var tok1 = SpreadsheetApp.getActiveSheet().getRange("B8").getDisplayValue();
if(tok1=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H8").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I8").setValue("=H8*D8");
SpreadsheetApp.getActiveSheet().getRange("J8").setValue("=I8-F8");
SpreadsheetApp.getActiveSheet().getRange("K8").setValue("=J8/F8");
SpreadsheetApp.getActiveSheet().getRange("L8").setValue("=I8/SUM(I7:I16)");
}
else
{
var temp1 = "=CRYPTOFINANCE(\"";
var res1 = temp1.concat(tok1.trim());
res1 = res1.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H8").setValue(res1);
}

var tok2 = SpreadsheetApp.getActiveSheet().getRange("B9").getDisplayValue();
if(tok2=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H9").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I9").setValue("=H9*D9");
SpreadsheetApp.getActiveSheet().getRange("J9").setValue("=I9-F9");
SpreadsheetApp.getActiveSheet().getRange("K9").setValue("=J9/F9");
SpreadsheetApp.getActiveSheet().getRange("L9").setValue("=I9/SUM(I7:I16)");
}
else
{
var temp2 = "=CRYPTOFINANCE(\"";
var res2 = temp2.concat(tok2.trim());
res2 = res2.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H9").setValue(res2);

}

var tok3 = SpreadsheetApp.getActiveSheet().getRange("B10").getDisplayValue();
if(tok3=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H10").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I10").setValue("=H10*D10");
SpreadsheetApp.getActiveSheet().getRange("J10").setValue("=I10-F10");
SpreadsheetApp.getActiveSheet().getRange("K10").setValue("=J10/F10");
SpreadsheetApp.getActiveSheet().getRange("L10").setValue("=I10/SUM(I7:I16)");
}
else
{
var temp3 = "=CRYPTOFINANCE(\"";
var res3 = temp3.concat(tok3.trim());
res3 = res3.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H10").setValue(res3);
}

var tok4 = SpreadsheetApp.getActiveSheet().getRange("B11").getDisplayValue();
if(tok4=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H11").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I11").setValue("=H11*D11");
SpreadsheetApp.getActiveSheet().getRange("J11").setValue("=I11-F11");
SpreadsheetApp.getActiveSheet().getRange("K11").setValue("=J11/F11");
SpreadsheetApp.getActiveSheet().getRange("L11").setValue("=I11/SUM(I7:I16)");
}
else
{
var temp4 = "=CRYPTOFINANCE(\"";
var res4 = temp4.concat(tok4.trim());
res4 = res4.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H11").setValue(res4);
}

var tok5 = SpreadsheetApp.getActiveSheet().getRange("B12").getDisplayValue();
if(tok5=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H12").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I12").setValue("=H12*D12");
SpreadsheetApp.getActiveSheet().getRange("J12").setValue("=I12-F12");
SpreadsheetApp.getActiveSheet().getRange("K12").setValue("=J12/F12");
SpreadsheetApp.getActiveSheet().getRange("L12").setValue("=I12/SUM(I7:I16)");
}
else
{
var temp5 = "=CRYPTOFINANCE(\"";
var res5 = temp5.concat(tok5.trim());
res5 = res5.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H12").setValue(res5);
}

var tok6 = SpreadsheetApp.getActiveSheet().getRange("B13").getDisplayValue();
if(tok6=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H13").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I13").setValue("=H13*D13");
SpreadsheetApp.getActiveSheet().getRange("J13").setValue("=I13-F13");
SpreadsheetApp.getActiveSheet().getRange("K13").setValue("=J13/F13");
SpreadsheetApp.getActiveSheet().getRange("L13").setValue("=I13/SUM(I7:I16)");
}
else
{
var temp6 = "=CRYPTOFINANCE(\"";
var res6 = temp6.concat(tok6.trim());
res6 = res6.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H13").setValue(res6);
}

var tok7 = SpreadsheetApp.getActiveSheet().getRange("B14").getDisplayValue();
if(tok7=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H14").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I14").setValue("=H14*D14");
SpreadsheetApp.getActiveSheet().getRange("J14").setValue("=I14-F14");
SpreadsheetApp.getActiveSheet().getRange("K14").setValue("=J14/F14");
SpreadsheetApp.getActiveSheet().getRange("L14").setValue("=I14/SUM(I7:I16)");
}
else
{
var temp7 = "=CRYPTOFINANCE(\"";
var res7 = temp7.concat(tok7.trim());
res7 = res7.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H14").setValue(res7);
}

var tok8 = SpreadsheetApp.getActiveSheet().getRange("B15").getDisplayValue();
if(tok8=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H15").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I15").setValue("=H15*D15");
SpreadsheetApp.getActiveSheet().getRange("J15").setValue("=I15-F15");
SpreadsheetApp.getActiveSheet().getRange("K15").setValue("=J15/F15");
SpreadsheetApp.getActiveSheet().getRange("L15").setValue("=I15/SUM(I7:I16)");
}
else
{
var temp8 = "=CRYPTOFINANCE(\"";
var res8 = temp8.concat(tok8.trim());
res8 = res8.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H15").setValue(res8);
}

var tok9 = SpreadsheetApp.getActiveSheet().getRange("B16").getDisplayValue();
if(tok9=="-")
{
SpreadsheetApp.getActiveSheet().getRange("H16").setValue("0");
SpreadsheetApp.getActiveSheet().getRange("I16").setValue("=H16*D16");
SpreadsheetApp.getActiveSheet().getRange("J16").setValue("=I16-F16");
SpreadsheetApp.getActiveSheet().getRange("K16").setValue("=J16/F16");
SpreadsheetApp.getActiveSheet().getRange("L16").setValue("=I16/SUM(I7:I16)");
}
else
{
var temp9 = "=CRYPTOFINANCE(\"";
var res9 = temp9.concat(tok9.trim());
res9 = res9.concat("USD\",,$A$1)");
SpreadsheetApp.getActiveSheet().getRange("H16").setValue(res9);
}

}

function increaseLine2()
{
  modifyCell("A1", true, "I3", "H7", "H8", "H9", "H10","H11","H12","H13","H14","H5","H6","F3","K4","F4");
  updateSpark();
  updatePercents();
}

function decreaseLine2()
{
  modifyCell("A1", false);
}