# codewars_projects

My solutions to [Codewars](https://www.codewars.com) katas, mostly in JavaScript with a few in PHP.

Each kata lives in its own file, named after the kata. Most files end with a few `console.log` calls that print the result next to the expected value, so you can run them directly.

## Layout

```
.
├── *.js     JavaScript solutions
├── php/     PHP solutions
└── test/    Mocha + Chai tests for some of the katas
```

## Running

Run a single solution:

```bash
node fizzbuzz.js
```

```bash
php php/opposite.php
```

Run the tests:

```bash
npm install
npm test
```

Only some katas have tests: `duplicates`, `easyBalanceChecking`, `getEvenNumbers`, `meeting`, `oddCount`, `whichAreIn` and `willThereBeEnoughSpace`. Those solutions export their function with `module.exports` so the tests can import them.

## Katas

**JavaScript**

| Kata | File |
|---|---|
| Array.diff | [`Array_diff.js`](Array_diff.js) |
| Abbreviate a Two Word Name | [`abbrevName.js`](abbrevName.js) |
| Buying a car | [`buying_a_car.js`](buying_a_car.js) |
| Clock in Mirror | [`clock_in_mirror.js`](clock_in_mirror.js) |
| Counting Duplicates | [`counting_duplicates.js`](counting_duplicates.js) |
| Disemvowel Trolls | [`disemvowel.js`](disemvowel.js) |
| Dubstep | [`dubstep.js`](dubstep.js) |
| Duplicates | [`duplicates.js`](duplicates.js) |
| Easy Balance Checking | [`easyBalanceChecking.js`](easyBalanceChecking.js) |
| Even or Odd | [`even_or_odd.js`](even_or_odd.js) |
| Exes and Ohs | [`exes_and_ohs.js`](exes_and_ohs.js) |
| List Filtering | [`filter_list.js`](filter_list.js) |
| FizzBuzz | [`fizzbuzz.js`](fizzbuzz.js) |
| Floating-point Approximation (I) | [`floating_point_approximation_1.js`](floating_point_approximation_1.js) |
| Friend or Foe? | [`friend_or_foe.js`](friend_or_foe.js) |
| Filter out the geese | [`geese_filter.js`](geese_filter.js) |
| Get even numbers | [`getEvenNumbers.js`](getEvenNumbers.js) |
| Get the Middle Character | [`getMiddle.js`](getMiddle.js) |
| Is the string uppercase? | [`isUpperCase.js`](isUpperCase.js) |
| Linked Lists - Length & Count | [`linkedlist_length_count.js`](linkedlist_length_count.js) |
| Meeting | [`meeting.js`](meeting.js) |
| Write Number in Expanded Form | [`number_in_expanded_form.js`](number_in_expanded_form.js) |
| Count odd numbers below n | [`oddCount.js`](oddCount.js) |
| Detect Pangram | [`pangram.js`](pangram.js) |
| Printer Errors | [`printer_errors.js`](printer_errors.js) |
| Reduce but Grow | [`reduce_but_grow.js`](reduce_but_grow.js) |
| Exclamation marks series #6 | [`remove_exclamation_marks6.js`](remove_exclamation_marks6.js) |
| Scramblies | [`scramblies.js`](scramblies.js) |
| Series Sum | [`SeriesSum.js`](SeriesSum.js) |
| Simple Pig Latin | [`simple_pig_latin.js`](simple_pig_latin.js) |
| Sum Arrays | [`sum.js`](sum.js) |
| Sum Strings as Numbers | [`sumStrings.js`](sumStrings.js) |
| Tortoise racing | [`tortoise_racing.js`](tortoise_racing.js) |
| Tribonacci Sequence | [`tribonacci.js`](tribonacci.js) |
| Two to One | [`Two-to-one.js`](Two-to-one.js) |
| Unlucky Days | [`unlucky_days.js`](unlucky_days.js) |
| Valid Braces | [`valid_braces.js`](valid_braces.js) |
| Which are in? | [`whichAreIn.js`](whichAreIn.js), [`which_are_in.js`](which_are_in.js) |
| Will there be enough space? | [`will_there_be_enough_space.js`](will_there_be_enough_space.js) |
| Your order, please | [`your-order-please.js`](your-order-please.js) |

**PHP**

| Kata | File |
|---|---|
| Complementary DNA | [`php/complementaryDNA.php`](php/complementaryDNA.php) |
| Opposite number | [`php/opposite.php`](php/opposite.php) |
| Vowel Count | [`php/vowels_count.php`](php/vowels_count.php) |
