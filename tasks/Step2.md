# Step 2: Selecting the number of people

## Logic

This components will be the first step for the user. It will have a title describing the step, a drop-down field where a user can select the number of participants and a button to continue to the next step.

The drop-down field's options will have to be only even numbers greater than `2`. The maximum participants will have to be accessed from the main `App` component's `state` as `maxParticipants`.

## Steps

1. Create a React component called `SelectNumber` in the `components` directory.
2. Add the necessary `state` changes to the `App` component.
3. Include the `SelectNumber` component and include it inside the `.secret-santa-app` of the main `App` component.
4. Create a Javascript array of the displayed options, bearing in mind the minimum and maximum values.
5. Create a new React template array of the `<option>` fields, iterating through the options' array.
6. Display the result using the following template; you don't need to change anything in it; only add to it:

```
<form name="participants-number">
    <h1 className="display-4">Step 1: Select the number of participants</h1>

    <div className="form-row align-items-center">
        <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" htmlFor="numberOfParticipants">Preference</label>
            <select name="numberOfParticipants" className="custom-select mr-sm-2" id="numberOfParticipants" required="required">
                <option defaultValue>Choose...</option>
            </select>
        </div>
        <div className="col-auto my-1">
            <button type="submit" className="btn btn-primary">Next</button>
        </div>
    </div>
</form>
```

## Hints

1. The following line creates an array of the numbers 0 to 9:
```
Array.from(Array(10).keys())
```

2. The `i` is an even number when `i % 2 === 0` is truthy.
3. Keep the browser's Console open, as React will be giving you advice through JS errors of what it needs to be changed.