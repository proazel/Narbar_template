import React from 'react';

const list = [
    {
        subject: "Governance",
        category: ["V3 Documentation", "V3 Whitepaper", "GitHub", "Bug Bounty"],
    },
    {
        subject: "Developers",
        category: ["UNI Token", "Governance Forum", "Sybil (Delegates)", "Voting Portal", "Documentation"],
    },
    {
        subject: "Community",
        category: ["Discord", "Twitter", "Reddit"],
    },
    {
        subject: "More",
        category: ["Blog", "About", "FAQ", "Help & Tutorials", "Logo & Brand"],
    },
];

const NavbarMenu = () => {
    const handleClick = e => {
        const targetNum = e.target.id.split('menuname', 7)[1];
        const targetMenu = document.querySelector(`#menuname${targetNum}`);
        const targetDrop = document.querySelector(`#menuname${targetNum} > ul`);
        const allMenu = document.querySelectorAll('.menuname');
        const allDrop = document.querySelectorAll('.dropdown');

        if (targetMenu.className == 'menuname' && targetDrop.className == 'dropdown') {
            for (let i = 0; i < allMenu.length; i++) {
                allMenu[i].setAttribute('class', 'menuname');
                allDrop[i].setAttribute('class', 'dropdown');
            }
            targetMenu.setAttribute('class', 'menuname select');
            targetDrop.setAttribute('class', 'dropdown show'); 
        } else {
            targetMenu.setAttribute('class', 'menuname');
            targetDrop.setAttribute('class', 'dropdown');
        }
    }

    return (
        <div id="menu">
            {
                list.map((v, k) => {
                    return (
                        // {/* menu */}
                        <div
                            id={"menuname" + k}
                            className="menuname"
                            onClick={handleClick}
                            key={k}
                        >
                            {v.subject}

                            {/* dropdown */}
                            <ul
                                id={"dropdown" + k}
                                className="dropdown"
                                key={k}
                            >
                                {
                                    v.category.map((v, k) => {
                                        return (
                                            <li key={k}>{v}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default NavbarMenu;