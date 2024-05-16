import React, { useState } from 'react';

const BmiCalculator = () => {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [dietChart, setDietChart] = useState('');

  const calcBmi = (event) => {
    // Prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiNum = (weight / (height * height)) * 703;
      setBmi(bmiNum.toFixed(1));

      // Logic for message and diet chart
      let chart = '';
      if (bmiNum < 25) {
        setMessage('You are underweight');
        chart = (
          <div style={{ width: '50vw' }}>
            Diet Chart For Underweight:
            <br />
            <br />
            Breakfast:
            <br />
            1. Whole grain toast with peanut butter
            <br />
            2. Greek yogurt with honey and mixed nuts
            <br />
            3. Banana
            <br />
            <br />
            Lunch:
            <br />
            1. Grilled chicken or tofu salad with mixed greens, avocado, nuts, and olive oil dressing
            <br />
            2. Quinoa or brown rice
            <br />
            <br />
            Dinner:
            <br />
            1. Baked salmon or lentil stew
            <br />
            2. Steamed vegetables (broccoli, carrots, spinach)
            <br />
            3. Sweet potato or brown rice
          </div>
        );
      } else if (bmiNum >= 25 && bmiNum < 30) {
        setMessage('You are in a healthy weight');
        chart = (
          <div style={{ width: '50vw' }}>
            Diet Chart for a Healthy Weight Person:
            <br />
            <br />
            Breakfast:
            <br />
            1. Oatmeal with fruit and nuts, 2. Greek yogurt with berries and granola,
            <br />
            3. whole-wheat toast with eggs.
            <br />
            <br />
            Lunch:
            <br />
            1. Salad with grilled chicken or fish,
            <br />
            2. lentil soup with whole-grain bread,
            <br />
            3. veggie wrap.
            <br />
            <br />
            Dinner:
            <br />
            1. Salmon with roasted vegetables,
            <br />
            2. chicken stir-fry with brown rice,
            <br />
            3. lentil pasta with marinara sauce.
          </div>
        );
      } else {
        setMessage('You are overweight');
        chart = (
          <div style={{ width: '50vw' }}>
            Diet Chart for Overweight:
            <br />
            <br />
            Breakfast
            <br />
            1. Oatmeal: 1 cup of oatmeal made with water or low-fat milk, topped with fresh berries and a teaspoon of honey.
            <br />
            2. Eggs: 1-2 boiled eggs.
            <br />
            3. Drink: Green tea or black coffee.
            <br />
            <br />
            Lunch:
            <br />
            1. Grilled Chicken Salad: Mixed greens with grilled chicken breast, cherry tomatoes, cucumber, carrots, and a light vinaigrette dressing.
            <br />
            2. Whole Grain Roll: 1 small whole grain roll.
            <br />
            <br />
            Dinner:
            <br />
            1. Baked Salmon: 4-6 oz of baked salmon with lemon and herbs.
            <br />
            2. Steemed Vegetables:A side of steamed broccoli and carrots.
          </div>
        );
      }
      setDietChart(chart);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form style={{ width: "50vw" }} onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </div>

          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(e) => setHeight(Number(e.target.value))} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
          {dietChart}
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
