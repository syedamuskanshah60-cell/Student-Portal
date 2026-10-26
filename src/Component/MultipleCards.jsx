import React from 'react';

function MultipleCards({ image, data, number }) {
    return (
        <div className='container my-4'>
            {/* Card wrapper */}
            <div className="card w-100 border-0 shadow-sm rounded-4 text-dark" style={{ backgroundColor: '#eef4ff' }}>
                <div className="card-body d-flex justify-content-between align-items-center p-4">
                    
                    {/* Main Flex Container */}
                    <div className="d-flex align-items-center gap-3">

                        {/* Left Side: Circular Image Container */}
                        <div 
                            className="d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm flex-shrink-0"
                            style={{ width: 60, height: 60 }}
                        >
                            <img
                                src={image}
                                alt="Students Icon"
                                style={{ width: 40, height: 40, objectFit: "contain" }}
                            />
                        </div>

                        {/* Right Side: Text & Number (dono ek div ke andar stacked hain) */}
                        <div>
                            <span className="text-secondary fw-semibold fs-6 d-block">{data}</span>
                            <h2 className="fw-bold mb-0 text-dark">{number}</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default MultipleCards;