import React, { useState } from 'react';

const Kontaktformular = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        postleitzahl: '',
        city: '',
        topic: '',
        message: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Vor- & Nachname*</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div>
                <label>Unternehmen</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div>
                <label>E-Mail-Adresse*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Telefonnummer*</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
                <label>PLZ*</label>
                <input type="text" name="postleitzahl" value={formData.postleitzahl} onChange={handleChange} required />
            </div>
            <div>
                <label>Ort*</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
                <label>Themenbereich</label>
                <select name="topic" value={formData.topic} onChange={handleChange}>
                    <option value="">Wählen Sie einen Bereich</option>
                    <option value="topic1">Themenbereich 1</option>
                    <option value="topic2">Themenbereich 2</option>
                </select>
            </div>
            <div>
                <label>Nachricht*</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div>
                <label>
                    <input type="checkbox" required /> Mit der Bestätigung akzeptieren Sie unsere Datenschutzbedingungen.
                </label>
            </div>
            <button type="submit">Abschicken</button>
        </form>
    );
};

export default Kontaktformular;
