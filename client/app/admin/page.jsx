"use client";
import React from 'react'
import { useState } from 'react'

const Admin = () => {
    const [typeToggle, setTypeToggle] = useState("animals");
    const [selectedMethod, setSelectedMethod] = useState("Add");

    function toggleDisplay(listType) {
        setTypeToggle(listType)
    }

    function handleMethodChange(event) {
        setSelectedMethod(event.target.value);
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

    function renderAnimalAdd(){
        return (<form>

        </form>)
    }

    function renderAnimalRemove(){
        return (<form>
            
        </form>)
    }

    function renderAnimalEdit(){
        return (<form>
            
        </form>)
    }

    function renderEventAdd(){
        return (<form>

        </form>)
    }

    function renderEventRemove(){
        return (<form>
            
        </form>)
    }

    function renderEventEdit(){
        return (<form>
            
        </form>)
    }

  return (
    <>
        <section className='admin-select-section'>
            <button type="button" className="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-orange-500 dark:hover:bg-orange-700" onClick={() => toggleDisplay("animals")}>Animals</button>
            <button type="button" className="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-orange-500 dark:hover:bg-orange-700" onClick={() => toggleDisplay("events")}>Events</button>

            {typeToggle == "animals" ? renderAnimalSelect() : renderEventSelect()}

            <select className='mx-4 p-4 text-xl rounded-md w-1/5' onChange={handleMethodChange}>
                <option disabled>- Method Settings-</option>
                <option>Add</option>
                <option>Remove</option>
                <option>Edit</option>
            </select>

        </section>  
        {typeToggle == "animals" ? renderAnimals() : renderEvents()}
    </>
  )
}

export default Admin