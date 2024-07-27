
"use client";

import { useState } from 'react';

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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        };

        fetch('/api/emailContact', option)
            .then(response => {
                if (response.ok) {
                    alert('Ihre Nachricht wurde erfolgreich gesendet.');
                    setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        postleitzahl: '',
                        city: '',
                        topic: '',
                        message: '',
                    });
                } else {
                    return response.json().then(err => {
                        alert(`Fehler: ${err.message}`);
                    });
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-[#e63462] p-6 rounded-lg w-full max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-[#0d1321]">Kontaktformular</h1>
            <div className="w-full">
                <label className="text-[#0d1321]">Vor- & Nachname* </label>
                <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                    className="border border-[#e63462] p-2 rounded w-full"
                />
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">Unternehmen </label>
                <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="border border-[#e63462] p-2 rounded w-full"
                />
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">E-Mail-Adresse* </label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="border border-[#e63462] p-2 rounded w-full"
                />
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">Telefonnummer* </label>
                <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="border border-[#e63462] p-2 rounded w-full"
                />
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">PLZ* </label>
                <input 
                    type="text" 
                    name="postleitzahl" 
                    value={formData.postleitzahl} 
                    onChange={handleChange} 
                    required 
                    className="border border-[#e63462] p-2 rounded w-full"
                />
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">Ort* </label>
                <input 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    required 
                    className="border border-[#e63462] p-2 rounded w-full"
                />
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">Themenbereich </label>
                <select 
                    name="topic" 
                    value={formData.topic} 
                    onChange={handleChange} 
                    className="border border-[#e63462] p-2 rounded w-full active:border-[#e63462]"
                >
                    <option value="">Wählen Sie einen Bereich</option>
                    <option value="topic1">Allgemeine Fragen</option>
                    <option value="topic2">Pflegehinweise</option>
                    <option value="topic3">Bestellungen und Lieferungen</option>
                    <option value="topic4">Rückgabe und Umtausch</option>
                </select>
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">Nachricht* </label>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="border border-[#e63462] p-2 rounded w-full"
                ></textarea>
            </div>
            <div className="w-full">
                <label className="text-[#0d1321]">
                    <input type="checkbox" required className="mr-2" /> Mit der Bestätigung akzeptieren Sie unsere Datenschutzbedingungen.
                </label>
            </div>
            <button 
                className="bg-[#90ad97] hover:bg-[#7b9c82] text-white font-bold py-2 px-4 rounded mt-4 w-32" 
                type="submit"
            >
                Abschicken
            </button>
        </form>
    );
};

export default Kontaktformular;
