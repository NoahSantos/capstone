'use server';

export async function getAnimals (email, password){
    let check = await fetch('http://localhost:7000/animals/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, method}),
    })
    const result = await check.json();
    if(result.success){
        return {status: true, data: result.data};
    }else{
        return {status: false, err: result.data};
    }
}