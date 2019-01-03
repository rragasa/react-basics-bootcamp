# Step 4: The matching

## Logic

This component will display a table with the pairs of offerers and recepients of the Secret Santa gifts. The names should be shuffled and then paired and each selection of a recepient should be random.

## Steps

1. Create a React component called `Matches` in the `components` directory.
2. Include the `Matches` component and include it inside the `.secret-santa-app` of the main `App` component, which will be displayed in the proper step.
3. During the component's life-cycle event `componentDidMount`, shuffle the `names` array using the "Fisher-Yates Shuffle" algorithm (see below) and create two new arrays, `offer` and `receive`, which will include the appropriate people. A name can exist only once in an array. Both these two new arrays should be stored in this component's `state`.
4. Create a new JSX template array called `matches`, which will have the following DOM example. The first `<td>` shows the offerer and the second shows the recepient. The number `<th>` should be just a plain enumeration (starting at 1).

```
<tr>
    <th scope="row">1</th>
    <td>Mike Pinns</td>
    <td>Maria Petrou</td>
</tr>
```

5. Add the above to the main returned template:

```
<React.Fragment>
    <h1 className="display-4">Step 3: The matches!</h1>

    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Offers</th>
                <th scope="col">Receives</th>
            </tr>
        </thead>
        <tbody>
            <!-- Display the matches here. -->
        </tbody>
    </table>
</React.Fragment>
```

## Fisher-Yates Shuffle algorithm

```
shuffle = array => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};
```

## Hints

1. The Array methods `.pop()` and `.push()` are good to know.
2. A `while` could help, but if a name exists twice, it could result to an endless loop. So, prevent duplicate names.
3. An offerer and a recepient of the same match cannot be the same person.