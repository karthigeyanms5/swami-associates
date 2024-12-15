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
        name: "Ar.Karthigeyan M S",
        description: "Architect / Design Consultent",
        image: "team/karti.jpg", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Er.Swaminathan.A",
        description: "Managing Director",
        image: "team/swami.jpg", // Replace with actual image URL
    },
    {
        id: 3,
        name: "Er. Ritiga M S",
        description: "Structural Engineer",
        image: "team/ritiga.jpg", // Replace with actual image URL
    },
];

const Team = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Our <span className="text-red-500">Builders</span> who drive results
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We are an <span className="font-bold">Builders</span> helping build your dream home.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={`bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 
              ${index === 1 ? "relative -top-6" : ""}`} // Center card raised
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full min-h-60 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600 text-sm mt-2">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
