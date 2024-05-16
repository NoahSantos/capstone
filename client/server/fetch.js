'use server';

export async function getAnimals (){
    let check = await fetch('http://localhost:7000/animals/')
    const result = await check.json();
    if(result.success){
        return result.data;
    }else{
        return result.data;
    }
}

export async function addAnimal(name, gender, age, species, status, breed, description, medical, needs, media){
    
}

export async function editAnimal(name, gender, age, species, status, breed, description, medical, needs, media){

}

export async function deleteAnimal(id){

}

export async function getEvents (){
    let check = await fetch('http://localhost:7000/events/')
    const result = await check.json();
    if(result.success){
        return result.data;
    }else{
        return result.data;
    }
}

export async function addEvent(title, date, image, description, tag){
    
}

export async function editEvent(title, date, image, description, tag){

}

export async function deleteEvent(id){

}

export async function getUsers (){
    let check = await fetch('http://localhost:7000/users/')
    const result = await check.json();
    if(result.success){
        return result.data;
    }else{
        return result.data;
    }
}

export async function editUsers(email){

}