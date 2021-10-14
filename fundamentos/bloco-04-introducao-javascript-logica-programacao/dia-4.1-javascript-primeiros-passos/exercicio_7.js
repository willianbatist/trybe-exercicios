const gradeTest = 101;

if (gradeTest >= 90 && gradeTest <= 100) { 
    console.log("Você tirou 'A'");
}
else if (gradeTest >= 80 && gradeTest <= 89) {
    console.log("Você tirou 'B'");
}
else if (gradeTest >= 70 && gradeTest <= 79) {
    console.log("Você tirou 'C'");
}
else if (gradeTest >= 60 && gradeTest <= 69) {
    console.log("Você tirou 'D'");
}
else if (gradeTest >= 50 && gradeTest <= 59) {
    console.log("Você tirou 'E'");
}
else if (gradeTest < 50 && gradeTest >= 0){
    console.log("Você tirou 'F'");
}
else if (gradeTest < 0 || gradeTest > 100 ) {
    console.log ("error nota invalida")
}