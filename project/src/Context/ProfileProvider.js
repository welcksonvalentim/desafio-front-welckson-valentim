import ProfileContext from "./ProfileContext";

function ProfileProvider({ children }) {
  return (
  <ProfileContext.Provider>
    { children }
  </ProfileContext.Provider>
  )
}

export default ProfileProvider;