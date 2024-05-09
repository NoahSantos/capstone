"use client";
import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'

const Admin = () => {
    const [typeToggle, setTypeToggle] = useState("Animals");
    const [selectedMethod, setSelectedMethod] = useState("Add");

    function toggleDisplay(event) {
        setTypeToggle(event.target.value)
    }

    function handleMethodChange(event) {
        setSelectedMethod(event.target.value);
    }

    function renderUsersMethod() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md w-1/5' onChange={handleMethodChange}>
                <option disabled>- Method Settings-</option>
                <option>Edit</option>
            </select>
        )
    }

    function renderAnimalSelect() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
                <option disabled>- Animal Name -</option>
                <option>Any</option>
            </select> 
        )
    }

    function renderEventSelect() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
                <option disabled>- Select Event -</option>
                <option>Any</option>
            </select>
        )
    }

    function renderUserSelect() {
        return (
            <select className='mx-4 p-4 text-xl rounded-md w-1/5'>
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
                {selectedMethod == "Edit" ? renderUsersEdit() : <div className='hidden'></div>}
            </>
        )
    }

    function renderAnimalAdd(){
        return (<form className='admin-form'>
            <input type="text" placeholder='Name' className='admin-input'/>
            <input type="number" placeholder='Age' className='admin-input'/>
            <input type="text" placeholder='Gender' className='admin-input'/>
            <input type="text" placeholder='Status' className='admin-input'/>
            <input type="text" placeholder='Species' className='admin-input'/>
            <input type="text" placeholder='Breed' className='admin-input'/>
            <input type="text" placeholder='Needs' className='admin-input'/>
            <input type="text" placeholder='Description' className='admin-input'/>
            <input type="text" placeholder='Medical' className='admin-input'/>
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
            <input type="number" placeholder='Age' className='admin-input'/>
            <input type="text" placeholder='Gender' className='admin-input'/>
            <input type="text" placeholder='Status' className='admin-input'/>
            <input type="text" placeholder='Species' className='admin-input'/>
            <input type="text" placeholder='Breed' className='admin-input'/>
            <input type="text" placeholder='Needs' className='admin-input'/>
            <input type="text" placeholder='Description' className='admin-input'/>
            <input type="text" placeholder='Medical' className='admin-input'/>
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
            <input type="text" placeholder='Role' className='admin-input'/>
            <button type='submit' className="submit-button mb-4">Submit</button>
        </form>)
    }

  return (
    <>
    <Header/>
    <section className='admin-section'>
        <section className='admin-select-section'>
            <div className='admin-dropdowns'>
                <select className='mx-4 p-4 text-xl rounded-md' onChange={toggleDisplay}>
                    <option disabled>- Type Select -</option>
                    <option>Animals</option>
                    <option>Events</option>
                    <option>Users</option>
                </select>
                {typeToggle == "Animals" ? renderAnimalSelect() : typeToggle == "Events" ? renderEventSelect() : renderUserSelect()}
                {typeToggle == "Users" ? renderUsersMethod() : 
                <select className='mx-4 p-4 text-xl rounded-md' onChange={handleMethodChange}>
                    <option disabled>- Method Settings -</option>
                    <option>Add</option>
                    <option>Remove</option>
                    <option>Edit</option>
                </select>}
            </div>
        </section>  
        {/* {typeToggle == "animals" ? renderAnimals() : renderEvents()} */}
        {typeToggle == "Animals" ? renderAnimals() : typeToggle == "Events" ? renderEvents() : renderUsers()}
    </section>
    </>
  )
}

export default Admin