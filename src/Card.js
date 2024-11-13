// src/components/Card.js
import React from "react";

const Card = ({ name, role, gender, location }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 text-center">
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-700">{role}</p>
    <p className="text-gray-600">{gender}</p>
    <p className="text-gray-600">{location}</p>
  </div>
);

export default Card;
