export function Chai() {

    return (
        <section>
            <h1>Team Members</h1>
            <h3>
                ER. SWAMINATHAN A.,DCE(CIVIL) Licensed Building Surveyor/Civil Engineer
            </h3>
            <h3>
                AR. KARTHIGEYAN M S., B.ARCH Licensed Architect
            </h3>
            <h3>
                ER. RITIGA M S., B.E(CIVIL), M.E(STRUCTURAL) Structural Engineer
            </h3>
        </section>
    )
}


import React from "react";

const teamMembers = [
    {
        id: 1,
        name: "Er.Swaminathan.A",
        description: "Managing Director",
        image: "team/swami.jpg", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Er. Ritiga M S",
        description: "Structural Engineer",
        image: "team/ritiga.jpg", // Replace with actual image URL
    },
    {
        id: 3,
        name: "Ar.Karthigeyan M S",
        description: "Architect / Design Consultant",
        image: "team/karti.jpg", // Replace with actual image URL
    },
];

const Team = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Our <span className="text-red-500">Builders</span>
                    </h2>
                </div>

                {/* Team Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div className="relative overflow-hidden">
                            <div
                                key={member.id}
                                className={` overflow-hidden transition-transform duration-300 rounded-xl group hover:scale-90`} // Card smaller on hover
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full min-h-60 object-cover transition-transform duration-300 group-hover:scale-110" // Image bigger on hover
                                />
                            </div>
                            <div className="p-2">
                                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
