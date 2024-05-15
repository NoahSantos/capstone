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

export async function getEvents (){
    let check = await fetch('http://localhost:7000/events/')
    const result = await check.json();
    if(result.success){
        return result.data;
    }else{
        return result.data;
    }
}

export async function getUsers (){
    let check = await fetch('http://localhost:7000/users/')
    const result = await check.json();
    console.log(result);
    if(result.success){
        return result.data;
    }else{
        return result.data;
    }
}