import React, { Component } from "react";
import css from './Form.module.css'

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleImput = evt => {
        this.setState({
            [evt.currentTarget.name]: evt.currentTarget.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number)
        this.reset();
    }

    reset = () => {
        this.setState({ number: '', name: '' })
    }

    render() {
        const { name, number } = this.state

        return (
            <div className={css.wrapper}>
                <form action="submit" onSubmit={this.handleSubmit} className={css.form}>
                    <label htmlFor="">
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={this.handleImput}
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
                            onChange={this.handleImput}
                        />
                    </label>

                    <button type="submit">Add contact</button>
                </form>
            </div>
        );
    };
};
export default Form;