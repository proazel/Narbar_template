import React from 'react';

const NavbarMenu = () => {
    const menuList = ["Developers", "Governance", "Community", "More"];
    const dropList = [
        ["V3 Documentation", "V3 Whitepaper", "GitHub", "Bug Bounty"],
        ["UNI Token", "Governance Forum", "Sybil (Delegates)", "Voting Portal", "Documentation"],
        ["Discord", "Twitter", "Reddit"],
        ["Blog", "About", "FAQ", "Help & Tutorials", "Logo & Brand"],
    ];

    const handleClick = e => {
        const targetNum = e.target.id.split('menuname', 7)[1];

        // handleColor
        const allMenu = document.querySelectorAll('.menuname');
        const targetMenu = document.querySelector(`#menuname${targetNum}`);
        for (let i = 0; i < allMenu.length; i++) {
            allMenu[i].setAttribute('class', 'menuname');
        }
        targetMenu.setAttribute('class', 'menuname clicked');

        // handleDrop
        const allDrop = document.querySelectorAll('.dropdown');
        const targetDrop = document.querySelector(`#dropdown${targetNum}`);
        for (let i = 0; i < allDrop.length; i++) {
            allDrop[i].setAttribute('class', 'dropdown');
        }
        targetDrop.setAttribute('class', 'dropdown show');

        // 같은 버튼 두번 클릭 시 열려있던 dropdown이 닫히지 않는 문제 발생
        
        // const targetNum = e.target.id.split('menuname', 7)[1];
        // const targetMenu = document.querySelector(`#menuname${targetNum}`);
        // const targetDrop = document.querySelector(`#dropdown${targetNum}`);
        // const clickedMenu = document.querySelector('.clicked');
        // const showDrop = document.querySelector('.show');

        // if (clickedMenu != null) {
        //     console.log(clickedMenu.className);
        //     if (clickedMenu.className == 'menuname clicked') {
        //         clickedMenu.setAttribute('class', 'menuname');
        //     }
        // }
        // // else {
        // //     targetMenu.setAttribute('class', 'menuname clicked');
        // // }
        // targetMenu.setAttribute('class', 'menuname clicked');

        // if (showDrop != null) {
        //     console.log(showDrop.className);
        //     if (showDrop.className == 'dropdown show') {
        //         showDrop.setAttribute('class', 'dropdown');
        //     }
        // }
        // // else {
        // //     targetDrop.setAttribute('class', 'dropdown show');
        // // }
        // targetDrop.setAttribute('class', 'dropdown show');
    }

    return (
        <>
            {
                menuList.map((v, k) => {
                    return (
                        <div key={k}>
                            {/* menu */}
                            <span
                                id={"menuname" + k}
                                className="menuname"
                                onClick={handleClick}
                            >
                                {v}
                            </span>

                            {/* dropdown */}
                            <ul
                                id={"dropdown" + k}
                                className="dropdown"
                            >
                                {
                                    dropList[k].map((v, k) => {
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