"use client";
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {getAnimals, addAnimal, editAnimal, deleteAnimal, getEvents, addEvent, editEvent, deleteEvent, getUsers, editUsers} from '../../server/fetch';
import {authorize} from '../../server/authenticate';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const Admin = () => {
    const [typeToggle, setTypeToggle] = useState("Animals");
    const [selectedMethod, setSelectedMethod] = useState("Add");
    const [animals, setAnimals] = useState([]);
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([])
    const [animal, setAnimal] = useState();
    const [role, setRole] = useState()
    const [newAnimal, setNewAnimal] = useState({
        name: '',
        gender: '',
        age: 0,
        species: 0,
        status: 0,
        breed: '',
        description: '',
        vaccination: '',
        needs: '',
        profile: '',
        spade: 'false'
    });
    const [newEvent, setNewEvent] = useState({
        title: '',
        date: '',
        time: '',
        description: '',
        location: '',
        image: '',
    });
    const [event, setEvent] = useState();
    const [user, setUser] = useState()
    let animalName = useRef(null);
    let eventName = useRef(null);
    let userName = useRef(null);

    const [open, setOpen] = useState(true);
    const [success, setSuccess] = useState();
    const [message, setMessage] = useState();
    let [access, setAccess] = useState({})

    useEffect(() => {
        const checkAuthorization = async () =>{
            let result = await authorize();
            setAccess(result);
        }
        checkAuthorization();
        
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
            <input type="text" placeholder='Name' className='admin-input' onChange={(e) => setNewAnimal({ ...newAnimal, name: e.target.value })} required/>
            <div className='flex justify-between w-[35rem]'>
                <input type="text" placeholder='Gender (F or M)' className='admin-input w-[23rem]' onChange={(e) => setNewAnimal({ ...newAnimal, gender: e.target.value })} required/> {/* Dropdown */}
                <input type="number" min='0' max='99' placeholder='Age' className='admin-input w-[10rem]' onChange={(e) => setNewAnimal({ ...newAnimal, age: e.target.value })} required/>
            </div>
            <div className='flex justify-between w-[35rem]'>
                <select name="Species" className='admin-input w-[16.5rem]' onChange={(e) => setNewAnimal({ ...newAnimal, species: e.target.value })}>
                    <option disabled>- Select Species -</option>
                    <option>Dog</option>
                    <option>Cat</option>
                </select>
                <select name="Species" className='admin-input w-[16.5rem]' onChange={(e) => setNewAnimal({ ...newAnimal, status: e.target.value })}>
                    <option disabled>- Select Status -</option>
                    <option>Available</option>
                    <option>Unavailable</option>
                </select>
                {/* <input type="text" placeholder='Species' className='admin-input w-[16.5rem]'/> */}
                {/* <input type="text" placeholder='Status' className='admin-input w-[16.5rem]'/> */}
            </div>
            <input type="text" placeholder='Breed' className='admin-input' onChange={(e) => setNewAnimal({ ...newAnimal, breed: e.target.value })} required/>
            <textarea type="text" placeholder='Description' className='admin-input h-40 resize-none' onChange={(e) => setNewAnimal({ ...newAnimal, description: e.target.value })} required/>
            <textarea type="text" placeholder='Medical (Vaccines)' className='admin-input h-32 resize-none' onChange={(e) => setNewAnimal({ ...newAnimal, vaccination: e.target.value })} required/>
            <textarea type="text" placeholder='Needs' className='admin-input h-32 resize-none' onChange={(e) => setNewAnimal({ ...newAnimal, needs: e.target.value })} required/>
            <input type="text" placeholder='Media' className='admin-input' onChange={(e) => setNewAnimal({ ...newAnimal, profile: e.target.value })} required/>
            <input type="text" placeholder='Spade (true or false)' className='admin-input' onChange={(e) => setNewAnimal({ ...newAnimal, spade: e.target.value })} required/>
            <button type='submit' className="submit-button mb-4" onClick={async()=>{
                let result = await addAnimal(newAnimal);
                setSuccess(result.success);
                setMessage(result.data);
            }}>Add</button>
        </form>)
    }

    function renderAnimalRemove(){
        return (<form className='admin-form'>
            <input type="text" placeholder='ID' value={animal.id} className='admin-input' disabled/>
            <button type='submit' className="submit-button mb-4" onClick={async()=>{
                let result = await deleteAnimal(animal.id);
                setSuccess(result.success);
                setMessage(result.data);
            }}>Delete</button>
        </form>)
    }

    function renderAnimalEdit() {
        return (
            <form className='admin-form'>
                <input type="text" placeholder='Name' className='admin-input' value={animal.name} onChange={(e) => setAnimal({ ...animal, name: e.target.value })} required/>
                <div className='flex justify-between w-[35rem]'>
                    <input type="text" placeholder='Gender' className='admin-input w-[23rem]' value={animal.gender} onChange={(e) => setAnimal({ ...animal, gender: e.target.value })} required/>
                    <input type="number" min='0' max='99' placeholder='Age' className='admin-input w-[10rem]' value={animal.age} onChange={(e) => setAnimal({ ...animal, age: e.target.value })} required/>
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
                <input type="text" placeholder='Breed' className='admin-input' value={animal.breed} onChange={(e) => setAnimal({ ...animal, breed: e.target.value })} required/>
                <textarea type="text" placeholder='Description' className='admin-input h-40 resize-none' value={animal.desc} onChange={(e) => setAnimal({ ...animal, desc: e.target.value })} required/>
                <textarea type="text" placeholder='Medical (Vaccines)' className='admin-input h-32 resize-none' value={animal.vaccination} onChange={(e) => setAnimal({ ...animal, vaccination: e.target.value })} required/>
                <textarea type="text" placeholder='Needs' className='admin-input h-32 resize-none' value={animal.needs} onChange={(e) => setAnimal({ ...animal, needs: e.target.value })} required/>
                <input type="text" placeholder='Media' className='admin-input' value={animal.profile} onChange={(e) => setAnimal({ ...animal, profile: e.target.value })} required/>
                <input type="text" placeholder='Spade (true or false)' className='admin-input' value={animal.spade} onChange={(e) => setAnimal({ ...animal, spade: e.target.value })} required/>
                <button type='submit' className="submit-button mb-4" onClick={async()=>{
                    let result = await editAnimal(animal, animal.id);
                    setSuccess(result.success);
                    setMessage(result.data);
                }}>Edit</button>
            </form>
        );
    }


    function renderEventAdd(){
        return (<form className='admin-form'>
            <input type="text" placeholder='Title' className='admin-input' onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} required/>
            <input type="date" placeholder='Date (Year-Month-Day)' className='admin-input' onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} required/>
            <input type="string" placeholder='Time' className='admin-input' onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} required/>
            <input type="text" placeholder='Images' className='admin-input' onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })} required/>
            <input type="text" placeholder='Descritption' className='admin-input h-40 resize-none' onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} required/>
            <input type="text" placeholder='Location' className='admin-input' onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} required/>
            <button type='submit' className="submit-button mb-4" onClick={async()=>{
                    let result = await addEvent(newEvent);
                    setSuccess(result.success);
                    setMessage(result.data);
                }}>Add</button>
        </form>)
    }

    function renderEventRemove(){
        return (<form className='admin-form'>
            <input type="text" placeholder='ID' value={event.id} className='admin-input' disabled/>
            <button type='submit' className="submit-button mb-4" onClick={async()=>{
                let result = await deleteEvent(event.id);
                setSuccess(result.success);
                setMessage(result.data);
            }}>Delete</button>
        </form>)
    }

    function renderEventEdit(){
        return (<form className='admin-form'>
            <input type="text" placeholder='Title' value={event.title} className='admin-input' onChange={(e) => setEvent({ ...event, title: e.target.value })} required/>
            <input type="date" placeholder='Date' value={event.date} className='admin-input' onChange={(e) => setEvent({ ...event, date: e.target.value })} required/>
            <input type="string" placeholder='Time' value={event.time} className='admin-input' onChange={(e) => setEvent({ ...event, time: e.target.value })} required/>
            <input type="text" placeholder='Images' value={event.image} className='admin-input' onChange={(e) => setEvent({ ...event, image: e.target.value })} required/>
            <input type="text" placeholder='Descritption' value={event.description} className='admin-input h-S resize-none' onChange={(e) => setEvent({ ...event, description: e.target.value })} required/>
            <input type="text" placeholder='Location' value={event.location} className='admin-input' onChange={(e) => setEvent({ ...event, location: e.target.value })} required/>
            <button type='submit' className="submit-button mb-4" onClick={async()=>{
                    let result = await editEvent(event, event.id);
                    setSuccess(result.success);
                    setMessage(result.data);
                }}>Submit</button>
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
            <button type='button' className="submit-button mb-4" onClick={async()=>{
                    let result = await editUsers(user.email, user.role)
                    setSuccess(result.success);
                    setMessage(result.data);
                }}>Submit</button>
        </form>)
    }

    return (
        <>
            <Header/>
            <div className="alertCont">
                {success === 'fail' ? 
                    <Collapse in={open}>
                        <Alert
                        variant="filled"
                        severity="error"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        >
                        {message}
                        </Alert>
                    </Collapse>
                : success === 'success' ?
                    <Collapse in={open}>
                        <Alert
                        variant="filled"
                        severity="success"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        >
                        {message}
                        </Alert>
                    </Collapse>
                :
                    <></>
                }
            </div>
            <section className='admin-section'>
                <section className='admin-select-section'>
                    <div className='admin-dropdowns'>
                        <select className='mx-4 p-4 text-xl rounded-md admin-select' onChange={toggleDisplay}>
                            <option disabled>- Type Select -</option>
                            <option>Animals</option>
                            <option>Events</option>
                            {access === 'admin' ? <option>Users</option> : <></>}
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
            <section className='admin-mini-screen'>This page can only be accessed on desktop or PC.</section>
            <Footer/>
        </>
    )
}

export default Admin