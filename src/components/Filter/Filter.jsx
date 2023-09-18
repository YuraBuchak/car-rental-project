import React, { useState } from 'react';
import Select from 'react-select';
import { makes } from '../data/make';
import scss from './Filter.module.scss';
import { makeStyles } from './SelectStyle';

const makeSelectOptions = arr => arr.map(el => ({ value: el, label: el }));
function generateNumberArray(start, end, increment) {
  const result = [];
  for (let i = start; i <= end; i += increment) {
    result.push(i);
  }
  return result;
}

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));

const optionsMake = makeSelectOptions(sortedMakes);
const prices = generateNumberArray(10, 500, 10);
const optionsPrice = makeSelectOptions(prices);

const stylesMake = makeStyles({ container: { width: 224 } });
const stylesPrice = makeStyles({ container: { width: 125 } });

const Filter = ({ onFilter }) => {
  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'from':
        setFrom(value);
        break;
      case 'to':
        setTo(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onFilter({ make, price, from, to });
  };

  return (
    <form onSubmit={handleSubmit} className={scss.filter_form}>
      <div className={scss.label_wrapper}>
        <label htmlFor="make" className={scss.label}>
          Car brand
        </label>
        <Select
          id="make"
          name="make"
          aria-label="Search by make"
          placeholder="Enter the text"
          unstyled
          styles={stylesMake}
          onChange={e => setMake(e.value)}
          options={optionsMake}
        />
      </div>

      <div className={scss.label_wrapper}>
        <label htmlFor="price" className={scss.label}>
          Price/ 1 hour
        </label>
        <Select
          id="price"
          name="price"
          aria-label="Search by max price"
          placeholder="To $"
          unstyled
          styles={stylesPrice}
          isSearchable={false}
          onChange={e => setPrice(e.value)}
          options={optionsPrice}
        />
      </div>

      <div className={scss.text_wrapper}>
        <div className={scss.label_wrapper}>
          <label htmlFor="from" className={scss.label}>
            Car mileage / km
          </label>
          <input
            type="number"
            name="from"
            id="from"
            placeholder="from"
            onChange={handleChange}
            className={scss.input}
          />
        </div>
        <div className={scss.label_wrapper}>
          <label htmlFor="to" className={scss.label}>
            Car mileage / km
          </label>
          <input
            type="number"
            name="to"
            id="to"
            placeholder="To"
            onChange={handleChange}
            className={scss.input}
          />
        </div>
      </div>

      <button className={scss.filter_btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Filter;
