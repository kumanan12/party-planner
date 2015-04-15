/**
 * Created by Kumanan on 4/15/2015.
 */
if (Students.find().count() === 0) {
    insertStudent("Kumanan", "Murugesan", "kumanan@yahoo.com",42, "Morrisville" , "NC", 27560);
    insertStudent("Savitha", "Thiyagarajan", "savitha@gmail.com",38, "Baltimore" , "MD", 21042);
    insertStudent("Jerry", "Finegan", "Jerry@yahoo.com",50, "Atlanta" , "GA", 44212);
    insertStudent("Sundar", "Palani", "sundar@aol.com",45, "Dracut" , "MA", 01752);
    insertStudent("Kadhir", "Kanniappan", "kadhir@live.com",42, "Nashua" , "NH", 32546);

}

function insertStudent (firstName, lastName, email, age, city, state, zip) {
    Students.insert({
        firstName: firstName,
        lastName:lastName,
        email:email,
        age:age,
        city:city,
        state:state,
        zip:zip
    });
};