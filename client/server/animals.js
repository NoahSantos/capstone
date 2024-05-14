'use server';

export async function getAnimals (email, password){
    let check = await fetch('http://localhost:7000/animals/')
    const result = await check.json();
    console.log(result.data)
    if(result.success){
        return result.data;
    }else{
        return result.data;
    }
}