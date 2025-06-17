import { membersData } from "../data/membersData.js";

export function members() {

    let memberHTML = ''

    for (const item of membersData) {
        memberHTML += `
                <div class="members col-12 col-md-6 col-lg-3">
                    <div class="member">
                        <img src="${item.imgSrc}" alt="Member pic">
                        <div class="member-info">
                            <h4>${item.name}</h4>
                            <p>${item.desc}</p>
                            <a href="services${item.link}">MORE</a>
                        </div>
                    </div>              
                </div>`;
    }

    return `
    <div class="container">
        <div class="row">
            <div class="team-members">
                <div class="team-about">
                    <h1>Meet the team work behind our succees</h1>
                    <button class="pink">book a free call</button>
                </div>
               ${memberHTML}
            </div>
        </div>
    </div>
    `;
}