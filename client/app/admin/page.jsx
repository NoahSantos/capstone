"use client";
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {getAnimals, getEvents, getUsers} from '../../server/fetch'

const Admin = () => {
    const [typeToggle, setTypeToggle] = useState("Animals");
    const [selectedMethod, setSelectedMethod] = useState("Add");
    const [animals, setAnimals] = useState([]);
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([])
    const [animal, setAnimal] = useState();
    const [event, setEvent] = useState();
    const [user, setUser] = useState()
    let animalName = useRef(null);
    let eventName = useRef(null)
    let userName = useRef(null)

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                let animalList = await getAnimals();
                setAnimals(animalList);
                setAnimal(animalList[0]);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchEvents = async () => {
            try {
                let eventList = await getEvents();
                setEvents(eventList);
                setEvent(eventList[0])
            } catch (error) {
                console.error(error);
            }
        };

        const fetchUsers = async () => {
            try {
                let userList = await getUsers();
                setUsers(userList);
                setUser(userList[0])
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchAnimals();
        fetchEvents();
        fetchUsers();
    }, []);

    function toggleDisplay(event) {
        setTypeToggle(event.target.value)
    }

    function handleMethodChange(event) {
        setSelectedMethod(event.target.value);
    }

    function handleAnimalChange() {
        let index = animalName.current.value
        setAnimal(animals[index]);
    }

    function handleEventChange() {
        let index = eventName.current.value
        setEvent(events[index]);
    }

    function handleUserChange() {
        let index = userName.current.value
        setUser(users[index]);
    }

    function renderUsersMethod() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md admin-select' onChange={()=>handleMethodChange}>
                <option disabled>- Method Settings-</option>
                <option>Edit</option>
            </select>
        )
    }

    function renderAnimalSelect() {
        return (
            <select ref={animalName} className='mx-4 p-4 text-xl rounded-md admin-select' onChange={handleAnimalChange}>
                <option disabled>- Animal Name -</option>
                {animals.map((item, id) => (
                    <option key={id} value={id}>{item.name}</option>
                ))}
            </select> 
        )
    }

    function renderEventSelect() {
        return (
            <select ref={eventName} className='mx-4 p-4 text-xl rounded-md admin-select' onChange={handleEventChange}>
                <option disabled>- Select Event -</option>
                {events.map((item, id) => (
                    <option key={id} value={id}>{item.title}</option>
                ))}
            </select>
        )
    }

    function renderUserSelect() {
        return (
            <select ref={userName} className='mx-4 p-4 text-xl rounded-md admin-select' onChange={handleUserChange}>
                <option disabled>- Select User -</option>
                {users.map((item, id) => (
                    <option key={id} value={id}>{item.email}</option>
                ))}
            </select>
        )
    }

    function renderAnimals() {
        return (
            <>
                {selectedMethod == "Add" ? renderAnimalAdd() : <div className='hidden'></div>}
                {selectedMethod == "Remove" ? renderAnimalRemove() : <div className='hidden'></div>}
                {selectedMethod == "Edit" ? renderAnimalEdit() : <div className='hidden'></div>}
            </>
        )
    }

    function renderEvents() {
        return (
            <>
                {selectedMethod == "Add" ? renderEventAdd() : <div className='hidden'></div>}
                {selectedMethod == "Remove" ? renderEventRemove() : <div className='hidden'></div>}
                {selectedMethod == "Edit" ? renderEventEdit() : <div className='hidden'></div>}
            </>
        )
    }

    function renderUsers() {
        return (
            <>
                {renderUsersEdit()}
            </>
        )
    }

    function renderAnimalAdd(){
        return (<form className='admin-form'>
            <input type="text" placeholder='Name' className='admin-input'/>
            <div className='flex justify-between w-[35rem]'>
                <input type="text" placeholder='Gender' className='admin-input w-[23rem]'/> {/* Dropdown */}
                <input type="number" min='0' max='99' placeholder='Age' className='admin-input w-[10rem]'/>
            </div>
            <div className='flex justify-between w-[35rem]'>
                <select name="Species" className='admin-input w-[16.5rem]'>
                    <option disabled>- Select Species -</option>
                    <option>Dog</option>
                    <option>Cat</option>
                </select>
                <select name="Species" className='admin-input w-[16.5rem]'>
                    <option disabled>- Select Status -</option>
                    <option>Available</option>
                    <option>Unavailable</option>
                </select>
                {/* <input type="text" placeholder='Species' className='admin-input w-[16.5rem]'/> */}
                {/* <input type="text" placeholder='Status' className='admin-input w-[16.5rem]'/> */}
            </div>
            <input type="text" placeholder='Breed' className='admin-input'/>
            <input type="text" placeholder='Description' className='admin-input'/>
            <input type="text" placeholder='Medical (Vaccines)' className='admin-input'/>
            <input type="text" placeholder='Needs' className='admin-input'/>
            <input type="text" placeholder='Media' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Add</button>
        </form>)
    }

    function renderAnimalRemove(){
        return (<form className='admin-form'>
            <input type="text" placeholder='ID' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Delete</button>
        </form>)
    }

    function renderAnimalEdit() {
        return (
            <form className='admin-form'>
                <input type="text" placeholder='Name' className='admin-input' value={animal.name} onChange={(e) => setAnimal({ ...animal, name: e.target.value })}/>
                <div className='flex justify-between w-[35rem]'>
                    <input type="text" placeholder='Gender' className='admin-input w-[23rem]' value={animal.gender} onChange={(e) => setAnimal({ ...animal, gender: e.target.value })}/>
                    <input type="number" min='0' max='99' placeholder='Age' className='admin-input w-[10rem]' value={animal.age} onChange={(e) => setAnimal({ ...animal, age: e.target.value })}/>
                </div>
                <div className='flex justify-between w-[35rem]'>
                    <select name="Species" className='admin-input w-[16.5rem]' value={animal.species} onChange={(e) => setAnimal({ ...animal, species: e.target.value })}>
                        <option disabled>- Select Species -</option>
                        <option value={0}>Dog</option>
                        <option value={1}>Cat</option>
                    </select>
                    <select name="Status" className='admin-input w-[16.5rem]' value={animal.status} onChange={(e) => setAnimal({ ...animal, status: e.target.value })}>
                        <option disabled>- Select Status -</option>
                        <option value={0}>Available</option>
                        <option value={1}>Unavailable</option>
                        <option value={2}>Watch</option>
                    </select>
                </div>
                <input type="text" placeholder='Breed' className='admin-input' value={animal.breed} onChange={(e) => setAnimal({ ...animal, breed: e.target.value })}/>
                <input type="text" placeholder='Description' className='admin-input' value={animal.desc} onChange={(e) => setAnimal({ ...animal, desc: e.target.value })}/>
                <input type="text" placeholder='Medical (Vaccines)' className='admin-input' value={animal.vaccination} onChange={(e) => setAnimal({ ...animal, vaccination: e.target.value })}/>
                <input type="text" placeholder='Needs' className='admin-input' value={animal.needs} onChange={(e) => setAnimal({ ...animal, needs: e.target.value })}/>
                <input type="text" placeholder='Media' className='admin-input' value={animal.profile} onChange={(e) => setAnimal({ ...animal, profile: e.target.value })}/>
                <button type='submit' className="submit-button mb-4">Edit</button>
            </form>
        );
    }


    function renderEventAdd(){
        return (<form className='admin-form'>
            <input type="text" placeholder='Title' className='admin-input'/>
            <input type="date" placeholder='Date' className='admin-input'/>
            <input type="text" placeholder='Images' className='admin-input'/>
            <input type="text" placeholder='Descritption' className='admin-input'/>
            <input type="text" placeholder='Tags' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Add</button>
        </form>)
    }

    function renderEventRemove(){
        return (<form className='admin-form'>
            <input type="text" placeholder='ID' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Delete</button>
        </form>)
    }

    function renderEventEdit(){
        return (<form className='admin-form'>
            <input type="text" placeholder='Title' value={event.title} className='admin-input' onChange={(e) => setEvent({ ...event, title: e.target.value })}/>
            <input type="text" placeholder='Date' value={event.date} className='admin-input' onChange={(e) => setEvent({ ...event, date: e.target.value })}/>
            <input type="text" placeholder='Images' value={event.image} className='admin-input' onChange={(e) => setEvent({ ...event, image: e.target.value })}/>
            <input type="text" placeholder='Descritption' value={event.description} className='admin-input' onChange={(e) => setEvent({ ...event, description: e.target.value })}/>
            <button type='submit' className="submit-button mb-4">Submit</button>
        </form>)
    }

    function renderUsersEdit() {
        return (<form className='admin-form'>
            <select name="Role" className='admin-input w-[16.5rem]' value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option disabled>- Select Role -</option>
                <option value={0}>Admin</option>
                <option value={1}>Editor</option>
                <option value={2}>Adopter</option>
            </select>
            <button type='submit' className="submit-button mb-4">Submit</button>
        </form>)
    }

  return (
    <>
    <Header/>
    <section className='admin-section'>
        <section className='admin-select-section'>
            <div className='admin-dropdowns'>
                <select className='mx-4 p-4 text-xl rounded-md admin-select' onChange={toggleDisplay}>
                    <option disabled>- Type Select -</option>
                    <option>Animals</option>
                    <option>Events</option>
                    <option>Users</option>
                </select>
                {typeToggle == "Animals" ? renderAnimalSelect() : typeToggle == "Events" ? renderEventSelect() : renderUserSelect()}
                {typeToggle == "Users" ? renderUsersMethod() : 
                <select className='mx-4 p-4 text-xl rounded-md admin-select' onChange={handleMethodChange}>
                    <option disabled>- Method Settings -</option>
                    <option>Add</option>
                    <option>Remove</option>
                    <option>Edit</option>
                </select>}
            </div>
        </section>  
        {typeToggle == "Animals" ? renderAnimals() : typeToggle == "Events" ? renderEvents() : renderUsers()}
    </section>
    <Footer/>
    </>
  )
}

export default Admin