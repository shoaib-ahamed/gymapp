import React, { useState } from 'react';

const BmiCalculator = () => {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [dietChart, setDietChart] = useState('');
  const [exercisePlan, setExercisePlan] = useState('');

  const calcBmi = (event) => {
    // Prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const bmiNum = (weight / (height * height)) * 703;
      setBmi(bmiNum.toFixed(1));

      // Logic for message, diet chart, and exercise plan
      let chart = '';
      let exercise = '';
      if (bmiNum < 18.5) {
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
        exercise = (
          <div style={{ width: '50vw' }}>
            Exercise Plan for an Underweight Person:
            <br />
            <br />
            Day 1:
            <br />
            * 15 minutes of cardio (brisk walking, jogging, or cycling)

            <br />
            * 15 minutes of bodyweight exercises or light weights (increased reps or sets)

            <br />
            * 5 minutes of stretching
            <br />
            <br />
            Day 2:
            <br />
            * 15 minutes of cardio
            <br />
            * 15 minutes of resistance band exercises or light weights (increased resistance)
            <br />
            *5 minutes of stretching
            <br />
            <br />
            Day 3: Rest or light activity
            <br />
            <br />
            Day 4:
            <br />
            * 15 minutes of walking at a moderate pace
            <br />
            * 15 minutes of bodyweight exercises or light weights (emphasis on proper form and controlled movements)
            <br />
            *5 minutes of stretching

            <br />
            <br />
            Day 5:
            <br />
            * 15 minutes of cardio
            <br />
            *15 minutes of resistance band exercises or light weights (focus on muscle contraction and full range of motion)
            <br />
            * 5 minutes of core stretching
            <br />
            <br />
            Day 6: Rest or light activity
            <br />
            <br />
            Day 7:
            <br />
            * 20 minutes of yoga or Pilates for flexibility, balance, and core strength
            <br />
            * 5 minutes of stretching
          </div>
        );
      } else if (bmiNum >= 18.5 && bmiNum < 25) {
        setMessage('You are in a healthy weight range');
        chart = (
          <div style={{ width: '50vw' }}>
            Diet Chart for a Healthy Weight Person:
            <br />
            <br />
            Breakfast:
            <br />
            1. Oatmeal with fruit and nuts, 2. Greek yogurt with berries and granola,
            <br />
            3. Whole-wheat toast with eggs.
            <br />
            <br />
            Lunch:
            <br />
            1. Salad with grilled chicken or fish,
            <br />
            2. Lentil soup with whole-grain bread,
            <br />
            3. Veggie wrap.
            <br />
            <br />
            Dinner:
            <br />
            1. Salmon with roasted vegetables,
            <br />
            2. Chicken stir-fry with brown rice,
            <br />
            3. Lentil pasta with marinara sauce.
          </div>
        );
        exercise = (
          <div style={{ width: '50vw' }}>
            Exercise Plan for an Healthy Weight Person:
            <br />
            <br />
            Day 1: Strength Training
            <br />
            Warm-up: 5-10 minutes of light cardio (brisk walking, jogging, or cycling)
            <br />
            Strength Training:
            <br />
            Squats: 3 sets of 10 repetitions
            <br />
            Push-ups: 3 sets of 10 repetitions
            <br />
            Lunges: 3 sets of 10 repetitions per leg
            <br />
            Dumbbell Rows: 3 sets of 10 repetitions
            <br />
            Cool-down: 5-10 minutes of stretching focusing on the muscles worked
            <br />
            <br />
            Day 2: Cardiovascular Exercise
            <br />
            30 minutes of moderate-intensity continuous cardio (running, cycling, swimming)
            <br />
            <br />
            Day 3: Active Rest or Flexibility
            Active Rest - Engage in light activities such as walking, yoga, or leisurely cycling for 30-45 minutes.
            <br />
            <br />
            Day 4: Strength Training
            <br />
            Warm-up: 5-10 minutes of light cardio
            <br />
            Strength Training:
            <br />
            Deadlifts: 3 sets of 8 repetitions
            <br />
            Bench Press: 3 sets of 8 repetitions
            <br />
            Pull-ups or Lat Pulldowns: 3 sets of 8 repetitions
            <br />
            Shoulder Press: 3 sets of 10 repetitions
            <br />
            Cool-down: 5-10 minutes of stretching
            <br />
            <br />
            Day 5: Cardiovascular Exercise
            45 minutes of moderate-intensity cardio (running, cycling, swimming)
            <br />
            Cool-down: 5-10 minutes of light walking and stretching
            <br />
            <br />
            Day 6: Active Recreation
            Engage in recreational activities such as hiking, playing a sport, or dancing for at least 45 minutes to 1 hour.
            <br />
            Day 7: Rest Day
          </div>
        );
      } else {
        setMessage('You are overweight');
        chart = (
          <div style={{ width: '50vw' }}>
            Diet Chart for Overweight:
            <br />
            <br />
            Breakfast:
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
            2. Steamed Vegetables: A side of steamed broccoli and carrots.
          </div>
        );
        exercise = (
          <div style={{ width: '50vw', marginTop: '10' }}>
            Exercise Plan for an Overweight Person:
            <br />
            <br />
            Day 1:
            <br />
            * 20 minutes of brisk walking
            <br />
            * 5 minutes of stretching
            <br />
            <br />
            Day 2:
            <br />
            * 20 minutes of low-impact cardio
            <br />
            * 5 minutes of gentle yoga or Pilates
            <br />
            <br />
            Day 3: Rest or light activity
            <br />
            <br />
            Day 4:
            <br />
            * 20 minutes of walking at a moderate pace
            <br />
            * 5 minutes of upper body strength exercises
            <br />
            <br />
            Day 5:
            <br />
            * 20 minutes of low-impact cardio
            <br />
            * 5 minutes of core exercises
            <br />
            <br />
            Day 6: Rest or light activity
            <br />
            <br />
            Day 7:
            <br />
            * 20 minutes of walking at a moderate pace
            <br />
            * 5 minutes of stretching
          </div>
        );
      }
      setDietChart(chart);
      setExercisePlan(exercise);
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container" style={{ height: '100vh', overflow: 'scroll' }}>
        <h2 className="center">BMI Calculator</h2>
        <form style={{ width: '50vw' }} onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </div>

          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(e) => setHeight(Number(e.target.value))} />
          </div>

          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
            <div>{message}</div>
            <div>{dietChart}</div>
            <div>{exercisePlan}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
