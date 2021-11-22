import { useState } from 'react';
import s from './TodoContact.module.css';
import PropTypes from "prop-types";

function TodoContact({ onSubmit }) {
    const [name,setName] = useState('') 
    const [number, setNumber] = useState('')

    const handleChange = event => {
        const { name, value } = event.currentTarget
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }


    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(name, number);
      reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

  
    return (
      <div>
        <div className={s.Wrapper}>
          <h1 className={s.titleText}>Phonebook</h1>
        </div>
        <form onSubmit={handleSubmit} className={s.headStyle}>
          <label className={s.labelStyle}>
            Name
            <input
              className={s.inputStyle}
              type='text'
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </label>
          <label className={s.labelStyle}>
            Number
            <input
              className={s.inputStyle}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </div>
    );
}

TodoContact.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default TodoContact;

// class TodoContact extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
    
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.name, this.state.number);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div>
//         <div className={s.Wrapper}>
//           <h1 className={s.titleText}>Phonebook</h1>
//         </div>
//         <form onSubmit={this.handleSubmit} className={s.headStyle}>
//           <label className={s.labelStyle}>
//             Name
//             <input
//               className={s.inputStyle}
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={s.labelStyle}>
//             Number
//             <input
//               className={s.inputStyle}
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit" className={s.button}>
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

