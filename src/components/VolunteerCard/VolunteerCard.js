import React from 'react';
import Task from '../Task/Task';
import childSupport from "../../images/childSupport.png";
import animalShelter from "../../images/animalShelter.png";
import babySit from "../../images/babySit.png";
import birdHouse from "../../images/birdHouse.png";
import cleanWater from "../../images/cleanWater.png";
import driveSafety from "../../images/driveSafety.png";
import clothSwap from "../../images/clothSwap.png";
import clearPark from "../../images/clearnPark.png";
import itHelp from "../../images/ITHelp.png";
import libraryBook from "../../images/libraryBooks.png";
import musicLesen from "../../images/musicLessons.png";
import newBooks from "../../images/newBooks.png";
import refuseShelter from "../../images/refuseShelter.png";
import foodCharity from "../../images/foodCharity.png";
import voteRegister from "../../images/voteRegister.png";
import stuffedAnimals from "../../images/stuffedAnimals.png";

const volunteerInfo = [
    {
        id: 1,
        name: 'child support',
        pic: childSupport
    },
    {
        id: 2,
        name: 'Refuge Shelter',
        pic: refuseShelter
    },
    {
        id: 3,
        name: 'Food charity',
        pic: foodCharity
    },
    {
        id: 4,
        name: 'foster a shelter animal',
        pic: animalShelter
    },
    {
        id: 5,
        name: 'child support',
        pic: babySit
    },
    {
        id: 6,
        name: 'Host a river clean-up',
        pic: cleanWater
    },
    {
        id: 7,
        name: 'Clean up your local park',
        pic: clearPark
    },
    {
        id: 8,
        name: 'Host a clothing swap',
        pic: clothSwap
    },
    {
        id: 9,
        name: 'Build bird-houses for your neighbors',
        pic: birdHouse
    },
    {
        id: 10,
        name: 'Give IT help to local adults',
        pic: itHelp
    },
    {
        id: 11,
        name: 'Give a seminar on driving safety',
        pic: driveSafety
    },
    {
        id: 12,
        name: 'Organize books at the library',
        pic: libraryBook
    },
    {
        id: 13,
        name: 'Give free music lesson',
        pic: musicLesen
    },
    {
        id: 14,
        name: 'New book for children',
        pic: newBooks
    },
    {
        id: 15,
        name: 'Teach people how to register to vote',
        pic: voteRegister
    },
    {
        id: 16,
        name: 'Collect stuffed animals',
        pic: stuffedAnimals
    },
]


const VolunteerCard = () => {

    return (
        <div className="row">
            {
                volunteerInfo.map(data => <Task task={data} key={data.id}></Task>)
            }

        </div>
    );
};

export default VolunteerCard;