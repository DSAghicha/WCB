# Question
You are Sweety Gupta, Parshuram's elder daughter and Guddu's wife. Kalen bhaiya has asked Parshuram to close down and hide some case files of Munna’s murder and save it in safe place.Parshuram hide those case files in a document with password but couldn’t toggle the visibility of it.he asked you for the help. Being Sweety Gupta write a Javascript program to toggle the visibility of the password with a button aside when clicked toggle’s the visibility of it.
# Answer
I have used the `add` & `remove` properties of the classList property.

Basically, when Parshuram clicks on the eye button beside the input field, I changed the **type** attribute of input field from password to text and added class `hidden` to the *slashed eye icon* and removed the class `hidden` from the *eye icon*.

Similarly, when Parshuram clicks on the slashed eye button beside the input field, I changed the **type** attribute of input field from text to password and added class `hidden` to the *eye icon* and removed the class `hidden` from the *slashed eye icon*.
