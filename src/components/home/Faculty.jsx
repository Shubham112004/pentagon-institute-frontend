import React from "react";

const facultyMembers = [
    {
        id: 1,
        name: "Dr. John Doe",
        position: "Professor of Computer Science",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
    },
    {
        id: 2,
        name: "Dr. John Doe",
        position: "Professor of Computer Science",
        image: "https://img.freepik.com/free-vector/recruitment-process-illustration_24877-60168.jpg?uid=R171420775&ga=GA1.1.172609253.1727607505&semt=ais_hybrid",
    },
    {
        id: 3,
        name: "Dr. Jane Smith",
        position: "Associate Professor of Data Science",
        image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?uid=R171420775&ga=GA1.1.172609253.1727607505&semt=ais_hybrid",
    },
    {
        id: 4,
        name: "Prof. Mark Taylor",
        position: "Head of Computer Engineering",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&s",
    },
    {
        id: 5,
        name: "Dr. Emily White",
        position: "Assistant Professor of Cyber Security",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsS7RsigQ-2yyDRtYnh7xycdwCco-eBo1PQ&s",
    },
];

const Faculty = () => {
    return (
        <section className="faculty-section">
            <h2 className="faculty-title">Meet Our Faculty</h2>
            <div className="faculty-list">
                {facultyMembers.map((member) => (
                    <div key={member.id} className="faculty-item">
                        <div className="faculty-image-container">
                            <img src={member.image} alt={member.name} className="faculty-image" />
                            <div className="faculty-tooltip">
                                <p className="faculty-name">{member.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;
