# Introduction into Unit Testing With Jasmine

## Setup:
1. In your terminal, run `npm install -g jasmine` to install jasmine globally
1. Fork/clone this Repo.
1. `cd` into the `src` folder.
1. `cd` into the `01_addition` folder.
1. run `jasmine init` to create the jasmine spec folders.
  * We will look and see what this is doing soon.
1. In your terminal, run `touch testing_addition.spec.js`
  * We will look and see how the `.spec` file tag is being read soon.
1. Open your text editor
  * (if using atom) in your terminal run `atom .`

## Exercises:

> The Objective of these exercises is to Learn how to write Tests using TDD in the Jasmine Test-Framework.

> A basic knowledge of JavaScript functions will make the process of learning how to test easier.

#### #1 Addition:

Create a function that takes 2 arguments, the function should return the value of those 2 arguments added together

#### #2 Subtraction:

Create a function that takes 2 arguments, the function should return the value of those 2 arguments subtracted from each other

#### #3 Multiplication:

Create a function that takes 2 arguments, the function should return the value of those 2 arguments multiplied with each other.

#### #4 Is_Divisible:

Create a function that takes 2 arguments, the function should return the value of the arguments Divided by the other.

#### #5 Hello_World:

Create a function that takes an argument
  * It should return a string of "Hello, World!" if the argument is empty.
  * It should return a string of "Hello, ${argument}!" if the argument is a string.

#### #6 FizzBuzz:

Create a function that takes an argument
  * The function should return "Fizz" if the argument is divisible by 3.
  * The function should return "Buzz" if the argument is divisible by 5.
  * The function should return "Buzz" if the argument is divisible by both 3 *AND* 5
