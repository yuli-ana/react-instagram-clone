import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    // State with hooks
    // State cannot go inside of statement and for loop/conditional
    const [location, setLocation] = useState("Toronto, ON");
    // const [animal, setAnimal] = useState('dog');
    // const [breed, setBreed] = useState({});
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    useEffect(() => {
        // pet.breeds("dog").then(console.log, console.error);
        setBreeds([]);
        setBreed("");

        // pet.breeds(animal).then(({ breeds }) => {
        //     const breedStrings = breeds.map(({ name }) => name);
        //     setBreeds(breedStrings);
        // })
    })


    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id="location"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        onBlur={e => setLocation(e.target.value)}
                        placeholder="location" />
                </label>
                {/* <label htmlFor="animal">
                    animal
                    <select
                        id="animal"
                        value={animal}
                        onBlur={e => setLocation(e.target.value)}
                        onChange={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => (
                            <option
                                key={animal}
                                value={animal}>{animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setLocation(e.target.value)}
                        disabled={!breeds.length}
                    >
                        <option>All</option>
                        {breeds.map(breed => (
                            <option value={breed} key={breed}>{breed}</option>
                        ))}


                    </select>
                </label> */}

                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SearchParams;