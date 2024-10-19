import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
	<div className="w-full">
		<div className=" mx-auto w-11/12 max-w-maxContent">
		<h1 className="mb-10 mt-2   text-3xl font-medium text-richblack-5">
			Edit Profile
		</h1>
		{/* Change Profile Picture */}
		<ChangeProfilePicture />
		{/* Profile */}
		<EditProfile />
		{/* Password */}
		<UpdatePassword />
		{/* Delete Account */}
		<DeleteAccount />
		</div>
	</div>
  )
}