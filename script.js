

function getAge(yearOfBirth){
    let todaysDate = new Date(); 
    let year = todaysDate.getFullYear(); 
    let age = year - yearOfBirth;
    return age;
}

function generate(){
    let name = document.getElementById('name').value;
    let yearOfBirth = parseInt(document.getElementById('yearOfBirth').value);
    let age = getAge(yearOfBirth);
    document.getElementById('answer').innerHTML = `Hei ${name}, Du er ${age} år`;
}