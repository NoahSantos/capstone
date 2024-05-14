"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {getAnimals} from '../../server/test'

const Admin = () => {
    const [typeToggle, setTypeToggle] = useState("Animals");
    const [selectedMethod, setSelectedMethod] = useState("Add");
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        const fetchAnimals = async () => {
          try {
            let temp = await getAnimals();
            setAnimals(temp);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchAnimals();
      }, []);

    function toggleDisplay(event) {
        setTypeToggle(event.target.value)
    }

    function handleMethodChange(event) {
        setSelectedMethod(event.target.value);
    }

    function renderUsersMethod() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md admin-select' onChange={handleMethodChange}>
                <option disabled>- Method Settings-</option>
                <option>Edit</option>
            </select>
        )
    }

    function renderAnimalSelect() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md admin-select'>
                <option disabled>- Animal Name -</option>
                {animals.map((item) => (
                    <option>{item.name}</option>
                ))}
            </select> 
        )
    }

    function renderEventSelect() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md admin-select'>
                <option disabled>- Select Event -</option>
                <option>Any</option>
            </select>
        )
    }

    function renderUserSelect() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md admin-select'>
                <option disabled>- Select User -</option>
                <option>Any</option>
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

    function renderAnimalEdit(){
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
            </div>
            <input type="text" placeholder='Breed' className='admin-input'/>
            <input type="text" placeholder='Description' className='admin-input'/>
            <input type="text" placeholder='Medical (Vaccines)' className='admin-input'/>
            <input type="text" placeholder='Needs' className='admin-input'/>
            <input type="text" placeholder='Media' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Edit</button>
        </form>)
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
            <input type="text" placeholder='Title' className='admin-input'/>
            <input type="date" placeholder='Date' className='admin-input'/>
            <input type="text" placeholder='Images' className='admin-input'/>
            <input type="text" placeholder='Descritption' className='admin-input'/>
            <input type="text" placeholder='Tags' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Submit</button>
        </form>)
    }

    function renderUsersEdit() {
        return (<form className='admin-form'>
            <select name="Species" className='admin-input w-[16.5rem]'>
                <option disabled>- Select Role -</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Adopter</option>
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