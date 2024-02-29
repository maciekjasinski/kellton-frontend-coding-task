<h5 align="center">Kellton Frontend Coding Task by Maciej Jasiński</h5>
<h1 align="center">LEGO Minifigs Mystery Box</h1>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#case-study">Case study</a>
</p>

## How To Use

[Live DEMO](https://maciekjasinski.github.io/kellton-frontend-coding-task/)

-- OR --

Clone and run this application via Docker please use following commands:

```bash
# Clone this repository
$ git clone https://github.com/maciekjasinski/kellton-frontend-coding-task.git

# Go into the repository
$ cd kellton-frontend-coding-task

# Go into frontend directory
$ cd frontend

# Install dependencies
$ npm install

# Go back to main directory
$ cd ..

# Run the app
$ docker-compose up --build
```

> **Note:**
> For application to work properly, create an `.env` file based on `.env.example` and asign the `VITE_REBRICKABLE_API_KEY` with the value that you can get on [rebrickable.com](https://rebrickable.com/home/).

## Technologies

This frontend project leverages a modern stack of technologies and tools designed to build, test, and deploy web applications efficiently. Below is a breakdown of the key components:

### Core Libraries

- React
- TypeScript

### Development and Build Tools

- Vite
- ESLint
- Prettier
- prettier-plugin-tailwindcss
- MSW

### Styles and Design

- tailwindcss
- daisyui

### Form Handling and Validation

- formik
- yup
- libphonenumber-js

### Testing

- vitest
- @testing/library

## Case study

During development, I had to think about couple things:

- Analyze the provided API
- Storing data, about selected minifig
- Creating a fake API endpoint to which I will send data after submitting the form
- Validation

### API

I decided to use two endpoints:

- `https://rebrickable.com/api/v3/lego/minifigs/` - returns a list of figurines, using the `in_theme_id` parameter I was able to select only Harry Potter figurines
- `https://rebrickable.com/api/v3/lego/minifigs/<set_id>/parts/` - returns a list of all parts of a specific figure

### Storing data

To store the value of the selected figure, I decided to use `useContext()`. Thanks to this solution, I have access to these values ​​in elements located inside the context. This solution will also be useful if in the future when you need to store more than one figure, the entire state management system is in one place, so making changes will not be too time-consuming.

### Mocking API

For mocking, I use the [MSW](https://mswjs.io/) library, which uses the Service Worker API.
For the current scenario, I just created a simple endpoint:

```ts
  http.post('/kellton-frontend-coding-task/api/checkout', async ({ request }) => {
    const body = await request.json();
    console.log('Form data', body);
    await delay(2000);
    return HttpResponse.json({ success: true }, { status: 201 });
  }),
```

### Validation

For form validation, I decided to choose two libraries: `yup` and `libphonenumber-js`
And here I encountered some doubts resulting from the not very precise presentation of the requirements.

Validation should depend on the user's country. For example, the correct telephone number in the states is `(231) 231-2312`, and in Poland `123 123 123`. The second issue is the `state` field, which also depends on the country in which the user is located.

The current validation is prepared for the United States, but it could be extended by adding the `country` field and then using it to validate the phone number or decide whether the `state` field should be available to the user. After introducing such a solution, it would be possible to use autocomple for fields such as `city`, `state` and `zip code`, which would suggest to the user the options that he or she can select after selecting a given country.

Validation checks whether all fields have been completed and the correctness of the data provided. However, I extended the validation for the email address, it is tested using `regex`, and the date of birth is only valid if the user is at least 18 years old
