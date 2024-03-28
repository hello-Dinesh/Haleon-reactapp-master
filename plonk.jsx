<div className="relative overflow-hidden bg-gray-100 min-h-screen">
      <video autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 z-0">
        <source src={profilevideo} type="video/mp4" />
      </video>

      <div className="relative z-10">
        <NavBar />
        <div className="max-w-screen-2xl mx-auto rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white">
          <div className="md:col-span-1">
            {loading ? (
              <p>Loading...</p>
            ) : userData ? (
              <div className="mb-8 flex flex-col">
                <div className="mb-4 p-4 bg-white rounded-lg">
                  <img
                    src={userData.picture}
                    alt={userData.name}
                    className="w-40 h-40 mx-auto rounded-full"
                  />
                  <h3 className="text-2xl font-semibold text-center mt-4">{userData.name}</h3>
                  <p className="text-lg mb-2 font-bold text-center">{userData.localizedHeadline}</p>
                </div>

                <div className="mb-8 flex flex-col">
                  <div className="bg-white p-4 border rounded-lg flex-grow">
                    <h3 className="text-xl font-semibold mb-4">Summary</h3>
                    <p className="text-lg">
                      {showFullSummary ? userData.summary : userData.summary.slice(0, 150)}
                      {!showFullSummary && userData.summary.length > 150 && (
                        <button
                          onClick={handleToggleSummary}
                          className="text-blue-500 hover:underline focus:outline-none"
                        >
                          View More
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="md:col-span-2">
            {loading ? (
              <p>Loading...</p>
            ) : userData ? (
              <div className="mb-8 flex flex-col">
                <div className="bg-white p-4 border rounded-lg flex-grow">
                  <h3 className="text-xl font-semibold mb-4">Work Experiences</h3>
                  {userData.experiences?.map((experience, index) => (
                    <div key={index} className="mb-4 border p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h5 className="text-lg font-semibold">{experience.title}</h5>
                        <img src={experience.logo_url} alt={experience.company} className="w-16 h-16" />
                      </div>
                      <p className="text-lg">Company: {experience.company}</p>
                      <p className="text-lg">Location: {experience.location}</p>
                      <p className="text-lg">Description: {experience.description}</p>
                      {experience.starts_at && (
                        <p className="text-lg">
                          Start Date: {`${experience.starts_at.month}/${experience.starts_at.day}/${experience.starts_at.year}`}
                        </p>
                      )}
                      {experience.ends_at && (
                        <p className="text-lg">
                          End Date: {`${experience.ends_at.month}/${experience.ends_at.day}/${experience.ends_at.year}`}
                        </p>
                      )}
                      {/* Include other details as needed */}
                    </div>
                  ))}
                  {!showFullExperiences && userData.experiences && (
                    <button
                      onClick={handleToggleExperiences}
                      className="text-blue-500 hover:underline focus:outline-none"
                    >
                      View More Experiences
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto bg-white rounded-lg mt-8 p-8">
          <ProfilesList page={0} current={userId.userId} />
        </div>
      </div>
    </div>
  );