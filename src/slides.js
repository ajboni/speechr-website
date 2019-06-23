import pbs_logo_a from './assets/logo.png'
import sf01 from './assets/sf01.png'
import sf02 from './assets/sf02.png'
import sf03 from './assets/sf03.jpg'
import sf04 from './assets/sf04.png'
import gdd01 from './assets/images/gdd01.png'
import gdd02 from './assets/images/gdd02.png'
import director01 from './assets/images/director01.png'
import quests01 from './assets/images/quests01.png'
import kanban01 from './assets/images/kanban01.png'
import home from './assets/images/home.png'

import devPhoto from './assets/dev.png'
import ceoPhoto from './assets/dev2.png'
import React, { Component } from 'react'

export const slidesContent = [
    {
        title: 'A Better Way To Make Games',
        description:
            <p >
                Speechr is a collaborative design and development tool for easy and organised game development.
                <br />
                It aims to solve file clutter while providing a centralised environment for every aspect of your project.
            </p>,
        // button: 'Read More',
        image: home,

    },
    {
        title: 'Features',
        description:
            (
                <ul className="feature" style={{ textAlign: "left" }}>
                    <li>
                        <strong>One repository: </strong> All your data in one place, sorted, searchable, editable.</li>
                    <li>
                        <strong>Your Game, your data: </strong>You own your data, it lives on your computer and it can be optionally synced to a remote database</li>
                    <li>
                        <strong>Multi user: </strong>Several users can work offline on the same database and sync changes in real time to a remote master database. </li>
                    <li>
                        <strong>Beautiful UI: </strong>Because staring at a screen while building the next big hit should be a pleasant experience.</li>
                    <li>
                        <strong>Engine Agnostic: </strong>Standard JSON export for any usage.</li>
                </ul>


            ),
        image: gdd01,
        // button: "Learn More",

    },
    {

        title: 'Game Design Documents',
        description:
            (
                <p>
                    Create your game's design document with Speechr and instantly share your concepts with your team. Each member will have access to the GDD at the click of button.
                </p>
            ),
        // button: 'Sounds great, tell me more!',
        image: gdd02,
    },
    {
        title: 'Scripting',
        description:
            (
                <p>
                    Speechr's powerful script editor uses simple plain text to tell your game's characters exactly what to do and how to do it.
                    <br />
                    With highlighted syntax keeping everything easy to read, Speechr's scripting is a joy to use.
                </p>
            ),
        // button: 'OK, but what about dialogue trees?',
        image: sf03,

    },
    {
        title: 'Non-Linear Branching Tree Graph vs Scripts?',
        description:
            (

                <p>
                    After researching many methods for displaying complex non-linear dialogue, we found that the combination of both worlds is necessary.
                    <br />
                    A tree structure to show the flow and branching of the scene <strong>and</strong> a scripting editor that does not force the user to write in tiny boxes.
                    <br />
                    Complex scenes can be made without cluttering the screen with tree nodes, but at the same time having a visual representation really helps to visualize all the possible outcomes.
                    </p >

            ),
        // button: 'I want more!',
        image: sf02,

    },
    {
        title: 'The Director.',
        description:
            (
                <div>
                    <p>
                        Detail optional character information here to compliment your project's GDD or to give you voice actors some background on your characters.
                        <br />
                        Set up your actor properties and use them in sripts as variables (coming soon).
                        </p>
                </div>
            ),
        // button: 'I want more!',
        image: director01,
    },

    {
        title: 'Quests, Items and Misc Objects.',
        description:
            (
                <div>
                    <p>
                        Custom objects can be written in hjson (recommended), json, and YAML. They will be converted to standard JSON on game content export.
                    <br />
                    </p>
                    <p style={{ textAlign: "left" }}>
                        <strong>* Quests</strong> can be actual quests, objectives or properties that need to be tracked in the course of a game.
                    <br />
                        <strong>* Items</strong> will let you have an Item database with custom properties to inject in your game.
                    <br />
                        <strong>* Misc</strong> objects can also added and exported to the engine, this is good for main menus, default options,
                </p>
                </div>

            ),
        // button: 'I want more!',
        image: quests01,
    },
    {
        title: 'Kanban Boards',
        description:
            (

                <p>
                    Take notes of your to-dos in a quick and straightforward fashion.
                    <br />
                    Not intended to replace popular tools like trello, but having the option to note down that last minute idea into the project quick and easy is very convenient.
                </p>

            ),
        // button: 'I want more!',
        image: kanban01,
    },
    {
        title: 'Constant Development',
        description:
            (
                <div>
                    <p style={{ textAlign: 'center' }}>
                        Speechr is in constant development, future updates will include:
                </p>
                    <p style={{ textAlign: 'left' }}>
                        <strong>* Key Ring:</strong> This section will have a tree structure(much like everything else) where you will be able to mass import licence keys for services(steam, itch.io, etc) and then you will be able to assign it to users and mark them as used.Keys should be encrypted.
                    < br />
                        <strong>* Localization: </strong> Scripts and Dialogues needs to be imported/ written and exported in different languages.
                    < br />
                        <strong>* Conversation Simulator: </strong> Just fire up your dialogue and test it in a simulation, useful for quick trying different ideas.
                    < br />
                        <strong>* Dark Mode! </strong>
                    </p >
                </div>
            ),
        button: 'Download Now',
        buttonLink: 'download',
        image: kanban01,
    },



];