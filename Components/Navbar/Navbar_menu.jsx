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
        // const selectMenu = document.querySelector('.select');
        // const showMenu = document.querySelector('.show');
        // console.log('1 targetNum : ', targetNum);
        // console.log('2 selectMenu : ', selectMenu);
        // console.log('3 showMenu : ', showMenu);

        // handleColor
        const allMenu = document.querySelectorAll('.menuname');
        const targetMenu = document.querySelector(`#menuname${targetNum}`);
        for (let i = 0; i < allMenu.length; i++) {
            allMenu[i].setAttribute('class', 'menuname');
        }
        targetMenu.setAttribute('class', 'menuname select');

        // handleDrop
        const allDrop = document.querySelectorAll('.dropdown');
        const targetDrop = document.querySelector(`#dropdown${targetNum}`);
        for (let i = 0; i < allDrop.length; i++) {
            allDrop[i].setAttribute('class', 'dropdown');
        }
        targetDrop.setAttribute('class', 'dropdown show');
    }

    return (
        <>
            {
                list.map((v, k) => {
                    return (
                        <div key={k}>
                            {/* menu */}
                            <div
                                id={"menuname" + k}
                                className="menuname"
                                onClick={handleClick}
                            >
                                {v.subject}
                            </div>

                            {/* dropdown */}
                            <ul
                                id={"dropdown" + k}
                                className="dropdown"
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
        </>
    );
}

export default NavbarMenu;