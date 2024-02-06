import React, { useState } from "react";

const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-name" className="formlabel">Name:</label>
                            <input id="book-name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required />
                        </div>

                        <div>
                            <label htmlFor="book-email" className="formlabel">Email Address:</label>
                            <input id="book-name" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" required />
                        </div>

                        <div>
                            <label htmlFor="book-phone" className="formlabel">Phone No.:</label>
                            <input id="book-phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone No." minLength={8} required />
                        </div>

                        <div>
                            <label htmlFor="book-date" className="formlabel">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>

                        <div>
                            <label htmlFor="book-time" className="formlabel">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests" className="formlabel">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} type={"number"} placeholder={0} max={10} required />
                        </div>

                        <div>
                            <label htmlFor="book-occasion" className="formlabel">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-notes" className="formlabel">Additional Requests:</label>
                            <input id="book-notes" value={notes} onChange={(e) => setNotes(e.target.value)} type="text" placeholder="Additional Requests" />
                        </div>

                        <div className="btnReserve">
                            <input aria-label="On Click" type={"submit"} value={"Reserve Now"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;

