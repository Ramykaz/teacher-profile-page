import React from "react";
import "./TeacherProfile.css";
import CourseCard from "./CourseCard";
import Footer from "./Footer";
import {
  FaBookOpen,
  FaUserCircle,
  FaVideo,
  FaChalkboardTeacher,
  FaPlayCircle,
} from "react-icons/fa";

const TeacherProfile = () => {
  const teacherData = {
    name: "Fatima Ahmed",
    subject: "Qur'an and Arabic Studies",
    tagline:
      "Passionate and experienced in making Qur'an and Arabic learning accessible and engaging for all.",
    bio: "Assalamu Alaikum! I am Fatima, a dedicated teacher with over 5 years of experience in guiding students of all ages through the beautiful journey of Qur'an recitation, Tajweed, and the Arabic language. My teaching philosophy centers on creating a supportive and interactive environment where students feel empowered to learn and grow. I focus on practical application and a deep understanding of the concepts, ensuring that learning is not just about memorization but also about connection and appreciation.",
    videoIntroUrl: "https://placehold.co/560x315/EBF0F5/333333?text=Teacher+Intro+Video",
    videoThumbnailUrl: "https://placehold.co/560x315/A9CCE3/FFFFFF?text=Click+to+Play",
    courses: [
      {
        id: 1,
        title: "Beginner's Tajweed",
        description:
          "Learn the fundamental rules of Tajweed for proper Qur'an recitation.",
        duration: "8 weeks",
        thumbnailUrl: "https://placehold.co/300x180/D6EAF8/333333?text=Tajweed",
      },
      {
        id: 2,
        title: "Arabic Language for Beginners",
        description:
          "Master the Arabic alphabet, basic vocabulary, and simple sentence structures.",
        duration: "10 weeks",
        thumbnailUrl: "https://placehold.co/300x180/A9DFBF/333333?text=Arabic",
      },
      {
        id: 3,
        title: "Qur'an Memorization (Juzz Amma)",
        description:
          "Guided memorization of the last Juzz of the Qur'an with meaning.",
        duration: "12 weeks",
        thumbnailUrl: "https://placehold.co/300x180/F5B7B1/333333?text=Hifz",
      },
    ],
  };

  const handleBookSession = () => {
    alert("Book a session button clicked!");
  };

  const handlePlayVideo = () => {
    alert("Play video clicked! (Implement video player display)");
  };

  return (

    <>
      <div className="teacher-profile-page-wrapper"> {/* Optional wrapper */}
        <div className="teacher-profile-container">
          <section className="profile-intro-section">
            <div className="intro-content">
              <h1>{teacherData.name}</h1>
              <h2>
                <FaBookOpen className="icon-before-text" /> {teacherData.subject}
              </h2>
              <p className="intro-tagline">{teacherData.tagline}</p>
              <button className="book-session-button" onClick={handleBookSession}>
                Book a Session
              </button>
            </div>
            <div className="intro-video-wrapper" onClick={handlePlayVideo}>
              <img
                src={teacherData.videoThumbnailUrl}
                alt="Teacher introduction video thumbnail"
                className="video-thumbnail"
              />
              <FaPlayCircle className="play-icon" />
            </div>
          </section>

          <section className="profile-detailed-bio">
            <h3>
              <FaUserCircle className="icon-before-text" /> About Me
            </h3>
            <p>{teacherData.bio}</p>
          </section>

          <section className="profile-courses">
            <h3>
              <FaChalkboardTeacher className="icon-before-text" /> My Courses
            </h3>
            <div className="courses-list">
              {teacherData.courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  thumbnailUrl={course.thumbnailUrl}
                />
              ))}
            </div>
          </section>
        </div> {/* End of teacher-profile-container */}
      </div> {/* End of teacher-profile-page-wrapper */}
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default TeacherProfile;
