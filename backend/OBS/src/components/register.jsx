export default function Register() {
    return <>

    <div className="container w-screen h-screen bg-gray-200">
      <h1 className="text-3xl text-center font-semibold pt-[20px]">Registration</h1>
      <div className="flex justify-center items-center h-4/5">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">Register</button>
            </div>
            <div className="text-center">
                  <a href="/login" className="text-blue-500">Login</a>
            </div>
          </form>
        </div>
    </div>
  </div>
  </>
}