# Protected Pages
currentUser.id === apartment.user_id


# Connecting with JWT
- useRef: React hook that allows us to access elements from the DOM and persist those values between renders
  - updating a ref does not trigger a re-rendering
  - ref update is synchronous (the ref value is available right away) whereas state is asynchronous

- FormData: creates objects form fields and values to be in a format to send to our Rails API

- localStorage allows us to store key-value pairs in the form of strings and provides methods for us to retrieve, and remove tokens

  - .setItem(key, value)
  - .getItem(key)
  - .removeItem(key)
  - .clear()