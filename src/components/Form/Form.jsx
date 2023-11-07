import css from './Form.module.css'
import { useState } from "react";

const Form = ({ onSubmit }) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");


    const handleImputName = e => {
        setName(e.target.value)
    };

    const handleImputNumber = e => {
        setNumber(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number)
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div className={css.wrapper}>
            <form action="submit" onSubmit={handleSubmit} className={css.form}>
                <label htmlFor="">
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleImputName}
                    />
                </label>

                <label htmlFor="">
                    Contacts
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleImputNumber}
                    />
                </label>

                <button type="submit">Add contact</button>
            </form>
        </div>
    );
};
export default Form;