// Auf Rechnung

import React, { useState } from 'react';

const Rechnung = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        adresse: '',
        postleitzahl:'',
        country:'',
        email:'',
    })
}

const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};



