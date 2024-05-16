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

export async function addAnimal(animal){
    let {name, gender, age, species, status, breed, desc, vaccination, needs, profile, spade} = animal;

    if(name === '' || gender === '' || !age || species === '' || !status || breed === '' || desc === '' || vaccination === '' || needs === '' || profile === '' || spade === ''){
        return {status: 'fail', data: 'Not all fields filled'};
    }else{
            gender = gender.toUpperCase();
        if(gender === "MALE" || gender === 'M'){
            gender = "M";
        }else if(gender === "FEMALE" || gender === 'F'){
            gender = "F";
        }

        spade = spade.toLowerCase();
        if(spade === 'true' || spade === 't'){
            spade = true;
        }else if(spade === 'false' || spade === 'f'){
            spade = false;
        }

        let check = await fetch('http://localhost:7000/animals/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...animal, gender: gender, spade: spade}),
        })
        const result = await check.json();
        if(result.success){
            return {status: 'success', data: 'Animal created successfully'};
        }else{
            return {status: 'fail', data: result.data};
        }
    }
}

export async function editAnimal(animal, id){
    let {name, gender, age, species, status, breed, desc, vaccination, needs, profile, spade} = animal;

    if(name === '' || gender === '' || !age || species === '' || !status || breed === '' || desc === '' || vaccination === '' || needs === '' || profile === '' || spade === ''){
        return {status: 'fail', data: 'Not all fields filled'};
    }else{
        gender = gender.toUpperCase();
        if(gender === "MALE" || gender === 'M'){
            gender = "M";
        }else if(gender === "FEMALE" || gender === 'F'){
            gender = "F";
        }

        spade = spade.toLowerCase();
        if(spade === 'true' || spade === 't'){
            spade = true;
        }else if(spade === 'false' || spade === 'f'){
            spade = false;
        }

        let check = await fetch(`http://localhost:7000/animals/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...animal, gender: gender, spade: spade}),
        })
        const result = await check.json();
        if(result.success){
            return {status: 'success', data: 'Animal edited successfully'};
        }else{
            return {status: 'fail', data: result.data};
        }
    }
}

export async function deleteAnimal(id){
    let check = await fetch(`http://localhost:7000/animals/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    const result = await check.json();
    if(result.success){
        let animalList = await getAnimals();
        animalList.map(async(animal, i)=>{
            if(i >= id){
                let check = await fetch(`http://localhost:7000/animals/${i+1}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({...animal, id:i}),
                })
            }
        })
        return {status: 'success', data: 'Animal edited deleted'};
    }else{
        return {status: 'fail', data: result.data};
    }
}

export async function findAnimal(id){
    console.log('run function')
    let check = await fetch(`http://localhost:7000/animals/${id}`);
    const result = await check.json();
    console.log(result);
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

export async function addEvent(event){
    let {title, date, time, image, description, location} = event;

    if(title === '' || date === '' || time === '' || image === '' || description === '' || location === ''){
        return {status: 'fail', data: 'Not all fields filled'};
    }else{
        let check = await fetch('http://localhost:7000/events/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...event}),
        })
        const result = await check.json();
        if(result.success){
            return {status: 'success', data: 'Event created successfully'};
        }else{
            return {status: 'fail', data: result.data};
        }
    }
}

export async function editEvent(event, id){
    let {title, date, time, image, description, location} = event;

    if(title === '' || date === '' || time === '' || image === '' || description === '' || location === ''){
        return {status: 'fail', data: 'Not all fields filled'};
    }else{
        let check = await fetch(`http://localhost:7000/events/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...event}),
        })
        const result = await check.json();
        if(result.success){
            return {status: 'success', data: 'Event edited successfully'};
        }else{
            return {status: 'fail', data: result.data};
        }
    }
}

export async function deleteEvent(id){
    let check = await fetch(`http://localhost:7000/events/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    const result = await check.json();
    if(result.success){
        let eventList = await getEvents();
        eventList.map(async(event, i)=>{
            if(i >= id){
                let check = await fetch(`http://localhost:7000/events/${i+1}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({...event, id:i}),
                })
            }
        })
        return {status: 'success', data: 'Event edited deleted'};
    }else{
        return {status: 'fail', data: result.data};
    }
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

export async function editUsers(email, role){
    console.log(email);
    console.log(role);
    let check = await fetch(`http://localhost:7000/users/${email}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({role}),
    })
    const result = await check.json();
    if(result.success){
        return {status: 'success', data: 'User edited successfully'};
    }else{
        return {status: 'fail', data: result.data};
    }
}