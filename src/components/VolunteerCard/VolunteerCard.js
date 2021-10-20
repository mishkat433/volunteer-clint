import React, { useState } from 'react';
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

const volunteerInfo= [
    {
        name:'child support',
        pic: childSupport
    },
    {
        name: 'Refuge Shelter',
        pic: refuseShelter
    },
    {
        name: 'Food charity',
        pic: foodCharity
    },
    {
        name: 'foster a shelter animal',
        pic: animalShelter
    },
    {
        name: 'child support',
        pic: babySit
    },
    {
        name: 'Host a river clean-up',
        pic: cleanWater
    },
    {
        name: 'Clean up your local park',
        pic: clearPark
    },
    {
        name: 'Host a clothing swap',
        pic: clothSwap
    },
    {
        name: 'Build bird-houses for your neighbors',
        pic: birdHouse
    },
    {
        name: 'Give IT help to local adults',
        pic: itHelp
    },
    {
        name: 'Give a seminar on driving safety',
        pic: driveSafety
    },
    {
        name: 'Organize books at the library',
        pic: libraryBook
    },
    {
        name: 'Give free music lesson',
        pic: musicLesen
    },
    {
        name: 'New book for children',
        pic: newBooks
    },
    {
        name: 'Teach people how to register to vote',
        pic: voteRegister
    },
    {
        name: 'Collect stuffed animals',
        pic: stuffedAnimals
    },
]


const VolunteerCard = () => {

    return (
        <div className="row">
            {
                volunteerInfo.map(data =><Task task={data} key={data.name}></Task>)
            }

        </div>
    );
};

export default VolunteerCard;