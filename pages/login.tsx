import { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import firebase, { FirebaseApp } from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'

export default function Login() {
  let app: FirebaseApp
  let [state, setState] = useState('authenticating')

  useEffect(() => {
    let firebaseConfig = {
      apiKey: 'AIzaSyAXX4G4xSLAwfIgR8vOsgYQOq9or0Jmmyo',
      authDomain: 'test-3fb7f.firebaseapp.com',
      databaseURL: 'https://test-3fb7f.firebaseio.com',
      projectId: 'test-3fb7f',
      storageBucket: 'test-3fb7f.appspot.com',
      messagingSenderId: '197704559138',
      appId: '1:197704559138:web:f373ec99c0218a774ff87b',
      measurementId: 'G-HP7G1FS9FN'
    }
    // Initialize Firebase
    // eslint-disable-next-line react-hooks/exhaustive-deps
    app = !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app()

    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        setState('authenticated')
      } else {
        setState('anonymous')
      }
    })
  })

  function logout() {
    firebase.auth().signOut()
  }

  return (
    <div className="flex flex-col flex-1 py-12 -mt-px bg-gray-100 border-t border-gray-200 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
          Sign in
        </h2>
      </div>

      {state === 'authenticating' ? (
        <p>Checking auth status...</p>
      ) : state === 'authenticated' ? (
        <div>
          <p>Hi Krimo :)</p>
          <button onClick={logout}>Log out</button>
        </div>
      ) : state === 'anonymous' ? (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                await app
                  .auth()
                  .signInWithEmailAndPassword(values.email, values.password)
              }}
            >
              {() => (
                <Form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <Field
                        id="email"
                        name="email"
                        autoComplete="username"
                        type="email"
                        required
                        className="block px-3 py-2 w-full placeholder-gray-400 rounded-md border border-gray-300 transition duration-150 ease-in-out appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <Field
                        id="password"
                        type="password"
                        name="password"
                        required
                        autoComplete="current-password"
                        className="block px-3 py-2 w-full placeholder-gray-400 rounded-md border border-gray-300 transition duration-150 ease-in-out appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="flex px-4 py-2 w-full text-sm font-medium text-white bg-blue-600 rounded-md border border-transparent transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                      >
                        Sign in
                      </button>
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <p>Unknown state</p>
      )}
    </div>
  )
}
