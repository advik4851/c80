
function submit(){
    var name_of_student_array=[];

    var display_student_array = [];
    for (var j=1; j <= 4; j++)
    {
        var name_of_student =  document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        name_of_student_array.push(name_of_student);


    }
console.log(name_of_student_array);
var length =  name_of_student_array.length;
for (var k=0; k < length; k++){
display_student_array.push("<h4>NAME -  "+ name_of_student_array[k]+ "</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var removecommas = display_student_array.join("");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
}

