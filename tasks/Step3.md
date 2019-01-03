# Step 3: Inputting people's names

## Logic

This component will be the user's second step, where they should provide people's names. They will be navigated here once they have clicked "Next" during the previous step. This component will be rendering a form with as many user input fields as the number selected in the previous step.

Only one component can be displayed at a time. A flag in the `App` component's `state` (`step`) should always describe which step the user is currently at, in order for the correct component to be displayed.

Another flag (`selectedParticipants`) in the `App` component's `state` should store the user's selection of the first step and the function which handles the form's submission should prevent the default logic of a page reload, update the necessary flags and finally, update the `state`'s flag `step`, which keeps the user's current step. This function should do something only when there is a selection.

## Steps

1. Create a React component called `Participants` in the `components` directory.
2. Include the `Participants` component and include it inside the `.secret-santa-app` of the main `App` component.
3. Based on the `selectedParticipants` value, create an array of JSX input templates, which will be added to the main template. The input template to be iterated is the following. The `name` and something else necessary for React are missing from this.

```
<div className="col-sm-6">
    <input type="text" className="form-control" placeholder="Name" autoComplete="off"
    maxLength="75" required="required" pattern="^[A-Za-z -]+$" />
</div>
```

4. Add this new JSX template Array to the main template and return it:

```
<form name="participants-names">
    <h1 className="display-4">Step 2: Who are they?</h1>

    <div className="row">
        <!-- The participants should be displayed here. -->
    </div>

    <button type="submit" className="btn btn-primary">Next</button>
</form>
```

5. When the user clicks "Next", then the `step` should adjust accordingly and the people's names should be collected and added to an array in the `App` component's `state` called `names`.

## Hints

1. A function runs on form's submission when in the `onSubmit` event.
2. The following component will show only when the `cheeky` statement is truthy:

```
{cheeky && <AmazingComponent />}
```
3. A form's submission doesn't do something, including reloading a page, when its default action is prevented. Javascript has the `event.preventDefault()` API for this, where the `event` is the default argument of a function running on submit.