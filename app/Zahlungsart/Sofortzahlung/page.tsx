import React, { useState } from 'react';

const Sofortzahlung = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        bankName: '',
        iban: '',
        email: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleJetztKaufen = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle 'Jetzt kaufen' logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleJetztKaufen}>
            <div>
                <label>Vor- & Nachname*</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Bank Name*</label>
                <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>IBAN*</label>
                <input
                    type="text"
                    name="iban"
                    value={formData.iban}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>E-Mail Adresse*</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Jetzt kaufen</button>
        </form>
    );
};

export default Sofortzahlung;
