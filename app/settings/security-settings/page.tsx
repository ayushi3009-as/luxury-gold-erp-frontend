export default function SecuritySettings() {
  return (
    <div className="p-8 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Security Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage account security and permissions
        </p>
      </div>



      {/* Security Cards */}

      <div className="grid grid-cols-2 gap-6">


        {/* Password */}

        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold text-white">
            Change Password
          </h2>

          <p className="text-gray-400 mt-2">
            Update your account password regularly
          </p>


          <button className="mt-5 bg-blue-600 px-5 py-2 rounded-lg text-white">
            Change Password
          </button>

        </div>




        {/* Two Factor */}

        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold text-white">
            Two Factor Authentication
          </h2>

          <p className="text-gray-400 mt-2">
            Add extra protection to your account
          </p>


          <button className="mt-5 bg-green-600 px-5 py-2 rounded-lg text-white">
            Enable 2FA
          </button>

        </div>




        {/* Login Activity */}

        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold text-white">
            Login Activity
          </h2>

          <p className="text-gray-400 mt-2">
            Check recent account login history
          </p>


          <button className="mt-5 bg-purple-600 px-5 py-2 rounded-lg text-white">
            View Activity
          </button>

        </div>




        {/* Permissions */}

        <div className="bg-gray-900 p-6 rounded-xl">

          <h2 className="text-xl font-bold text-white">
            Role Permissions
          </h2>

          <p className="text-gray-400 mt-2">
            Manage user access permissions
          </p>


          <button className="mt-5 bg-orange-600 px-5 py-2 rounded-lg text-white">
            Manage Roles
          </button>

        </div>


      </div>


    </div>
  );
}